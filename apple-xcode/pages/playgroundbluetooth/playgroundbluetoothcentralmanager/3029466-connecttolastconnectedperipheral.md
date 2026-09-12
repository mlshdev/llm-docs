> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothcentralmanager/3029466-connecttolastconnectedperipheral](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanager/3029466-connecttolastconnectedperipheral)

# connectToLastConnectedPeripheral(timeout:callback:)

**Framework:** Playground Bluetooth  
**Kind:** Instance Method  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

Attempts to reconnect the central manager to the most recently connected peripheral.

## Declaration

```swift
func connectToLastConnectedPeripheral(timeout: TimeInterval = 7.0, callback: ((CBPeripheral?, Error?) -> Void)? = nil) -> Bool
```

## Parameters

- `timeout`: The amount of time, in seconds, before the connection attempt is aborted. If the timeout value is `nil`, the attempt won’t time out. To cancel a connection attempt, call the [disconnect(from:)](3029469-disconnect.md) method.
- `callback`: A function that’s called when the connection attempt succeeds or fails.

<a id="return_value"></a>

## Return Value

A Boolean value indicating whether the currently active playground book has previously connected to a peripheral. If [true](https://developer.apple.com/documentation/swift/true), the central manager attempts to reconnect to it.

## See Also

### Connecting Peripherals

- [connect(to:timeout:callback:)](3029464-connect.md): Attempts to connect the central manager to the specified peripheral.
- [connect(toPeripheralWithUUID:timeout:callback:)](3029465-connect.md): Attempts to connect the central manager to a peripheral with the specified unique identifier.
- [PlaygroundBluetoothCentralManager.ConnectionError](connectionerror.md): The errors you may encounter when connecting a peripheral to the central manager for the current playground page.
