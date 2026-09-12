> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureinstanceoptions/disabletriangleculling](https://developer.apple.com/documentation/metal/mtlaccelerationstructureinstanceoptions/disabletriangleculling)

# disableTriangleCulling (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

An option that turns off culling for this instance if ray intersector has culling enabled.

## Declaration

```swift
static var disableTriangleCulling: MTLAccelerationStructureInstanceOptions { get }
```

## See Also

### Usage options

- [triangleFrontFacingWindingCounterClockwise](trianglefrontfacingwindingcounterclockwise.md): Specifies that the instance specifies front facing triangles in counter-clockwise order.
- [opaque](opaque.md): Specifies that intersectors should treat the instance as opaque.
- [nonOpaque](nonopaque.md): Specifies that intersectors should treat the instance as non-opaque.

# MTLAccelerationStructureInstanceOptionDisableTriangleCulling (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

An option that turns off culling for this instance if ray intersector has culling enabled.

## Declaration

```objectivec
MTLAccelerationStructureInstanceOptionDisableTriangleCulling
```

## See Also

### Usage options

- [MTLAccelerationStructureInstanceOptionNone](mtlaccelerationstructureinstanceoptionnone.md): Specifies the default behavior for resulting acceleration structure.
- [MTLAccelerationStructureInstanceOptionTriangleFrontFacingWindingCounterClockwise](trianglefrontfacingwindingcounterclockwise.md): Specifies that the instance specifies front facing triangles in counter-clockwise order.
- [MTLAccelerationStructureInstanceOptionOpaque](opaque.md): Specifies that intersectors should treat the instance as opaque.
- [MTLAccelerationStructureInstanceOptionNonOpaque](nonopaque.md): Specifies that intersectors should treat the instance as non-opaque.
