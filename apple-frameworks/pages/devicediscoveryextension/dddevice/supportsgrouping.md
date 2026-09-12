> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevice/supportsgrouping](https://developer.apple.com/documentation/devicediscoveryextension/dddevice/supportsgrouping)

# supportsGrouping (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+

A Boolean value that indicates whether to group the device with others in the AirPlay UI.

## Declaration

```swift
var supportsGrouping: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property provides a convenient way to send the same media stream to multiple devices and list them as a group in the AirPlay UI ([AVRoutePickerView](../../avkit/avroutepickerview.md)). For example, a set of speakers arranged around the room can implement stereo playback by each playing different audio channels from an audio stream.

When someone selects a media receiver in the AirPlay menu, the system checks if it supports grouping. If so, the AirPlay UI displays a checkbox next to any other media receivers that also support grouping and implement the same protocol ([DDDevice.Protocol](protocol-swift.enum.md)).

If a person selects multiple devices in the menu, the selected devices reorder next to each other in the list.

> **Note**

>  Implement [didReceiveEvent(\_:)](../dddiscoveryextension/didreceiveevent%28__%29.md) in the [DDDiscoveryExtension](../dddiscoveryextension.md) to detect when a person changes the device grouping using the AirPlay UI.

## See Also

### Setting the device state

- [state](state.md): A state that represents the level of user interaction with the device.
- [txtRecord](txtrecord.md): A dictionary of metadata for the device that the extension communicates with over the local network.
- [url](url.md): A resource locator for the simple service discovery protocol.

# supportsGrouping (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+

A Boolean value that indicates whether to group the device with others in the AirPlay UI.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL supportsGrouping;
```

<a id="Discussion"></a>

## Discussion

This property provides a convenient way to send the same media stream to multiple devices and list them as a group in the AirPlay UI ([AVRoutePickerView](../../avkit/avroutepickerview.md)). For example, a set of speakers arranged around the room can implement stereo playback by each playing different audio channels from an audio stream.

When someone selects a media receiver in the AirPlay menu, the system checks if it supports grouping. If so, the AirPlay UI displays a checkbox next to any other media receivers that also support grouping and implement the same protocol ([DDDeviceProtocol](protocol-swift.enum.md)).

If a person selects multiple devices in the menu, the selected devices reorder next to each other in the list.

> **Note**

>  Implement [didReceiveEvent(\_:)](../dddiscoveryextension/didreceiveevent%28__%29.md) in the [DDDiscoveryExtension](../dddiscoveryextension.md) to detect when a person changes the device grouping using the AirPlay UI.

## See Also

### Setting the device state

- [state](state.md): A state that represents the level of user interaction with the device.
- [txtRecordData](txtrecorddata.md): A dictionary of metadata for the device that the extension communicates with over the local network.
- [url](url.md): A resource locator for the simple service discovery protocol.
