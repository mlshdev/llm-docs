> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssize](https://developer.apple.com/documentation/foundation/nssize)

# NSSize (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A two-dimensional size.

## Declaration

```swift
typealias NSSize = CGSize
```

<a id="Discussion"></a>

## Discussion

Normally, the values of `width` and `height` are non-negative. The functions that create an `NSSize` structure do not prevent you from setting a negative value for these attributes. If the value of `width` or `height` is negative, however, the behavior of some methods may be undefined.

<a id="Special-Considerations"></a>

### Special Considerations

Prior to OS X v10.5 the width and height were represented by `float` values rather than `CGFloat` values.

When building for 64 bit systems, or building 32 bit like 64 bit, `NSSize` is typedef’d to `CGSize`.

## Topics

### Managing Sizes

- [NSEqualSizes(\_:\_:)](nsequalsizes%28____%29.md): Returns a Boolean that indicates whether two size values are equal.
- [NSMakeSize(\_:\_:)](nsmakesize%28____%29.md): Returns a new `NSSize` from the specified values.
- [NSSizeFromString(\_:)](nssizefromstring%28__%29.md): Returns an `NSSize` from a text-based representation.
- [NSStringFromSize(\_:)](nsstringfromsize%28__%29.md): Returns a string representation of a size.
- [NSSizeFromCGSize(\_:)](nssizefromcgsize%28__%29.md): Returns an `NSSize` typecast from a `CGSize`.
- [NSSizeToCGSize(\_:)](nssizetocgsize%28__%29.md): Returns a `CGSize` typecast from an `NSSize`.

### Zero Constant

- [NSZeroSize](nszerosize.md): An `NSSize` structure set to `0` in both dimensions.

### Related Types

- [NSSizeArray](nssizearray.md): Type indicating a parameter is an array of `NSSize` structures.
- [NSSizePointer](nssizepointer.md): Type indicating parameter is a pointer to an `NSSize` structure.

## See Also

### Geometry

- [CGFloat](../corefoundation/cgfloat-swift.struct.md): The basic type for floating-point scalar values in Core Graphics and related frameworks.
- [NSPoint](nspoint.md): A point in a Cartesian coordinate system.
- [NSRect](nsrect.md): A rectangle.
- [AffineTransform](affinetransform.md): A graphics coordinate transformation.
- [NSEdgeInsets](nsedgeinsets.md): A description of the distance between the edges of two rectangles.

# NSSize (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A two-dimensional size.

## Declaration

```objectivec
typedef CGSize NSSize;
```

<a id="Discussion"></a>

## Discussion

Normally, the values of `width` and `height` are non-negative. The functions that create an `NSSize` structure do not prevent you from setting a negative value for these attributes. If the value of `width` or `height` is negative, however, the behavior of some methods may be undefined.

<a id="Special-Considerations"></a>

### Special Considerations

Prior to OS X v10.5 the width and height were represented by `float` values rather than `CGFloat` values.

When building for 64 bit systems, or building 32 bit like 64 bit, `NSSize` is typedef’d to `CGSize`.

## Topics

### Managing Sizes

- [NSEqualSizes](nsequalsizes%28____%29.md): Returns a Boolean that indicates whether two size values are equal.
- [NSMakeSize](nsmakesize%28____%29.md): Returns a new `NSSize` from the specified values.
- [NSSizeFromString](nssizefromstring%28__%29.md): Returns an `NSSize` from a text-based representation.
- [NSStringFromSize](nsstringfromsize%28__%29.md): Returns a string representation of a size.
- [NSSizeFromCGSize](nssizefromcgsize%28__%29.md): Returns an `NSSize` typecast from a `CGSize`.
- [NSSizeToCGSize](nssizetocgsize%28__%29.md): Returns a `CGSize` typecast from an `NSSize`.

### Zero Constant

- [NSZeroSize](nszerosize.md): An `NSSize` structure set to `0` in both dimensions.

### Related Types

- [NSSizeArray](nssizearray.md): Type indicating a parameter is an array of `NSSize` structures.
- [NSSizePointer](nssizepointer.md): Type indicating parameter is a pointer to an `NSSize` structure.

## See Also

### Geometry

- [NSPoint](nspoint.md): A point in a Cartesian coordinate system.
- [NSRect](nsrect.md): A rectangle.
- [NSAffineTransform](nsaffinetransform.md): A graphics coordinate transformation.
- [NSEdgeInsets](nsedgeinsets.md): A description of the distance between the edges of two rectangles.
