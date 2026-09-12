> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerdelegate](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerdelegate)

# CBPeripheralManagerDelegate (Swift)

**Framework:** Core Bluetooth  
**Kind:** Protocol  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A protocol that provides updates for local peripheral state and interactions with remote central devices.

## Declaration

```swift
protocol CBPeripheralManagerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The delegate of a [CBPeripheralManager](cbperipheralmanager.md) object must adopt the [CBPeripheralManagerDelegate](cbperipheralmanagerdelegate.md) protocol, which consists of numerous optional methods and one required method. The delegate uses the protocol’s optional methods to verify publishing and advertising, and to monitor read, write, and subscription requests from remote central devices.

The protocol’s required one method, [peripheralManagerDidUpdateState(\_:)](cbperipheralmanagerdelegate/peripheralmanagerdidupdatestate%28__%29.md), which Core Bluetooth calls whenever the peripheral manager’s state updates to indicate whether the peripheral manager is available.

## Topics

### Monitoring Changes to the Peripheral Manager’s State

- [peripheralManagerDidUpdateState(\_:)](cbperipheralmanagerdelegate/peripheralmanagerdidupdatestate%28__%29.md): Tells the delegate the peripheral manager’s state updated.
- [peripheralManager(\_:willRestoreState:)](cbperipheralmanagerdelegate/peripheralmanager%28__willrestorestate_%29.md): Tells the delegate the system is about to restore the peripheral manager.
- [Peripheral Manager State Restoration Options](peripheral-manager-state-restoration-options.md): Keys used to specify options when restoring the state of a peripheral manager.

### Adding Services

- [peripheralManager(\_:didAdd:error:)](cbperipheralmanagerdelegate/peripheralmanager%28__didadd_error_%29.md): Tells the delegate the peripheral manager published a service to the local GATT database.

### Advertising Peripheral Data

- [peripheralManagerDidStartAdvertising(\_:error:)](cbperipheralmanagerdelegate/peripheralmanagerdidstartadvertising%28__error_%29.md): Tells the delegate the peripheral manager started advertising the local peripheral device’s data.

### Monitoring Subscriptions to Characteristic Values

- [peripheralManager(\_:central:didSubscribeTo:)](cbperipheralmanagerdelegate/peripheralmanager%28__central_didsubscribeto_%29.md): Tells the delegate that a remote central device subscribed to a characteristic’s value.
- [peripheralManager(\_:central:didUnsubscribeFrom:)](cbperipheralmanagerdelegate/peripheralmanager%28__central_didunsubscribefrom_%29.md): Tells the delegate that a remote central device unsubscribed from a characteristic’s value.
- [peripheralManagerIsReady(toUpdateSubscribers:)](cbperipheralmanagerdelegate/peripheralmanagerisready%28toupdatesubscribers_%29.md): Tells the delegate that a local peripheral device is ready to send characteristic value updates.

### Receiving Read and Write Requests

- [peripheralManager(\_:didReceiveRead:)](cbperipheralmanagerdelegate/peripheralmanager%28__didreceiveread_%29.md): Tells the delegate that a local peripheral received an Attribute Protocol (ATT) read request for a characteristic with a dynamic value.
- [peripheralManager(\_:didReceiveWrite:)](cbperipheralmanagerdelegate/peripheralmanager%28__didreceivewrite_%29.md): Tells the delegate that a local peripheral device received an Attribute Protocol (ATT) write request for a characteristic with a dynamic value.

### Using L2CAP Channels

- [peripheralManager(\_:didPublishL2CAPChannel:error:)](cbperipheralmanagerdelegate/peripheralmanager%28__didpublishl2capchannel_error_%29.md): Tells the delegate that the peripheral manager created a listener for incoming L2CAP channel connections.
- [peripheralManager(\_:didUnpublishL2CAPChannel:error:)](cbperipheralmanagerdelegate/peripheralmanager%28__didunpublishl2capchannel_error_%29.md): Tells the delegate that the peripheral manager removed a published service from the local system.
- [peripheralManager(\_:didOpen:error:)](cbperipheralmanagerdelegate/peripheralmanager%28__didopen_error_%29.md): Tells the delegate that the peripheral manager opened an L2CAP channel.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Peripherals

- [CBPeripheral](cbperipheral.md): A remote peripheral device.
- [CBPeripheralDelegate](cbperipheraldelegate.md): A protocol that provides updates on the use of a peripheral’s services.
- [CBPeripheralManager](cbperipheralmanager.md): An object that manages and advertises peripheral services exposed by this app.
- [CBAttribute](cbattribute.md): A representation of common aspects of services offered by a peripheral.
- [CBAttributePermissions](cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.

# CBPeripheralManagerDelegate (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Protocol  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A protocol that provides updates for local peripheral state and interactions with remote central devices.

## Declaration

```objectivec
@protocol CBPeripheralManagerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The delegate of a [CBPeripheralManager](cbperipheralmanager.md) object must adopt the [CBPeripheralManagerDelegate](cbperipheralmanagerdelegate.md) protocol, which consists of numerous optional methods and one required method. The delegate uses the protocol’s optional methods to verify publishing and advertising, and to monitor read, write, and subscription requests from remote central devices.

