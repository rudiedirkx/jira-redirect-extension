chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
	if (details.transitionType == 'link') {
		if (details.url.includes('/browse/') && !details.url.match(/[?&]oldIssueView=true/)) {
			chrome.tabs.update(details.tabId, {
				url: details.url,
			});
		}
	}
});
