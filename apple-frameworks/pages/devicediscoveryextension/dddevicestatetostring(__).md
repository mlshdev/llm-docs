> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevicestatetostring(_:)](https://developer.apple.com/documentation/devicediscoveryextension/dddevicestatetostring(_:))

# DDDeviceStateToString(\_:) (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

Returns human-readable text for the specified identifier that describes a device’s status.

## Declaration

```swift
func DDDeviceStateToString(_ inValue: DDDeviceState) -> String
```

## Parameters

- `inValue`: A state identifier to convert to text.

<a id="return-value"></a>

## Return Value

A textual value for the specified device state.

<a id="Discussion"></a>

## Discussion

Your extension can use this function for logging.

## See Also

### Device information

- [DDDevice](dddevice.md): An object that describes a discovered device of interest.
- [DDDevice.Category](dddevice/category-swift.enum.md): An option that determines the icon for the device in the picker UI.
- [DDDeviceState](dddevicestate.md): A state that represents the level of user interaction with the device.
- [DDDeviceCategoryToString(\_:)](dddevicecategorytostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s category.
- [DDDevice.Protocol](dddevice/protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [DDDeviceProtocolToString(\_:)](dddeviceprotocoltostring%28__%29.md): Returns human-readable text for the specified protocol identifier.
- [DDDeviceProtocolString](dddeviceprotocolstring.md): String values for the manner in which an app interacts with a device.
- [DDDeviceMediaPlaybackStateToString(\_:)](dddevicemediaplaybackstatetostring%28__%29.md): Returns human-readable text for the specified media playback state.

# DDDeviceStateToString (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

Returns human-readable text for the specified identifier that describes a device’s status.

## Declaration

```objectivec
extern NSString *DDDeviceStateToString(DDDeviceState inValue);
```

## Parameters

- `inValue`: A state identifier to convert to text.

<a id="return-value"></a>

## Return Value

A textual value for the specified device state.

<a id="Discussion"></a>

## Discussion

Your extension can use this function for logging.

## See Also

### Device information

- [DDDevice](dddevice.md): An object that describes a discovered device of interest.
- [DDDeviceCategory](dddevice/category-swift.enum.md): An option that determines the icon for the device in the picker UI.
- [DDDeviceState](dddevicestate.md): A state that represents the level of user interaction with the device.
- [DDDeviceCategoryToString](dddevicecategorytostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s category.
- [DDDeviceProtocol](dddevice/protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [DDDeviceProtocolToString](dddeviceprotocoltostring%28__%29.md): Returns human-readable text for the specified protocol identifier.
- [DDDeviceProtocolString](dddeviceprotocolstring.md): String values for the manner in which an app interacts with a device.
- [DDDeviceMediaPlaybackStateToString](dddevicemediaplaybackstatetostring%28__%29.md): Returns human-readable text for the specified media playback state.
