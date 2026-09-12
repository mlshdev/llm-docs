> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset/init(url:vertexdescriptor:bufferallocator:)-1tchi](https://developer.apple.com/documentation/modelio/mdlasset/init(url:vertexdescriptor:bufferallocator:)-1tchi)

# init(url:vertexDescriptor:bufferAllocator:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes an asset from the file at the specified URL, using the specified vertex descriptor and buffer allocator.

## Declaration

```swift
init(url URL: URL?, vertexDescriptor: MDLVertexDescriptor?, bufferAllocator: (any MDLMeshBufferAllocator)?)
```

## Parameters

- `URL`: A URL specifying the location an asset file.
- `vertexDescriptor`: An object describing the vertex data format to be loaded from the asset, or `nil` to use the asset’s vertex buffers as found in the file.
- `bufferAllocator`: The allocator object to use for loading mesh data from the asset, or `nil` to use a default allocator.

<a id="return-value"></a>

## Return Value

A new asset object.

<a id="Discussion"></a>

## Discussion

Using this initializer is equivalent to using the [init(url:vertexDescriptor:bufferAllocator:preserveTopology:error:)](init%28url_vertexdescriptor_bufferallocator_preservetopology_error_%29-510xi.md) initializer, passing [false](https://developer.apple.com/documentation/swift/false) for the `preserveTopology` parameter and ignoring errors.

## See Also

### Creating an Asset

- [canImportFileExtension(\_:)](canimportfileextension%28__%29.md): Returns a Boolean value that indicates whether the [MDLAsset](../mdlasset.md) class can read asset data from files with the specified extension.
- [init(url:)](init%28url_%29-1f4ym.md): Initializes an asset from the file at the specified URL.
- [init(bufferAllocator:)](init%28bufferallocator_%29.md): Initializes an empty asset, using the specified buffer allocator.
- [init(url:vertexDescriptor:bufferAllocator:preserveTopology:error:)](init%28url_vertexdescriptor_bufferallocator_preservetopology_error_%29-510xi.md): Initializes an asset from the file at the specified URL, using the specified options for allocating and transforming data during import.

# initWithURL:vertexDescriptor:bufferAllocator: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes an asset from the file at the specified URL, using the specified vertex descriptor and buffer allocator.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL vertexDescriptor:(MDLVertexDescriptor *) vertexDescriptor bufferAllocator:(id<MDLMeshBufferAllocator>) bufferAllocator;
```

## Parameters

- `URL`: A URL specifying the location an asset file.
- `vertexDescriptor`: An object describing the vertex data format to be loaded from the asset, or `nil` to use the asset’s vertex buffers as found in the file.
- `bufferAllocator`: The allocator object to use for loading mesh data from the asset, or `nil` to use a default allocator.

<a id="return-value"></a>

## Return Value

A new asset object.

<a id="Discussion"></a>

## Discussion

Using this initializer is equivalent to using the [initWithURL:vertexDescriptor:bufferAllocator:preserveTopology:error:](init%28url_vertexdescriptor_bufferallocator_preservetopology_error_%29-510xi.md) initializer, passing [false](https://developer.apple.com/documentation/swift/false) for the `preserveTopology` parameter and ignoring errors.

## See Also

### Creating an Asset

- [canImportFileExtension:](canimportfileextension%28__%29.md): Returns a Boolean value that indicates whether the [MDLAsset](../mdlasset.md) class can read asset data from files with the specified extension.
- [initWithURL:](init%28url_%29-1f4ym.md): Initializes an asset from the file at the specified URL.
- [initWithBufferAllocator:](init%28bufferallocator_%29.md): Initializes an empty asset, using the specified buffer allocator.
- [initWithURL:vertexDescriptor:bufferAllocator:preserveTopology:error:](init%28url_vertexdescriptor_bufferallocator_preservetopology_error_%29-510xi.md): Initializes an asset from the file at the specified URL, using the specified options for allocating and transforming data during import.
