> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciresponder](https://developer.apple.com/documentation/coremidi/midiciresponder)

# MIDICIResponder (Swift)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An object that responds to MIDI-CI inquiries from an initiator on behalf of a MIDI client, and handles profile and property exchange operations.

> No longer supported for CoreMIDI

## Declaration

```swift
class MIDICIResponder
```

## Topics

### Creating a Responder

- [init(deviceInfo:profileDelegate:profileStates:supportProperties:)](midiciresponder/init%28deviceinfo_profiledelegate_profilestates_supportproperties_%29.md): Deprecated. Creates a new responder.

### Managing the Life Cycle

- [start()](midiciresponder/start%28%29.md): Deprecated. Starts receiving initiator requests.
- [stop()](midiciresponder/stop%28%29.md): Deprecated. Stops receiving initiator requests and disconnects all connected initiators.

### Setting a Responder Delegate

- [profileDelegate](midiciresponder/profiledelegate.md): Deprecated. The profile delegate.
- [MIDICIProfileResponderDelegate](midiciprofileresponderdelegate.md): Deprecated. A protocol that defines the methods to respond to MIDI-CI responder life-cycle events.

### Inspecting a Responder

- [MIDICIInitiatiorMUID](midiciinitiatiormuid.md): The unique MIDI-CI negotiation identifier to use for a responder connection.
- [initiators](midiciresponder/initiators.md): Deprecated. An array of initiators.
- [MIDICIDeviceIdentification](midicideviceidentification.md): A structure that describes a MIDI-CI device.
- [MIDICIDeviceInfo](midicideviceinfo.md): Deprecated. An object that provides basic information about a MIDI-CI device.
- [deviceInfo](midiciresponder/deviceinfo.md): Deprecated. The MIDI-CI device’s information.

### Broadcasting Profile Changes

- [notify(\_:onChannel:isEnabled:)](midiciresponder/notify%28__onchannel_isenabled_%29.md): Deprecated. Enables or disables a profile and notifies all connected initiators.
- [send(\_:onChannel:profileData:)](midiciresponder/send%28__onchannel_profiledata_%29.md): Deprecated. Sends profile-specific data to all connected initiators.

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

### Capability Inquiry

- [MIDICIDiscoveryManager](midicidiscoverymanager.md): Deprecated. A singleton object that performs systemwide MIDI-CI discovery.
- [MIDICISession](midicisession.md): Deprecated. An object that represents a MIDI-CI session.
- [MIDICIProfile](midiciprofile.md): A mapping of MIDI messages to specific sounds and synthesis behaviors, such as General MIDI, a drawbar organ, and so on.
- [MIDICIProfileState](midiciprofilestate.md): An object that provides the enabled and disabled profiles for a MIDI channel or port on a device.

# MIDICIResponder (Objective-C)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An object that responds to MIDI-CI inquiries from an initiator on behalf of a MIDI client, and handles profile and property exchange operations.

> No longer supported for CoreMIDI

## Declaration

```objectivec
@interface MIDICIResponder : NSObject
```

## Topics

### Creating a Responder

- [initWithDeviceInfo:profileDelegate:profileStates:supportProperties:](midiciresponder/init%28deviceinfo_profiledelegate_profilestates_supportproperties_%29.md): Deprecated. Creates a new responder.

### Managing the Life Cycle

- [start](midiciresponder/start%28%29.md): Deprecated. Starts receiving initiator requests.
- [stop](midiciresponder/stop%28%29.md): Deprecated. Stops receiving initiator requests and disconnects all connected initiators.

### Setting a Responder Delegate

- [profileDelegate](midiciresponder/profiledelegate.md): Deprecated. The profile delegate.
- [MIDICIProfileResponderDelegate](midiciprofileresponderdelegate.md): Deprecated. A protocol that defines the methods to respond to MIDI-CI responder life-cycle events.

### Inspecting a Responder

- [MIDICIInitiatiorMUID](midiciinitiatiormuid.md): The unique MIDI-CI negotiation identifier to use for a responder connection.
- [initiators](midiciresponder/initiators.md): Deprecated. An array of initiators.
- [MIDICIDeviceIdentification](midicideviceidentification.md): A structure that describes a MIDI-CI device.
- [MIDICIDeviceInfo](midicideviceinfo.md): Deprecated. An object that provides basic information about a MIDI-CI device.
- [deviceInfo](midiciresponder/deviceinfo.md): Deprecated. The MIDI-CI device’s information.

### Broadcasting Profile Changes

- [notifyProfile:onChannel:isEnabled:](midiciresponder/notify%28__onchannel_isenabled_%29.md): Deprecated. Enables or disables a profile and notifies all connected initiators.
- [sendProfile:onChannel:profileData:](midiciresponder/send%28__onchannel_profiledata_%29.md): Deprecated. Sends profile-specific data to all connected initiators.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Capability Inquiry

- [MIDICIDiscoveryManager](midicidiscoverymanager.md): Deprecated. A singleton object that performs systemwide MIDI-CI discovery.
- [MIDICISession](midicisession.md): Deprecated. An object that represents a MIDI-CI session.
- [MIDICIProfile](midiciprofile.md): A mapping of MIDI messages to specific sounds and synthesis behaviors, such as General MIDI, a drawbar organ, and so on.
- [MIDICIProfileState](midiciprofilestate.md): An object that provides the enabled and disabled profiles for a MIDI channel or port on a device.
- [MIDICIProfileStateList](midiciprofilestatelist.md): An array of profile state objects that describes the profile configuration for all channels of a reachable MIDI-CI node.
