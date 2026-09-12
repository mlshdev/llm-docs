> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/isscrollenabled](https://developer.apple.com/documentation/uikit/uiscrollview/isscrollenabled)

# isScrollEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether scrolling is enabled.

## Declaration

```swift
var isScrollEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), which indicates that scrolling is enabled. Setting the value to [false](https://developer.apple.com/documentation/swift/false) disables scrolling.

When scrolling is disabled, the scroll view doesn’t accept touch events; it forwards them up the responder chain.

## See Also

### Configuring the scroll view

- [isDirectionalLockEnabled](isdirectionallockenabled.md): A Boolean value that determines whether scrolling is disabled in a particular direction.
- [isPagingEnabled](ispagingenabled.md): A Boolean value that determines whether paging is enabled for the scroll view.
- [scrollsToTop](scrollstotop.md): A Boolean value that controls whether the scroll-to-top gesture is enabled.
- [bounces](bounces.md): A Boolean value that controls whether the scroll view bounces past the edge of content and back again.
- [bouncesHorizontally](bounceshorizontally.md): A Boolean value that determines whether the scroll view bounces when it reaches the ends of its horizontal axis.
- [bouncesVertically](bouncesvertically.md): A Boolean value that determines whether the scroll view bounces when it reaches the ends of its vertical axis.
- [alwaysBounceVertical](alwaysbouncevertical.md): A Boolean value that determines whether bouncing always occurs when vertical scrolling reaches the end of the content.
- [alwaysBounceHorizontal](alwaysbouncehorizontal.md): A Boolean value that determines whether bouncing always occurs when horizontal scrolling reaches the end of the content view.

# scrollEnabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether scrolling is enabled.

## Declaration

```objectivec
@property (nonatomic, getter=isScrollEnabled) BOOL scrollEnabled;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), which indicates that scrolling is enabled. Setting the value to [false](https://developer.apple.com/documentation/swift/false) disables scrolling.

When scrolling is disabled, the scroll view doesn’t accept touch events; it forwards them up the responder chain.

## See Also

### Configuring the scroll view

- [directionalLockEnabled](isdirectionallockenabled.md): A Boolean value that determines whether scrolling is disabled in a particular direction.
- [pagingEnabled](ispagingenabled.md): A Boolean value that determines whether paging is enabled for the scroll view.
- [scrollsToTop](scrollstotop.md): A Boolean value that controls whether the scroll-to-top gesture is enabled.
- [bounces](bounces.md): A Boolean value that controls whether the scroll view bounces past the edge of content and back again.
- [bouncesHorizontally](bounceshorizontally.md): A Boolean value that determines whether the scroll view bounces when it reaches the ends of its horizontal axis.
- [bouncesVertically](bouncesvertically.md): A Boolean value that determines whether the scroll view bounces when it reaches the ends of its vertical axis.
- [alwaysBounceVertical](alwaysbouncevertical.md): A Boolean value that determines whether bouncing always occurs when vertical scrolling reaches the end of the content.
- [alwaysBounceHorizontal](alwaysbouncehorizontal.md): A Boolean value that determines whether bouncing always occurs when horizontal scrolling reaches the end of the content view.
