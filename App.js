let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
    {
        quote: '"If you are depressed, you are living in the past. If you are anxious, you are living in the future. if you are at peace, you are living in the present."',
        person: ' — Lao Tzu '  
    },
    {
        quote: '"The secret of perfect health lies in keeping the mind always cheerful - never worried, never hurried, never borne down by any fear, thought or anxiety."',
        person: ' — Sathya Sai Baba'
    },
    {
        quote: '"Our anxiety does not empty tomorrow of its sorrows, but only empties today of its strengths"',
        person: ' — Charles Spurgeon'
    },
    {
        quote: '"To be in harmony with the wholeness of things is not to have anxiety over imperfections."',
        person: ' — Dogen'
    },
    {
        quote: '"Anxiety is the dizziness of freedom."',
        person: '— Soren Kierkegaard'
    },
    {
        quote: '"Men are anxious to improve their circumstances but are unwilling to improve themselves; they therefore remain bound."',
        person: '— James Allen'
    }
]

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})
