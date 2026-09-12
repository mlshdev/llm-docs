> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollviewdelegate/scrollviewshouldscrolltotop(_:)](https://developer.apple.com/documentation/uikit/uiscrollviewdelegate/scrollviewshouldscrolltotop(_:))

# scrollViewShouldScrollToTop(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate if the scroll view should scroll to the top of the content.

## Declaration

```swift
optional func scrollViewShouldScrollToTop(_ scrollView: UIScrollView) -> Bool
```

## Parameters

- `scrollView`: The scroll-view object requesting this information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to permit scrolling to the top of the content, [false](https://developer.apple.com/documentation/swift/false) to disallow it.

<a id="Discussion"></a>

## Discussion

If the delegate doesn’t implement this method, [true](https://developer.apple.com/documentation/swift/true) is assumed. For the scroll-to-top gesture (a tap on the status bar) to be effective, the [scrollsToTop](../uiscrollview/scrollstotop.md) property of the [UIScrollView](../uiscrollview.md) must be set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Responding to scrolling and dragging

- [scrollViewDidScroll(\_:)](scrollviewdidscroll%28__%29.md): Tells the delegate when the user scrolls the content view within the scroll view.
- [scrollViewWillBeginDragging(\_:)](scrollviewwillbegindragging%28__%29.md): Tells the delegate when the scroll view is about to start scrolling the content.
- [scrollViewWillEndDragging(\_:withVelocity:targetContentOffset:)](scrollviewwillenddragging%28__withvelocity_targetcontentoffset_%29.md): Tells the delegate when the user finishes scrolling the content.
- [scrollViewDidEndDragging(\_:willDecelerate:)](scrollviewdidenddragging%28__willdecelerate_%29.md): Tells the delegate when dragging ended in the scroll view.
- [scrollViewDidScrollToTop(\_:)](scrollviewdidscrolltotop%28__%29.md): Tells the delegate that the scroll view scrolled to the top of the content.
- [scrollViewWillBeginDecelerating(\_:)](scrollviewwillbegindecelerating%28__%29.md): Tells the delegate that the scroll view is starting to decelerate the scrolling movement.
- [scrollViewDidEndDecelerating(\_:)](scrollviewdidenddecelerating%28__%29.md): Tells the delegate that the scroll view ended decelerating the scrolling movement.

# scrollViewShouldScrollToTop: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate if the scroll view should scroll to the top of the content.

## Declaration

```objectivec
- (BOOL) scrollViewShouldScrollToTop:(UIScrollView *) scrollView;
```

## Parameters

- `scrollView`: The scroll-view object requesting this information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to permit scrolling to the top of the content, [false](https://developer.apple.com/documentation/swift/false) to disallow it.

<a id="Discussion"></a>

## Discussion

If the delegate doesn’t implement this method, [true](https://developer.apple.com/documentation/swift/true) is assumed. For the scroll-to-top gesture (a tap on the status bar) to be effective, the [scrollsToTop](../uiscrollview/scrollstotop.md) property of the [UIScrollView](../uiscrollview.md) must be set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Responding to scrolling and dragging

- [scrollViewDidScroll:](scrollviewdidscroll%28__%29.md): Tells the delegate when the user scrolls the content view within the scroll view.
- [scrollViewWillBeginDragging:](scrollviewwillbegindragging%28__%29.md): Tells the delegate when the scroll view is about to start scrolling the content.
- [scrollViewWillEndDragging:withVelocity:targetContentOffset:](scrollviewwillenddragging%28__withvelocity_targetcontentoffset_%29.md): Tells the delegate when the user finishes scrolling the content.
- [scrollViewDidEndDragging:willDecelerate:](scrollviewdidenddragging%28__willdecelerate_%29.md): Tells the delegate when dragging ended in the scroll view.
- [scrollViewDidScrollToTop:](scrollviewdidscrolltotop%28__%29.md): Tells the delegate that the scroll view scrolled to the top of the content.
- [scrollViewWillBeginDecelerating:](scrollviewwillbegindecelerating%28__%29.md): Tells the delegate that the scroll view is starting to decelerate the scrolling movement.
- [scrollViewDidEndDecelerating:](scrollviewdidenddecelerating%28__%29.md): Tells the delegate that the scroll view ended decelerating the scrolling movement.
