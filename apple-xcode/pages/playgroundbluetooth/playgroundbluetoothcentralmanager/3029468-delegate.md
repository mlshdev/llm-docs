> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothcentralmanager/3029468-delegate](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanager/3029468-delegate)

# delegate

**Framework:** Playground Bluetooth  
**Kind:** Instance Property  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

A delegate that can receive messages from the central manager by adopting the [PlaygroundBluetoothCentralManagerDelegate](../playgroundbluetoothcentralmanagerdelegate.md) protocol.

## Declaration

```swift
weak var delegate: PlaygroundBluetoothCentralManagerDelegate?
```

## See Also

### Configuring Central Managers

- [init(services:queue:)](3029470-init.md): Creates a central manager that supports communicating with Bluetooth peripherals.
- [scanning](3029471-scanning.md): A Boolean value that determines whether the central manager is scanning for peripherals.
