> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actioneventtype](https://developer.apple.com/documentation/realitykit/actioneventtype)

# ActionEventType

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A set of events that an action responds to.

## Declaration

```swift
struct ActionEventType
```

<a id="overview"></a>

## Overview

Actions can respond to specific events with one or more custom event handlers that you associate with each event type.

RealityKit calls the event handlers when the animation time enters, exits, or continues within a time interval for an [ActionEventDefinition](actioneventdefinition.md).

A time interval for an event begins at its starting time and spans up to, but doesn’t include, the event’s starting time plus its duration.

## Topics

### Event types

- [started](actioneventtype/started.md): An event that takes place when a new action event begins.
- [ended](actioneventtype/ended.md): An event that takes place when the action event exits its time interval.
- [paused](actioneventtype/paused.md): An event that takes place when the animation pauses.
- [resumed](actioneventtype/resumed.md): An event that takes place when the animation resumes after a pause.
- [updated](actioneventtype/updated.md): An event that takes place after an action event starts and is within its time interval.
- [skipped](actioneventtype/skipped.md): An event that takes place when the system misses an action event’s time interval.
- [terminated](actioneventtype/terminated.md): An event that takes place when the animation ends.

### Protocol support

- [init(rawValue:)](actioneventtype/init%28rawvalue_%29.md): Creates an action event type from a raw value.
- [rawValue](actioneventtype/rawvalue.md): The backing storage for action event types.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Action events

- [ActionEvent](actionevent.md): The structure returned to all action event handlers.
- [AnimationState](animationstate.md): The concretely typed animation state structure.
- [ActionEventDefinition](actioneventdefinition.md): Defines an action event interval, and any associated parameters.
- [AnimationStateProtocol](animationstateprotocol.md): The protocol representing the current animation state of an action animation.
