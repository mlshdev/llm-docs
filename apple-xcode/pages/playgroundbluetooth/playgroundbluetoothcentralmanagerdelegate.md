> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate)

# PlaygroundBluetoothCentralManagerDelegate

**Framework:** Playground Bluetooth  
**Kind:** Protocol  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

A delegate you use to respond to peripheral discovery and manage the lifecycle of connections.

## Declaration

```swift
protocol PlaygroundBluetoothCentralManagerDelegate : AnyObject
```

## Topics

### Discovering Peripherals

- [centralManager(\_:didDiscover:withAdvertisementData:rssi:)](playgroundbluetoothcentralmanagerdelegate/3029478-centralmanager.md): Tells the delegate that a peripheral has been discovered during scanning.
- [centralManager(\_:willConnectTo:)](playgroundbluetoothcentralmanagerdelegate/3029482-centralmanager.md): Tells the delegate that the central manager is about to attempt to establish a connection with a peripheral.
- [centralManager(\_:didConnectTo:)](playgroundbluetoothcentralmanagerdelegate/3029474-centralmanager.md): Tells the delegate that the central manager established a connection with a peripheral.

### Handling State Changes

- [centralManagerStateDidChange(\_:)](playgroundbluetoothcentralmanagerdelegate/3029484-centralmanagerstatedidchange.md): Tells the delegate that the state of the central manager has changed.

### Handling Disconnects

- [centralManager(\_:didDisconnectFrom:error:)](playgroundbluetoothcentralmanagerdelegate/3029476-centralmanager.md): Tells the delegate that the central manager disconnected from a peripheral.
- [centralManager(\_:didFailToConnectTo:error:)](playgroundbluetoothcentralmanagerdelegate/3029480-centralmanager.md): Tells the delegate that the central manager failed to establish a connection with a peripheral.

## See Also

### Peripheral Connection

- [Connecting to Bluetooth Peripherals in Swift Playgrounds](connecting_to_bluetooth_peripherals_in_swift_playgrounds.md): Scan for peripherals and display them in your playground's live view.
- [PlaygroundBluetoothCentralManager](playgroundbluetoothcentralmanager.md): A streamlined interface for connecting the central manager for the current playground page to nearby Bluetooth peripherals.
