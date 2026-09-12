> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciprofileresponderdelegate/initiatordisconnected(_:)](https://developer.apple.com/documentation/coremidi/midiciprofileresponderdelegate/initiatordisconnected(_:))

# initiatorDisconnected(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Provides an opportunity to perform an action after the system disconnects the initiator.

> No longer supported for CoreMIDI

## Declaration

```swift
func initiatorDisconnected(_ initiatorMUID: MIDICIInitiatiorMUID)
```

## Parameters

- `initiatorMUID`: The MIDI-CI initiator identifier.

## See Also

### Protocol Methods

- [connectInitiator(\_:with:)](connectinitiator%28__with_%29.md): Deprecated. Enables a MIDI-CI initiator to create a session or reject the connection attempt.
- [handleData(for:onChannel:data:)](handledata%28for_onchannel_data_%29.md): Deprecated. Processes MIDI data for a profile and channel.
- [willSetProfile(\_:onChannel:enabled:)](willsetprofile%28__onchannel_enabled_%29.md): Deprecated. Provides an opportunity to perform an action before the system sets the profile.

# initiatorDisconnected: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Provides an opportunity to perform an action after the system disconnects the initiator.

> No longer supported for CoreMIDI

## Declaration

```objectivec
- (void) initiatorDisconnected:(MIDICIInitiatiorMUID) initiatorMUID;
```

## Parameters

- `initiatorMUID`: The MIDI-CI initiator identifier.

## See Also

### Protocol Methods

- [connectInitiator:withDeviceInfo:](connectinitiator%28__with_%29.md): Deprecated. Enables a MIDI-CI initiator to create a session or reject the connection attempt.
- [handleDataForProfile:onChannel:data:](handledata%28for_onchannel_data_%29.md): Deprecated. Processes MIDI data for a profile and channel.
- [willSetProfile:onChannel:enabled:](willsetprofile%28__onchannel_enabled_%29.md): Deprecated. Provides an opportunity to perform an action before the system sets the profile.
