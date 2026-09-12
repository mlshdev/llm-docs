> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontainer/contains(_:)](https://developer.apple.com/documentation/appkit/nstextcontainer/contains(_:))

# contains(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Queries whether a point lies within the text container’s region or on the region’s edge—not simply within its bounding rectangle.

## Declaration

```swift
func contains(_ point: NSPoint) -> Bool
```

## Parameters

- `point`: The point in question.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aPoint` lies within the receiver’s region or on the region’s edge—not simply within its bounding rectangle—[false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

For example, if the receiver defines a donut shape and `aPoint` lies in the hole, this method returns [false](https://developer.apple.com/documentation/swift/false). This method can be used for hit testing of mouse events.

The default [NSTextContainer](../nstextcontainer.md) implementation merely checks that `aPoint` lies within its bounding rectangle.

## See Also

### Deprecated

- [init(containerSize:)](init%28containersize_%29.md): Deprecated. Initializes a text container with a specified bounding rectangle.
- [lineFragmentRect(forProposedRect:sweepDirection:movementDirection:remaining:)](linefragmentrect%28forproposedrect_sweepdirection_movementdirection_remaining_%29.md): Deprecated. Calculates and returns the longest rectangle available in the proposed rectangle for displaying text.
- [containerSize](containersize.md): Deprecated. The size of the text container’s bounding rectangle.

# containsPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Queries whether a point lies within the text container’s region or on the region’s edge—not simply within its bounding rectangle.

## Declaration

```objectivec
- (BOOL) containsPoint:(NSPoint) point;
```

## Parameters

- `point`: The point in question.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aPoint` lies within the receiver’s region or on the region’s edge—not simply within its bounding rectangle—[false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

For example, if the receiver defines a donut shape and `aPoint` lies in the hole, this method returns [false](https://developer.apple.com/documentation/swift/false). This method can be used for hit testing of mouse events.

The default [NSTextContainer](../nstextcontainer.md) implementation merely checks that `aPoint` lies within its bounding rectangle.

## See Also

### Deprecated

- [initWithContainerSize:](init%28containersize_%29.md): Deprecated. Initializes a text container with a specified bounding rectangle.
- [lineFragmentRectForProposedRect:sweepDirection:movementDirection:remainingRect:](linefragmentrect%28forproposedrect_sweepdirection_movementdirection_remaining_%29.md): Deprecated. Calculates and returns the longest rectangle available in the proposed rectangle for displaying text.
- [containerSize](containersize.md): Deprecated. The size of the text container’s bounding rectangle.
