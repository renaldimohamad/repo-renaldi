let datamyProject = []

function submitBlog() {
    console.log("data terkirim silahkan cek di dasboard anda")

    // const startDateValue = document.getElementById('startDate').value
    // const endDateValue = document.getElementById('endDate').value

    // console.log('cek tgl mulai', startDateValue)
    // console.log('cek tgl berakhir', endDateValue)

    // return;

    let inputName = document.getElementById("inputName").value
    let inputDescription = document.getElementById("inputDescription").value
    let inputImage = document.getElementById("inputImage").files
    const nodeJs = document.getElementById("nodeJs").checked
    const nextJs = document.getElementById("nextJs").checked
    const reactJs = document.getElementById("reactJs").checked
    const phython = document.getElementById("phython").checked


    // for (let x = 0; x < checkBox.length; x++) {
    //     if (checkBox[x].checked) {
    //         tech.push(tech[x].value)
    //     }
    // }

    // console.log("tech", tech)

    console.log("name :", inputName)
    console.log("Description :", inputDescription)

    inputImage = URL.createObjectURL(inputImage[0])
    console.log(inputImage)

    const detailMyProject = {
        name: inputName,
        description: inputDescription,
        image: inputImage,
        posAt: "10 oktober 2020",
        nodeJs,
        nextJs,
        reactJs,
        phython,
        author: "Renaldi Mohamad"
    }

    // const datamyProject = {
    //     inputName,
    //     inputDescription,
    //     inputImage,
    //     tech,
    //     createdAt
    // }

    // datamyProject.unshift(datamyProject)
    // renderBlog()

    datamyProject.push(detailMyProject)
    console.log("datamyProject", datamyProject)
    renderBlog()
}


// function showMeHelloworld() {
//     const container = document.getElementById("contents")

//     container.innerHTML = '<p>HELLO WORLD </p>'
// }

// LOOPING : FOR, WHILE, DO-WHILE

//FOR -> perulangan yang kamu sudah tau kapan harus berhenti

// for (let index = 0; index < 4; index++) {
//     console.log("ini adalah index", index)
// }

// WHILE -> perulangan yang belum tentu kamu tau kapan harus berheti (berdasarkan data dinamis)

// DO-WHILE -> perulangan yang jalan dulu sekali,  baru di cek
function renderBlog() {
    document.getElementById("contents").innerHTML = ""

    for (let index = 0; index < datamyProject.length; index++) {
        let renderTechIcons = ''

        if (datamyProject[index].nodeJs) {
            renderTechIcons += `<i class="fa-brands fa-node"></i>`
        }

        if (datamyProject[index].nextJs) {
            renderTechIcons += `<i class="fa-brands fa-js"></i>`
        }
        if (datamyProject[index].reactJs) {
            renderTechIcons += `<i class="fa-brands fa-react"></i>`
        }
        if (datamyProject[index].phython) {
            renderTechIcons += `<i class="fa-brands fa-python"></i>`
        }
        document.getElementById("contents").innerHTML += `  <div id="contents" class="blog-list-item">
        <div class="input-submit"
        style="display: flex; justify-content: center; align-items: center; margin-bottom: 50px;">

        <h1 style="font-size: 25px;">MY PROJECT</h1>
    </div>

    <div style="display: flex; justify-content: center; align-items: center;">

        <div style="width: 300px; border: solid 1px; ">

            <div></div>
            <a href="./detailmyproject.html">
                <img src="${datamyProject[index].image}" style="height: 100px; width: 100%;" alt="">
                <h1 style="font-size: 15px; color: black;">Dumbways Mobile App - 2021</h1>
                <p style="font-size: 10px; margin-bottom: 10px; color: black;">durasi: 3 bulan</p>

                <p style="font-size: 10px; margin-bottom: 10px; color: black;">${datamyProject[index].description}</p>
           <p>


           ${renderTechIcons}
                <div
                    style="display: flex; flex-direction: row; gap: 20px; margin-bottom: 20px; justify-content: end; width: 100px;">
                    <img src="./icons/play-store.png" alt="" style="width: 15px;">
                    <img src="./icons/atom.png" alt="" style="width: 15px;">
                    <img src="./icons/java.png" alt="" style="width: 15px;">
                </div>
                <div style="display: flex; justify-content: center; margin-bottom:  10px;">
                    <button
                        style="background-color: black; color: white; width: 120px; height: 20px; margin-right: 20px; border-radius: 10px;">edit</button>
                    <button
                        style="background-color: black; color: white; width: 120px; height: 20px; border-radius: 10px;">delete</button>
                </div>

            </a>

        </div> `




    }

}