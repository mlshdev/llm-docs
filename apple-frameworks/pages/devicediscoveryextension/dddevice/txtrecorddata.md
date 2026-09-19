> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicediscoveryextension/dddevice/txtrecorddata

# txtRecordData

**Interface language:** Objective-C

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A dictionary of metadata for the device that the extension communicates with over the local network.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSData * txtRecordData;
```

<a id="Discussion"></a>

## Discussion

Particularly, this dictionary provides the human-readable device name with its `"NAME"` key.

## See Also

### Setting the device state

- [state](state.md): A state that represents the level of user interaction with the device.
- [url](url.md): A resource locator for the simple service discovery protocol.
- [supportsGrouping](supportsgrouping.md): A Boolean value that indicates whether to group the device with others in the AirPlay UI.
