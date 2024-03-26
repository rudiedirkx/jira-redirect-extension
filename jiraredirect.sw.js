chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
	if (details.transitionType == 'link') {
		const m1 = details.url.match(/\/(?:browse|issues)\/(\w+-\d+)/);
		const m2 = details.url.match(/\/browse\/(\w+-\d+)$/);
		if (m1 && !m2) {
			chrome.tabs.update(details.tabId, {
				url: details.url,
			});
		}
	}
});
