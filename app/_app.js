import '@/styles/globals.css';
import Sidebar from './components/Siderbar';

export default function App({ Components, pageProps }){
return(
    <Sidebar>
        <Components {...pageProps} />
    </Sidebar>
);
}