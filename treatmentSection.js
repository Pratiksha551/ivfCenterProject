const treatments = {
    "01": {
        title: "IUI- Intrauterine Insemination",
        desc: "IUI or Artificial Insemination (AI) is a procedure where processed semen, containing the most motile sperms of the male partner, is placed into the uterus through the cervix at the time of ovulation to enhance the chances of pregnancy.",
        img: "/Images/embryo.jpg"
    },
    "02": {
        title: "IVF- In Vitro Fertilization",
        desc: "IVF is a fertility treatment where eggs and sperm are combined outside the body in a laboratory dish. The fertilized egg (embryo) is then transferred into the uterus, increasing the chances of conception.",
        img: "/Images/ivf.jpg"
    },
    "07": {
        title: "Surrogacy",
        desc: "Surrogacy is an arrangement where a woman (surrogate) carries and delivers a baby for another couple or individual. It helps those unable to conceive naturally or carry a pregnancy to term.",
        img: "/Images/surrogacy.jpg"
    },
    "08": {
        title: "Induction of Ovulation and Timed Intercourse",
        desc: "This treatment involves using medications to stimulate ovulation, ensuring egg release at a predictable time, followed by planned intercourse to maximize the chances of fertilization.",
        img: "/Images/ovulation.jpg"
    },
    "09": {
        title: "Intracytoplasmic Sperm Injection",
        desc: "ICSI is an advanced IVF technique where a single sperm is directly injected into an egg to facilitate fertilization, commonly used for male infertility issues.",
        img: "/Images/icsi.jpg"
    },
    "10": {
        title: "Oligospermia Treatment",
        desc: "Oligospermia is a condition where the sperm count is lower than normal. Treatment includes medications, hormonal therapy, and lifestyle changes to improve sperm quality and fertility potential.",
        img: "/Images/oligospermia.jpg"
    },
    "11": {
        title: "Treatment Involving Donors",
        desc: "This includes using donor eggs, sperm, or embryos for couples facing severe infertility issues, helping them conceive when their reproductive cells are not viable.",
        img: "/Images/donor.jpg"
    },
    "12": {
        title: "Fertility Preservation",
        desc: "This process involves freezing eggs, sperm, or embryos for future use, helping individuals who may face fertility challenges due to medical conditions or personal choices.",
        img: "/Images/fertility.jpg"
    }
};

function changeTreatment(key) {
    document.getElementById("treatment-title").textContent = treatments[key].title;
    document.getElementById("treatment-desc").textContent = treatments[key].desc; 
    document.getElementById("treatment-img").src = treatments[key].img;  

    // Update active button
    let buttons = document.querySelectorAll(".tablinks");
    buttons.forEach(btn => btn.classList.remove("active"))
    event.currentTarget.classList.add("active");
}