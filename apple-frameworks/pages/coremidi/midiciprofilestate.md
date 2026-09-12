> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciprofilestate](https://developer.apple.com/documentation/coremidi/midiciprofilestate)

# MIDICIProfileState (Swift)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

An object that provides the enabled and disabled profiles for a MIDI channel or port on a device.

## Declaration

```swift
class MIDICIProfileState
```

## Topics

### Creating a Profile State

- [init(channel:enabledProfiles:disabledProfiles:)](midiciprofilestate/init%28channel_enabledprofiles_disabledprofiles_%29.md): Deprecated. Creates a new profile state object for the specified MIDI channel and profiles.
- [init(enabledProfiles:disabledProfiles:)](midiciprofilestate/init%28enabledprofiles_disabledprofiles_%29.md): Deprecated. Creates a new profile state object for the specified profiles.

### Accessing the MIDI Channel

- [midiChannel](midiciprofilestate/midichannel.md): The MIDI channel to which this state applies.

### Accessing Profiles

- [enabledProfiles](midiciprofilestate/enabledprofiles.md): The object’s enabled profiles.
- [disabledProfiles](midiciprofilestate/disabledprofiles.md): The object’s disabled profiles.

### Initializers

- [init(coder:)](midiciprofilestate/init%28coder_%29.md)

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
- [MIDICIProfile](midiciprofile.md): A mapping of MIDI messages to specific sounds and synthesis behaviors, such as General MIDI, a drawbar organ, and so on.
- [MIDICIResponder](midiciresponder.md): Deprecated. An object that responds to MIDI-CI inquiries from an initiator on behalf of a MIDI client, and handles profile and property exchange operations.

# MIDICIProfileState (Objective-C)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

An object that provides the enabled and disabled profiles for a MIDI channel or port on a device.

## Declaration

```objectivec
@interface MIDICIProfileState : NSObject
```

## Topics

### Creating a Profile State

- [initWithChannel:enabledProfiles:disabledProfiles:](midiciprofilestate/init%28channel_enabledprofiles_disabledprofiles_%29.md): Deprecated. Creates a new profile state object for the specified MIDI channel and profiles.
- [initWithEnabledProfiles:disabledProfiles:](midiciprofilestate/init%28enabledprofiles_disabledprofiles_%29.md): Deprecated. Creates a new profile state object for the specified profiles.

### Accessing the MIDI Channel

- [midiChannel](midiciprofilestate/midichannel.md): The MIDI channel to which this state applies.

### Accessing Profiles

- [enabledProfiles](midiciprofilestate/enabledprofiles.md): The object’s enabled profiles.
- [disabledProfiles](midiciprofilestate/disabledprofiles.md): The object’s disabled profiles.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Capability Inquiry

- [MIDICIDiscoveryManager](midicidiscoverymanager.md): Deprecated. A singleton object that performs systemwide MIDI-CI discovery.
- [MIDICISession](midicisession.md): Deprecated. An object that represents a MIDI-CI session.
- [MIDICIProfile](midiciprofile.md): A mapping of MIDI messages to specific sounds and synthesis behaviors, such as General MIDI, a drawbar organ, and so on.
- [MIDICIProfileStateList](midiciprofilestatelist.md): An array of profile state objects that describes the profile configuration for all channels of a reachable MIDI-CI node.
- [MIDICIResponder](midiciresponder.md): Deprecated. An object that responds to MIDI-CI inquiries from an initiator on behalf of a MIDI client, and handles profile and property exchange operations.
