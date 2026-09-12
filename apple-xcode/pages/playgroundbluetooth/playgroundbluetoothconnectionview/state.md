> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothconnectionview/state](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionview/state)

# PlaygroundBluetoothConnectionView.State

**Framework:** Playground Bluetooth  
**Kind:** Enumeration  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

The states that tell users how to proceed when connecting to and switching between peripherals in a playground page.

## Declaration

```swift
enum PlaygroundBluetoothConnectionView.State
```

<a id="overview"></a>

## Overview

The example below shows how to use the different states as part of adopting the [PlaygroundBluetoothConnectionViewDelegate](../playgroundbluetoothconnectionviewdelegate.md) protocol.

<a id="3030060"></a>

**Listing 1**

```swift
extension PageViewDelegate: PlaygroundBluetoothConnectionViewDelegate {
    func connectionView(_ connectionView: PlaygroundBluetoothConnectionView, titleFor state: PlaygroundBluetoothConnectionView.State) -> String {
        // Pick a name that matches the types of peripheral your playground
        // supports, such as "Robot", "Speaker", or "Light".
        let name = "Peripheral"
        switch state {
        case .noConnection:
            return "Connect \(name)"
        case .connecting:
            return "Connecting \(name)"
        case .searchingForPeripherals:
            return "Searching for \(name)s"
        case .selectingPeripherals:
            return "Select a \(name)"
        case .connectedPeripheralFirmwareOutOfDate:
            return "Connect to a Different \(name)"
        }
    }
}
```

## Topics

### Waiting for Connections

- [PlaygroundBluetoothConnectionView.State.connecting](state/connecting.md): The peripheral is in the process of connecting to a connection view’s central manager.
- [PlaygroundBluetoothConnectionView.State.noConnection](state/noconnection.md): The connection to a peripheral has been lost.
- [PlaygroundBluetoothConnectionView.State.searchingForPeripherals](state/searchingforperipherals.md): A connection view’s central manager is scanning for nearby peripherals.

### Selecting Connections

- [PlaygroundBluetoothConnectionView.State.selectingPeripherals](state/selectingperipherals.md): One or more peripherals have been discovered and can be selected.

### Handling Old Firmware

- [PlaygroundBluetoothConnectionView.State.connectedPeripheralFirmwareOutOfDate](state/connectedperipheralfirmwareoutofdate.md): The currently connected peripheral has outdated firmware and can't be used.

### Comparing Connection States

- [!=(\_:\_:)](state/3029501.md): Compares two connection states and returns [true](https://developer.apple.com/documentation/swift/true) if they're different.

## See Also

### Handling State Changes

- [delegate](3029510-delegate.md): A delegate you supply to make decisions about which peripherals are displayed in the view.
