> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddeviceprotocoltostring(_:)](https://developer.apple.com/documentation/devicediscoveryextension/dddeviceprotocoltostring(_:))

# DDDeviceProtocolToString(\_:) (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

Returns human-readable text for the specified protocol identifier.

## Declaration

```swift
func DDDeviceProtocolToString(_ inValue: DDDevice.Protocol) -> String
```

## Parameters

- `inValue`: A device-protocol identifier to convert to text.

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
- [DDDeviceProtocolString](dddeviceprotocolstring.md): String values for the manner in which an app interacts with a device.
- [DDDeviceMediaPlaybackStateToString(\_:)](dddevicemediaplaybackstatetostring%28__%29.md): Returns human-readable text for the specified media playback state.

# DDDeviceProtocolToString (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

Returns human-readable text for the specified protocol identifier.

## Declaration

```objectivec
extern NSString *DDDeviceProtocolToString(DDDeviceProtocol inValue);
```

## Parameters

- `inValue`: A device-protocol identifier to convert to text.

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
- [DDDeviceProtocolString](dddeviceprotocolstring.md): String values for the manner in which an app interacts with a device.
- [DDDeviceMediaPlaybackStateToString](dddevicemediaplaybackstatetostring%28__%29.md): Returns human-readable text for the specified media playback state.
