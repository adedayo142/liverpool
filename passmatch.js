const password = getElementById('password')
const rpassword = getElementById('passwordConf')
const formElement = getElementById('form')
const errorElement = getElementById('error')

form.addEvenListener('submit', (e) => {
    let messages = []
    if(password.value != rpassword.value)
    {
        messages.push("password don't match")
    }
    if(password.value.length < 6 && rpassword.value.length < 6)
    {
        messages.push("password must be more than six characters")
    }
    if(password.value === "password")
    {
        messages.push("password cannot be password")
    }

    if(messages.length > 0)
    {
        e.preventDefault()
        errorElement.innerText = messages.join(",")
    }
}
)