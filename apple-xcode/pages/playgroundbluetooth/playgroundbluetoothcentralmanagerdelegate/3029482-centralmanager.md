> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate/3029482-centralmanager](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate/3029482-centralmanager)

# centralManager(\_:willConnectTo:)

**Framework:** Playground Bluetooth  
**Kind:** Instance Method  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

Tells the delegate that the central manager is about to attempt to establish a connection with a peripheral.

## Declaration

```swift
func centralManager(_ centralManager: PlaygroundBluetoothCentralManager, willConnectTo peripheral: CBPeripheral)
```

## Parameters

- `centralManager`: The central manager attempting the new connection.
- `peripheral`: The peripheral that the central manager is attempting to connect to.

## Default Implementations

### PlaygroundBluetoothCentralManagerDelegate Implementations

- [centralManager(\_:willConnectTo:)](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate/3029483-centralmanager): Tells the delegate that the central manager is about to attempt to establish a connection with a peripheral.

## See Also

### Discovering Peripherals

- [centralManager(\_:didDiscover:withAdvertisementData:rssi:)](3029478-centralmanager.md): Tells the delegate that a peripheral has been discovered during scanning.
- [centralManager(\_:didConnectTo:)](3029474-centralmanager.md): Tells the delegate that the central manager established a connection with a peripheral.
