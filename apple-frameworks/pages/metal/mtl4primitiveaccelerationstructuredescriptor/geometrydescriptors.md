> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4primitiveaccelerationstructuredescriptor/geometrydescriptors](https://developer.apple.com/documentation/metal/mtl4primitiveaccelerationstructuredescriptor/geometrydescriptors)

# geometryDescriptors (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Associates the array of geometry descriptors that comprise this primitive acceleration structure.

## Declaration

```swift
var geometryDescriptors: [MTL4AccelerationStructureGeometryDescriptor]? { get set }
```

<a id="discussion"></a>

## Discussion

If you enable keyframe motion by setting property [motionKeyframeCount](motionkeyframecount.md) to a value greater than `1`, then all geometry descriptors this array references need to be motion geometry descriptors and have a number of primitive buffers equals to [motionKeyframeCount](motionkeyframecount.md).

Example of motion geometry descriptors include: [MTL4AccelerationStructureMotionTriangleGeometryDescriptor](../mtl4accelerationstructuremotiontrianglegeometrydescriptor.md), [MTL4AccelerationStructureMotionBoundingBoxGeometryDescriptor](../mtl4accelerationstructuremotionboundingboxgeometrydescriptor.md), [MTL4AccelerationStructureMotionCurveGeometryDescriptor](../mtl4accelerationstructuremotioncurvegeometrydescriptor.md).

# geometryDescriptors (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Associates the array of geometry descriptors that comprise this primitive acceleration structure.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSArray<MTL4AccelerationStructureGeometryDescriptor *> * geometryDescriptors;
```

<a id="discussion"></a>

## Discussion

If you enable keyframe motion by setting property [motionKeyframeCount](motionkeyframecount.md) to a value greater than `1`, then all geometry descriptors this array references need to be motion geometry descriptors and have a number of primitive buffers equals to [motionKeyframeCount](motionkeyframecount.md).

Example of motion geometry descriptors include: [MTL4AccelerationStructureMotionTriangleGeometryDescriptor](../mtl4accelerationstructuremotiontrianglegeometrydescriptor.md), [MTL4AccelerationStructureMotionBoundingBoxGeometryDescriptor](../mtl4accelerationstructuremotionboundingboxgeometrydescriptor.md), [MTL4AccelerationStructureMotionCurveGeometryDescriptor](../mtl4accelerationstructuremotioncurvegeometrydescriptor.md).
