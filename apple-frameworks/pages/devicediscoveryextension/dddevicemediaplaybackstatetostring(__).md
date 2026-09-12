> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevicemediaplaybackstatetostring(_:)](https://developer.apple.com/documentation/devicediscoveryextension/dddevicemediaplaybackstatetostring(_:))

# DDDeviceMediaPlaybackStateToString(\_:) (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

Returns human-readable text for the specified media playback state.

## Declaration

```swift
func DDDeviceMediaPlaybackStateToString(_ inValue: DDDevice.MediaPlaybackState) -> String
```

## Parameters

- `inValue`: A media playback state to convert to text.

<a id="return-value"></a>

## Return Value

A textual value for the specified device protocol.

<a id="Discussion"></a>

## Discussion

Your extension can use this function for logging.

## See Also

### Device information

- [DDDevice](dddevice.md): An object that describes a discovered device of interest.
- [DDDevice.Category](dddevice/category-swift.enum.md): An option that determines the icon for the device in the picker UI.
- [DDDeviceState](dddevicestate.md): A state that represents the level of user interaction with the device.
- [DDDeviceCategoryToString(\_:)](dddevicecategorytostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s category.
- [DDDeviceStateToString(\_:)](dddevicestatetostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s status.
- [DDDevice.Protocol](dddevice/protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [DDDeviceProtocolToString(\_:)](dddeviceprotocoltostring%28__%29.md): Returns human-readable text for the specified protocol identifier.
- [DDDeviceProtocolString](dddeviceprotocolstring.md): String values for the manner in which an app interacts with a device.

# DDDeviceMediaPlaybackStateToString (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

Returns human-readable text for the specified media playback state.

## Declaration

```objectivec
extern NSString *DDDeviceMediaPlaybackStateToString(DDDeviceMediaPlaybackState inValue);
```

## Parameters

- `inValue`: A media playback state to convert to text.

<a id="return-value"></a>

## Return Value

A textual value for the specified device protocol.

<a id="Discussion"></a>

## Discussion

Your extension can use this function for logging.

## See Also

### Device information

- [DDDevice](dddevice.md): An object that describes a discovered device of interest.
- [DDDeviceCategory](dddevice/category-swift.enum.md): An option that determines the icon for the device in the picker UI.
- [DDDeviceState](dddevicestate.md): A state that represents the level of user interaction with the device.
- [DDDeviceCategoryToString](dddevicecategorytostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s category.
- [DDDeviceStateToString](dddevicestatetostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s status.
- [DDDeviceProtocol](dddevice/protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [DDDeviceProtocolToString](dddeviceprotocoltostring%28__%29.md): Returns human-readable text for the specified protocol identifier.
- [DDDeviceProtocolString](dddeviceprotocolstring.md): String values for the manner in which an app interacts with a device.
