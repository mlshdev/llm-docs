> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate/3029478-centralmanager](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate/3029478-centralmanager)

# centralManager(\_:didDiscover:withAdvertisementData:rssi:)

**Framework:** Playground Bluetooth  
**Kind:** Instance Method  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

Tells the delegate that a peripheral has been discovered during scanning.

## Declaration

```swift
func centralManager(_ centralManager: PlaygroundBluetoothCentralManager, didDiscover peripheral: CBPeripheral, withAdvertisementData advertisementData: [String : Any]?, rssi: Double)
```

## Parameters

- `centralManager`: The central manager providing this information.
- `peripheral`: The newly discovered peripheral.
- `advertisementData`: A dictionary containing any advertisement data that the peripheral provides.
- `rssi`: The current received signal strength indicator of the peripheral in decibels.

## Default Implementations

### PlaygroundBluetoothCentralManagerDelegate Implementations

- [centralManager(\_:didDiscover:withAdvertisementData:rssi:)](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate/3029479-centralmanager): Tells the delegate that a peripheral has been discovered during scanning.

## See Also

### Discovering Peripherals

- [centralManager(\_:willConnectTo:)](3029482-centralmanager.md): Tells the delegate that the central manager is about to attempt to establish a connection with a peripheral.
- [centralManager(\_:didConnectTo:)](3029474-centralmanager.md): Tells the delegate that the central manager established a connection with a peripheral.
