const text = document.querySelector(".quoteContainer h3")
const btn = document.querySelector("#btn")

const changeTheText = () => {
    return text.innerHTML = quote[Math.floor(Math.random()*10)]
}

btn.addEventListener("click", changeTheText)



const quote = {
    1: `Coding like poetry should be short and concise. ― Santosh Kalwar`,
    2: `It's not a bug; it's an undocumented feature. ― Anonymous`,
    3: `First, solve the problem. Then, write the code. - John Johnson`,
    4: `Code is like humor. When you have to explain it, it's bad. - Cory House`,
    5: `Make it work, make it right, make it fast. - Kent Beck`,
    6: `Clean code always looks like it was written by someone who cares. — Robert C. Martin`,
    7: `Of course, bad code can be cleaned up. But it's very expensive.” — Robert C. Martin`,
    8: `Programming is the art of algorithm design and the craft of debugging errant code. - Ellen Ullman`,
    9: `Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning. ― Rick Cook`,
    0: `Any fool can write code that a computer can understand. Good programmers write code that humans can understand. ― Martin Fowler`
}