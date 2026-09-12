> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_floatingpointdiscretefouriertransformable](https://developer.apple.com/documentation/accelerate/vdsp_floatingpointdiscretefouriertransformable)

# vDSP_FloatingPointDiscreteFourierTransformable

**Framework:** Accelerate  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Types that support discrete Fourier transform operations.

> Use `vDSP.DiscreteFourierTransform`.

## Declaration

```swift
protocol vDSP_FloatingPointDiscreteFourierTransformable : BinaryFloatingPoint
```

## Topics

### Associated Types

- [DFTFunctions](vdsp_floatingpointdiscretefouriertransformable/dftfunctions.md): Deprecated.

## Relationships

### Inherits From

- [AdditiveArithmetic](https://developer.apple.com/documentation/swift/additivearithmetic)
- [BinaryFloatingPoint](https://developer.apple.com/documentation/swift/binaryfloatingpoint)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [ExpressibleByIntegerLiteral](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral)
- [FloatingPoint](https://developer.apple.com/documentation/swift/floatingpoint)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Numeric](https://developer.apple.com/documentation/swift/numeric)
- [SignedNumeric](https://developer.apple.com/documentation/swift/signednumeric)
- [Strideable](https://developer.apple.com/documentation/swift/strideable)

## See Also

### Fourier Transform

- [vDSP_DFTFunctions](vdsp_dftfunctions.md): Deprecated. A protocol that defines functions for discrete Fourier transform operations.
- [vDSP_FourierTransformFunctions](vdsp_fouriertransformfunctions.md): A protocol that defines functions for fast Fourier transform operations.
- [vDSP_FourierTransformable](vdsp_fouriertransformable.md): Types that support fast Fourier transform operations.
- [vDSP_DiscreteFourierTransformable](vdsp_discretefouriertransformable.md)
- [vDSP_DiscreteTransformLifecycleFunctions](vdsp_discretetransformlifecyclefunctions.md)
