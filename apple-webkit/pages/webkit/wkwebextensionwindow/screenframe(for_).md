> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensionwindow/screenframe(for:)](https://developer.apple.com/documentation/webkit/wkwebextensionwindow/screenframe(for:))

# screenFrame(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Called when the screen frame containing the window is needed.

## Declaration

```swift
optional func screenFrame(for context: WKWebExtensionContext) -> CGRect
```

## Parameters

- `context`: The context associated with the running web extension.

<a id="discussion"></a>

## Discussion

Defaults to [CGRectNull](https://developer.apple.com/documentation/coregraphics/cgrectnull) if not implemented.

# screenFrameForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Called when the screen frame containing the window is needed.

## Declaration

```objectivec
- (CGRect) screenFrameForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context associated with the running web extension.

<a id="discussion"></a>

## Discussion

Defaults to [CGRectNull](https://developer.apple.com/documentation/coregraphics/cgrectnull) if not implemented.
