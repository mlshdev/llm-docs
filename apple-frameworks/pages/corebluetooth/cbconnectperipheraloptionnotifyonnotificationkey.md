> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbconnectperipheraloptionnotifyonnotificationkey](https://developer.apple.com/documentation/corebluetooth/cbconnectperipheraloptionnotifyonnotificationkey)

# CBConnectPeripheralOptionNotifyOnNotificationKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that specifies whether the system should display an alert for any notification sent by a peripheral.

## Declaration

```swift
let CBConnectPeripheralOptionNotifyOnNotificationKey: String
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the system displays an alert for all notifications received from a given peripheral while the app is suspended.

The value for this key is an [NSNumber](../foundation/nsnumber.md) object. This key is useful for apps that haven’t specified the `bluetooth-central` background mode and can’t display their own alert. If more than one app requests a notification for a given peripheral, the one that was most recently in the foreground receives the alert. If the key isn’t specified, the default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Options

- [CBConnectPeripheralOptionEnableAutoReconnect](cbconnectperipheraloptionenableautoreconnect.md): A Boolean value that specifies whether the system automatically reconnects with a peripheral.
- [CBConnectPeripheralOptionEnableTransportBridgingKey](cbconnectperipheraloptionenabletransportbridgingkey.md): An option to bridge classic Bluetooth technology profiles, if already connected over Bluetooth Low Energy.
- [CBConnectPeripheralOptionNotifyOnConnectionKey](cbconnectperipheraloptionnotifyonconnectionkey.md): A Boolean value that specifies whether the system should display an alert when connecting a peripheral in the background.
- [CBConnectPeripheralOptionNotifyOnDisconnectionKey](cbconnectperipheraloptionnotifyondisconnectionkey.md): A Boolean value that specifies whether the system should display an alert when disconnecting a peripheral in the background.
- [CBConnectPeripheralOptionRequiresANCS](cbconnectperipheraloptionrequiresancs.md): An option to require Apple Notification Center Service (ANCS) when connecting a device.
- [CBConnectPeripheralOptionStartDelayKey](cbconnectperipheraloptionstartdelaykey.md): An option that indicates a delay before the system makes a connection.

# CBConnectPeripheralOptionNotifyOnNotificationKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that specifies whether the system should display an alert for any notification sent by a peripheral.

## Declaration

```objectivec
extern NSString * const CBConnectPeripheralOptionNotifyOnNotificationKey;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the system displays an alert for all notifications received from a given peripheral while the app is suspended.

The value for this key is an [NSNumber](../foundation/nsnumber.md) object. This key is useful for apps that haven’t specified the `bluetooth-central` background mode and can’t display their own alert. If more than one app requests a notification for a given peripheral, the one that was most recently in the foreground receives the alert. If the key isn’t specified, the default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Options

- [CBConnectPeripheralOptionEnableAutoReconnect](cbconnectperipheraloptionenableautoreconnect.md): A Boolean value that specifies whether the system automatically reconnects with a peripheral.
- [CBConnectPeripheralOptionEnableTransportBridgingKey](cbconnectperipheraloptionenabletransportbridgingkey.md): An option to bridge classic Bluetooth technology profiles, if already connected over Bluetooth Low Energy.
- [CBConnectPeripheralOptionNotifyOnConnectionKey](cbconnectperipheraloptionnotifyonconnectionkey.md): A Boolean value that specifies whether the system should display an alert when connecting a peripheral in the background.
- [CBConnectPeripheralOptionNotifyOnDisconnectionKey](cbconnectperipheraloptionnotifyondisconnectionkey.md): A Boolean value that specifies whether the system should display an alert when disconnecting a peripheral in the background.
- [CBConnectPeripheralOptionRequiresANCS](cbconnectperipheraloptionrequiresancs.md): An option to require Apple Notification Center Service (ANCS) when connecting a device.
- [CBConnectPeripheralOptionStartDelayKey](cbconnectperipheraloptionstartdelaykey.md): An option that indicates a delay before the system makes a connection.
