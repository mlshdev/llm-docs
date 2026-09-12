> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/convertelements(of:to:)-698ye](https://developer.apple.com/documentation/accelerate/vdsp/convertelements(of:to:)-698ye)

# convertElements(of:to:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Converts double-precision values to single-precision values.

## Declaration

```swift
static func convertElements<U, V>(of source: U, to destination: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Double, V.Element == Float
```

## Parameters

- `source`: The source vector.
- `destination`: On output, the source values converted to single-precision values.

## See Also

### Conversion between floating-point types

- [doubleToFloat(\_:)](doubletofloat%28__%29.md): Returns single-precision values converted from a double-precision source.
- [floatToDouble(\_:)](floattodouble%28__%29.md): Returns double-precision values converted from a single-precision source.
- [convertElements(of:to:)](convertelements%28of_to_%29-2ejgr.md): Converts single-precision values to double-precision values.
