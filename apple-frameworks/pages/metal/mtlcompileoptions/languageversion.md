> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcompileoptions/languageversion](https://developer.apple.com/documentation/metal/mtlcompileoptions/languageversion)

# languageVersion (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The language version for interpreting the library source code.

## Declaration

```swift
var languageVersion: MTLLanguageVersion { get set }
```

<a id="discussion"></a>

## Discussion

By default, Metal uses the most recent language version.

## See Also

### Related Documentation

- [MTLLanguageVersion](../mtllanguageversion.md): Metal shading language versions.

### Configuring the compiler options

- [enableLogging](enablelogging.md): A Boolean value that enables shader logging.
- [mathMode](mathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [mathFloatingPointFunctions](mathfloatingpointfunctions.md): The FP32 math functions Metal uses.
- [preserveInvariance](preserveinvariance.md): A Boolean value that indicates whether the compiler compiles vertex shaders conservatively to generate consistent position calculations.
- [preprocessorMacros](preprocessormacros.md): A list of preprocessor macros to apply when compiling the library source.
- [optimizationLevel](optimizationlevel.md): An option that tells the compiler what to prioritize when it compiles Metal shader code.
- [libraries](libraries.md): An array of dynamic libraries the Metal compiler links against.
- [fastMathEnabled](fastmathenabled.md): Deprecated. A Boolean value that indicates whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.

# languageVersion (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The language version for interpreting the library source code.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLLanguageVersion languageVersion;
```

<a id="discussion"></a>

## Discussion

By default, Metal uses the most recent language version.

## See Also

### Related Documentation

- [MTLLanguageVersion](../mtllanguageversion.md): Metal shading language versions.

### Configuring the compiler options

- [enableLogging](enablelogging.md): A Boolean value that enables shader logging.
- [mathMode](mathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [mathFloatingPointFunctions](mathfloatingpointfunctions.md): The FP32 math functions Metal uses.
- [preserveInvariance](preserveinvariance.md): A Boolean value that indicates whether the compiler compiles vertex shaders conservatively to generate consistent position calculations.
- [preprocessorMacros](preprocessormacros.md): A list of preprocessor macros to apply when compiling the library source.
- [optimizationLevel](optimizationlevel.md): An option that tells the compiler what to prioritize when it compiles Metal shader code.
- [libraries](libraries.md): An array of dynamic libraries the Metal compiler links against.
- [fastMathEnabled](fastmathenabled.md): Deprecated. A Boolean value that indicates whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
