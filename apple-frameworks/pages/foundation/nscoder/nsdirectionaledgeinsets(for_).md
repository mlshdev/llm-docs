> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/nsdirectionaledgeinsets(for:)](https://developer.apple.com/documentation/foundation/nscoder/nsdirectionaledgeinsets(for:))

# nsDirectionalEdgeInsets(for:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a directional edge insets structure based on data in the specified string.

## Declaration

```swift
class func nsDirectionalEdgeInsets(for string: String) -> NSDirectionalEdgeInsets
```

## Parameters

- `string`: A string whose contents are of the form “{top, leading, bottom, trailing}”, where top, leading, bottom, trailing are the floating-point component values of the [NSDirectionalEdgeInsets](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets) structure. An example of a valid string is “`{3.0,8.0,3.0,5.0}`”. The string is not localized, so items are always separated with a comma.

<a id="return-value"></a>

## Return Value

A directional edge insets data structure. If the string is not well-formed, the function returns [NSDirectionalEdgeInsetsZero](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsetszero).

## See Also

### Representing Geometric Types as Strings

- [cgAffineTransform(for:)](cgaffinetransform%28for_%29.md): Returns a Core Graphics affine transform structure corresponding to the data in a given string.
- [cgPoint(for:)](cgpoint%28for_%29.md): Returns a Core Graphics point structure corresponding to the data in a given string.
- [cgRect(for:)](cgrect%28for_%29.md): Returns a Core Graphics rectangle structure corresponding to the data in a given string.
- [cgSize(for:)](cgsize%28for_%29.md): Returns a Core Graphics size structure corresponding to the data in a given string.
- [cgVector(for:)](cgvector%28for_%29.md): Returns a Core Graphics vector corresponding to the data in a given string.
- [uiEdgeInsets(for:)](uiedgeinsets%28for_%29.md): Returns a UIKit edge insets structure based on the data in the specified string.
- [uiOffset(for:)](uioffset%28for_%29.md): Returns a UIKit offset structure corresponding to the data in a given string.
- [string(for:)](string%28for_%29-4qz0a.md): Returns a string formatted to contain the data from a rectangle.
- [string(for:)](string%28for_%29-4omzv.md): Returns a string formatted to contain the data from a vector data structure.
- [string(for:)](string%28for_%29-6yx6n.md): Returns a string formatted to contain the data from an affine transform.
- [string(for:)](string%28for_%29-6ix86.md): Returns a string formatted to contain the data from a point.
- [string(for:)](string%28for_%29-2f1xb.md): Returns a string formatted to contain the data from a size data structure.
- [string(for:)](string%28for_%29-hp8b.md): Returns a string formatted to contain the data from a directional edge insets structure.
- [string(for:)](string%28for_%29-26b4z.md): Returns a string formatted to contain the data from an edge insets structure.
- [string(for:)](string%28for_%29-454dj.md): Returns a string formatted to contain the data from an offset structure.
