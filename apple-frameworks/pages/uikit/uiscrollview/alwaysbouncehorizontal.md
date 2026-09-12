> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/alwaysbouncehorizontal](https://developer.apple.com/documentation/uikit/uiscrollview/alwaysbouncehorizontal)

# alwaysBounceHorizontal (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether bouncing always occurs when horizontal scrolling reaches the end of the content view.

## Declaration

```swift
var alwaysBounceHorizontal: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true) and [bouncesHorizontally](bounceshorizontally.md) is [true](https://developer.apple.com/documentation/swift/true), the scroll view allows horizontal dragging even if the content is smaller than the bounds of the scroll view. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the scroll view

- [isScrollEnabled](isscrollenabled.md): A Boolean value that determines whether scrolling is enabled.
- [isDirectionalLockEnabled](isdirectionallockenabled.md): A Boolean value that determines whether scrolling is disabled in a particular direction.
- [isPagingEnabled](ispagingenabled.md): A Boolean value that determines whether paging is enabled for the scroll view.
- [scrollsToTop](scrollstotop.md): A Boolean value that controls whether the scroll-to-top gesture is enabled.
- [bounces](bounces.md): A Boolean value that controls whether the scroll view bounces past the edge of content and back again.
- [bouncesHorizontally](bounceshorizontally.md): A Boolean value that determines whether the scroll view bounces when it reaches the ends of its horizontal axis.
- [bouncesVertically](bouncesvertically.md): A Boolean value that determines whether the scroll view bounces when it reaches the ends of its vertical axis.
- [alwaysBounceVertical](alwaysbouncevertical.md): A Boolean value that determines whether bouncing always occurs when vertical scrolling reaches the end of the content.

# alwaysBounceHorizontal (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether bouncing always occurs when horizontal scrolling reaches the end of the content view.

## Declaration

```objectivec
@property (nonatomic) BOOL alwaysBounceHorizontal;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true) and [bouncesHorizontally](bounceshorizontally.md) is [true](https://developer.apple.com/documentation/swift/true), the scroll view allows horizontal dragging even if the content is smaller than the bounds of the scroll view. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the scroll view

- [scrollEnabled](isscrollenabled.md): A Boolean value that determines whether scrolling is enabled.
- [directionalLockEnabled](isdirectionallockenabled.md): A Boolean value that determines whether scrolling is disabled in a particular direction.
- [pagingEnabled](ispagingenabled.md): A Boolean value that determines whether paging is enabled for the scroll view.
- [scrollsToTop](scrollstotop.md): A Boolean value that controls whether the scroll-to-top gesture is enabled.
- [bounces](bounces.md): A Boolean value that controls whether the scroll view bounces past the edge of content and back again.
- [bouncesHorizontally](bounceshorizontally.md): A Boolean value that determines whether the scroll view bounces when it reaches the ends of its horizontal axis.
- [bouncesVertically](bouncesvertically.md): A Boolean value that determines whether the scroll view bounces when it reaches the ends of its vertical axis.
- [alwaysBounceVertical](alwaysbouncevertical.md): A Boolean value that determines whether bouncing always occurs when vertical scrolling reaches the end of the content.
