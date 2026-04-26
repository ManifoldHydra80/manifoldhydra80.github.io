sync function runscript(){
	if (document.referrer == 'https://l.j-ing.me'){
		CurrentURL = new URL(location.href);
		NewURL = await CurrentURL.searchParams.get('redirect-to')
			if (localStorage.getItem('Skipadwarn')=='yes'){
				location.replace(NewURL)
			}
	} else {
		location.replace('https://j-ing.me')
	}
}
;
function visitpage(){
	location.replace(NewURL)
}
;
function visitpagenofuturewarn(){
	localStorage.setItem('Skipadwarn','yes');
	location.replace(NewURL)
}
runscript()
