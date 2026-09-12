> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset/canimportfileextension(_:)](https://developer.apple.com/documentation/modelio/mdlasset/canimportfileextension(_:))

# canImportFileExtension(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the [MDLAsset](../mdlasset.md) class can read asset data from files with the specified extension.

## Declaration

```swift
class func canImportFileExtension(_ extension: String) -> Bool
```

## Parameters

- `extension`: The filename extension identifying an asset file format.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the [MDLAsset](../mdlasset.md) class can read asset data from files with the specified extension; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If this method returns [true](https://developer.apple.com/documentation/swift/true), you can use the [init(url:)](init%28url_%29-1f4ym.md) or [init(url:vertexDescriptor:bufferAllocator:)](init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md) initializer to import an asset with the specified filename extension.

The set of supported extensions and formats includes:

- **`.abc`**: Alembic
- **`.usd`, `.usda`, `.usdc`**: Universal Scene Description
- **`.usdz`**: Universal Scene Description (Mobile)
- **`.ply`**: Polygon
- **`.obj`**: Wavefront Object
- **`.stl`**: Standard Tessellation Language

Additional formats may be supported as well.

## See Also

### Creating an Asset

- [init(url:)](init%28url_%29-1f4ym.md): Initializes an asset from the file at the specified URL.
- [init(bufferAllocator:)](init%28bufferallocator_%29.md): Initializes an empty asset, using the specified buffer allocator.
- [init(url:vertexDescriptor:bufferAllocator:)](init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md): Initializes an asset from the file at the specified URL, using the specified vertex descriptor and buffer allocator.
- [init(url:vertexDescriptor:bufferAllocator:preserveTopology:error:)](init%28url_vertexdescriptor_bufferallocator_preservetopology_error_%29-510xi.md): Initializes an asset from the file at the specified URL, using the specified options for allocating and transforming data during import.

# canImportFileExtension: (Objective-C)

**Framework:** Model I/O  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the [MDLAsset](../mdlasset.md) class can read asset data from files with the specified extension.

## Declaration

```objectivec
+ (BOOL) canImportFileExtension:(NSString *) extension;
```

## Parameters

- `extension`: The filename extension identifying an asset file format.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the [MDLAsset](../mdlasset.md) class can read asset data from files with the specified extension; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If this method returns [true](https://developer.apple.com/documentation/swift/true), you can use the [initWithURL:](init%28url_%29-1f4ym.md) or [initWithURL:vertexDescriptor:bufferAllocator:](init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md) initializer to import an asset with the specified filename extension.

The set of supported extensions and formats includes:

- **`.abc`**: Alembic
- **`.usd`, `.usda`, `.usdc`**: Universal Scene Description
- **`.usdz`**: Universal Scene Description (Mobile)
- **`.ply`**: Polygon
- **`.obj`**: Wavefront Object
- **`.stl`**: Standard Tessellation Language

Additional formats may be supported as well.

## See Also

### Creating an Asset

- [initWithURL:](init%28url_%29-1f4ym.md): Initializes an asset from the file at the specified URL.
- [initWithBufferAllocator:](init%28bufferallocator_%29.md): Initializes an empty asset, using the specified buffer allocator.
- [initWithURL:vertexDescriptor:bufferAllocator:](init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md): Initializes an asset from the file at the specified URL, using the specified vertex descriptor and buffer allocator.
- [initWithURL:vertexDescriptor:bufferAllocator:preserveTopology:error:](init%28url_vertexdescriptor_bufferallocator_preservetopology_error_%29-510xi.md): Initializes an asset from the file at the specified URL, using the specified options for allocating and transforming data during import.
