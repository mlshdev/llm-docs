> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcompileoptions/enablelogging](https://developer.apple.com/documentation/metal/mtlcompileoptions/enablelogging)

# enableLogging (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that enables shader logging.

## Declaration

```swift
var enableLogging: Bool { get set }
```

## Mentioned In

- [Logging shader debug messages](../logging-shader-debug-messages.md)

<a id="discussion"></a>

## Discussion

Because logging incurs overhead, regardless of whether the system prints messages, you need to explicitly enable logging.

## See Also

### Configuring the compiler options

- [mathMode](mathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [mathFloatingPointFunctions](mathfloatingpointfunctions.md): The FP32 math functions Metal uses.
- [preserveInvariance](preserveinvariance.md): A Boolean value that indicates whether the compiler compiles vertex shaders conservatively to generate consistent position calculations.
- [languageVersion](languageversion.md): The language version for interpreting the library source code.
- [preprocessorMacros](preprocessormacros.md): A list of preprocessor macros to apply when compiling the library source.
- [optimizationLevel](optimizationlevel.md): An option that tells the compiler what to prioritize when it compiles Metal shader code.
- [libraries](libraries.md): An array of dynamic libraries the Metal compiler links against.
- [fastMathEnabled](fastmathenabled.md): Deprecated. A Boolean value that indicates whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.

# enableLogging (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that enables shader logging.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL enableLogging;
```

## Mentioned In

- [Logging shader debug messages](../logging-shader-debug-messages.md)

<a id="discussion"></a>

## Discussion

Because logging incurs overhead, regardless of whether the system prints messages, you need to explicitly enable logging.

## See Also

### Configuring the compiler options

- [mathMode](mathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [mathFloatingPointFunctions](mathfloatingpointfunctions.md): The FP32 math functions Metal uses.
- [preserveInvariance](preserveinvariance.md): A Boolean value that indicates whether the compiler compiles vertex shaders conservatively to generate consistent position calculations.
- [languageVersion](languageversion.md): The language version for interpreting the library source code.
- [preprocessorMacros](preprocessormacros.md): A list of preprocessor macros to apply when compiling the library source.
- [optimizationLevel](optimizationlevel.md): An option that tells the compiler what to prioritize when it compiles Metal shader code.
- [libraries](libraries.md): An array of dynamic libraries the Metal compiler links against.
- [fastMathEnabled](fastmathenabled.md): Deprecated. A Boolean value that indicates whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
