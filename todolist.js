const input = document.getElementById('texto');
const addbtn = document.getElementById('addbtn');
const ul = document.getElementById('ul');
const msjdefaullt = document.getElementById('msj-default');

addbtn.addEventListener('click', (e) => {
  e.preventDefault();

  const text = input.value;
console.log('1');
  const li = document.createElement('li');
  li.classList.add('my-6','flex','flex-col','justify-evenly','items-center','md:flex','md:flex-row')
  const span = document.createElement('span');
  span.textContent = text;
  const div = document.createElement('div');
  div.classList.add('flex','flex-row','justify-end','items-center','content-center');
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox"
  const label = document.createElement('label');
  label.textContent= 'Tarea Completada';

  if (text === ''){
    input.setAttribute("placeholder", "Agrega una tarea Valida");
    input.classList.add('dark:bg-red-600');
    return false;
  }

  if (text !== '') {
    li.appendChild(span);
    span.classList.add('text-xl','font-bold','dark:text-zinc-200','m-2','p-2')
    div.appendChild(checkbox);
    checkbox.classList.add('w-4','h-4','text-blue-600','bg-gray-100','border-gray-300','rounded-full','focus:ring-blue-500','dark:focus:ring-blue-600','dark:ring-offset-gray-800','focus:ring-2','dark:bg-gray-700','dark:border-gray-600')
    div.appendChild(label);
    label.classList.add('ms-2','text-sm','font-medium','text-gray-900','dark:text-gray-300')
    div.appendChild(deletebtn());
    li.appendChild(div)
    ul.appendChild(li);

    input.value = "";
    document.getElementById('msj-default').classList.add('hidden');
  }
  checkbox.addEventListener( 'change', function() {
    if(this.checked) {
      span.classList.add('line-through');
    } else {
      span.classList.remove('line-through');
    }
  });

});

function deletebtn () {
  const btn = document.createElement('button');
  btn.textContent = 'Eliminar Tarea';
  btn.classList.add('focus:outline-none','text-white','bg-red-500','hover:bg-red-800','focus:ring-4','focus:ring-red-300','font-medium','rounded-lg','text-sm','my-0','mx-2.5','p-2.5','dark:bg-red-600','dark:hover:bg-red-700','dark:focus:ring-red-900');
  btn.addEventListener("click", (e) => {
    const item = e.target.parentElement.parentElement;
    ul.removeChild(item);
    const items = document.querySelectorAll('li');
    if (items.length === 0){
      document.getElementById('msj-default').classList.remove('hidden');
    }
  });
  return btn;
}

input.addEventListener('click', (e) => {
  input.classList.remove('dark:bg-red-600');
  input.setAttribute("placeholder", "Escriba su nueva tarea aquí");

});