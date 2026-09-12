> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/goforward(for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/goforward(for:completionhandler:))

# goForward(for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to navigate the tab to the next page in its history.

## Declaration

```swift
optional func goForward(for context: WKWebExtensionContext, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
optional func goForward(for context: WKWebExtensionContext) async throws
```

## Parameters

- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

Navigates to the next page in the tab’s web view via [goForward()](../wkwebview/goforward%28%29.md) if not implemented.

# goForwardForWebExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to navigate the tab to the next page in its history.

## Declaration

```objectivec
- (void) goForwardForWebExtensionContext:(WKWebExtensionContext *) context completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

Navigates to the next page in the tab’s web view via [goForward](../wkwebview/goforward%28%29.md) if not implemented.
