> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensionwindow/windowstate(for:)](https://developer.apple.com/documentation/webkit/wkwebextensionwindow/windowstate(for:))

# windowState(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the state of the window is needed.

## Declaration

```swift
optional func windowState(for context: WKWebExtensionContext) -> WKWebExtension.WindowState
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to[WKWebExtension.WindowState.normal](../wkwebextension/windowstate/normal.md) if not implemented.

# windowStateForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the state of the window is needed.

## Declaration

```objectivec
- (WKWebExtensionWindowState) windowStateForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to[WKWebExtensionWindowStateNormal](../wkwebextension/windowstate/normal.md) if not implemented.
