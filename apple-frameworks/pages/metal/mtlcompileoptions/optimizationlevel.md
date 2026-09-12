> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcompileoptions/optimizationlevel](https://developer.apple.com/documentation/metal/mtlcompileoptions/optimizationlevel)

# optimizationLevel (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An option that tells the compiler what to prioritize when it compiles Metal shader code.

## Declaration

```swift
var optimizationLevel: MTLLibraryOptimizationLevel { get set }
```

## Mentioned In

- [Minimizing the binary size of a shader library](../minimizing-the-binary-size-of-a-shader-library.md)

## See Also

### Configuring the compiler options

- [enableLogging](enablelogging.md): A Boolean value that enables shader logging.
- [mathMode](mathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [mathFloatingPointFunctions](mathfloatingpointfunctions.md): The FP32 math functions Metal uses.
- [preserveInvariance](preserveinvariance.md): A Boolean value that indicates whether the compiler compiles vertex shaders conservatively to generate consistent position calculations.
- [languageVersion](languageversion.md): The language version for interpreting the library source code.
- [preprocessorMacros](preprocessormacros.md): A list of preprocessor macros to apply when compiling the library source.
- [libraries](libraries.md): An array of dynamic libraries the Metal compiler links against.
- [fastMathEnabled](fastmathenabled.md): Deprecated. A Boolean value that indicates whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.

# optimizationLevel (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An option that tells the compiler what to prioritize when it compiles Metal shader code.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLLibraryOptimizationLevel optimizationLevel;
```

## Mentioned In

- [Minimizing the binary size of a shader library](../minimizing-the-binary-size-of-a-shader-library.md)

## See Also

### Configuring the compiler options

- [enableLogging](enablelogging.md): A Boolean value that enables shader logging.
- [mathMode](mathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [mathFloatingPointFunctions](mathfloatingpointfunctions.md): The FP32 math functions Metal uses.
- [preserveInvariance](preserveinvariance.md): A Boolean value that indicates whether the compiler compiles vertex shaders conservatively to generate consistent position calculations.
- [languageVersion](languageversion.md): The language version for interpreting the library source code.
- [preprocessorMacros](preprocessormacros.md): A list of preprocessor macros to apply when compiling the library source.
- [libraries](libraries.md): An array of dynamic libraries the Metal compiler links against.
- [fastMathEnabled](fastmathenabled.md): Deprecated. A Boolean value that indicates whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
