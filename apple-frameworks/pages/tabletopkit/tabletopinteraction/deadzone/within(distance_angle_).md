> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/deadzone/within(distance:angle:)](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/deadzone/within(distance:angle:))

# TabletopInteraction.DeadZone.within(distance:angle:)

**Framework:** TabletopKit  
**Kind:** Case  
**Availability:** visionOS 26.0+

Allows to customize the dead zone values. The object will start moving when the first of these two thresholds is reached.

## Declaration

```swift
case within(distance: Double, angle: Angle2D)
```

## Parameters

- `distance`: The minimum amount of distance that the input device should move from its initial position.
- `angle`: The minimum angle that the device should rotate from its initial orientation.

## See Also

### Interaction zones

- [TabletopInteraction.DeadZone.default](default.md): The default dead zone values.
- [TabletopInteraction.DeadZone.disabled](disabled.md): Use this value to disable the dead zone.
