> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediaoutputdevice](https://developer.apple.com/documentation/mediadevice/mediaoutputdevice)

# MediaOutputDevice

**Framework:** Media Device  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Represents a discoverable media output device such as a TV, speaker, or streaming stick.

## Declaration

```swift
struct MediaOutputDevice
```

## Mentioned In

- [Creating a media device extension](creating-a-media-device-extension.md)

## Topics

### Structures

- [MediaOutputDevice.AuthorizationMethod](mediaoutputdevice/authorizationmethod.md): Specifies what kind of authorization UI to present when connecting to a device.
- [MediaOutputDevice.Capabilities](mediaoutputdevice/capabilities-swift.struct.md): Defines the media capabilities supported by a [MediaOutputDevice](mediaoutputdevice.md).

### Operators

- [==(\_:\_:)](mediaoutputdevice/==%28____%29.md): Returns a Boolean value that indicates whether two devices are equal.

### Initializers

- [init(id:displayName:capabilities:canGroupWithCurrentlyActivatedDevices:deviceType:volumeControl:canMute:requiredNetworkEndpoints:txtRecords:supportsSimultaneousSessions:)](mediaoutputdevice/init%28id_displayname_capabilities_cangroupwithcurrentlyactivateddevices_devicetype_volumecontrol_canmute_requirednetworkendpoints_txtrecords_supportssimultaneoussessions_%29.md): Creates a new media output device with the specified properties, requiring at least one network endpoint.

### Instance Properties

- [canGroupWithCurrentlyActivatedDevices](mediaoutputdevice/cangroupwithcurrentlyactivateddevices.md): Indicates whether this device can be grouped with devices that are currently activated.
- [canMute](mediaoutputdevice/canmute.md): Indicates whether the device supports muting audio output.
- [capabilities](mediaoutputdevice/capabilities-swift.property.md): The capabilities of the device.
- [description](mediaoutputdevice/description.md): A textual representation of the device.
- [deviceType](mediaoutputdevice/devicetype-swift.property.md): The type of device, used for display in user interfaces.
- [displayName](mediaoutputdevice/displayname.md): A display name for the device, shown in user interfaces.
- [id](mediaoutputdevice/id.md): A unique identifier for the device.
- [networkEndpoints](mediaoutputdevice/networkendpoints.md): The network endpoints for this device group.
- [supportsSimultaneousSessions](mediaoutputdevice/supportssimultaneoussessions.md): Indicates whether the device supports receiving simultaneous media sessions via [MediaOutputSession](mediaoutputsession.md).
- [txtRecords](mediaoutputdevice/txtrecords.md): TXT records associated with the device discovered via network protocols.
- [volumeControl](mediaoutputdevice/volumecontrol-swift.property.md): The type of volume control supported by this device.

### Instance Methods

- [hash(into:)](mediaoutputdevice/hash%28into_%29.md): Hashes the essential components of the device by feeding them into the given hasher.

### Enumerations

- [MediaOutputDevice.DeviceType](mediaoutputdevice/devicetype-swift.enum.md): A device type used for display in user interfaces.
- [MediaOutputDevice.VolumeControl](mediaoutputdevice/volumecontrol-swift.enum.md): Defines the type of volume control supported by an output device or group.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Device discovery and management

- [MediaOutputDevice.Capabilities](mediaoutputdevice/capabilities-swift.struct.md): Defines the media capabilities supported by a [MediaOutputDevice](mediaoutputdevice.md).
- [MediaOutputDevice.DeviceType](mediaoutputdevice/devicetype-swift.enum.md): A device type used for display in user interfaces.
- [MediaOutputDevice.VolumeControl](mediaoutputdevice/volumecontrol-swift.enum.md): Defines the type of volume control supported by an output device or group.
- [MediaOutputDevice.AuthorizationMethod](mediaoutputdevice/authorizationmethod.md): Specifies what kind of authorization UI to present when connecting to a device.
