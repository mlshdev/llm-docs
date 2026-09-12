> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/decelerationrate-swift.struct](https://developer.apple.com/documentation/uikit/uiscrollview/decelerationrate-swift.struct)

# UIScrollView.DecelerationRate (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Deceleration rates for the scroll view.

## Declaration

```swift
struct DecelerationRate
```

<a id="overview"></a>

## Overview

You use these constants to set the value of the [decelerationRate](decelerationrate-swift.property.md) property.

## Topics

### Deceleration rates

- [normal](decelerationrate-swift.struct/normal.md): The default deceleration rate for a scroll view.
- [fast](decelerationrate-swift.struct/fast.md): A fast deceleration rate for a scroll view.

### Initializers

- [init(rawValue:)](decelerationrate-swift.struct/init%28rawvalue_%29.md): Creates a deceleration rate with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the scrolling state

- [isTracking](istracking.md): A Boolean value that indicates whether the user has touched the content to initiate scrolling.
- [isDragging](isdragging.md): A Boolean value that indicates whether the user has begun scrolling the content.
- [isDecelerating](isdecelerating.md): A Boolean value that indicates whether the content is moving in the scroll view after the user lifted their finger.
- [isScrollAnimating](isscrollanimating.md): A Boolean value that indicates whether the scroll view is currently animating a scroll update.
- [stopScrollingAndZooming()](stopscrollingandzooming%28%29.md): Stops active scroll and zoom animations.
- [decelerationRate](decelerationrate-swift.property.md): A floating-point value that determines the rate of deceleration after the user lifts their finger.

# UIScrollViewDecelerationRate (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Deceleration rates for the scroll view.

## Declaration

```objectivec
typedef CGFloat UIScrollViewDecelerationRate;
```

<a id="overview"></a>

## Overview

You use these constants to set the value of the [decelerationRate](decelerationrate-swift.property.md) property.

## Topics

### Deceleration rates

- [UIScrollViewDecelerationRateNormal](decelerationrate-swift.struct/normal.md): The default deceleration rate for a scroll view.
- [UIScrollViewDecelerationRateFast](decelerationrate-swift.struct/fast.md): A fast deceleration rate for a scroll view.

## See Also

### Managing the scrolling state

- [tracking](istracking.md): A Boolean value that indicates whether the user has touched the content to initiate scrolling.
- [dragging](isdragging.md): A Boolean value that indicates whether the user has begun scrolling the content.
- [decelerating](isdecelerating.md): A Boolean value that indicates whether the content is moving in the scroll view after the user lifted their finger.
- [scrollAnimating](isscrollanimating.md): A Boolean value that indicates whether the scroll view is currently animating a scroll update.
- [stopScrollingAndZooming](stopscrollingandzooming%28%29.md): Stops active scroll and zoom animations.
- [decelerationRate](decelerationrate-swift.property.md): A floating-point value that determines the rate of deceleration after the user lifts their finger.
