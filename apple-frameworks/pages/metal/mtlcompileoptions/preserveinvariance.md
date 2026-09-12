> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcompileoptions/preserveinvariance](https://developer.apple.com/documentation/metal/mtlcompileoptions/preserveinvariance)

# preserveInvariance (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the compiler compiles vertex shaders conservatively to generate consistent position calculations.

## Declaration

```swift
var preserveInvariance: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). When [true](https://developer.apple.com/documentation/swift/true), the Metal shader compiler looks at the position value in all vertex output structures that it compiles. If the position value also has the `[[invariant]]` attribute, the compiler compiles the corresponding vertex shader conservatively to guarantee that the GPU performs the calculations the same way. You need to preserve invariance when your renderer contains multiple render passes and requires the same position calculations in each render pass.

## See Also

### Configuring the compiler options

- [enableLogging](enablelogging.md): A Boolean value that enables shader logging.
- [mathMode](mathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [mathFloatingPointFunctions](mathfloatingpointfunctions.md): The FP32 math functions Metal uses.
- [languageVersion](languageversion.md): The language version for interpreting the library source code.
- [preprocessorMacros](preprocessormacros.md): A list of preprocessor macros to apply when compiling the library source.
- [optimizationLevel](optimizationlevel.md): An option that tells the compiler what to prioritize when it compiles Metal shader code.
- [libraries](libraries.md): An array of dynamic libraries the Metal compiler links against.
- [fastMathEnabled](fastmathenabled.md): Deprecated. A Boolean value that indicates whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.

# preserveInvariance (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the compiler compiles vertex shaders conservatively to generate consistent position calculations.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL preserveInvariance;
```

<a id="discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). When [true](https://developer.apple.com/documentation/swift/true), the Metal shader compiler looks at the position value in all vertex output structures that it compiles. If the position value also has the `[[invariant]]` attribute, the compiler compiles the corresponding vertex shader conservatively to guarantee that the GPU performs the calculations the same way. You need to preserve invariance when your renderer contains multiple render passes and requires the same position calculations in each render pass.

## See Also

### Configuring the compiler options

- [enableLogging](enablelogging.md): A Boolean value that enables shader logging.
- [mathMode](mathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [mathFloatingPointFunctions](mathfloatingpointfunctions.md): The FP32 math functions Metal uses.
- [languageVersion](languageversion.md): The language version for interpreting the library source code.
- [preprocessorMacros](preprocessormacros.md): A list of preprocessor macros to apply when compiling the library source.
- [optimizationLevel](optimizationlevel.md): An option that tells the compiler what to prioritize when it compiles Metal shader code.
- [libraries](libraries.md): An array of dynamic libraries the Metal compiler links against.
- [fastMathEnabled](fastmathenabled.md): Deprecated. A Boolean value that indicates whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
