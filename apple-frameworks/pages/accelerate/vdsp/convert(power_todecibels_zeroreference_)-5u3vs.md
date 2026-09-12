> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/convert(power:todecibels:zeroreference:)-5u3vs](https://developer.apple.com/documentation/accelerate/vdsp/convert(power:todecibels:zeroreference:)-5u3vs)

# convert(power:toDecibels:zeroReference:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Converts single-precision power values to decibel values.

## Declaration

```swift
static func convert<U, V>(power: U, toDecibels decibels: inout V, zeroReference: Float) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Float, V.Element == Float
```

## Parameters

- `power`: The input vector that defines the power values.
- `decibels`: The output vector that contains the decibel values.
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
- [powerToDecibels(\_:zeroReference:)](powertodecibels%28__zeroreference_%29-861j5.md): Returns single-precision power values converted to decibel values.
- [convert(amplitude:toDecibels:zeroReference:)](convert%28amplitude_todecibels_zeroreference_%29-83uy1.md): Converts single-precision amplitude values to decibel values.
