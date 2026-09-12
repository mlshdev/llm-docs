> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/cgaffinetransformfromstring](https://developer.apple.com/documentation/uikit/cgaffinetransformfromstring)

# CGAffineTransformFromString

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Returns a Core Graphics affine transform structure corresponding to the data in a given string.

## Declaration

```objectivec
extern CGAffineTransform CGAffineTransformFromString(NSString *string);
```

## Parameters

- `string`: A string whose contents are of the form “{*a*, *b*, *c*, *d*, *tx*, *ty*}”, where *a*, *b*, *c*, *d*, *tx*, and *ty* are the floating-point component values of the [CGAffineTransform](../corefoundation/cgaffinetransform.md) data structure. An example of a valid string is `@"{1,0,0,1,2.5,3.0}"`. The string is not localized, so items are always separated with a comma. For information about the position of each value in the transform array, see [CGAffineTransform](../coregraphics/cgaffinetransform.md).

<a id="return-value"></a>

## Return Value

A Core Graphics affine transform structure. If the string is not well-formed, the function returns the identity transform.

<a id="Discussion"></a>

## Discussion

In general, you should use this function only to convert strings that were previously created using the [NSStringFromCGAffineTransform](nsstringfromcgaffinetransform.md) function.

## See Also

### Primitive type conversions

- [CGPointFromString](cgpointfromstring.md): Returns a Core Graphics point structure corresponding to the data in a given string.
- [CGRectFromString](cgrectfromstring.md): Returns a Core Graphics rectangle structure corresponding to the data in a given string.
- [CGSizeFromString](cgsizefromstring.md): Returns a Core Graphics size structure corresponding to the data in a given string.
- [CGVectorFromString](cgvectorfromstring.md): Returns a Core Graphics vector corresponding to the data in a given string.
- [NSStringFromCGAffineTransform](nsstringfromcgaffinetransform.md): Returns a string formatted to contain the data from an affine transform.
- [NSStringFromCGPoint](nsstringfromcgpoint.md): Returns a string formatted to contain the data from a point.
- [NSStringFromCGRect](nsstringfromcgrect.md): Returns a string formatted to contain the data from a rectangle.
- [NSStringFromCGSize](nsstringfromcgsize.md): Returns a string formatted to contain the data from a size data structure.
- [NSStringFromCGVector](nsstringfromcgvector.md): Returns a string formatted to contain the data from a vector data structure.