The protocol’s required one method, [peripheralManagerDidUpdateState:](cbperipheralmanagerdelegate/peripheralmanagerdidupdatestate%28__%29.md), which Core Bluetooth calls whenever the peripheral manager’s state updates to indicate whether the peripheral manager is available.

## Topics

### Monitoring Changes to the Peripheral Manager’s State

- [peripheralManagerDidUpdateState:](cbperipheralmanagerdelegate/peripheralmanagerdidupdatestate%28__%29.md): Tells the delegate the peripheral manager’s state updated.
- [peripheralManager:willRestoreState:](cbperipheralmanagerdelegate/peripheralmanager%28__willrestorestate_%29.md): Tells the delegate the system is about to restore the peripheral manager.
- [Peripheral Manager State Restoration Options](peripheral-manager-state-restoration-options.md): Keys used to specify options when restoring the state of a peripheral manager.

### Adding Services

- [peripheralManager:didAddService:error:](cbperipheralmanagerdelegate/peripheralmanager%28__didadd_error_%29.md): Tells the delegate the peripheral manager published a service to the local GATT database.

### Advertising Peripheral Data

- [peripheralManagerDidStartAdvertising:error:](cbperipheralmanagerdelegate/peripheralmanagerdidstartadvertising%28__error_%29.md): Tells the delegate the peripheral manager started advertising the local peripheral device’s data.

### Monitoring Subscriptions to Characteristic Values

- [peripheralManager:central:didSubscribeToCharacteristic:](cbperipheralmanagerdelegate/peripheralmanager%28__central_didsubscribeto_%29.md): Tells the delegate that a remote central device subscribed to a characteristic’s value.
- [peripheralManager:central:didUnsubscribeFromCharacteristic:](cbperipheralmanagerdelegate/peripheralmanager%28__central_didunsubscribefrom_%29.md): Tells the delegate that a remote central device unsubscribed from a characteristic’s value.
- [peripheralManagerIsReadyToUpdateSubscribers:](cbperipheralmanagerdelegate/peripheralmanagerisready%28toupdatesubscribers_%29.md): Tells the delegate that a local peripheral device is ready to send characteristic value updates.

### Receiving Read and Write Requests

- [peripheralManager:didReceiveReadRequest:](cbperipheralmanagerdelegate/peripheralmanager%28__didreceiveread_%29.md): Tells the delegate that a local peripheral received an Attribute Protocol (ATT) read request for a characteristic with a dynamic value.
- [peripheralManager:didReceiveWriteRequests:](cbperipheralmanagerdelegate/peripheralmanager%28__didreceivewrite_%29.md): Tells the delegate that a local peripheral device received an Attribute Protocol (ATT) write request for a characteristic with a dynamic value.

### Using L2CAP Channels

- [peripheralManager:didPublishL2CAPChannel:error:](cbperipheralmanagerdelegate/peripheralmanager%28__didpublishl2capchannel_error_%29.md): Tells the delegate that the peripheral manager created a listener for incoming L2CAP channel connections.
- [peripheralManager:didUnpublishL2CAPChannel:error:](cbperipheralmanagerdelegate/peripheralmanager%28__didunpublishl2capchannel_error_%29.md): Tells the delegate that the peripheral manager removed a published service from the local system.
- [peripheralManager:didOpenL2CAPChannel:error:](cbperipheralmanagerdelegate/peripheralmanager%28__didopen_error_%29.md): Tells the delegate that the peripheral manager opened an L2CAP channel.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Peripherals

- [CBPeripheral](cbperipheral.md): A remote peripheral device.
- [CBPeripheralDelegate](cbperipheraldelegate.md): A protocol that provides updates on the use of a peripheral’s services.
- [CBPeripheralManager](cbperipheralmanager.md): An object that manages and advertises peripheral services exposed by this app.
- [CBAttribute](cbattribute.md): A representation of common aspects of services offered by a peripheral.
- [CBAttributePermissions](cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.
