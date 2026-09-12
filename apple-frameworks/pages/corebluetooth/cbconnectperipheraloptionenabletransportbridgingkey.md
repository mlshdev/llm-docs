> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbconnectperipheraloptionenabletransportbridgingkey](https://developer.apple.com/documentation/corebluetooth/cbconnectperipheraloptionenabletransportbridgingkey)

# CBConnectPeripheralOptionEnableTransportBridgingKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An option to bridge classic Bluetooth technology profiles, if already connected over Bluetooth Low Energy.

## Declaration

```swift
let CBConnectPeripheralOptionEnableTransportBridgingKey: String
```

<a id="Discussion"></a>

## Discussion

This option tells the system to connect non-GATT profiles on classic Bluetooth devices, if there is a low energy GATT connection to the same device.

The value associated with this key is an [NSNumber](../foundation/nsnumber.md) as a Boolean value. A `true` value instructs the system to bring up classic transport profiles when a low energy transport peripheral connects. A `false` value tells the system not to use the profiles.

## See Also

### Options

- [CBConnectPeripheralOptionEnableAutoReconnect](cbconnectperipheraloptionenableautoreconnect.md): A Boolean value that specifies whether the system automatically reconnects with a peripheral.
- [CBConnectPeripheralOptionNotifyOnConnectionKey](cbconnectperipheraloptionnotifyonconnectionkey.md): A Boolean value that specifies whether the system should display an alert when connecting a peripheral in the background.
- [CBConnectPeripheralOptionNotifyOnDisconnectionKey](cbconnectperipheraloptionnotifyondisconnectionkey.md): A Boolean value that specifies whether the system should display an alert when disconnecting a peripheral in the background.
- [CBConnectPeripheralOptionNotifyOnNotificationKey](cbconnectperipheraloptionnotifyonnotificationkey.md): A Boolean value that specifies whether the system should display an alert for any notification sent by a peripheral.
- [CBConnectPeripheralOptionRequiresANCS](cbconnectperipheraloptionrequiresancs.md): An option to require Apple Notification Center Service (ANCS) when connecting a device.
- [CBConnectPeripheralOptionStartDelayKey](cbconnectperipheraloptionstartdelaykey.md): An option that indicates a delay before the system makes a connection.

# CBConnectPeripheralOptionEnableTransportBridgingKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An option to bridge classic Bluetooth technology profiles, if already connected over Bluetooth Low Energy.

## Declaration

```objectivec
extern NSString * const CBConnectPeripheralOptionEnableTransportBridgingKey;
```

<a id="Discussion"></a>

## Discussion

This option tells the system to connect non-GATT profiles on classic Bluetooth devices, if there is a low energy GATT connection to the same device.

The value associated with this key is an [NSNumber](../foundation/nsnumber.md) as a Boolean value. A `true` value instructs the system to bring up classic transport profiles when a low energy transport peripheral connects. A `false` value tells the system not to use the profiles.

## See Also

### Options

- [CBConnectPeripheralOptionEnableAutoReconnect](cbconnectperipheraloptionenableautoreconnect.md): A Boolean value that specifies whether the system automatically reconnects with a peripheral.
- [CBConnectPeripheralOptionNotifyOnConnectionKey](cbconnectperipheraloptionnotifyonconnectionkey.md): A Boolean value that specifies whether the system should display an alert when connecting a peripheral in the background.
- [CBConnectPeripheralOptionNotifyOnDisconnectionKey](cbconnectperipheraloptionnotifyondisconnectionkey.md): A Boolean value that specifies whether the system should display an alert when disconnecting a peripheral in the background.
- [CBConnectPeripheralOptionNotifyOnNotificationKey](cbconnectperipheraloptionnotifyonnotificationkey.md): A Boolean value that specifies whether the system should display an alert for any notification sent by a peripheral.
- [CBConnectPeripheralOptionRequiresANCS](cbconnectperipheraloptionrequiresancs.md): An option to require Apple Notification Center Service (ANCS) when connecting a device.
- [CBConnectPeripheralOptionStartDelayKey](cbconnectperipheraloptionstartdelaykey.md): An option that indicates a delay before the system makes a connection.
