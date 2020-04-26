let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

//splits the story into individual words
const storyWords = story.split(' ');

//counts how many words in a story 
//console.log(storyWords.length)

                                     
let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//checks storywords to see if it does not include unnecessary words in the story and saves to a variable better words

const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word) 
)

let reallyCount = 0
let veryCount = 0
let basicallyCount = 0
//iterates through each string and reports back any overused words
for (word of storyWords) {
if (word === 'really') {
    reallyCount+= 1
} else if (word === 'very') {
      veryCount+= 1
} else if (word === 'basically') { 
    basicallyCount+= 1
    }
    }
//console.log(reallyCount)
//console.log(veryCount)

let periodCount = 0
let dotCount = 0

//iterates through each last index of a string in the storywords and counts the sentences. 
let sentences = 0;
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
});
//log the word count, sentences, and overused word count. 

console.log('sentences count: ' + sentences)
console.log('word count: ' + storyWords.length)
console.log('Really count: '+ reallyCount)
console.log('Very count: ' + veryCount)
console.log('Basically count: ' + basicallyCount)

// joins the string to become one single string 
console.log(betterWords.join(' '))
