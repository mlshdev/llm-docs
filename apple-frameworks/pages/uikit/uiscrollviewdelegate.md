> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollviewdelegate](https://developer.apple.com/documentation/uikit/uiscrollviewdelegate)

# UIScrollViewDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The interface for the delegate of a scroll view.

## Declaration

```swift
@MainActor protocol UIScrollViewDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The methods that the [UIScrollViewDelegate](uiscrollviewdelegate.md) protocol declares allow the adopting delegate to respond to messages from the [UIScrollView](uiscrollview.md) class. The delegate responds to and affects operations like scrolling, zooming, deceleration of scrolled content, and scrolling animations.

## Topics

### Responding to scrolling and dragging

- [scrollViewDidScroll(\_:)](uiscrollviewdelegate/scrollviewdidscroll%28__%29.md): Tells the delegate when the user scrolls the content view within the scroll view.
- [scrollViewWillBeginDragging(\_:)](uiscrollviewdelegate/scrollviewwillbegindragging%28__%29.md): Tells the delegate when the scroll view is about to start scrolling the content.
- [scrollViewWillEndDragging(\_:withVelocity:targetContentOffset:)](uiscrollviewdelegate/scrollviewwillenddragging%28__withvelocity_targetcontentoffset_%29.md): Tells the delegate when the user finishes scrolling the content.
- [scrollViewDidEndDragging(\_:willDecelerate:)](uiscrollviewdelegate/scrollviewdidenddragging%28__willdecelerate_%29.md): Tells the delegate when dragging ended in the scroll view.
- [scrollViewShouldScrollToTop(\_:)](uiscrollviewdelegate/scrollviewshouldscrolltotop%28__%29.md): Asks the delegate if the scroll view should scroll to the top of the content.
- [scrollViewDidScrollToTop(\_:)](uiscrollviewdelegate/scrollviewdidscrolltotop%28__%29.md): Tells the delegate that the scroll view scrolled to the top of the content.
- [scrollViewWillBeginDecelerating(\_:)](uiscrollviewdelegate/scrollviewwillbegindecelerating%28__%29.md): Tells the delegate that the scroll view is starting to decelerate the scrolling movement.
- [scrollViewDidEndDecelerating(\_:)](uiscrollviewdelegate/scrollviewdidenddecelerating%28__%29.md): Tells the delegate that the scroll view ended decelerating the scrolling movement.

### Managing zooming

- [viewForZooming(in:)](uiscrollviewdelegate/viewforzooming%28in_%29.md): Asks the delegate for the view to scale when zooming is about to occur in the scroll view.
- [scrollViewWillBeginZooming(\_:with:)](uiscrollviewdelegate/scrollviewwillbeginzooming%28__with_%29.md): Tells the delegate that zooming of the content in the scroll view is about to commence.
- [scrollViewDidEndZooming(\_:with:atScale:)](uiscrollviewdelegate/scrollviewdidendzooming%28__with_atscale_%29.md): Tells the delegate when zooming of the content in the scroll view completed.
- [scrollViewDidZoom(\_:)](uiscrollviewdelegate/scrollviewdidzoom%28__%29.md): Tells the delegate that the scroll view’s zoom factor changed.

### Responding to scrolling animations

- [scrollViewDidEndScrollingAnimation(\_:)](uiscrollviewdelegate/scrollviewdidendscrollinganimation%28__%29.md): Tells the delegate when a scrolling animation in the scroll view concludes.

### Responding to inset changes

- [scrollViewDidChangeAdjustedContentInset(\_:)](uiscrollviewdelegate/scrollviewdidchangeadjustedcontentinset%28__%29.md): Tells the delegate when the scroll view’s inset values change.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UICollectionViewDelegate](uicollectionviewdelegate.md)
- [UICollectionViewDelegateFlowLayout](uicollectionviewdelegateflowlayout.md)
- [UIScrollViewAccessibilityDelegate](uiscrollviewaccessibilitydelegate.md)
- [UITableViewDelegate](uitableviewdelegate.md)
- [UITextViewDelegate](uitextviewdelegate.md)

### Conforming Types

- [UICollectionViewController](uicollectionviewcontroller.md)
- [UITableViewController](uitableviewcontroller.md)
- [UIWebView](uiwebview.md)

## See Also

### Responding to scroll view interactions

- [delegate](uiscrollview/delegate.md): The delegate of the scroll view.

# UIScrollViewDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The interface for the delegate of a scroll view.

## Declaration

```objectivec
@protocol UIScrollViewDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The methods that the [UIScrollViewDelegate](uiscrollviewdelegate.md) protocol declares allow the adopting delegate to respond to messages from the [UIScrollView](uiscrollview.md) class. The delegate responds to and affects operations like scrolling, zooming, deceleration of scrolled content, and scrolling animations.

## Topics

### Responding to scrolling and dragging

- [scrollViewDidScroll:](uiscrollviewdelegate/scrollviewdidscroll%28__%29.md): Tells the delegate when the user scrolls the content view within the scroll view.
- [scrollViewWillBeginDragging:](uiscrollviewdelegate/scrollviewwillbegindragging%28__%29.md): Tells the delegate when the scroll view is about to start scrolling the content.
- [scrollViewWillEndDragging:withVelocity:targetContentOffset:](uiscrollviewdelegate/scrollviewwillenddragging%28__withvelocity_targetcontentoffset_%29.md): Tells the delegate when the user finishes scrolling the content.
- [scrollViewDidEndDragging:willDecelerate:](uiscrollviewdelegate/scrollviewdidenddragging%28__willdecelerate_%29.md): Tells the delegate when dragging ended in the scroll view.
- [scrollViewShouldScrollToTop:](uiscrollviewdelegate/scrollviewshouldscrolltotop%28__%29.md): Asks the delegate if the scroll view should scroll to the top of the content.
- [scrollViewDidScrollToTop:](uiscrollviewdelegate/scrollviewdidscrolltotop%28__%29.md): Tells the delegate that the scroll view scrolled to the top of the content.
- [scrollViewWillBeginDecelerating:](uiscrollviewdelegate/scrollviewwillbegindecelerating%28__%29.md): Tells the delegate that the scroll view is starting to decelerate the scrolling movement.
- [scrollViewDidEndDecelerating:](uiscrollviewdelegate/scrollviewdidenddecelerating%28__%29.md): Tells the delegate that the scroll view ended decelerating the scrolling movement.

### Managing zooming

- [viewForZoomingInScrollView:](uiscrollviewdelegate/viewforzooming%28in_%29.md): Asks the delegate for the view to scale when zooming is about to occur in the scroll view.
- [scrollViewWillBeginZooming:withView:](uiscrollviewdelegate/scrollviewwillbeginzooming%28__with_%29.md): Tells the delegate that zooming of the content in the scroll view is about to commence.
- [scrollViewDidEndZooming:withView:atScale:](uiscrollviewdelegate/scrollviewdidendzooming%28__with_atscale_%29.md): Tells the delegate when zooming of the content in the scroll view completed.
- [scrollViewDidZoom:](uiscrollviewdelegate/scrollviewdidzoom%28__%29.md): Tells the delegate that the scroll view’s zoom factor changed.

### Responding to scrolling animations

- [scrollViewDidEndScrollingAnimation:](uiscrollviewdelegate/scrollviewdidendscrollinganimation%28__%29.md): Tells the delegate when a scrolling animation in the scroll view concludes.

### Responding to inset changes

- [scrollViewDidChangeAdjustedContentInset:](uiscrollviewdelegate/scrollviewdidchangeadjustedcontentinset%28__%29.md): Tells the delegate when the scroll view’s inset values change.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UICollectionViewDelegate](uicollectionviewdelegate.md)
- [UIScrollViewAccessibilityDelegate](uiscrollviewaccessibilitydelegate.md)
- [UITableViewDelegate](uitableviewdelegate.md)
- [UITextViewDelegate](uitextviewdelegate.md)

### Conforming Types

- [UIWebView](uiwebview.md)

## See Also

### Responding to scroll view interactions

- [delegate](uiscrollview/delegate.md): The delegate of the scroll view.
