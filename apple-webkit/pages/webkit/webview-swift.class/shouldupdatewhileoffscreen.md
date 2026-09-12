> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/shouldupdatewhileoffscreen](https://developer.apple.com/documentation/webkit/webview-swift.class/shouldupdatewhileoffscreen)

# shouldUpdateWhileOffscreen (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean that inidicates whether the web view should update even when it is not in a window that is currently visible.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
var shouldUpdateWhileOffscreen: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the web view updates regardless if it is visible. If [false](https://developer.apple.com/documentation/swift/false), it updates only if it is visible, possibly improving performance, and then updates automatically when it becomes visible. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Drawing

- [drawsBackground](drawsbackground.md): Deprecated. A Boolean that indicates whether the web view draws a background.

# shouldUpdateWhileOffscreen (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean that inidicates whether the web view should update even when it is not in a window that is currently visible.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldUpdateWhileOffscreen;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the web view updates regardless if it is visible. If [false](https://developer.apple.com/documentation/swift/false), it updates only if it is visible, possibly improving performance, and then updates automatically when it becomes visible. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Drawing

- [drawsBackground](drawsbackground.md): Deprecated. A Boolean that indicates whether the web view draws a background.
