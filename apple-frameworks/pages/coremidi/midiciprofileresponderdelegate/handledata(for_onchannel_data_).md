> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciprofileresponderdelegate/handledata(for:onchannel:data:)](https://developer.apple.com/documentation/coremidi/midiciprofileresponderdelegate/handledata(for:onchannel:data:))

# handleData(for:onChannel:data:) (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Processes MIDI data for a profile and channel.

> No longer supported for CoreMIDI

## Declaration

```swift
optional func handleData(for aProfile: MIDICIProfile, onChannel channel: MIDIChannelNumber, data inData: Data)
```

## Parameters

- `aProfile`: The MIDI-CI profile.
- `channel`: The MIDI channel.
- `inData`: The data to process.

## See Also

### Protocol Methods

- [connectInitiator(\_:with:)](connectinitiator%28__with_%29.md): Deprecated. Enables a MIDI-CI initiator to create a session or reject the connection attempt.
- [willSetProfile(\_:onChannel:enabled:)](willsetprofile%28__onchannel_enabled_%29.md): Deprecated. Provides an opportunity to perform an action before the system sets the profile.
- [initiatorDisconnected(\_:)](initiatordisconnected%28__%29.md): Deprecated. Provides an opportunity to perform an action after the system disconnects the initiator.

# handleDataForProfile:onChannel:data: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Processes MIDI data for a profile and channel.

> No longer supported for CoreMIDI

## Declaration

```objectivec
- (void) handleDataForProfile:(MIDICIProfile *) aProfile onChannel:(MIDIChannelNumber) channel data:(NSData *) inData;
```

## Parameters

- `aProfile`: The MIDI-CI profile.
- `channel`: The MIDI channel.
- `inData`: The data to process.

## See Also

### Protocol Methods

- [connectInitiator:withDeviceInfo:](connectinitiator%28__with_%29.md): Deprecated. Enables a MIDI-CI initiator to create a session or reject the connection attempt.
- [willSetProfile:onChannel:enabled:](willsetprofile%28__onchannel_enabled_%29.md): Deprecated. Provides an opportunity to perform an action before the system sets the profile.
- [initiatorDisconnected:](initiatordisconnected%28__%29.md): Deprecated. Provides an opportunity to perform an action after the system disconnects the initiator.
