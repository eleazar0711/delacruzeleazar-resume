const fullname = "Eleazar De La Cruz"
document.getElementById("fullname").innerHTML = fullname;

const loc = "Panacan Davao City"
document.getElementById("loc").innerHTML = loc;

const lev = ["Tech Support", "Wordpress", "Graphics Design"];

lev.forEach(i => {
    const span = "<span class='tags'>"+i+"</span>";
    document.getElementById("lev").innerHTML += span
});

const educationdata = [
    {
        schoollogo: "images/Logo-Golden.png",
        schoolbanner: "images/Golden-Lab.jpg",
        course: "BSIT",
        schoolname: "GSCK",
        yeargraduated: "2016-2020"
    }
];
educationdata.forEach(i => {
    const tr = `<tr>
                        <td><img style="height:120px;" src="${i.schoollogo}" /></td>
                        <td>
                            <img style="height:100px;" src="${i.schoolbanner}" />
                        </td>
                        <td></td>
                        <td>${i.course}</td>
                        <td>${i.schoolname}</td>
                        <td>${i.yeargraduated}</td>
                    </tr>`;
    document.getElementById("educationrows").innerHTML += tr;

});

const myskills = [{ name: "UI/UX Design", proficiency: 50 },
{ name: "Graphics Design", proficiency: 100 },
{ name: "Wordpress", proficiency: 50 },
{ name: "Troubleshooting", proficiency: 100 },
{ name: "HTML", proficiency: 75 },
{ name: "CSS", proficiency: 75 },
{ name: "Java Script", proficiency: 50 }


];

myskills.forEach(i => {

    const li = `<li>
                ${i.name}
                <div class="proficiency proficiency-${i.proficiency}"></div></li>`;
    document.getElementById("myskills").innerHTML += li;

});