> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vdsp/thresholdrule/clamptothreshold

# vDSP.ThresholdRule.clampToThreshold

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the threshold if the input value is less than threshold; otherwise returns the input value.

## Declaration

```swift
case clampToThreshold
```

<a id="Discussion"></a>

## Discussion

Use [vDSP.ThresholdRule.clampToThreshold](clamptothreshold.md) to calculate a new vector where the threshold operation sets all source values below the threshold to the threshold.

```swift
let source: [Float] = [12, 13, 14, 15, 16, 17, 18]

let destination = vDSP.threshold(source,
                                 to: 15,
                                 with: .clampToThreshold)

// Prints "[15.0, 15.0, 15.0, 15.0, 16.0, 17.0, 18.0]".
print(destination)
```

## See Also

### Threshold rules

- [vDSP.ThresholdRule.signedConstant(\_:)](signedconstant%28__%29.md): Returns the negated constant if the input value is less than the threshold; otherwise returns the constant.
- [vDSP.ThresholdRule.zeroFill](zerofill.md): Returns `0` if the input value is less than the threshold; otherwise returns the input value.
