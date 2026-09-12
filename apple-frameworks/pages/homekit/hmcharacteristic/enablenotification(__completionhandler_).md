> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristic/enablenotification(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmcharacteristic/enablenotification(_:completionhandler:))

# enableNotification(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Enables or disables notifications for changes in the value of the characteristic.

## Declaration

```swift
func enableNotification(_ enable: Bool, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func enableNotification(_ enable: Bool) async throws
```

## Parameters

- `enable`: [true](https://developer.apple.com/documentation/swift/true) to enable notifications, [false](https://developer.apple.com/documentation/swift/false) to disable notifications.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

HomeKit delivers notifications to the accessory delegate using the [accessory(\_:service:didUpdateValueFor:)](../hmaccessorydelegate/accessory%28__service_didupdatevaluefor_%29.md) method.

## See Also

### Receiving change notifications

- [isNotificationEnabled](isnotificationenabled.md): A Boolean indicating whether the characteristic has been set to send notifications.

# enableNotification:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Enables or disables notifications for changes in the value of the characteristic.

## Declaration

```objectivec
- (void) enableNotification:(BOOL) enable completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `enable`: [true](https://developer.apple.com/documentation/swift/true) to enable notifications, [false](https://developer.apple.com/documentation/swift/false) to disable notifications.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

HomeKit delivers notifications to the accessory delegate using the [accessory:service:didUpdateValueForCharacteristic:](../hmaccessorydelegate/accessory%28__service_didupdatevaluefor_%29.md) method.

## See Also

### Receiving change notifications

- [notificationEnabled](isnotificationenabled.md): A Boolean indicating whether the characteristic has been set to send notifications.
