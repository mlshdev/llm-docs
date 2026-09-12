> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/amplitudetodecibels(_:zeroreference:)-2cgik](https://developer.apple.com/documentation/accelerate/vdsp/amplitudetodecibels(_:zeroreference:)-2cgik)

# amplitudeToDecibels(\_:zeroReference:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns double-precision amplitude values converted to decibel values.

## Declaration

```swift
static func amplitudeToDecibels<U>(_ amplitude: U, zeroReference: Double) -> [Double] where U : AccelerateBuffer, U.Element == Double
```

## Parameters

- `amplitude`: The input vector that defines the amplitude values.
- `zeroReference`: The zero reference that the function uses for the conversion.

<a id="Discussion"></a>

## Discussion

The function uses the following calculation to perform the conversion:

```swift
alpha = 20;

for (n = 0; n < N; ++n)
    C[n] = alpha * log10(A[n] / B[0]);
```

## See Also

### Converting double-precision power or amplitude values to decibel values

- [powerToDecibels(\_:zeroReference:)](powertodecibels%28__zeroreference_%29-4b0qz.md): Returns double-precision power values converted to decibel values.
- [convert(amplitude:toDecibels:zeroReference:)](convert%28amplitude_todecibels_zeroreference_%29-4io4p.md): Converts double-precision amplitude values to decibel values.
- [convert(power:toDecibels:zeroReference:)](convert%28power_todecibels_zeroreference_%29-3aiv4.md): Converts double-precision power values to decibel values.
