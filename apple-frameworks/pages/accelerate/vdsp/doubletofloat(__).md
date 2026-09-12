> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/doubletofloat(_:)](https://developer.apple.com/documentation/accelerate/vdsp/doubletofloat(_:))

# doubleToFloat(\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns single-precision values converted from a double-precision source.

## Declaration

```swift
static func doubleToFloat<U>(_ source: U) -> [Float] where U : AccelerateBuffer, U.Element == Double
```

## Parameters

- `source`: The source vector.

## See Also

### Conversion between floating-point types

- [floatToDouble(\_:)](floattodouble%28__%29.md): Returns double-precision values converted from a single-precision source.
- [convertElements(of:to:)](convertelements%28of_to_%29-2ejgr.md): Converts single-precision values to double-precision values.
- [convertElements(of:to:)](convertelements%28of_to_%29-698ye.md): Converts double-precision values to single-precision values.
