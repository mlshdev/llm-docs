> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorysetupkit/asdiscoveredaccessory/bluetoothadvertisementdata

# bluetoothAdvertisementData (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+

The Bluetooth advertisement data from the discovered accessory.

## Declaration

```swift
var bluetoothAdvertisementData: [AnyHashable : Any]? { get }
```

## See Also

### Working with accessory properties

- [bluetoothRSSI](bluetoothrssi-5a2gp.md): The Bluetooth RSSI (Received Signal Strength Indicator) value from the discovered accessory.

# bluetoothAdvertisementData (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+

The Bluetooth advertisement data from the discovered accessory.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDictionary * bluetoothAdvertisementData;
```

## See Also

### Working with accessory properties

- [bluetoothRSSI](bluetoothrssi-3c75a.md): The Bluetooth RSSI (Received Signal Strength Indicator) value from the discovered accessory.
