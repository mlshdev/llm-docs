> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit/accessorycontroldevice/configuration-swift.struct](https://developer.apple.com/documentation/audioaccessorykit/accessorycontroldevice/configuration-swift.struct)

# AccessoryControlDevice.Configuration

**Framework:** AudioAccessoryKit  
**Kind:** Structure  
**Availability:** iOS 26.4+

The configuration for an accessory.

## Declaration

```swift
struct Configuration
```

<a id="overview"></a>

## Overview

Use this structure to define the characteristics and capabilities of your audio accessory.

## Topics

### Creating a configuration

- [init(devicePlacement:deviceCapabilities:primaryAudioSourceDeviceIdentifier:secondaryAudioSourceDeviceIdentifier:)](configuration-swift.struct/init%28deviceplacement_devicecapabilities_primaryaudiosourcedeviceidentifier_secondaryaudiosourcedeviceidentifier_%29.md): Creates an audio accessory configuration.

### Accessing configuration options

- [deviceCapabilities](configuration-swift.struct/devicecapabilities.md): The capabilities the accessory supports.
- [devicePlacement](configuration-swift.struct/deviceplacement.md): The physical position of the accessory.
- [primaryAudioSourceDeviceIdentifier](configuration-swift.struct/primaryaudiosourcedeviceidentifier.md): The Bluetooth address of the device providing the primary source of audio.
- [secondaryAudioSourceDeviceIdentifier](configuration-swift.struct/secondaryaudiosourcedeviceidentifier.md): The Bluetooth address of the device providing the secondary source of audio.

### Initializers

- [init(devicePlacement:deviceCapabilities:primaryAudioSourceDeviceIdentifier:secondaryAudioSourceDeviceIdentifier:spatialExtensionDescription:)](configuration-swift.struct/init%28deviceplacement_devicecapabilities_primaryaudiosourcedeviceidentifier_secondaryaudiosourcedeviceidentifier_spatialextensiondescription_%29.md): Creates a new device configuration with spatial audio support.

### Instance Properties

- [spatialExtensionDescription](configuration-swift.struct/spatialextensiondescription.md): The spatial audio component description.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Device characteristics

- [AccessoryControlDevice.Placement](placement.md): The physical placement of an audio accessory.
- [AccessoryControlDevice.Capabilities](capabilities.md): A set of capabilities that an audio accessory supports.
