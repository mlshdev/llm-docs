> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciprofile](https://developer.apple.com/documentation/coremidi/midiciprofile)

# MIDICIProfile (Swift)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

A mapping of MIDI messages to specific sounds and synthesis behaviors, such as General MIDI, a drawbar organ, and so on.

## Declaration

```swift
class MIDICIProfile
```

## Topics

### Creating a Profile

- [init(data:)](midiciprofile/init%28data_%29.md): Creates a MIDI profile for the specified data.
- [init(data:name:)](midiciprofile/init%28data_name_%29.md): Creates a named MIDI profile for the specified data.

### Inspecting a Profile

- [name](midiciprofile/name.md): A string that describes the profile.
- [profileID](midiciprofile/profileid.md): The unique five-byte profile identifier that represents the profile.

### Initializers

- [init(coder:)](midiciprofile/init%28coder_%29.md)

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

### Capability Inquiry

- [MIDICIDiscoveryManager](midicidiscoverymanager.md): Deprecated. A singleton object that performs systemwide MIDI-CI discovery.
- [MIDICISession](midicisession.md): Deprecated. An object that represents a MIDI-CI session.
- [MIDICIProfileState](midiciprofilestate.md): An object that provides the enabled and disabled profiles for a MIDI channel or port on a device.
- [MIDICIResponder](midiciresponder.md): Deprecated. An object that responds to MIDI-CI inquiries from an initiator on behalf of a MIDI client, and handles profile and property exchange operations.

# MIDICIProfile (Objective-C)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

A mapping of MIDI messages to specific sounds and synthesis behaviors, such as General MIDI, a drawbar organ, and so on.

## Declaration

```objectivec
@interface MIDICIProfile : NSObject
```

## Topics

### Creating a Profile

- [initWithData:](midiciprofile/init%28data_%29.md): Creates a MIDI profile for the specified data.
- [initWithData:name:](midiciprofile/init%28data_name_%29.md): Creates a named MIDI profile for the specified data.

### Inspecting a Profile

- [name](midiciprofile/name.md): A string that describes the profile.
- [profileID](midiciprofile/profileid.md): The unique five-byte profile identifier that represents the profile.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Capability Inquiry

- [MIDICIDiscoveryManager](midicidiscoverymanager.md): Deprecated. A singleton object that performs systemwide MIDI-CI discovery.
- [MIDICISession](midicisession.md): Deprecated. An object that represents a MIDI-CI session.
- [MIDICIProfileState](midiciprofilestate.md): An object that provides the enabled and disabled profiles for a MIDI channel or port on a device.
- [MIDICIProfileStateList](midiciprofilestatelist.md): An array of profile state objects that describes the profile configuration for all channels of a reachable MIDI-CI node.
- [MIDICIResponder](midiciresponder.md): Deprecated. An object that responds to MIDI-CI inquiries from an initiator on behalf of a MIDI client, and handles profile and property exchange operations.
