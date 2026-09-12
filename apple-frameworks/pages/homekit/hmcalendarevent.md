> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcalendarevent](https://developer.apple.com/documentation/homekit/hmcalendarevent)

# HMCalendarEvent (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An event that fires at a specified time.

## Declaration

```swift
class HMCalendarEvent
```

## Topics

### Creating a calendar event

- [init(fire:)](hmcalendarevent/init%28fire_%29.md): Creates a calendar event which fires based on the value of the supplied date components.

### Inspecting the calendar event

- [fireDateComponents](hmcalendarevent/firedatecomponents.md): The date components that specify when the event is triggered.

### Initializers

- [init(fireDateComponents:)](hmcalendarevent/init%28firedatecomponents_%29.md)

## Relationships

### Inherits From

- [HMTimeEvent](hmtimeevent.md)

### Inherited By

- [HMMutableCalendarEvent](hmmutablecalendarevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Dates and times

- [HMMutableCalendarEvent](hmmutablecalendarevent.md): A mutable event that fires at a specified time.
- [HMTimeEvent](hmtimeevent.md): An abstract superclass for time-based events.

# HMCalendarEvent (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An event that fires at a specified time.

## Declaration

```objectivec
@interface HMCalendarEvent : HMTimeEvent
```

## Topics

### Creating a calendar event

- [initWithFireDateComponents:](hmcalendarevent/init%28fire_%29.md): Creates a calendar event which fires based on the value of the supplied date components.

### Inspecting the calendar event

- [fireDateComponents](hmcalendarevent/firedatecomponents.md): The date components that specify when the event is triggered.

## Relationships

### Inherits From

- [HMTimeEvent](hmtimeevent.md)

### Inherited By

- [HMMutableCalendarEvent](hmmutablecalendarevent.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)

## See Also

### Dates and times

- [HMMutableCalendarEvent](hmmutablecalendarevent.md): A mutable event that fires at a specified time.
- [HMTimeEvent](hmtimeevent.md): An abstract superclass for time-based events.
