> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanager](https://developer.apple.com/documentation/corebluetooth/cbcentralmanager)

# CBCentralManager (Swift)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that scans for, discovers, connects to, and manages peripherals.

## Declaration

```swift
class CBCentralManager
```

<a id="overview"></a>

## Overview

[CBCentralManager](cbcentralmanager.md) objects manage discovered or connected remote peripheral devices (represented by [CBPeripheral](cbperipheral.md) objects), including scanning for, discovering, and connecting to advertising peripherals.

Before calling the [CBCentralManager](cbcentralmanager.md) methods, set the state of the central manager object to powered on, as indicated by the [CBCentralManagerState.poweredOn](cbcentralmanagerstate/poweredon.md) constant. This state indicates that the central device (your iPhone or iPad, for instance) supports Bluetooth low energy and that Bluetooth is on and available for use.

## Topics

### Initializing a Central Manager

- [init()](cbcentralmanager/init%28%29.md): Initializes the central manager without a delegate.
- [init(delegate:queue:)](cbcentralmanager/init%28delegate_queue_%29.md): Initializes the central manager with a specified delegate and dispatch queue.
- [init(delegate:queue:options:)](cbcentralmanager/init%28delegate_queue_options_%29.md): Initializes the central manager with specified delegate, dispatch queue, and initialization options.
- [Central Manager Initialization Options](central-manager-initialization-options.md): Keys used to pass options when initializing a central manager.
- [Central Manager State Restoration Options](central-manager-state-restoration-options.md): Restore central manager state in scene-based apps.

### Establishing or Canceling Connections with Peripherals

- [connect(\_:options:)](cbcentralmanager/connect%28__options_%29.md): Establishes a local connection to a peripheral.
- [Peripheral Connection Options](peripheral-connection-options.md): Keys used to pass options when connecting to a peripheral.
- [cancelPeripheralConnection(\_:)](cbcentralmanager/cancelperipheralconnection%28__%29.md): Cancels an active or pending local connection to a peripheral.

### Retrieving Lists of Peripherals

- [retrieveConnectedPeripherals(withServices:)](cbcentralmanager/retrieveconnectedperipherals%28withservices_%29.md): Returns a list of the peripherals connected to the system whose services match a given set of criteria.
- [retrievePeripherals(withIdentifiers:)](cbcentralmanager/retrieveperipherals%28withidentifiers_%29.md): Returns a list of known peripherals by their identifiers.

### Scanning or Stopping Scans of Peripherals

- [scanForPeripherals(withServices:options:)](cbcentralmanager/scanforperipherals%28withservices_options_%29.md): Scans for peripherals that are advertising services.
- [Peripheral Scanning Options](peripheral-scanning-options.md): Keys used to pass options when scanning for peripherals.
- [stopScan()](cbcentralmanager/stopscan%28%29.md): Asks the central manager to stop scanning for peripherals.
- [isScanning](cbcentralmanager/isscanning.md): A Boolean value that indicates whether the central is currently scanning.

### Inspecting Feature Support

- [supports(\_:)](cbcentralmanager/supports%28__%29.md): Returns a Boolean that indicates whether the device supports a specific set of features.
- [CBCentralManager.Feature](cbcentralmanager/feature.md): An option set of device-specific features.

### Monitoring Properties

- [delegate](cbcentralmanager/delegate.md): The delegate object that you want to receive central manager events.

### Receiving Connection Events

- [registerForConnectionEvents(options:)](cbcentralmanager/registerforconnectionevents%28options_%29.md): Register for an event notification when the central manager makes a connection matching the given options.
- [Peripheral Connection Options](peripheral-connection-options.md): Keys used to pass options when connecting to a peripheral.
- [CBConnectionEvent](cbconnectionevent.md): A change to the connection state of a peer.
- [CBConnectionEventMatchingOption](cbconnectioneventmatchingoption.md): A set of options to use when registering for connection events.

### Deprecated

- [CBCentralManagerState](cbcentralmanagerstate.md): Deprecated. Values that represent the current state of a central manager object.

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

### Centrals

- [CBCentral](cbcentral.md): A remote device connected to a local app, which is acting as a peripheral.
- [CBCentralManagerDelegate](cbcentralmanagerdelegate.md): A protocol that provides updates for the discovery and management of peripheral devices.

# CBCentralManager (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that scans for, discovers, connects to, and manages peripherals.

## Declaration

```objectivec
@interface CBCentralManager : CBManager
```

<a id="overview"></a>

## Overview

[CBCentralManager](cbcentralmanager.md) objects manage discovered or connected remote peripheral devices (represented by [CBPeripheral](cbperipheral.md) objects), including scanning for, discovering, and connecting to advertising peripherals.

Before calling the [CBCentralManager](cbcentralmanager.md) methods, set the state of the central manager object to powered on, as indicated by the [CBCentralManagerStatePoweredOn](cbcentralmanagerstate/poweredon.md) constant. This state indicates that the central device (your iPhone or iPad, for instance) supports Bluetooth low energy and that Bluetooth is on and available for use.

## Topics

### Initializing a Central Manager

- [init](cbcentralmanager/init%28%29.md): Initializes the central manager without a delegate.
- [initWithDelegate:queue:](cbcentralmanager/init%28delegate_queue_%29.md): Initializes the central manager with a specified delegate and dispatch queue.
- [initWithDelegate:queue:options:](cbcentralmanager/init%28delegate_queue_options_%29.md): Initializes the central manager with specified delegate, dispatch queue, and initialization options.
- [Central Manager Initialization Options](central-manager-initialization-options.md): Keys used to pass options when initializing a central manager.
- [Central Manager State Restoration Options](central-manager-state-restoration-options.md): Restore central manager state in scene-based apps.

### Establishing or Canceling Connections with Peripherals

- [connectPeripheral:options:](cbcentralmanager/connect%28__options_%29.md): Establishes a local connection to a peripheral.
- [Peripheral Connection Options](peripheral-connection-options.md): Keys used to pass options when connecting to a peripheral.
- [cancelPeripheralConnection:](cbcentralmanager/cancelperipheralconnection%28__%29.md): Cancels an active or pending local connection to a peripheral.

### Retrieving Lists of Peripherals

- [retrieveConnectedPeripheralsWithServices:](cbcentralmanager/retrieveconnectedperipherals%28withservices_%29.md): Returns a list of the peripherals connected to the system whose services match a given set of criteria.
- [retrievePeripheralsWithIdentifiers:](cbcentralmanager/retrieveperipherals%28withidentifiers_%29.md): Returns a list of known peripherals by their identifiers.

### Scanning or Stopping Scans of Peripherals

- [scanForPeripheralsWithServices:options:](cbcentralmanager/scanforperipherals%28withservices_options_%29.md): Scans for peripherals that are advertising services.
- [Peripheral Scanning Options](peripheral-scanning-options.md): Keys used to pass options when scanning for peripherals.
- [stopScan](cbcentralmanager/stopscan%28%29.md): Asks the central manager to stop scanning for peripherals.
- [isScanning](cbcentralmanager/isscanning.md): A Boolean value that indicates whether the central is currently scanning.

### Inspecting Feature Support

- [supportsFeatures:](cbcentralmanager/supports%28__%29.md): Returns a Boolean that indicates whether the device supports a specific set of features.
- [CBCentralManagerFeature](cbcentralmanager/feature.md): An option set of device-specific features.

### Monitoring Properties

- [delegate](cbcentralmanager/delegate.md): The delegate object that you want to receive central manager events.

### Receiving Connection Events

- [registerForConnectionEventsWithOptions:](cbcentralmanager/registerforconnectionevents%28options_%29.md): Register for an event notification when the central manager makes a connection matching the given options.
- [Peripheral Connection Options](peripheral-connection-options.md): Keys used to pass options when connecting to a peripheral.
- [CBConnectionEvent](cbconnectionevent.md): A change to the connection state of a peer.
- [CBConnectionEventMatchingOption](cbconnectioneventmatchingoption.md): A set of options to use when registering for connection events.

### Deprecated

- [CBCentralManagerState](cbcentralmanagerstate.md): Deprecated. Values that represent the current state of a central manager object.

## Relationships

### Inherits From

- [CBManager](cbmanager.md)

## See Also

### Centrals

- [CBCentral](cbcentral.md): A remote device connected to a local app, which is acting as a peripheral.
- [CBCentralManagerDelegate](cbcentralmanagerdelegate.md): A protocol that provides updates for the discovery and management of peripheral devices.
