> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatecomponentsrange](https://developer.apple.com/documentation/intents/indatecomponentsrange)

# INDateComponentsRange (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

A span of time.

## Declaration

```swift
class INDateComponentsRange
```

<a id="overview"></a>

## Overview

Use an [INDateComponentsRange](indatecomponentsrange.md) object to specify date- or time-related information when responding to an intent. For example, a ride service might use this object to specify possible pickup times for the user.

You create date components range objects when providing a response that includes a time span. Use this object to specify a range of times to include in the corresponding response. When displaying the date range information to the user, Siri or Maps formats the information appropriately.

## Topics

### Initializing a Date Components Range

- [init(start:end:)](indatecomponentsrange/init%28start_end_%29.md): Initializes the object using the specified start and end dates.
- [init(start:end:recurrenceRule:)](indatecomponentsrange/init%28start_end_recurrencerule_%29.md): Initializes the date range to a repeating time period.
- [init(ekRecurrenceRule:)](indatecomponentsrange/init%28ekrecurrencerule_%29-5p7kt.md): Initializes the date range using the specified recurrence rule.

### Getting the Date Information

- [startDateComponents](indatecomponentsrange/startdatecomponents.md): The start date of the range.
- [endDateComponents](indatecomponentsrange/enddatecomponents.md): The end date of the range.

### Getting Recurring Date Information

- [recurrenceRule](indatecomponentsrange/recurrencerule.md): The rule for repeating the date range.
- [ekRecurrenceRule()](indatecomponentsrange/ekrecurrencerule%28%29.md): Returns an Event Kit recurrence rule that matches the available information.

### Initializers

- [init(EKRecurrenceRule:)](indatecomponentsrange/init%28ekrecurrencerule_%29-n8xm.md)
- [init(coder:)](indatecomponentsrange/init%28coder_%29.md)
- [init(startDateComponents:endDateComponents:)](indatecomponentsrange/init%28startdatecomponents_enddatecomponents_%29.md)
- [init(startDateComponents:endDateComponents:recurrenceRule:)](indatecomponentsrange/init%28startdatecomponents_enddatecomponents_recurrencerule_%29.md)

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

### Date

- [INRecurrenceRule](inrecurrencerule.md): An object that describes the pattern to use when repeating an event.

# INDateComponentsRange (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

A span of time.

## Declaration

```objectivec
@interface INDateComponentsRange : NSObject
```

<a id="overview"></a>

## Overview

Use an [INDateComponentsRange](indatecomponentsrange.md) object to specify date- or time-related information when responding to an intent. For example, a ride service might use this object to specify possible pickup times for the user.

You create date components range objects when providing a response that includes a time span. Use this object to specify a range of times to include in the corresponding response. When displaying the date range information to the user, Siri or Maps formats the information appropriately.

## Topics

### Initializing a Date Components Range

- [initWithStartDateComponents:endDateComponents:](indatecomponentsrange/init%28start_end_%29.md): Initializes the object using the specified start and end dates.
- [initWithStartDateComponents:endDateComponents:recurrenceRule:](indatecomponentsrange/init%28start_end_recurrencerule_%29.md): Initializes the date range to a repeating time period.
- [initWithEKRecurrenceRule:](indatecomponentsrange/init%28ekrecurrencerule_%29-5p7kt.md): Initializes the date range using the specified recurrence rule.

### Getting the Date Information

- [startDateComponents](indatecomponentsrange/startdatecomponents.md): The start date of the range.
- [endDateComponents](indatecomponentsrange/enddatecomponents.md): The end date of the range.

### Getting Recurring Date Information

- [recurrenceRule](indatecomponentsrange/recurrencerule.md): The rule for repeating the date range.
- [EKRecurrenceRule](indatecomponentsrange/ekrecurrencerule%28%29.md): Returns an Event Kit recurrence rule that matches the available information.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Date

- [INRecurrenceRule](inrecurrencerule.md): An object that describes the pattern to use when repeating an event.
