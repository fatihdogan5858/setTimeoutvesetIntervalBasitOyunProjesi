const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value)

    if (e.key === "Enter") {/**eğer bazstığımız tuşun key i enter ise */
        
        /**settimeout ve setınterval ikiside belirli bir zamansüre içinde gerçekleşir farkı ise settimeout  tekseferlik  setınterval tekrar eden */
        setTimeout(()=> {/** */
        e.target.value =""
        }, 10) /**10 mili saniyede bu olay gerçekleşsin */
        randomSelect() /**bu işlemi yapınca random selecti döndürsün */
}

})

function createTags(input) {
    // console.log(input)
    const tags = input
        .split(',') /**split bölme işlemi gibi string ifadeyi bir arraye diziye çevirir */
        .filter((tag) => tag.trim() !== "") /**.filter :dizi içinden yeni bir dizi döndürür */
        .map((tag) => 
            tag.trim())/**map filter ile dönüştürülen diziyi yeni bir diziye dönüştüryor*/
        
        // console.log(tags)
    tagsEl.innerHTML = ""/**ilk başta boş */
    tags.forEach((tag) => {
        const tagEl = document.createElement("span")
        tagEl.classList.add("tag")
        tagEl.innerHTML = tag
        tagsEl.appendChild(tagEl)
    });
}


function randomSelect() {
    // console.log(123)
    const times = 30
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highLightTag(randomTag) /** gelecek random tagler buraya gelsin */

        setTimeout(() => {
            unHighlightTag(randomTag)
        },100) /**setTimeout 100mili saniyede gerçekleşsin */
    },100)/**setInterval 100mili saniyede gerçekleşsin */


//////48. satırdan sonra
setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
        const randomTag = pickRandomTag()
        highLightTag(randomTag)
    }, 100)
}, times*100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}
function highLightTag(tag) {

    tag.classList.add('highlight')

}
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}