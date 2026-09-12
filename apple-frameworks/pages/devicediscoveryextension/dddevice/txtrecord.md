> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevice/txtrecord](https://developer.apple.com/documentation/devicediscoveryextension/dddevice/txtrecord)

# txtRecord

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst · macOS 13.0+ · visionOS

A dictionary of metadata for the device that the extension communicates with over the local network.

## Declaration

```swift
var txtRecord: NWTXTRecord? { get set }
```

<a id="Discussion"></a>

## Discussion

Particularly, this dictionary provides the human-readable device name with its `“NAME”` key.

## See Also

### Setting the device state

- [state](state.md): A state that represents the level of user interaction with the device.
- [url](url.md): A resource locator for the simple service discovery protocol.
- [supportsGrouping](supportsgrouping.md): A Boolean value that indicates whether to group the device with others in the AirPlay UI.
