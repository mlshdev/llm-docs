> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothconnectionview](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionview)

# PlaygroundBluetoothConnectionView

**Framework:** Playground Bluetooth  
**Kind:** Class  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

A view that displays the connection status of a peripheral to the central manager for the current page and manages connections to other peripherals.

## Declaration

```swift
class PlaygroundBluetoothConnectionView : UIView
```

<a id="overview"></a>

## Overview

The view can display peripheral names, icons, connection statuses, and battery levels.

![A screenshot showing a PlaygroundBluetoothConnectionView instance in the upper right corner. The connection view is displaying three peripherals; one is marked as connected.](https://docs-assets.developer.apple.com/published/4be3ab3166/3030117@2x.png)

## Topics

### Creating Connection Views

- [init(centralManager:delegate:dataSource:)](playgroundbluetoothconnectionview/3029511-init.md): Creates a new, empty view that can be populated with items when peripherals are connected to the central manager.
- [init(coder:)](playgroundbluetoothconnectionview/3029512-init.md): Creates a connection view initialized from data you supply.
- [dataSource](playgroundbluetoothconnectionview/3029509-datasource.md): A data source that provides subviews for available peripherals.

### Displaying Peripherals

- [setItem(\_:forPeripheral:)](playgroundbluetoothconnectionview/3029517-setitem.md): Sets all of the information about the specified peripheral at once.
- [PlaygroundBluetoothConnectionView.Item](playgroundbluetoothconnectionview/item.md): A value that holds information about a peripheral displayed in a connection view.

### Handling State Changes

- [delegate](playgroundbluetoothconnectionview/3029510-delegate.md): A delegate you supply to make decisions about which peripherals are displayed in the view.
- [PlaygroundBluetoothConnectionView.State](playgroundbluetoothconnectionview/state.md): The states that tell users how to proceed when connecting to and switching between peripherals in a playground page.

### Displaying Individual Details

- [setBatteryLevel(\_:forPeripheral:)](playgroundbluetoothconnectionview/3029513-setbatterylevel.md): Displays the battery level for the specified peripheral.
- [setFirmwareStatus(\_:forPeripheral:)](playgroundbluetoothconnectionview/3029514-setfirmwarestatus.md): Displays whether or not the specified peripheral’s firmware is up-to-date.
- [setIcon(\_:forPeripheral:)](playgroundbluetoothconnectionview/3029515-seticon.md): Displays an icon representing the specified peripheral.
- [setIssueIcon(\_:forPeripheral:)](playgroundbluetoothconnectionview/3029516-setissueicon.md): Displays an icon indicating that the specified peripheral is available but may not be usable.
- [setName(\_:forPeripheral:)](playgroundbluetoothconnectionview/3029518-setname.md): Displays the name of the specified peripheral.

## Relationships

### Inherits From

- [UIView](https://developer.apple.com/documentation/uikit/uiview)

## See Also

### Peripheral Display

- [PlaygroundBluetoothConnectionViewDelegate](playgroundbluetoothconnectionviewdelegate.md): A delegate you use to respond to user- and system-initiated interactions with the central manager’s connection view.
- [PlaygroundBluetoothConnectionViewDataSource](playgroundbluetoothconnectionviewdatasource.md): The protocol you adopt to display an available peripheral in a playground page’s connection view.
