> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/accessibilityevents/rotornavigation](https://developer.apple.com/documentation/realitykit/accessibilityevents/rotornavigation)

# AccessibilityEvents.RotorNavigation

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 26.0+ · visionOS

An accessibility event associated with a rotor navigation.

## Declaration

```swift
@MainActor @preconcurrency struct RotorNavigation
```

## Topics

### Initializers

- [init(rotorType:hostEntity:currentItem:searchDirection:resultHandler:)](rotornavigation/init%28rotortype_hostentity_currentitem_searchdirection_resulthandler_%29.md)

### Instance Properties

- [currentItem](rotornavigation/currentitem.md): The current element of the search.
- [hostEntity](rotornavigation/hostentity.md): The entity containing the component declaring support for this rotor type.
- [resultHandler](rotornavigation/resulthandler.md): The handler for the result of the current search. When observing RotorNavigation events
- [rotorType](rotornavigation/rotortype.md): The type of the rotor associated with the event.
- [searchDirection](rotornavigation/searchdirection.md): The direction in which to search.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
