> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicevent/init(characteristic:triggervalue:)](https://developer.apple.com/documentation/homekit/hmcharacteristicevent/init(characteristic:triggervalue:))

# init(characteristic:triggerValue:) (Swift)

**Framework:** HomeKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+

Creates a new characteristic event which triggers when the specified characteristic reaches the specified value.

## Declaration

```swift
init(characteristic: HMCharacteristic, triggerValue: TriggerValueType?)
```

## Parameters

- `characteristic`: The characteristic that the event is observing.
- `triggerValue`: The value of the characteristic that triggers the event. Specifying `nil` causes the event to fire every time the value of the characteristic changes.

<a id="return-value"></a>

## Return Value

An initialized characteristic event for the specified characteristic and trigger value.

<a id="Discussion"></a>

## Discussion

Use a characteristic that supports notification; otherwise this initializer throws an exception.

# initWithCharacteristic:triggerValue: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates a new characteristic event which triggers when the specified characteristic reaches the specified value.

## Declaration

```objectivec
- (instancetype) initWithCharacteristic:(HMCharacteristic *) characteristic triggerValue:(TriggerValueType) triggerValue;
```

## Parameters

- `characteristic`: The characteristic that the event is observing.
- `triggerValue`: The value of the characteristic that triggers the event. Specifying `nil` causes the event to fire every time the value of the characteristic changes.

<a id="return-value"></a>

## Return Value

An initialized characteristic event for the specified characteristic and trigger value.

<a id="Discussion"></a>

## Discussion

Use a characteristic that supports notification; otherwise this initializer throws an exception.
