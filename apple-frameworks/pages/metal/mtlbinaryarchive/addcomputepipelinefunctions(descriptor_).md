> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbinaryarchive/addcomputepipelinefunctions(descriptor:)](https://developer.apple.com/documentation/metal/mtlbinaryarchive/addcomputepipelinefunctions(descriptor:))

# addComputePipelineFunctions(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Adds a description of a compute pipeline to the archive.

## Declaration

```swift
func addComputePipelineFunctions(descriptor: MTLComputePipelineDescriptor) throws
```

## Parameters

- `descriptor`: A description of the compute pipeline to archive.

## See Also

### Adding pipeline descriptors

- [addRenderPipelineFunctions(descriptor:)](addrenderpipelinefunctions%28descriptor_%29.md): Adds a description of a render pipeline to the archive.
- [addTileRenderPipelineFunctions(descriptor:)](addtilerenderpipelinefunctions%28descriptor_%29.md): Adds a description of a tile renderer pipeline to the archive.
- [addFunction(descriptor:library:)](addfunction%28descriptor_library_%29.md): Adds a description of a function to the archive.

# addComputePipelineFunctionsWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Adds a description of a compute pipeline to the archive.

## Declaration

```objectivec
- (BOOL) addComputePipelineFunctionsWithDescriptor:(MTLComputePipelineDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: A description of the compute pipeline to archive.
- `error`: On failure, a reference to the error that occurred.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## See Also

### Adding pipeline descriptors

- [addRenderPipelineFunctionsWithDescriptor:error:](addrenderpipelinefunctions%28descriptor_%29.md): Adds a description of a render pipeline to the archive.
- [addTileRenderPipelineFunctionsWithDescriptor:error:](addtilerenderpipelinefunctions%28descriptor_%29.md): Adds a description of a tile renderer pipeline to the archive.
- [addFunctionWithDescriptor:library:error:](addfunction%28descriptor_library_%29.md): Adds a description of a function to the archive.
