> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanagerdelegate](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerdelegate)

# CBCentralManagerDelegate (Swift)

**Framework:** Core Bluetooth  
**Kind:** Protocol  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A protocol that provides updates for the discovery and management of peripheral devices.

## Declaration

```swift
protocol CBCentralManagerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The [CBCentralManagerDelegate](cbcentralmanagerdelegate.md) protocol defines the methods that a delegate of a [CBCentralManager](cbcentralmanager.md) object must adopt. The optional methods of the protocol allow the delegate to monitor the discovery, connectivity, and retrieval of peripheral devices. The only required method is [centralManagerDidUpdateState(\_:)](cbcentralmanagerdelegate/centralmanagerdidupdatestate%28__%29.md); the central manager calls this when its state updates, thereby indicating the availability of the central manager.

## Topics

### Monitoring Connections with Peripherals

- [centralManager(\_:didConnect:)](cbcentralmanagerdelegate/centralmanager%28__didconnect_%29.md): Tells the delegate that the central manager connected to a peripheral.
- [centralManager(\_:didDisconnectPeripheral:error:)](cbcentralmanagerdelegate/centralmanager%28__diddisconnectperipheral_error_%29.md): Tells the delegate that the central manager disconnected from a peripheral.
- [centralManager(\_:didFailToConnect:error:)](cbcentralmanagerdelegate/centralmanager%28__didfailtoconnect_error_%29.md): Tells the delegate the central manager failed to create a connection with a peripheral.
- [centralManager(\_:connectionEventDidOccur:for:)](cbcentralmanagerdelegate/centralmanager%28__connectioneventdidoccur_for_%29.md): Tells the delegate that a connection event occurred which matches the registered options.

### Discovering and Retrieving Peripherals

- [centralManager(\_:didDiscover:advertisementData:rssi:)](cbcentralmanagerdelegate/centralmanager%28__diddiscover_advertisementdata_rssi_%29.md): Tells the delegate the central manager discovered a peripheral while scanning for devices.
- [Advertisement Data Retrieval Keys](advertisement-data-retrieval-keys.md): Keys used to specify items in a dictionary of peripheral advertisement data.

### Monitoring the Central Manager’s State

- [centralManagerDidUpdateState(\_:)](cbcentralmanagerdelegate/centralmanagerdidupdatestate%28__%29.md): Tells the delegate the central manager’s state updated.
- [centralManager(\_:willRestoreState:)](cbcentralmanagerdelegate/centralmanager%28__willrestorestate_%29.md): Tells the delegate the system is about to restore the central manager.

### Monitoring the Central Manager’s Authorization

- [centralManager(\_:didUpdateANCSAuthorizationFor:)](cbcentralmanagerdelegate/centralmanager%28__didupdateancsauthorizationfor_%29.md): Tells the delegate the authorization status changed for a ANCS-requiring connected peripheral.

### Instance Methods

- [centralManager(\_:didDisconnectPeripheral:timestamp:isReconnecting:error:)](cbcentralmanagerdelegate/centralmanager%28__diddisconnectperipheral_timestamp_isreconnecting_error_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Centrals

- [CBCentral](cbcentral.md): A remote device connected to a local app, which is acting as a peripheral.
- [CBCentralManager](cbcentralmanager.md): An object that scans for, discovers, connects to, and manages peripherals.

# CBCentralManagerDelegate (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Protocol  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A protocol that provides updates for the discovery and management of peripheral devices.

## Declaration

```objectivec
@protocol CBCentralManagerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The [CBCentralManagerDelegate](cbcentralmanagerdelegate.md) protocol defines the methods that a delegate of a [CBCentralManager](cbcentralmanager.md) object must adopt. The optional methods of the protocol allow the delegate to monitor the discovery, connectivity, and retrieval of peripheral devices. The only required method is [centralManagerDidUpdateState:](cbcentralmanagerdelegate/centralmanagerdidupdatestate%28__%29.md); the central manager calls this when its state updates, thereby indicating the availability of the central manager.

## Topics

### Monitoring Connections with Peripherals

- [centralManager:didConnectPeripheral:](cbcentralmanagerdelegate/centralmanager%28__didconnect_%29.md): Tells the delegate that the central manager connected to a peripheral.
- [centralManager:didDisconnectPeripheral:error:](cbcentralmanagerdelegate/centralmanager%28__diddisconnectperipheral_error_%29.md): Tells the delegate that the central manager disconnected from a peripheral.
- [centralManager:didFailToConnectPeripheral:error:](cbcentralmanagerdelegate/centralmanager%28__didfailtoconnect_error_%29.md): Tells the delegate the central manager failed to create a connection with a peripheral.
- [centralManager:connectionEventDidOccur:forPeripheral:](cbcentralmanagerdelegate/centralmanager%28__connectioneventdidoccur_for_%29.md): Tells the delegate that a connection event occurred which matches the registered options.

### Discovering and Retrieving Peripherals

- [centralManager:didDiscoverPeripheral:advertisementData:RSSI:](cbcentralmanagerdelegate/centralmanager%28__diddiscover_advertisementdata_rssi_%29.md): Tells the delegate the central manager discovered a peripheral while scanning for devices.
- [Advertisement Data Retrieval Keys](advertisement-data-retrieval-keys.md): Keys used to specify items in a dictionary of peripheral advertisement data.

### Monitoring the Central Manager’s State

- [centralManagerDidUpdateState:](cbcentralmanagerdelegate/centralmanagerdidupdatestate%28__%29.md): Tells the delegate the central manager’s state updated.
- [centralManager:willRestoreState:](cbcentralmanagerdelegate/centralmanager%28__willrestorestate_%29.md): Tells the delegate the system is about to restore the central manager.

### Monitoring the Central Manager’s Authorization

- [centralManager:didUpdateANCSAuthorizationForPeripheral:](cbcentralmanagerdelegate/centralmanager%28__didupdateancsauthorizationfor_%29.md): Tells the delegate the authorization status changed for a ANCS-requiring connected peripheral.

### Instance Methods

- [centralManager:didDisconnectPeripheral:timestamp:isReconnecting:error:](cbcentralmanagerdelegate/centralmanager%28__diddisconnectperipheral_timestamp_isreconnecting_error_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Centrals

- [CBCentral](cbcentral.md): A remote device connected to a local app, which is acting as a peripheral.
- [CBCentralManager](cbcentralmanager.md): An object that scans for, discovers, connects to, and manages peripherals.
