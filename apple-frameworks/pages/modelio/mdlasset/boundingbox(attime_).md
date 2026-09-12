> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset/boundingbox(attime:)](https://developer.apple.com/documentation/modelio/mdlasset/boundingbox(attime:))

# boundingBox(atTime:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the minimum region entirely enclosing the asset’s contents at the specified time sample.

## Declaration

```swift
func boundingBox(atTime time: TimeInterval) -> MDLAxisAlignedBoundingBox
```

## Parameters

- `time`: A timestamp referring to timed information in the asset.

<a id="return-value"></a>

## Return Value

The asset’s bounding box as of the specified time sample.

<a id="Discussion"></a>

## Discussion

If an asset does not contain timed information, calling this method with any time sample is equivalent to reading the [boundingBox](boundingbox.md) property.

All assets can provide bounding box information without traversing their hierarchy of objects.

## See Also

### Working with Asset Content

- [object(at:)](object%28at_%29.md): Returns the top-level object at the specified index in the asset.
- [subscript(\_:)](subscript%28__%29.md): Returns the top-level object at the specified index in the asset, using subscript syntax.
- [count](count.md): The number of top-level objects in the asset.
- [childObjects(of:)](childobjects%28of_%29.md): Returns all objects contained in the asset of the specified class.
- [add(\_:)](add%28__%29.md): Adds the specified object to the asset’s list of top-level objects.
- [remove(\_:)](remove%28__%29.md): Removes the specified object from the asset’s list of top-level objects.
- [boundingBox](boundingbox.md): The minimum region entirely enclosing the asset’s contents.
- [url](url.md): The URL from which the asset was loaded, if available.
- [bufferAllocator](bufferallocator.md): An object responsible for allocating mesh vertex data loaded from the asset.
- [vertexDescriptor](vertexdescriptor.md): The description of the vertex data format to be used for loading mesh data from the asset.
- [masters](masters.md): Deprecated. An array of objects that can be reused in the asset’s object hierarchy through instancing.

# boundingBoxAtTime: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the minimum region entirely enclosing the asset’s contents at the specified time sample.

## Declaration

```objectivec
- (MDLAxisAlignedBoundingBox) boundingBoxAtTime:(NSTimeInterval) time;
```

## Parameters

- `time`: A timestamp referring to timed information in the asset.

<a id="return-value"></a>

## Return Value

The asset’s bounding box as of the specified time sample.

<a id="Discussion"></a>

## Discussion

If an asset does not contain timed information, calling this method with any time sample is equivalent to reading the [boundingBox](boundingbox.md) property.

All assets can provide bounding box information without traversing their hierarchy of objects.

## See Also

### Working with Asset Content

- [objectAtIndex:](object%28at_%29.md): Returns the top-level object at the specified index in the asset.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the top-level object at the specified index in the asset, using subscript syntax.
- [count](count.md): The number of top-level objects in the asset.
- [childObjectsOfClass:](childobjects%28of_%29.md): Returns all objects contained in the asset of the specified class.
- [addObject:](add%28__%29.md): Adds the specified object to the asset’s list of top-level objects.
- [removeObject:](remove%28__%29.md): Removes the specified object from the asset’s list of top-level objects.
- [boundingBox](boundingbox.md): The minimum region entirely enclosing the asset’s contents.
- [URL](url.md): The URL from which the asset was loaded, if available.
- [bufferAllocator](bufferallocator.md): An object responsible for allocating mesh vertex data loaded from the asset.
- [vertexDescriptor](vertexdescriptor.md): The description of the vertex data format to be used for loading mesh data from the asset.
- [masters](masters.md): Deprecated. An array of objects that can be reused in the asset’s object hierarchy through instancing.
