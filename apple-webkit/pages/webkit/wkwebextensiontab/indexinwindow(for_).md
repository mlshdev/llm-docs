> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/indexinwindow(for:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/indexinwindow(for:))

# indexInWindow(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the index of the tab in the window is needed.

## Declaration

```swift
optional func indexInWindow(for context: WKWebExtensionContext) -> Int
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

This method should be implemented for better performance. Defaults to the window’s [tabs(for:)](../wkwebextensionwindow/tabs%28for_%29.md) method to find the index if not implemented.

# indexInWindowForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the index of the tab in the window is needed.

## Declaration

```objectivec
- (NSUInteger) indexInWindowForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

This method should be implemented for better performance. Defaults to the window’s [tabsForWebExtensionContext:](../wkwebextensionwindow/tabs%28for_%29.md) method to find the index if not implemented.
