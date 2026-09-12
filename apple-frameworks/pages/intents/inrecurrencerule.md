> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrecurrencerule](https://developer.apple.com/documentation/intents/inrecurrencerule)

# INRecurrenceRule (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

An object that describes the pattern to use when repeating an event.

## Declaration

```swift
class INRecurrenceRule
```

<a id="overview"></a>

## Overview

Use an [INRecurrenceRule](inrecurrencerule.md) object to define a repeating pattern for date ranges. Typically, you use recurrence rules when defining date ranges that you associate with a trigger, such as an [INTemporalEventTrigger](intemporaleventtrigger.md) object. Using a recurrence rule avoids the need to create a new trigger each time the old one fires.

## Topics

### Initializing a Recurrence Rule

- [init(interval:frequency:)](inrecurrencerule/init%28interval_frequency_%29.md): Initializes the recurrence rule to the specified frequency and interval.

### Getting the Rule Conditions

- [frequency](inrecurrencerule/frequency.md): The time frame for which the rule applies.
- [INRecurrenceFrequency](inrecurrencefrequency.md): The time frame for which the rule applies.
- [interval](inrecurrencerule/interval.md): The interval at which the recurrence rule is applied.

### Initializers

- [init(coder:)](inrecurrencerule/init%28coder_%29.md)
- [init(interval:frequency:weeklyRecurrenceDays:)](inrecurrencerule/init%28interval_frequency_weeklyrecurrencedays_%29.md)

### Instance Properties

- [weeklyRecurrenceDays](inrecurrencerule/weeklyrecurrencedays.md)

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

- [INDateComponentsRange](indatecomponentsrange.md): A span of time.

# INRecurrenceRule (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

An object that describes the pattern to use when repeating an event.

## Declaration

```objectivec
@interface INRecurrenceRule : NSObject
```

<a id="overview"></a>

## Overview

Use an [INRecurrenceRule](inrecurrencerule.md) object to define a repeating pattern for date ranges. Typically, you use recurrence rules when defining date ranges that you associate with a trigger, such as an [INTemporalEventTrigger](intemporaleventtrigger.md) object. Using a recurrence rule avoids the need to create a new trigger each time the old one fires.

## Topics

### Initializing a Recurrence Rule

- [initWithInterval:frequency:](inrecurrencerule/init%28interval_frequency_%29.md): Initializes the recurrence rule to the specified frequency and interval.

### Getting the Rule Conditions

- [frequency](inrecurrencerule/frequency.md): The time frame for which the rule applies.
- [INRecurrenceFrequency](inrecurrencefrequency.md): The time frame for which the rule applies.
- [interval](inrecurrencerule/interval.md): The interval at which the recurrence rule is applied.

### Instance Properties

- [weeklyRecurrenceDays](inrecurrencerule/weeklyrecurrencedays.md)

### Instance Methods

- [initWithInterval:frequency:weeklyRecurrenceDays:](inrecurrencerule/init%28interval_frequency_weeklyrecurrencedays_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Date

- [INDateComponentsRange](indatecomponentsrange.md): A span of time.
