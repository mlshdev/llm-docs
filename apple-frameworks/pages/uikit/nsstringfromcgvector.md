> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsstringfromcgvector](https://developer.apple.com/documentation/uikit/nsstringfromcgvector)

# NSStringFromCGVector

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Returns a string formatted to contain the data from a vector data structure.

## Declaration

```objectivec
extern NSString *NSStringFromCGVector(CGVector vector);
```

## Parameters

- `vector`: A Core Graphics structure representing a two-dimensional vector.

<a id="return-value"></a>

## Return Value

A string that corresponds to `vector`. See [CGVectorFromString](cgvectorfromstring.md) for a discussion of the string format.

## See Also

### Primitive type conversions

- [CGAffineTransformFromString](cgaffinetransformfromstring.md): Returns a Core Graphics affine transform structure corresponding to the data in a given string.
- [CGPointFromString](cgpointfromstring.md): Returns a Core Graphics point structure corresponding to the data in a given string.
- [CGRectFromString](cgrectfromstring.md): Returns a Core Graphics rectangle structure corresponding to the data in a given string.
- [CGSizeFromString](cgsizefromstring.md): Returns a Core Graphics size structure corresponding to the data in a given string.
- [CGVectorFromString](cgvectorfromstring.md): Returns a Core Graphics vector corresponding to the data in a given string.
- [NSStringFromCGAffineTransform](nsstringfromcgaffinetransform.md): Returns a string formatted to contain the data from an affine transform.
- [NSStringFromCGPoint](nsstringfromcgpoint.md): Returns a string formatted to contain the data from a point.
- [NSStringFromCGRect](nsstringfromcgrect.md): Returns a string formatted to contain the data from a rectangle.
- [NSStringFromCGSize](nsstringfromcgsize.md): Returns a string formatted to contain the data from a size data structure.
