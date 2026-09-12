> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlobject/boundingbox(attime:)](https://developer.apple.com/documentation/modelio/mdlobject/boundingbox(attime:))

# boundingBox(atTime:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the minimum region entirely enclosing the object’s contents at the specified time sample.

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

Objects may or may not provide spatial content. Subclasses of [MDLObject](../mdlobject.md) that include spatial content, such as the [MDLMesh](../mdlmesh.md) class, implement this method to return the axis-aligned minimal region that entirely encloses such content. Objects without spatial content return an empty bounding box—that is, a [MDLAxisAlignedBoundingBox](../mdlaxisalignedboundingbox.md) structure whose `minBounds` field is greater than its `maxBounds` field.

Calling this method on an object that contains other objects (that is, one whose [children](children.md) property is not `nil` and references a nonempty container) recursively computes the combined bounding box enclosing of the object’s children.

## See Also

### Working with Objects in Space

- [transform](transform.md): A component that manages this object’s spatial transform and its changes over time.

# boundingBoxAtTime: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the minimum region entirely enclosing the object’s contents at the specified time sample.

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

Objects may or may not provide spatial content. Subclasses of [MDLObject](../mdlobject.md) that include spatial content, such as the [MDLMesh](../mdlmesh.md) class, implement this method to return the axis-aligned minimal region that entirely encloses such content. Objects without spatial content return an empty bounding box—that is, a [MDLAxisAlignedBoundingBox](../mdlaxisalignedboundingbox.md) structure whose `minBounds` field is greater than its `maxBounds` field.

Calling this method on an object that contains other objects (that is, one whose [children](children.md) property is not `nil` and references a nonempty container) recursively computes the combined bounding box enclosing of the object’s children.

## See Also

### Working with Objects in Space

- [transform](transform.md): A component that manages this object’s spatial transform and its changes over time.
