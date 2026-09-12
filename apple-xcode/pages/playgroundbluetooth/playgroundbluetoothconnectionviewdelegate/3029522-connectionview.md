> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothconnectionviewdelegate/3029522-connectionview](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionviewdelegate/3029522-connectionview)

# connectionView(\_:firmwareUpdateInstructionsFor:)

**Framework:** Playground Bluetooth  
**Kind:** Instance Method  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

Tells the delegate that a peripheral has a firmware update available.

## Declaration

```swift
func connectionView(_ connectionView: PlaygroundBluetoothConnectionView, firmwareUpdateInstructionsFor peripheral: CBPeripheral) -> String
```

## Parameters

- `connectionView`: The central manager that failed to make the new connection.
- `peripheral`: The peripheral that the central manager couldn’t connect to.

<a id="return_value"></a>

## Return Value

A localized string that contains firmware update instructions.
