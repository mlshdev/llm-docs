> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/shouldclosewithwindow](https://developer.apple.com/documentation/webkit/webview-swift.class/shouldclosewithwindow)

# shouldCloseWithWindow (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean that indicates whether the web view should close when its window or host window closes.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
var shouldCloseWithWindow: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the web view should close; otherwise, it should not.

## See Also

### Closing the View

- [close()](close%28%29.md): Deprecated. Closes the web view when it’s no longer needed.

# shouldCloseWithWindow (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean that indicates whether the web view should close when its window or host window closes.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldCloseWithWindow;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the web view should close; otherwise, it should not.

## See Also

### Closing the View

- [close](close%28%29.md): Deprecated. Closes the web view when it’s no longer needed.
