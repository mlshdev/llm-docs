> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionview/state/connectedperipheralfirmwareoutofdate

# PlaygroundBluetoothConnectionView.State.connectedPeripheralFirmwareOutOfDate

**Framework:** Playground Bluetooth  
**Kind:** Enumeration Case  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

The currently connected peripheral has outdated firmware and can't be used.

## Declaration

```swift
case connectedPeripheralFirmwareOutOfDate
```

<a id="discussion"></a>

## Discussion

The connection view title corresponding to this state should be in the following format:

<a id="3030072"></a>

**Listing 1**

```swift
"Connect to a Different \(item.name)"
```
