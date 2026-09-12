> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asdiscoveredaccessory/bluetoothrssi-5a2gp](https://developer.apple.com/documentation/accessorysetupkit/asdiscoveredaccessory/bluetoothrssi-5a2gp)

# bluetoothRSSI

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+

The Bluetooth RSSI (Received Signal Strength Indicator) value from the discovered accessory.

## Declaration

```swift
var bluetoothRSSI: Int? { get }
```

<a id="discussion"></a>

## Discussion

This value represents the signal strength in dBm when the session discovered the accessory.

## See Also

### Working with accessory properties

- [bluetoothAdvertisementData](bluetoothadvertisementdata.md): The Bluetooth advertisement data from the discovered accessory.
