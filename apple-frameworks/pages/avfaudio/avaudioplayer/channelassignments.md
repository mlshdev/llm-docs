> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/channelassignments](https://developer.apple.com/documentation/avfaudio/avaudioplayer/channelassignments)

# channelAssignments (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of channel descriptions for the audio player.

## Declaration

```swift
var channelAssignments: [AVAudioSessionChannelDescription]? { get set }
```

## Mentioned In

- [Routing audio to specific devices in multidevice sessions](../routing-audio-to-specific-devices-in-multidevice-sessions.md)

<a id="Discussion"></a>

## Discussion

The default value for this property is `nil`. When the value is non-`nil`, this array must have the same number of channels the [numberOfChannels](numberofchannels.md) property returns. You can use this property to assign output to play to different channels.

## See Also

### Managing audio channels

- [numberOfChannels](numberofchannels.md): The number of audio channels in the player’s audio.

# channelAssignments (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

An array of channel descriptions for the audio player.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<AVAudioSessionChannelDescription *> * channelAssignments;
```

## Mentioned In

- [Routing audio to specific devices in multidevice sessions](../routing-audio-to-specific-devices-in-multidevice-sessions.md)

<a id="Discussion"></a>

## Discussion

The default value for this property is `nil`. When the value is non-`nil`, this array must have the same number of channels the [numberOfChannels](numberofchannels.md) property returns. You can use this property to assign output to play to different channels.

## See Also

### Managing audio channels

- [numberOfChannels](numberofchannels.md): The number of audio channels in the player’s audio.
