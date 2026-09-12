> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset/init(url:)-1f4ym](https://developer.apple.com/documentation/modelio/mdlasset/init(url:)-1f4ym)

# init(url:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes an asset from the file at the specified URL.

## Declaration

```swift
init(url URL: URL)
```

## Parameters

- `URL`: A URL specifying the location an asset file.

<a id="return-value"></a>

## Return Value

A new asset object.

<a id="Discussion"></a>

## Discussion

Use the [canImportFileExtension(\_:)](canimportfileextension%28__%29.md) method to determine whether Model I/O  can import an asset.

## See Also

### Creating an Asset

- [canImportFileExtension(\_:)](canimportfileextension%28__%29.md): Returns a Boolean value that indicates whether the [MDLAsset](../mdlasset.md) class can read asset data from files with the specified extension.
- [init(bufferAllocator:)](init%28bufferallocator_%29.md): Initializes an empty asset, using the specified buffer allocator.
- [init(url:vertexDescriptor:bufferAllocator:)](init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md): Initializes an asset from the file at the specified URL, using the specified vertex descriptor and buffer allocator.
- [init(url:vertexDescriptor:bufferAllocator:preserveTopology:error:)](init%28url_vertexdescriptor_bufferallocator_preservetopology_error_%29-510xi.md): Initializes an asset from the file at the specified URL, using the specified options for allocating and transforming data during import.

# initWithURL: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes an asset from the file at the specified URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL;
```

## Parameters

- `URL`: A URL specifying the location an asset file.

<a id="return-value"></a>

## Return Value

A new asset object.

<a id="Discussion"></a>

## Discussion

Use the [canImportFileExtension:](canimportfileextension%28__%29.md) method to determine whether Model I/O  can import an asset.

## See Also

### Creating an Asset

- [canImportFileExtension:](canimportfileextension%28__%29.md): Returns a Boolean value that indicates whether the [MDLAsset](../mdlasset.md) class can read asset data from files with the specified extension.
- [initWithBufferAllocator:](init%28bufferallocator_%29.md): Initializes an empty asset, using the specified buffer allocator.
- [initWithURL:vertexDescriptor:bufferAllocator:](init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md): Initializes an asset from the file at the specified URL, using the specified vertex descriptor and buffer allocator.
- [initWithURL:vertexDescriptor:bufferAllocator:preserveTopology:error:](init%28url_vertexdescriptor_bufferallocator_preservetopology_error_%29-510xi.md): Initializes an asset from the file at the specified URL, using the specified options for allocating and transforming data during import.
