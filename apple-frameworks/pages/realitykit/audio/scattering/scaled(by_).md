> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audio/scattering/scaled(by:)](https://developer.apple.com/documentation/realitykit/audio/scattering/scaled(by:))

# scaled(by:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Scale the scattering data by a frequency-dependent scalar value between -1 and 1.

## Declaration

```swift
func scaled(by frequencyDependentScalar: (Float) -> Float) -> Audio.Scattering
```

## Parameters

- `frequencyDependentScalar`: A function with frequency as input and coefficient scalar as output.

<a id="discussion"></a>

## Discussion

- No adjustment is made to the coefficient when the scalar is 0.
- The coefficient is set to 0 when the scalar is -1.
- The coefficient is set to 1 when the scalar is +1.
- If the scalar value is between -1 and 0, the coefficient is adjusted by the percentage defined by the absolute value of the scalar between the original coefficient and 0.
- If the scalar value is between 0 and 1, the coefficient is adjusted by the percentage defined by the scalar between the original coefficient and 1.
