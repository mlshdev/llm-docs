> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicwriteaction/characteristic](https://developer.apple.com/documentation/homekit/hmcharacteristicwriteaction/characteristic)

# characteristic (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The characteristic whose value is to be written by the action.

## Declaration

```swift
var characteristic: HMCharacteristic { get }
```

## See Also

### New Methods

- [init(characteristic:targetValue:)](init%28characteristic_targetvalue_%29.md): Initialize a characteristic write action with a specified characteristic and target value.
- [targetValue](targetvalue.md): The value that will be written to the characteristic when the action is executed.
- [updateTargetValue(\_:completionHandler:)](updatetargetvalue%28__completionhandler_%29.md): Updates the target value.

# characteristic (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The characteristic whose value is to be written by the action.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) HMCharacteristic * characteristic;
```

## See Also

### New Methods

- [initWithCharacteristic:targetValue:](init%28characteristic_targetvalue_%29.md): Initialize a characteristic write action with a specified characteristic and target value.
- [targetValue](targetvalue.md): The value that will be written to the characteristic when the action is executed.
- [updateTargetValue:completionHandler:](updatetargetvalue%28__completionhandler_%29.md): Updates the target value.
