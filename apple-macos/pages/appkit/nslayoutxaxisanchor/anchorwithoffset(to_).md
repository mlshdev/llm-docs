> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutxaxisanchor/anchorwithoffset(to:)](https://developer.apple.com/documentation/appkit/nslayoutxaxisanchor/anchorwithoffset(to:))

# anchorWithOffset(to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

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

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

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
