> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral](https://developer.apple.com/documentation/corebluetooth/cbperipheral)

# CBPeripheral (Swift)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A remote peripheral device.

## Declaration

```swift
class CBPeripheral
```

<a id="overview"></a>

## Overview

The [CBPeripheral](cbperipheral.md) class represents remote peripheral devices that your app discovers with a central manager (an instance of [CBCentralManager](cbcentralmanager.md)). Peripherals use universally unique identifiers (UUIDs), represented by [NSUUID](../foundation/nsuuid.md) objects, to identify themselves. Peripherals may contain one or more services or provide useful information about their connected signal strength.

You use this class to discover, explore, and interact with the services available on a remote peripheral that supports Bluetooth low energy. A service encapsulates the way part of the device behaves. For example, one service of a heart rate monitor may be to expose heart rate data from a sensor. Services themselves contain of characteristics or included services (references to other services). Characteristics provide further details about a peripheral’s service. For example, the heart rate service may contain multiple characteristics. One characteristic could describe the intended body location of the device’s heart rate sensor, and another characteristic could transmit the heart rate measurement data. Finally, characteristics contain any number of descriptors that provide more information about the characteristic’s value, such as a human-readable description and a way to format the value.

## Topics

### Identifying a Peripheral

- [name](cbperipheral/name.md): The name of the peripheral.
- [delegate](cbperipheral/delegate.md): The delegate object specified to receive peripheral events.

### Discovering Services

- [discoverServices(\_:)](cbperipheral/discoverservices%28__%29.md): Discovers the specified services of the peripheral.
- [discoverIncludedServices(\_:for:)](cbperipheral/discoverincludedservices%28__for_%29.md): Discovers the specified included services of a previously-discovered service.
- [services](cbperipheral/services.md): A list of a peripheral’s discovered services.

### Discovering Characteristics and Descriptors

- [discoverCharacteristics(\_:for:)](cbperipheral/discovercharacteristics%28__for_%29.md): Discovers the specified characteristics of a service.
- [discoverDescriptors(for:)](cbperipheral/discoverdescriptors%28for_%29.md): Discovers the descriptors of a characteristic.

### Reading Characteristic and Descriptor Values

- [readValue(for:)](cbperipheral/readvalue%28for_%29-6u2kr.md): Retrieves the value of a specified characteristic.
- [readValue(for:)](cbperipheral/readvalue%28for_%29-91hhp.md): Retrieves the value of a specified characteristic descriptor.

### Writing Characteristic and Descriptor Values

- [writeValue(\_:for:type:)](cbperipheral/writevalue%28__for_type_%29.md): Writes the value of a characteristic.
- [writeValue(\_:for:)](cbperipheral/writevalue%28__for_%29.md): Writes the value of a characteristic descriptor.
- [maximumWriteValueLength(for:)](cbperipheral/maximumwritevaluelength%28for_%29.md): The maximum amount of data, in bytes, you can send to a characteristic in a single write type.
- [CBCharacteristicWriteType](cbcharacteristicwritetype.md): Values representing the possible write types to a characteristic’s value.

### Setting Notifications for a Characteristic’s Value

- [setNotifyValue(\_:for:)](cbperipheral/setnotifyvalue%28__for_%29.md): Sets notifications or indications for the value of a specified characteristic.

### Monitoring a Peripheral’s Connection State

- [state](cbperipheral/state.md): The connection state of the peripheral.
- [CBPeripheralState](cbperipheralstate.md): Values representing the connection state of a peripheral.
- [canSendWriteWithoutResponse](cbperipheral/cansendwritewithoutresponse.md): A Boolean value that indicates whether the remote device can send a write without a response.

### Accessing a Peripheral’s Signal Strength

- [readRSSI()](cbperipheral/readrssi%28%29.md): Retrieves the current RSSI value for the peripheral while connected to the central manager.
- [rssi](cbperipheral/rssi.md): Deprecated. The Received Signal Strength Indicator (RSSI), in decibels, of the peripheral.

### Working with L2CAP Channels

- [openL2CAPChannel(\_:)](cbperipheral/openl2capchannel%28__%29.md): Attempts to open an L2CAP channel to the peripheral using the supplied Protocol/Service Multiplexer (PSM).
- [CBL2CAPChannel](cbl2capchannel.md): A live L2CAP connection to a remote device.
- [CBL2CAPPSM](cbl2cappsm.md): The type of PSM identifiers.

### Working with Apple Notification Center Service (ANCS)

- [ancsAuthorized](cbperipheral/ancsauthorized.md): A Boolean value that indicates if the remote device has authorization to receive data over ANCS protocol.

### Instance Methods

- [cancelChannelSoundingSession()](cbperipheral/cancelchannelsoundingsession%28%29.md)
- [startChannelSoundingSession(\_:)](cbperipheral/startchannelsoundingsession%28__%29.md)

## Relationships

### Inherits From

- [CBPeer](cbpeer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Peripherals

- [CBPeripheralDelegate](cbperipheraldelegate.md): A protocol that provides updates on the use of a peripheral’s services.
- [CBPeripheralManager](cbperipheralmanager.md): An object that manages and advertises peripheral services exposed by this app.
- [CBPeripheralManagerDelegate](cbperipheralmanagerdelegate.md): A protocol that provides updates for local peripheral state and interactions with remote central devices.
- [CBAttribute](cbattribute.md): A representation of common aspects of services offered by a peripheral.
- [CBAttributePermissions](cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.

# CBPeripheral (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A remote peripheral device.

## Declaration

```objectivec
@interface CBPeripheral : CBPeer
```

<a id="overview"></a>

## Overview

The [CBPeripheral](cbperipheral.md) class represents remote peripheral devices that your app discovers with a central manager (an instance of [CBCentralManager](cbcentralmanager.md)). Peripherals use universally unique identifiers (UUIDs), represented by [NSUUID](../foundation/nsuuid.md) objects, to identify themselves. Peripherals may contain one or more services or provide useful information about their connected signal strength.

You use this class to discover, explore, and interact with the services available on a remote peripheral that supports Bluetooth low energy. A service encapsulates the way part of the device behaves. For example, one service of a heart rate monitor may be to expose heart rate data from a sensor. Services themselves contain of characteristics or included services (references to other services). Characteristics provide further details about a peripheral’s service. For example, the heart rate service may contain multiple characteristics. One characteristic could describe the intended body location of the device’s heart rate sensor, and another characteristic could transmit the heart rate measurement data. Finally, characteristics contain any number of descriptors that provide more information about the characteristic’s value, such as a human-readable description and a way to format the value.

## Topics

### Identifying a Peripheral

- [name](cbperipheral/name.md): The name of the peripheral.
- [delegate](cbperipheral/delegate.md): The delegate object specified to receive peripheral events.

### Discovering Services

- [discoverServices:](cbperipheral/discoverservices%28__%29.md): Discovers the specified services of the peripheral.
- [discoverIncludedServices:forService:](cbperipheral/discoverincludedservices%28__for_%29.md): Discovers the specified included services of a previously-discovered service.
- [services](cbperipheral/services.md): A list of a peripheral’s discovered services.

### Discovering Characteristics and Descriptors

- [discoverCharacteristics:forService:](cbperipheral/discovercharacteristics%28__for_%29.md): Discovers the specified characteristics of a service.
- [discoverDescriptorsForCharacteristic:](cbperipheral/discoverdescriptors%28for_%29.md): Discovers the descriptors of a characteristic.

### Reading Characteristic and Descriptor Values

- [readValueForCharacteristic:](cbperipheral/readvalue%28for_%29-6u2kr.md): Retrieves the value of a specified characteristic.
- [readValueForDescriptor:](cbperipheral/readvalue%28for_%29-91hhp.md): Retrieves the value of a specified characteristic descriptor.

### Writing Characteristic and Descriptor Values

- [writeValue:forCharacteristic:type:](cbperipheral/writevalue%28__for_type_%29.md): Writes the value of a characteristic.
- [writeValue:forDescriptor:](cbperipheral/writevalue%28__for_%29.md): Writes the value of a characteristic descriptor.
- [maximumWriteValueLengthForType:](cbperipheral/maximumwritevaluelength%28for_%29.md): The maximum amount of data, in bytes, you can send to a characteristic in a single write type.
- [CBCharacteristicWriteType](cbcharacteristicwritetype.md): Values representing the possible write types to a characteristic’s value.

### Setting Notifications for a Characteristic’s Value

- [setNotifyValue:forCharacteristic:](cbperipheral/setnotifyvalue%28__for_%29.md): Sets notifications or indications for the value of a specified characteristic.

### Monitoring a Peripheral’s Connection State

- [state](cbperipheral/state.md): The connection state of the peripheral.
- [CBPeripheralState](cbperipheralstate.md): Values representing the connection state of a peripheral.
- [canSendWriteWithoutResponse](cbperipheral/cansendwritewithoutresponse.md): A Boolean value that indicates whether the remote device can send a write without a response.

### Accessing a Peripheral’s Signal Strength

- [readRSSI](cbperipheral/readrssi%28%29.md): Retrieves the current RSSI value for the peripheral while connected to the central manager.
- [RSSI](cbperipheral/rssi.md): Deprecated. The Received Signal Strength Indicator (RSSI), in decibels, of the peripheral.

### Working with L2CAP Channels

- [openL2CAPChannel:](cbperipheral/openl2capchannel%28__%29.md): Attempts to open an L2CAP channel to the peripheral using the supplied Protocol/Service Multiplexer (PSM).
- [CBL2CAPChannel](cbl2capchannel.md): A live L2CAP connection to a remote device.
- [CBL2CAPPSM](cbl2cappsm.md): The type of PSM identifiers.

### Working with Apple Notification Center Service (ANCS)

- [ancsAuthorized](cbperipheral/ancsauthorized.md): A Boolean value that indicates if the remote device has authorization to receive data over ANCS protocol.

### Instance Methods

- [cancelChannelSoundingSession](cbperipheral/cancelchannelsoundingsession%28%29.md)
- [startChannelSoundingSession:](cbperipheral/startchannelsoundingsession%28__%29.md)

## Relationships

### Inherits From

- [CBPeer](cbpeer.md)

## See Also

### Peripherals

- [CBPeripheralDelegate](cbperipheraldelegate.md): A protocol that provides updates on the use of a peripheral’s services.
- [CBPeripheralManager](cbperipheralmanager.md): An object that manages and advertises peripheral services exposed by this app.
- [CBPeripheralManagerDelegate](cbperipheralmanagerdelegate.md): A protocol that provides updates for local peripheral state and interactions with remote central devices.
- [CBAttribute](cbattribute.md): A representation of common aspects of services offered by a peripheral.
- [CBAttributePermissions](cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.
