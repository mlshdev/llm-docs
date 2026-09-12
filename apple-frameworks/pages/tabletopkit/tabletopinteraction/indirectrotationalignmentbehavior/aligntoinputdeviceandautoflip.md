> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/indirectrotationalignmentbehavior/aligntoinputdeviceandautoflip](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/indirectrotationalignmentbehavior/aligntoinputdeviceandautoflip)

# TabletopInteraction.IndirectRotationAlignmentBehavior.alignToInputDeviceAndAutoFlip

**Framework:** TabletopKit  
**Kind:** Case  
**Availability:** visionOS 26.0+

Same as `alignToInputDevice` and also detect when the input device rotates enough to generate a flip of the equipment. When a flip is detected, the equipment will stay horizontal showing its back face.

## Declaration

```swift
case alignToInputDeviceAndAutoFlip
```

## See Also

### Alignment behaviors

- [TabletopInteraction.IndirectRotationAlignmentBehavior.alignToInputDevice](aligntoinputdevice.md): Align the equipment so its Z axis points towards the input devices and lays on the horizontal plane.
- [TabletopInteraction.IndirectRotationAlignmentBehavior.automatic](automatic.md): Automatically pick an alignment strategy based on the equipment size.
- [TabletopInteraction.IndirectRotationAlignmentBehavior.disabled](disabled.md): Use this value to disable the behavior.
