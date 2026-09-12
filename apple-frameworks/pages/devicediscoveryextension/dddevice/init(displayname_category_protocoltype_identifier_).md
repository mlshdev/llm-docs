> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevice/init(displayname:category:protocoltype:identifier:)](https://developer.apple.com/documentation/devicediscoveryextension/dddevice/init(displayname:category:protocoltype:identifier:))

# init(displayName:category:protocolType:identifier:) (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

Creates an object that describes a discovered device.

## Declaration

```swift
init(displayName: String, category: DDDevice.Category, protocolType: UTType, identifier: String)
```

## Parameters

- `displayName`: A name for the device to display to the user.
- `category`: An option that determines the icon that the picker UI displays for the device.
- `protocolType`: A custom universal type that describes the device’s manner of communication with the extension.
- `identifier`: A unique identifier for the device.

<a id="Discussion"></a>

## Discussion

As an example `identifier` for Bluetooth devices, your extension can use the device’s local name (see [CBAdvertisementDataLocalNameKey](../../corebluetooth/cbadvertisementdatalocalnamekey.md)).

# initWithDisplayName:category:protocolType:identifier: (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

Creates an object that describes a discovered device.

## Declaration

```objectivec
- (instancetype) initWithDisplayName:(NSString *) displayName category:(DDDeviceCategory) category protocolType:(UTType *) protocolType identifier:(NSString *) identifier;
```

## Parameters

- `displayName`: A name for the device to display to the user.
- `category`: An option that determines the icon that the picker UI displays for the device.
- `protocolType`: A custom universal type that describes the device’s manner of communication with the extension.
- `identifier`: A unique identifier for the device.

<a id="Discussion"></a>

## Discussion

As an example `identifier` for Bluetooth devices, your extension can use the device’s local name (see [CBAdvertisementDataLocalNameKey](../../corebluetooth/cbadvertisementdatalocalnamekey.md)).
