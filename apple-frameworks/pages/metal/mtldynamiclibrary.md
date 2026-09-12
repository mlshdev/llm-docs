> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldynamiclibrary](https://developer.apple.com/documentation/metal/mtldynamiclibrary)

# MTLDynamicLibrary (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A dynamically linkable representation of compiled shader code for a specific Metal device object.

## Declaration

```swift
protocol MTLDynamicLibrary : NSObjectProtocol, Sendable
```

## Topics

### Identifying the library

- [device](mtldynamiclibrary/device.md): The Metal device object that created the dynamic library.
- [installName](mtldynamiclibrary/installname.md): A file path for this dynamic library.
- [label](mtldynamiclibrary/label.md): A string that identifies the library.

### Saving a dynamic library to a file

- [serialize(to:)](mtldynamiclibrary/serialize%28to_%29.md): Writes the contents of the dynamic library to a file.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shader library management

- [MTLLibrary](mtllibrary.md): A collection of Metal shader functions.
- [MTLBinaryArchive](mtlbinaryarchive.md): A container for pipeline state descriptors and their associated compiled shader code.
- [MTLCompileOptions](mtlcompileoptions.md): Compilation settings for a Metal shader library.
- [MTLLibraryType](mtllibrarytype.md): A set of options for Metal library types.
- [MTLLanguageVersion](mtllanguageversion.md): Metal shading language versions.
- [MTLCompileSymbolVisibility](mtlcompilesymbolvisibility.md)
- [MTLLibraryOptimizationLevel](mtllibraryoptimizationlevel.md): The optimization options for the Metal compiler.

# MTLDynamicLibrary (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A dynamically linkable representation of compiled shader code for a specific Metal device object.

## Declaration

```objectivec
@protocol MTLDynamicLibrary <NSObject>
```

## Topics

### Identifying the library

- [device](mtldynamiclibrary/device.md): The Metal device object that created the dynamic library.
- [installName](mtldynamiclibrary/installname.md): A file path for this dynamic library.
- [label](mtldynamiclibrary/label.md): A string that identifies the library.

### Saving a dynamic library to a file

- [serializeToURL:error:](mtldynamiclibrary/serialize%28to_%29.md): Writes the contents of the dynamic library to a file.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Shader library management

- [MTLLibrary](mtllibrary.md): A collection of Metal shader functions.
- [MTLBinaryArchive](mtlbinaryarchive.md): A container for pipeline state descriptors and their associated compiled shader code.
- [MTLCompileOptions](mtlcompileoptions.md): Compilation settings for a Metal shader library.
- [MTLLibraryType](mtllibrarytype.md): A set of options for Metal library types.
- [MTLLanguageVersion](mtllanguageversion.md): Metal shading language versions.
- [MTLCompileSymbolVisibility](mtlcompilesymbolvisibility.md)
- [MTLLibraryOptimizationLevel](mtllibraryoptimizationlevel.md): The optimization options for the Metal compiler.
