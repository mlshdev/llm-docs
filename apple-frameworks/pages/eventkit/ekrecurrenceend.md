> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekrecurrenceend](https://developer.apple.com/documentation/eventkit/ekrecurrenceend)

# EKRecurrenceEnd (Swift)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A class that defines the end of a recurrence rule.

## Declaration

```swift
class EKRecurrenceEnd
```

## Mentioned In

- [Creating a recurring event](creating-a-recurring-event.md)

<a id="overview"></a>

## Overview

The `EKRecurrenceEnd` class defines the end of a recurrence rule defined by an [EKRecurrenceRule](ekrecurrencerule.md) object. The recurrence end can be specified by a date (date-based) or by a maximum count of occurrences (count-based). An event that is intended to continue indefinitely should have its `EKRecurrenceEnd` set to `nil`.

## Topics

### Creating a Recurrence End

- [init(end:)](ekrecurrenceend/init%28end_%29.md): Initializes and returns a date-based recurrence end with a given end date.
- [init(occurrenceCount:)](ekrecurrenceend/init%28occurrencecount_%29.md): Initializes and returns a count-based recurrence end with a given maximum occurrence count.

### Accessing Recurrence End Properties

- [endDate](ekrecurrenceend/enddate.md): The end date of the recurrence end, or `nil` if the recurrence end is count-based.
- [occurrenceCount](ekrecurrenceend/occurrencecount.md): The occurrence count of the recurrence end, or `0` if the recurrence end is date-based.

### Initializers

- [init(coder:)](ekrecurrenceend/init%28coder_%29.md)
- [init(endDate:)](ekrecurrenceend/init%28enddate_%29.md)

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

### Recurrence

- [Creating a recurring event](creating-a-recurring-event.md): Set up an event or reminder that repeats.
- [EKRecurrenceDayOfWeek](ekrecurrencedayofweek.md): A class that represents the day of the week.
- [EKRecurrenceRule](ekrecurrencerule.md): A class that describes the pattern for a recurring event.

# EKRecurrenceEnd (Objective-C)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A class that defines the end of a recurrence rule.

## Declaration

```objectivec
@interface EKRecurrenceEnd : NSObject
```

## Mentioned In

- [Creating a recurring event](creating-a-recurring-event.md)

<a id="overview"></a>

## Overview

The `EKRecurrenceEnd` class defines the end of a recurrence rule defined by an [EKRecurrenceRule](ekrecurrencerule.md) object. The recurrence end can be specified by a date (date-based) or by a maximum count of occurrences (count-based). An event that is intended to continue indefinitely should have its `EKRecurrenceEnd` set to `nil`.

## Topics

### Creating a Recurrence End

- [recurrenceEndWithEndDate:](ekrecurrenceend/init%28end_%29.md): Initializes and returns a date-based recurrence end with a given end date.
- [recurrenceEndWithOccurrenceCount:](ekrecurrenceend/init%28occurrencecount_%29.md): Initializes and returns a count-based recurrence end with a given maximum occurrence count.

### Accessing Recurrence End Properties

- [endDate](ekrecurrenceend/enddate.md): The end date of the recurrence end, or `nil` if the recurrence end is count-based.
- [occurrenceCount](ekrecurrenceend/occurrencecount.md): The occurrence count of the recurrence end, or `0` if the recurrence end is date-based.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Recurrence

- [Creating a recurring event](creating-a-recurring-event.md): Set up an event or reminder that repeats.
- [EKRecurrenceDayOfWeek](ekrecurrencedayofweek.md): A class that represents the day of the week.
- [EKRecurrenceRule](ekrecurrencerule.md): A class that describes the pattern for a recurring event.
