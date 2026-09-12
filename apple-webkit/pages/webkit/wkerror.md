> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkerror](https://developer.apple.com/documentation/webkit/wkerror)

# WKError

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Possible error values that WebKit APIs can return.

## Declaration

```swift
struct WKError
```

## Topics

### Getting the Error Codes

- [unknown](wkerror/unknown.md): An error that indicates an unknown issue occurred.
- [webContentProcessTerminated](wkerror/webcontentprocessterminated.md): An error that indicates the web process that contains the content is no longer running.
- [webViewInvalidated](wkerror/webviewinvalidated.md): An error that indicates the web view was invalidated.
- [javaScriptExceptionOccurred](wkerror/javascriptexceptionoccurred.md): An error that indicates a JavaScript exception occurred.
- [javaScriptResultTypeIsUnsupported](wkerror/javascriptresulttypeisunsupported.md): An error that indicates the result of JavaScript execution could not be returned.
- [contentRuleListStoreCompileFailed](wkerror/contentruleliststorecompilefailed.md): An error that indicates the compilation of a rule list failed.
- [contentRuleListStoreLookUpFailed](wkerror/contentruleliststorelookupfailed.md): An error that indicates a content rule list data store didn’t find a rule list with the specified identifier.
- [contentRuleListStoreRemoveFailed](wkerror/contentruleliststoreremovefailed.md): An error that indicates a failure to remove a content rule list from the rule list data store object.
- [contentRuleListStoreVersionMismatch](wkerror/contentruleliststoreversionmismatch.md): An error that indicates the rule list version is outdated and cannot be read.
- [attributedStringContentFailedToLoad](wkerror/attributedstringcontentfailedtoload.md): An error that indicates the failure to navigate to web content from an attributed string.
- [attributedStringContentLoadTimedOut](wkerror/attributedstringcontentloadtimedout.md): An error that indicates a timeout occurred while trying to load web content from an attributed string.
- [javaScriptInvalidFrameTarget](wkerror/javascriptinvalidframetarget.md): An error that indicates your content referenced an invalid web frame.
- [navigationAppBoundDomain](wkerror/navigationappbounddomain.md): An error that indicates navigation failed due to an app-bound domain restriction.
- [javaScriptAppBoundDomain](wkerror/javascriptappbounddomain.md): An error that indicates JavaScript execution failed due to an app-bound domain restriction.
- [credentialNotFound](wkerror/credentialnotfound.md): An error that indicates the system could not find a passkey during an export.
- [duplicateCredential](wkerror/duplicatecredential.md): An error that indicates the system found a duplicate passkey during an import.
- [malformedCredential](wkerror/malformedcredential.md): An error that indicates the system could not parse passkey data during an import.

### Type Properties

- [errorDomain](wkerror/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [WKError.Code](wkerror/code.md): Possible error values that WebKit APIs can return.
