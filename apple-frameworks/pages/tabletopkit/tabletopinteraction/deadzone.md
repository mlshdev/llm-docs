> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/deadzone](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/deadzone)

# TabletopInteraction.DeadZone

**Framework:** TabletopKit  
**Kind:** Enumeration  
**Availability:** visionOS 26.0+

The dead zone allows to specify how much the input device should move or rotate from its initial pose to start moving the object.

## Declaration

```swift
enum DeadZone
```

## Topics

### Interaction zones

- [TabletopInteraction.DeadZone.default](deadzone/default.md): The default dead zone values.
- [TabletopInteraction.DeadZone.disabled](deadzone/disabled.md): Use this value to disable the dead zone.
- [TabletopInteraction.DeadZone.within(distance:angle:)](deadzone/within%28distance_angle_%29.md): Allows to customize the dead zone values. The object will start moving when the first of these two thresholds is reached.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
