> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgsizecreatedictionaryrepresentation(_:)](https://developer.apple.com/documentation/coregraphics/cgsizecreatedictionaryrepresentation(_:))

# CGSizeCreateDictionaryRepresentation(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary representation of the specified size.

## Declaration

```swift
func CGSizeCreateDictionaryRepresentation(_ size: CGSize) -> CFDictionary
```

## Parameters

- `size`: A size.

<a id="return-value"></a>

## Return Value

The dictionary representation of the size.

## See Also

### Creating a Dictionary Representation from a Geometric Primitive

- [CGPointCreateDictionaryRepresentation(\_:)](cgpointcreatedictionaryrepresentation%28__%29.md): Returns a dictionary representation of the specified point.
- [CGRectCreateDictionaryRepresentation(\_:)](cgrectcreatedictionaryrepresentation%28__%29.md): Returns a dictionary representation of the provided rectangle.

# CGSizeCreateDictionaryRepresentation (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary representation of the specified size.

## Declaration

```objectivec
extern CFDictionaryRefCGSizeCreateDictionaryRepresentation(CGSize size);
```

## Parameters

- `size`: A size.

<a id="return-value"></a>

## Return Value

The dictionary representation of the size.

## See Also

### Creating a Dictionary Representation from a Geometric Primitive

- [CGPointCreateDictionaryRepresentation](cgpointcreatedictionaryrepresentation%28__%29.md): Returns a dictionary representation of the specified point.
- [CGRectCreateDictionaryRepresentation](cgrectcreatedictionaryrepresentation%28__%29.md): Returns a dictionary representation of the provided rectangle.
