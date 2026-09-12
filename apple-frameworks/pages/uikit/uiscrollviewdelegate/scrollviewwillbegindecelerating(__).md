> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollviewdelegate/scrollviewwillbegindecelerating(_:)](https://developer.apple.com/documentation/uikit/uiscrollviewdelegate/scrollviewwillbegindecelerating(_:))

# scrollViewWillBeginDecelerating(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the scroll view is starting to decelerate the scrolling movement.

## Declaration

```swift
optional func scrollViewWillBeginDecelerating(_ scrollView: UIScrollView)
```

## Parameters

- `scrollView`: The scroll-view object that’s decelerating the scrolling of the content view.

<a id="Discussion"></a>

## Discussion

The scroll view calls this method as the user’s finger touches up as it’s moving during a scrolling operation; the scroll view continues to move a short distance afterwards. The [isDecelerating](../uiscrollview/isdecelerating.md) property of [UIScrollView](../uiscrollview.md) controls deceleration.

## See Also

### Responding to scrolling and dragging

- [scrollViewDidScroll(\_:)](scrollviewdidscroll%28__%29.md): Tells the delegate when the user scrolls the content view within the scroll view.
- [scrollViewWillBeginDragging(\_:)](scrollviewwillbegindragging%28__%29.md): Tells the delegate when the scroll view is about to start scrolling the content.
- [scrollViewWillEndDragging(\_:withVelocity:targetContentOffset:)](scrollviewwillenddragging%28__withvelocity_targetcontentoffset_%29.md): Tells the delegate when the user finishes scrolling the content.
- [scrollViewDidEndDragging(\_:willDecelerate:)](scrollviewdidenddragging%28__willdecelerate_%29.md): Tells the delegate when dragging ended in the scroll view.
- [scrollViewShouldScrollToTop(\_:)](scrollviewshouldscrolltotop%28__%29.md): Asks the delegate if the scroll view should scroll to the top of the content.
- [scrollViewDidScrollToTop(\_:)](scrollviewdidscrolltotop%28__%29.md): Tells the delegate that the scroll view scrolled to the top of the content.
- [scrollViewDidEndDecelerating(\_:)](scrollviewdidenddecelerating%28__%29.md): Tells the delegate that the scroll view ended decelerating the scrolling movement.

# scrollViewWillBeginDecelerating: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate that the scroll view is starting to decelerate the scrolling movement.

## Declaration

```objectivec
- (void) scrollViewWillBeginDecelerating:(UIScrollView *) scrollView;
```

## Parameters

- `scrollView`: The scroll-view object that’s decelerating the scrolling of the content view.

<a id="Discussion"></a>

## Discussion

The scroll view calls this method as the user’s finger touches up as it’s moving during a scrolling operation; the scroll view continues to move a short distance afterwards. The [decelerating](../uiscrollview/isdecelerating.md) property of [UIScrollView](../uiscrollview.md) controls deceleration.

## See Also

### Responding to scrolling and dragging

- [scrollViewDidScroll:](scrollviewdidscroll%28__%29.md): Tells the delegate when the user scrolls the content view within the scroll view.
- [scrollViewWillBeginDragging:](scrollviewwillbegindragging%28__%29.md): Tells the delegate when the scroll view is about to start scrolling the content.
- [scrollViewWillEndDragging:withVelocity:targetContentOffset:](scrollviewwillenddragging%28__withvelocity_targetcontentoffset_%29.md): Tells the delegate when the user finishes scrolling the content.
- [scrollViewDidEndDragging:willDecelerate:](scrollviewdidenddragging%28__willdecelerate_%29.md): Tells the delegate when dragging ended in the scroll view.
- [scrollViewShouldScrollToTop:](scrollviewshouldscrolltotop%28__%29.md): Asks the delegate if the scroll view should scroll to the top of the content.
- [scrollViewDidScrollToTop:](scrollviewdidscrolltotop%28__%29.md): Tells the delegate that the scroll view scrolled to the top of the content.
- [scrollViewDidEndDecelerating:](scrollviewdidenddecelerating%28__%29.md): Tells the delegate that the scroll view ended decelerating the scrolling movement.
