> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension](https://developer.apple.com/documentation/devicediscoveryextension)

# DeviceDiscoveryExtension (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Framework  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 15.0+ · visionOS 1.0+

Stream media to a third-party device that a user selects in a system menu.

<a id="overview"></a>

## Overview

Use DeviceDiscoveryExtension (DDE) to discover third-party media receivers to which your app can stream AV content.

When a user invokes your app’s media-streaming UI, you can offer a third-party, local-network, or Bluetooth device as a streaming destination in a route picker view ([AVRoutePickerView](avkit/avroutepickerview.md)). The figure below illustrates actors in the discovery process. As depicted in the System section, your app’s device discovery extension loads when the view displays.

![A flowchart with four boxes in a horizontal row from left to right, each labeled respectively: user, app, system, and third-party device. Lines that represent channels extend downward from each box. At the top of the user channel is the start of a continuous arrow that traces a path with switchbacks through all the channels. Multiple steps of the device discovery process are shown in this path with arrows that indicate the order in which they occur, from the user invoking it until the third-party device plays the media.](https://developer.apple.com/images/com.apple.devicediscoveryextension/media-4056835@2x.png)

Once the extension loads:

- The extension runs in a system process and searches the local network and Bluetooth devices for a specific media receiver.
- When the extension finds the device, it returns the device to the system, which displays it in the picker view as an available option.
- The user makes a selection and the system passes the chosen device to the app, which can then stream media to the device.

Because DDE runs in a system sandbox, the extension doesn’t need to ask the user for local-network or Bluetooth permissions. The picker view displays discovered third-party devices and protocols in the same system menu as AirPlay, which provides a unified device-selection experience.

> **Note**

>  To stream to a third-party device that you don’t manufacture, bundle your app with the device discovery extension that the manufacturer provides as part of its SDK.

## Topics

### Essentials

- [Discovering a third-party media-streaming device](devicediscoveryextension/discovering-a-third-party-media-streaming-device.md): Build an extension that streams media to a server app in iOS or macOS.
- [Media Device Discovery Extension](bundleresources/entitlements/com.apple.developer.media-device-discovery-extension.md): Deprecated. An entitlement for an app extension that adds a specific third-party media receiver to a system device-picker UI.

### Extension

- [DDDiscoveryExtension](devicediscoveryextension/dddiscoveryextension.md): A specification that enables the framework to start and stop the extension’s discovery process.
- [DDDiscoverySession](devicediscoveryextension/dddiscoverysession.md): An object that relays device discovery events from the extension to the system.
- [DDDiscoveryExtensionConfigurationProtocol](devicediscoveryextension/dddiscoveryextensionconfigurationprotocol.md): A specification that provides a communication channel between the extension and the framework.

### Life cycle

- [DDDeviceEvent](devicediscoveryextension/dddeviceevent.md): An object that provides a device or communicates its change in status.
- [DDDeviceEvent.EventType](devicediscoveryextension/dddeviceevent/eventtype-swift.enum.md): Identifiers for the types of events that occur in the device discovery life cycle.
- [DDEventTypeToString(\_:)](devicediscoveryextension/ddeventtypetostring%28__%29.md): Returns human-readable text for the specified event identifier.
- [DDEventHandler](devicediscoveryextension/ddeventhandler.md): A function that the extension invokes to signal an event.

### Device information

- [DDDevice](devicediscoveryextension/dddevice.md): An object that describes a discovered device of interest.
- [DDDevice.Category](devicediscoveryextension/dddevice/category-swift.enum.md): An option that determines the icon for the device in the picker UI.
- [DDDeviceState](devicediscoveryextension/dddevicestate.md): A state that represents the level of user interaction with the device.
- [DDDeviceCategoryToString(\_:)](devicediscoveryextension/dddevicecategorytostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s category.
- [DDDeviceStateToString(\_:)](devicediscoveryextension/dddevicestatetostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s status.
- [DDDevice.Protocol](devicediscoveryextension/dddevice/protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [DDDeviceProtocolToString(\_:)](devicediscoveryextension/dddeviceprotocoltostring%28__%29.md): Returns human-readable text for the specified protocol identifier.
- [DDDeviceProtocolString](devicediscoveryextension/dddeviceprotocolstring.md): String values for the manner in which an app interacts with a device.
- [DDDeviceMediaPlaybackStateToString(\_:)](devicediscoveryextension/dddevicemediaplaybackstatetostring%28__%29.md): Returns human-readable text for the specified media playback state.

### Errors

- [DDError](devicediscoveryextension/dderror.md): An error that the framework reports.
- [DDError.Code](devicediscoveryextension/dderror/code.md): Codes that identify errors that can occur during the framework’s use.
- [DDErrorHandler](devicediscoveryextension/dderrorhandler.md): A function that executes code you provide when an operation returns an error or completes successfully.
- [DDErrorOutType](devicediscoveryextension/dderrorouttype.md): A type for framework functions that return error references.
- [DDErrorDomain](devicediscoveryextension/dderrordomain.md): A unique error domain for the framework.

### Reference

- [DeviceDiscoveryExtension Enumerations](devicediscoveryextension/devicediscoveryextension-enumerations.md)

# DeviceDiscoveryExtension (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Framework  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 15.0+ · visionOS 1.0+

Stream media to a third-party device that a user selects in a system menu.

<a id="overview"></a>

## Overview

Use DeviceDiscoveryExtension (DDE) to discover third-party media receivers to which your app can stream AV content.

When a user invokes your app’s media-streaming UI, you can offer a third-party, local-network, or Bluetooth device as a streaming destination in a route picker view ([AVRoutePickerView](avkit/avroutepickerview.md)). The figure below illustrates actors in the discovery process. As depicted in the System section, your app’s device discovery extension loads when the view displays.

![A flowchart with four boxes in a horizontal row from left to right, each labeled respectively: user, app, system, and third-party device. Lines that represent channels extend downward from each box. At the top of the user channel is the start of a continuous arrow that traces a path with switchbacks through all the channels. Multiple steps of the device discovery process are shown in this path with arrows that indicate the order in which they occur, from the user invoking it until the third-party device plays the media.](https://developer.apple.com/images/com.apple.devicediscoveryextension/media-4056835@2x.png)

Once the extension loads:

- The extension runs in a system process and searches the local network and Bluetooth devices for a specific media receiver.
- When the extension finds the device, it returns the device to the system, which displays it in the picker view as an available option.
- The user makes a selection and the system passes the chosen device to the app, which can then stream media to the device.

Because DDE runs in a system sandbox, the extension doesn’t need to ask the user for local-network or Bluetooth permissions. The picker view displays discovered third-party devices and protocols in the same system menu as AirPlay, which provides a unified device-selection experience.

> **Note**

>  To stream to a third-party device that you don’t manufacture, bundle your app with the device discovery extension that the manufacturer provides as part of its SDK.

## Topics

### Essentials

- [Discovering a third-party media-streaming device](devicediscoveryextension/discovering-a-third-party-media-streaming-device.md): Build an extension that streams media to a server app in iOS or macOS.
- [Media Device Discovery Extension](bundleresources/entitlements/com.apple.developer.media-device-discovery-extension.md): Deprecated. An entitlement for an app extension that adds a specific third-party media receiver to a system device-picker UI.

### Extension

- [DDDiscoverySession](devicediscoveryextension/dddiscoverysession.md): An object that relays device discovery events from the extension to the system.

### Life cycle

- [DDDeviceEvent](devicediscoveryextension/dddeviceevent.md): An object that provides a device or communicates its change in status.
- [DDEventType](devicediscoveryextension/dddeviceevent/eventtype-swift.enum.md): Identifiers for the types of events that occur in the device discovery life cycle.
- [DDEventTypeToString](devicediscoveryextension/ddeventtypetostring%28__%29.md): Returns human-readable text for the specified event identifier.
- [DDEventHandler](devicediscoveryextension/ddeventhandler.md): A function that the extension invokes to signal an event.

### Device information

- [DDDevice](devicediscoveryextension/dddevice.md): An object that describes a discovered device of interest.
- [DDDeviceCategory](devicediscoveryextension/dddevice/category-swift.enum.md): An option that determines the icon for the device in the picker UI.
- [DDDeviceState](devicediscoveryextension/dddevicestate.md): A state that represents the level of user interaction with the device.
- [DDDeviceCategoryToString](devicediscoveryextension/dddevicecategorytostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s category.
- [DDDeviceStateToString](devicediscoveryextension/dddevicestatetostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s status.
- [DDDeviceProtocol](devicediscoveryextension/dddevice/protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [DDDeviceProtocolToString](devicediscoveryextension/dddeviceprotocoltostring%28__%29.md): Returns human-readable text for the specified protocol identifier.
- [DDDeviceProtocolString](devicediscoveryextension/dddeviceprotocolstring.md): String values for the manner in which an app interacts with a device.
- [DDDeviceMediaPlaybackStateToString](devicediscoveryextension/dddevicemediaplaybackstatetostring%28__%29.md): Returns human-readable text for the specified media playback state.

### Errors

- [DDErrorCode](devicediscoveryextension/dderror/code.md): Codes that identify errors that can occur during the framework’s use.
- [DDErrorHandler](devicediscoveryextension/dderrorhandler.md): A function that executes code you provide when an operation returns an error or completes successfully.
- [DDErrorOutType](devicediscoveryextension/dderrorouttype.md): A type for framework functions that return error references.
- [DDErrorDomain](devicediscoveryextension/dderrordomain.md): A unique error domain for the framework.

### Reference

- [DeviceDiscoveryExtension Enumerations](devicediscoveryextension/devicediscoveryextension-enumerations.md)

### Macros

- [DD_EXTERN](devicediscoveryextension/dd_extern.md)
- [dd_os_ownership](devicediscoveryextension/dd_os_ownership.md)

### Enumerations

- [DDDeviceWiFiAwareServiceRole](devicediscoveryextension/dddevice/wifiawareservicerole-swift.enum.md)
