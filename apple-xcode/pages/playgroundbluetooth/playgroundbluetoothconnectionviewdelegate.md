> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothconnectionviewdelegate](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionviewdelegate)

# PlaygroundBluetoothConnectionViewDelegate

**Framework:** Playground Bluetooth  
**Kind:** Protocol  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

A delegate you use to respond to user- and system-initiated interactions with the central manager’s connection view.

## Declaration

```swift
protocol PlaygroundBluetoothConnectionViewDelegate : AnyObject
```

## Topics

### Displaying New Peripherals

- [connectionView(\_:shouldConnectTo:withAdvertisementData:)](playgroundbluetoothconnectionviewdelegate/3029523-connectionview.md): Tells the delegate that a new peripheral was discovered and can be displayed in the connection view.
- [connectionView(\_:shouldDisplayDiscovered:withAdvertisementData:rssi:)](playgroundbluetoothconnectionviewdelegate/3029525-connectionview.md): Tells the delegate that a new peripheral was discovered and can be displayed in the connection view.
- [connectionView(\_:titleFor:)](playgroundbluetoothconnectionviewdelegate/3029527-connectionview.md): Tells the delegate that the connection view needs a title to display for its current state.

### Displaying Firmware Update Information

- [connectionView(\_:firmwareUpdateInstructionsFor:)](playgroundbluetoothconnectionviewdelegate/3029522-connectionview.md): Tells the delegate that a peripheral has a firmware update available.

### Disconnecting from Peripherals

- [connectionView(\_:willDisconnectFrom:)](playgroundbluetoothconnectionviewdelegate/3029528-connectionview.md): Tells the delegate that a connected peripheral is about to be disconnected.

## See Also

### Peripheral Display

- [PlaygroundBluetoothConnectionView](playgroundbluetoothconnectionview.md): A view that displays the connection status of a peripheral to the central manager for the current page and manages connections to other peripherals.
- [PlaygroundBluetoothConnectionViewDataSource](playgroundbluetoothconnectionviewdatasource.md): The protocol you adopt to display an available peripheral in a playground page’s connection view.
