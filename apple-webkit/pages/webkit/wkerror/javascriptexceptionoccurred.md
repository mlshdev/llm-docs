> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkerror/javascriptexceptionoccurred](https://developer.apple.com/documentation/webkit/wkerror/javascriptexceptionoccurred)

# javaScriptExceptionOccurred

**Framework:** WebKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An error that indicates a JavaScript exception occurred.

## Declaration

```swift
static var javaScriptExceptionOccurred: WKError.Code { get }
```

## See Also

### Getting the Error Codes

- [unknown](unknown.md): An error that indicates an unknown issue occurred.
- [webContentProcessTerminated](webcontentprocessterminated.md): An error that indicates the web process that contains the content is no longer running.
- [webViewInvalidated](webviewinvalidated.md): An error that indicates the web view was invalidated.
- [javaScriptResultTypeIsUnsupported](javascriptresulttypeisunsupported.md): An error that indicates the result of JavaScript execution could not be returned.
- [contentRuleListStoreCompileFailed](contentruleliststorecompilefailed.md): An error that indicates the compilation of a rule list failed.
- [contentRuleListStoreLookUpFailed](contentruleliststorelookupfailed.md): An error that indicates a content rule list data store didn’t find a rule list with the specified identifier.
- [contentRuleListStoreRemoveFailed](contentruleliststoreremovefailed.md): An error that indicates a failure to remove a content rule list from the rule list data store object.
- [contentRuleListStoreVersionMismatch](contentruleliststoreversionmismatch.md): An error that indicates the rule list version is outdated and cannot be read.
- [attributedStringContentFailedToLoad](attributedstringcontentfailedtoload.md): An error that indicates the failure to navigate to web content from an attributed string.
- [attributedStringContentLoadTimedOut](attributedstringcontentloadtimedout.md): An error that indicates a timeout occurred while trying to load web content from an attributed string.
- [javaScriptInvalidFrameTarget](javascriptinvalidframetarget.md): An error that indicates your content referenced an invalid web frame.
- [navigationAppBoundDomain](navigationappbounddomain.md): An error that indicates navigation failed due to an app-bound domain restriction.
- [javaScriptAppBoundDomain](javascriptappbounddomain.md): An error that indicates JavaScript execution failed due to an app-bound domain restriction.
- [credentialNotFound](credentialnotfound.md): An error that indicates the system could not find a passkey during an export.
- [duplicateCredential](duplicatecredential.md): An error that indicates the system found a duplicate passkey during an import.
