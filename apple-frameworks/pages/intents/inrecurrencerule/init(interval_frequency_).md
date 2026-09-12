> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrecurrencerule/init(interval:frequency:)](https://developer.apple.com/documentation/intents/inrecurrencerule/init(interval:frequency:))

# init(interval:frequency:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Initializes the recurrence rule to the specified frequency and interval.

## Declaration

```swift
convenience init(interval: Int, frequency: INRecurrenceFrequency)
```

## Parameters

- `interval`: The interval at which to repeat the specified time frame.
- `frequency`: The time frame over which to repeat the event. For a list of possible values, see [INRecurrenceFrequency](../inrecurrencefrequency.md).

<a id="return-value"></a>

## Return Value

An initialized [INRecurrenceRule](../inrecurrencerule.md) object or `nil` if the object could not be created.

# initWithInterval:frequency: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Initializes the recurrence rule to the specified frequency and interval.

## Declaration

```objectivec
- (instancetype) initWithInterval:(NSUInteger) interval frequency:(INRecurrenceFrequency) frequency;
```

## Parameters

- `interval`: The interval at which to repeat the specified time frame.
- `frequency`: The time frame over which to repeat the event. For a list of possible values, see [INRecurrenceFrequency](../inrecurrencefrequency.md).

<a id="return-value"></a>

## Return Value

An initialized [INRecurrenceRule](../inrecurrencerule.md) object or `nil` if the object could not be created.
