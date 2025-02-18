const tambahkan = document.getElementById('tambahkan');
const ol = document.getElementById('orderedlist');
const inputtext = document.getElementById('inputtext');
const hapusi = document.getElementsByTagName('i')[0];
const divp = document.querySelector('.p');
tambahkan.addEventListener('click', function(){

    if (inputtext.value == ''){
        const divp = document.querySelector('.p')
        const peringatan = document.createElement('p');
        const textp = document.createTextNode('Ketik Sesuatu');
        peringatan.appendChild(textp);
        peringatan.setAttribute('class', 'pbaru')
        divp.appendChild(peringatan)
        setTimeout(() => {
            peringatan.style.display = "none";
        }, 500)
 
    } else {
        //buat newli
        const newli = document.createElement('li');
        const textli = document.createTextNode(inputtext.value);
        newli.setAttribute('class', 'buttonDesc')
        newli.appendChild(textli);
        ol.appendChild(newli);
        //buat newbutton
        const newbtn = document.createElement("button");
        const textbtn = document.createTextNode("+")
        newbtn.setAttribute('class', 'newbtn')
        newbtn.appendChild(textbtn);
        newli.appendChild(newbtn)
        
        const newhapus = document.createElement('button')
        const newhapustextnode = document.createTextNode('X')
        newhapus.setAttribute('class', 'newhapus');
        newhapus.appendChild(newhapustextnode)
        ol.appendChild(newhapus)

        //buat accordion dekripsi kegiaatan
        let countnewbtn = 0;
        newbtn.addEventListener('click', function(){
            countnewbtn = countnewbtn + 1;
            // console.log(countnewbtn)
            let ganjil = countnewbtn % 2;
            // console.log(ganjil)
            let genap = countnewbtn % 2;
            // console.log(genap)
                if (ganjil == 1){
                    const containerpanel = document.createElement('div');
                    const pdesc = document.createElement('p');
                    const inp = document.createElement('input');
                    const btnclick = document.createElement('button');
                    btnclick.setAttribute('class', 'tmbhkandesc');
                    const btnnode = document.createTextNode('+')
                    btnclick.setAttribute('class', 'btnclick');
                    btnclick.appendChild(btnnode)
                    inp.setAttribute('placeholder', 'Dekripsi kegiatan')
                    inp.type = "text";
                    inp.setAttribute('class', 'inp')
                    pdesc.appendChild(containerpanel);
                    inp.appendChild(containerpanel);
                    btnclick.appendChild(containerpanel);
                    newli.after(btnclick)
                    newli.after(inp)
                    btnclick.addEventListener('click', function(){
                        if(inp.value == ''){
                            inp.setAttribute('placeholder', 'ketik, buat ginian capek')
                            setTimeout(() => {
                                inp.setAttribute('placeholder', '')
                            }, 1000); 
                        }
                    })


                        let counting = 0;
                        btnclick.addEventListener('click', function(){
                            counting = counting + 1;

                            let cgaanjil = counting % 2;
                            console.log(cgaanjil)
                            let cgeenap = counting % 2;
            
                            if (cgaanjil == 1){
                            const divdesclist = document.createElement('div');
                            divdesclist.setAttribute('class', 'divdesc')
                            const pdesclist = document.createElement('p');
                            divdesclist.appendChild(pdesclist);
                            pdesclist.textContent = inp.value
                            divdesclist.after('newbtn')
                            inp.value = '';
                            document.getElementsByClassName('inp')[0].before(divdesclist)
                            }
                            // let divdesclist = document.getElementsByClassName('divdesclist');    
                            else if (cgeenap == 0) {
                                console.log(document.getElementsByClassName('divdesc')[0])
                                document.getElementsByClassName('divdesc')[0].remove()
                            }
                        })


                        inp.addEventListener('keypress', function(event){
                            if (event.key === 'Enter'){
                                btnclick.click()
                            }
                        })
                    
                }
                else if (genap == 0){
                    document.getElementsByClassName('inp')[0].remove()
                    document.getElementsByClassName('btnclick')[0].remove()
                    document.getElementsByClassName('divdesc')[0].remove()
                    
                }
        })

        const div = document.createElement('div');
        div.setAttribute('class', 'description')
        newli.after(div)
        hapusi.remove()
        inputtext.value="";

        
        newli.onclick = function (){
            newli.style.color = '#998d8d'
        }

        let countclick = 0;
        const originalcolor = newli.style.color;
        newli.addEventListener('click', ()=>{
            countclick = countclick + 1;
            let genap = countclick % 2
            if (genap == 0 ){
                newli.style.color = originalcolor;
            }
        })

        } 
        

})


inputtext.addEventListener('keypress',function(event){
    if (event.key === 'Enter') {
        event.preventDefault();
        tambahkan.click()
    }
})

const hapus = document.getElementsByClassName('newhapus')[0];
hapus.addEventListener('click', function(){
    console.log('hapus diklik')
})









