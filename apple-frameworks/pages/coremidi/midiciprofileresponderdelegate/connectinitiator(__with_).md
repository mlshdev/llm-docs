> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciprofileresponderdelegate/connectinitiator(_:with:)](https://developer.apple.com/documentation/coremidi/midiciprofileresponderdelegate/connectinitiator(_:with:))

# connectInitiator(\_:with:) (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Enables a MIDI-CI initiator to create a session or reject the connection attempt.

> No longer supported for CoreMIDI

## Declaration

```swift
func connectInitiator(_ initiatorMUID: MIDICIInitiatiorMUID, with deviceInfo: MIDICIDeviceInfo) -> Bool
```

## Parameters

- `initiatorMUID`: The ID of the MIDI-CI initiator.
- `deviceInfo`: The information that describes a device.

## See Also

### Protocol Methods

- [handleData(for:onChannel:data:)](handledata%28for_onchannel_data_%29.md): Deprecated. Processes MIDI data for a profile and channel.
- [willSetProfile(\_:onChannel:enabled:)](willsetprofile%28__onchannel_enabled_%29.md): Deprecated. Provides an opportunity to perform an action before the system sets the profile.
- [initiatorDisconnected(\_:)](initiatordisconnected%28__%29.md): Deprecated. Provides an opportunity to perform an action after the system disconnects the initiator.

# connectInitiator:withDeviceInfo: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Enables a MIDI-CI initiator to create a session or reject the connection attempt.

> No longer supported for CoreMIDI

## Declaration

```objectivec
- (BOOL) connectInitiator:(MIDICIInitiatiorMUID) initiatorMUID withDeviceInfo:(MIDICIDeviceInfo *) deviceInfo;
```

## Parameters

- `initiatorMUID`: The ID of the MIDI-CI initiator.
- `deviceInfo`: The information that describes a device.

## See Also

### Protocol Methods

- [handleDataForProfile:onChannel:data:](handledata%28for_onchannel_data_%29.md): Deprecated. Processes MIDI data for a profile and channel.
- [willSetProfile:onChannel:enabled:](willsetprofile%28__onchannel_enabled_%29.md): Deprecated. Provides an opportunity to perform an action before the system sets the profile.
- [initiatorDisconnected:](initiatordisconnected%28__%29.md): Deprecated. Provides an opportunity to perform an action after the system disconnects the initiator.
