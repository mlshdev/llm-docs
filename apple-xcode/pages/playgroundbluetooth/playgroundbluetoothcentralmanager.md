> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothcentralmanager](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanager)

# PlaygroundBluetoothCentralManager

**Framework:** Playground Bluetooth  
**Kind:** Class  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

A streamlined interface for connecting the central manager for the current playground page to nearby Bluetooth peripherals.

## Declaration

```swift
class PlaygroundBluetoothCentralManager
```

## Topics

### Configuring Central Managers

- [init(services:queue:)](playgroundbluetoothcentralmanager/3029470-init.md): Creates a central manager that supports communicating with Bluetooth peripherals.
- [delegate](playgroundbluetoothcentralmanager/3029468-delegate.md): A delegate that can receive messages from the central manager by adopting the [PlaygroundBluetoothCentralManagerDelegate](playgroundbluetoothcentralmanagerdelegate.md) protocol.
- [scanning](playgroundbluetoothcentralmanager/3029471-scanning.md): A Boolean value that determines whether the central manager is scanning for peripherals.

### Connecting Peripherals

- [connect(to:timeout:callback:)](playgroundbluetoothcentralmanager/3029464-connect.md): Attempts to connect the central manager to the specified peripheral.
- [connect(toPeripheralWithUUID:timeout:callback:)](playgroundbluetoothcentralmanager/3029465-connect.md): Attempts to connect the central manager to a peripheral with the specified unique identifier.
- [connectToLastConnectedPeripheral(timeout:callback:)](playgroundbluetoothcentralmanager/3029466-connecttolastconnectedperipheral.md): Attempts to reconnect the central manager to the most recently connected peripheral.
- [PlaygroundBluetoothCentralManager.ConnectionError](playgroundbluetoothcentralmanager/connectionerror.md): The errors you may encounter when connecting a peripheral to the central manager for the current playground page.

### Disconnecting Peripherals

- [disconnect(from:)](playgroundbluetoothcentralmanager/3029469-disconnect.md): Disconnects the central manager from the specified, connected peripheral.

### Inspecting Central Managers

- [connectedPeripherals](playgroundbluetoothcentralmanager/3029467-connectedperipherals.md): An array of the peripherals currently connected to the central manager.
- [state](playgroundbluetoothcentralmanager/3029472-state.md): The current state of the central manager.

## See Also

### Peripheral Connection

- [Connecting to Bluetooth Peripherals in Swift Playgrounds](connecting_to_bluetooth_peripherals_in_swift_playgrounds.md): Scan for peripherals and display them in your playground's live view.
- [PlaygroundBluetoothCentralManagerDelegate](playgroundbluetoothcentralmanagerdelegate.md): A delegate you use to respond to peripheral discovery and manage the lifecycle of connections.
