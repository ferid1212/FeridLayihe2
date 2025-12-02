let btnAdd = document.querySelector(".add .span-add");
let main = document.querySelector(".main");
let inp = document.querySelector("input");
let lbl = document.querySelector("label");
let contain = document.createElement("div");
let newDiv = document.querySelector(".newElementDiv");
let plus = document.querySelector(".plus");
let list = document.createElement("ul");
let xBtn = document.querySelector(".X-btn");
let sort1 = document.querySelector(".sort-bottom");

list.style.listStyleType = "none";
newDiv.appendChild(contain);
contain.appendChild(list);

let counter = 0;
let ascending = true;


sort1.addEventListener("mouseenter", () => {
    if (ascending) {
        sort1.src = "./scc.img/Group 73.svg";
    } else {
        sort1.src = "./scc.img/Group 91.svg";
    }
});

sort1.addEventListener("mouseleave", () => {
    if (ascending) {
        sort1.src = "Group 74.svg";
    } else {
        sort1.src = "Group 90.svg";
    }
});


btnAdd.addEventListener("click", () => {
    counter++;

    contain.style.width = "286px";
    contain.style.minHeight = "43.5px";
    contain.style.borderRadius = "10px";
    contain.style.border = "1px solid #c4c4c4";
    contain.style.marginTop = "42px";
    contain.style.paddingTop = "10px";
    contain.style.paddingLeft = "30px";
    contain.style.marginLeft = "20px";
    contain.style.display = "block";

    lbl.style.display = "none";

    let newLi = document.createElement("li");
    let img = document.createElement("img");
    let span = document.createElement("span");

    span.classList.add("newSpan");
    span.dataset.id = counter;
    span.textContent = span.dataset.id + ". " + inp.value;

    inp.value = "";

    list.appendChild(newLi);
    newLi.appendChild(span);
    newLi.appendChild(img);

    img.src = "./scc.img/Group 77.svg";
    img.style.position = "absolute";
    img.style.right = "10px";
    img.style.bottom = "10px";
    img.style.cursor = "pointer";
    newLi.style.position = "relative";
    newLi.style.paddingBottom = "10px";

    
    img.addEventListener("click", () => {
        newLi.remove();
        if (list.children.length == 0) {
            lbl.style.display = "block";
            xBtn.style.display = "none";
            contain.style.display = "none";
        }
    });

    img.addEventListener("mouseenter", () => {
        img.src = "./scc.img/Group 70.svg";
    });

    img.addEventListener("mouseleave", () => {
        img.src = "./scc.img/Group 77.svg";
    });
});

plus.addEventListener("click", () => {
    lbl.style.display = "block";
    xBtn.style.display = "none";
});


sort1.addEventListener("click", () => {
    let spans = document.querySelectorAll("li span");
    let items = [];

    spans.forEach(sp => {
        let val = sp.textContent.split(". ")[1];
        let id = sp.dataset.id;
        items.push({ id: id, value: val });
    });

    items.sort((a, b) => {
        let aNum = Number(a.value);
        let bNum = Number(b.value);

        if (!isNaN(aNum) && !isNaN(bNum)) {
            return ascending ? aNum - bNum : bNum - aNum;
        } else {
            return ascending
                ? a.value.localeCompare(b.value)
                : b.value.localeCompare(a.value);
        }
    });

    for (let i = 0; i < spans.length; i++) {
        spans[i].textContent = items[i].id + ". " + items[i].value;
    }

    
    if (ascending) {
        sort1.src = "Group 90.svg";
    } else {
        sort1.src = "Group 74.svg";
    }

    ascending = !ascending;
});
