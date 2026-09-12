> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/goback(for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/goback(for:completionhandler:))

# goBack(for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to navigate the tab to the previous page in its history.

## Declaration

```swift
optional func goBack(for context: WKWebExtensionContext, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
optional func goBack(for context: WKWebExtensionContext) async throws
```

## Parameters

- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

Navigates to the previous page in the tab’s web view via [goBack()](../wkwebview/goback%28%29.md) if not implemented.

# goBackForWebExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to navigate the tab to the previous page in its history.

## Declaration

```objectivec
- (void) goBackForWebExtensionContext:(WKWebExtensionContext *) context completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

Navigates to the previous page in the tab’s web view via [goBack](../wkwebview/goback%28%29.md) if not implemented.
