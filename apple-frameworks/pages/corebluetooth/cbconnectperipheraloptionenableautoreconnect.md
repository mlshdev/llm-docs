> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbconnectperipheraloptionenableautoreconnect](https://developer.apple.com/documentation/corebluetooth/cbconnectperipheraloptionenableautoreconnect)

# CBConnectPeripheralOptionEnableAutoReconnect (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that specifies whether the system automatically reconnects with a peripheral.

## Declaration

```swift
let CBConnectPeripheralOptionEnableAutoReconnect: String
```

<a id="Discussion"></a>

## Discussion

After a peripheral device connects, this setting enables the system to initiate a connection to the peer device automatically when the link drops. The system uses [centralManager(\_:didDisconnectPeripheral:timestamp:isReconnecting:error:)](cbcentralmanagerdelegate/centralmanager%28__diddisconnectperipheral_timestamp_isreconnecting_error_%29.md) to notify the caller about the disconnection.

## See Also

### Options

- [CBConnectPeripheralOptionEnableTransportBridgingKey](cbconnectperipheraloptionenabletransportbridgingkey.md): An option to bridge classic Bluetooth technology profiles, if already connected over Bluetooth Low Energy.
- [CBConnectPeripheralOptionNotifyOnConnectionKey](cbconnectperipheraloptionnotifyonconnectionkey.md): A Boolean value that specifies whether the system should display an alert when connecting a peripheral in the background.
- [CBConnectPeripheralOptionNotifyOnDisconnectionKey](cbconnectperipheraloptionnotifyondisconnectionkey.md): A Boolean value that specifies whether the system should display an alert when disconnecting a peripheral in the background.
- [CBConnectPeripheralOptionNotifyOnNotificationKey](cbconnectperipheraloptionnotifyonnotificationkey.md): A Boolean value that specifies whether the system should display an alert for any notification sent by a peripheral.
- [CBConnectPeripheralOptionRequiresANCS](cbconnectperipheraloptionrequiresancs.md): An option to require Apple Notification Center Service (ANCS) when connecting a device.
- [CBConnectPeripheralOptionStartDelayKey](cbconnectperipheraloptionstartdelaykey.md): An option that indicates a delay before the system makes a connection.

# CBConnectPeripheralOptionEnableAutoReconnect (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that specifies whether the system automatically reconnects with a peripheral.

## Declaration

```objectivec
extern NSString * const CBConnectPeripheralOptionEnableAutoReconnect;
```

<a id="Discussion"></a>

## Discussion

After a peripheral device connects, this setting enables the system to initiate a connection to the peer device automatically when the link drops. The system uses [centralManager:didDisconnectPeripheral:timestamp:isReconnecting:error:](cbcentralmanagerdelegate/centralmanager%28__diddisconnectperipheral_timestamp_isreconnecting_error_%29.md) to notify the caller about the disconnection.

## See Also

### Options

- [CBConnectPeripheralOptionEnableTransportBridgingKey](cbconnectperipheraloptionenabletransportbridgingkey.md): An option to bridge classic Bluetooth technology profiles, if already connected over Bluetooth Low Energy.
- [CBConnectPeripheralOptionNotifyOnConnectionKey](cbconnectperipheraloptionnotifyonconnectionkey.md): A Boolean value that specifies whether the system should display an alert when connecting a peripheral in the background.
- [CBConnectPeripheralOptionNotifyOnDisconnectionKey](cbconnectperipheraloptionnotifyondisconnectionkey.md): A Boolean value that specifies whether the system should display an alert when disconnecting a peripheral in the background.
- [CBConnectPeripheralOptionNotifyOnNotificationKey](cbconnectperipheraloptionnotifyonnotificationkey.md): A Boolean value that specifies whether the system should display an alert for any notification sent by a peripheral.
- [CBConnectPeripheralOptionRequiresANCS](cbconnectperipheraloptionrequiresancs.md): An option to require Apple Notification Center Service (ANCS) when connecting a device.
- [CBConnectPeripheralOptionStartDelayKey](cbconnectperipheraloptionstartdelaykey.md): An option that indicates a delay before the system makes a connection.
