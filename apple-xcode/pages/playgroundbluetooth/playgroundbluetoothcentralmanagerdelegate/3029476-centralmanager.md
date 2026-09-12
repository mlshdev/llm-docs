> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate/3029476-centralmanager](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate/3029476-centralmanager)

# centralManager(\_:didDisconnectFrom:error:)

**Framework:** Playground Bluetooth  
**Kind:** Instance Method  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

Tells the delegate that the central manager disconnected from a peripheral.

## Declaration

```swift
func centralManager(_ centralManager: PlaygroundBluetoothCentralManager, didDisconnectFrom peripheral: CBPeripheral, error: Error?)
```

## Parameters

- `centralManager`: The central manager that disconnected from a peripheral.
- `peripheral`: The peripheral that the central manager disconnected from.
- `error`: An error which, if present, describes the reason for the connection failure. The absence of an error indicates that the disconnection was requested via the manager’s [disconnect(from:)](../playgroundbluetoothcentralmanager/3029469-disconnect.md) method.

## Default Implementations

### PlaygroundBluetoothCentralManagerDelegate Implementations

- [centralManager(\_:didDisconnectFrom:error:)](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanagerdelegate/3029477-centralmanager): Tells the delegate that the central manager disconnected from a peripheral.

## See Also

### Handling Disconnects

- [centralManager(\_:didFailToConnectTo:error:)](3029480-centralmanager.md): Tells the delegate that the central manager failed to establish a connection with a peripheral.
