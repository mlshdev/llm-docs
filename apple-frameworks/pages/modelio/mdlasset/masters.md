> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset/masters](https://developer.apple.com/documentation/modelio/mdlasset/masters)

# masters (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.12+ (deprecated in 12.0) · tvOS 10.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

An array of objects that can be reused in the asset’s object hierarchy through instancing.

## Declaration

```swift
var masters: any MDLObjectContainerComponent { get set }
```

<a id="Discussion"></a>

## Discussion

Some asset formats supported by Model I/O provide *instancing*, a feature where the asset provides a single definition for an object, then can reuse that definition at multiple points in a scene. For example, an asset describing a scene of a table and chairs could contain mesh and material data for only one chair, then use instancing to place several of the same chair around the table.

If an object loaded from an asset is an instance of one of that asset’s primary objects, that object’s [instance](../mdlobject/instance.md) property refers to the primary object.

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
- [vertexDescriptor](vertexdescriptor.md): The description of the vertex data format to be used for loading mesh data from the asset.

# masters (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.12+ (deprecated in 12.0) · tvOS 10.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

An array of objects that can be reused in the asset’s object hierarchy through instancing.

## Declaration

```objectivec
@property (nonatomic, retain) id<MDLObjectContainerComponent> masters;
```

<a id="Discussion"></a>

## Discussion

Some asset formats supported by Model I/O provide *instancing*, a feature where the asset provides a single definition for an object, then can reuse that definition at multiple points in a scene. For example, an asset describing a scene of a table and chairs could contain mesh and material data for only one chair, then use instancing to place several of the same chair around the table.

If an object loaded from an asset is an instance of one of that asset’s primary objects, that object’s [instance](../mdlobject/instance.md) property refers to the primary object.

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
- [vertexDescriptor](vertexdescriptor.md): The description of the vertex data format to be used for loading mesh data from the asset.
