> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicisession/profilestate(forchannel:)](https://developer.apple.com/documentation/coremidi/midicisession/profilestate(forchannel:))

# profileState(forChannel:) (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Returns the profile state for the specified MIDI channel number.

> No longer supported for CoreMIDI

## Declaration

```swift
func profileState(forChannel channel: MIDIChannelNumber) -> MIDICIProfileState
```

## Parameters

- `channel`: The MIDI channel for which you return the profile state.

<a id="return-value"></a>

## Return Value

A profile state object.

## See Also

### Configuring a Session

- [enable(\_:onChannel:)](enable%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to enable a profile for a specific MIDI channel number.
- [disableProfile(\_:onChannel:)](disableprofile%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to disable a profile for a specific MIDI channel number.
- [MIDICIProfileChangedBlock](../midiciprofilechangedblock.md): Deprecated. A block the system calls to indicate it has enabled or disabled a profile.
- [profileChangedCallback](profilechangedcallback.md): Deprecated. An optional block the system calls after it enables or disables a profile.
- [send(\_:onChannel:profileData:)](send%28__onchannel_profiledata_%29.md): Deprecated. Sends profile-specific data to the MIDI-CI session.
- [MIDICIProfileSpecificDataBlock](../midiciprofilespecificdatablock.md): Deprecated. A block the system calls when a MIDI-CI session or responder receives profile-specific data.
- [profileSpecificDataHandler](profilespecificdatahandler.md): Deprecated. An optional block the system calls when a device sends profile-specific data to the session.
- [MIDIChannelsWholePort](../midichannelswholeport.md): A constant value that indicates to use all channels of the port.

# profileStateForChannel: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Returns the profile state for the specified MIDI channel number.

> No longer supported for CoreMIDI

## Declaration

```objectivec
- (MIDICIProfileState *) profileStateForChannel:(MIDIChannelNumber) channel;
```

## Parameters

- `channel`: The MIDI channel for which you return the profile state.

<a id="return-value"></a>

## Return Value

A profile state object.

## See Also

### Configuring a Session

- [enableProfile:onChannel:error:](enable%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to enable a profile for a specific MIDI channel number.
- [disableProfile:onChannel:error:](disableprofile%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to disable a profile for a specific MIDI channel number.
- [MIDICIProfileChangedBlock](../midiciprofilechangedblock.md): Deprecated. A block the system calls to indicate it has enabled or disabled a profile.
- [profileChangedCallback](profilechangedcallback.md): Deprecated. An optional block the system calls after it enables or disables a profile.
- [sendProfile:onChannel:profileData:](send%28__onchannel_profiledata_%29.md): Deprecated. Sends profile-specific data to the MIDI-CI session.
- [MIDICIProfileSpecificDataBlock](../midiciprofilespecificdatablock.md): Deprecated. A block the system calls when a MIDI-CI session or responder receives profile-specific data.
- [profileSpecificDataHandler](profilespecificdatahandler.md): Deprecated. An optional block the system calls when a device sends profile-specific data to the session.
- [MIDIChannelsWholePort](../midichannelswholeport.md): A constant value that indicates to use all channels of the port.
