import { MyLabel } from "../../components/MyLabel";
//Esto seria una historia
export default {
    //titulo de la seccion(caperta) lateral
    //title:'example',
    //titulo de la seccion lateral mas agrupador
    title: 'UI/MyLabel',
    //titulo + agrupador + subdirectorio
    //title:'UI/etiquetas/MyLabel',
    //nombre del compente
    component: MyLabel,
    //meta es una configuracion o descripcion de un objeto
    //genera documentacion automaticamente
    tags: ['autodocs'],
    //propiedads por defecto en todas las historias
    args: {
        allCaps: false
    },
    //personalizar las paginas de la historias
    argTypes: {
        color: {
            options: ['text-primary', 'text-secondary', 'text-tertiary'],
            control: { type: 'select' }
        }
    }
};
//Esto seria las paginas de una historia
export const Basic = {
    args: {
        label: 'Basic',
        size: 'normal',
        color: 'text-primary'
    }
};
export const Secondary = {
    args: {
        label: 'Secondary',
        size: 'normal',
        color: 'text-secondary'
    }
};
export const Tertiary = {
    args: {
        label: 'Tertiary',
        size: 'normal',
        color: 'text-tertiary'
    }
};
export const AllCaps = {
    args: {
        label: 'All Caps',
        size: 'normal',
        allCaps: true
    }
};
