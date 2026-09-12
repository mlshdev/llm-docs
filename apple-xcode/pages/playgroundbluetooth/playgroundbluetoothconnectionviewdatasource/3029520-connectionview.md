> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothconnectionviewdatasource/3029520-connectionview](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionviewdatasource/3029520-connectionview)

# connectionView(\_:itemForPeripheral:withAdvertisementData:)

**Framework:** Playground Bluetooth  
**Kind:** Instance Method  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

Tells the delegate that a new peripheral was discovered and can be displayed in the connection view.

## Declaration

```swift
func connectionView(_ connectionView: PlaygroundBluetoothConnectionView, itemForPeripheral peripheral: CBPeripheral, withAdvertisementData advertisementData: [String : Any]?) -> PlaygroundBluetoothConnectionView.Item
```

## Parameters

- `connectionView`: The connection view showing available peripherals.
- `peripheral`: The peripheral to display in the connection view.
- `advertisementData`: The advertisement data you use to help decide how to display the peripheral.

<a id="return_value"></a>

## Return Value

A [PlaygroundBluetoothConnectionView.Item](../playgroundbluetoothconnectionview/item.md) instance that's displayed within a [PlaygroundBluetoothConnectionView](../playgroundbluetoothconnectionview.md).
