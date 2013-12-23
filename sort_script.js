/**
 * Created by Алёна on 22.12.13.
 */
/*Глобальные переменные*/
var num = new Array();
var proverka = 0;
var a = document.getElementsByClassName('text_form__title').length;

/*Быстрая сортировка по возрастанию*/
function QuickSort(A)
{
    if (A.length == 0) return [];
    var a = [], b = [], p = A[0];
    for (var i = 1; i < A.length; i++)
    {
        (A[ i ] < p) ? a[a.length] = A[ i ] : b[b.length] = A[ i ];
    }
    return QuickSort(a).concat( p,QuickSort(b) );
}


/*Быстрая сортировка по убыванию*/
function quick_two(A)
{
    if (A.length == 0) return [];
    var a = [], b = [], p = A[0];
    for (var i = 1; i < A.length; i++)
    {
        (A[ i ] > p)? a[a.length] = A[ i ]:b[b.length] = A[ i ];
    }
    return quick_two(a).concat( p,quick_two(b) );
}

/*Функция очистки innerTeXT, перед каждым вызовом функции очищает старые данные*/
function clear_inner(){
    document.getElementsByClassName('text_form__title')[1].innerText = '';
    document.getElementsByClassName('text_form__title')[2].innerText = '';
    document.getElementsByClassName('text_form__text')[0].innerText='';
    document.getElementsByClassName('text_form__text')[1].innerText='';
    document.getElementsByClassName('text_form__text')[2].innerText='';
}

/*Функция проверяет является ли каждый элемент числом*/
function chislo(array) {
for(var i=0;i<array.length;i++){
    var n = parseInt(array[i]);
    if(isNaN(n)) {
       proverka =1;
    }
  }
    return proverka;
}

/*Функция при вызове*/
function clicker (){
      proverka = 0;

   for(var i=0; i<5; i++){
       num[i] = Number(document.getElementById('el_'+(i+1)).value);
   }

    /*Вызываю функцию проверки числа*/
    chislo(num);
    /*Если содержится не число возвращаю ошибку,  иначе продолжаю выполнение*/
    if(proverka==1){
        document.getElementsByClassName('text_form__title')[0].innerText = 'Ошибка ввода данных.' +
            ' В массиве содержится не число.';
        clear_inner();
    } else {

        var result = QuickSort(num);
        var result_2 = quick_two(num);


        document.getElementsByClassName('text_form__title')[0].innerText = 'Массив:';
        document.getElementsByClassName('text_form__text')[0].innerText = num;

        document.getElementsByClassName('text_form__title')[1].innerText = 'По возрастанию:';
        document.getElementsByClassName('text_form__text')[1].innerText = result;


        document.getElementsByClassName('text_form__title')[2].innerText = 'По убыванию:';
        document.getElementsByClassName('text_form__text')[2].innerText = result_2;
    }
}

