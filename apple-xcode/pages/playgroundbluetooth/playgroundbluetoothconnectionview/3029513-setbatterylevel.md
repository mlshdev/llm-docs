> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothconnectionview/3029513-setbatterylevel](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionview/3029513-setbatterylevel)

# setBatteryLevel(\_:forPeripheral:)

**Framework:** Playground Bluetooth  
**Kind:** Instance Method  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

Displays the battery level for the specified peripheral.

## Declaration

```swift
func setBatteryLevel(_ batteryLevel: Double?, forPeripheral peripheral: CBPeripheral)
```

## Parameters

- `batteryLevel`: A value between 0 and 1.0 indicating the peripheral’s percent battery charge.
- `peripheral`: The peripheral corresponding to the battery level being displayed.

## See Also

### Displaying Individual Details

- [setFirmwareStatus(\_:forPeripheral:)](3029514-setfirmwarestatus.md): Displays whether or not the specified peripheral’s firmware is up-to-date.
- [setIcon(\_:forPeripheral:)](3029515-seticon.md): Displays an icon representing the specified peripheral.
- [setIssueIcon(\_:forPeripheral:)](3029516-setissueicon.md): Displays an icon indicating that the specified peripheral is available but may not be usable.
- [setName(\_:forPeripheral:)](3029518-setname.md): Displays the name of the specified peripheral.
