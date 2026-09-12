> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset/vertexdescriptor](https://developer.apple.com/documentation/modelio/mdlasset/vertexdescriptor)

# vertexDescriptor (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The description of the vertex data format to be used for loading mesh data from the asset.

## Declaration

```swift
var vertexDescriptor: MDLVertexDescriptor? { get }
```

<a id="Discussion"></a>

## Discussion

If you specify a vertex descriptor when loading an asset with the [init(url:vertexDescriptor:bufferAllocator:)](init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md) initializer, Model I/O  automatically translates mesh vertex data loaded from the asset into the format described by that [MDLVertexDescriptor](../mdlvertexdescriptor.md) object. If you do not specify a vertex descriptor, or import an asset through other means, this property’s value is `nil`, and Model I/O  loads vertex data in whatever format is stored in the asset file.

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
- [bufferAllocator](bufferallocator.md): An object responsible for allocating mesh vertex data loaded from the asset.
- [masters](masters.md): Deprecated. An array of objects that can be reused in the asset’s object hierarchy through instancing.

# vertexDescriptor (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The description of the vertex data format to be used for loading mesh data from the asset.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) MDLVertexDescriptor * vertexDescriptor;
```

<a id="Discussion"></a>

## Discussion

If you specify a vertex descriptor when loading an asset with the [initWithURL:vertexDescriptor:bufferAllocator:](init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md) initializer, Model I/O  automatically translates mesh vertex data loaded from the asset into the format described by that [MDLVertexDescriptor](../mdlvertexdescriptor.md) object. If you do not specify a vertex descriptor, or import an asset through other means, this property’s value is `nil`, and Model I/O  loads vertex data in whatever format is stored in the asset file.

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
- [bufferAllocator](bufferallocator.md): An object responsible for allocating mesh vertex data loaded from the asset.
- [masters](masters.md): Deprecated. An array of objects that can be reused in the asset’s object hierarchy through instancing.
