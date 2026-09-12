> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate)

# CBPeripheralDelegate (Swift)

**Framework:** Core Bluetooth  
**Kind:** Protocol  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A protocol that provides updates on the use of a peripheral’s services.

## Declaration

```swift
protocol CBPeripheralDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The delegate of a [CBPeripheral](cbperipheral.md) object must adopt the [CBPeripheralDelegate](cbperipheraldelegate.md) protocol. The delegate uses this protocol’s methods to monitor the discovery, exploration, and interaction of a remote peripheral’s services and properties. This protocol doesn’t have any required methods.

## Topics

### Discovering Services

- [peripheral(\_:didDiscoverServices:)](cbperipheraldelegate/peripheral%28__diddiscoverservices_%29.md): Tells the delegate that peripheral service discovery succeeded.
- [peripheral(\_:didDiscoverIncludedServicesFor:error:)](cbperipheraldelegate/peripheral%28__diddiscoverincludedservicesfor_error_%29.md): Tells the delegate that discovering included services within the indicated service completed.

### Discovering Characteristics and their Descriptors

- [peripheral(\_:didDiscoverCharacteristicsFor:error:)](cbperipheraldelegate/peripheral%28__diddiscovercharacteristicsfor_error_%29.md): Tells the delegate that the peripheral found characteristics for a service.
- [peripheral(\_:didDiscoverDescriptorsFor:error:)](cbperipheraldelegate/peripheral%28__diddiscoverdescriptorsfor_error_%29.md): Tells the delegate that the peripheral found descriptors for a characteristic.

### Retrieving Characteristic and Descriptor Values

- [peripheral(\_:didUpdateValueFor:error:)](cbperipheraldelegate/peripheral%28__didupdatevaluefor_error_%29-1xyna.md): Tells the delegate that retrieving the specified characteristic’s value succeeded, or that the characteristic’s value changed.
- [peripheral(\_:didUpdateValueFor:error:)](cbperipheraldelegate/peripheral%28__didupdatevaluefor_error_%29-1t3wm.md): Tells the delegate that retrieving a specified characteristic descriptor’s value succeeded.

### Writing Characteristic and Descriptor Values

- [peripheral(\_:didWriteValueFor:error:)](cbperipheraldelegate/peripheral%28__didwritevaluefor_error_%29-4f5ea.md): Tells the delegate that the peripheral successfully set a value for the characteristic.
- [peripheral(\_:didWriteValueFor:error:)](cbperipheraldelegate/peripheral%28__didwritevaluefor_error_%29-1ybl3.md): Tells the delegate that the peripheral successfully set a value for the descriptor.
- [peripheralIsReady(toSendWriteWithoutResponse:)](cbperipheraldelegate/peripheralisready%28tosendwritewithoutresponse_%29.md): Tells the delegate that a peripheral is again ready to send characteristic updates.

### Managing Notifications for a Characteristic’s Value

- [peripheral(\_:didUpdateNotificationStateFor:error:)](cbperipheraldelegate/peripheral%28__didupdatenotificationstatefor_error_%29.md): Tells the delegate that the peripheral received a request to start or stop providing notifications for a specified characteristic’s value.

### Retrieving a Peripheral’s RSSI Data

- [peripheral(\_:didReadRSSI:error:)](cbperipheraldelegate/peripheral%28__didreadrssi_error_%29.md): Tells the delegate that retrieving the value of the peripheral’s current Received Signal Strength Indicator (RSSI) succeeded.
- [peripheralDidUpdateRSSI(\_:error:)](cbperipheraldelegate/peripheraldidupdaterssi%28__error_%29.md): Deprecated. Tells the delegate that retrieving the value of the peripheral’s current Received Signal Strength Indicator (RSSI) succeeded.

### Monitoring Changes to a Peripheral’s Name or Services

- [peripheralDidUpdateName(\_:)](cbperipheraldelegate/peripheraldidupdatename%28__%29.md): Tells the delegate that a peripheral’s name changed.
- [peripheral(\_:didModifyServices:)](cbperipheraldelegate/peripheral%28__didmodifyservices_%29.md): Tells the delegate that a peripheral’s services changed.

### Monitoring L2CAP Channels

- [peripheral(\_:didOpen:error:)](cbperipheraldelegate/peripheral%28__didopen_error_%29.md): Delivers the result of an attempt to open an L2CAP channel.

### Instance Methods

- [peripheral(\_:didCompleteChannelSoundingSession:)](cbperipheraldelegate/peripheral%28__didcompletechannelsoundingsession_%29.md)
- [peripheral(\_:didReceive:error:)](cbperipheraldelegate/peripheral%28__didreceive_error_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Peripherals

- [CBPeripheral](cbperipheral.md): A remote peripheral device.
- [CBPeripheralManager](cbperipheralmanager.md): An object that manages and advertises peripheral services exposed by this app.
- [CBPeripheralManagerDelegate](cbperipheralmanagerdelegate.md): A protocol that provides updates for local peripheral state and interactions with remote central devices.
- [CBAttribute](cbattribute.md): A representation of common aspects of services offered by a peripheral.
- [CBAttributePermissions](cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.

# CBPeripheralDelegate (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Protocol  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A protocol that provides updates on the use of a peripheral’s services.

## Declaration

```objectivec
@protocol CBPeripheralDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The delegate of a [CBPeripheral](cbperipheral.md) object must adopt the [CBPeripheralDelegate](cbperipheraldelegate.md) protocol. The delegate uses this protocol’s methods to monitor the discovery, exploration, and interaction of a remote peripheral’s services and properties. This protocol doesn’t have any required methods.

