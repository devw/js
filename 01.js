const phone = document.getElementById('phone');
const setError = () => phone?.classList.add("error") ;
const setValid = () => phone?.classList.remove("error");
const onTyping = ({ target }) => (target.value.length < 8 ? setError() : setValid());

phone?.addEventListener('keyup', onTyping);

