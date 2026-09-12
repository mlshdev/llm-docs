> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensionwindow/activetab(for:)](https://developer.apple.com/documentation/webkit/wkwebextensionwindow/activetab(for:))

# activeTab(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the active tab is needed for the window.

## Declaration

```swift
optional func activeTab(for context: WKWebExtensionContext) -> (any WKWebExtensionTab)?
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to `nil` if not implemented.

# activeTabForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the active tab is needed for the window.

## Declaration

```objectivec
- (id<WKWebExtensionTab>) activeTabForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to `nil` if not implemented.
