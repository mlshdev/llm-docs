> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundbluetooth/playgroundbluetoothconnectionview/3029516-setissueicon](https://developer.apple.com/documentation/playgroundbluetooth/playgroundbluetoothconnectionview/3029516-setissueicon)

# setIssueIcon(\_:forPeripheral:)

**Framework:** Playground Bluetooth  
**Kind:** Instance Method  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

Displays an icon indicating that the specified peripheral is available but may not be usable.

## Declaration

```swift
func setIssueIcon(_ issueIcon: UIImage, forPeripheral peripheral: CBPeripheral)
```

## Parameters

- `issueIcon`: An icon indicating that the specified peripheral may not function correctly.
- `peripheral`: The problematic peripheral.

<a id="discussion"></a>

## Discussion

Use an issue icon to indicate problems such as outdated firmware or a lost connection.

## See Also

### Displaying Individual Details

- [setBatteryLevel(\_:forPeripheral:)](3029513-setbatterylevel.md): Displays the battery level for the specified peripheral.
- [setFirmwareStatus(\_:forPeripheral:)](3029514-setfirmwarestatus.md): Displays whether or not the specified peripheral’s firmware is up-to-date.
- [setIcon(\_:forPeripheral:)](3029515-seticon.md): Displays an icon representing the specified peripheral.
- [setName(\_:forPeripheral:)](3029518-setname.md): Displays the name of the specified peripheral.
