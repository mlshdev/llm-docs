> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtimertrigger](https://developer.apple.com/documentation/homekit/hmtimertrigger)

# HMTimerTrigger (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A trigger to activate an action set based on a periodic timer.

## Declaration

```swift
class HMTimerTrigger
```

<a id="overview"></a>

## Overview

When a timer trigger is enabled using [enable(\_:completionHandler:)](hmtrigger/enable%28__completionhandler_%29.md), the system checks to verify that the timer trigger’s fire date, time zone, and recurrence rules yield a next fire date that is in the future.

## Topics

### Creating a timer trigger

- [init(name:fireDate:recurrence:)](hmtimertrigger/init%28name_firedate_recurrence_%29.md)

### Choosing the fire date

- [fireDate](hmtimertrigger/firedate.md): The time at which the trigger will next fire.
- [updateFireDate(\_:completionHandler:)](hmtimertrigger/updatefiredate%28__completionhandler_%29.md): Updates the next fire date for the trigger.

### Using recurrence

- [recurrence](hmtimertrigger/recurrence.md): The interval on which to repeat firing the trigger.
- [updateRecurrence(\_:completionHandler:)](hmtimertrigger/updaterecurrence%28__completionhandler_%29.md): Updates the recurrence interval.

### Deprecated symbols

- [init(name:fireDate:timeZone:recurrence:recurrenceCalendar:)](hmtimertrigger/init%28name_firedate_timezone_recurrence_recurrencecalendar_%29.md): Deprecated. Initializes a timer trigger with specified timing information.
- [timeZone](hmtimertrigger/timezone.md): Deprecated. The timezone in which to evaluate the fire time.
- [updateTimeZone(\_:completionHandler:)](hmtimertrigger/updatetimezone%28__completionhandler_%29.md): Deprecated. Updates the trigger’s time zone.
- [recurrenceCalendar](hmtimertrigger/recurrencecalendar.md): Deprecated. The calendar in which the recurrence value is evaluated.

## Relationships

### Inherits From

- [HMTrigger](hmtrigger.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Action Sets

- [HMActionSet](hmactionset.md): A collection of actions that you trigger as a group.
- [HMEventTrigger](hmeventtrigger.md): A trigger to activate an action set based on a set of events and optional conditions.

# HMTimerTrigger (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A trigger to activate an action set based on a periodic timer.

## Declaration

```objectivec
@interface HMTimerTrigger : HMTrigger
```

<a id="overview"></a>

## Overview

When a timer trigger is enabled using [enable:completionHandler:](hmtrigger/enable%28__completionhandler_%29.md), the system checks to verify that the timer trigger’s fire date, time zone, and recurrence rules yield a next fire date that is in the future.

## Topics

### Creating a timer trigger

- [initWithName:fireDate:recurrence:](hmtimertrigger/init%28name_firedate_recurrence_%29.md)

### Choosing the fire date

- [fireDate](hmtimertrigger/firedate.md): The time at which the trigger will next fire.
- [updateFireDate:completionHandler:](hmtimertrigger/updatefiredate%28__completionhandler_%29.md): Updates the next fire date for the trigger.

### Using recurrence

- [recurrence](hmtimertrigger/recurrence.md): The interval on which to repeat firing the trigger.
- [updateRecurrence:completionHandler:](hmtimertrigger/updaterecurrence%28__completionhandler_%29.md): Updates the recurrence interval.

### Deprecated symbols

- [initWithName:fireDate:timeZone:recurrence:recurrenceCalendar:](hmtimertrigger/init%28name_firedate_timezone_recurrence_recurrencecalendar_%29.md): Deprecated. Initializes a timer trigger with specified timing information.
- [timeZone](hmtimertrigger/timezone.md): Deprecated. The timezone in which to evaluate the fire time.
- [updateTimeZone:completionHandler:](hmtimertrigger/updatetimezone%28__completionhandler_%29.md): Deprecated. Updates the trigger’s time zone.
- [recurrenceCalendar](hmtimertrigger/recurrencecalendar.md): Deprecated. The calendar in which the recurrence value is evaluated.

## Relationships

### Inherits From

- [HMTrigger](hmtrigger.md)

## See Also

### Action Sets

- [HMActionSet](hmactionset.md): A collection of actions that you trigger as a group.
- [HMEventTrigger](hmeventtrigger.md): A trigger to activate an action set based on a set of events and optional conditions.
