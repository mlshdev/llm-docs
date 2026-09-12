> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmsignificanttimeevent/init(significantevent:offset:)](https://developer.apple.com/documentation/homekit/hmsignificanttimeevent/init(significantevent:offset:))

# init(significantEvent:offset:) (Swift)

**Framework:** HomeKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a new significant time event with the specified significant event and offset.

## Declaration

```swift
init(significantEvent: HMSignificantEvent, offset: DateComponents?)
```

## Parameters

- `significantEvent`: The significant event for this trigger, for example [sunrise](../hmsignificantevent/sunrise.md).
- `offset`: A date components instance that represents the offset from the significant event that this event fires.

<a id="return-value"></a>

## Return Value

An initialized significant time event which fires at the specified offset from the provided significant event.

<a id="Discussion"></a>

## Discussion

To specify that this event should fire before the significant event, supply a date components object with negative values. For example, to specify 30 minutes before sunset, the [minute](../../foundation/datecomponents/minute.md) property of the `offset` argument must be set to `-30`.

# initWithSignificantEvent:offset: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a new significant time event with the specified significant event and offset.

## Declaration

```objectivec
- (instancetype) initWithSignificantEvent:(HMSignificantEvent) significantEvent offset:(NSDateComponents *) offset;
```

## Parameters

- `significantEvent`: The significant event for this trigger, for example [HMSignificantEventSunrise](../hmsignificantevent/sunrise.md).
- `offset`: A date components instance that represents the offset from the significant event that this event fires.

<a id="return-value"></a>

## Return Value

An initialized significant time event which fires at the specified offset from the provided significant event.

<a id="Discussion"></a>

## Discussion

To specify that this event should fire before the significant event, supply a date components object with negative values. For example, to specify 30 minutes before sunset, the [minute](../../foundation/datecomponents/minute.md) property of the `offset` argument must be set to `-30`.
