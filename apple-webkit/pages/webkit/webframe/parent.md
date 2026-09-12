> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframe/parent](https://developer.apple.com/documentation/webkit/webframe/parent)

# parent (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The web frame’s parent web frame.

## Declaration

```swift
var parent: WebFrame! { get }
```

## See Also

### Getting Related Frames and Views

- [childFrames](childframes.md): Deprecated. The frames of the web frame’s immediate children.
- [frameView](frameview.md): Deprecated. The web frame’s view object.
- [webView](webview.md): Deprecated. The view object that manages the web frame.

# parentFrame (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The web frame’s parent web frame.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) WebFrame * parentFrame;
```

## See Also

### Getting Related Frames and Views

- [childFrames](childframes.md): Deprecated. The frames of the web frame’s immediate children.
- [frameView](frameview.md): Deprecated. The web frame’s view object.
- [webView](webview.md): Deprecated. The view object that manages the web frame.
