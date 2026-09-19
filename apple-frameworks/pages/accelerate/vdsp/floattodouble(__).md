> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vdsp/floattodouble(_:)

# floatToDouble(\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns double-precision values converted from a single-precision source.

## Declaration

```swift
static func floatToDouble<U>(_ source: U) -> [Double] where U : AccelerateBuffer, U.Element == Float
```

## Parameters

- `source`: The source vector.

## See Also

### Conversion between floating-point types

- [doubleToFloat(\_:)](doubletofloat%28__%29.md): Returns single-precision values converted from a double-precision source.
- [convertElements(of:to:)](convertelements%28of_to_%29-2ejgr.md): Converts single-precision values to double-precision values.
- [convertElements(of:to:)](convertelements%28of_to_%29-698ye.md): Converts double-precision values to single-precision values.
