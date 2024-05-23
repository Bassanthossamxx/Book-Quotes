
var Quotes = 
[
    {
'author' : 'Oscar Wilde',
'quote': 'Be yourself; everyone else is already taken.'
    },
    {
        'author' : 'Dr. Seuss',
        'quote': 'You know you are in love when you canot fall asleep because reality is finally better than your dreams.'
            },
            {
                'author' : 'Mae West',
                'quote': 'You only live once, but if you do it right, once is enough.'
                    },
                    {
                        'author' : 'Mahatma Gandhi',
                        'quote': 'Be the change that you wish to see in the world.'
                            },
                            {
                            'author' : 'Mark Twain',
                        'quote': 'If you tell the truth, you donot have to remember anything.'
                            }
];
function Quote(){
    var random = Math.floor(Math.random() * Quotes.length);
    document.getElementById('quote').innerHTML = `"${Quotes[random].quote}"`;
    document.getElementById('author').innerHTML = `-${Quotes[random].author}`;
}


