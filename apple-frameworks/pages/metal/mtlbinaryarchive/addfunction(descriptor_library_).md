> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbinaryarchive/addfunction(descriptor:library:)](https://developer.apple.com/documentation/metal/mtlbinaryarchive/addfunction(descriptor:library:))

# addFunction(descriptor:library:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Adds a description of a function to the archive.

## Declaration

```swift
func addFunction(descriptor: MTLFunctionDescriptor, library: any MTLLibrary) throws
```

## Parameters

- `descriptor`:
- `library`:

## See Also

### Adding pipeline descriptors

- [addComputePipelineFunctions(descriptor:)](addcomputepipelinefunctions%28descriptor_%29.md): Adds a description of a compute pipeline to the archive.
- [addRenderPipelineFunctions(descriptor:)](addrenderpipelinefunctions%28descriptor_%29.md): Adds a description of a render pipeline to the archive.
- [addTileRenderPipelineFunctions(descriptor:)](addtilerenderpipelinefunctions%28descriptor_%29.md): Adds a description of a tile renderer pipeline to the archive.

# addFunctionWithDescriptor:library:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Adds a description of a function to the archive.

## Declaration

```objectivec
- (BOOL) addFunctionWithDescriptor:(MTLFunctionDescriptor *) descriptor library:(id<MTLLibrary>) library error:(NSError **) error;
```

## Parameters

- `descriptor`:
- `library`:
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## See Also

### Adding pipeline descriptors

- [addComputePipelineFunctionsWithDescriptor:error:](addcomputepipelinefunctions%28descriptor_%29.md): Adds a description of a compute pipeline to the archive.
- [addRenderPipelineFunctionsWithDescriptor:error:](addrenderpipelinefunctions%28descriptor_%29.md): Adds a description of a render pipeline to the archive.
- [addTileRenderPipelineFunctionsWithDescriptor:error:](addtilerenderpipelinefunctions%28descriptor_%29.md): Adds a description of a tile renderer pipeline to the archive.
