> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicideviceinfo](https://developer.apple.com/documentation/coremidi/midicideviceinfo)

# MIDICIDeviceInfo (Swift)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An object that provides basic information about a MIDI-CI device.

> No longer supported for CoreMIDI

## Declaration

```swift
class MIDICIDeviceInfo
```

## Topics

### Creating Device Information

- [init(destination:manufacturer:family:model:revision:)](midicideviceinfo/init%28destination_manufacturer_family_model_revision_%29.md): Deprecated. Creates a new device information instance.

### Inspecting a Device

- [manufacturerID](midicideviceinfo/manufacturerid.md): Deprecated. The MIDI System Exclusive (SysEx) ID of the device manufacturer.
- [family](midicideviceinfo/family.md): Deprecated. The family to which the device belongs.
- [modelNumber](midicideviceinfo/modelnumber.md): Deprecated. The model number of the device.
- [revisionLevel](midicideviceinfo/revisionlevel.md): Deprecated. The revision number of the device model number.
- [midiDestination](midicideviceinfo/mididestination.md): Deprecated. The MIDI destination the device’s MIDI entity uses for capability inquiries.

### Initializers

- [init(coder:)](midicideviceinfo/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Inspecting a Responder

- [MIDICIInitiatiorMUID](midiciinitiatiormuid.md): The unique MIDI-CI negotiation identifier to use for a responder connection.
- [initiators](midiciresponder/initiators.md): Deprecated. An array of initiators.
- [MIDICIDeviceIdentification](midicideviceidentification.md): A structure that describes a MIDI-CI device.
- [deviceInfo](midiciresponder/deviceinfo.md): Deprecated. The MIDI-CI device’s information.

# MIDICIDeviceInfo (Objective-C)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An object that provides basic information about a MIDI-CI device.

> No longer supported for CoreMIDI

## Declaration

```objectivec
@interface MIDICIDeviceInfo : NSObject
```

## Topics

### Creating Device Information

- [initWithDestination:manufacturer:family:model:revision:](midicideviceinfo/init%28destination_manufacturer_family_model_revision_%29.md): Deprecated. Creates a new device information instance.

### Inspecting a Device

- [manufacturerID](midicideviceinfo/manufacturerid.md): Deprecated. The MIDI System Exclusive (SysEx) ID of the device manufacturer.
- [family](midicideviceinfo/family.md): Deprecated. The family to which the device belongs.
- [modelNumber](midicideviceinfo/modelnumber.md): Deprecated. The model number of the device.
- [revisionLevel](midicideviceinfo/revisionlevel.md): Deprecated. The revision number of the device model number.
- [midiDestination](midicideviceinfo/mididestination.md): Deprecated. The MIDI destination the device’s MIDI entity uses for capability inquiries.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Inspecting a Responder

- [MIDICIInitiatiorMUID](midiciinitiatiormuid.md): The unique MIDI-CI negotiation identifier to use for a responder connection.
- [initiators](midiciresponder/initiators.md): Deprecated. An array of initiators.
- [MIDICIDeviceIdentification](midicideviceidentification.md): A structure that describes a MIDI-CI device.
- [deviceInfo](midiciresponder/deviceinfo.md): Deprecated. The MIDI-CI device’s information.
