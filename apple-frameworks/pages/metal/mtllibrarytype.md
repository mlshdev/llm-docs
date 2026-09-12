> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibrarytype](https://developer.apple.com/documentation/metal/mtllibrarytype)

# MTLLibraryType (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A set of options for Metal library types.

## Declaration

```swift
enum MTLLibraryType
```

## Topics

### Library options

- [MTLLibraryType.executable](mtllibrarytype/executable.md): A library that can create pipeline state objects.
- [MTLLibraryType.dynamic](mtllibrarytype/dynamic.md): A library that you can dynamically link to from other libraries.

### Initializers

- [init(rawValue:)](mtllibrarytype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shader library management

- [MTLLibrary](mtllibrary.md): A collection of Metal shader functions.
- [MTLDynamicLibrary](mtldynamiclibrary.md): A dynamically linkable representation of compiled shader code for a specific Metal device object.
- [MTLBinaryArchive](mtlbinaryarchive.md): A container for pipeline state descriptors and their associated compiled shader code.
- [MTLCompileOptions](mtlcompileoptions.md): Compilation settings for a Metal shader library.
- [MTLLanguageVersion](mtllanguageversion.md): Metal shading language versions.
- [MTLCompileSymbolVisibility](mtlcompilesymbolvisibility.md)
- [MTLLibraryOptimizationLevel](mtllibraryoptimizationlevel.md): The optimization options for the Metal compiler.

# MTLLibraryType (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A set of options for Metal library types.

## Declaration

```objectivec
enum MTLLibraryType : NSInteger;
```

## Topics

### Library options

- [MTLLibraryTypeExecutable](mtllibrarytype/executable.md): A library that can create pipeline state objects.
- [MTLLibraryTypeDynamic](mtllibrarytype/dynamic.md): A library that you can dynamically link to from other libraries.

## See Also

### Shader library management

- [MTLLibrary](mtllibrary.md): A collection of Metal shader functions.
- [MTLDynamicLibrary](mtldynamiclibrary.md): A dynamically linkable representation of compiled shader code for a specific Metal device object.
- [MTLBinaryArchive](mtlbinaryarchive.md): A container for pipeline state descriptors and their associated compiled shader code.
- [MTLCompileOptions](mtlcompileoptions.md): Compilation settings for a Metal shader library.
- [MTLLanguageVersion](mtllanguageversion.md): Metal shading language versions.
- [MTLCompileSymbolVisibility](mtlcompilesymbolvisibility.md)
- [MTLLibraryOptimizationLevel](mtllibraryoptimizationlevel.md): The optimization options for the Metal compiler.
