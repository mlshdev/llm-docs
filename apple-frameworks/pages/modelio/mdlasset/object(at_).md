> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset/object(at:)](https://developer.apple.com/documentation/modelio/mdlasset/object(at:))

# object(at:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the top-level object at the specified index in the asset.

## Declaration

```swift
func object(at index: Int) -> MDLObject
```

## Parameters

- `index`: An index in the asset’s list of top-level objects; between zero and the value of the [count](count.md) property.

<a id="return-value"></a>

## Return Value

The object at the specified index.

<a id="Discussion"></a>

## Discussion

An asset contains one or more top-level objects (instances of the [MDLObject](../mdlobject.md) class or one of its subclasses, such as [MDLMesh](../mdlmesh.md)), each of which may contain a hierarchy of child objects.

## See Also

### Working with Asset Content

- [subscript(\_:)](subscript%28__%29.md): Returns the top-level object at the specified index in the asset, using subscript syntax.
- [count](count.md): The number of top-level objects in the asset.
- [childObjects(of:)](childobjects%28of_%29.md): Returns all objects contained in the asset of the specified class.
- [add(\_:)](add%28__%29.md): Adds the specified object to the asset’s list of top-level objects.
- [remove(\_:)](remove%28__%29.md): Removes the specified object from the asset’s list of top-level objects.
- [boundingBox](boundingbox.md): The minimum region entirely enclosing the asset’s contents.
- [boundingBox(atTime:)](boundingbox%28attime_%29.md): Returns the minimum region entirely enclosing the asset’s contents at the specified time sample.
- [url](url.md): The URL from which the asset was loaded, if available.
- [bufferAllocator](bufferallocator.md): An object responsible for allocating mesh vertex data loaded from the asset.
- [vertexDescriptor](vertexdescriptor.md): The description of the vertex data format to be used for loading mesh data from the asset.
- [masters](masters.md): Deprecated. An array of objects that can be reused in the asset’s object hierarchy through instancing.

# objectAtIndex: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the top-level object at the specified index in the asset.

## Declaration

```objectivec
- (MDLObject *) objectAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: An index in the asset’s list of top-level objects; between zero and the value of the [count](count.md) property.

<a id="return-value"></a>

## Return Value

The object at the specified index.

<a id="Discussion"></a>

## Discussion

An asset contains one or more top-level objects (instances of the [MDLObject](../mdlobject.md) class or one of its subclasses, such as [MDLMesh](../mdlmesh.md)), each of which may contain a hierarchy of child objects.

## See Also

### Working with Asset Content

- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the top-level object at the specified index in the asset, using subscript syntax.
- [count](count.md): The number of top-level objects in the asset.
- [childObjectsOfClass:](childobjects%28of_%29.md): Returns all objects contained in the asset of the specified class.
- [addObject:](add%28__%29.md): Adds the specified object to the asset’s list of top-level objects.
- [removeObject:](remove%28__%29.md): Removes the specified object from the asset’s list of top-level objects.
- [boundingBox](boundingbox.md): The minimum region entirely enclosing the asset’s contents.
- [boundingBoxAtTime:](boundingbox%28attime_%29.md): Returns the minimum region entirely enclosing the asset’s contents at the specified time sample.
- [URL](url.md): The URL from which the asset was loaded, if available.
- [bufferAllocator](bufferallocator.md): An object responsible for allocating mesh vertex data loaded from the asset.
- [vertexDescriptor](vertexdescriptor.md): The description of the vertex data format to be used for loading mesh data from the asset.
- [masters](masters.md): Deprecated. An array of objects that can be reused in the asset’s object hierarchy through instancing.
