> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/uioffset(for:)](https://developer.apple.com/documentation/foundation/nscoder/uioffset(for:))

# uiOffset(for:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a UIKit offset structure corresponding to the data in a given string.

## Declaration

```swift
class func uiOffset(for string: String) -> UIOffset
```

## Parameters

- `string`: A string containing a representation of an offset.

<a id="return-value"></a>

## Return Value

An edge insets data structure. If the string is not well-formed, the function returns [zero](../../uikit/uioffset/zero.md).

<a id="Discussion"></a>

## Discussion

In general, you should use this function only to convert strings that were previously created using the [string(for:)](string%28for_%29-454dj.md) function.

## See Also

### Representing Geometric Types as Strings

- [cgAffineTransform(for:)](cgaffinetransform%28for_%29.md): Returns a Core Graphics affine transform structure corresponding to the data in a given string.
- [cgPoint(for:)](cgpoint%28for_%29.md): Returns a Core Graphics point structure corresponding to the data in a given string.
- [cgRect(for:)](cgrect%28for_%29.md): Returns a Core Graphics rectangle structure corresponding to the data in a given string.
- [cgSize(for:)](cgsize%28for_%29.md): Returns a Core Graphics size structure corresponding to the data in a given string.
- [cgVector(for:)](cgvector%28for_%29.md): Returns a Core Graphics vector corresponding to the data in a given string.
- [nsDirectionalEdgeInsets(for:)](nsdirectionaledgeinsets%28for_%29.md): Returns a directional edge insets structure based on data in the specified string.
- [uiEdgeInsets(for:)](uiedgeinsets%28for_%29.md): Returns a UIKit edge insets structure based on the data in the specified string.
- [string(for:)](string%28for_%29-4qz0a.md): Returns a string formatted to contain the data from a rectangle.
- [string(for:)](string%28for_%29-4omzv.md): Returns a string formatted to contain the data from a vector data structure.
- [string(for:)](string%28for_%29-6yx6n.md): Returns a string formatted to contain the data from an affine transform.
- [string(for:)](string%28for_%29-6ix86.md): Returns a string formatted to contain the data from a point.
- [string(for:)](string%28for_%29-2f1xb.md): Returns a string formatted to contain the data from a size data structure.
- [string(for:)](string%28for_%29-hp8b.md): Returns a string formatted to contain the data from a directional edge insets structure.
- [string(for:)](string%28for_%29-26b4z.md): Returns a string formatted to contain the data from an edge insets structure.
- [string(for:)](string%28for_%29-454dj.md): Returns a string formatted to contain the data from an offset structure.
