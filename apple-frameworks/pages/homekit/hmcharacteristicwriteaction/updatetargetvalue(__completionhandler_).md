> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicwriteaction/updatetargetvalue(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmcharacteristicwriteaction/updatetargetvalue(_:completionhandler:))

# updateTargetValue(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Updates the target value.

## Declaration

```swift
func updateTargetValue(_ targetValue: TargetValueType, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateTargetValue(_ targetValue: TargetValueType) async throws
```

## Parameters

- `targetValue`: The new target value.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### New Methods

- [init(characteristic:targetValue:)](init%28characteristic_targetvalue_%29.md): Initialize a characteristic write action with a specified characteristic and target value.
- [characteristic](characteristic.md): The characteristic whose value is to be written by the action.
- [targetValue](targetvalue.md): The value that will be written to the characteristic when the action is executed.

# updateTargetValue:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Updates the target value.

## Declaration

```objectivec
- (void) updateTargetValue:(TargetValueType) targetValue completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `targetValue`: The new target value.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### New Methods

- [initWithCharacteristic:targetValue:](init%28characteristic_targetvalue_%29.md): Initialize a characteristic write action with a specified characteristic and target value.
- [characteristic](characteristic.md): The characteristic whose value is to be written by the action.
- [targetValue](targetvalue.md): The value that will be written to the characteristic when the action is executed.
