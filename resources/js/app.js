import './bootstrap';

Echo.channel('public.playground.1')
    .listen('.playground', (event)=>{
    console.log(event)
})
