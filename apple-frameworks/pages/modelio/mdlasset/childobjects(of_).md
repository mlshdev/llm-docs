> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset/childobjects(of:)](https://developer.apple.com/documentation/modelio/mdlasset/childobjects(of:))

# childObjects(of:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns all objects contained in the asset of the specified class.

## Declaration

```swift
func childObjects(of objectClass: AnyClass) -> [MDLObject]
```

## Parameters

- `objectClass`: A Model I/O class (that is, a subclass of [MDLObject](../mdlobject.md)) representing a type of object stored in the asset. For example, pass the [MDLMesh](../mdlmesh.md) class to find all 3D objects stored in the asset, or the [MDLLight](../mdllight.md) class to find all light sources.

<a id="return-value"></a>

## Return Value

An array of objects of the specified type, or an empty array if no such objects exist.

<a id="Discussion"></a>

## Discussion

This method searches the asset’s entire child object hierarchy to find all objects of the specified type contained in the asset.

## See Also

### Working with Asset Content

- [object(at:)](object%28at_%29.md): Returns the top-level object at the specified index in the asset.
- [subscript(\_:)](subscript%28__%29.md): Returns the top-level object at the specified index in the asset, using subscript syntax.
- [count](count.md): The number of top-level objects in the asset.
- [add(\_:)](add%28__%29.md): Adds the specified object to the asset’s list of top-level objects.
- [remove(\_:)](remove%28__%29.md): Removes the specified object from the asset’s list of top-level objects.
- [boundingBox](boundingbox.md): The minimum region entirely enclosing the asset’s contents.
- [boundingBox(atTime:)](boundingbox%28attime_%29.md): Returns the minimum region entirely enclosing the asset’s contents at the specified time sample.
- [url](url.md): The URL from which the asset was loaded, if available.
- [bufferAllocator](bufferallocator.md): An object responsible for allocating mesh vertex data loaded from the asset.
- [vertexDescriptor](vertexdescriptor.md): The description of the vertex data format to be used for loading mesh data from the asset.
- [masters](masters.md): Deprecated. An array of objects that can be reused in the asset’s object hierarchy through instancing.

# childObjectsOfClass: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns all objects contained in the asset of the specified class.

## Declaration

```objectivec
- (NSArray<MDLObject *> *) childObjectsOfClass:(Class) objectClass;
```

## Parameters

- `objectClass`: A Model I/O class (that is, a subclass of [MDLObject](../mdlobject.md)) representing a type of object stored in the asset. For example, pass the [MDLMesh](../mdlmesh.md) class to find all 3D objects stored in the asset, or the [MDLLight](../mdllight.md) class to find all light sources.

<a id="return-value"></a>

## Return Value

An array of objects of the specified type, or an empty array if no such objects exist.

<a id="Discussion"></a>

## Discussion

This method searches the asset’s entire child object hierarchy to find all objects of the specified type contained in the asset.

## See Also

### Working with Asset Content

- [objectAtIndex:](object%28at_%29.md): Returns the top-level object at the specified index in the asset.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the top-level object at the specified index in the asset, using subscript syntax.
- [count](count.md): The number of top-level objects in the asset.
- [addObject:](add%28__%29.md): Adds the specified object to the asset’s list of top-level objects.
- [removeObject:](remove%28__%29.md): Removes the specified object from the asset’s list of top-level objects.
- [boundingBox](boundingbox.md): The minimum region entirely enclosing the asset’s contents.
- [boundingBoxAtTime:](boundingbox%28attime_%29.md): Returns the minimum region entirely enclosing the asset’s contents at the specified time sample.
- [URL](url.md): The URL from which the asset was loaded, if available.
- [bufferAllocator](bufferallocator.md): An object responsible for allocating mesh vertex data loaded from the asset.
- [vertexDescriptor](vertexdescriptor.md): The description of the vertex data format to be used for loading mesh data from the asset.
- [masters](masters.md): Deprecated. An array of objects that can be reused in the asset’s object hierarchy through instancing.
