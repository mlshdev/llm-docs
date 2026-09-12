> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcompileoptions/mathmode](https://developer.apple.com/documentation/metal/mtlcompileoptions/mathmode)

# mathMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.

## Declaration

```swift
var mathMode: MTLMathMode { get set }
```

<a id="discussion"></a>

## Discussion

This property replaces the [fastMathEnabled](fastmathenabled.md) property.

If [fastMathEnabled](fastmathenabled.md) is `true`, the system sets [mathMode](mathmode.md) to [MTLMathMode.fast](../mtlmathmode/fast.md) and [mathFloatingPointFunctions](mathfloatingpointfunctions.md) to [MTLMathFloatingPointFunctions.fast](../mtlmathfloatingpointfunctions/fast.md).

If [fastMathEnabled](fastmathenabled.md) is `false`, the system sets [mathMode](mathmode.md) to [MTLMathMode.safe](../mtlmathmode/safe.md) and [mathFloatingPointFunctions](mathfloatingpointfunctions.md) to [MTLMathFloatingPointFunctions.precise](../mtlmathfloatingpointfunctions/precise.md).

Subsequent calls to [mathMode](mathmode.md) or [mathFloatingPointFunctions](mathfloatingpointfunctions.md) set the variables directly.

## Topics

### Supporting types

- [MTLMathMode](../mtlmathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.

## See Also

### Configuring the compiler options

- [enableLogging](enablelogging.md): A Boolean value that enables shader logging.
- [mathFloatingPointFunctions](mathfloatingpointfunctions.md): The FP32 math functions Metal uses.
- [preserveInvariance](preserveinvariance.md): A Boolean value that indicates whether the compiler compiles vertex shaders conservatively to generate consistent position calculations.
- [languageVersion](languageversion.md): The language version for interpreting the library source code.
- [preprocessorMacros](preprocessormacros.md): A list of preprocessor macros to apply when compiling the library source.
- [optimizationLevel](optimizationlevel.md): An option that tells the compiler what to prioritize when it compiles Metal shader code.
- [libraries](libraries.md): An array of dynamic libraries the Metal compiler links against.
- [fastMathEnabled](fastmathenabled.md): Deprecated. A Boolean value that indicates whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.

# mathMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLMathMode mathMode;
```

<a id="discussion"></a>

## Discussion

This property replaces the [fastMathEnabled](fastmathenabled.md) property.

If [fastMathEnabled](fastmathenabled.md) is `true`, the system sets [mathMode](mathmode.md) to [MTLMathModeFast](../mtlmathmode/fast.md) and [mathFloatingPointFunctions](mathfloatingpointfunctions.md) to [MTLMathFloatingPointFunctionsFast](../mtlmathfloatingpointfunctions/fast.md).

If [fastMathEnabled](fastmathenabled.md) is `false`, the system sets [mathMode](mathmode.md) to [MTLMathModeSafe](../mtlmathmode/safe.md) and [mathFloatingPointFunctions](mathfloatingpointfunctions.md) to [MTLMathFloatingPointFunctionsPrecise](../mtlmathfloatingpointfunctions/precise.md).

Subsequent calls to [mathMode](mathmode.md) or [mathFloatingPointFunctions](mathfloatingpointfunctions.md) set the variables directly.

## Topics

### Supporting types

- [MTLMathMode](../mtlmathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.

## See Also

### Configuring the compiler options

- [enableLogging](enablelogging.md): A Boolean value that enables shader logging.
- [mathFloatingPointFunctions](mathfloatingpointfunctions.md): The FP32 math functions Metal uses.
- [preserveInvariance](preserveinvariance.md): A Boolean value that indicates whether the compiler compiles vertex shaders conservatively to generate consistent position calculations.
- [languageVersion](languageversion.md): The language version for interpreting the library source code.
- [preprocessorMacros](preprocessormacros.md): A list of preprocessor macros to apply when compiling the library source.
- [optimizationLevel](optimizationlevel.md): An option that tells the compiler what to prioritize when it compiles Metal shader code.
- [libraries](libraries.md): An array of dynamic libraries the Metal compiler links against.
- [fastMathEnabled](fastmathenabled.md): Deprecated. A Boolean value that indicates whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
