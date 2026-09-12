> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceobject/extent](https://developer.apple.com/documentation/arkit/arreferenceobject/extent)

# extent (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The size of the reference object’s space-mapping data.

## Declaration

```swift
var extent: simd_float3 { get }
```

<a id="Discussion"></a>

## Discussion

The [extent](../arworldmap/extent.md) and [center](../arworldmap/center.md) properties together define a bounding box for the data recorded in the reference object in its local coordinate system. You define that coordinate system with the transform parameter when calling `extractReferenceObject(transform:center:extent:)`, and can modify it by creating another reference object with [applyingTransform(\_:)](applyingtransform%28__%29.md).

## See Also

### Examining a Reference Object

- [name](name.md): A descriptive name for the reference object.
- [resourceGroupName](resourcegroupname.md): Deprecated.
- [center](center.md): The center point of the reference object’s space-mapping data.
- [scale](scale.md): A scale factor for the local coordinate space the reference object defines.

# extent (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The size of the reference object’s space-mapping data.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_float3 extent;
```

<a id="Discussion"></a>

## Discussion

The [extent](../arworldmap/extent.md) and [center](../arworldmap/center.md) properties together define a bounding box for the data recorded in the reference object in its local coordinate system. You define that coordinate system with the transform parameter when calling `extractReferenceObject(transform:center:extent:)`, and can modify it by creating another reference object with [referenceObjectByApplyingTransform:](applyingtransform%28__%29.md).

## See Also

### Examining a Reference Object

- [name](name.md): A descriptive name for the reference object.
- [resourceGroupName](resourcegroupname.md): Deprecated.
- [center](center.md): The center point of the reference object’s space-mapping data.
- [scale](scale.md): A scale factor for the local coordinate space the reference object defines.
