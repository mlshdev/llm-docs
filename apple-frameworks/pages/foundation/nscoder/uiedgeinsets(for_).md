> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/uiedgeinsets(for:)](https://developer.apple.com/documentation/foundation/nscoder/uiedgeinsets(for:))

# uiEdgeInsets(for:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a UIKit edge insets structure based on the data in the specified string.

## Declaration

```swift
class func uiEdgeInsets(for string: String) -> UIEdgeInsets
```

## Parameters

- `string`: A string whose contents are of the form “{*top*, *left*, *bottom*, *right*}”, where *top*, *left*, *bottom*, *right* are the floating-point component values of the [UIEdgeInsets](../../uikit/uiedgeinsets.md) structure. An example of a valid string is @”{3.0,8.0,3.0,5.0}”. The string is not localized, so items are always separated with a comma.

<a id="return-value"></a>

## Return Value

An edge insets data structure. If the string is not well-formed, the function returns [zero](../../uikit/uiedgeinsets/zero.md).

<a id="Discussion"></a>

## Discussion

In general, you should use this function only to convert strings that were previously created using the [string(for:)](string%28for_%29-26b4z.md) function.

## See Also

### Representing Geometric Types as Strings

- [cgAffineTransform(for:)](cgaffinetransform%28for_%29.md): Returns a Core Graphics affine transform structure corresponding to the data in a given string.
- [cgPoint(for:)](cgpoint%28for_%29.md): Returns a Core Graphics point structure corresponding to the data in a given string.
- [cgRect(for:)](cgrect%28for_%29.md): Returns a Core Graphics rectangle structure corresponding to the data in a given string.
- [cgSize(for:)](cgsize%28for_%29.md): Returns a Core Graphics size structure corresponding to the data in a given string.
- [cgVector(for:)](cgvector%28for_%29.md): Returns a Core Graphics vector corresponding to the data in a given string.
- [nsDirectionalEdgeInsets(for:)](nsdirectionaledgeinsets%28for_%29.md): Returns a directional edge insets structure based on data in the specified string.
- [uiOffset(for:)](uioffset%28for_%29.md): Returns a UIKit offset structure corresponding to the data in a given string.
- [string(for:)](string%28for_%29-4qz0a.md): Returns a string formatted to contain the data from a rectangle.
- [string(for:)](string%28for_%29-4omzv.md): Returns a string formatted to contain the data from a vector data structure.
- [string(for:)](string%28for_%29-6yx6n.md): Returns a string formatted to contain the data from an affine transform.
- [string(for:)](string%28for_%29-6ix86.md): Returns a string formatted to contain the data from a point.
- [string(for:)](string%28for_%29-2f1xb.md): Returns a string formatted to contain the data from a size data structure.
- [string(for:)](string%28for_%29-hp8b.md): Returns a string formatted to contain the data from a directional edge insets structure.
- [string(for:)](string%28for_%29-26b4z.md): Returns a string formatted to contain the data from an edge insets structure.
- [string(for:)](string%28for_%29-454dj.md): Returns a string formatted to contain the data from an offset structure.
