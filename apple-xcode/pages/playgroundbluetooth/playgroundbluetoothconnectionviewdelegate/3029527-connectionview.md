> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothconnectionviewdelegate/3029527-connectionview](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionviewdelegate/3029527-connectionview)

# connectionView(\_:titleFor:)

**Framework:** Playground Bluetooth  
**Kind:** Instance Method  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

Tells the delegate that the connection view needs a title to display for its current state.

## Declaration

```swift
func connectionView(_ connectionView: PlaygroundBluetoothConnectionView, titleFor state: PlaygroundBluetoothConnectionView.State) -> String
```

## Parameters

- `connectionView`: The connection view that’s entering this state.
- `state`: The state of the view. The state is one of the cases of the [PlaygroundBluetoothConnectionView.State](../playgroundbluetoothconnectionview/state.md) enumeration.

<a id="return_value"></a>

## Return Value

A localized string corresponding to the current state of the view.

## See Also

### Displaying New Peripherals

- [connectionView(\_:shouldConnectTo:withAdvertisementData:)](3029523-connectionview.md): Tells the delegate that a new peripheral was discovered and can be displayed in the connection view.
- [connectionView(\_:shouldDisplayDiscovered:withAdvertisementData:rssi:)](3029525-connectionview.md): Tells the delegate that a new peripheral was discovered and can be displayed in the connection view.
