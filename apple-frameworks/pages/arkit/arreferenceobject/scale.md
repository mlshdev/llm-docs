> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceobject/scale](https://developer.apple.com/documentation/arkit/arreferenceobject/scale)

# scale (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

A scale factor for the local coordinate space the reference object defines.

## Declaration

```swift
var scale: simd_float3 { get }
```

<a id="Discussion"></a>

## Discussion

Multiplying the [extent](extent.md) by this scale results in the physical size of the object in meters.

## See Also

### Examining a Reference Object

- [name](name.md): A descriptive name for the reference object.
- [resourceGroupName](resourcegroupname.md): Deprecated.
- [center](center.md): The center point of the reference object’s space-mapping data.
- [extent](extent.md): The size of the reference object’s space-mapping data.

# scale (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

A scale factor for the local coordinate space the reference object defines.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_float3 scale;
```

<a id="Discussion"></a>

## Discussion

Multiplying the [extent](extent.md) by this scale results in the physical size of the object in meters.

## See Also

### Examining a Reference Object

- [name](name.md): A descriptive name for the reference object.
- [resourceGroupName](resourcegroupname.md): Deprecated.
- [center](center.md): The center point of the reference object’s space-mapping data.
- [extent](extent.md): The size of the reference object’s space-mapping data.
