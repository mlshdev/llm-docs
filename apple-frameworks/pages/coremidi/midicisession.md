> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicisession](https://developer.apple.com/documentation/coremidi/midicisession)

# MIDICISession (Swift)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An object that represents a MIDI-CI session.

> No longer supported for CoreMIDI

## Declaration

```swift
class MIDICISession
```

<a id="overview"></a>

## Overview

A MIDI-CI session is a bidirectional communication path between a MIDI source and destination identified using MIDI-CI discovery. Use a session to manipulate MIDI-CI profiles and to discover device capabilities.

## Topics

### Creating a Session

- [init(discoveredNode:dataReadyHandler:disconnectHandler:)](midicisession/init%28discoverednode_datareadyhandler_disconnecthandler_%29.md): Deprecated. Creates a MIDI-CI session.

### Configuring a Session

- [profileState(forChannel:)](midicisession/profilestate%28forchannel_%29.md): Deprecated. Returns the profile state for the specified MIDI channel number.
- [enable(\_:onChannel:)](midicisession/enable%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to enable a profile for a specific MIDI channel number.
- [disableProfile(\_:onChannel:)](midicisession/disableprofile%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to disable a profile for a specific MIDI channel number.
- [MIDICIProfileChangedBlock](midiciprofilechangedblock.md): Deprecated. A block the system calls to indicate it has enabled or disabled a profile.
- [profileChangedCallback](midicisession/profilechangedcallback.md): Deprecated. An optional block the system calls after it enables or disables a profile.
- [send(\_:onChannel:profileData:)](midicisession/send%28__onchannel_profiledata_%29.md): Deprecated. Sends profile-specific data to the MIDI-CI session.
- [MIDICIProfileSpecificDataBlock](midiciprofilespecificdatablock.md): Deprecated. A block the system calls when a MIDI-CI session or responder receives profile-specific data.
- [profileSpecificDataHandler](midicisession/profilespecificdatahandler.md): Deprecated. An optional block the system calls when a device sends profile-specific data to the session.
- [MIDIChannelsWholePort](midichannelswholeport.md): A constant value that indicates to use all channels of the port.

### Inspecting a Session

- [deviceInfo](midicisession/deviceinfo.md): Deprecated. Information about a MIDI-CI device.
- [maxSysExSize](midicisession/maxsysexsize.md): Deprecated. The maximum size of System Exclusive (SysEx) messages.
- [midiDestination](midicisession/mididestination.md): Deprecated. The MIDI destination with which the session is communicating.
- [maxPropertyRequests](midicisession/maxpropertyrequests.md): Deprecated. The maximum number of simultaneous property exchange requests, if supported.
- [supportsProfileCapability](midicisession/supportsprofilecapability.md): Deprecated. A Boolean value that indicates whether the entity supports the MIDI-CI profile’s capability.
- [supportsPropertyCapability](midicisession/supportspropertycapability.md): Deprecated. A Boolean value that indicates whether the entity supports the MIDI-CI property exchange capability.

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
- [MIDICIProfile](midiciprofile.md): A mapping of MIDI messages to specific sounds and synthesis behaviors, such as General MIDI, a drawbar organ, and so on.
- [MIDICIProfileState](midiciprofilestate.md): An object that provides the enabled and disabled profiles for a MIDI channel or port on a device.
- [MIDICIResponder](midiciresponder.md): Deprecated. An object that responds to MIDI-CI inquiries from an initiator on behalf of a MIDI client, and handles profile and property exchange operations.

# MIDICISession (Objective-C)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An object that represents a MIDI-CI session.

> No longer supported for CoreMIDI

## Declaration

```objectivec
@interface MIDICISession : NSObject
```

<a id="overview"></a>

## Overview

A MIDI-CI session is a bidirectional communication path between a MIDI source and destination identified using MIDI-CI discovery. Use a session to manipulate MIDI-CI profiles and to discover device capabilities.

## Topics

### Creating a Session

- [initWithDiscoveredNode:dataReadyHandler:disconnectHandler:](midicisession/init%28discoverednode_datareadyhandler_disconnecthandler_%29.md): Deprecated. Creates a MIDI-CI session.

### Configuring a Session

- [profileStateForChannel:](midicisession/profilestate%28forchannel_%29.md): Deprecated. Returns the profile state for the specified MIDI channel number.
- [enableProfile:onChannel:error:](midicisession/enable%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to enable a profile for a specific MIDI channel number.
- [disableProfile:onChannel:error:](midicisession/disableprofile%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to disable a profile for a specific MIDI channel number.
- [MIDICIProfileChangedBlock](midiciprofilechangedblock.md): Deprecated. A block the system calls to indicate it has enabled or disabled a profile.
- [profileChangedCallback](midicisession/profilechangedcallback.md): Deprecated. An optional block the system calls after it enables or disables a profile.
- [sendProfile:onChannel:profileData:](midicisession/send%28__onchannel_profiledata_%29.md): Deprecated. Sends profile-specific data to the MIDI-CI session.
- [MIDICIProfileSpecificDataBlock](midiciprofilespecificdatablock.md): Deprecated. A block the system calls when a MIDI-CI session or responder receives profile-specific data.
- [profileSpecificDataHandler](midicisession/profilespecificdatahandler.md): Deprecated. An optional block the system calls when a device sends profile-specific data to the session.
- [MIDIChannelsWholePort](midichannelswholeport.md): A constant value that indicates to use all channels of the port.

### Inspecting a Session

- [deviceInfo](midicisession/deviceinfo.md): Deprecated. Information about a MIDI-CI device.
- [maxSysExSize](midicisession/maxsysexsize.md): Deprecated. The maximum size of System Exclusive (SysEx) messages.
- [midiDestination](midicisession/mididestination.md): Deprecated. The MIDI destination with which the session is communicating.
- [maxPropertyRequests](midicisession/maxpropertyrequests.md): Deprecated. The maximum number of simultaneous property exchange requests, if supported.
- [supportsProfileCapability](midicisession/supportsprofilecapability.md): Deprecated. A Boolean value that indicates whether the entity supports the MIDI-CI profile’s capability.
- [supportsPropertyCapability](midicisession/supportspropertycapability.md): Deprecated. A Boolean value that indicates whether the entity supports the MIDI-CI property exchange capability.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Capability Inquiry

- [MIDICIDiscoveryManager](midicidiscoverymanager.md): Deprecated. A singleton object that performs systemwide MIDI-CI discovery.
- [MIDICIProfile](midiciprofile.md): A mapping of MIDI messages to specific sounds and synthesis behaviors, such as General MIDI, a drawbar organ, and so on.
- [MIDICIProfileState](midiciprofilestate.md): An object that provides the enabled and disabled profiles for a MIDI channel or port on a device.
- [MIDICIProfileStateList](midiciprofilestatelist.md): An array of profile state objects that describes the profile configuration for all channels of a reachable MIDI-CI node.
- [MIDICIResponder](midiciresponder.md): Deprecated. An object that responds to MIDI-CI inquiries from an initiator on behalf of a MIDI client, and handles profile and property exchange operations.
