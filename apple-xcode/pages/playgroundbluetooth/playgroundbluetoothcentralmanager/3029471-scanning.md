> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothcentralmanager/3029471-scanning](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanager/3029471-scanning)

# scanning

**Framework:** Playground Bluetooth  
**Kind:** Instance Property  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

A Boolean value that determines whether the central manager is scanning for peripherals.

## Declaration

```swift
var scanning: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to start scanning for peripherals. Upon discovering a peripheral, the central manager calls the delegate’s [centralManager(\_:didDiscover:withAdvertisementData:rssi:)](../playgroundbluetoothcentralmanagerdelegate/3029478-centralmanager.md) method.

## See Also

### Configuring Central Managers

- [init(services:queue:)](3029470-init.md): Creates a central manager that supports communicating with Bluetooth peripherals.
- [delegate](3029468-delegate.md): A delegate that can receive messages from the central manager by adopting the [PlaygroundBluetoothCentralManagerDelegate](../playgroundbluetoothcentralmanagerdelegate.md) protocol.
