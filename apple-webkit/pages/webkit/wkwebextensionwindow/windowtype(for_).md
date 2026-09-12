> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensionwindow/windowtype(for:)](https://developer.apple.com/documentation/webkit/wkwebextensionwindow/windowtype(for:))

# windowType(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the type of the window is needed.

## Declaration

```swift
optional func windowType(for context: WKWebExtensionContext) -> WKWebExtension.WindowType
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to[WKWebExtension.WindowType.normal](../wkwebextension/windowtype/normal.md) if not implemented.

# windowTypeForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the type of the window is needed.

## Declaration

```objectivec
- (WKWebExtensionWindowType) windowTypeForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to[WKWebExtensionWindowTypeNormal](../wkwebextension/windowtype/normal.md) if not implemented.
