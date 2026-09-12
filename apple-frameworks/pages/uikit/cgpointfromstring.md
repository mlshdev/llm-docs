> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/cgpointfromstring](https://developer.apple.com/documentation/uikit/cgpointfromstring)

# CGPointFromString

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Returns a Core Graphics point structure corresponding to the data in a given string.

## Declaration

```objectivec
extern CGPoint CGPointFromString(NSString *string);
```

## Parameters

- `string`: A string whose contents are of the form “{*x*,*y*}”, where *x* is the x coordinate and *y* is the y coordinate. The *x* and *y* values can represent integer or float values. An example of a valid string is `@"{3.0,2.5}"`. The string is not localized, so items are always separated with a comma.

<a id="return-value"></a>

## Return Value

A Core Graphics structure that represents a point. If the string is not well-formed, the function returns [CGPointZero](../coregraphics/cgpointzero.md).

<a id="Discussion"></a>

## Discussion

In general, you should use this function only to convert strings that were previously created using the [NSStringFromCGPoint](nsstringfromcgpoint.md) function.

## See Also

### Primitive type conversions

- [CGAffineTransformFromString](cgaffinetransformfromstring.md): Returns a Core Graphics affine transform structure corresponding to the data in a given string.
- [CGRectFromString](cgrectfromstring.md): Returns a Core Graphics rectangle structure corresponding to the data in a given string.
- [CGSizeFromString](cgsizefromstring.md): Returns a Core Graphics size structure corresponding to the data in a given string.
- [CGVectorFromString](cgvectorfromstring.md): Returns a Core Graphics vector corresponding to the data in a given string.
- [NSStringFromCGAffineTransform](nsstringfromcgaffinetransform.md): Returns a string formatted to contain the data from an affine transform.
- [NSStringFromCGPoint](nsstringfromcgpoint.md): Returns a string formatted to contain the data from a point.
- [NSStringFromCGRect](nsstringfromcgrect.md): Returns a string formatted to contain the data from a rectangle.
- [NSStringFromCGSize](nsstringfromcgsize.md): Returns a string formatted to contain the data from a size data structure.
- [NSStringFromCGVector](nsstringfromcgvector.md): Returns a string formatted to contain the data from a vector data structure.
