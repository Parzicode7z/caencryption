// Welcome to my firs js experience.
// For my little dream.

const charlie = ["a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z"];
const bigCharlie = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"]
const textarea = document.getElementById('desc');

function isUpperCase(str) {
    return str === str.toUpperCase();
}

function enCrypt(endec, enco = 1, array) { // Encrypt mode if endec true, if isn't it decrypt mode.
    let charray = []; // Encrypted data will be inside this array.

    for (i = 0; i < array.length; i++) {
       if (array[i] == " ") {
            charray.push(" "); 
            continue;
        }else if (!bigCharlie.includes(array[i]) && !charlie.includes(array[i])) {
            charray.push(array[i]);
            continue;
        };
        
        let b = Number;

        if (isUpperCase(array[i])) {
            b = bigCharlie.indexOf(array[i]);
        }else{
            b = charlie.indexOf(array[i]);
        };

        if (endec == true) {
            b += enco;
        }else {
            b -= enco;
        };
    
        if (b > 28 || b < -28) b %= 29;
        
        if (b < 0 && b != (-0)) b += 29;

        //console.log(b)

        if (isUpperCase(array[i])) {
            charray.push(bigCharlie[b]);
        }else{
        charray.push(charlie[b]);
        }

        //console.log(charray);
    };
    return charray.join("");
};

//enCrypt(false, 3, "ÖğtJçdç");
// Şifrelenecek veriyi girme kısmına tıklayınca placeholderi yok edecek.
textarea.addEventListener('focus', function() {
    this.placeholder = '';
});

textarea.addEventListener('blur', function() {
    if (this.value === '') {
        this.placeholder = 'Şifrelenecek veriyi girin.'; // İsterseniz varsayılan placeholder'ı geri ekleyebilirsiniz.
    }
});

function showData(ed) {
    let array = ((document.getElementById("desc")||{}).value)||"";
    let slidecount = ((document.getElementById("quantity")||{}).value)||"";

    //console.log(array,"|",slidecount);
    //console.log(typeof(slidecount))

    if (slidecount == "" || array == "" || (slidecount == "" && array == "")) {
        alert("Lütfen parametreleri doğru bir şekilde giriniz!");  
    }else{
        if (ed == true) {
            //console.log(enCrypt(ed,Number(slidecount), String(array)));
            document.getElementById("#showdata").textContent = enCrypt(ed,Number(slidecount), String(array));
        }else{
            document.getElementById("#showdata").textContent = enCrypt(ed,Number(slidecount), String(array));
        };
    };
};