## Topics

### Discovering Services

- [peripheral:didDiscoverServices:](cbperipheraldelegate/peripheral%28__diddiscoverservices_%29.md): Tells the delegate that peripheral service discovery succeeded.
- [peripheral:didDiscoverIncludedServicesForService:error:](cbperipheraldelegate/peripheral%28__diddiscoverincludedservicesfor_error_%29.md): Tells the delegate that discovering included services within the indicated service completed.

### Discovering Characteristics and their Descriptors

- [peripheral:didDiscoverCharacteristicsForService:error:](cbperipheraldelegate/peripheral%28__diddiscovercharacteristicsfor_error_%29.md): Tells the delegate that the peripheral found characteristics for a service.
- [peripheral:didDiscoverDescriptorsForCharacteristic:error:](cbperipheraldelegate/peripheral%28__diddiscoverdescriptorsfor_error_%29.md): Tells the delegate that the peripheral found descriptors for a characteristic.

### Retrieving Characteristic and Descriptor Values

- [peripheral:didUpdateValueForCharacteristic:error:](cbperipheraldelegate/peripheral%28__didupdatevaluefor_error_%29-1xyna.md): Tells the delegate that retrieving the specified characteristic’s value succeeded, or that the characteristic’s value changed.
- [peripheral:didUpdateValueForDescriptor:error:](cbperipheraldelegate/peripheral%28__didupdatevaluefor_error_%29-1t3wm.md): Tells the delegate that retrieving a specified characteristic descriptor’s value succeeded.

### Writing Characteristic and Descriptor Values

- [peripheral:didWriteValueForCharacteristic:error:](cbperipheraldelegate/peripheral%28__didwritevaluefor_error_%29-4f5ea.md): Tells the delegate that the peripheral successfully set a value for the characteristic.
- [peripheral:didWriteValueForDescriptor:error:](cbperipheraldelegate/peripheral%28__didwritevaluefor_error_%29-1ybl3.md): Tells the delegate that the peripheral successfully set a value for the descriptor.
- [peripheralIsReadyToSendWriteWithoutResponse:](cbperipheraldelegate/peripheralisready%28tosendwritewithoutresponse_%29.md): Tells the delegate that a peripheral is again ready to send characteristic updates.

### Managing Notifications for a Characteristic’s Value

- [peripheral:didUpdateNotificationStateForCharacteristic:error:](cbperipheraldelegate/peripheral%28__didupdatenotificationstatefor_error_%29.md): Tells the delegate that the peripheral received a request to start or stop providing notifications for a specified characteristic’s value.

### Retrieving a Peripheral’s RSSI Data

- [peripheral:didReadRSSI:error:](cbperipheraldelegate/peripheral%28__didreadrssi_error_%29.md): Tells the delegate that retrieving the value of the peripheral’s current Received Signal Strength Indicator (RSSI) succeeded.
- [peripheralDidUpdateRSSI:error:](cbperipheraldelegate/peripheraldidupdaterssi%28__error_%29.md): Deprecated. Tells the delegate that retrieving the value of the peripheral’s current Received Signal Strength Indicator (RSSI) succeeded.

### Monitoring Changes to a Peripheral’s Name or Services

- [peripheralDidUpdateName:](cbperipheraldelegate/peripheraldidupdatename%28__%29.md): Tells the delegate that a peripheral’s name changed.
- [peripheral:didModifyServices:](cbperipheraldelegate/peripheral%28__didmodifyservices_%29.md): Tells the delegate that a peripheral’s services changed.

### Monitoring L2CAP Channels

- [peripheral:didOpenL2CAPChannel:error:](cbperipheraldelegate/peripheral%28__didopen_error_%29.md): Delivers the result of an attempt to open an L2CAP channel.

### Instance Methods

- [peripheral:didCompleteChannelSoundingSession:](cbperipheraldelegate/peripheral%28__didcompletechannelsoundingsession_%29.md)
- [peripheral:didReceiveChannelSoundingProcedureResults:error:](cbperipheraldelegate/peripheral%28__didreceive_error_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Peripherals

- [CBPeripheral](cbperipheral.md): A remote peripheral device.
- [CBPeripheralManager](cbperipheralmanager.md): An object that manages and advertises peripheral services exposed by this app.
- [CBPeripheralManagerDelegate](cbperipheralmanagerdelegate.md): A protocol that provides updates for local peripheral state and interactions with remote central devices.
- [CBAttribute](cbattribute.md): A representation of common aspects of services offered by a peripheral.
- [CBAttributePermissions](cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.
