> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciresponder/send(_:onchannel:profiledata:)](https://developer.apple.com/documentation/coremidi/midiciresponder/send(_:onchannel:profiledata:))

# send(\_:onChannel:profileData:) (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Sends profile-specific data to all connected initiators.

> No longer supported for CoreMIDI

## Declaration

```swift
func send(_ aProfile: MIDICIProfile, onChannel channel: MIDIChannelNumber, profileData profileSpecificData: Data) -> Bool
```

## Parameters

- `aProfile`: The profile to send.
- `channel`: The MIDI channel.
- `profileSpecificData`: The data to send.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the operation succeeded.

## See Also

### Broadcasting Profile Changes

- [notify(\_:onChannel:isEnabled:)](notify%28__onchannel_isenabled_%29.md): Deprecated. Enables or disables a profile and notifies all connected initiators.

# sendProfile:onChannel:profileData: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Sends profile-specific data to all connected initiators.

> No longer supported for CoreMIDI

## Declaration

```objectivec
- (BOOL) sendProfile:(MIDICIProfile *) aProfile onChannel:(MIDIChannelNumber) channel profileData:(NSData *) profileSpecificData;
```

## Parameters

- `aProfile`: The profile to send.
- `channel`: The MIDI channel.
- `profileSpecificData`: The data to send.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the operation succeeded.

## See Also

### Broadcasting Profile Changes

- [notifyProfile:onChannel:isEnabled:](notify%28__onchannel_isenabled_%29.md): Deprecated. Enables or disables a profile and notifies all connected initiators.
