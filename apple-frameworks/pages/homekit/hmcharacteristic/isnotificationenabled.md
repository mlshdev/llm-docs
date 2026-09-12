> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristic/isnotificationenabled](https://developer.apple.com/documentation/homekit/hmcharacteristic/isnotificationenabled)

# isNotificationEnabled (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean indicating whether the characteristic has been set to send notifications.

## Declaration

```swift
var isNotificationEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

HomeKit delivers notifications to the accessory delegate using the [accessory(\_:service:didUpdateValueFor:)](../hmaccessorydelegate/accessory%28__service_didupdatevaluefor_%29.md) method.

## See Also

### Receiving change notifications

- [enableNotification(\_:completionHandler:)](enablenotification%28__completionhandler_%29.md): Enables or disables notifications for changes in the value of the characteristic.

# notificationEnabled (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean indicating whether the characteristic has been set to send notifications.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isNotificationEnabled) BOOL notificationEnabled;
```

<a id="Discussion"></a>

## Discussion

HomeKit delivers notifications to the accessory delegate using the [accessory:service:didUpdateValueForCharacteristic:](../hmaccessorydelegate/accessory%28__service_didupdatevaluefor_%29.md) method.

## See Also

### Receiving change notifications

- [enableNotification:completionHandler:](enablenotification%28__completionhandler_%29.md): Enables or disables notifications for changes in the value of the characteristic.
