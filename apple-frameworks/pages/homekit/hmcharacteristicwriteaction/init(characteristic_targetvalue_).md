> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicwriteaction/init(characteristic:targetvalue:)](https://developer.apple.com/documentation/homekit/hmcharacteristicwriteaction/init(characteristic:targetvalue:))

# init(characteristic:targetValue:) (Swift)

**Framework:** HomeKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Initialize a characteristic write action with a specified characteristic and target value.

## Declaration

```swift
init(characteristic: HMCharacteristic, targetValue: TargetValueType)
```

## Parameters

- `characteristic`: The characteristic.
- `targetValue`: The target value for the characteristic.

<a id="return-value"></a>

## Return Value

A newly initialized characteristic write action object with the specified characteristic and target value.

## See Also

### Related Documentation

- [HomeKit Developer Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/HomeKitDeveloperGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40015050)

### New Methods

- [characteristic](characteristic.md): The characteristic whose value is to be written by the action.
- [targetValue](targetvalue.md): The value that will be written to the characteristic when the action is executed.
- [updateTargetValue(\_:completionHandler:)](updatetargetvalue%28__completionhandler_%29.md): Updates the target value.

# initWithCharacteristic:targetValue: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Initialize a characteristic write action with a specified characteristic and target value.

## Declaration

```objectivec
- (instancetype) initWithCharacteristic:(HMCharacteristic *) characteristic targetValue:(TargetValueType) targetValue;
```

## Parameters

- `characteristic`: The characteristic.
- `targetValue`: The target value for the characteristic.

<a id="return-value"></a>

## Return Value

A newly initialized characteristic write action object with the specified characteristic and target value.

## See Also

### Related Documentation

- [HomeKit Developer Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/HomeKitDeveloperGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40015050)

### New Methods

- [characteristic](characteristic.md): The characteristic whose value is to be written by the action.
- [targetValue](targetvalue.md): The value that will be written to the characteristic when the action is executed.
- [updateTargetValue:completionHandler:](updatetargetvalue%28__completionhandler_%29.md): Updates the target value.
