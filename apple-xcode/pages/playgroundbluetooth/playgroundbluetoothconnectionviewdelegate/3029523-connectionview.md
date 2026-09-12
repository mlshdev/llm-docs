> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothconnectionviewdelegate/3029523-connectionview](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionviewdelegate/3029523-connectionview)

# connectionView(\_:shouldConnectTo:withAdvertisementData:)

**Framework:** Playground Bluetooth  
**Kind:** Instance Method  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

Tells the delegate that a new peripheral was discovered and can be displayed in the connection view.

## Declaration

```swift
func connectionView(_ connectionView: PlaygroundBluetoothConnectionView, shouldConnectTo peripheral: CBPeripheral, withAdvertisementData advertisementData: [String : Any]?) -> Bool
```

## Parameters

- `connectionView`: The connection view showing available peripherals.
- `peripheral`: The newly discovered peripheral.
- `advertisementData`: The advertisement data you use to help decide whether or not to display the peripheral.

<a id="return_value"></a>

## Return Value

A Boolean value indicating whether the newly discovered peripheral should show up in the connection view.

## Default Implementations

### PlaygroundBluetoothConnectionViewDelegate Implementations

- [connectionView(\_:shouldConnectTo:withAdvertisementData:)](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionviewdelegate/3029524-connectionview): Tells the delegate that a new peripheral was discovered and can be displayed in the connection view.

## See Also

### Displaying New Peripherals

- [connectionView(\_:shouldDisplayDiscovered:withAdvertisementData:rssi:)](3029525-connectionview.md): Tells the delegate that a new peripheral was discovered and can be displayed in the connection view.
- [connectionView(\_:titleFor:)](3029527-connectionview.md): Tells the delegate that the connection view needs a title to display for its current state.
