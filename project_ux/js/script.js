let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});
function toast(text){
  document.getElementById('toast_text').setAttribute('style', 'display:block;width:fit-content')
  document.getElementById('toast_text').innerText = text
  setTimeout(cloase_toast, 1500);
}
function cloase_toast(){
  document.getElementById('toast_text').style.display = 'none'
}