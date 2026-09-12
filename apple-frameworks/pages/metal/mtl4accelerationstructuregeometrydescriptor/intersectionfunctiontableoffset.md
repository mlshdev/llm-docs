> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuregeometrydescriptor/intersectionfunctiontableoffset](https://developer.apple.com/documentation/metal/mtl4accelerationstructuregeometrydescriptor/intersectionfunctiontableoffset)

# intersectionFunctionTableOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the offset that this geometry contributes to determining the intersection function to invoke when a ray intersects it.

## Declaration

```swift
var intersectionFunctionTableOffset: Int { get set }
```

<a id="discussion"></a>

## Discussion

When you perform a ray tracing operation in the Metal Shading Language, and provide the ray intersector object with an instance of [MTLIntersectionFunctionTable](../mtlintersectionfunctiontable.md), Metal adds this offset to the instance offset from structs such as:

- [MTLAccelerationStructureInstanceDescriptor](../mtlaccelerationstructureinstancedescriptor.md)
- [MTLAccelerationStructureUserIDInstanceDescriptor](../mtlaccelerationstructureuseridinstancedescriptor.md)
- [MTLAccelerationStructureMotionInstanceDescriptor](../mtlaccelerationstructuremotioninstancedescriptor.md)
- [MTLIndirectAccelerationStructureInstanceDescriptor](../mtlindirectaccelerationstructureinstancedescriptor.md)
- [MTLIndirectAccelerationStructureMotionInstanceDescriptor](../mtlindirectaccelerationstructuremotioninstancedescriptor.md)

The sum of these offsets provides an index into the intersection function table that the ray tracing system uses to retrieve and invoke the function at this index, allowing you to customize the intersection evaluation process.

# intersectionFunctionTableOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the offset that this geometry contributes to determining the intersection function to invoke when a ray intersects it.

## Declaration

```objectivec
@property (nonatomic) NSUInteger intersectionFunctionTableOffset;
```

<a id="discussion"></a>

## Discussion

When you perform a ray tracing operation in the Metal Shading Language, and provide the ray intersector object with an instance of [MTLIntersectionFunctionTable](../mtlintersectionfunctiontable.md), Metal adds this offset to the instance offset from structs such as:

- [MTLAccelerationStructureInstanceDescriptor](../mtlaccelerationstructureinstancedescriptor.md)
- [MTLAccelerationStructureUserIDInstanceDescriptor](../mtlaccelerationstructureuseridinstancedescriptor.md)
- [MTLAccelerationStructureMotionInstanceDescriptor](../mtlaccelerationstructuremotioninstancedescriptor.md)
- [MTLIndirectAccelerationStructureInstanceDescriptor](../mtlindirectaccelerationstructureinstancedescriptor.md)
- [MTLIndirectAccelerationStructureMotionInstanceDescriptor](../mtlindirectaccelerationstructuremotioninstancedescriptor.md)

The sum of these offsets provides an index into the intersection function table that the ray tracing system uses to retrieve and invoke the function at this index, allowing you to customize the intersection evaluation process.
