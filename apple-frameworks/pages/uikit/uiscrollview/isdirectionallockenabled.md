> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/isdirectionallockenabled](https://developer.apple.com/documentation/uikit/uiscrollview/isdirectionallockenabled)

# isDirectionalLockEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether scrolling is disabled in a particular direction.

## Declaration

```swift
var isDirectionalLockEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is [false](https://developer.apple.com/documentation/swift/false), scrolling is permitted in both horizontal and vertical directions. If this property is [true](https://developer.apple.com/documentation/swift/true) and the user begins dragging in one general direction (horizontally or vertically), the scroll view disables scrolling in the other direction. If the drag direction is diagonal, then scrolling doesn’t lock and the user can drag in any direction until the drag completes. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the scroll view

- [isScrollEnabled](isscrollenabled.md): A Boolean value that determines whether scrolling is enabled.
- [isPagingEnabled](ispagingenabled.md): A Boolean value that determines whether paging is enabled for the scroll view.
- [scrollsToTop](scrollstotop.md): A Boolean value that controls whether the scroll-to-top gesture is enabled.
- [bounces](bounces.md): A Boolean value that controls whether the scroll view bounces past the edge of content and back again.
- [bouncesHorizontally](bounceshorizontally.md): A Boolean value that determines whether the scroll view bounces when it reaches the ends of its horizontal axis.
- [bouncesVertically](bouncesvertically.md): A Boolean value that determines whether the scroll view bounces when it reaches the ends of its vertical axis.
- [alwaysBounceVertical](alwaysbouncevertical.md): A Boolean value that determines whether bouncing always occurs when vertical scrolling reaches the end of the content.
- [alwaysBounceHorizontal](alwaysbouncehorizontal.md): A Boolean value that determines whether bouncing always occurs when horizontal scrolling reaches the end of the content view.

# directionalLockEnabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether scrolling is disabled in a particular direction.

## Declaration

```objectivec
@property (nonatomic, getter=isDirectionalLockEnabled) BOOL directionalLockEnabled;
```

<a id="Discussion"></a>

## Discussion

If this property is [false](https://developer.apple.com/documentation/swift/false), scrolling is permitted in both horizontal and vertical directions. If this property is [true](https://developer.apple.com/documentation/swift/true) and the user begins dragging in one general direction (horizontally or vertically), the scroll view disables scrolling in the other direction. If the drag direction is diagonal, then scrolling doesn’t lock and the user can drag in any direction until the drag completes. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the scroll view

- [scrollEnabled](isscrollenabled.md): A Boolean value that determines whether scrolling is enabled.
- [pagingEnabled](ispagingenabled.md): A Boolean value that determines whether paging is enabled for the scroll view.
- [scrollsToTop](scrollstotop.md): A Boolean value that controls whether the scroll-to-top gesture is enabled.
- [bounces](bounces.md): A Boolean value that controls whether the scroll view bounces past the edge of content and back again.
- [bouncesHorizontally](bounceshorizontally.md): A Boolean value that determines whether the scroll view bounces when it reaches the ends of its horizontal axis.
- [bouncesVertically](bouncesvertically.md): A Boolean value that determines whether the scroll view bounces when it reaches the ends of its vertical axis.
- [alwaysBounceVertical](alwaysbouncevertical.md): A Boolean value that determines whether bouncing always occurs when vertical scrolling reaches the end of the content.
- [alwaysBounceHorizontal](alwaysbouncehorizontal.md): A Boolean value that determines whether bouncing always occurs when horizontal scrolling reaches the end of the content view.
