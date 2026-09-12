> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothconnectionview/item](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionview/item)

# PlaygroundBluetoothConnectionView.Item

**Framework:** Playground Bluetooth  
**Kind:** Structure  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

A value that holds information about a peripheral displayed in a connection view.

## Declaration

```swift
struct PlaygroundBluetoothConnectionView.Item
```

## Topics

### Displaying Peripheral Information

- [init(name:icon:issueIcon:firmwareStatus:batteryLevel:)](item/3029497-init.md): Creates a structure that holds information about a peripheral displayed in a connection view.
- [name](item/3029499-name.md): The name of a peripheral as it should appear in a connection view.

### Displaying Icons

- [icon](item/3029496-icon.md): An image that represents a peripheral.
- [issueIcon](item/3029498-issueicon.md): An image indicating that a peripheral may not function correctly.

### Displaying Statuses

- [batteryLevel](item/3029494-batterylevel.md): A value between 0 and 1.0 indicating a peripheral’s percent battery charge.
- [firmwareStatus](item/3029495-firmwarestatus.md): A value that indicates whether a peripheral needs a firmware update.
- [PlaygroundBluetoothConnectionView.Item.FirmwareStatus](item/firmwarestatus.md): The states you use to indicate whether a peripheral’s firmware is current

## See Also

### Displaying Peripherals

- [setItem(\_:forPeripheral:)](3029517-setitem.md): Sets all of the information about the specified peripheral at once.
