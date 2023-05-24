import data from './data.js'

let mainBlock = document.querySelector('.main-block')

for (const el of data) {
    let item = document.createElement('div')
    let leftB = document.createElement('div')
    let centerB = document.createElement('div')
    let rightB = document.createElement('div')
    let macImg = document.createElement('img')
    let h1Left = document.createElement('h1')
    let pPrice = document.createElement('p')
    let btnColorOne = document.createElement('button')
    let btnColorTwo = document.createElement('button')
    let btnColorThree = document.createElement('button')
    let btnBuy = document.createElement('button')
    let hrTop = document.createElement('hr')
    let brTop = document.createElement('br')
    let aBuy = document.createElement('a')
    let displayBlock = document.createElement('div')
    let h1Display = document.createElement('h1')
    let pDisplay = document.createElement('p')
    let m1Block = document.createElement('div')
    let m1Img = document.createElement('img')
    let m1p = document.createElement('p')
    let m1Descr = document.createElement('p')
    let memoryBlock = document.createElement('div')
    let memoryImg = document.createElement('img')
    let memoryP = document.createElement('p')
    let memoryDescr = document.createElement('p')
    let sizeBlock = document.createElement('div')
    let sizeH1 = document.createElement('h1')
    let sizeP = document.createElement('p')
    let batteryBlock = document.createElement('div')
    let batteryImg = document.createElement('img')
    let batteryP = document.createElement('p')
    let cameraBlock = document.createElement('div')
    let cameraImg = document.createElement('img')
    let cameraP = document.createElement('p')
    let cameraDescr = document.createElement('p')
    let lbBlock = document.createElement('div')
    let lbH1 = document.createElement('h1')
    let lbP = document.createElement('p')
    let touchBlock = document.createElement('div')
    let touchImg = document.createElement('img')
    let touchP = document.createElement('p')
    let hrcenter = document.createElement('hr')
    let aRight = document.createElement('a')



    item.classList.add('item')
    leftB.classList.add('left-block')
    centerB.classList.add('center-block')
    rightB.classList.add('right-block')
    btnColorOne.classList.add('color', 'color-1')
    btnColorTwo.classList.add('color', 'color-2')
    btnColorOne.style.background = el.colors[0];
    btnColorTwo.style.background = el.colors[1];
    if (el.colors[2]) {
        btnColorThree.classList.add('color', 'color-3')
    } else {
        btnColorThree.remove()
    }
    btnBuy.classList.add('buy')
    displayBlock.classList.add('display-block')
    pDisplay.classList.add('p-gray')
    m1Block.classList.add('m1-block')
    m1p.classList.add('p-gray')
    m1Descr.classList.add('description-gray')
    memoryBlock.classList.add('memory-block')
    memoryP.classList.add('p-gray')
    memoryDescr.classList.add('description-gray')
    sizeBlock.classList.add('size-memory-block')
    sizeP.classList.add('p-gray')
    batteryBlock.classList.add('battery-block')
    batteryP.classList.add('p-gray')
    cameraP.classList.add('p-gray')
    cameraDescr.classList.add('description-gray')
    cameraBlock.classList.add('camera-block')
    lbBlock.classList.add('lb-block')
    lbP.classList.add('p-gray')
    touchBlock.classList.add('touch-id')
    touchP.classList.add('p-gray')




    aBuy.innerHTML = 'Buy'
    aBuy.href = el.url
    macImg.src = './img/' + el.img
    h1Left.innerHTML = el.title
    pPrice.innerHTML = 'From ' + el.price + '$'
    h1Display.innerHTML = el.specs.display.size + '”'
    pDisplay.innerHTML = el.specs.display.title
    m1Descr.innerHTML =  el.specs.chip.description
    m1p.innerHTML = el.specs.chip.title
    m1Img.src = './img/' + el.specs.chip.imgChip
    memoryImg.src = './img/' + el.specs.ram.memoryImg
    memoryP.innerHTML = el.specs.ram.title
    memoryDescr.innerHTML = el.specs.ram.description
    sizeH1.innerHTML = el.specs.memory.size + el.specs.memory.type
    sizeP.innerHTML = 'Maximum configurable storage'
    batteryImg.src = './img/battery.png'
    batteryP.innerHTML = 'Up to ' + el.specs.battery +' hours battery life'
    cameraImg.src = './img/video.png'
    cameraP.innerHTML = el.specs.camera.title
    cameraDescr.innerHTML= el.specs.camera.description
    lbH1.innerHTML = el.specs.weight + ' lb.'
    lbP.innerHTML = 'weight'
    touchImg.src = el.specs.touchImg
    touchP.innerHTML = el.specs.other
    aRight.innerHTML = 'Learn more >'
    aRight.href = el.url


    mainBlock.append(item)
    item.append(leftB, centerB, rightB)
    leftB.append(macImg, h1Left, pPrice, btnColorOne, btnColorTwo, btnColorThree, brTop, btnBuy, hrTop)
    btnBuy.append(aBuy)
    centerB.append(displayBlock, m1Block, memoryBlock, sizeBlock, batteryBlock, cameraBlock, lbBlock,  touchBlock,  hrcenter)
    displayBlock.append(h1Display, pDisplay)
    m1Block.append(m1Img, m1p,  m1Descr)
    memoryBlock.append(memoryImg, memoryP, memoryDescr)
    sizeBlock.append(sizeH1, sizeP)
    batteryBlock.append(batteryImg, batteryP)
    cameraBlock.append(cameraImg, cameraP, cameraDescr)
    lbBlock.append(lbH1, lbP)
    touchBlock.append(touchImg, touchP)
    rightB.append(aRight)


    btnColorOne.onclick = () => {
        macImg.src = './img/macbook13.png'
    }

    btnColorTwo.onclick = () => {
        macImg.src = './img/macbookpro.png'
    }

    btnColorThree.onclick = () => {
        macImg.src = './img/macbookair.png'
    }

}


