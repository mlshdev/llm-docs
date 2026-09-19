> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgpointcreatedictionaryrepresentation(_:)

# CGPointCreateDictionaryRepresentation(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary representation of the specified point.

## Declaration

```swift
func CGPointCreateDictionaryRepresentation(_ point: CGPoint) -> CFDictionary
```

## Parameters

- `point`: A point.

<a id="return-value"></a>

## Return Value

The dictionary representation of the point.

## See Also

### Creating a Dictionary Representation from a Geometric Primitive

- [CGSizeCreateDictionaryRepresentation(\_:)](cgsizecreatedictionaryrepresentation%28__%29.md): Returns a dictionary representation of the specified size.
- [CGRectCreateDictionaryRepresentation(\_:)](cgrectcreatedictionaryrepresentation%28__%29.md): Returns a dictionary representation of the provided rectangle.

# CGPointCreateDictionaryRepresentation (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary representation of the specified point.

## Declaration

```objectivec
extern CFDictionaryRefCGPointCreateDictionaryRepresentation(CGPoint point);
```

## Parameters

- `point`: A point.

<a id="return-value"></a>

## Return Value

The dictionary representation of the point.

## See Also

### Creating a Dictionary Representation from a Geometric Primitive

- [CGSizeCreateDictionaryRepresentation](cgsizecreatedictionaryrepresentation%28__%29.md): Returns a dictionary representation of the specified size.
- [CGRectCreateDictionaryRepresentation](cgrectcreatedictionaryrepresentation%28__%29.md): Returns a dictionary representation of the provided rectangle.
