> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothconnectionview/3029514-setfirmwarestatus](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionview/3029514-setfirmwarestatus)

# setFirmwareStatus(\_:forPeripheral:)

**Framework:** Playground Bluetooth  
**Kind:** Instance Method  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

Displays whether or not the specified peripheral’s firmware is up-to-date.

## Declaration

```swift
func setFirmwareStatus(_ firmwareStatus: PlaygroundBluetoothConnectionView.Item.FirmwareStatus?, forPeripheral peripheral: CBPeripheral)
```

## Parameters

- `firmwareStatus`: A value that indicates whether the specified peripheral needs a firmware update.
- `peripheral`: The peripheral corresponding to the firmware readiness being set.

## See Also

### Displaying Individual Details

- [setBatteryLevel(\_:forPeripheral:)](3029513-setbatterylevel.md): Displays the battery level for the specified peripheral.
- [setIcon(\_:forPeripheral:)](3029515-seticon.md): Displays an icon representing the specified peripheral.
- [setIssueIcon(\_:forPeripheral:)](3029516-setissueicon.md): Displays an icon indicating that the specified peripheral is available but may not be usable.
- [setName(\_:forPeripheral:)](3029518-setname.md): Displays the name of the specified peripheral.
