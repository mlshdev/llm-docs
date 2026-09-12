> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollviewdelegate/scrollviewdidendscrollinganimation(_:)](https://developer.apple.com/documentation/uikit/uiscrollviewdelegate/scrollviewdidendscrollinganimation(_:))

# scrollViewDidEndScrollingAnimation(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate when a scrolling animation in the scroll view concludes.

## Declaration

```swift
optional func scrollViewDidEndScrollingAnimation(_ scrollView: UIScrollView)
```

## Parameters

- `scrollView`: The scroll-view object that’s performing the scrolling animation.

<a id="Discussion"></a>

## Discussion

The scroll view calls this method at the end of its implementations of the [setContentOffset(\_:animated:)](../uiscrollview/setcontentoffset%28__animated_%29.md) and [scrollRectToVisible(\_:animated:)](../uiscrollview/scrollrecttovisible%28__animated_%29.md) methods, but only if animations are requested.

# scrollViewDidEndScrollingAnimation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate when a scrolling animation in the scroll view concludes.

## Declaration

```objectivec
- (void) scrollViewDidEndScrollingAnimation:(UIScrollView *) scrollView;
```

## Parameters

- `scrollView`: The scroll-view object that’s performing the scrolling animation.

<a id="Discussion"></a>

## Discussion

The scroll view calls this method at the end of its implementations of the [setContentOffset:animated:](../uiscrollview/setcontentoffset%28__animated_%29.md) and [scrollRectToVisible:animated:](../uiscrollview/scrollrecttovisible%28__animated_%29.md) methods, but only if animations are requested.
