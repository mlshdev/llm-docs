> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbconnectperipheraloptionnotifyondisconnectionkey](https://developer.apple.com/documentation/corebluetooth/cbconnectperipheraloptionnotifyondisconnectionkey)

# CBConnectPeripheralOptionNotifyOnDisconnectionKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value that specifies whether the system should display an alert when disconnecting a peripheral in the background.

## Declaration

```swift
let CBConnectPeripheralOptionNotifyOnDisconnectionKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md) object. This key is useful for apps that haven’t specified the `bluetooth-central` background mode and can’t display their own alert. If more than one app requests a notification for a given peripheral, the one that was most recently in the foreground receives the alert. If the key isn’t specified, the default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Options

- [CBConnectPeripheralOptionEnableAutoReconnect](cbconnectperipheraloptionenableautoreconnect.md): A Boolean value that specifies whether the system automatically reconnects with a peripheral.
- [CBConnectPeripheralOptionEnableTransportBridgingKey](cbconnectperipheraloptionenabletransportbridgingkey.md): An option to bridge classic Bluetooth technology profiles, if already connected over Bluetooth Low Energy.
- [CBConnectPeripheralOptionNotifyOnConnectionKey](cbconnectperipheraloptionnotifyonconnectionkey.md): A Boolean value that specifies whether the system should display an alert when connecting a peripheral in the background.
- [CBConnectPeripheralOptionNotifyOnNotificationKey](cbconnectperipheraloptionnotifyonnotificationkey.md): A Boolean value that specifies whether the system should display an alert for any notification sent by a peripheral.
- [CBConnectPeripheralOptionRequiresANCS](cbconnectperipheraloptionrequiresancs.md): An option to require Apple Notification Center Service (ANCS) when connecting a device.
- [CBConnectPeripheralOptionStartDelayKey](cbconnectperipheraloptionstartdelaykey.md): An option that indicates a delay before the system makes a connection.

# CBConnectPeripheralOptionNotifyOnDisconnectionKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value that specifies whether the system should display an alert when disconnecting a peripheral in the background.

## Declaration

```objectivec
extern NSString * const CBConnectPeripheralOptionNotifyOnDisconnectionKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md) object. This key is useful for apps that haven’t specified the `bluetooth-central` background mode and can’t display their own alert. If more than one app requests a notification for a given peripheral, the one that was most recently in the foreground receives the alert. If the key isn’t specified, the default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Options

- [CBConnectPeripheralOptionEnableAutoReconnect](cbconnectperipheraloptionenableautoreconnect.md): A Boolean value that specifies whether the system automatically reconnects with a peripheral.
- [CBConnectPeripheralOptionEnableTransportBridgingKey](cbconnectperipheraloptionenabletransportbridgingkey.md): An option to bridge classic Bluetooth technology profiles, if already connected over Bluetooth Low Energy.
- [CBConnectPeripheralOptionNotifyOnConnectionKey](cbconnectperipheraloptionnotifyonconnectionkey.md): A Boolean value that specifies whether the system should display an alert when connecting a peripheral in the background.
- [CBConnectPeripheralOptionNotifyOnNotificationKey](cbconnectperipheraloptionnotifyonnotificationkey.md): A Boolean value that specifies whether the system should display an alert for any notification sent by a peripheral.
- [CBConnectPeripheralOptionRequiresANCS](cbconnectperipheraloptionrequiresancs.md): An option to require Apple Notification Center Service (ANCS) when connecting a device.
- [CBConnectPeripheralOptionStartDelayKey](cbconnectperipheraloptionstartdelaykey.md): An option that indicates a delay before the system makes a connection.
