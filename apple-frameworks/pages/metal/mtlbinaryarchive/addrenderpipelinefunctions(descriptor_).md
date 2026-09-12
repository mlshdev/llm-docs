> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbinaryarchive/addrenderpipelinefunctions(descriptor:)](https://developer.apple.com/documentation/metal/mtlbinaryarchive/addrenderpipelinefunctions(descriptor:))

# addRenderPipelineFunctions(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Adds a description of a render pipeline to the archive.

## Declaration

```swift
func addRenderPipelineFunctions(descriptor: MTLRenderPipelineDescriptor) throws
```

## Parameters

- `descriptor`: A description of the render pipeline to archive.

## See Also

### Adding pipeline descriptors

- [addComputePipelineFunctions(descriptor:)](addcomputepipelinefunctions%28descriptor_%29.md): Adds a description of a compute pipeline to the archive.
- [addTileRenderPipelineFunctions(descriptor:)](addtilerenderpipelinefunctions%28descriptor_%29.md): Adds a description of a tile renderer pipeline to the archive.
- [addFunction(descriptor:library:)](addfunction%28descriptor_library_%29.md): Adds a description of a function to the archive.

# addRenderPipelineFunctionsWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Adds a description of a render pipeline to the archive.

## Declaration

```objectivec
- (BOOL) addRenderPipelineFunctionsWithDescriptor:(MTLRenderPipelineDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: A description of the render pipeline to archive.
- `error`: On failure, a reference to the error that occurred.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## See Also

### Adding pipeline descriptors

- [addComputePipelineFunctionsWithDescriptor:error:](addcomputepipelinefunctions%28descriptor_%29.md): Adds a description of a compute pipeline to the archive.
- [addTileRenderPipelineFunctionsWithDescriptor:error:](addtilerenderpipelinefunctions%28descriptor_%29.md): Adds a description of a tile renderer pipeline to the archive.
- [addFunctionWithDescriptor:library:error:](addfunction%28descriptor_library_%29.md): Adds a description of a function to the archive.
