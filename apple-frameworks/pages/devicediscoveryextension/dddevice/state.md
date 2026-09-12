> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevice/state](https://developer.apple.com/documentation/devicediscoveryextension/dddevice/state)

# state (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A state that represents the level of user interaction with the device.

## Declaration

```swift
var state: DDDeviceState { get set }
```

## See Also

### Setting the device state

- [txtRecord](txtrecord.md): A dictionary of metadata for the device that the extension communicates with over the local network.
- [url](url.md): A resource locator for the simple service discovery protocol.
- [supportsGrouping](supportsgrouping.md): A Boolean value that indicates whether to group the device with others in the AirPlay UI.

# state (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A state that represents the level of user interaction with the device.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) DDDeviceState state;
```

## See Also

### Setting the device state

- [txtRecordData](txtrecorddata.md): A dictionary of metadata for the device that the extension communicates with over the local network.
- [url](url.md): A resource locator for the simple service discovery protocol.
- [supportsGrouping](supportsgrouping.md): A Boolean value that indicates whether to group the device with others in the AirPlay UI.
