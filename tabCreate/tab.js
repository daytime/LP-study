
(() => {
    // https://www.youtube.com/watch?v=OSQ1LnU9SCw

const $doc = document;
const $tab = $doc.getElementById('js-tab');
const $nav = $tab.querySelectorAll('[data-nav]');
const $content = $tab.querySelectorAll('[data-content]');
const $ACTIVE_CLASS = 'is-active';
const $navLen = $nav.length;

const init = () => {
$content[0].style.display = 'block';
};
init();

//クリックしたら起こるイベント
const handleClick = (e) => {
    e.preventDefault();
    // console.log('e',e);
//クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;
//対象外のnav,contentを全ていったんリセットする。
    // console.log('targetVal', targetVal);
    let index = 0;
    while(index < $navLen){
        $content[index].style.display = 'none';
        $nav[index].classList.remove($ACTIVE_CLASS);
        index++;
    }




    //対象のコンテンツをアクティブ化する
    // $tac.querySelectorAll(`[data-content="${targetVal}"]`) //スニペットで生成された書き方
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
    $nav[targetVal].classList.add($ACTIVE_CLASS);
    // console.log('$nav[targetVal].classList', $nav[targetVal].classList);

};

//全nav要素に対して関数を適応・発火
let index = 0;
while (index < $navLen){
    $nav[index].addEventListener('click', (e) => handleClick(e));
    index++;
}

// $nav[0].addEventListener('click', (e) => handlerClick(e));



})();