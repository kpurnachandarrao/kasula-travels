var English=['The child liked the chocolate.', 'She was stopped by the bravest knight.', 'Mary baked a cake for his birthday', 'She decorated the cake carefully', 'Mary wore a dress with polka dots.'];
var Hindi=['राम ने सीता के लिए फल तोड़ा।', 'छोटे बच्चे पाठशाला जल्दी आयेंगे।', 'मेहनत का फल मीठा होता है।', 'वाह! वह खूबसूरत है।', 'पेड़ से पत्ते गिर गए।'];
 function select_language()
 {
 	if(document.getElementById("language").value=='English')
 	{
 		document.getElementById("demo3").innerHTML=" "
 		document.getElementById("demo1").innerHTML='<center><select id="sentenceE" name="sentenceE" style="width:300px;height:40px;font-size: 20px;"onchange="select_sentence();"><option value="null" onclick="reload();" >--Select a Sentence--</option><option value="se1">'+English[0]+'</option><option value="se2" >'+English[1]+'</option><option value="se3" >'+English[2]+'</option><option value="se4" >'+English[3]+'</option><option value="se5" >'+English[4]+'</option></select>';
 		
 	}
 	else if(document.getElementById("language").value=='Hindi')
 	{
 		document.getElementById("demo3").innerHTML=" "
 		document.getElementById("demo1").innerHTML='<center><select id="sentenceH" name="sentenceH" style="width:300px;height:40px;font-size:20px;"onchange="select_sentence();"><option value="null" onclick="reload();" >--Select a Sentence--</option><option value="sh1">राम ने सीता के लिए फल तोड़ा।</option><option value="sh2" >छोटे बच्चे पाठशाला जल्दी आयेंगे।</option><option value="sh3" >मेहनत का फल मीठा होता है।</option><option value="sh4" >वाह! वह खूबसूरत है।</option><option value="sh5" >पेड़ से पत्ते गिर गए।</option></select>';
 	}
}
function select_sentence()
{
document.getElementById("demo2").innerHTML="<center><br><i><font color='Blue'>Select the POS tag for corresponding words</font></i><br></center>";
var string;
var rows=" ";
var tstring=" ";
	
if(document.getElementById("language").value=='English')
{
	document.getElementById("demo3").innerHTML=" "
	string=document.getElementById('sentenceE').value;
	if(string=='se1')
	{
   tstring=English[0];
	}
	else if(string=='se2')
	{
   tstring=English[1];
	}
	else if(string=='se3')
	{
   tstring=English[2];
	}
	else if(string=='se4')
	{
   tstring=English[3];
	}
	else if(string=='se5')
	{
   tstring=English[4];
	}
	var stringE=tstring.split(" ");
		var rows=" ";
	for(var i=0;i<stringE.length;i++)
	{
rows += "<tr><td style='padding:10px'>"+stringE[i]+"</td><td style='padding:10px'><select style='width:130px;height:25px;font-size: 20px;'><option value = 'Noun' selected>Noun</option><option value = 'Pronoun'>Pronoun</option><option value = 'Verb'>Verb</option><option value = 'Adjective'>Adjective</option><option value = 'Adverb'>Adverb</option><option value = 'Determiner'>Determiner</option><option value = 'Postposition'>Preposition</option><option value = 'Conjunction'>Conjunction</option><option value = 'Interjection'>Interjection</option></select></td><td></td><td></td></tr>";
	}
}
else if(document.getElementById("language").value=='Hindi')
{ 
	document.getElementById("demo3").innerHTML=" "
	string=document.getElementById('sentenceH').value;
	var tstring=" ";
	if(string=='sh1')
	{
   tstring=Hindi[0];
	}
	else if(string=='sh2')
	{
   tstring=Hindi[1];
	}
	else if(string=='sh3')
	{
   tstring=Hindi[2];
	}
	else if(string=='sh4')
	{
   tstring=Hindi[3];
	}
	else if(string=='sh5')
	{
   tstring=Hindi[4];
	}
	var stringE=tstring.split(" ");
		var rows=" ";
	for(var i=0;i<stringE.length;i++)
	{
rows += "<tr><td style='padding:10px'>"+stringE[i]+"</td><td style='padding:10px'><select style='width:130px;height:25px;font-size: 20px;'><option value = 'Noun' selected>Noun</option><option value = 'Pronoun'>Pronoun</option><option value = 'Verb'>Verb</option><option value = 'Adjective'>Adjective</option><option value = 'Adverb'>Adverb</option><option value = 'Determiner'>Determiner</option><option value = 'Preposition'>Preposition</option><option value = 'Conjunction'>Conjunction</option><option value = 'Interjection'>Interjection</option></select></td><td></td><td></td></tr>";
	}
}
document.getElementById("demo3").innerHTML = '<center><table border="1" style="border-collapse:collapse;border-color:#b3cccc; font-size:20px;"; color:#334d4d"><tr style="color:#4d0000;"><th style="padding:10px">LEXICON</th><th style="padding:10px;">POS</th><th style="padding:10px"></th><th style="padding:10px"></th></tr><tr></td></tr>'+ rows + '</table></center>';

document.getElementById("demo4").innerHTML="<br><center><input style='padding:10px;font-size:20px;' type='submit' value='submit' onclick='check();'></center><br>";
} 