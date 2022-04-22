const socket = io();

socket.on('connect', function(){
    const input = document.querySelector('#test');
    input.value="접속됨";
});

//send함수 (button onclick으로 연결된 함수)
function send() {
    //index.html 파일의 input태그의 id를 통해  value값을 들고온다
    const message = document.querySelector('#test').value;
    //input의 value값을 빈값으로 넣어준다.
    document.querySelector('#test').value = '';
    //소켓을 통해서 send이벤트를 만들어 준다.
    socket.emit('send', {msg : message});

    
}

//소켓을 통해서 전달
socket.on('send', function(data) {
    const chatting = document.querySelector('#chatting');
    const item = document.createElement('li');
    item.textContent = data.msg;
    chatting.appendChild(item);
})
