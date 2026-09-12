> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset/bufferallocator](https://developer.apple.com/documentation/modelio/mdlasset/bufferallocator)

# bufferAllocator (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object responsible for allocating mesh vertex data loaded from the asset.

## Declaration

```swift
var bufferAllocator: any MDLMeshBufferAllocator { get }
```

<a id="Discussion"></a>

## Discussion

You specify an allocator when loading an asset with the [init(url:vertexDescriptor:bufferAllocator:)](init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md) initializer. If you do not specify an allocator, or import an asset through other means, the [MDLAsset](../mdlasset.md) class uses an internal allocator object.

For example, to use the MetalKit framework for loading vertex data into GPU buffers for rendering with Metal, pass a [MTKMeshBufferAllocator](../../metalkit/mtkmeshbufferallocator.md) object for the `bufferAllocator` parameter. By specifying an allocator, you ensure that mesh data is copied a minimal number of times between being read from a file and being loaded into GPU memory for rendering.

## See Also

### Working with Asset Content

- [object(at:)](object%28at_%29.md): Returns the top-level object at the specified index in the asset.
- [subscript(\_:)](subscript%28__%29.md): Returns the top-level object at the specified index in the asset, using subscript syntax.
- [count](count.md): The number of top-level objects in the asset.
- [childObjects(of:)](childobjects%28of_%29.md): Returns all objects contained in the asset of the specified class.
- [add(\_:)](add%28__%29.md): Adds the specified object to the asset’s list of top-level objects.
- [remove(\_:)](remove%28__%29.md): Removes the specified object from the asset’s list of top-level objects.
- [boundingBox](boundingbox.md): The minimum region entirely enclosing the asset’s contents.
- [boundingBox(atTime:)](boundingbox%28attime_%29.md): Returns the minimum region entirely enclosing the asset’s contents at the specified time sample.
- [url](url.md): The URL from which the asset was loaded, if available.
- [vertexDescriptor](vertexdescriptor.md): The description of the vertex data format to be used for loading mesh data from the asset.
- [masters](masters.md): Deprecated. An array of objects that can be reused in the asset’s object hierarchy through instancing.

# bufferAllocator (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object responsible for allocating mesh vertex data loaded from the asset.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) id<MDLMeshBufferAllocator> bufferAllocator;
```

<a id="Discussion"></a>

## Discussion

You specify an allocator when loading an asset with the [initWithURL:vertexDescriptor:bufferAllocator:](init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md) initializer. If you do not specify an allocator, or import an asset through other means, the [MDLAsset](../mdlasset.md) class uses an internal allocator object.

For example, to use the MetalKit framework for loading vertex data into GPU buffers for rendering with Metal, pass a [MTKMeshBufferAllocator](../../metalkit/mtkmeshbufferallocator.md) object for the `bufferAllocator` parameter. By specifying an allocator, you ensure that mesh data is copied a minimal number of times between being read from a file and being loaded into GPU memory for rendering.

## See Also

### Working with Asset Content

- [objectAtIndex:](object%28at_%29.md): Returns the top-level object at the specified index in the asset.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the top-level object at the specified index in the asset, using subscript syntax.
- [count](count.md): The number of top-level objects in the asset.
- [childObjectsOfClass:](childobjects%28of_%29.md): Returns all objects contained in the asset of the specified class.
- [addObject:](add%28__%29.md): Adds the specified object to the asset’s list of top-level objects.
- [removeObject:](remove%28__%29.md): Removes the specified object from the asset’s list of top-level objects.
- [boundingBox](boundingbox.md): The minimum region entirely enclosing the asset’s contents.
- [boundingBoxAtTime:](boundingbox%28attime_%29.md): Returns the minimum region entirely enclosing the asset’s contents at the specified time sample.
- [URL](url.md): The URL from which the asset was loaded, if available.
- [vertexDescriptor](vertexdescriptor.md): The description of the vertex data format to be used for loading mesh data from the asset.
- [masters](masters.md): Deprecated. An array of objects that can be reused in the asset’s object hierarchy through instancing.
