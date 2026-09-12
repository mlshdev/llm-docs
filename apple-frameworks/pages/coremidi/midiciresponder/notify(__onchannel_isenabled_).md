> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciresponder/notify(_:onchannel:isenabled:)](https://developer.apple.com/documentation/coremidi/midiciresponder/notify(_:onchannel:isenabled:))

# notify(\_:onChannel:isEnabled:) (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Enables or disables a profile and notifies all connected initiators.

> No longer supported for CoreMIDI

## Declaration

```swift
func notify(_ aProfile: MIDICIProfile, onChannel channel: MIDIChannelNumber, isEnabled enabledState: Bool) -> Bool
```

## Parameters

- `aProfile`: The profile to update.
- `channel`: The MIDI channel.
- `enabledState`: A Boolean value that indicates whether to enable the profile.

## See Also

### Broadcasting Profile Changes

- [send(\_:onChannel:profileData:)](send%28__onchannel_profiledata_%29.md): Deprecated. Sends profile-specific data to all connected initiators.

# notifyProfile:onChannel:isEnabled: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Enables or disables a profile and notifies all connected initiators.

> No longer supported for CoreMIDI

## Declaration

```objectivec
- (BOOL) notifyProfile:(MIDICIProfile *) aProfile onChannel:(MIDIChannelNumber) channel isEnabled:(BOOL) enabledState;
```

## Parameters

- `aProfile`: The profile to update.
- `channel`: The MIDI channel.
- `enabledState`: A Boolean value that indicates whether to enable the profile.

## See Also

### Broadcasting Profile Changes

- [sendProfile:onChannel:profileData:](send%28__onchannel_profiledata_%29.md): Deprecated. Sends profile-specific data to all connected initiators.
