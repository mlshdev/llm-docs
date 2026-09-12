> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bewebcontentfilter/shouldevaluateurls](https://developer.apple.com/documentation/browserenginekit/bewebcontentfilter/shouldevaluateurls)

# shouldEvaluateURLs (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Type Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+

Determines whether the built-in web content filter is active.

## Declaration

```swift
class var shouldEvaluateURLs: Bool { get }
```

<a id="return-value"></a>

## Return Value

`true` if the built-in web content filter is active; `false`, otherwise.

## See Also

### Evaluating URLs

- [evaluateURL(\_:completionHandler:)](evaluateurl%28__completionhandler_%29.md): Determines whether to block a URL.

# shouldEvaluateURLs (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Type Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+

Determines whether the built-in web content filter is active.

## Declaration

```objectivec
@property (class, readonly) BOOL shouldEvaluateURLs;
```

<a id="return-value"></a>

## Return Value

`true` if the built-in web content filter is active; `false`, otherwise.

## See Also

### Evaluating URLs

- [evaluateURL:completionHandler:](evaluateurl%28__completionhandler_%29.md): Determines whether to block a URL.
