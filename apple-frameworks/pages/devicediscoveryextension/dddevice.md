> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevice](https://developer.apple.com/documentation/devicediscoveryextension/dddevice)

# DDDevice (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

An object that describes a discovered device of interest.

## Declaration

```swift
class DDDevice
```

<a id="overview"></a>

## Overview

The extension creates an instance of this class for a discovered device of interest and passes it to the system for display in the device picker UI ([AVRoutePickerView](../avkit/avroutepickerview.md)).

The extension discovers devices through either Core Bluetooth or the local network (that is, using [Bonjour](../foundation/bonjour.md)).

For device discovery extensions of third-party media receivers, an instance of this class corresponds to the media receiver of interest.

The extension reports the status of discovered devices to the system using the [report(\_:)](dddiscoverysession/report%28__%29.md) function, and it receives status updates about the device from the system by implementing [didReceiveEvent(\_:)](dddiscoveryextension/didreceiveevent%28__%29.md).

## Topics

### Initializing a device

- [init(displayName:category:protocolType:identifier:)](dddevice/init%28displayname_category_protocoltype_identifier_%29.md): Creates an object that describes a discovered device.

### Identifying the device

- [displayName](dddevice/displayname.md): A name for the device to display to the user.
- [identifier](dddevice/identifier.md): A unique identifier for the device.
- [category](dddevice/category-swift.property.md): An option that determies the icon that the picker UI displays for the device.
- [DDDevice.Category](dddevice/category-swift.enum.md): An option that determines the icon for the device in the picker UI.

### Indicating the protocol

- [protocol](dddevice/protocol-swift.property.md): The manner in which the system applies your app’s device discovery extension.
- [DDDevice.Protocol](dddevice/protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [protocolType](dddevice/protocoltype.md): A custom universal type that describes the device’s manner of communication with the extension.
- [bluetoothIdentifier](dddevice/bluetoothidentifier.md): An identifier to communicate with the device through Bluetooth wireless technology.
- [networkEndpoint](dddevice/networkendpoint-3lah1.md): An object that describes a local-network device.

### Setting the device state

- [state](dddevice/state.md): A state that represents the level of user interaction with the device.
- [txtRecord](dddevice/txtrecord.md): A dictionary of metadata for the device that the extension communicates with over the local network.
- [url](dddevice/url.md): A resource locator for the simple service discovery protocol.
- [supportsGrouping](dddevice/supportsgrouping.md): A Boolean value that indicates whether to group the device with others in the AirPlay UI.

### Communicating device content and playback status

- [mediaContentTitle](dddevice/mediacontenttitle.md): Deprecated. A title for the current media that the device plays.
- [mediaContentSubtitle](dddevice/mediacontentsubtitle.md): Deprecated. A subtitle for the current media that the device plays.
- [mediaPlaybackState](dddevice/mediaplaybackstate-swift.property.md): Deprecated. A playback status for the device’s current media.
- [DDDevice.MediaPlaybackState](dddevice/mediaplaybackstate-swift.enum.md): States that indicate the status of a device’s media playback.

### Instance Properties

- [deviceSupports](dddevice/devicesupports.md)
- [displayImageName](dddevice/displayimagename.md)
- [ssid](dddevice/ssid.md)
- [wifiAwareModelName](dddevice/wifiawaremodelname.md): Device’s Wi-Fi Aware model name.
- [wifiAwareServiceName](dddevice/wifiawareservicename.md): Device’s Wi-Fi Aware’s service name.
- [wifiAwareServiceRole](dddevice/wifiawareservicerole-swift.property.md): Device’s Wi-Fi Aware’s service. Default is `DDDeviceWiFiAwareServiceRoleSubscriber`
- [wifiAwareVendorName](dddevice/wifiawarevendorname.md): Device’s Wi-Fi Aware vendor name.

### Enumerations

- [DDDevice.WiFiAwareServiceRole](dddevice/wifiawareservicerole-swift.enum.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Device information

- [DDDevice.Category](dddevice/category-swift.enum.md): An option that determines the icon for the device in the picker UI.
- [DDDeviceState](dddevicestate.md): A state that represents the level of user interaction with the device.
- [DDDeviceCategoryToString(\_:)](dddevicecategorytostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s category.
- [DDDeviceStateToString(\_:)](dddevicestatetostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s status.
- [DDDevice.Protocol](dddevice/protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [DDDeviceProtocolToString(\_:)](dddeviceprotocoltostring%28__%29.md): Returns human-readable text for the specified protocol identifier.
- [DDDeviceProtocolString](dddeviceprotocolstring.md): String values for the manner in which an app interacts with a device.
- [DDDeviceMediaPlaybackStateToString(\_:)](dddevicemediaplaybackstatetostring%28__%29.md): Returns human-readable text for the specified media playback state.

# DDDevice (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

An object that describes a discovered device of interest.

## Declaration

```objectivec
@interface DDDevice : NSObject
```

<a id="overview"></a>

## Overview

The extension creates an instance of this class for a discovered device of interest and passes it to the system for display in the device picker UI ([AVRoutePickerView](../avkit/avroutepickerview.md)).

The extension discovers devices through either Core Bluetooth or the local network (that is, using [Bonjour](../foundation/bonjour.md)).

For device discovery extensions of third-party media receivers, an instance of this class corresponds to the media receiver of interest.

The extension reports the status of discovered devices to the system using the [reportEvent:](dddiscoverysession/report%28__%29.md) function, and it receives status updates about the device from the system by implementing [didReceiveEvent(\_:)](dddiscoveryextension/didreceiveevent%28__%29.md).

## Topics

### Initializing a device

- [initWithDisplayName:category:protocolType:identifier:](dddevice/init%28displayname_category_protocoltype_identifier_%29.md): Creates an object that describes a discovered device.

### Identifying the device

- [displayName](dddevice/displayname.md): A name for the device to display to the user.
- [identifier](dddevice/identifier.md): A unique identifier for the device.
- [category](dddevice/category-swift.property.md): An option that determies the icon that the picker UI displays for the device.
- [DDDeviceCategory](dddevice/category-swift.enum.md): An option that determines the icon for the device in the picker UI.

### Indicating the protocol

- [protocol](dddevice/protocol-swift.property.md): The manner in which the system applies your app’s device discovery extension.
- [DDDeviceProtocol](dddevice/protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [protocolType](dddevice/protocoltype.md): A custom universal type that describes the device’s manner of communication with the extension.
- [bluetoothIdentifier](dddevice/bluetoothidentifier.md): An identifier to communicate with the device through Bluetooth wireless technology.
- [networkEndpoint](dddevice/networkendpoint-7excg.md): An object that describes a local-network device.

### Setting the device state

- [state](dddevice/state.md): A state that represents the level of user interaction with the device.
- [txtRecordData](dddevice/txtrecorddata.md): A dictionary of metadata for the device that the extension communicates with over the local network.
- [url](dddevice/url.md): A resource locator for the simple service discovery protocol.
- [supportsGrouping](dddevice/supportsgrouping.md): A Boolean value that indicates whether to group the device with others in the AirPlay UI.

### Communicating device content and playback status

- [mediaContentTitle](dddevice/mediacontenttitle.md): Deprecated. A title for the current media that the device plays.
- [mediaContentSubtitle](dddevice/mediacontentsubtitle.md): Deprecated. A subtitle for the current media that the device plays.
- [mediaPlaybackState](dddevice/mediaplaybackstate-swift.property.md): Deprecated. A playback status for the device’s current media.
- [DDDeviceMediaPlaybackState](dddevice/mediaplaybackstate-swift.enum.md): States that indicate the status of a device’s media playback.

### Instance Properties

- [deviceSupports](dddevice/devicesupports.md)
- [displayImageName](dddevice/displayimagename.md)
- [SSID](dddevice/ssid.md)
- [wifiAwareModelName](dddevice/wifiawaremodelname.md): Device’s Wi-Fi Aware model name.
- [wifiAwareServiceName](dddevice/wifiawareservicename.md): Device’s Wi-Fi Aware’s service name.
- [wifiAwareServiceRole](dddevice/wifiawareservicerole-swift.property.md): Device’s Wi-Fi Aware’s service. Default is `DDDeviceWiFiAwareServiceRoleSubscriber`
- [wifiAwareVendorName](dddevice/wifiawarevendorname.md): Device’s Wi-Fi Aware vendor name.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Device information

- [DDDeviceCategory](dddevice/category-swift.enum.md): An option that determines the icon for the device in the picker UI.
- [DDDeviceState](dddevicestate.md): A state that represents the level of user interaction with the device.
- [DDDeviceCategoryToString](dddevicecategorytostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s category.
- [DDDeviceStateToString](dddevicestatetostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s status.
- [DDDeviceProtocol](dddevice/protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [DDDeviceProtocolToString](dddeviceprotocoltostring%28__%29.md): Returns human-readable text for the specified protocol identifier.
- [DDDeviceProtocolString](dddeviceprotocolstring.md): String values for the manner in which an app interacts with a device.
- [DDDeviceMediaPlaybackStateToString](dddevicemediaplaybackstatetostring%28__%29.md): Returns human-readable text for the specified media playback state.
