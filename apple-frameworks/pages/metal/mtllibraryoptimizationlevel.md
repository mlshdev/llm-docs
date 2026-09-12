> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibraryoptimizationlevel](https://developer.apple.com/documentation/metal/mtllibraryoptimizationlevel)

# MTLLibraryOptimizationLevel (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The optimization options for the Metal compiler.

## Declaration

```swift
enum MTLLibraryOptimizationLevel
```

## Topics

### Optimization options

- [MTLLibraryOptimizationLevel.default](mtllibraryoptimizationlevel/default.md): An optimization option for the Metal compiler that prioritizes runtime performance.
- [MTLLibraryOptimizationLevel.size](mtllibraryoptimizationlevel/size.md): An optimization option for the Metal compiler that prioritizes minimizing the size of its output binaries, which may also reduce compile time.

### Initializers

- [init(rawValue:)](mtllibraryoptimizationlevel/init%28rawvalue_%29.md)

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
- [MTLLibraryType](mtllibrarytype.md): A set of options for Metal library types.
- [MTLLanguageVersion](mtllanguageversion.md): Metal shading language versions.
- [MTLCompileSymbolVisibility](mtlcompilesymbolvisibility.md)

# MTLLibraryOptimizationLevel (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The optimization options for the Metal compiler.

## Declaration

```objectivec
enum MTLLibraryOptimizationLevel : NSInteger;
```

## Topics

### Optimization options

- [MTLLibraryOptimizationLevelDefault](mtllibraryoptimizationlevel/default.md): An optimization option for the Metal compiler that prioritizes runtime performance.
- [MTLLibraryOptimizationLevelSize](mtllibraryoptimizationlevel/size.md): An optimization option for the Metal compiler that prioritizes minimizing the size of its output binaries, which may also reduce compile time.

## See Also

### Shader library management

- [MTLLibrary](mtllibrary.md): A collection of Metal shader functions.
- [MTLDynamicLibrary](mtldynamiclibrary.md): A dynamically linkable representation of compiled shader code for a specific Metal device object.
- [MTLBinaryArchive](mtlbinaryarchive.md): A container for pipeline state descriptors and their associated compiled shader code.
- [MTLCompileOptions](mtlcompileoptions.md): Compilation settings for a Metal shader library.
- [MTLLibraryType](mtllibrarytype.md): A set of options for Metal library types.
- [MTLLanguageVersion](mtllanguageversion.md): Metal shading language versions.
- [MTLCompileSymbolVisibility](mtlcompilesymbolvisibility.md)
