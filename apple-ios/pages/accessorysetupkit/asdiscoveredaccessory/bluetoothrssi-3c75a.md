> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorysetupkit/asdiscoveredaccessory/bluetoothrssi-3c75a

# bluetoothRSSI

**Interface language:** Objective-C

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+

The Bluetooth RSSI (Received Signal Strength Indicator) value from the discovered accessory.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSNumber * bluetoothRSSI;
```

<a id="discussion"></a>

## Discussion

This value represents the signal strength in dBm when the session discovered the accessory.

## See Also

### Working with accessory properties

- [bluetoothAdvertisementData](bluetoothadvertisementdata.md): The Bluetooth advertisement data from the discovered accessory.
