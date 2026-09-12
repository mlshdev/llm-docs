> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothconnectionview/state/selectingperipherals](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionview/state/selectingperipherals)

# PlaygroundBluetoothConnectionView.State.selectingPeripherals

**Framework:** Playground Bluetooth  
**Kind:** Enumeration Case  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

One or more peripherals have been discovered and can be selected.

## Declaration

```swift
case selectingPeripherals
```

<a id="discussion"></a>

## Discussion

The connection view title corresponding to this state should be in one of the following formats:

<a id="3030073"></a>

**Listing 1**

```swift
"Select a \(item.name)"

// Or:
"Select several \(item.name)s"
```
