> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciprofilespecificdatablock](https://developer.apple.com/documentation/coremidi/midiciprofilespecificdatablock)

# MIDICIProfileSpecificDataBlock (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

A block the system calls when a MIDI-CI session or responder receives profile-specific data.

> No longer supported for CoreMIDI

## Declaration

```swift
typealias MIDICIProfileSpecificDataBlock = (MIDICISession, MIDIChannelNumber, MIDICIProfile, Data) -> Void
```

## Parameters

- `session`: The MIDI-CI session.
- `channel`: The MIDI channel number.
- `profile`: The profile that received data.
- `profileSpecificData`: The profile-specific data sent.

## See Also

### Configuring a Session

- [profileState(forChannel:)](midicisession/profilestate%28forchannel_%29.md): Deprecated. Returns the profile state for the specified MIDI channel number.
- [enable(\_:onChannel:)](midicisession/enable%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to enable a profile for a specific MIDI channel number.
- [disableProfile(\_:onChannel:)](midicisession/disableprofile%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to disable a profile for a specific MIDI channel number.
- [MIDICIProfileChangedBlock](midiciprofilechangedblock.md): Deprecated. A block the system calls to indicate it has enabled or disabled a profile.
- [profileChangedCallback](midicisession/profilechangedcallback.md): Deprecated. An optional block the system calls after it enables or disables a profile.
- [send(\_:onChannel:profileData:)](midicisession/send%28__onchannel_profiledata_%29.md): Deprecated. Sends profile-specific data to the MIDI-CI session.
- [profileSpecificDataHandler](midicisession/profilespecificdatahandler.md): Deprecated. An optional block the system calls when a device sends profile-specific data to the session.
- [MIDIChannelsWholePort](midichannelswholeport.md): A constant value that indicates to use all channels of the port.

# MIDICIProfileSpecificDataBlock (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

A block the system calls when a MIDI-CI session or responder receives profile-specific data.

> No longer supported for CoreMIDI

## Declaration

```objectivec
typedef void (^)(MIDICISession *, unsigned char, MIDICIProfile *, NSData *) MIDICIProfileSpecificDataBlock;
```

## Parameters

- `session`: The MIDI-CI session.
- `channel`: The MIDI channel number.
- `profile`: The profile that received data.
- `profileSpecificData`: The profile-specific data sent.

## See Also

### Configuring a Session

- [profileStateForChannel:](midicisession/profilestate%28forchannel_%29.md): Deprecated. Returns the profile state for the specified MIDI channel number.
- [enableProfile:onChannel:error:](midicisession/enable%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to enable a profile for a specific MIDI channel number.
- [disableProfile:onChannel:error:](midicisession/disableprofile%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to disable a profile for a specific MIDI channel number.
- [MIDICIProfileChangedBlock](midiciprofilechangedblock.md): Deprecated. A block the system calls to indicate it has enabled or disabled a profile.
- [profileChangedCallback](midicisession/profilechangedcallback.md): Deprecated. An optional block the system calls after it enables or disables a profile.
- [sendProfile:onChannel:profileData:](midicisession/send%28__onchannel_profiledata_%29.md): Deprecated. Sends profile-specific data to the MIDI-CI session.
- [profileSpecificDataHandler](midicisession/profilespecificdatahandler.md): Deprecated. An optional block the system calls when a device sends profile-specific data to the session.
- [MIDIChannelsWholePort](midichannelswholeport.md): A constant value that indicates to use all channels of the port.
