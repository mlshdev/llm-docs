> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcuieventtypes](https://developer.apple.com/documentation/gamecontroller/gcuieventtypes)

# GCUIEventTypes (Swift)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

## Declaration

```swift
struct GCUIEventTypes
```

## Topics

### Initializers

- [init(rawValue:)](gcuieventtypes/init%28rawvalue_%29.md)

### Type Properties

- [gamepad](gcuieventtypes/gamepad.md)
- [stylus](gcuieventtypes/stylus.md): A constant that represents events from a stylus.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting the event types

- [handledEventTypes](gceventinteraction/handledeventtypes.md): The types of game controller events that should be delivered through the Game Controller framework.

# GCUIEventTypes (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

## Declaration

```objectivec
enum GCUIEventTypes : NSUInteger;
```

## Topics

### Enumeration Cases

- [GCUIEventTypeNone](gcuieventtypes/gcuieventtypenone.md)
- [GCUIEventTypeGamepad](gcuieventtypes/gamepad.md)
- [GCUIEventTypeStylus](gcuieventtypes/stylus.md): A constant that represents events from a stylus.

## See Also

### Getting the event types

- [handledEventTypes](gceventinteraction/handledeventtypes.md): The types of game controller events that should be delivered through the Game Controller framework.
