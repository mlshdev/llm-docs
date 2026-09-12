> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcompileoptions/preprocessormacros](https://developer.apple.com/documentation/metal/mtlcompileoptions/preprocessormacros)

# preprocessorMacros (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A list of preprocessor macros to apply when compiling the library source.

## Declaration

```swift
var preprocessorMacros: [String : NSObject]? { get set }
```

<a id="discussion"></a>

## Discussion

Define the macros as a dictionary where each key is a string, and the values can be either an [NSString](../../foundation/nsstring.md) or [NSNumber](../../foundation/nsnumber.md) instance.

The default value is `nil`.

## See Also

### Configuring the compiler options

- [enableLogging](enablelogging.md): A Boolean value that enables shader logging.
- [mathMode](mathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [mathFloatingPointFunctions](mathfloatingpointfunctions.md): The FP32 math functions Metal uses.
- [preserveInvariance](preserveinvariance.md): A Boolean value that indicates whether the compiler compiles vertex shaders conservatively to generate consistent position calculations.
- [languageVersion](languageversion.md): The language version for interpreting the library source code.
- [optimizationLevel](optimizationlevel.md): An option that tells the compiler what to prioritize when it compiles Metal shader code.
- [libraries](libraries.md): An array of dynamic libraries the Metal compiler links against.
- [fastMathEnabled](fastmathenabled.md): Deprecated. A Boolean value that indicates whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.

# preprocessorMacros (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A list of preprocessor macros to apply when compiling the library source.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDictionary<NSString *,NSObject *> * preprocessorMacros;
```

<a id="discussion"></a>

## Discussion

Define the macros as a dictionary where each key is a string, and the values can be either an [NSString](../../foundation/nsstring.md) or [NSNumber](../../foundation/nsnumber.md) instance.

The default value is `nil`.

## See Also

### Configuring the compiler options

- [enableLogging](enablelogging.md): A Boolean value that enables shader logging.
- [mathMode](mathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [mathFloatingPointFunctions](mathfloatingpointfunctions.md): The FP32 math functions Metal uses.
- [preserveInvariance](preserveinvariance.md): A Boolean value that indicates whether the compiler compiles vertex shaders conservatively to generate consistent position calculations.
- [languageVersion](languageversion.md): The language version for interpreting the library source code.
- [optimizationLevel](optimizationlevel.md): An option that tells the compiler what to prioritize when it compiles Metal shader code.
- [libraries](libraries.md): An array of dynamic libraries the Metal compiler links against.
- [fastMathEnabled](fastmathenabled.md): Deprecated. A Boolean value that indicates whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
