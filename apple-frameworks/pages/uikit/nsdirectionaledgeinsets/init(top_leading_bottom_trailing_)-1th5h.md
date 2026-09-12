> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdirectionaledgeinsets/init(top:leading:bottom:trailing:)-1th5h](https://developer.apple.com/documentation/uikit/nsdirectionaledgeinsets/init(top:leading:bottom:trailing:)-1th5h)

# init(top:leading:bottom:trailing:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a directional edge insets structure that contains the specified values.

## Declaration

```swift
init(top: CGFloat, leading: CGFloat, bottom: CGFloat, trailing: CGFloat)
```

## Parameters

- `top`: The inset on the top of an object.
- `leading`: The inset on the leading edge of an object. In a left-to-right system, the left edge is the leading edge. In a right-to-left system, the right edge is the leading edge.
- `bottom`: The inset on the bottom edge of an object.
- `trailing`: The inset on the trailing edge of an object. In a left-to-right system, the right edge is the trailing edge. In a right-to-left system, the left edge is the trailing edge.

<a id="return-value"></a>

## Return Value

A directional inset structure.

<a id="Discussion"></a>

## Discussion

An inset is a margin around a rectangle. Positive values represent margins closer to the center of the rectangle, while negative values represent margins further from the center.

# NSDirectionalEdgeInsetsMake (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a directional edge insets structure that contains the specified values.

## Declaration

```objectivec
static NSDirectionalEdgeInsets NSDirectionalEdgeInsetsMake(CGFloat top, CGFloat leading, CGFloat bottom, CGFloat trailing);
```

## Parameters

- `top`: The inset on the top of an object.
- `leading`: The inset on the leading edge of an object. In a left-to-right system, the left edge is the leading edge. In a right-to-left system, the right edge is the leading edge.
- `bottom`: The inset on the bottom edge of an object.
- `trailing`: The inset on the trailing edge of an object. In a left-to-right system, the right edge is the trailing edge. In a right-to-left system, the left edge is the trailing edge.

<a id="return-value"></a>

## Return Value

A directional inset structure.

<a id="Discussion"></a>

## Discussion

An inset is a margin around a rectangle. Positive values represent margins closer to the center of the rectangle, while negative values represent margins further from the center.
