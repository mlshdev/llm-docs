> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibrary](https://developer.apple.com/documentation/metal/mtllibrary)

# MTLLibrary (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A collection of Metal shader functions.

## Declaration

```swift
protocol MTLLibrary : NSObjectProtocol, Sendable
```

## Mentioned In

- [Building a shader library by precompiling source files](building-a-shader-library-by-precompiling-source-files.md)
- [Logging shader debug messages](logging-shader-debug-messages.md)

<a id="overview"></a>

## Overview

An [MTLLibrary](mtllibrary.md) instance contains Metal shading language source code compiled during an app’s build process or at runtime from a text string.

Don’t implement this protocol yourself; instead, use the library creation methods provided by the [MTLDevice](mtldevice.md) protocol. To create an [MTLLibrary](mtllibrary.md) from a precompiled Metal library binary, call one of these [MTLDevice](mtldevice.md) methods:

- [makeDefaultLibrary()](mtldevice/makedefaultlibrary%28%29.md)
- [makeLibrary(filepath:)](mtldevice/makelibrary%28filepath_%29.md)
- [makeLibrary(data:)](mtldevice/makelibrary%28data_%29.md)

To create an [MTLLibrary](mtllibrary.md) by compiling source code at runtime, call one of these [MTLDevice](mtldevice.md) methods:

- [makeLibrary(source:options:completionHandler:)](mtldevice/makelibrary%28source_options_completionhandler_%29.md)
- [makeLibrary(source:options:)](mtldevice/makelibrary%28source_options_%29.md)

## Topics

### Querying basic library attributes

- [installName](mtllibrary/installname.md): The installation name for a dynamic library.
- [type](mtllibrary/type.md): The library’s basic type.

### Querying library contents

- [functionNames](mtllibrary/functionnames.md): The names of all public functions in the library.

### Creating shader function instances

- [makeFunction(name:)](mtllibrary/makefunction%28name_%29.md): Creates an instance that represents a shader function in the library.
- [makeFunction(name:constantValues:completionHandler:)](mtllibrary/makefunction%28name_constantvalues_completionhandler_%29.md): Asynchronously creates a specialized shader function.
- [makeFunction(name:constantValues:)](mtllibrary/makefunction%28name_constantvalues_%29.md): Synchronously creates a specialized shader function.
- [makeFunction(descriptor:completionHandler:)](mtllibrary/makefunction%28descriptor_completionhandler_%29.md): Asynchronously creates an object representing a shader function, using the specified descriptor.
- [makeFunction(descriptor:)](mtllibrary/makefunction%28descriptor_%29.md): Synchronously creates an object representing a shader function, using the specified descriptor.

### Creating intersection function instances

- [makeIntersectionFunction(descriptor:completionHandler:)](mtllibrary/makeintersectionfunction%28descriptor_completionhandler_%29.md): Asynchronously creates an object representing a ray-tracing intersection function, using the specified descriptor.
- [makeIntersectionFunction(descriptor:)](mtllibrary/makeintersectionfunction%28descriptor_%29.md): Synchronously creates an object representing a ray-tracing intersection function, using the specified descriptor.

### Identifying the library

- [device](mtllibrary/device.md): The Metal device object that created the library.
- [label](mtllibrary/label.md): A string that identifies the library.

### Instance Methods

- [reflection(functionName:)](mtllibrary/reflection%28functionname_%29.md): Retrieves reflection information for a function in the library.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shader library management

- [MTLDynamicLibrary](mtldynamiclibrary.md): A dynamically linkable representation of compiled shader code for a specific Metal device object.
- [MTLBinaryArchive](mtlbinaryarchive.md): A container for pipeline state descriptors and their associated compiled shader code.
- [MTLCompileOptions](mtlcompileoptions.md): Compilation settings for a Metal shader library.
- [MTLLibraryType](mtllibrarytype.md): A set of options for Metal library types.
- [MTLLanguageVersion](mtllanguageversion.md): Metal shading language versions.
- [MTLCompileSymbolVisibility](mtlcompilesymbolvisibility.md)
- [MTLLibraryOptimizationLevel](mtllibraryoptimizationlevel.md): The optimization options for the Metal compiler.

# MTLLibrary (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A collection of Metal shader functions.

## Declaration

```objectivec
@protocol MTLLibrary <NSObject>
```

## Mentioned In

- [Building a shader library by precompiling source files](building-a-shader-library-by-precompiling-source-files.md)
- [Logging shader debug messages](logging-shader-debug-messages.md)

<a id="overview"></a>

## Overview

An [MTLLibrary](mtllibrary.md) instance contains Metal shading language source code compiled during an app’s build process or at runtime from a text string.

Don’t implement this protocol yourself; instead, use the library creation methods provided by the [MTLDevice](mtldevice.md) protocol. To create an [MTLLibrary](mtllibrary.md) from a precompiled Metal library binary, call one of these [MTLDevice](mtldevice.md) methods:

- [newDefaultLibrary](mtldevice/makedefaultlibrary%28%29.md)
- [newLibraryWithFile:error:](mtldevice/makelibrary%28filepath_%29.md)
- [newLibraryWithData:error:](mtldevice/makelibrary%28data_%29.md)

To create an [MTLLibrary](mtllibrary.md) by compiling source code at runtime, call one of these [MTLDevice](mtldevice.md) methods:

- [newLibraryWithSource:options:completionHandler:](mtldevice/makelibrary%28source_options_completionhandler_%29.md)
- [newLibraryWithSource:options:error:](mtldevice/makelibrary%28source_options_%29.md)

## Topics

### Querying basic library attributes

- [installName](mtllibrary/installname.md): The installation name for a dynamic library.
- [type](mtllibrary/type.md): The library’s basic type.

### Querying library contents

- [functionNames](mtllibrary/functionnames.md): The names of all public functions in the library.

### Creating shader function instances

- [newFunctionWithName:](mtllibrary/makefunction%28name_%29.md): Creates an instance that represents a shader function in the library.
- [newFunctionWithName:constantValues:completionHandler:](mtllibrary/makefunction%28name_constantvalues_completionhandler_%29.md): Asynchronously creates a specialized shader function.
- [newFunctionWithName:constantValues:error:](mtllibrary/makefunction%28name_constantvalues_%29.md): Synchronously creates a specialized shader function.
- [newFunctionWithDescriptor:completionHandler:](mtllibrary/makefunction%28descriptor_completionhandler_%29.md): Asynchronously creates an object representing a shader function, using the specified descriptor.
- [newFunctionWithDescriptor:error:](mtllibrary/makefunction%28descriptor_%29.md): Synchronously creates an object representing a shader function, using the specified descriptor.

### Creating intersection function instances

- [newIntersectionFunctionWithDescriptor:completionHandler:](mtllibrary/makeintersectionfunction%28descriptor_completionhandler_%29.md): Asynchronously creates an object representing a ray-tracing intersection function, using the specified descriptor.
- [newIntersectionFunctionWithDescriptor:error:](mtllibrary/makeintersectionfunction%28descriptor_%29.md): Synchronously creates an object representing a ray-tracing intersection function, using the specified descriptor.

### Identifying the library

- [device](mtllibrary/device.md): The Metal device object that created the library.
- [label](mtllibrary/label.md): A string that identifies the library.

### Instance Methods

- [reflectionForFunctionWithName:](mtllibrary/reflection%28functionname_%29.md): Retrieves reflection information for a function in the library.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Shader library management

- [MTLDynamicLibrary](mtldynamiclibrary.md): A dynamically linkable representation of compiled shader code for a specific Metal device object.
- [MTLBinaryArchive](mtlbinaryarchive.md): A container for pipeline state descriptors and their associated compiled shader code.
- [MTLCompileOptions](mtlcompileoptions.md): Compilation settings for a Metal shader library.
- [MTLLibraryType](mtllibrarytype.md): A set of options for Metal library types.
- [MTLLanguageVersion](mtllanguageversion.md): Metal shading language versions.
- [MTLCompileSymbolVisibility](mtlcompilesymbolvisibility.md)
- [MTLLibraryOptimizationLevel](mtllibraryoptimizationlevel.md): The optimization options for the Metal compiler.
