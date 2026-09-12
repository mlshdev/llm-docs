> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothconnectionviewdatasource](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionviewdatasource)

# PlaygroundBluetoothConnectionViewDataSource

**Framework:** Playground Bluetooth  
**Kind:** Protocol  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

The protocol you adopt to display an available peripheral in a playground page’s connection view.

## Declaration

```swift
protocol PlaygroundBluetoothConnectionViewDataSource : AnyObject
```

<a id="overview"></a>

## Overview

The example below shows a conformance to this protocol that uses images from a playground book’s [Public and Private Resources Folders](https://developer.apple.com/library/archive/documentation/Xcode/Conceptual/swift_playgrounds_doc_format/index.html#//apple_ref/doc/uid/TP40017343-CH47-SW14).

<a id="3030079"></a>

**Listing 1**

```swift
extension PageViewDelegate: PlaygroundBluetoothConnectionViewDataSource {
    func connectionView(_ connectionView: PlaygroundBluetoothConnectionView, itemForPeripheral peripheral: CBPeripheral, withAdvertisementData advertisementData: [String: Any]?) -> PlaygroundBluetoothConnectionView.Item {
        let icon = UIImage(named: "Peripheral_Icon_Normal")!
        let issueIcon = UIImage(named: "Peripheral_Icon_Issue")!
        let name = peripheral.name ?? peripheral.identifier.uuidString
        
        return .init(name: name, icon: icon, issueIcon: issueIcon)
    }
}
```

Some peripherals have Bluetooth characteristics that provide information about the peripheral’s battery charge level or firmware status. Include this information in the [PlaygroundBluetoothConnectionView.Item](playgroundbluetoothconnectionview/item.md) you create when it will help people pick a peripheral.

## Topics

### Displaying Connection View Items

- [connectionView(\_:itemForPeripheral:withAdvertisementData:)](playgroundbluetoothconnectionviewdatasource/3029520-connectionview.md): Tells the delegate that a new peripheral was discovered and can be displayed in the connection view.

## See Also

### Peripheral Display

- [PlaygroundBluetoothConnectionView](playgroundbluetoothconnectionview.md): A view that displays the connection status of a peripheral to the central manager for the current page and manages connections to other peripherals.
- [PlaygroundBluetoothConnectionViewDelegate](playgroundbluetoothconnectionviewdelegate.md): A delegate you use to respond to user- and system-initiated interactions with the central manager’s connection view.
