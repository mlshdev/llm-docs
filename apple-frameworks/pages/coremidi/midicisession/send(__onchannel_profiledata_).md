> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicisession/send(_:onchannel:profiledata:)](https://developer.apple.com/documentation/coremidi/midicisession/send(_:onchannel:profiledata:))

# send(\_:onChannel:profileData:) (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Sends profile-specific data to the MIDI-CI session.

## Declaration

```swift
func send(_ profile: MIDICIProfile, onChannel channel: MIDIChannelNumber, profileData profileSpecificData: Data) -> Bool
```

## Parameters

- `profile`: The MIDI-CI profile.
- `channel`: The MIDI channel number.
- `profileSpecificData`: The profile-specific data to send.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was successfully sent, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring a Session

- [profileState(forChannel:)](profilestate%28forchannel_%29.md): Deprecated. Returns the profile state for the specified MIDI channel number.
- [enable(\_:onChannel:)](enable%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to enable a profile for a specific MIDI channel number.
- [disableProfile(\_:onChannel:)](disableprofile%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to disable a profile for a specific MIDI channel number.
- [MIDICIProfileChangedBlock](../midiciprofilechangedblock.md): Deprecated. A block the system calls to indicate it has enabled or disabled a profile.
- [profileChangedCallback](profilechangedcallback.md): Deprecated. An optional block the system calls after it enables or disables a profile.
- [MIDICIProfileSpecificDataBlock](../midiciprofilespecificdatablock.md): Deprecated. A block the system calls when a MIDI-CI session or responder receives profile-specific data.
- [profileSpecificDataHandler](profilespecificdatahandler.md): Deprecated. An optional block the system calls when a device sends profile-specific data to the session.
- [MIDIChannelsWholePort](../midichannelswholeport.md): A constant value that indicates to use all channels of the port.

# sendProfile:onChannel:profileData: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Sends profile-specific data to the MIDI-CI session.

## Declaration

```objectivec
- (BOOL) sendProfile:(MIDICIProfile *) profile onChannel:(MIDIChannelNumber) channel profileData:(NSData *) profileSpecificData;
```

## Parameters

- `profile`: The MIDI-CI profile.
- `channel`: The MIDI channel number.
- `profileSpecificData`: The profile-specific data to send.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was successfully sent, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring a Session

- [profileStateForChannel:](profilestate%28forchannel_%29.md): Deprecated. Returns the profile state for the specified MIDI channel number.
- [enableProfile:onChannel:error:](enable%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to enable a profile for a specific MIDI channel number.
- [disableProfile:onChannel:error:](disableprofile%28__onchannel_%29.md): Deprecated. Performs an asynchronous request to disable a profile for a specific MIDI channel number.
- [MIDICIProfileChangedBlock](../midiciprofilechangedblock.md): Deprecated. A block the system calls to indicate it has enabled or disabled a profile.
- [profileChangedCallback](profilechangedcallback.md): Deprecated. An optional block the system calls after it enables or disables a profile.
- [MIDICIProfileSpecificDataBlock](../midiciprofilespecificdatablock.md): Deprecated. A block the system calls when a MIDI-CI session or responder receives profile-specific data.
- [profileSpecificDataHandler](profilespecificdatahandler.md): Deprecated. An optional block the system calls when a device sends profile-specific data to the session.
- [MIDIChannelsWholePort](../midichannelswholeport.md): A constant value that indicates to use all channels of the port.
