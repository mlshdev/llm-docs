> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanager](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanager)

# CBPeripheralManager (Swift)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that manages and advertises peripheral services exposed by this app.

## Declaration

```swift
class CBPeripheralManager
```

<a id="overview"></a>

## Overview

Core Bluetooth uses [CBPeripheralManager](cbperipheralmanager.md) objects to manage published services within the local peripheral’s Generic Attribute Profile (GATT) database and to advertise these services to central devices (represented by [CBCentral](cbcentral.md) objects). While a service is in the database, any connected central can see and connect to it. That said, if your app hasn’t specified the `bluetooth-peripheral` background mode, the contents of its services become disabled when it’s in the background or in a suspended state. In this scenario, any remote central trying to access the service’s characteristic value or characteristic descriptors receives an error.

Before you call [CBPeripheralManager](cbperipheralmanager.md) methods, the peripheral manager object must be in the powered-on state, as indicated by the [CBPeripheralManagerState.poweredOn](cbperipheralmanagerstate/poweredon.md). This state indicates that the device (your iPhone or iPad, for instance) supports Bluetooth low energy and that its Bluetooth is on and available for use.

In watchOS, tvOS, and visionOS, you can’t advertise services using a [CBPeripheralManager](cbperipheralmanager.md) object because support for doing so is unavailable.

## Topics

### Initializing a Peripheral Manager

- [init()](cbperipheralmanager/init%28%29.md): Initializes the peripheral manager without a delegate.
- [init(delegate:queue:)](cbperipheralmanager/init%28delegate_queue_%29.md): Initializes the peripheral manager with a specified delegate and dispatch queue.
- [init(delegate:queue:options:)](cbperipheralmanager/init%28delegate_queue_options_%29.md): Initializes the peripheral manager with a specified delegate, dispatch queue, and initialization options.
- [delegate](cbperipheralmanager/delegate.md): The delegate object specified to receive peripheral events.
- [Peripheral Manager Initialization Options](peripheral-manager-initialization-options.md): Keys used to specify options when creating a peripheral manager.

### Monitoring the State of a Peripheral Manager

- [authorizationStatus()](cbperipheralmanager/authorizationstatus%28%29.md): Deprecated. Returns the app’s authorization status for sharing data while in the background.
- [CBPeripheralManagerAuthorizationStatus](cbperipheralmanagerauthorizationstatus.md): Deprecated. Values representing the current authorization state of the peripheral manager.
- [CBPeripheralManagerState](cbperipheralmanagerstate.md): Deprecated. Values that represent the current state of the peripheral manager.

### Adding and Removing Services

- [add(\_:)](cbperipheralmanager/add%28__%29.md): Publishes a service and any of its associated characteristics and characteristic descriptors to the local GATT database.
- [remove(\_:)](cbperipheralmanager/remove%28__%29.md): Removes a specified published service from the local GATT database.
- [removeAllServices()](cbperipheralmanager/removeallservices%28%29.md): Removes all published services from the local GATT database.

### Managing Advertising

- [startAdvertising(\_:)](cbperipheralmanager/startadvertising%28__%29.md): Advertises peripheral manager data.
- [Advertising Data](advertising-data.md)
- [stopAdvertising()](cbperipheralmanager/stopadvertising%28%29.md): Stops advertising peripheral manager data.
- [isAdvertising](cbperipheralmanager/isadvertising.md): A Boolean value that indicates whether the peripheral is advertising data.

### Sending Updates of a Characteristic’s Value

- [updateValue(\_:for:onSubscribedCentrals:)](cbperipheralmanager/updatevalue%28__for_onsubscribedcentrals_%29.md): Send an updated characteristic value to one or more subscribed centrals, using a notification or indication.

### Responding to Read and Write Requests

- [respond(to:withResult:)](cbperipheralmanager/respond%28to_withresult_%29.md): Responds to a read or write request from a connected central.

### Setting Connection Latency

- [setDesiredConnectionLatency(\_:for:)](cbperipheralmanager/setdesiredconnectionlatency%28__for_%29.md): Sets the desired connection latency for an existing connection to a central device.
- [CBPeripheralManagerConnectionLatency](cbperipheralmanagerconnectionlatency.md): Values representing the connection latency of the peripheral manager.

### Using L2CAP Channels

- [publishL2CAPChannel(withEncryption:)](cbperipheralmanager/publishl2capchannel%28withencryption_%29.md): Creates a listener for incoming L2CAP channel connections.
- [unpublishL2CAPChannel(\_:)](cbperipheralmanager/unpublishl2capchannel%28__%29.md): Removes a published service from the local system.

## Relationships

### Inherits From

