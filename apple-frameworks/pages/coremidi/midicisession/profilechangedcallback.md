> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicisession/profilechangedcallback](https://developer.apple.com/documentation/coremidi/midicisession/profilechangedcallback)

# profileChangedCallback (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An optional block the system calls after it enables or disables a profile.

> No longer supported for CoreMIDI

## Declaration

```swift
var profileChangedCallback: MIDICIProfileChangedBlock? { get set }
```

## See Also

### Configuring a Session

- [profileState(forChannel:)](profilestate%28forchannel_%29.md): Deprecated. Returns the profile state for the specified MIDI channel number.
- [enable(\_:onChannel:)](enable%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to enable a profile for a specific MIDI channel number.
- [disableProfile(\_:onChannel:)](disableprofile%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to disable a profile for a specific MIDI channel number.
- [MIDICIProfileChangedBlock](../midiciprofilechangedblock.md): Deprecated. A block the system calls to indicate it has enabled or disabled a profile.
- [send(\_:onChannel:profileData:)](send%28__onchannel_profiledata_%29.md): Deprecated. Sends profile-specific data to the MIDI-CI session.
- [MIDICIProfileSpecificDataBlock](../midiciprofilespecificdatablock.md): Deprecated. A block the system calls when a MIDI-CI session or responder receives profile-specific data.
- [profileSpecificDataHandler](profilespecificdatahandler.md): Deprecated. An optional block the system calls when a device sends profile-specific data to the session.
- [MIDIChannelsWholePort](../midichannelswholeport.md): A constant value that indicates to use all channels of the port.

# profileChangedCallback (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An optional block the system calls after it enables or disables a profile.

> No longer supported for CoreMIDI

## Declaration

```objectivec
@property (nonatomic, copy, nullable) MIDICIProfileChangedBlock profileChangedCallback;
```

## See Also

### Configuring a Session

- [profileStateForChannel:](profilestate%28forchannel_%29.md): Deprecated. Returns the profile state for the specified MIDI channel number.
- [enableProfile:onChannel:error:](enable%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to enable a profile for a specific MIDI channel number.
- [disableProfile:onChannel:error:](disableprofile%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to disable a profile for a specific MIDI channel number.
- [MIDICIProfileChangedBlock](../midiciprofilechangedblock.md): Deprecated. A block the system calls to indicate it has enabled or disabled a profile.
- [sendProfile:onChannel:profileData:](send%28__onchannel_profiledata_%29.md): Deprecated. Sends profile-specific data to the MIDI-CI session.
- [MIDICIProfileSpecificDataBlock](../midiciprofilespecificdatablock.md): Deprecated. A block the system calls when a MIDI-CI session or responder receives profile-specific data.
- [profileSpecificDataHandler](profilespecificdatahandler.md): Deprecated. An optional block the system calls when a device sends profile-specific data to the session.
- [MIDIChannelsWholePort](../midichannelswholeport.md): A constant value that indicates to use all channels of the port.
