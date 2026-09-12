> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollviewdelegate/scrollviewdidenddragging(_:willdecelerate:)](https://developer.apple.com/documentation/uikit/uiscrollviewdelegate/scrollviewdidenddragging(_:willdecelerate:))

# scrollViewDidEndDragging(\_:willDecelerate:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate when dragging ended in the scroll view.

## Declaration

```swift
optional func scrollViewDidEndDragging(_ scrollView: UIScrollView, willDecelerate decelerate: Bool)
```

## Parameters

- `scrollView`: The scroll-view object that finished scrolling the content view.
- `decelerate`: [true](https://developer.apple.com/documentation/swift/true) if the scrolling movement will continue, but decelerate, after a touch-up gesture during a dragging operation. If the value is [false](https://developer.apple.com/documentation/swift/false), scrolling stops immediately upon touch-up.

<a id="Discussion"></a>

## Discussion

The scroll view sends this message when the user’s finger touches up after dragging content. The [isDecelerating](../uiscrollview/isdecelerating.md) property of [UIScrollView](../uiscrollview.md) controls deceleration.

## See Also

### Responding to scrolling and dragging

- [scrollViewDidScroll(\_:)](scrollviewdidscroll%28__%29.md): Tells the delegate when the user scrolls the content view within the scroll view.
- [scrollViewWillBeginDragging(\_:)](scrollviewwillbegindragging%28__%29.md): Tells the delegate when the scroll view is about to start scrolling the content.
- [scrollViewWillEndDragging(\_:withVelocity:targetContentOffset:)](scrollviewwillenddragging%28__withvelocity_targetcontentoffset_%29.md): Tells the delegate when the user finishes scrolling the content.
- [scrollViewShouldScrollToTop(\_:)](scrollviewshouldscrolltotop%28__%29.md): Asks the delegate if the scroll view should scroll to the top of the content.
- [scrollViewDidScrollToTop(\_:)](scrollviewdidscrolltotop%28__%29.md): Tells the delegate that the scroll view scrolled to the top of the content.
- [scrollViewWillBeginDecelerating(\_:)](scrollviewwillbegindecelerating%28__%29.md): Tells the delegate that the scroll view is starting to decelerate the scrolling movement.
- [scrollViewDidEndDecelerating(\_:)](scrollviewdidenddecelerating%28__%29.md): Tells the delegate that the scroll view ended decelerating the scrolling movement.

# scrollViewDidEndDragging:willDecelerate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate when dragging ended in the scroll view.

## Declaration

```objectivec
- (void) scrollViewDidEndDragging:(UIScrollView *) scrollView willDecelerate:(BOOL) decelerate;
```

## Parameters

- `scrollView`: The scroll-view object that finished scrolling the content view.
- `decelerate`: [true](https://developer.apple.com/documentation/swift/true) if the scrolling movement will continue, but decelerate, after a touch-up gesture during a dragging operation. If the value is [false](https://developer.apple.com/documentation/swift/false), scrolling stops immediately upon touch-up.

<a id="Discussion"></a>

## Discussion

The scroll view sends this message when the user’s finger touches up after dragging content. The [decelerating](../uiscrollview/isdecelerating.md) property of [UIScrollView](../uiscrollview.md) controls deceleration.

## See Also

### Responding to scrolling and dragging

- [scrollViewDidScroll:](scrollviewdidscroll%28__%29.md): Tells the delegate when the user scrolls the content view within the scroll view.
- [scrollViewWillBeginDragging:](scrollviewwillbegindragging%28__%29.md): Tells the delegate when the scroll view is about to start scrolling the content.
- [scrollViewWillEndDragging:withVelocity:targetContentOffset:](scrollviewwillenddragging%28__withvelocity_targetcontentoffset_%29.md): Tells the delegate when the user finishes scrolling the content.
- [scrollViewShouldScrollToTop:](scrollviewshouldscrolltotop%28__%29.md): Asks the delegate if the scroll view should scroll to the top of the content.
- [scrollViewDidScrollToTop:](scrollviewdidscrolltotop%28__%29.md): Tells the delegate that the scroll view scrolled to the top of the content.
- [scrollViewWillBeginDecelerating:](scrollviewwillbegindecelerating%28__%29.md): Tells the delegate that the scroll view is starting to decelerate the scrolling movement.
- [scrollViewDidEndDecelerating:](scrollviewdidenddecelerating%28__%29.md): Tells the delegate that the scroll view ended decelerating the scrolling movement.
