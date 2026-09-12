> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureinstanceoptions/nonopaque](https://developer.apple.com/documentation/metal/mtlaccelerationstructureinstanceoptions/nonopaque)

# nonOpaque (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Specifies that intersectors should treat the instance as non-opaque.

## Declaration

```swift
static var nonOpaque: MTLAccelerationStructureInstanceOptions { get }
```

## See Also

### Usage options

- [disableTriangleCulling](disabletriangleculling.md): An option that turns off culling for this instance if ray intersector has culling enabled.
- [triangleFrontFacingWindingCounterClockwise](trianglefrontfacingwindingcounterclockwise.md): Specifies that the instance specifies front facing triangles in counter-clockwise order.
- [opaque](opaque.md): Specifies that intersectors should treat the instance as opaque.

# MTLAccelerationStructureInstanceOptionNonOpaque (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Specifies that intersectors should treat the instance as non-opaque.

## Declaration

```objectivec
MTLAccelerationStructureInstanceOptionNonOpaque
```

## See Also

### Usage options

- [MTLAccelerationStructureInstanceOptionNone](mtlaccelerationstructureinstanceoptionnone.md): Specifies the default behavior for resulting acceleration structure.
- [MTLAccelerationStructureInstanceOptionDisableTriangleCulling](disabletriangleculling.md): An option that turns off culling for this instance if ray intersector has culling enabled.
- [MTLAccelerationStructureInstanceOptionTriangleFrontFacingWindingCounterClockwise](trianglefrontfacingwindingcounterclockwise.md): Specifies that the instance specifies front facing triangles in counter-clockwise order.
- [MTLAccelerationStructureInstanceOptionOpaque](opaque.md): Specifies that intersectors should treat the instance as opaque.
