> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicthresholdrangeevent/init(characteristic:thresholdrange:)](https://developer.apple.com/documentation/homekit/hmcharacteristicthresholdrangeevent/init(characteristic:thresholdrange:))

# init(characteristic:thresholdRange:) (Swift)

**Framework:** HomeKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a characteristic threshold range event for the specified characteristic and number range.

## Declaration

```swift
init(characteristic: HMCharacteristic, thresholdRange: HMNumberRange)
```

## Parameters

- `characteristic`: The characteristic that the event is observing.
- `thresholdRange`: The range for the characteristic value that triggers the event.

<a id="return-value"></a>

## Return Value

An initialized characteristic threshold range event.

<a id="Discussion"></a>

## Discussion

Use a characteristic that supports notification; otherwise this initializer throws an exception.

# initWithCharacteristic:thresholdRange: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a characteristic threshold range event for the specified characteristic and number range.

## Declaration

```objectivec
- (instancetype) initWithCharacteristic:(HMCharacteristic *) characteristic thresholdRange:(HMNumberRange *) thresholdRange;
```

## Parameters

- `characteristic`: The characteristic that the event is observing.
- `thresholdRange`: The range for the characteristic value that triggers the event.

<a id="return-value"></a>

## Return Value

An initialized characteristic threshold range event.

<a id="Discussion"></a>

## Discussion

Use a characteristic that supports notification; otherwise this initializer throws an exception.
