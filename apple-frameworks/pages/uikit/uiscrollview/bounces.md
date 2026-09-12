> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/bounces](https://developer.apple.com/documentation/uikit/uiscrollview/bounces)

# bounces (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that controls whether the scroll view bounces past the edge of content and back again.

## Declaration

```swift
var bounces: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the scroll view bounces when it encounters a boundary of the content. Bouncing visually indicates that scrolling has reached an edge of the content. If the value is [false](https://developer.apple.com/documentation/swift/false), scrolling stops immediately at the content boundary without bouncing. The default value is [true](https://developer.apple.com/documentation/swift/true).

Setting [bounces](bounces.md) is equivalent to setting both [bouncesHorizontally](bounceshorizontally.md) and [bouncesVertically](bouncesvertically.md) to the same value. To set different behavior for the two axes, set those properties to distinct values.

## See Also

### Configuring the scroll view

- [isScrollEnabled](isscrollenabled.md): A Boolean value that determines whether scrolling is enabled.
- [isDirectionalLockEnabled](isdirectionallockenabled.md): A Boolean value that determines whether scrolling is disabled in a particular direction.
- [isPagingEnabled](ispagingenabled.md): A Boolean value that determines whether paging is enabled for the scroll view.
- [scrollsToTop](scrollstotop.md): A Boolean value that controls whether the scroll-to-top gesture is enabled.
- [bouncesHorizontally](bounceshorizontally.md): A Boolean value that determines whether the scroll view bounces when it reaches the ends of its horizontal axis.
- [bouncesVertically](bouncesvertically.md): A Boolean value that determines whether the scroll view bounces when it reaches the ends of its vertical axis.
- [alwaysBounceVertical](alwaysbouncevertical.md): A Boolean value that determines whether bouncing always occurs when vertical scrolling reaches the end of the content.
- [alwaysBounceHorizontal](alwaysbouncehorizontal.md): A Boolean value that determines whether bouncing always occurs when horizontal scrolling reaches the end of the content view.

# bounces (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that controls whether the scroll view bounces past the edge of content and back again.

## Declaration

```objectivec
@property (nonatomic) BOOL bounces;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the scroll view bounces when it encounters a boundary of the content. Bouncing visually indicates that scrolling has reached an edge of the content. If the value is [false](https://developer.apple.com/documentation/swift/false), scrolling stops immediately at the content boundary without bouncing. The default value is [true](https://developer.apple.com/documentation/swift/true).

Setting [bounces](bounces.md) is equivalent to setting both [bouncesHorizontally](bounceshorizontally.md) and [bouncesVertically](bouncesvertically.md) to the same value. To set different behavior for the two axes, set those properties to distinct values.

## See Also

### Configuring the scroll view

- [scrollEnabled](isscrollenabled.md): A Boolean value that determines whether scrolling is enabled.
- [directionalLockEnabled](isdirectionallockenabled.md): A Boolean value that determines whether scrolling is disabled in a particular direction.
- [pagingEnabled](ispagingenabled.md): A Boolean value that determines whether paging is enabled for the scroll view.
- [scrollsToTop](scrollstotop.md): A Boolean value that controls whether the scroll-to-top gesture is enabled.
- [bouncesHorizontally](bounceshorizontally.md): A Boolean value that determines whether the scroll view bounces when it reaches the ends of its horizontal axis.
- [bouncesVertically](bouncesvertically.md): A Boolean value that determines whether the scroll view bounces when it reaches the ends of its vertical axis.
- [alwaysBounceVertical](alwaysbouncevertical.md): A Boolean value that determines whether bouncing always occurs when vertical scrolling reaches the end of the content.
- [alwaysBounceHorizontal](alwaysbouncehorizontal.md): A Boolean value that determines whether bouncing always occurs when horizontal scrolling reaches the end of the content view.
