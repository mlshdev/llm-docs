> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth](https://developer.apple.com/documentation/corebluetooth)

# Core Bluetooth (Swift)

**Framework:** Core Bluetooth  
**Kind:** Framework  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Communicate with Bluetooth low energy and BR/EDR (“Classic”) Devices.

<a id="overview"></a>

## Overview

The Core Bluetooth framework provides the classes needed for your apps to communicate with Bluetooth-equipped low energy (LE) and Basic Rate / Enhanced Data Rate (BR/EDR) wireless technology.

Don’t subclass any of the classes of the Core Bluetooth framework. Overriding these classes isn’t supported and results in undefined behavior.

Core Bluetooth background execution modes aren’t supported in iPad apps running on macOS.

In iOS 26 and later, your app can continue certain activities in the background if the app starts a Live Activity before it goes to the background. If your app has an instantiated [CBManager](corebluetooth/cbmanager.md) and starts a Live Activity, it can use the same privileges while in the background that it uses when it is in the foreground. This means activities like scanning without providing service UUID’s and scanning with duplicates filter disabled will be allowed while in the background. For more information about creating Live Activities, see [ActivityKit](https://developer.apple.com/documentation/ActivityKit).

> **Important**

>  Your app will crash if its `Info.plist` doesn’t include usage description keys for the types of data it needs to access. To access Core Bluetooth APIs on apps linked on or after iOS 13, include the [NSBluetoothAlwaysUsageDescription](bundleresources/information-property-list/nsbluetoothalwaysusagedescription.md) key. In iOS 12 and earlier, include [NSBluetoothPeripheralUsageDescription](bundleresources/information-property-list/nsbluetoothperipheralusagedescription.md) to access Bluetooth peripheral data.

## Topics

### Centrals

- [CBCentral](corebluetooth/cbcentral.md): A remote device connected to a local app, which is acting as a peripheral.
- [CBCentralManager](corebluetooth/cbcentralmanager.md): An object that scans for, discovers, connects to, and manages peripherals.
- [CBCentralManagerDelegate](corebluetooth/cbcentralmanagerdelegate.md): A protocol that provides updates for the discovery and management of peripheral devices.

### Peripherals

- [CBPeripheral](corebluetooth/cbperipheral.md): A remote peripheral device.
- [CBPeripheralDelegate](corebluetooth/cbperipheraldelegate.md): A protocol that provides updates on the use of a peripheral’s services.
- [CBPeripheralManager](corebluetooth/cbperipheralmanager.md): An object that manages and advertises peripheral services exposed by this app.
- [CBPeripheralManagerDelegate](corebluetooth/cbperipheralmanagerdelegate.md): A protocol that provides updates for local peripheral state and interactions with remote central devices.
- [CBAttribute](corebluetooth/cbattribute.md): A representation of common aspects of services offered by a peripheral.
- [CBAttributePermissions](corebluetooth/cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.

### Data Transfer

- [Transferring Data Between Bluetooth Low Energy Devices](corebluetooth/transferring-data-between-bluetooth-low-energy-devices.md): Create a Bluetooth low energy central and peripheral device, and allow them to discover each other and exchange data.

### Channel Sounding

- [Measuring distance between devices using Channel Sounding](corebluetooth/measuring-distance-between-devices-using-channel-sounding.md): Measure the distance between two Bluetooth Low Energy devices in real time with Channel Sounding.
- [CBChannelSoundingProcedureResults](corebluetooth/cbchannelsoundingprocedureresults.md)
- [CBChannelSoundingSessionConfiguration](corebluetooth/cbchannelsoundingsessionconfiguration.md)
- [CBUUIDCharacteristicObservationScheduleString](corebluetooth/cbuuidcharacteristicobservationschedulestring.md)

### Services

- [CBService](corebluetooth/cbservice.md): A collection of data and associated behaviors that accomplish a function or feature of a device.
- [CBMutableService](corebluetooth/cbmutableservice.md): A service with writeable property values.
- [CBCharacteristic](corebluetooth/cbcharacteristic.md): A characteristic of a remote peripheral’s service.
- [CBMutableCharacteristic](corebluetooth/cbmutablecharacteristic.md): A characteristic of a local peripheral’s service.
- [CBDescriptor](corebluetooth/cbdescriptor.md): An object that provides further information about a remote peripheral’s characteristic.
- [CBMutableDescriptor](corebluetooth/cbmutabledescriptor.md): An object that provides additional information about a local peripheral’s characteristic.

### Supporting Types

- [CBManager](corebluetooth/cbmanager.md): The abstract base class that manages central and peripheral objects.
- [CBATTRequest](corebluetooth/cbattrequest.md): A request that uses the Attribute Protocol (ATT).
- [CBPeer](corebluetooth/cbpeer.md): An object that represents a remote device.
- [CBUUID](corebluetooth/cbuuid.md): A universally unique identifier, as defined by Bluetooth standards.

### Bluetooth Classic Support

- [Using Core Bluetooth Classic](corebluetooth/using-core-bluetooth-classic.md): Discover and communicate with a Bluetooth Classic device by using the Core Bluetooth APIs.

### Errors

- [CBError](corebluetooth/cberror-swift.struct.md): An error that Core Bluetooth returns during Bluetooth transactions.
- [CBErrorDomain](corebluetooth/cberrordomain.md): The domain for Core Bluetooth errors.
- [CBError.Code](corebluetooth/cberror-swift.struct/code.md): The codes for errors that Core Bluetooth returns during Bluetooth transactions.
- [CBATTError](corebluetooth/cbatterror-swift.struct.md): An error that Core Bluetooth returns while using Attribute Protocol (ATT).
- [CBATTErrorDomain](corebluetooth/cbatterrordomain.md): The domain for Core Bluetooth ATT errors.
- [CBATTError.Code](corebluetooth/cbatterror-swift.struct/code.md): The possible errors returned by a GATT server (a remote peripheral) during Bluetooth low energy ATT transactions.
- [CBATTError](corebluetooth/cbatterror-swift.struct.md): An error that Core Bluetooth returns while using Attribute Protocol (ATT).

### Deprecated

- [CBCentralManagerState](corebluetooth/cbcentralmanagerstate.md): Deprecated. Values that represent the current state of a central manager object.
- [CBPeripheralManagerState](corebluetooth/cbperipheralmanagerstate.md): Deprecated. Values that represent the current state of the peripheral manager.
- [Deprecated Constants](corebluetooth/deprecated-constants.md): This document describes the constants found in the Core Bluetooth framework.

## See Also

### Related Documentation

- [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257)

# Core Bluetooth (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Framework  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Communicate with Bluetooth low energy and BR/EDR (“Classic”) Devices.

<a id="overview"></a>

## Overview

The Core Bluetooth framework provides the classes needed for your apps to communicate with Bluetooth-equipped low energy (LE) and Basic Rate / Enhanced Data Rate (BR/EDR) wireless technology.

Don’t subclass any of the classes of the Core Bluetooth framework. Overriding these classes isn’t supported and results in undefined behavior.

Core Bluetooth background execution modes aren’t supported in iPad apps running on macOS.

In iOS 26 and later, your app can continue certain activities in the background if the app starts a Live Activity before it goes to the background. If your app has an instantiated [CBManager](corebluetooth/cbmanager.md) and starts a Live Activity, it can use the same privileges while in the background that it uses when it is in the foreground. This means activities like scanning without providing service UUID’s and scanning with duplicates filter disabled will be allowed while in the background. For more information about creating Live Activities, see [ActivityKit](https://developer.apple.com/documentation/ActivityKit).

> **Important**

>  Your app will crash if its `Info.plist` doesn’t include usage description keys for the types of data it needs to access. To access Core Bluetooth APIs on apps linked on or after iOS 13, include the [NSBluetoothAlwaysUsageDescription](bundleresources/information-property-list/nsbluetoothalwaysusagedescription.md) key. In iOS 12 and earlier, include [NSBluetoothPeripheralUsageDescription](bundleresources/information-property-list/nsbluetoothperipheralusagedescription.md) to access Bluetooth peripheral data.

## Topics

### Centrals

- [CBCentral](corebluetooth/cbcentral.md): A remote device connected to a local app, which is acting as a peripheral.
- [CBCentralManager](corebluetooth/cbcentralmanager.md): An object that scans for, discovers, connects to, and manages peripherals.
- [CBCentralManagerDelegate](corebluetooth/cbcentralmanagerdelegate.md): A protocol that provides updates for the discovery and management of peripheral devices.

### Peripherals

- [CBPeripheral](corebluetooth/cbperipheral.md): A remote peripheral device.
- [CBPeripheralDelegate](corebluetooth/cbperipheraldelegate.md): A protocol that provides updates on the use of a peripheral’s services.
- [CBPeripheralManager](corebluetooth/cbperipheralmanager.md): An object that manages and advertises peripheral services exposed by this app.
- [CBPeripheralManagerDelegate](corebluetooth/cbperipheralmanagerdelegate.md): A protocol that provides updates for local peripheral state and interactions with remote central devices.
- [CBAttribute](corebluetooth/cbattribute.md): A representation of common aspects of services offered by a peripheral.
- [CBAttributePermissions](corebluetooth/cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.

### Channel Sounding

- [CBChannelSoundingProcedureResults](corebluetooth/cbchannelsoundingprocedureresults.md)
- [CBChannelSoundingSessionConfiguration](corebluetooth/cbchannelsoundingsessionconfiguration.md)
- [CBUUIDCharacteristicObservationScheduleString](corebluetooth/cbuuidcharacteristicobservationschedulestring.md)

### Services

- [CBService](corebluetooth/cbservice.md): A collection of data and associated behaviors that accomplish a function or feature of a device.
- [CBMutableService](corebluetooth/cbmutableservice.md): A service with writeable property values.
- [CBCharacteristic](corebluetooth/cbcharacteristic.md): A characteristic of a remote peripheral’s service.
- [CBMutableCharacteristic](corebluetooth/cbmutablecharacteristic.md): A characteristic of a local peripheral’s service.
- [CBDescriptor](corebluetooth/cbdescriptor.md): An object that provides further information about a remote peripheral’s characteristic.
- [CBMutableDescriptor](corebluetooth/cbmutabledescriptor.md): An object that provides additional information about a local peripheral’s characteristic.

### Supporting Types

- [CBManager](corebluetooth/cbmanager.md): The abstract base class that manages central and peripheral objects.
- [CBATTRequest](corebluetooth/cbattrequest.md): A request that uses the Attribute Protocol (ATT).
- [CBPeer](corebluetooth/cbpeer.md): An object that represents a remote device.
- [CBUUID](corebluetooth/cbuuid.md): A universally unique identifier, as defined by Bluetooth standards.

### Bluetooth Classic Support

- [Using Core Bluetooth Classic](corebluetooth/using-core-bluetooth-classic.md): Discover and communicate with a Bluetooth Classic device by using the Core Bluetooth APIs.

### Errors

- [CBErrorDomain](corebluetooth/cberrordomain.md): The domain for Core Bluetooth errors.
- [CBError](corebluetooth/cberror-swift.struct/code.md): The codes for errors that Core Bluetooth returns during Bluetooth transactions.
- [CBATTErrorDomain](corebluetooth/cbatterrordomain.md): The domain for Core Bluetooth ATT errors.
- [CBATTError](corebluetooth/cbatterror-swift.struct/code.md): The possible errors returned by a GATT server (a remote peripheral) during Bluetooth low energy ATT transactions.

### Deprecated

- [CBCentralManagerState](corebluetooth/cbcentralmanagerstate.md): Deprecated. Values that represent the current state of a central manager object.
- [CBPeripheralManagerState](corebluetooth/cbperipheralmanagerstate.md): Deprecated. Values that represent the current state of the peripheral manager.
- [Deprecated Constants](corebluetooth/deprecated-constants.md): This document describes the constants found in the Core Bluetooth framework.

### Macros

- [CB_CM_API_AVAILABLE](corebluetooth/cb_cm_api_available.md)
- [CB_EXTERN](corebluetooth/cb_extern.md)
- [CB_EXTERN_CLASS](corebluetooth/cb_extern_class.md)
- [CB_PM_API_AVAILABLE](corebluetooth/cb_pm_api_available.md)

### Enumerations

- [CBChannelSoundingSessionConfigurationRole](corebluetooth/cbchannelsoundingsessionconfiguration/role-swift.enum.md)

## See Also

### Related Documentation

- [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257)
