> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframe/childframes](https://developer.apple.com/documentation/webkit/webframe/childframes)

# childFrames (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The frames of the web frame’s immediate children.

## Declaration

```swift
var childFrames: [Any]! { get }
```

<a id="Discussion"></a>

## Discussion

Each child web frame is an instance of `WebFrame` and corresponds to an HTML frameset or `iframe` element.

## See Also

### Getting Related Frames and Views

- [parent](parent.md): Deprecated. The web frame’s parent web frame.
- [frameView](frameview.md): Deprecated. The web frame’s view object.
- [webView](webview.md): Deprecated. The view object that manages the web frame.

# childFrames (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The frames of the web frame’s immediate children.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray * childFrames;
```

<a id="Discussion"></a>

## Discussion

Each child web frame is an instance of `WebFrame` and corresponds to an HTML frameset or `iframe` element.

## See Also

### Getting Related Frames and Views

- [parentFrame](parent.md): Deprecated. The web frame’s parent web frame.
- [frameView](frameview.md): Deprecated. The web frame’s view object.
- [webView](webview.md): Deprecated. The view object that manages the web frame.
