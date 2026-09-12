> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryui/dddevicepickerviewcontroller](https://developer.apple.com/documentation/devicediscoveryui/dddevicepickerviewcontroller)

# DDDevicePickerViewController (Swift)

**Framework:** DeviceDiscoveryUI  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 16.0+

A UIKit view that displays other devices on the network, and creates an encrypted connection to a copy of your app running on that device.

## Declaration

```swift
class DDDevicePickerViewController
```

## Mentioned In

- [Connecting a tvOS app to other devices over the local network](connecting-a-tvos-app-to-other-devices-over-the-local-network.md)

<a id="overview"></a>

## Overview

Always display the device picker as a full-screen, modal view. If the user selects a device, the system sets the `endpoint` property and calls the `endpointPickedHandler`.

```swift
// This example uses the default application services parameters;
// however, you can add a `NWProtocolFramer` to provide application-level messaging.
let parameters = NWParameters.applicationService

// Create the view controller for the endpoint picker.
let devicePickerController =
DDDevicePickerViewController(browseDescriptor: NWBrowser.Descriptor.applicationService(name: "MyAppService"),
                               parameters: parameters)

// Show the network device picker as a full-screen, modal view.
devicePickerController.modalTransitionStyle = .coverVertical
show(devicePickerController, sender: nil)

let endpoint: NWEndpoint
do {
    endpoint = try await devicePickerController.endpoint
} catch {
    // A person canceled the endpoint picker view.
    return
}

// Use the endpoint here.
myDeviceConnectionManager.connectTo(endpoint: endpoint)
```

## Topics

### Creating device picker view controllers

- [init(browseDescriptor:parameters:)](dddevicepickerviewcontroller/init%28browsedescriptor_parameters_%29.md): Creates a view controller that displays the available devices on your local network.
- [init(browseDescriptor:parameters:access:)](dddevicepickerviewcontroller/init%28browsedescriptor_parameters_access_%29.md): Creates a view controller with the parameters and access level you specify that displays the available devices on network.

### Determining device support

- [isSupported(\_:using:)](dddevicepickerviewcontroller/issupported%28__using_%29.md): Returns a Boolean value that indicates whether the current device supports device discovery.

### Accessing the selected endpoint

- [endpoint](dddevicepickerviewcontroller/endpoint.md): A network connection endpoint for the device that a person selected.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Pairing with nearby devices

- [DevicePicker](devicepicker.md): A SwiftUI view that displays other devices on the network, and creates an encrypted connection to a copy of your app running on that device.
- [DevicePickerSupportedAction](devicepickersupportedaction.md): An environment value that indicates whether the current device supports device discovery.
- [Connecting a tvOS app to other devices over the local network](connecting-a-tvos-app-to-other-devices-over-the-local-network.md): Display a view in your tvOS app that lists available iOS, iPadOS, and watchOS devices that the user can connect to over their local network.

# DDDevicePickerViewController (Objective-C)

**Framework:** DeviceDiscoveryUI  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 16.0+

A UIKit view that displays other devices on the network, and creates an encrypted connection to a copy of your app running on that device.

## Declaration

```objectivec
@interface DDDevicePickerViewController : UIViewController
```

## Mentioned In

- [Connecting a tvOS app to other devices over the local network](connecting-a-tvos-app-to-other-devices-over-the-local-network.md)

<a id="overview"></a>

## Overview

Always display the device picker as a full-screen, modal view. If the user selects a device, the system sets the `endpoint` property and calls the `endpointPickedHandler`.

```swift
// This example uses the default application services parameters;
// however, you can add a `NWProtocolFramer` to provide application-level messaging.
let parameters = NWParameters.applicationService

// Create the view controller for the endpoint picker.
let devicePickerController =
DDDevicePickerViewController(browseDescriptor: NWBrowser.Descriptor.applicationService(name: "MyAppService"),
                               parameters: parameters)

// Show the network device picker as a full-screen, modal view.
devicePickerController.modalTransitionStyle = .coverVertical
show(devicePickerController, sender: nil)

let endpoint: NWEndpoint
do {
    endpoint = try await devicePickerController.endpoint
} catch {
    // A person canceled the endpoint picker view.
    return
}

// Use the endpoint here.
myDeviceConnectionManager.connectTo(endpoint: endpoint)
```

## Topics

### Creating device picker view controllers

- [initWithBrowseDescriptor:parameters:](dddevicepickerviewcontroller/initwithbrowsedescriptor_parameters_.md): Creates a view controller that displays the other, available devices on your local network.

### Determining device support

- [isSupportedForBrowseDescriptor:parameters:](dddevicepickerviewcontroller/issupportedforbrowsedescriptor_parameters_.md): Returns a Boolean value that indicates whether the current device supports device discovery.

### Accessing the selected endpoint

- [setDevicePickerCompletionHandler:](dddevicepickerviewcontroller/setdevicepickercompletionhandler_.md): Sets the completion handler that the system calls when the user selects a device from the picker view.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Pairing with nearby devices

- [Connecting a tvOS app to other devices over the local network](connecting-a-tvos-app-to-other-devices-over-the-local-network.md): Display a view in your tvOS app that lists available iOS, iPadOS, and watchOS devices that the user can connect to over their local network.
