> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate/3029480-centralmanager](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate/3029480-centralmanager)

# centralManager(\_:didFailToConnectTo:error:)

**Framework:** Playground Bluetooth  
**Kind:** Instance Method  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

Tells the delegate that the central manager failed to establish a connection with a peripheral.

## Declaration

```swift
func centralManager(_ centralManager: PlaygroundBluetoothCentralManager, didFailToConnectTo peripheral: CBPeripheral, error: Error?)
```

## Parameters

- `centralManager`: The central manager that failed to make the new connection.
- `peripheral`: The peripheral that the central manager couldn’t connect to.
- `error`: An error which describes the reason for the connection failure.

## Default Implementations

### PlaygroundBluetoothCentralManagerDelegate Implementations

- [centralManager(\_:didFailToConnectTo:error:)](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate/3029481-centralmanager): Tells the delegate that the central manager failed to establish a connection with a peripheral.

## See Also

### Handling Disconnects

- [centralManager(\_:didDisconnectFrom:error:)](3029476-centralmanager.md): Tells the delegate that the central manager disconnected from a peripheral.
