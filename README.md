<h1>jQuery SEO Plugin</h1>
<h3>Plugin Methods</h3>
<table style="width:100%;">
<thead>
<tr>
<th>
Method
</th>
<th>
Description
</th>
</tr>
</thead>
<tr>
<td>h1Count</td>
<td><p>Counts h1 tags in a block of text</p></td>
</tr>
<tr>
<td>h2Count</td>
<td><p>Counts h2 tags in a block of text</p></td>
</tr>
<tr>
<td>h3Count</td>
<td><p>Counts h3 tags in a block of text</p></td>
</tr>
<tr>
<td>h4Count</td>
<td><p>Counts h4 tags in a block of text</p></td>
</tr>
<tr>
<td>h5Count</td>
<td><p>Counts h5 tags in a block of text</p></td>
</tr>
<tr>
<td>h6Count</td>
<td><p>Counts h6 tags in a block of text</p></td>
</tr>
<tr>
<td>density</td>
<td><p>Returns keyword density in a block of text</p></td>
</tr>
<tr>
<td>pageRank</td>
<td><p>Returns wesite page Rank</p></td>
</tr>
<tr>
<td>alexaRank</td>
<td><p>Returns website Alexa Rank</p></td>
</tr>
<tr>
<td>wordCount</td>
<td><p>Counts words in a block of text.</p></td>
</tr>
</table>

<p>
Every method expects a callback which returns the result as parameter.
</p>

<h4>Examples</h4>
<pre>
///Get word count in body
$('body').wordCount(function(results){
console.log(results);
})
</pre>
<pre>
///Get website page rabk
$('a.link').pageRank(function(results){
console.log(results);
})
</pre>
<i>html</i>
<pre>
<a class="link">http://google.com</a>
</pre>

<b>Sponsered By</b>
<a href="http://serprankchecker.com">SerpRankChecker.com</a>