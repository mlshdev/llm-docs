> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevice/category-swift.enum](https://developer.apple.com/documentation/devicediscoveryextension/dddevice/category-swift.enum)

# DDDevice.Category (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

An option that determines the icon for the device in the picker UI.

## Declaration

```swift
enum Category
```

<a id="overview"></a>

## Overview

The device ([DDDevice](../dddevice.md)) [category](category-swift.property.md) property is of this type.

Each value in this enumeration determines a different icon that the picker UI ([AVRoutePickerView](../../avkit/avroutepickerview.md)) displays, which helps the user visually confirm that their selection corresponds to the device they intend to stream media to.

## Topics

### Choosing an icon for the device picker

- [DDDevice.Category.desktopComputer](category-swift.enum/desktopcomputer.md): An icon that depicts a desktop computer.
- [DDDevice.Category.hifiSpeaker](category-swift.enum/hifispeaker.md): An icon that depicts a high-fidelity speaker.
- [DDDevice.Category.hifiSpeakerMultiple](category-swift.enum/hifispeakermultiple.md): An icon that depicts multiple high-fidelity speakers.
- [DDDevice.Category.laptopComputer](category-swift.enum/laptopcomputer.md): An icon that depicts a laptop computer.
- [DDDevice.Category.tv](category-swift.enum/tv.md): An icon that depicts a television.
- [DDDevice.Category.tvWithMediaBox](category-swift.enum/tvwithmediabox.md): An icon that depicts a TV with a set-top box.

### Enumeration Cases

- [DDDevice.Category.accessorySetup](category-swift.enum/accessorysetup.md)

### Initializers

- [init(rawValue:)](category-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Device information

- [DDDevice](../dddevice.md): An object that describes a discovered device of interest.
- [DDDeviceState](../dddevicestate.md): A state that represents the level of user interaction with the device.
- [DDDeviceCategoryToString(\_:)](../dddevicecategorytostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s category.
- [DDDeviceStateToString(\_:)](../dddevicestatetostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s status.
- [DDDevice.Protocol](protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [DDDeviceProtocolToString(\_:)](../dddeviceprotocoltostring%28__%29.md): Returns human-readable text for the specified protocol identifier.
- [DDDeviceProtocolString](../dddeviceprotocolstring.md): String values for the manner in which an app interacts with a device.
- [DDDeviceMediaPlaybackStateToString(\_:)](../dddevicemediaplaybackstatetostring%28__%29.md): Returns human-readable text for the specified media playback state.

# DDDeviceCategory (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

An option that determines the icon for the device in the picker UI.

## Declaration

```objectivec
enum DDDeviceCategory : NSInteger;
```

<a id="overview"></a>

## Overview

The device ([DDDevice](../dddevice.md)) [category](category-swift.property.md) property is of this type.

Each value in this enumeration determines a different icon that the picker UI ([AVRoutePickerView](../../avkit/avroutepickerview.md)) displays, which helps the user visually confirm that their selection corresponds to the device they intend to stream media to.

## Topics

### Choosing an icon for the device picker

- [DDDeviceCategoryDesktopComputer](category-swift.enum/desktopcomputer.md): An icon that depicts a desktop computer.
- [DDDeviceCategoryHiFiSpeaker](category-swift.enum/hifispeaker.md): An icon that depicts a high-fidelity speaker.
- [DDDeviceCategoryHiFiSpeakerMultiple](category-swift.enum/hifispeakermultiple.md): An icon that depicts multiple high-fidelity speakers.
- [DDDeviceCategoryLaptopComputer](category-swift.enum/laptopcomputer.md): An icon that depicts a laptop computer.
- [DDDeviceCategoryTV](category-swift.enum/tv.md): An icon that depicts a television.
- [DDDeviceCategoryTVWithMediaBox](category-swift.enum/tvwithmediabox.md): An icon that depicts a TV with a set-top box.

### Enumeration Cases

- [DDDeviceCategoryAccessorySetup](category-swift.enum/accessorysetup.md)

## See Also

### Device information

- [DDDevice](../dddevice.md): An object that describes a discovered device of interest.
- [DDDeviceState](../dddevicestate.md): A state that represents the level of user interaction with the device.
- [DDDeviceCategoryToString](../dddevicecategorytostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s category.
- [DDDeviceStateToString](../dddevicestatetostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s status.
- [DDDeviceProtocol](protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [DDDeviceProtocolToString](../dddeviceprotocoltostring%28__%29.md): Returns human-readable text for the specified protocol identifier.
- [DDDeviceProtocolString](../dddeviceprotocolstring.md): String values for the manner in which an app interacts with a device.
- [DDDeviceMediaPlaybackStateToString](../dddevicemediaplaybackstatetostring%28__%29.md): Returns human-readable text for the specified media playback state.
