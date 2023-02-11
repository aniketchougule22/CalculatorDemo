try 
{
    let string = "";
    let buttons = document.querySelectorAll('.button');
    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML == '=') 
            {
                string = eval(string)
                document.querySelector('input').value = string
            } 
            else if(e.target.innerHTML == 'AC') 
            {
                string = "";
                document.querySelector('input').value = string
            } 
            else if(e.target.innerHTML == 'C') 
            {
                let val = document.querySelector('.input').value;
                document.querySelector('.input').value = val.slice(0, -1);
                // removeVar.remove();
                string = document.querySelector('.input').value
            } 
            else if(e.target.innerHTML == '') 
            {
                string = "";
                document.querySelector('input').value = string
            } 
            else 
            {
                console.log('e.target', e.target);
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        })
    });
} 
catch (error) 
{
    console.log('error', error);
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
}
