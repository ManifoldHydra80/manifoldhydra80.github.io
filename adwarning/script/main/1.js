async function runscript(){
		CurrentURL = new URL(location.href);
		NewURL = await CurrentURL.searchParams.get('redirect-to')
			if (localStorage.getItem('Skipadwarn')=='yes'){
				location.replace(NewURL)
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
