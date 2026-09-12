> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/animation](https://developer.apple.com/documentation/dockkit/dockaccessory/animation)

# DockAccessory.Animation

**Framework:** DockKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Character animations that describe how to move the dock accessory.

## Declaration

```swift
enum Animation
```

<a id="overview"></a>

## Overview

Each animation executes on a predefined trajectory. See [animate(motion:)](animate%28motion_%29.md) for more information.

## Topics

### Enumeration Cases

- [DockAccessory.Animation.kapow](animation/kapow.md): The dock accessory performs a quick tilt and snaps back with some oscillation.
- [DockAccessory.Animation.no](animation/no.md): The dock accessory traces a horizontal head shake.
- [DockAccessory.Animation.wakeup](animation/wakeup.md): The dock accessory moves upwards towards center.
- [DockAccessory.Animation.yes](animation/yes.md): The dock accessory traces a vertical head nod.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing animation

- [animate(motion:)](animate%28motion_%29.md): Starts an animation sequence.
- [setRegionOfInterest(\_:)](setregionofinterest%28__%29.md): Sets the area in the video frame in which the dock accessory tracks a subject.
- [regionOfInterest](regionofinterest.md): The area in the video frame in which the dock accessory tracks a subject.
