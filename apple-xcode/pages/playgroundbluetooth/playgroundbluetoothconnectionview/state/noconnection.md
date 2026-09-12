> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothconnectionview/state/noconnection](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionview/state/noconnection)

# PlaygroundBluetoothConnectionView.State.noConnection

**Framework:** Playground Bluetooth  
**Kind:** Enumeration Case  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

The connection to a peripheral has been lost.

## Declaration

```swift
case noConnection
```

<a id="discussion"></a>

## Discussion

The connection view title corresponding to this state should be in the following format:

<a id="3030061"></a>

**Listing 1**

```swift
"Connect \(item.name)"
```

## See Also

### Waiting for Connections

- [PlaygroundBluetoothConnectionView.State.connecting](connecting.md): The peripheral is in the process of connecting to a connection view’s central manager.
- [PlaygroundBluetoothConnectionView.State.searchingForPeripherals](searchingforperipherals.md): A connection view’s central manager is scanning for nearby peripherals.