- [CBManager](cbmanager.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Peripherals

- [CBPeripheral](cbperipheral.md): A remote peripheral device.
- [CBPeripheralDelegate](cbperipheraldelegate.md): A protocol that provides updates on the use of a peripheral’s services.
- [CBPeripheralManagerDelegate](cbperipheralmanagerdelegate.md): A protocol that provides updates for local peripheral state and interactions with remote central devices.
- [CBAttribute](cbattribute.md): A representation of common aspects of services offered by a peripheral.
- [CBAttributePermissions](cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.

# CBPeripheralManager (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that manages and advertises peripheral services exposed by this app.

## Declaration

```objectivec
@interface CBPeripheralManager : CBManager
```

<a id="overview"></a>

## Overview

Core Bluetooth uses [CBPeripheralManager](cbperipheralmanager.md) objects to manage published services within the local peripheral’s Generic Attribute Profile (GATT) database and to advertise these services to central devices (represented by [CBCentral](cbcentral.md) objects). While a service is in the database, any connected central can see and connect to it. That said, if your app hasn’t specified the `bluetooth-peripheral` background mode, the contents of its services become disabled when it’s in the background or in a suspended state. In this scenario, any remote central trying to access the service’s characteristic value or characteristic descriptors receives an error.

Before you call [CBPeripheralManager](cbperipheralmanager.md) methods, the peripheral manager object must be in the powered-on state, as indicated by the [CBPeripheralManagerStatePoweredOn](cbperipheralmanagerstate/poweredon.md). This state indicates that the device (your iPhone or iPad, for instance) supports Bluetooth low energy and that its Bluetooth is on and available for use.

In watchOS, tvOS, and visionOS, you can’t advertise services using a [CBPeripheralManager](cbperipheralmanager.md) object because support for doing so is unavailable.

## Topics

### Initializing a Peripheral Manager

- [init](cbperipheralmanager/init%28%29.md): Initializes the peripheral manager without a delegate.
- [initWithDelegate:queue:](cbperipheralmanager/init%28delegate_queue_%29.md): Initializes the peripheral manager with a specified delegate and dispatch queue.
- [initWithDelegate:queue:options:](cbperipheralmanager/init%28delegate_queue_options_%29.md): Initializes the peripheral manager with a specified delegate, dispatch queue, and initialization options.
- [delegate](cbperipheralmanager/delegate.md): The delegate object specified to receive peripheral events.
- [Peripheral Manager Initialization Options](peripheral-manager-initialization-options.md): Keys used to specify options when creating a peripheral manager.

### Monitoring the State of a Peripheral Manager

- [authorizationStatus](cbperipheralmanager/authorizationstatus%28%29.md): Deprecated. Returns the app’s authorization status for sharing data while in the background.
- [CBPeripheralManagerAuthorizationStatus](cbperipheralmanagerauthorizationstatus.md): Deprecated. Values representing the current authorization state of the peripheral manager.
- [CBPeripheralManagerState](cbperipheralmanagerstate.md): Deprecated. Values that represent the current state of the peripheral manager.

### Adding and Removing Services

- [addService:](cbperipheralmanager/add%28__%29.md): Publishes a service and any of its associated characteristics and characteristic descriptors to the local GATT database.
- [removeService:](cbperipheralmanager/remove%28__%29.md): Removes a specified published service from the local GATT database.
- [removeAllServices](cbperipheralmanager/removeallservices%28%29.md): Removes all published services from the local GATT database.

### Managing Advertising

- [startAdvertising:](cbperipheralmanager/startadvertising%28__%29.md): Advertises peripheral manager data.
- [Advertising Data](advertising-data.md)
- [stopAdvertising](cbperipheralmanager/stopadvertising%28%29.md): Stops advertising peripheral manager data.
- [isAdvertising](cbperipheralmanager/isadvertising.md): A Boolean value that indicates whether the peripheral is advertising data.

### Sending Updates of a Characteristic’s Value

- [updateValue:forCharacteristic:onSubscribedCentrals:](cbperipheralmanager/updatevalue%28__for_onsubscribedcentrals_%29.md): Send an updated characteristic value to one or more subscribed centrals, using a notification or indication.

### Responding to Read and Write Requests

- [respondToRequest:withResult:](cbperipheralmanager/respond%28to_withresult_%29.md): Responds to a read or write request from a connected central.

### Setting Connection Latency

- [setDesiredConnectionLatency:forCentral:](cbperipheralmanager/setdesiredconnectionlatency%28__for_%29.md): Sets the desired connection latency for an existing connection to a central device.
- [CBPeripheralManagerConnectionLatency](cbperipheralmanagerconnectionlatency.md): Values representing the connection latency of the peripheral manager.

### Using L2CAP Channels

- [publishL2CAPChannelWithEncryption:](cbperipheralmanager/publishl2capchannel%28withencryption_%29.md): Creates a listener for incoming L2CAP channel connections.
- [unpublishL2CAPChannel:](cbperipheralmanager/unpublishl2capchannel%28__%29.md): Removes a published service from the local system.

## Relationships

### Inherits From

- [CBManager](cbmanager.md)

## See Also

### Peripherals

- [CBPeripheral](cbperipheral.md): A remote peripheral device.
- [CBPeripheralDelegate](cbperipheraldelegate.md): A protocol that provides updates on the use of a peripheral’s services.
- [CBPeripheralManagerDelegate](cbperipheralmanagerdelegate.md): A protocol that provides updates for local peripheral state and interactions with remote central devices.
- [CBAttribute](cbattribute.md): A representation of common aspects of services offered by a peripheral.
- [CBAttributePermissions](cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.
