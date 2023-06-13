let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{
    quote: `All that we are is the result of what we have thought.`,
    person:`Buddha`
},{
    quote: `"That is one small step for a man, one giant leap for mankind."`,
    person:`Neil Armstrong`
},{
    quote: `"The journey of a thousand miles begins with one step."`,
    person:`Lao Tzu`
},{
    quote: `“Nothing in life is promised except death.” `,
    person:`Kanye West`
},{
    quote: `“When writing the story of your life, donot let anyone else hold the pen.”`,
    person:` Drake`
},{
    quote: `“Strength is not always shown in what you can hold on to, sometimes it is shown in what you can let go of.”`,
    person:`Drake`
},{
    quote: `“When something is important enough, you do it even if the odds are not in your favor.”`,
    person:`Elon Musk`
},{
    quote:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    person:`Bernard M. Baruch `
},{
    quote:`“You only live once, but if you do it right, once is enough.”`,
    person:`Mae West`
},{
    quote:`“Success is not final, failure is not fatal: it is the courage to continue that counts.”`,
    person:`Winston S. Churchill`
},{
    quote:`"It is far better to be alone, than to be in bad company."`,
    person:`George Washington`
},{
    quote: ` “Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.”`,
    person:`Will Ferrell`
}
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length)
   quote.innerText = quotes[random].quote;
   person.innerText = quotes[random].person;
})