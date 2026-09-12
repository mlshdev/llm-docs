> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/phase-swift.enum](https://developer.apple.com/documentation/uikit/uitouch/phase-swift.enum)

# UITouch.Phase (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The phase of a touch event.

## Declaration

```swift
enum Phase
```

<a id="overview"></a>

## Overview

The phase of a `UITouch` instance changes as the system receives updates during the course of an event. Access this value through the [phase](phase-swift.property.md) property.

## Topics

### Constants

- [UITouch.Phase.began](phase-swift.enum/began.md): A touch for a given event has pressed down on the screen.
- [UITouch.Phase.moved](phase-swift.enum/moved.md): A touch for a given event has moved over the screen.
- [UITouch.Phase.stationary](phase-swift.enum/stationary.md): A touch for a given event is pressed down on the screen, but hasn’t moved since the previous event.
- [UITouch.Phase.ended](phase-swift.enum/ended.md): A touch for a given event has lifted from the screen.
- [UITouch.Phase.cancelled](phase-swift.enum/cancelled.md): The system canceled tracking for a touch, for example, when the user moves the device against their face.
- [UITouch.Phase.regionEntered](phase-swift.enum/regionentered.md): A touch for a given event has entered a window on the screen.
- [UITouch.Phase.regionMoved](phase-swift.enum/regionmoved.md): A touch for the given event is within a window on the screen, but has not yet pressed down.
- [UITouch.Phase.regionExited](phase-swift.enum/regionexited.md): A touch for a given event has left a window on the screen.

### Initializers

- [init(rawValue:)](phase-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting touch attributes

- [tapCount](tapcount.md): The number of times the finger was tapped for this given touch.
- [timestamp](timestamp.md): The time when the touch occurred or when it was last mutated.
- [type](type.md): The type of the touch.
- [UITouch.TouchType](touchtype.md): The type of touch received.
- [phase](phase-swift.property.md): The phase of the touch.
- [force](force.md): The force of the touch, where a value of `1.0` represents the force of an average touch (predetermined by the system, not user-specific).
- [maximumPossibleForce](maximumpossibleforce.md): The maximum possible force for a touch.
- [altitudeAngle](altitudeangle.md): The altitude (in radians) of the stylus.
- [azimuthAngle(in:)](azimuthangle%28in_%29.md): Returns the azimuth angle (in radians) of the stylus.
- [azimuthUnitVector(in:)](azimuthunitvector%28in_%29.md): Returns a unit vector that points in the direction of the azimuth of the stylus.
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.

# UITouchPhase (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The phase of a touch event.

## Declaration

```objectivec
enum UITouchPhase : NSInteger;
```

<a id="overview"></a>

## Overview

The phase of a `UITouch` instance changes as the system receives updates during the course of an event. Access this value through the [phase](phase-swift.property.md) property.

## Topics

### Constants

- [UITouchPhaseBegan](phase-swift.enum/began.md): A touch for a given event has pressed down on the screen.
- [UITouchPhaseMoved](phase-swift.enum/moved.md): A touch for a given event has moved over the screen.
- [UITouchPhaseStationary](phase-swift.enum/stationary.md): A touch for a given event is pressed down on the screen, but hasn’t moved since the previous event.
- [UITouchPhaseEnded](phase-swift.enum/ended.md): A touch for a given event has lifted from the screen.
- [UITouchPhaseCancelled](phase-swift.enum/cancelled.md): The system canceled tracking for a touch, for example, when the user moves the device against their face.
- [UITouchPhaseRegionEntered](phase-swift.enum/regionentered.md): A touch for a given event has entered a window on the screen.
- [UITouchPhaseRegionMoved](phase-swift.enum/regionmoved.md): A touch for the given event is within a window on the screen, but has not yet pressed down.
- [UITouchPhaseRegionExited](phase-swift.enum/regionexited.md): A touch for a given event has left a window on the screen.

## See Also

### Getting touch attributes

- [tapCount](tapcount.md): The number of times the finger was tapped for this given touch.
- [timestamp](timestamp.md): The time when the touch occurred or when it was last mutated.
- [type](type.md): The type of the touch.
- [UITouchType](touchtype.md): The type of touch received.
- [phase](phase-swift.property.md): The phase of the touch.
- [force](force.md): The force of the touch, where a value of `1.0` represents the force of an average touch (predetermined by the system, not user-specific).
- [maximumPossibleForce](maximumpossibleforce.md): The maximum possible force for a touch.
- [altitudeAngle](altitudeangle.md): The altitude (in radians) of the stylus.
- [azimuthAngleInView:](azimuthangle%28in_%29.md): Returns the azimuth angle (in radians) of the stylus.
- [azimuthUnitVectorInView:](azimuthunitvector%28in_%29.md): Returns a unit vector that points in the direction of the azimuth of the stylus.
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.
