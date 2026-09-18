'use client';

import { useState } from 'react';

import { HelpCircle } from 'lucide-react';

export default function UIControlsLab() {
  const [activeTab, setActiveTab] = useState('профіль');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        
        
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight">Елементи інтерфейсу</h1>
          <p className="text-slate-500">Виконав студент групи ІП-44 Науменко Євгеній</p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          
          {/* 1. Radiobutton */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800">1. Radiobutton</h2>
              <p className="text-sm text-slate-600 mt-1">
                <strong>Призначення:</strong> Використовується для вибору <em>однієї</em> опції з набору взаємовиключних варіантів. Коли користувач обирає новий елемент, попередній автоматично скасовується. Вони завжди групуються разом.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-3">
              <span className="block text-sm font-semibold text-slate-700">Оберіть стать:</span>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="radio" name="gender" className="w-4 h-4 text-blue-600" /> Чоловіча
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="radio" name="gender" className="w-4 h-4 text-blue-600" /> Жіноча
                </label>
              </div>
            </div>
          </section>

          {/* 2. Checkbox */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800">2. Checkbox</h2>
              <p className="text-sm text-slate-600 mt-1">
                <strong>Призначення:</strong> Дозволяє користувачеві вибирати <em>одне або кілька</em> незалежних значень одночасно. Кожен прапорець працює автономно і не впливає на стан інших.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-3">
              <span className="block text-sm font-semibold text-slate-700">Ваші інтереси:</span>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" className="w-4 h-4 rounded text-blue-600" /> Спорт
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" className="w-4 h-4 rounded text-blue-600" /> Музика
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" className="w-4 h-4 rounded text-blue-600" /> Мистецтво
                </label>
              </div>
            </div>
          </section>

          {/* 3. Text input */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800">3. Text input</h2>
              <p className="text-sm text-slate-600 mt-1">
                <strong>Призначення:</strong> Призначене для введення та редагування довільних текстових даних користувачем (наприклад, у формах реєстрації, пошукових рядках, коментарях). Може бути однорядковим або багаторядковим (textarea).
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Ім'я:</label>
                <input type="text" placeholder="Введіть ваше ім'я" className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Коментар:</label>
                <textarea rows={1} placeholder="Напишіть коментар..." className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
              </div>
            </div>
          </section>

          {/* 4. Tabs */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800">4. Tabs</h2>
              <p className="text-sm text-slate-600 mt-1">
                <strong>Призначення:</strong> Організовують великі масиви контенту в окремі логічні блоки (вкладки), які перемикаються кліком миші. Це зменшує захаращеність інтерфейсу та полегшує навігацію.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                <div className="flex border-b border-slate-200 bg-slate-100">
                  {['профіль', 'налаштування', 'безпека'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-2 text-xs md:text-sm font-semibold capitalize transition-colors ${
                        activeTab === tab ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="p-4 text-sm text-slate-600">
                  {activeTab === 'профіль' && <p>Вміст вкладки профілю: редагування особистих даних.</p>}
                  {activeTab === 'налаштування' && <p>Вміст вкладки налаштувань: зміна системних параметрів.</p>}
                  {activeTab === 'безпека' && <p>Вміст вкладки безпеки: зміна пароля та двофакторна автентифікація.</p>}
                </div>
              </div>
            </div>
          </section>

          {/* 5. Button */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800">5. Button</h2>
              <p className="text-sm text-slate-600 mt-1">
                <strong>Призначення:</strong> Слугує інтерактивним елементом для запуску певної дії у системі (надсилання форми, збереження змін, видалення даних). Візуально виділяється залежно від важливості (primary, secondary, danger).
              </p>
            </div>
            <div className="flex flex-wrap gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors">Надіслати</button>
              <button className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 text-sm font-medium rounded-lg border border-slate-300 transition-colors">Зберегти</button>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors">Видалити</button>
            </div>
          </section>

          {/* 6. Text label */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800">6. Text label</h2>
              <p className="text-sm text-slate-600 mt-1">
                <strong>Призначення:</strong> Надає текстовий опис для інших елементів інтерфейсу (полів введення, вимикачів), інструкції користувачеві або системні повідомлення про статус (успіх/помилка). Підвищує доступність та зрозумілість форми.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">Електронна пошта:</span>
                <span className="text-xs text-red-500">* Обов'язкове поле</span>
              </div>
              <div className="px-3 py-2 bg-green-50 text-green-700 text-xs font-semibold rounded-md border border-green-200">
                Успіх! Ваші дані успішно збережено.
              </div>
            </div>
          </section>

          {/* 7. Link */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800">7. Link</h2>
              <p className="text-sm text-slate-600 mt-1">
                <strong>Призначення:</strong> Забезпечує перенаправлення користувача на інші сторінки сайту, зовнішні ресурси або файли. Зазвичай виділяється кольором та підкресленням.
              </p>
            </div>
            <div className="flex gap-6 p-4 bg-slate-50 rounded-lg border border-slate-100 text-sm">
              <a href="https://www.google.com" target="_blank" className="text-blue-600 hover:underline font-medium">Google (Зовнішнє)</a>
              <a href="https://uk.wikipedia.org" target="_blank" className="text-blue-600 hover:underline font-medium">Вікіпедія</a>
              <a href="#" className="text-blue-600 hover:underline font-medium">Локальне посилання</a>
            </div>
          </section>

          {/* 8. Tooltip */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800">8. Tooltip</h2>
              <p className="text-sm text-slate-600 mt-1">
                <strong>Призначення:</strong> Показує коротку додаткову інформацію або пояснення при наведенні курсору миші на елемент. Дозволяє уникати захаращення інтерфейсу зайвим текстом.
              </p>
            </div>
            <div className="flex items-center gap-8 p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div className="group relative inline-block">
                <span className="cursor-help border-b border-dashed border-slate-500 text-sm font-medium">Наведіть на мене</span>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-max px-2 py-1 bg-slate-900 text-white text-xs rounded shadow-md">
                  Додаткові деталі та підказка
                </div>
              </div>

              <div className="group relative inline-flex items-center">
                <button className="text-slate-500 hover:text-slate-800">
                  <HelpCircle className="w-5 h-5" />
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-max px-2 py-1 bg-slate-900 text-white text-xs rounded shadow-md z-10">
                  Довідкова інформація про функцію
                </div>
              </div>
            </div>
          </section>

          {/* 9. Dropdown list */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800">9. Dropdown list</h2>
              <p className="text-sm text-slate-600 mt-1">
                <strong>Призначення:</strong> Дозволяє вибрати один або кілька варіантів із компактного списку, що розгортається при кліку. Економить простір на екрані порівняно з радіокнопками.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 max-w-sm">
              <label className="block text-xs font-semibold text-slate-600 mb-1">Країна:</label>
              <select className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                <option>Україна</option>
                <option>Польща</option>
                <option>Німеччина</option>
              </select>
            </div>
          </section>

          {/* 10. Data grid */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800">10. Data grid</h2>
              <p className="text-sm text-slate-600 mt-1">
                <strong>Призначення:</strong> Використовується для представлення великих масивів структурованих даних у вигляді рядків і стовпчиків із можливістю сортування, фільтрації, пагінації та редагування.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 overflow-x-auto">
              <table className="w-full text-sm text-left bg-white border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-2">Ім'я</th>
                    <th className="px-4 py-2">Вік</th>
                    <th className="px-4 py-2">Місто</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-2 font-medium text-slate-900">Анна</td>
                    <td className="px-4 py-2">22</td>
                    <td className="px-4 py-2">Київ</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-2 font-medium text-slate-900">Іван</td>
                    <td className="px-4 py-2">25</td>
                    <td className="px-4 py-2">Берлін</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}