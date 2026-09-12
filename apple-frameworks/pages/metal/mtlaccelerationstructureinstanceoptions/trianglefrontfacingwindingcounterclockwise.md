> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureinstanceoptions/trianglefrontfacingwindingcounterclockwise](https://developer.apple.com/documentation/metal/mtlaccelerationstructureinstanceoptions/trianglefrontfacingwindingcounterclockwise)

# triangleFrontFacingWindingCounterClockwise (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Specifies that the instance specifies front facing triangles in counter-clockwise order.

## Declaration

```swift
static var triangleFrontFacingWindingCounterClockwise: MTLAccelerationStructureInstanceOptions { get }
```

## See Also

### Usage options

- [disableTriangleCulling](disabletriangleculling.md): An option that turns off culling for this instance if ray intersector has culling enabled.
- [opaque](opaque.md): Specifies that intersectors should treat the instance as opaque.
- [nonOpaque](nonopaque.md): Specifies that intersectors should treat the instance as non-opaque.

# MTLAccelerationStructureInstanceOptionTriangleFrontFacingWindingCounterClockwise (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Specifies that the instance specifies front facing triangles in counter-clockwise order.

## Declaration

```objectivec
MTLAccelerationStructureInstanceOptionTriangleFrontFacingWindingCounterClockwise
```

## See Also

### Usage options

- [MTLAccelerationStructureInstanceOptionNone](mtlaccelerationstructureinstanceoptionnone.md): Specifies the default behavior for resulting acceleration structure.
- [MTLAccelerationStructureInstanceOptionDisableTriangleCulling](disabletriangleculling.md): An option that turns off culling for this instance if ray intersector has culling enabled.
- [MTLAccelerationStructureInstanceOptionOpaque](opaque.md): Specifies that intersectors should treat the instance as opaque.
- [MTLAccelerationStructureInstanceOptionNonOpaque](nonopaque.md): Specifies that intersectors should treat the instance as non-opaque.
