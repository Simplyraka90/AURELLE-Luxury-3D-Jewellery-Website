export const metals = { 'Yellow Gold':'#d4af7a','White Gold':'#dddce0','Rose Gold':'#d9a6a0','Platinum':'#aeb6c0' };
export const stones = { Diamond:'#eefaff',Emerald:'#168c59',Ruby:'#ac163d','Blue Sapphire':'#254da8' };
export type Product={id:string;name:string;category:string;price:number;image:string;metal:string;stone:string;stock:number};
export const products:Product[]=[
{id:'solitaire',name:'The Eternal Solitaire',category:'rings',price:48000,image:'/images/ring.webp',metal:'Yellow Gold',stone:'Diamond',stock:8},
{id:'halo',name:'Celestial Halo',category:'rings',price:62000,image:'/images/halo.webp',metal:'Rose Gold',stone:'Diamond',stock:6},
{id:'pendant',name:'Lumière Pendant',category:'necklaces',price:38000,image:'/images/necklace.webp',metal:'Yellow Gold',stone:'Diamond',stock:10},
{id:'emerald',name:'Verdant Promise',category:'rings',price:54000,image:'/images/emerald.webp',metal:'Yellow Gold',stone:'Emerald',stock:5},
{id:'earrings',name:'Éclat Drops',category:'earrings',price:29000,image:'/images/earrings.webp',metal:'White Gold',stone:'Diamond',stock:8},
{id:'bracelet',name:'Golden Reverie',category:'bracelets',price:42000,image:'/images/bracelet.webp',metal:'Yellow Gold',stone:'Diamond',stock:7}];
export const money=(n:number)=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(n);
export const stages=[['Arrival','Timeless beauty.','A single piece, a thousand moments.'],['Reveal','Brilliance in every detail.','Discover the facets that catch the light.'],['Expand','Beauty, engineered.','Explore the setting, stone and band.'],['Inspect','The art of the setting.','Select a component to discover its role.'],['Brilliance','Made to catch the light.','A study in reflection and form.'],['Reassemble','Crafted to shine.','Every element comes together.']];
