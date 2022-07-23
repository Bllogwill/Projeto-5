const pathContainerSectionOne = './containers/section-one/index.html'
const containerSectionOne = document.getElementById('container-section-one')

const pathContainerSectionTwo = './containers/section-two/index.html'
const containerSectionTwo = document.getElementById('container-section-two')

async function onLoadBody() {
  containerSectionOne.innerHTML = await (
    await fetch(pathContainerSectionOne)
  ).text()
  containerSectionTwo.innerHTML = await (
    await fetch(pathContainerSectionTwo)
  ).text()
}
