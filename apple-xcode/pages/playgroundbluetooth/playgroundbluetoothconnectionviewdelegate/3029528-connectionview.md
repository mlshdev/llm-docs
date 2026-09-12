> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothconnectionviewdelegate/3029528-connectionview](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionviewdelegate/3029528-connectionview)

# connectionView(\_:willDisconnectFrom:)

**Framework:** Playground Bluetooth  
**Kind:** Instance Method  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

Tells the delegate that a connected peripheral is about to be disconnected.

## Declaration

```swift
func connectionView(_ connectionView: PlaygroundBluetoothConnectionView, willDisconnectFrom peripheral: CBPeripheral)
```

## Parameters

- `connectionView`: The connection view currently displaying the connection to this peripheral.
- `peripheral`: The peripheral facing emminent disconnection.

## Default Implementations

### PlaygroundBluetoothConnectionViewDelegate Implementations

- [connectionView(\_:willDisconnectFrom:)](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionviewdelegate/3029529-connectionview): Tells the delegate that a connected peripheral is about to be disconnected.
