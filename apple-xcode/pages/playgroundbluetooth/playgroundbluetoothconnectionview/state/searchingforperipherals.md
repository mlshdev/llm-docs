> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothconnectionview/state/searchingforperipherals](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionview/state/searchingforperipherals)

# PlaygroundBluetoothConnectionView.State.searchingForPeripherals

**Framework:** Playground Bluetooth  
**Kind:** Enumeration Case  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

A connection view’s central manager is scanning for nearby peripherals.

## Declaration

```swift
case searchingForPeripherals
```

<a id="discussion"></a>

## Discussion

The connection view title corresponding to this state should be in one of the following formats:

<a id="3030070"></a>

**Listing 1**

```swift
"Searching for \(item.name)"

// Or:
"Searching for \(item.name)s"
```

## See Also

### Waiting for Connections

- [PlaygroundBluetoothConnectionView.State.connecting](connecting.md): The peripheral is in the process of connecting to a connection view’s central manager.
- [PlaygroundBluetoothConnectionView.State.noConnection](noconnection.md): The connection to a peripheral has been lost.
