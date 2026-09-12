> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate/3029474-centralmanager](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate/3029474-centralmanager)

# centralManager(\_:didConnectTo:)

**Framework:** Playground Bluetooth  
**Kind:** Instance Method  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

Tells the delegate that the central manager established a connection with a peripheral.

## Declaration

```swift
func centralManager(_ centralManager: PlaygroundBluetoothCentralManager, didConnectTo peripheral: CBPeripheral)
```

## Parameters

- `centralManager`: The central manager that made the new connection.
- `peripheral`: The newly connected peripheral.

## Default Implementations

### PlaygroundBluetoothCentralManagerDelegate Implementations

- [centralManager(\_:didConnectTo:)](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate/3029475-centralmanager): Tells the delegate that the central manager established a connection with a peripheral.

## See Also

### Discovering Peripherals

- [centralManager(\_:didDiscover:withAdvertisementData:rssi:)](3029478-centralmanager.md): Tells the delegate that a peripheral has been discovered during scanning.
- [centralManager(\_:willConnectTo:)](3029482-centralmanager.md): Tells the delegate that the central manager is about to attempt to establish a connection with a peripheral.
