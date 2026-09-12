> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intemporaleventtrigger](https://developer.apple.com/documentation/intents/intemporaleventtrigger)

# INTemporalEventTrigger (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

A trigger condition based on a date or time.

## Declaration

```swift
class INTemporalEventTrigger
```

<a id="overview"></a>

## Overview

When configuring tasks, you can add an [INTemporalEventTrigger](intemporaleventtrigger.md) object to display a reminder at a specific time. Because you specify the time values using an [INDateComponentsRange](indatecomponentsrange.md) object, the trigger condition can occur at a single time or within a range of time. You can also specify a repeating trigger time by specifying a day without a month or year or by specifying a time value without a specific day.

## Topics

### Initializing an Event Trigger

- [init(dateComponentsRange:)](intemporaleventtrigger/init%28datecomponentsrange_%29.md): Initializes the event trigger with the specified date information.

### Getting the Trigger Condition

- [dateComponentsRange](intemporaleventtrigger/datecomponentsrange.md): The triggering time range for an event.

### Initializers

- [init(coder:)](intemporaleventtrigger/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Event Triggers

- [INSpatialEventTrigger](inspatialeventtrigger.md): A trigger condition based on the user’s arrival or departure from a given location.
- [INTemporalEventTriggerTypeOptionsResolutionResult](intemporaleventtriggertypeoptionsresolutionresult.md): Deprecated. A resolution result that adds a temporal event trigger.
- [INDayOfWeekOptions](indayofweekoptions.md): Days of the week.

# INTemporalEventTrigger (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

A trigger condition based on a date or time.

## Declaration

```objectivec
@interface INTemporalEventTrigger : NSObject
```

<a id="overview"></a>

## Overview

When configuring tasks, you can add an [INTemporalEventTrigger](intemporaleventtrigger.md) object to display a reminder at a specific time. Because you specify the time values using an [INDateComponentsRange](indatecomponentsrange.md) object, the trigger condition can occur at a single time or within a range of time. You can also specify a repeating trigger time by specifying a day without a month or year or by specifying a time value without a specific day.

## Topics

### Initializing an Event Trigger

- [initWithDateComponentsRange:](intemporaleventtrigger/init%28datecomponentsrange_%29.md): Initializes the event trigger with the specified date information.

### Getting the Trigger Condition

- [dateComponentsRange](intemporaleventtrigger/datecomponentsrange.md): The triggering time range for an event.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Event Triggers

- [INSpatialEventTrigger](inspatialeventtrigger.md): A trigger condition based on the user’s arrival or departure from a given location.
- [INTemporalEventTriggerTypeOptionsResolutionResult](intemporaleventtriggertypeoptionsresolutionresult.md): Deprecated. A resolution result that adds a temporal event trigger.
- [INDayOfWeekOptions](indayofweekoptions.md): Days of the week.
