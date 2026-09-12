> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bewebcontentfilter/evaluateurl(_:mainframeurl:ismainframe:completionhandler:)](https://developer.apple.com/documentation/browserenginekit/bewebcontentfilter/evaluateurl(_:mainframeurl:ismainframe:completionhandler:))

# evaluateURL(\_:mainFrameURL:isMainFrame:completionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

## Declaration

```swift
func evaluateURL(_ url: URL, mainFrameURL: URL, isMainFrame: Bool, completionHandler: @escaping @Sendable (Bool, Data?) -> Void)
```

```swift
func evaluateURL(_ url: URL, mainFrameURL: URL, isMainFrame: Bool) async -> (Bool, Data?)
```

## Parameters

- `url`: The URL to be evaluated, either a main frame or subframe URL.
- `mainFrameURL`: The URL of the main document and root of the transitive trust policy. This may match the evaluated `url` param for main frame navigations.
- `isMainFrame`: Whether the evaluated URL is a main frame or subframe navigation. YES if main frame navigation and NO otherwise.
- `completionHandler`: The completion block to be invoked when evaluation is complete.

<a id="discussion"></a>

## Discussion

Evaluates whether a URL should be blocked and if yes, provides a response body representing the HTML of the blocking content that will be displayed in either the blocked main document or blocked subframe.

# evaluateURL:mainFrameURL:isMainFrame:completionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

## Declaration

```objectivec
- (void) evaluateURL:(NSURL *) url mainFrameURL:(NSURL *) mainFrameURL isMainFrame:(BOOL) isMainFrame completionHandler:(void (^)(BOOL shouldBlock, NSData *blockPageRepresentation)) completionHandler;
```

## Parameters

- `url`: The URL to be evaluated, either a main frame or subframe URL.
- `mainFrameURL`: The URL of the main document and root of the transitive trust policy. This may match the evaluated `url` param for main frame navigations.
- `isMainFrame`: Whether the evaluated URL is a main frame or subframe navigation. YES if main frame navigation and NO otherwise.
- `completionHandler`: The completion block to be invoked when evaluation is complete.

<a id="discussion"></a>

## Discussion

Evaluates whether a URL should be blocked and if yes, provides a response body representing the HTML of the blocking content that will be displayed in either the blocked main document or blocked subframe.
