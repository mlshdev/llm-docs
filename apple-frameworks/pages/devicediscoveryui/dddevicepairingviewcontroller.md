> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryui/dddevicepairingviewcontroller](https://developer.apple.com/documentation/devicediscoveryui/dddevicepairingviewcontroller)

# DDDevicePairingViewController

**Framework:** DeviceDiscoveryUI  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A UIKit view that displays and manages the device discovery and pairing process.

## Declaration

```swift
@MainActor @objc @preconcurrency final class DDDevicePairingViewController
```

## Topics

### Creating a device-pairing view controller

- [init(listenerProvider:access:)](dddevicepairingviewcontroller/init%28listenerprovider_access_%29.md): Initializes a device-pairing view controller with the provided listener and requested access level for device discovery.

### Configuring a device-pairing view

- [viewDidLoad()](dddevicepairingviewcontroller/viewdidload%28%29.md): Configures the view after the framework loads the view controller’s view into memory.

### Determining device support

- [isSupported(\_:)](dddevicepairingviewcontroller/issupported%28__%29.md): Returns a Boolean value that indicates whether the current device supports device discovery using Wi-FI Aware.

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

### Publishing service availability

- [Building peer-to-peer apps](https://developer.apple.com/documentation/wifiaware/building-peer-to-peer-apps): Communicate with nearby devices over a secure, high-throughput, low-latency connection by using Wi-Fi Aware.
- [DevicePairingView](devicepairingview.md): A control that allows a user to become discoverable and advertise to local devices.
- [DDDevicePairingAccess](dddevicepairingaccess.md): Specifies the access level requested for device discovery.
- [NSApplicationServices](../bundleresources/information-property-list/nsapplicationservices.md): A list of service providers and the devices that they support.
