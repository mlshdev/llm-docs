> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset/init(url:vertexdescriptor:bufferallocator:preservetopology:error:)-510xi](https://developer.apple.com/documentation/modelio/mdlasset/init(url:vertexdescriptor:bufferallocator:preservetopology:error:)-510xi)

# init(url:vertexDescriptor:bufferAllocator:preserveTopology:error:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes an asset from the file at the specified URL, using the specified options for allocating and transforming data during import.

## Declaration

```swift
init(url URL: URL, vertexDescriptor: MDLVertexDescriptor?, bufferAllocator: (any MDLMeshBufferAllocator)?, preserveTopology: Bool, error: NSErrorPointer)
```

## Parameters

- `URL`: A URL specifying the location an asset file.
- `vertexDescriptor`: An object describing the vertex data format to be loaded from the asset, or `nil` to use the asset’s vertex buffers as found in the file.
- `bufferAllocator`: The allocator object to use for loading mesh data from the asset, or `nil` to use a default allocator.
- `preserveTopology`: If [true](https://developer.apple.com/documentation/swift/true), Model I/O uses the asset’s submesh index buffers as found in the file, using the appropriate [MDLGeometryType](../mdlgeometrytype.md) value for each submesh and generating [MDLSubmeshTopology](../mdlsubmeshtopology.md) buffers as needed for variable-topology submeshes. If [false](https://developer.apple.com/documentation/swift/false), Model I/O reformats index buffers to create triangle submeshes.
- `error`: Upon return, an object describing any errors that occur while loading the asset.

<a id="return-value"></a>

## Return Value

A new asset object.

<a id="Discussion"></a>

## Discussion

Use this initializer when you need to ensure that mesh data from the asset is allocated and formatted correctly for your intended use. For example, to use the MetalKit framework for loading vertex data into GPU buffers for rendering using Metal, pass a [MTKMeshBufferAllocator](../../metalkit/mtkmeshbufferallocator.md) object for the `bufferAllocator` parameter. If you specify a [MDLVertexDescriptor](../mdlvertexdescriptor.md) object for the `vertexDescriptor` parameter, Model I/O automatically transforms mesh data to the specified vertex format upon loading. If you specify [false](https://developer.apple.com/documentation/swift/false) for the `preserveTopology` parameter, Model I/O automatically transforms submesh data to create triangle meshes (the optimal format for rendering on most GPUs). By using these parameters, you ensure that mesh data is copied and transformed a minimal number of times between being read from a file and being loaded into GPU memory for rendering.

Use the [canImportFileExtension(\_:)](canimportfileextension%28__%29.md) method to determine whether Model I/O  can import an asset.

## See Also

### Creating an Asset

- [canImportFileExtension(\_:)](canimportfileextension%28__%29.md): Returns a Boolean value that indicates whether the [MDLAsset](../mdlasset.md) class can read asset data from files with the specified extension.
- [init(url:)](init%28url_%29-1f4ym.md): Initializes an asset from the file at the specified URL.
- [init(bufferAllocator:)](init%28bufferallocator_%29.md): Initializes an empty asset, using the specified buffer allocator.
- [init(url:vertexDescriptor:bufferAllocator:)](init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md): Initializes an asset from the file at the specified URL, using the specified vertex descriptor and buffer allocator.

# initWithURL:vertexDescriptor:bufferAllocator:preserveTopology:error: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes an asset from the file at the specified URL, using the specified options for allocating and transforming data during import.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL vertexDescriptor:(MDLVertexDescriptor *) vertexDescriptor bufferAllocator:(id<MDLMeshBufferAllocator>) bufferAllocator preserveTopology:(BOOL) preserveTopology error:(NSError **) error;
```

## Parameters

- `URL`: A URL specifying the location an asset file.
- `vertexDescriptor`: An object describing the vertex data format to be loaded from the asset, or `nil` to use the asset’s vertex buffers as found in the file.
- `bufferAllocator`: The allocator object to use for loading mesh data from the asset, or `nil` to use a default allocator.
- `preserveTopology`: If [true](https://developer.apple.com/documentation/swift/true), Model I/O uses the asset’s submesh index buffers as found in the file, using the appropriate [MDLGeometryType](../mdlgeometrytype.md) value for each submesh and generating [MDLSubmeshTopology](../mdlsubmeshtopology.md) buffers as needed for variable-topology submeshes. If [false](https://developer.apple.com/documentation/swift/false), Model I/O reformats index buffers to create triangle submeshes.
- `error`: Upon return, an object describing any errors that occur while loading the asset.

<a id="return-value"></a>

## Return Value

A new asset object.

<a id="Discussion"></a>

## Discussion

Use this initializer when you need to ensure that mesh data from the asset is allocated and formatted correctly for your intended use. For example, to use the MetalKit framework for loading vertex data into GPU buffers for rendering using Metal, pass a [MTKMeshBufferAllocator](../../metalkit/mtkmeshbufferallocator.md) object for the `bufferAllocator` parameter. If you specify a [MDLVertexDescriptor](../mdlvertexdescriptor.md) object for the `vertexDescriptor` parameter, Model I/O automatically transforms mesh data to the specified vertex format upon loading. If you specify [false](https://developer.apple.com/documentation/swift/false) for the `preserveTopology` parameter, Model I/O automatically transforms submesh data to create triangle meshes (the optimal format for rendering on most GPUs). By using these parameters, you ensure that mesh data is copied and transformed a minimal number of times between being read from a file and being loaded into GPU memory for rendering.

Use the [canImportFileExtension:](canimportfileextension%28__%29.md) method to determine whether Model I/O  can import an asset.

## See Also

### Creating an Asset

- [canImportFileExtension:](canimportfileextension%28__%29.md): Returns a Boolean value that indicates whether the [MDLAsset](../mdlasset.md) class can read asset data from files with the specified extension.
- [initWithURL:](init%28url_%29-1f4ym.md): Initializes an asset from the file at the specified URL.
- [initWithBufferAllocator:](init%28bufferallocator_%29.md): Initializes an empty asset, using the specified buffer allocator.
- [initWithURL:vertexDescriptor:bufferAllocator:](init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md): Initializes an asset from the file at the specified URL, using the specified vertex descriptor and buffer allocator.
