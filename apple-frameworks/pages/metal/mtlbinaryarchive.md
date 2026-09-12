> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbinaryarchive](https://developer.apple.com/documentation/metal/mtlbinaryarchive)

# MTLBinaryArchive (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A container for pipeline state descriptors and their associated compiled shader code.

## Declaration

```swift
protocol MTLBinaryArchive : NSObjectProtocol
```

## Mentioned In

- [Creating binary archives from device-built pipeline state objects](creating-binary-archives-from-device-built-pipeline-state-objects.md)

## Topics

### Identifying the archive

- [device](mtlbinaryarchive/device.md): The Metal device object that created the binary archive.
- [label](mtlbinaryarchive/label.md): A string that identifies the library.

### Adding pipeline descriptors

- [addComputePipelineFunctions(descriptor:)](mtlbinaryarchive/addcomputepipelinefunctions%28descriptor_%29.md): Adds a description of a compute pipeline to the archive.
- [addRenderPipelineFunctions(descriptor:)](mtlbinaryarchive/addrenderpipelinefunctions%28descriptor_%29.md): Adds a description of a render pipeline to the archive.
- [addTileRenderPipelineFunctions(descriptor:)](mtlbinaryarchive/addtilerenderpipelinefunctions%28descriptor_%29.md): Adds a description of a tile renderer pipeline to the archive.
- [addFunction(descriptor:library:)](mtlbinaryarchive/addfunction%28descriptor_library_%29.md): Adds a description of a function to the archive.

### Serializing archives

- [serialize(to:)](mtlbinaryarchive/serialize%28to_%29.md): Writes the contents of the archive to a file.

### Instance Methods

- [addLibrary(descriptor:)](mtlbinaryarchive/addlibrary%28descriptor_%29.md)
- [addMeshRenderPipelineFunctions(descriptor:)](mtlbinaryarchive/addmeshrenderpipelinefunctions%28descriptor_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shader library management

- [MTLLibrary](mtllibrary.md): A collection of Metal shader functions.
- [MTLDynamicLibrary](mtldynamiclibrary.md): A dynamically linkable representation of compiled shader code for a specific Metal device object.
- [MTLCompileOptions](mtlcompileoptions.md): Compilation settings for a Metal shader library.
- [MTLLibraryType](mtllibrarytype.md): A set of options for Metal library types.
- [MTLLanguageVersion](mtllanguageversion.md): Metal shading language versions.
- [MTLCompileSymbolVisibility](mtlcompilesymbolvisibility.md)
- [MTLLibraryOptimizationLevel](mtllibraryoptimizationlevel.md): The optimization options for the Metal compiler.

# MTLBinaryArchive (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A container for pipeline state descriptors and their associated compiled shader code.

## Declaration

```objectivec
@protocol MTLBinaryArchive <NSObject>
```

## Mentioned In

- [Creating binary archives from device-built pipeline state objects](creating-binary-archives-from-device-built-pipeline-state-objects.md)

## Topics

### Identifying the archive

- [device](mtlbinaryarchive/device.md): The Metal device object that created the binary archive.
- [label](mtlbinaryarchive/label.md): A string that identifies the library.

### Adding pipeline descriptors

- [addComputePipelineFunctionsWithDescriptor:error:](mtlbinaryarchive/addcomputepipelinefunctions%28descriptor_%29.md): Adds a description of a compute pipeline to the archive.
- [addRenderPipelineFunctionsWithDescriptor:error:](mtlbinaryarchive/addrenderpipelinefunctions%28descriptor_%29.md): Adds a description of a render pipeline to the archive.
- [addTileRenderPipelineFunctionsWithDescriptor:error:](mtlbinaryarchive/addtilerenderpipelinefunctions%28descriptor_%29.md): Adds a description of a tile renderer pipeline to the archive.
- [addFunctionWithDescriptor:library:error:](mtlbinaryarchive/addfunction%28descriptor_library_%29.md): Adds a description of a function to the archive.

### Serializing archives

- [serializeToURL:error:](mtlbinaryarchive/serialize%28to_%29.md): Writes the contents of the archive to a file.

### Instance Methods

- [addLibraryWithDescriptor:error:](mtlbinaryarchive/addlibrary%28descriptor_%29.md)
- [addMeshRenderPipelineFunctionsWithDescriptor:error:](mtlbinaryarchive/addmeshrenderpipelinefunctions%28descriptor_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Shader library management

- [MTLLibrary](mtllibrary.md): A collection of Metal shader functions.
- [MTLDynamicLibrary](mtldynamiclibrary.md): A dynamically linkable representation of compiled shader code for a specific Metal device object.
- [MTLCompileOptions](mtlcompileoptions.md): Compilation settings for a Metal shader library.
- [MTLLibraryType](mtllibrarytype.md): A set of options for Metal library types.
- [MTLLanguageVersion](mtllanguageversion.md): Metal shading language versions.
- [MTLCompileSymbolVisibility](mtlcompilesymbolvisibility.md)
- [MTLLibraryOptimizationLevel](mtllibraryoptimizationlevel.md): The optimization options for the Metal compiler.
