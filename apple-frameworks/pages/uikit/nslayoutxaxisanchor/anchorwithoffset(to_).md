> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutxaxisanchor/anchorwithoffset(to:)](https://developer.apple.com/documentation/uikit/nslayoutxaxisanchor/anchorwithoffset(to:))

# anchorWithOffset(to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a layout dimension object from two anchors.

## Declaration

```swift
func anchorWithOffset(to otherAnchor: NSLayoutXAxisAnchor) -> NSLayoutDimension
```

## Parameters

- `otherAnchor`: The second anchor to use when creating the layout dimension.

<a id="return-value"></a>

## Return Value

The [NSLayoutDimension](../nslayoutdimension.md) object represented by the two anchors.

<a id="Discussion"></a>

## Discussion

Use the returned object to define constraints relative to the space between the current anchor and the object in the `otherAnchor` parameter.

# anchorWithOffsetToAnchor: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a layout dimension object from two anchors.

## Declaration

```objectivec
- (NSLayoutDimension *) anchorWithOffsetToAnchor:(NSLayoutXAxisAnchor *) otherAnchor;
```

## Parameters

- `otherAnchor`: The second anchor to use when creating the layout dimension.

<a id="return-value"></a>

## Return Value

The [NSLayoutDimension](../nslayoutdimension.md) object represented by the two anchors.

<a id="Discussion"></a>

## Discussion

Use the returned object to define constraints relative to the space between the current anchor and the object in the `otherAnchor` parameter.
