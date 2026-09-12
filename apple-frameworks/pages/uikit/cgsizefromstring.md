> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/cgsizefromstring](https://developer.apple.com/documentation/uikit/cgsizefromstring)

# CGSizeFromString

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Returns a Core Graphics size structure corresponding to the data in a given string.

## Declaration

```objectivec
extern CGSize CGSizeFromString(NSString *string);
```

## Parameters

- `string`: A string whose contents are of the form “{*w*, *h*}”, where *w* is the width and *h* is the height. The *w* and *h* values can be integer or float values. An example of a valid string is `@"{3.0,2.5}"`. The string is not localized, so items are always separated with a comma.

<a id="return-value"></a>

## Return Value

A Core Graphics structure that represents a size. If the string is not well-formed, the function returns [CGSizeZero](../coregraphics/cgsizezero.md).

<a id="Discussion"></a>

## Discussion

In general, you should use this function only to convert strings that were previously created using the [NSStringFromCGSize](nsstringfromcgsize.md) function.

## See Also

### Primitive type conversions

- [CGAffineTransformFromString](cgaffinetransformfromstring.md): Returns a Core Graphics affine transform structure corresponding to the data in a given string.
- [CGPointFromString](cgpointfromstring.md): Returns a Core Graphics point structure corresponding to the data in a given string.
- [CGRectFromString](cgrectfromstring.md): Returns a Core Graphics rectangle structure corresponding to the data in a given string.
- [CGVectorFromString](cgvectorfromstring.md): Returns a Core Graphics vector corresponding to the data in a given string.
- [NSStringFromCGAffineTransform](nsstringfromcgaffinetransform.md): Returns a string formatted to contain the data from an affine transform.
- [NSStringFromCGPoint](nsstringfromcgpoint.md): Returns a string formatted to contain the data from a point.
- [NSStringFromCGRect](nsstringfromcgrect.md): Returns a string formatted to contain the data from a rectangle.
- [NSStringFromCGSize](nsstringfromcgsize.md): Returns a string formatted to contain the data from a size data structure.
- [NSStringFromCGVector](nsstringfromcgvector.md): Returns a string formatted to contain the data from a vector data structure.
