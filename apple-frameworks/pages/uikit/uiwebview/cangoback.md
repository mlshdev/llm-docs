> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiwebview/cangoback

# canGoBack (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0)

A Boolean value indicating whether the receiver can move backward.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```swift
var canGoBack: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), able to move backward; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Moving back and forward

- [canGoForward](cangoforward.md): Deprecated. A Boolean value indicating whether the receiver can move forward.
- [goBack()](goback%28%29.md): Deprecated. Loads the previous location in the back-forward list.
- [goForward()](goforward%28%29.md): Deprecated. Loads the next location in the back-forward list.

# canGoBack (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0)

A Boolean value indicating whether the receiver can move backward.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```objectivec
@property (nonatomic, readonly, getter=canGoBack) BOOL canGoBack;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), able to move backward; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Moving back and forward

- [canGoForward](cangoforward.md): Deprecated. A Boolean value indicating whether the receiver can move forward.
- [goBack](goback%28%29.md): Deprecated. Loads the previous location in the back-forward list.
- [goForward](goforward%28%29.md): Deprecated. Loads the next location in the back-forward list.
