> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/contentinsetadjustmentbehavior-swift.enum/scrollableaxes](https://developer.apple.com/documentation/uikit/uiscrollview/contentinsetadjustmentbehavior-swift.enum/scrollableaxes)

# UIScrollView.ContentInsetAdjustmentBehavior.scrollableAxes (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Adjust the insets only in the scrollable directions.

## Declaration

```swift
case scrollableAxes
```

<a id="Discussion"></a>

## Discussion

The top and bottom insets include the safe area inset values when the vertical content size is greater than the height of the scroll view itself. The top and bottom insets are also adjusted when the [alwaysBounceVertical](../alwaysbouncevertical.md) property is [true](https://developer.apple.com/documentation/swift/true). Similarly, the left and right insets include the safe area insets when the horizontal content size is greater than the width of the scroll view.

# UIScrollViewContentInsetAdjustmentScrollableAxes (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Adjust the insets only in the scrollable directions.

## Declaration

```objectivec
UIScrollViewContentInsetAdjustmentScrollableAxes
```

<a id="Discussion"></a>

## Discussion

The top and bottom insets include the safe area inset values when the vertical content size is greater than the height of the scroll view itself. The top and bottom insets are also adjusted when the [alwaysBounceVertical](../alwaysbouncevertical.md) property is [true](https://developer.apple.com/documentation/swift/true). Similarly, the left and right insets include the safe area insets when the horizontal content size is greater than the width of the scroll view.
