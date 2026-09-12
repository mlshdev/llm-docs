> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciprofileresponderdelegate/willsetprofile(_:onchannel:enabled:)](https://developer.apple.com/documentation/coremidi/midiciprofileresponderdelegate/willsetprofile(_:onchannel:enabled:))

# willSetProfile(\_:onChannel:enabled:) (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Provides an opportunity to perform an action before the system sets the profile.

> No longer supported for CoreMIDI

## Declaration

```swift
optional func willSetProfile(_ aProfile: MIDICIProfile, onChannel channel: MIDIChannelNumber, enabled shouldEnable: Bool) -> Bool
```

## Parameters

- `aProfile`: The profile the system uses to configure the device.
- `channel`: The MIDI channel assignment.
- `shouldEnable`: A Booean value that indicates whether the system should enable the profile.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the system enabled the profile.

## See Also

### Protocol Methods

- [connectInitiator(\_:with:)](connectinitiator%28__with_%29.md): Deprecated. Enables a MIDI-CI initiator to create a session or reject the connection attempt.
- [handleData(for:onChannel:data:)](handledata%28for_onchannel_data_%29.md): Deprecated. Processes MIDI data for a profile and channel.
- [initiatorDisconnected(\_:)](initiatordisconnected%28__%29.md): Deprecated. Provides an opportunity to perform an action after the system disconnects the initiator.

# willSetProfile:onChannel:enabled: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Provides an opportunity to perform an action before the system sets the profile.

> No longer supported for CoreMIDI

## Declaration

```objectivec
- (BOOL) willSetProfile:(MIDICIProfile *) aProfile onChannel:(MIDIChannelNumber) channel enabled:(BOOL) shouldEnable;
```

## Parameters

- `aProfile`: The profile the system uses to configure the device.
- `channel`: The MIDI channel assignment.
- `shouldEnable`: A Booean value that indicates whether the system should enable the profile.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the system enabled the profile.

## See Also

### Protocol Methods

- [connectInitiator:withDeviceInfo:](connectinitiator%28__with_%29.md): Deprecated. Enables a MIDI-CI initiator to create a session or reject the connection attempt.
- [handleDataForProfile:onChannel:data:](handledata%28for_onchannel_data_%29.md): Deprecated. Processes MIDI data for a profile and channel.
- [initiatorDisconnected:](initiatordisconnected%28__%29.md): Deprecated. Provides an opportunity to perform an action after the system disconnects the initiator.
