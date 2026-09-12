> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intemporaleventtrigger/init(datecomponentsrange:)](https://developer.apple.com/documentation/intents/intemporaleventtrigger/init(datecomponentsrange:))

# init(dateComponentsRange:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Initializes the event trigger with the specified date information.

## Declaration

```swift
init(dateComponentsRange: INDateComponentsRange)
```

## Parameters

- `dateComponentsRange`: The time range during which the event is triggered. To trigger an event at a specific time, specify the same value for both the start and end dates of the range.

<a id="return-value"></a>

## Return Value

An initialized event trigger object or `nil` if the object could not be created.

# initWithDateComponentsRange: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Initializes the event trigger with the specified date information.

## Declaration

```objectivec
- (instancetype) initWithDateComponentsRange:(INDateComponentsRange *) dateComponentsRange;
```

## Parameters

- `dateComponentsRange`: The time range during which the event is triggered. To trigger an event at a specific time, specify the same value for both the start and end dates of the range.

<a id="return-value"></a>

## Return Value

An initialized event trigger object or `nil` if the object could not be created.
