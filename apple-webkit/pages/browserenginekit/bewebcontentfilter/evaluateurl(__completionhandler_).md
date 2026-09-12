> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bewebcontentfilter/evaluateurl(_:completionhandler:)](https://developer.apple.com/documentation/browserenginekit/bewebcontentfilter/evaluateurl(_:completionhandler:))

# evaluateURL(\_:completionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+

Determines whether to block a URL.

## Declaration

```swift
func evaluateURL(_ url: URL, completionHandler: @escaping @Sendable (Bool, Data?) -> Void)
```

```swift
func evaluateURL(_ url: URL) async -> (Bool, Data?)
```

## Parameters

- `url`: The URL to evaluate.
- `completionHandler`: A closure that the system invokes when URL evaluation finishes. The closure returns `true` if the URL is blocked; `false`, otherwise.

<a id="discussion"></a>

## Discussion

If this method blocks a URL, it returns a UTF-8 encoded HTML representation of a blocking page.

This method performs a lazy initialization of some objects, so the first call can take longer than subsequent calls.

## See Also

### Evaluating URLs

- [shouldEvaluateURLs](shouldevaluateurls.md): Determines whether the built-in web content filter is active.

# evaluateURL:completionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+

Determines whether to block a URL.

## Declaration

```objectivec
- (void) evaluateURL:(NSURL *) url completionHandler:(void (^)(BOOL shouldBlock, NSData *blockPageRepresentation)) completionHandler;
```

## Parameters

- `url`: The URL to evaluate.
- `completionHandler`: A closure that the system invokes when URL evaluation finishes. The closure returns `true` if the URL is blocked; `false`, otherwise.

<a id="discussion"></a>

## Discussion

If this method blocks a URL, it returns a UTF-8 encoded HTML representation of a blocking page.

This method performs a lazy initialization of some objects, so the first call can take longer than subsequent calls.

## See Also

### Evaluating URLs

- [shouldEvaluateURLs](shouldevaluateurls.md): Determines whether the built-in web content filter is active.
