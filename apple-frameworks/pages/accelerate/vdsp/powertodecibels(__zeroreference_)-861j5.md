> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/powertodecibels(_:zeroreference:)-861j5](https://developer.apple.com/documentation/accelerate/vdsp/powertodecibels(_:zeroreference:)-861j5)

# powerToDecibels(\_:zeroReference:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns single-precision power values converted to decibel values.

## Declaration

```swift
static func powerToDecibels<U>(_ power: U, zeroReference: Float) -> [Float] where U : AccelerateBuffer, U.Element == Float
```

## Parameters

- `power`: The input vector that defines the power values.
- `zeroReference`: The zero reference that the function uses for the conversion.

<a id="Discussion"></a>

## Discussion

The function uses the following calculation to perform the conversion:

```swift
alpha = 10;

for (n = 0; n < N; ++n)
    C[n] = alpha * log10(A[n] / B[0]);
```

## See Also

### Converting single-precision power or amplitude values to decibel values

- [amplitudeToDecibels(\_:zeroReference:)](amplitudetodecibels%28__zeroreference_%29-88bpy.md): Returns single-precision amplitude values converted to decibels.
- [convert(amplitude:toDecibels:zeroReference:)](convert%28amplitude_todecibels_zeroreference_%29-83uy1.md): Converts single-precision amplitude values to decibel values.
- [convert(power:toDecibels:zeroReference:)](convert%28power_todecibels_zeroreference_%29-5u3vs.md): Converts single-precision power values to decibel values.
