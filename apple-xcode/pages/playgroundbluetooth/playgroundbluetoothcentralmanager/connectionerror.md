> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothcentralmanager/connectionerror](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanager/connectionerror)

# PlaygroundBluetoothCentralManager.ConnectionError

**Framework:** Playground Bluetooth  
**Kind:** Enumeration  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

The errors you may encounter when connecting a peripheral to the central manager for the current playground page.

## Declaration

```swift
enum PlaygroundBluetoothCentralManager.ConnectionError
```

## Topics

### Handling Errors

- [PlaygroundBluetoothCentralManager.ConnectionError.connectionFailed](connectionerror/connectionfailed.md): The error that occurs when a peripheral fails to connect to the central manager.
- [PlaygroundBluetoothCentralManager.ConnectionError.connectionLost](connectionerror/connectionlost.md): The error that occurs when a peripheral connection to the central manager fails.
- [PlaygroundBluetoothCentralManager.ConnectionError.excessiveConnections](connectionerror/excessiveconnections.md): The error that occurs when a peripheral rejects a connection to the central manager because there are too many others.
- [PlaygroundBluetoothCentralManager.ConnectionError.invalidState](connectionerror/invalidstate.md): The error that occurs when the central manager is in a state that can’t make connections.
- [PlaygroundBluetoothCentralManager.ConnectionError.timeoutExpired](connectionerror/timeoutexpired.md): The error that occurs when a peripheral fails to connect to the central manager before the timeout period expires.

### Displaying Errors

- [localizedDescription](connectionerror/3029462-localizeddescription.md): A string containing the localized description of the error.

### Comparing Errors

- [!=(\_:\_:)](connectionerror/3029457.md): Returns `true` when the two connection errors being compared aren't the same.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)

## See Also

### Connecting Peripherals

- [connect(to:timeout:callback:)](3029464-connect.md): Attempts to connect the central manager to the specified peripheral.
- [connect(toPeripheralWithUUID:timeout:callback:)](3029465-connect.md): Attempts to connect the central manager to a peripheral with the specified unique identifier.
- [connectToLastConnectedPeripheral(timeout:callback:)](3029466-connecttolastconnectedperipheral.md): Attempts to reconnect the central manager to the most recently connected peripheral.
