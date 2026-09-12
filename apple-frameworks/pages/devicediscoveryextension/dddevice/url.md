> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevice/url](https://developer.apple.com/documentation/devicediscoveryextension/dddevice/url)

# url (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A resource locator for the simple service discovery protocol.

## Declaration

```swift
var url: URL { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to indicate communication with a device over the simple service discovery protocol (SSDP). The value needs to:

- Resolve to a valid hostname.
- Include no query parameters.
- Be of a size no greater than 100 bytes.

## See Also

### Setting the device state

- [state](state.md): A state that represents the level of user interaction with the device.
- [txtRecord](txtrecord.md): A dictionary of metadata for the device that the extension communicates with over the local network.
- [supportsGrouping](supportsgrouping.md): A Boolean value that indicates whether to group the device with others in the AirPlay UI.

# url (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A resource locator for the simple service discovery protocol.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSURL * url;
```

<a id="Discussion"></a>

## Discussion

Set this property to indicate communication with a device over the simple service discovery protocol (SSDP). The value needs to:

- Resolve to a valid hostname.
- Include no query parameters.
- Be of a size no greater than 100 bytes.

## See Also

### Setting the device state

- [state](state.md): A state that represents the level of user interaction with the device.
- [txtRecordData](txtrecorddata.md): A dictionary of metadata for the device that the extension communicates with over the local network.
- [supportsGrouping](supportsgrouping.md): A Boolean value that indicates whether to group the device with others in the AirPlay UI.
