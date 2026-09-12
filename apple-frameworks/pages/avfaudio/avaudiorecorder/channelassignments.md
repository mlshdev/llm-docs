> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorder/channelassignments](https://developer.apple.com/documentation/avfaudio/avaudiorecorder/channelassignments)

# channelAssignments (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

An array of channel descriptions associated with the audio recorder.

## Declaration

```swift
var channelAssignments: [AVAudioSessionChannelDescription]? { get set }
```

## Mentioned In

- [Routing audio to specific devices in multidevice sessions](../routing-audio-to-specific-devices-in-multidevice-sessions.md)

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. When the value is non-`nil`, this value must have the same number of channels as defined in the [settings](settings.md) property for the [AVNumberOfChannelsKey](../avnumberofchannelskey.md) value. Use this property to help record specific audio channels.

# channelAssignments (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

An array of channel descriptions associated with the audio recorder.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<AVAudioSessionChannelDescription *> * channelAssignments;
```

## Mentioned In

- [Routing audio to specific devices in multidevice sessions](../routing-audio-to-specific-devices-in-multidevice-sessions.md)

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. When the value is non-`nil`, this value must have the same number of channels as defined in the [settings](settings.md) property for the [AVNumberOfChannelsKey](../avnumberofchannelskey.md) value. Use this property to help record specific audio channels.
