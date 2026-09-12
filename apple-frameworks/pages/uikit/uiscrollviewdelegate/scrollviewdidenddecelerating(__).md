> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollviewdelegate/scrollviewdidenddecelerating(_:)](https://developer.apple.com/documentation/uikit/uiscrollviewdelegate/scrollviewdidenddecelerating(_:))

# scrollViewDidEndDecelerating(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the scroll view ended decelerating the scrolling movement.

## Declaration

```swift
optional func scrollViewDidEndDecelerating(_ scrollView: UIScrollView)
```

## Parameters

- `scrollView`: The scroll-view object that’s decelerating the scrolling of the content view.

<a id="Discussion"></a>

## Discussion

The scroll view calls this method when the scrolling movement comes to a halt. The [isDecelerating](../uiscrollview/isdecelerating.md) property of `UIScrollView` controls deceleration.

## See Also

### Responding to scrolling and dragging

- [scrollViewDidScroll(\_:)](scrollviewdidscroll%28__%29.md): Tells the delegate when the user scrolls the content view within the scroll view.
- [scrollViewWillBeginDragging(\_:)](scrollviewwillbegindragging%28__%29.md): Tells the delegate when the scroll view is about to start scrolling the content.
- [scrollViewWillEndDragging(\_:withVelocity:targetContentOffset:)](scrollviewwillenddragging%28__withvelocity_targetcontentoffset_%29.md): Tells the delegate when the user finishes scrolling the content.
- [scrollViewDidEndDragging(\_:willDecelerate:)](scrollviewdidenddragging%28__willdecelerate_%29.md): Tells the delegate when dragging ended in the scroll view.
- [scrollViewShouldScrollToTop(\_:)](scrollviewshouldscrolltotop%28__%29.md): Asks the delegate if the scroll view should scroll to the top of the content.
- [scrollViewDidScrollToTop(\_:)](scrollviewdidscrolltotop%28__%29.md): Tells the delegate that the scroll view scrolled to the top of the content.
- [scrollViewWillBeginDecelerating(\_:)](scrollviewwillbegindecelerating%28__%29.md): Tells the delegate that the scroll view is starting to decelerate the scrolling movement.

# scrollViewDidEndDecelerating: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate that the scroll view ended decelerating the scrolling movement.

## Declaration

```objectivec
- (void) scrollViewDidEndDecelerating:(UIScrollView *) scrollView;
```

## Parameters

- `scrollView`: The scroll-view object that’s decelerating the scrolling of the content view.

<a id="Discussion"></a>

## Discussion

The scroll view calls this method when the scrolling movement comes to a halt. The [decelerating](../uiscrollview/isdecelerating.md) property of `UIScrollView` controls deceleration.

## See Also

### Responding to scrolling and dragging

- [scrollViewDidScroll:](scrollviewdidscroll%28__%29.md): Tells the delegate when the user scrolls the content view within the scroll view.
- [scrollViewWillBeginDragging:](scrollviewwillbegindragging%28__%29.md): Tells the delegate when the scroll view is about to start scrolling the content.
- [scrollViewWillEndDragging:withVelocity:targetContentOffset:](scrollviewwillenddragging%28__withvelocity_targetcontentoffset_%29.md): Tells the delegate when the user finishes scrolling the content.
- [scrollViewDidEndDragging:willDecelerate:](scrollviewdidenddragging%28__willdecelerate_%29.md): Tells the delegate when dragging ended in the scroll view.
- [scrollViewShouldScrollToTop:](scrollviewshouldscrolltotop%28__%29.md): Asks the delegate if the scroll view should scroll to the top of the content.
- [scrollViewDidScrollToTop:](scrollviewdidscrolltotop%28__%29.md): Tells the delegate that the scroll view scrolled to the top of the content.
- [scrollViewWillBeginDecelerating:](scrollviewwillbegindecelerating%28__%29.md): Tells the delegate that the scroll view is starting to decelerate the scrolling movement.
