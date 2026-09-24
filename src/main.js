const tbody = document.querySelector('#dishes-table tbody');
const form = document.getElementById('add-form');

tbody.addEventListener('click', e => {
  if (!e.target.classList.contains('delete-btn')) return;
  e.target.closest('tr').remove();
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = new FormData(form);
  const name = data.get('name').trim();
  const price = Number(data.get('price'));
  const weight = Number(data.get('weight'));

  if (!name || price <= 0 || weight <= 0) {
    alert('Введите название и положительные цену и вес');
    return;
  }

  tbody.appendChild(createRow(name, price, weight));

  form.reset();
  form.elements.name.focus();
});

function createRow(name, price, weight) {
  const tr = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = name;

  const priceCell = document.createElement('td');
  priceCell.textContent = price;

  const weightCell = document.createElement('td');
  weightCell.textContent = weight;

  const actionCell = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Удалить';
  actionCell.appendChild(deleteBtn);

  tr.append(nameCell, priceCell, weightCell, actionCell);
  return tr;
}