> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiedgeinsets/init(top:left:bottom:right:)-1s1t9](https://developer.apple.com/documentation/uikit/uiedgeinsets/init(top:left:bottom:right:)-1s1t9)

# init(top:left:bottom:right:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Creates an edge insets structure with the specified edges.

## Declaration

```swift
init(top: CGFloat, left: CGFloat, bottom: CGFloat, right: CGFloat)
```

## Parameters

- `top`: The inset at the top of an object.
- `left`: The inset on the left of an object
- `bottom`: The inset on the bottom of an object.
- `right`: The inset on the right of an object.

<a id="return-value"></a>

## Return Value

An initialized inset structure.

<a id="Discussion"></a>

## Discussion

An inset is a margin around a rectangle. Positive values represent margins closer to the center of the rectangle, while negative values represent margins further from the center.

# UIEdgeInsetsMake (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Creates an edge insets structure with the specified edges.

## Declaration

```objectivec
static UIEdgeInsets UIEdgeInsetsMake(CGFloat top, CGFloat left, CGFloat bottom, CGFloat right);
```

## Parameters

- `top`: The inset at the top of an object.
- `left`: The inset on the left of an object
- `bottom`: The inset on the bottom of an object.
- `right`: The inset on the right of an object.

<a id="return-value"></a>

## Return Value

An initialized inset structure.

<a id="Discussion"></a>

## Discussion

An inset is a margin around a rectangle. Positive values represent margins closer to the center of the rectangle, while negative values represent margins further from the center.

## See Also

### Related Documentation

- [UIEdgeInsetsEqualToEdgeInsets](../uiedgeinsetsequaltoedgeinsets.md): Returns a Boolean value indicating whether the two edge insets are the same.
