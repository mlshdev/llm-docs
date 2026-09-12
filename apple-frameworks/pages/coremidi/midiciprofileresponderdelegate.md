> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciprofileresponderdelegate](https://developer.apple.com/documentation/coremidi/midiciprofileresponderdelegate)

# MIDICIProfileResponderDelegate (Swift)

**Framework:** Core MIDI  
**Kind:** Protocol  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

A protocol that defines the methods to respond to MIDI-CI responder life-cycle events.

> No longer supported for CoreMIDI

## Declaration

```swift
protocol MIDICIProfileResponderDelegate : NSObjectProtocol
```

## Topics

### Protocol Methods

- [connectInitiator(\_:with:)](midiciprofileresponderdelegate/connectinitiator%28__with_%29.md): Deprecated. Enables a MIDI-CI initiator to create a session or reject the connection attempt.
- [handleData(for:onChannel:data:)](midiciprofileresponderdelegate/handledata%28for_onchannel_data_%29.md): Deprecated. Processes MIDI data for a profile and channel.
- [willSetProfile(\_:onChannel:enabled:)](midiciprofileresponderdelegate/willsetprofile%28__onchannel_enabled_%29.md): Deprecated. Provides an opportunity to perform an action before the system sets the profile.
- [initiatorDisconnected(\_:)](midiciprofileresponderdelegate/initiatordisconnected%28__%29.md): Deprecated. Provides an opportunity to perform an action after the system disconnects the initiator.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting a Responder Delegate

- [profileDelegate](midiciresponder/profiledelegate.md): Deprecated. The profile delegate.

# MIDICIProfileResponderDelegate (Objective-C)

**Framework:** Core MIDI  
**Kind:** Protocol  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

A protocol that defines the methods to respond to MIDI-CI responder life-cycle events.

> No longer supported for CoreMIDI

## Declaration

```objectivec
@protocol MIDICIProfileResponderDelegate <NSObject>
```

## Topics

### Protocol Methods

- [connectInitiator:withDeviceInfo:](midiciprofileresponderdelegate/connectinitiator%28__with_%29.md): Deprecated. Enables a MIDI-CI initiator to create a session or reject the connection attempt.
- [handleDataForProfile:onChannel:data:](midiciprofileresponderdelegate/handledata%28for_onchannel_data_%29.md): Deprecated. Processes MIDI data for a profile and channel.
- [willSetProfile:onChannel:enabled:](midiciprofileresponderdelegate/willsetprofile%28__onchannel_enabled_%29.md): Deprecated. Provides an opportunity to perform an action before the system sets the profile.
- [initiatorDisconnected:](midiciprofileresponderdelegate/initiatordisconnected%28__%29.md): Deprecated. Provides an opportunity to perform an action after the system disconnects the initiator.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Setting a Responder Delegate

- [profileDelegate](midiciresponder/profiledelegate.md): Deprecated. The profile delegate.
