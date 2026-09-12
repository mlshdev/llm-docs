> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkerror/code](https://developer.apple.com/documentation/webkit/wkerror/code)

# WKError.Code (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Possible error values that WebKit APIs can return.

## Declaration

```swift
enum Code
```

## Topics

### Errors

- [WKError.Code.unknown](code/unknown.md): An error that indicates an unknown issue occurred.
- [WKError.Code.webContentProcessTerminated](code/webcontentprocessterminated.md): An error that indicates the web process that contains the content is no longer running.
- [WKError.Code.webViewInvalidated](code/webviewinvalidated.md): An error that indicates the web view was invalidated.
- [WKError.Code.javaScriptExceptionOccurred](code/javascriptexceptionoccurred.md): An error that indicates a JavaScript exception occurred.
- [WKError.Code.javaScriptResultTypeIsUnsupported](code/javascriptresulttypeisunsupported.md): An error that indicates the result of JavaScript execution could not be returned.
- [WKError.Code.contentRuleListStoreCompileFailed](code/contentruleliststorecompilefailed.md): An error that indicates the compilation of a rule list failed.
- [WKError.Code.contentRuleListStoreLookUpFailed](code/contentruleliststorelookupfailed.md): An error that indicates a content rule list data store didn’t find a rule list with the specified identifier.
- [WKError.Code.contentRuleListStoreRemoveFailed](code/contentruleliststoreremovefailed.md): An error that indicates a failure to remove a content rule list from the rule list data store object.
- [WKError.Code.contentRuleListStoreVersionMismatch](code/contentruleliststoreversionmismatch.md): An error that indicates the rule list version is outdated and cannot be read.
- [WKError.Code.attributedStringContentFailedToLoad](code/attributedstringcontentfailedtoload.md): An error that indicates the failure to navigate to web content from an attributed string.
- [WKError.Code.attributedStringContentLoadTimedOut](code/attributedstringcontentloadtimedout.md): An error that indicates a timeout occurred while trying to load web content from an attributed string.
- [WKError.Code.javaScriptInvalidFrameTarget](code/javascriptinvalidframetarget.md): An error that indicates your content referenced an invalid web frame.
- [WKError.Code.navigationAppBoundDomain](code/navigationappbounddomain.md): An error that indicates navigation failed due to an app-bound domain restriction.
- [WKError.Code.javaScriptAppBoundDomain](code/javascriptappbounddomain.md): An error that indicates JavaScript execution failed due to an app-bound domain restriction.
- [WKError.Code.credentialNotFound](code/credentialnotfound.md): An error that indicates the system could not find a passkey during an export.
- [WKError.Code.duplicateCredential](code/duplicatecredential.md): An error that indicates the system found a duplicate passkey during an import.
- [WKError.Code.malformedCredential](code/malformedcredential.md): An error that indicates the system could not parse passkey data during an import.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [WKError](../wkerror.md): Possible error values that WebKit APIs can return.

# WKErrorCode (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Possible error values that WebKit APIs can return.

## Declaration

```objectivec
enum WKErrorCode : NSInteger;
```

## Topics

### Errors

- [WKErrorUnknown](code/unknown.md): An error that indicates an unknown issue occurred.
- [WKErrorWebContentProcessTerminated](code/webcontentprocessterminated.md): An error that indicates the web process that contains the content is no longer running.
- [WKErrorWebViewInvalidated](code/webviewinvalidated.md): An error that indicates the web view was invalidated.
- [WKErrorJavaScriptExceptionOccurred](code/javascriptexceptionoccurred.md): An error that indicates a JavaScript exception occurred.
- [WKErrorJavaScriptResultTypeIsUnsupported](code/javascriptresulttypeisunsupported.md): An error that indicates the result of JavaScript execution could not be returned.
- [WKErrorContentRuleListStoreCompileFailed](code/contentruleliststorecompilefailed.md): An error that indicates the compilation of a rule list failed.
- [WKErrorContentRuleListStoreLookUpFailed](code/contentruleliststorelookupfailed.md): An error that indicates a content rule list data store didn’t find a rule list with the specified identifier.
- [WKErrorContentRuleListStoreRemoveFailed](code/contentruleliststoreremovefailed.md): An error that indicates a failure to remove a content rule list from the rule list data store object.
- [WKErrorContentRuleListStoreVersionMismatch](code/contentruleliststoreversionmismatch.md): An error that indicates the rule list version is outdated and cannot be read.
- [WKErrorAttributedStringContentFailedToLoad](code/attributedstringcontentfailedtoload.md): An error that indicates the failure to navigate to web content from an attributed string.
- [WKErrorAttributedStringContentLoadTimedOut](code/attributedstringcontentloadtimedout.md): An error that indicates a timeout occurred while trying to load web content from an attributed string.
- [WKErrorJavaScriptInvalidFrameTarget](code/javascriptinvalidframetarget.md): An error that indicates your content referenced an invalid web frame.
- [WKErrorNavigationAppBoundDomain](code/navigationappbounddomain.md): An error that indicates navigation failed due to an app-bound domain restriction.
- [WKErrorJavaScriptAppBoundDomain](code/javascriptappbounddomain.md): An error that indicates JavaScript execution failed due to an app-bound domain restriction.
- [WKErrorCredentialNotFound](code/credentialnotfound.md): An error that indicates the system could not find a passkey during an export.
- [WKErrorDuplicateCredential](code/duplicatecredential.md): An error that indicates the system found a duplicate passkey during an import.
- [WKErrorMalformedCredential](code/malformedcredential.md): An error that indicates the system could not parse passkey data during an import.
