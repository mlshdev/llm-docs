> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/loadurl(_:for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/loadurl(_:for:completionhandler:))

# loadURL(\_:for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to load a URL in the tab.

## Declaration

```swift
optional func loadURL(_ url: URL, for context: WKWebExtensionContext, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
optional func loadURL(_ url: URL, for context: WKWebExtensionContext) async throws
```

## Parameters

- `url`: The URL to be loaded in the tab.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

If the tab is already loading a page, calling this method should stop the current page from loading and start loading the new URL. Loads the URL in the tab’s web view via [load(\_:)](../wkwebview/load%28__%29-5siv6.md) if not implemented.

# loadURL:forWebExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to load a URL in the tab.

## Declaration

```objectivec
- (void) loadURL:(NSURL *) url forWebExtensionContext:(WKWebExtensionContext *) context completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `url`: The URL to be loaded in the tab.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

If the tab is already loading a page, calling this method should stop the current page from loading and start loading the new URL. Loads the URL in the tab’s web view via [loadRequest:](../wkwebview/load%28__%29-5siv6.md) if not implemented.
