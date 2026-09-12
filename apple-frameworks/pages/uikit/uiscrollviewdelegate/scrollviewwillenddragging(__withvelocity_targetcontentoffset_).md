> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollviewdelegate/scrollviewwillenddragging(_:withvelocity:targetcontentoffset:)](https://developer.apple.com/documentation/uikit/uiscrollviewdelegate/scrollviewwillenddragging(_:withvelocity:targetcontentoffset:))

# scrollViewWillEndDragging(\_:withVelocity:targetContentOffset:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate when the user finishes scrolling the content.

## Declaration

```swift
optional func scrollViewWillEndDragging(_ scrollView: UIScrollView, withVelocity velocity: CGPoint, targetContentOffset: UnsafeMutablePointer<CGPoint>)
```

## Parameters

- `scrollView`: The scroll-view object where the user ended the touch.
- `velocity`: The velocity of the scroll view (in points per millisecond) at the moment the touch was released.
- `targetContentOffset`: The expected offset when the scrolling action decelerates to a stop.

<a id="Discussion"></a>

## Discussion

Your application can change the value of the `targetContentOffset` parameter to adjust where the scrollview finishes its scrolling animation.

## See Also

### Responding to scrolling and dragging

- [scrollViewDidScroll(\_:)](scrollviewdidscroll%28__%29.md): Tells the delegate when the user scrolls the content view within the scroll view.
- [scrollViewWillBeginDragging(\_:)](scrollviewwillbegindragging%28__%29.md): Tells the delegate when the scroll view is about to start scrolling the content.
- [scrollViewDidEndDragging(\_:willDecelerate:)](scrollviewdidenddragging%28__willdecelerate_%29.md): Tells the delegate when dragging ended in the scroll view.
- [scrollViewShouldScrollToTop(\_:)](scrollviewshouldscrolltotop%28__%29.md): Asks the delegate if the scroll view should scroll to the top of the content.
- [scrollViewDidScrollToTop(\_:)](scrollviewdidscrolltotop%28__%29.md): Tells the delegate that the scroll view scrolled to the top of the content.
- [scrollViewWillBeginDecelerating(\_:)](scrollviewwillbegindecelerating%28__%29.md): Tells the delegate that the scroll view is starting to decelerate the scrolling movement.
- [scrollViewDidEndDecelerating(\_:)](scrollviewdidenddecelerating%28__%29.md): Tells the delegate that the scroll view ended decelerating the scrolling movement.

# scrollViewWillEndDragging:withVelocity:targetContentOffset: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate when the user finishes scrolling the content.

## Declaration

```objectivec
- (void) scrollViewWillEndDragging:(UIScrollView *) scrollView withVelocity:(CGPoint) velocity targetContentOffset:(CGPoint *) targetContentOffset;
```

## Parameters

- `scrollView`: The scroll-view object where the user ended the touch.
- `velocity`: The velocity of the scroll view (in points per millisecond) at the moment the touch was released.
- `targetContentOffset`: The expected offset when the scrolling action decelerates to a stop.

<a id="Discussion"></a>

## Discussion

Your application can change the value of the `targetContentOffset` parameter to adjust where the scrollview finishes its scrolling animation.

## See Also

### Responding to scrolling and dragging

- [scrollViewDidScroll:](scrollviewdidscroll%28__%29.md): Tells the delegate when the user scrolls the content view within the scroll view.
- [scrollViewWillBeginDragging:](scrollviewwillbegindragging%28__%29.md): Tells the delegate when the scroll view is about to start scrolling the content.
- [scrollViewDidEndDragging:willDecelerate:](scrollviewdidenddragging%28__willdecelerate_%29.md): Tells the delegate when dragging ended in the scroll view.
- [scrollViewShouldScrollToTop:](scrollviewshouldscrolltotop%28__%29.md): Asks the delegate if the scroll view should scroll to the top of the content.
- [scrollViewDidScrollToTop:](scrollviewdidscrolltotop%28__%29.md): Tells the delegate that the scroll view scrolled to the top of the content.
- [scrollViewWillBeginDecelerating:](scrollviewwillbegindecelerating%28__%29.md): Tells the delegate that the scroll view is starting to decelerate the scrolling movement.
- [scrollViewDidEndDecelerating:](scrollviewdidenddecelerating%28__%29.md): Tells the delegate that the scroll view ended decelerating the scrolling movement.
