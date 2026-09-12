> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevice/identifier](https://developer.apple.com/documentation/devicediscoveryextension/dddevice/identifier)

# identifier (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A unique identifier for the device.

## Declaration

```swift
var identifier: String { get set }
```

<a id="Discussion"></a>

## Discussion

As an example [identifier](identifier.md) for Bluetooth devices, your extension can use the device’s local name (see [CBAdvertisementDataLocalNameKey](../../corebluetooth/cbadvertisementdatalocalnamekey.md)).

## See Also

### Identifying the device

- [displayName](displayname.md): A name for the device to display to the user.
- [category](category-swift.property.md): An option that determies the icon that the picker UI displays for the device.
- [DDDevice.Category](category-swift.enum.md): An option that determines the icon for the device in the picker UI.

# identifier (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A unique identifier for the device.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

As an example [identifier](identifier.md) for Bluetooth devices, your extension can use the device’s local name (see [CBAdvertisementDataLocalNameKey](../../corebluetooth/cbadvertisementdatalocalnamekey.md)).

## See Also

### Identifying the device

- [displayName](displayname.md): A name for the device to display to the user.
- [category](category-swift.property.md): An option that determies the icon that the picker UI displays for the device.
- [DDDeviceCategory](category-swift.enum.md): An option that determines the icon for the device in the picker UI.
