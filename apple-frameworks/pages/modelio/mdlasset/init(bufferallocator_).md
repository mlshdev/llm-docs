> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset/init(bufferallocator:)](https://developer.apple.com/documentation/modelio/mdlasset/init(bufferallocator:))

# init(bufferAllocator:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes an empty asset, using the specified buffer allocator.

## Declaration

```swift
init(bufferAllocator: (any MDLMeshBufferAllocator)?)
```

## Parameters

- `bufferAllocator`: The allocator object to use for loading or creating mesh data associated with the asset, or `nil` to use a default allocator.

<a id="return-value"></a>

## Return Value

A new asset object.

<a id="Discussion"></a>

## Discussion

Use this initializer when you want to programmatically populate an asset with content (for example, for use in exporting to a file) while controlling the allocation of mesh data buffers associated with the asset. For example, to use the MetalKit framework for loading vertex data into GPU buffers for rendering using Metal, pass a [MTKMeshBufferAllocator](../../metalkit/mtkmeshbufferallocator.md) object for the `bufferAllocator` parameter.

## See Also

### Creating an Asset

- [canImportFileExtension(\_:)](canimportfileextension%28__%29.md): Returns a Boolean value that indicates whether the [MDLAsset](../mdlasset.md) class can read asset data from files with the specified extension.
- [init(url:)](init%28url_%29-1f4ym.md): Initializes an asset from the file at the specified URL.
- [init(url:vertexDescriptor:bufferAllocator:)](init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md): Initializes an asset from the file at the specified URL, using the specified vertex descriptor and buffer allocator.
- [init(url:vertexDescriptor:bufferAllocator:preserveTopology:error:)](init%28url_vertexdescriptor_bufferallocator_preservetopology_error_%29-510xi.md): Initializes an asset from the file at the specified URL, using the specified options for allocating and transforming data during import.

# initWithBufferAllocator: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes an empty asset, using the specified buffer allocator.

## Declaration

```objectivec
- (instancetype) initWithBufferAllocator:(id<MDLMeshBufferAllocator>) bufferAllocator;
```

## Parameters

- `bufferAllocator`: The allocator object to use for loading or creating mesh data associated with the asset, or `nil` to use a default allocator.

<a id="return-value"></a>

## Return Value

A new asset object.

<a id="Discussion"></a>

## Discussion

Use this initializer when you want to programmatically populate an asset with content (for example, for use in exporting to a file) while controlling the allocation of mesh data buffers associated with the asset. For example, to use the MetalKit framework for loading vertex data into GPU buffers for rendering using Metal, pass a [MTKMeshBufferAllocator](../../metalkit/mtkmeshbufferallocator.md) object for the `bufferAllocator` parameter.

## See Also

### Creating an Asset

- [canImportFileExtension:](canimportfileextension%28__%29.md): Returns a Boolean value that indicates whether the [MDLAsset](../mdlasset.md) class can read asset data from files with the specified extension.
- [initWithURL:](init%28url_%29-1f4ym.md): Initializes an asset from the file at the specified URL.
- [initWithURL:vertexDescriptor:bufferAllocator:](init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md): Initializes an asset from the file at the specified URL, using the specified vertex descriptor and buffer allocator.
- [initWithURL:vertexDescriptor:bufferAllocator:preserveTopology:error:](init%28url_vertexdescriptor_bufferallocator_preservetopology_error_%29-510xi.md): Initializes an asset from the file at the specified URL, using the specified options for allocating and transforming data during import.
