> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothcentralmanager/connectionerror/excessiveconnections](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothcentralmanager/connectionerror/excessiveconnections)

# PlaygroundBluetoothCentralManager.ConnectionError.excessiveConnections

**Framework:** Playground Bluetooth  
**Kind:** Enumeration Case  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

The error that occurs when a peripheral rejects a connection to the central manager because there are too many others.

## Declaration

```swift
case excessiveConnections
```

## See Also

### Handling Errors

- [PlaygroundBluetoothCentralManager.ConnectionError.connectionFailed](connectionfailed.md): The error that occurs when a peripheral fails to connect to the central manager.
- [PlaygroundBluetoothCentralManager.ConnectionError.connectionLost](connectionlost.md): The error that occurs when a peripheral connection to the central manager fails.
- [PlaygroundBluetoothCentralManager.ConnectionError.invalidState](invalidstate.md): The error that occurs when the central manager is in a state that can’t make connections.
- [PlaygroundBluetoothCentralManager.ConnectionError.timeoutExpired](timeoutexpired.md): The error that occurs when a peripheral fails to connect to the central manager before the timeout period expires.
