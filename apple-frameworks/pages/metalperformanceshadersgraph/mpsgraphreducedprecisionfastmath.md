> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphreducedprecisionfastmath](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphreducedprecisionfastmath)

# MPSGraphReducedPrecisionFastMath (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

MPSGraph could use these reduced precision paths to deliver faster math, but it is not guaranteed.

## Declaration

```swift
struct MPSGraphReducedPrecisionFastMath
```

## Topics

### Initializers

- [init(rawValue:)](mpsgraphreducedprecisionfastmath/init%28rawvalue_%29.md)

### Type Properties

- [allowConvertingOperandsFromFP32ToFP19](mpsgraphreducedprecisionfastmath/allowconvertingoperandsfromfp32tofp19.md): Allow conversion of operands to FP19 or TF32 from FP32 when needed by dropping 13 mantissa bits.
- [allowFP16Conv2DWinogradTransformIntermediate](mpsgraphreducedprecisionfastmath/allowfp16conv2dwinogradtransformintermediate.md): Execute winograd transform intermediate as FP16.
- [allowFP16Intermediates](mpsgraphreducedprecisionfastmath/allowfp16intermediates.md): Curated list allowing intermediates for multi-pass GPU kernels to be FP16.
- [none](mpsgraphreducedprecisionfastmath/none.md): Full precision math with maximum accuracy.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# MPSGraphReducedPrecisionFastMath (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

MPSGraph could use these reduced precision paths to deliver faster math, but it is not guaranteed.

## Declaration

```objectivec
enum MPSGraphReducedPrecisionFastMath : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSGraphReducedPrecisionFastMathDefault](mpsgraphreducedprecisionfastmath/mpsgraphreducedprecisionfastmathdefault.md): Default selection.
- [MPSGraphReducedPrecisionFastMathAllowConvertingOperandsFromFP32ToFP19](mpsgraphreducedprecisionfastmath/allowconvertingoperandsfromfp32tofp19.md): Allow conversion of operands to FP19 or TF32 from FP32 when needed by dropping 13 mantissa bits.
- [MPSGraphReducedPrecisionFastMathAllowFP16Conv2DWinogradTransformIntermediate](mpsgraphreducedprecisionfastmath/allowfp16conv2dwinogradtransformintermediate.md): Execute winograd transform intermediate as FP16.
- [MPSGraphReducedPrecisionFastMathAllowFP16Intermediates](mpsgraphreducedprecisionfastmath/allowfp16intermediates.md): Curated list allowing intermediates for multi-pass GPU kernels to be FP16.
- [MPSGraphReducedPrecisionFastMathNone](mpsgraphreducedprecisionfastmath/none.md): Full precision math with maximum accuracy.
