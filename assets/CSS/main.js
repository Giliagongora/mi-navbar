body{
	margin: o;
}
ul {
	list-style: none; /* elimina simbolo por defecto de la lista */
	margin: 0; /* 0 ajusta el borde al margen */
	padding: 0;
	overflow: hidden;
	background-color: #333;
	font-family: Roboto;
}
ul li {
	display: inline-block; /* orden elementos horizontal */
}
ul li a{
	display: inline-block;
	color: white;
	text-align: center;
	padding: 26px;
	text-decoration: none; /* quita subrayado al enlace */
}

li a:hover, .dropdown:hover, .dropbtn:hover{ /* cambia color al pasar por enlace */
	background-color: #FFE900;
	color: #333;
} 
.dropdown-content {
	display: none;  /* al iniciar enlaces no se vean */
	position: absolute;
	background-color: #f9f9f9;
	min-width: 180px;
	box-shadow: 0px 8px 16px 0px rbga(0,0,0,0.5); /* provoca visualizacion de enlaces */
	z-index: 1;
}
.dropdown-content a{
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
	text-align: center;
}
.dropdown-content a:hover {
	background-color: #FFE900;
}
.dropdown:hover .dropdown-content {
	display: block;   /* provoca visualizacion de enlaces */
}