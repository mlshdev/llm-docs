> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/cangoforward](https://developer.apple.com/documentation/uikit/uiwebview/cangoforward)

# canGoForward (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0)

A Boolean value indicating whether the receiver can move forward.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```swift
var canGoForward: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), able to move forward; otherwise, [false](https://developer.apple.com/documentation/swift/false) .

## See Also

### Moving back and forward

- [canGoBack](cangoback.md): Deprecated. A Boolean value indicating whether the receiver can move backward.
- [goBack()](goback%28%29.md): Deprecated. Loads the previous location in the back-forward list.
- [goForward()](goforward%28%29.md): Deprecated. Loads the next location in the back-forward list.

# canGoForward (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0)

A Boolean value indicating whether the receiver can move forward.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```objectivec
@property (nonatomic, readonly, getter=canGoForward) BOOL canGoForward;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), able to move forward; otherwise, [false](https://developer.apple.com/documentation/swift/false) .

## See Also

### Moving back and forward

- [canGoBack](cangoback.md): Deprecated. A Boolean value indicating whether the receiver can move backward.
- [goBack](goback%28%29.md): Deprecated. Loads the previous location in the back-forward list.
- [goForward](goforward%28%29.md): Deprecated. Loads the next location in the back-forward list.
