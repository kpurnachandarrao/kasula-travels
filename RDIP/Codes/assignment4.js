var c= ['A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.',
			   'A wolf carried off a lamb. The lamb said, "I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.',
   			   'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.'];
function select_corpus()
{
	if(document.getElementById("corpus").value==="Corpus-1")
	{
		document.getElementById('demo3').innerHTML=" ";
		document.getElementById('demo4').innerHTML=" "; 
		document.getElementById("demo5").innerHTML=" ";
		document.getElementById("demo1").innerHTML=c[0];
		
	}
	else if(document.getElementById("corpus").value==="Corpus-2")
	{
		document.getElementById('demo3').innerHTML=" "; 
		document.getElementById('demo4').innerHTML=" "; 
		document.getElementById("demo5").innerHTML=" ";
		document.getElementById("demo1").innerHTML=c[1];
	}
	else if(document.getElementById("corpus").value==="Corpus-3")
	{
		document.getElementById('demo3').innerHTML=" "; 
		document.getElementById('demo4').innerHTML=" ";
		document.getElementById("demo5").innerHTML=" "; 
		document.getElementById("demo1").innerHTML=c[2];
	}
	else if(document.getElementById("corpus").value="null")
	{ 
		document.getElementById('demo3').innerHTML=" "; 
		document.getElementById('demo4').innerHTML=" ";
		document.getElementById("demo5").innerHTML=" ";
		document.getElementById("demo6").innerHTML=" ";
		document.getElementById("demo2").innerHTML=" ";
		document.getElementById("demo1").innerHTML=" ";
		//alert('please enter valid input');
	}
	if(document.getElementById("corpus").value!="null")
	{
	document.getElementById("demo2").innerHTML="Enter the number of tokens and types for the above corpus:"+'<br><table bordercolor:="#d2e0e0" border="1" style="border-collapse:collapse;text-align:ceter;"><tr><td style="padding:15px; font-size:20px;">#tokens:</td><td style="padding:15px;"><input type="text" size="5" id="text1"></td></tr><tr><td style="padding:15px;font-size:20px;">#types:</td><td style="padding:15px;"><input type="text" size="5" id="text2"></td></tr></table><br><br>';
	document.getElementById('demo6').innerHTML='<input type="submit" value="submit" id="submit1" style="padding:10px; font-size:20px;" onclick=number();>';
   }
}


@@ -206,9 +219,12 @@ function number_next()
	}
	str = new Set(str);
	str = Array.from(str);
	compare(str.length);
}


if(document.getElementById('text3').value==str.length)
function compare(count)
{
if(document.getElementById('text3').value==count)
{
	document.getElementById("demo5").innerHTML="Right Answer!!".fontcolor("green");
	document.getElementById('text3').style.backgroundColor = "Green";
}
else
{
	document.getElementById("demo5").innerHTML="Wrong Answer!!".fontcolor("red");
	document.getElementById('text3').style.backgroundColor = "Red";
}
}
