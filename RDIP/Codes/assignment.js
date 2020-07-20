var English=['John before afternoon ate an apple.', 'at night some students like to study.', 'Mary and John went to church', 'John after eating went to church', 'he did go to market.','my sister who sells cosmetics called the woman','John studies and goes to the library','she ate an apple so did John','after she returned the book the teacher noticed the error','I bought a book yesterday that I told her'];
var Hindi=['राम और श्याम बाजार गयें', 'राम सोया और श्याम भी', मैंने उसे बताया कि सो रहा है राम', 'खाकर राम सोया', 'कुत्ता सो गया बिल्लियों को मारकर']; 
var Hindi=['राम और श्याम बाजार गयें', 'राम सोया और श्याम भी', मैंने उसे बताया कि सो रहा है राम', 'खाकर राम सोया', 'कुत्ता सो गया बिल्लियों को मारकर']; 
 function select_language()
 {
 	if(document.getElementById("language").value=='English')
 	{
 		document.getElementById("demo1").innerHTML='<center><select id="sentenceE" name="sentenceE" style="width:30%;height:2%;font-size: 70%"onchange="select_sentence();"><option value="null" onclick="reload();" >--Select a Sentence--</option><option value="se1">The child liked the chocolate.</option><option value="se2" >She was stopped by the bravest knight.</option><option value="se3" >Mary baked a cake for his birthday</option><option value="se4" >She decorated the cake carefully</option><option value="se5" >Mary wore a dress with polka dots.</option></select>';
 	}
 	else if(document.getElementById("language").value=='Hindi')
 	{
 		document.getElementById("demo1").innerHTML='<center><select id="sentenceH" name="sentenceH" style="width:30%;height:2%;font-size: 70%"onchange="select_sentence();"><option value="null" onclick="reload();" >--Select a Sentence--</option><option value="sh1">राम ने सीता के लिए फल तोड़ा।</option><option value="sh2" >छोटे बच्चे पाठशाला जल्दी आयेंगे।</option><option value="sh3" >मेहनत का फल मीठा होता है।</option><option value="sh4" >वाह! वह खूबसूरत है।</option><option value="sh5" >पेड़ से पत्ते गिर गए।</option></select>';
 	}
 } 
