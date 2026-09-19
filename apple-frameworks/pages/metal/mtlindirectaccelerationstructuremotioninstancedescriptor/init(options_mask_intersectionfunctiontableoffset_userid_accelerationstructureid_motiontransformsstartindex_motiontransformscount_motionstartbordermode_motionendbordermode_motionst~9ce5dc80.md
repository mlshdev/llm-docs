> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlindirectaccelerationstructuremotioninstancedescriptor/init(options:mask:intersectionfunctiontableoffset:userid:accelerationstructureid:motiontransformsstartindex:motiontransformscount:motionstartbordermode:motionendbordermode:motionstarttime:motionendtime:)

# init(options:mask:intersectionFunctionTableOffset:userID:accelerationStructureID:motionTransformsStartIndex:motionTransformsCount:motionStartBorderMode:motionEndBorderMode:motionStartTime:motionEndTime:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an indirect acceleration structure instance.

## Declaration

```swift
init(options: MTLAccelerationStructureInstanceOptions, mask: UInt32, intersectionFunctionTableOffset: UInt32, userID: UInt32, accelerationStructureID: MTLResourceID, motionTransformsStartIndex: UInt32, motionTransformsCount: UInt32, motionStartBorderMode: MTLMotionBorderMode, motionEndBorderMode: MTLMotionBorderMode, motionStartTime: Float, motionEndTime: Float)
```
