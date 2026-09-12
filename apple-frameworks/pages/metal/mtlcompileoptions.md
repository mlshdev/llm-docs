> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcompileoptions](https://developer.apple.com/documentation/metal/mtlcompileoptions)

# MTLCompileOptions (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Compilation settings for a Metal shader library.

## Declaration

```swift
class MTLCompileOptions
```

## Mentioned In

- [Logging shader debug messages](logging-shader-debug-messages.md)
- [Minimizing the binary size of a shader library](minimizing-the-binary-size-of-a-shader-library.md)

<a id="overview"></a>

## Overview

You can configure the Metal compiler’s options by setting any or all of an [MTLCompileOptions](mtlcompileoptions.md) instance’s properties, including the following:

- Target previous OS releases by assigning the [languageVersion](mtlcompileoptions/languageversion.md) property to an [MTLLanguageVersion](mtllanguageversion.md) case.
- Set preprocessor macros for the Metal compiler by assigning a dictionary to the [preprocessorMacros](mtlcompileoptions/preprocessormacros.md) property.
- Choose what the Metal compiler’s optimizer prioritizes by setting the [optimizationLevel](mtlcompileoptions/optimizationlevel.md) property to an [MTLLibraryOptimizationLevel](mtllibraryoptimizationlevel.md) case.
- Allow the compiler to optimize for floating-point arithmetic that may violate the IEEE 754 standard by setting [mathMode](mtlcompileoptions/mathmode.md) to [MTLMathMode.fast](mtlmathmode/fast.md).

You can compile a library with your compile options instance by calling an [MTLDevice](mtldevice.md) instance’s [makeLibrary(source:options:)](mtldevice/makelibrary%28source_options_%29.md) or [makeLibrary(source:options:completionHandler:)](mtldevice/makelibrary%28source_options_completionhandler_%29.md) method.

## Topics

### Configuring the compiler options

- [enableLogging](mtlcompileoptions/enablelogging.md): A Boolean value that enables shader logging.
- [mathMode](mtlcompileoptions/mathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [mathFloatingPointFunctions](mtlcompileoptions/mathfloatingpointfunctions.md): The FP32 math functions Metal uses.
- [preserveInvariance](mtlcompileoptions/preserveinvariance.md): A Boolean value that indicates whether the compiler compiles vertex shaders conservatively to generate consistent position calculations.
- [languageVersion](mtlcompileoptions/languageversion.md): The language version for interpreting the library source code.
- [preprocessorMacros](mtlcompileoptions/preprocessormacros.md): A list of preprocessor macros to apply when compiling the library source.
- [optimizationLevel](mtlcompileoptions/optimizationlevel.md): An option that tells the compiler what to prioritize when it compiles Metal shader code.
- [libraries](mtlcompileoptions/libraries.md): An array of dynamic libraries the Metal compiler links against.
- [fastMathEnabled](mtlcompileoptions/fastmathenabled.md): Deprecated. A Boolean value that indicates whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.

### Configuring the library output options

- [libraryType](mtlcompileoptions/librarytype.md): The kind of library to create.
- [installName](mtlcompileoptions/installname.md): For a dynamic library, the name to use when installing the library.

### Instance Properties

- [allowReferencingUndefinedSymbols](mtlcompileoptions/allowreferencingundefinedsymbols.md)
- [compileSymbolVisibility](mtlcompileoptions/compilesymbolvisibility.md)
- [floatingPointConversionRoundingMode](mtlcompileoptions/floatingpointconversionroundingmode.md)
- [maxTotalThreadsPerThreadgroup](mtlcompileoptions/maxtotalthreadsperthreadgroup.md)
- [requiredThreadsPerThreadgroup](mtlcompileoptions/requiredthreadsperthreadgroup.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shader library management

- [MTLLibrary](mtllibrary.md): A collection of Metal shader functions.
- [MTLDynamicLibrary](mtldynamiclibrary.md): A dynamically linkable representation of compiled shader code for a specific Metal device object.
- [MTLBinaryArchive](mtlbinaryarchive.md): A container for pipeline state descriptors and their associated compiled shader code.
- [MTLLibraryType](mtllibrarytype.md): A set of options for Metal library types.
- [MTLLanguageVersion](mtllanguageversion.md): Metal shading language versions.
- [MTLCompileSymbolVisibility](mtlcompilesymbolvisibility.md)
- [MTLLibraryOptimizationLevel](mtllibraryoptimizationlevel.md): The optimization options for the Metal compiler.

# MTLCompileOptions (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Compilation settings for a Metal shader library.

## Declaration

```objectivec
@interface MTLCompileOptions : NSObject
```

## Mentioned In

- [Logging shader debug messages](logging-shader-debug-messages.md)
- [Minimizing the binary size of a shader library](minimizing-the-binary-size-of-a-shader-library.md)

<a id="overview"></a>

## Overview

You can configure the Metal compiler’s options by setting any or all of an [MTLCompileOptions](mtlcompileoptions.md) instance’s properties, including the following:

- Target previous OS releases by assigning the [languageVersion](mtlcompileoptions/languageversion.md) property to an [MTLLanguageVersion](mtllanguageversion.md) case.
- Set preprocessor macros for the Metal compiler by assigning a dictionary to the [preprocessorMacros](mtlcompileoptions/preprocessormacros.md) property.
- Choose what the Metal compiler’s optimizer prioritizes by setting the [optimizationLevel](mtlcompileoptions/optimizationlevel.md) property to an [MTLLibraryOptimizationLevel](mtllibraryoptimizationlevel.md) case.
- Allow the compiler to optimize for floating-point arithmetic that may violate the IEEE 754 standard by setting [mathMode](mtlcompileoptions/mathmode.md) to [MTLMathModeFast](mtlmathmode/fast.md).

You can compile a library with your compile options instance by calling an [MTLDevice](mtldevice.md) instance’s [newLibraryWithSource:options:error:](mtldevice/makelibrary%28source_options_%29.md) or [newLibraryWithSource:options:completionHandler:](mtldevice/makelibrary%28source_options_completionhandler_%29.md) method.

## Topics

### Configuring the compiler options

- [enableLogging](mtlcompileoptions/enablelogging.md): A Boolean value that enables shader logging.
- [mathMode](mtlcompileoptions/mathmode.md): An indication of whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.
- [mathFloatingPointFunctions](mtlcompileoptions/mathfloatingpointfunctions.md): The FP32 math functions Metal uses.
- [preserveInvariance](mtlcompileoptions/preserveinvariance.md): A Boolean value that indicates whether the compiler compiles vertex shaders conservatively to generate consistent position calculations.
- [languageVersion](mtlcompileoptions/languageversion.md): The language version for interpreting the library source code.
- [preprocessorMacros](mtlcompileoptions/preprocessormacros.md): A list of preprocessor macros to apply when compiling the library source.
- [optimizationLevel](mtlcompileoptions/optimizationlevel.md): An option that tells the compiler what to prioritize when it compiles Metal shader code.
- [libraries](mtlcompileoptions/libraries.md): An array of dynamic libraries the Metal compiler links against.
- [fastMathEnabled](mtlcompileoptions/fastmathenabled.md): Deprecated. A Boolean value that indicates whether the compiler can perform optimizations for floating-point arithmetic that may violate the IEEE 754 standard.

### Configuring the library output options

- [libraryType](mtlcompileoptions/librarytype.md): The kind of library to create.
- [installName](mtlcompileoptions/installname.md): For a dynamic library, the name to use when installing the library.

### Instance Properties

- [allowReferencingUndefinedSymbols](mtlcompileoptions/allowreferencingundefinedsymbols.md)
- [compileSymbolVisibility](mtlcompileoptions/compilesymbolvisibility.md)
- [floatingPointConversionRoundingMode](mtlcompileoptions/floatingpointconversionroundingmode.md)
- [maxTotalThreadsPerThreadgroup](mtlcompileoptions/maxtotalthreadsperthreadgroup.md)
- [requiredThreadsPerThreadgroup](mtlcompileoptions/requiredthreadsperthreadgroup.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Shader library management

- [MTLLibrary](mtllibrary.md): A collection of Metal shader functions.
- [MTLDynamicLibrary](mtldynamiclibrary.md): A dynamically linkable representation of compiled shader code for a specific Metal device object.
- [MTLBinaryArchive](mtlbinaryarchive.md): A container for pipeline state descriptors and their associated compiled shader code.
- [MTLLibraryType](mtllibrarytype.md): A set of options for Metal library types.
- [MTLLanguageVersion](mtllanguageversion.md): Metal shading language versions.
- [MTLCompileSymbolVisibility](mtlcompilesymbolvisibility.md)
- [MTLLibraryOptimizationLevel](mtllibraryoptimizationlevel.md): The optimization options for the Metal compiler.
