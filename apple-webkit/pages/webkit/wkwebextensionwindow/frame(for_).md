> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensionwindow/frame(for:)](https://developer.apple.com/documentation/webkit/wkwebextensionwindow/frame(for:))

# frame(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the frame of the window is needed.

## Declaration

```swift
optional func frame(for context: WKWebExtensionContext) -> CGRect
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to [CGRectNull](https://developer.apple.com/documentation/coregraphics/cgrectnull) if not implemented.

# frameForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the frame of the window is needed.

## Declaration

```objectivec
- (CGRect) frameForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to [CGRectNull](https://developer.apple.com/documentation/coregraphics/cgrectnull) if not implemented.
