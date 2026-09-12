> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/thresholdrule/signedconstant(_:)](https://developer.apple.com/documentation/accelerate/vdsp/thresholdrule/signedconstant(_:))

# vDSP.ThresholdRule.signedConstant(\_:)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the negated constant if the input value is less than the threshold; otherwise returns the constant.

## Declaration

```swift
case signedConstant(T)
```

<a id="Discussion"></a>

## Discussion

Use [vDSP.ThresholdRule.signedConstant(\_:)](signedconstant%28__%29.md) to calculate a new vector where the threshold operation sets all source values below the threshold to the negated constant.

```swift
let source: [Float] = [12, 13, 14, 15, 16, 17, 18]

let destination = vDSP.threshold(source,
                                 to: 15,
                                 with: .signedConstant(99))

// Prints "[-99.0, -99.0, -99.0, 99.0, 99.0, 99.0, 99.0]".
print(destination)
```

## See Also

### Threshold rules

- [vDSP.ThresholdRule.clampToThreshold](clamptothreshold.md): Returns the threshold if the input value is less than threshold; otherwise returns the input value.
- [vDSP.ThresholdRule.zeroFill](zerofill.md): Returns `0` if the input value is less than the threshold; otherwise returns the input value.
