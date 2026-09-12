> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensionwindow/tabs(for:)](https://developer.apple.com/documentation/webkit/wkwebextensionwindow/tabs(for:))

# tabs(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the tabs are needed for the window.

## Declaration

```swift
optional func tabs(for context: WKWebExtensionContext) -> [any WKWebExtensionTab]
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to an empty array if not implemented.

# tabsForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the tabs are needed for the window.

## Declaration

```objectivec
- (NSArray<id<WKWebExtensionTab>> *) tabsForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to an empty array if not implemented.
