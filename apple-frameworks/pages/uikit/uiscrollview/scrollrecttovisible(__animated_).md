> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/scrollrecttovisible(_:animated:)](https://developer.apple.com/documentation/uikit/uiscrollview/scrollrecttovisible(_:animated:))

# scrollRectToVisible(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Scrolls a specific area of the content so that it’s visible in the scroll view.

## Declaration

```swift
func scrollRectToVisible(_ rect: CGRect, animated: Bool)
```

## Parameters

- `rect`: A rectangle defining an area of the content view. The rectangle should be in the coordinate space of the scroll view.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the scrolling should be animated, [false](https://developer.apple.com/documentation/swift/false) if it should be immediate.

<a id="Discussion"></a>

## Discussion

This method scrolls the content view so that the area defined by `rect` is just visible inside the scroll view. If the area is already visible, the method does nothing.

# scrollRectToVisible:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Scrolls a specific area of the content so that it’s visible in the scroll view.

## Declaration

```objectivec
- (void) scrollRectToVisible:(CGRect) rect animated:(BOOL) animated;
```

## Parameters

- `rect`: A rectangle defining an area of the content view. The rectangle should be in the coordinate space of the scroll view.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the scrolling should be animated, [false](https://developer.apple.com/documentation/swift/false) if it should be immediate.

<a id="Discussion"></a>

## Discussion

This method scrolls the content view so that the area defined by `rect` is just visible inside the scroll view. If the area is already visible, the method does nothing.
