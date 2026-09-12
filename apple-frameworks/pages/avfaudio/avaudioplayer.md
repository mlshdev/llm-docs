> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer](https://developer.apple.com/documentation/avfaudio/avaudioplayer)

# AVAudioPlayer (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

An object that plays audio data from a file or buffer.

## Declaration

```swift
class AVAudioPlayer
```

## Mentioned In

- [Routing audio to specific devices in multidevice sessions](routing-audio-to-specific-devices-in-multidevice-sessions.md)

<a id="overview"></a>

## Overview

Use an audio player to:

- Play audio of any duration from a file or buffer
- Control the volume, panning, rate, and looping behavior of the played audio
- Access playback-level metering data
- Play multiple sounds simultaneously by synchronizing the playback of multiple players

For more information about preparing your app to play audio, see [Configuring your app for media playback](../avfoundation/configuring-your-app-for-media-playback.md).

> **Important**

>  For more advanced playback capabilities, like playing streaming or positional audio, use [AVAudioEngine](avaudioengine.md) instead.

## Topics

### Creating an audio player

- [init(contentsOf:)](avaudioplayer/init%28contentsof_%29.md): Creates a player to play audio from a file.
- [init(contentsOf:fileTypeHint:)](avaudioplayer/init%28contentsof_filetypehint_%29.md): Creates a player to play audio from a file of a particular type.
- [init(data:)](avaudioplayer/init%28data_%29.md): Creates a player to play in-memory audio data.
- [init(data:fileTypeHint:)](avaudioplayer/init%28data_filetypehint_%29.md): Creates a player to play in-memory audio data of a particular type.

### Controlling playback

- [prepareToPlay()](avaudioplayer/preparetoplay%28%29.md): Prepares the player for audio playback.
- [play()](avaudioplayer/play%28%29.md): Plays audio asynchronously.
- [play(atTime:)](avaudioplayer/play%28attime_%29.md): Plays audio asynchronously, starting at a specified point in the audio output device’s timeline.
- [pause()](avaudioplayer/pause%28%29.md): Pauses audio playback.
- [stop()](avaudioplayer/stop%28%29.md): Stops playback and undoes the setup the system requires for playback.
- [isPlaying](avaudioplayer/isplaying.md): A Boolean value that indicates whether the player is currently playing audio.

### Configuring playback settings

- [volume](avaudioplayer/volume.md): The audio player’s volume relative to other audio output.
- [setVolume(\_:fadeDuration:)](avaudioplayer/setvolume%28__fadeduration_%29.md): Changes the audio player’s volume over a duration of time.
- [pan](avaudioplayer/pan.md): The audio player’s stereo pan position.
- [enableRate](avaudioplayer/enablerate.md): A Boolean value that indicates whether you can adjust the playback rate of the audio player.
- [rate](avaudioplayer/rate.md): The audio player’s playback rate.
- [numberOfLoops](avaudioplayer/numberofloops.md): The number of times the audio repeats playback.

### Accessing player timing

- [currentTime](avaudioplayer/currenttime.md): The current playback time, in seconds, within the audio timeline.
- [duration](avaudioplayer/duration.md): The total duration, in seconds, of the player’s audio.

### Configuring the Spatial Audio experience

- [intendedSpatialExperience](avaudioplayer/intendedspatialexperience-27klj.md): The intended spatial experience for this player.

### Managing audio channels

- [numberOfChannels](avaudioplayer/numberofchannels.md): The number of audio channels in the player’s audio.
- [channelAssignments](avaudioplayer/channelassignments.md): An array of channel descriptions for the audio player.

### Managing audio-level metering

- [isMeteringEnabled](avaudioplayer/ismeteringenabled.md): A Boolean value that indicates whether the player is able to generate audio-level metering data.
- [updateMeters()](avaudioplayer/updatemeters%28%29.md): Refreshes the average and peak power values for all channels of an audio player.
- [averagePower(forChannel:)](avaudioplayer/averagepower%28forchannel_%29.md): Returns the average power, in decibels full-scale (dBFS), for an audio channel.
- [peakPower(forChannel:)](avaudioplayer/peakpower%28forchannel_%29.md): Returns the peak power, in decibels full-scale (dBFS), for an audio channel.

### Responding to player events

- [delegate](avaudioplayer/delegate.md): The delegate object for the audio player.
- [AVAudioPlayerDelegate](avaudioplayerdelegate.md): A protocol that defines the methods to respond to audio playback events and decoding errors.

### Inspecting the audio data

- [url](avaudioplayer/url.md): The URL of the audio file.
- [data](avaudioplayer/data.md): The audio data associated with the player.
- [format](avaudioplayer/format.md): The format of the player’s audio data.
- [settings](avaudioplayer/settings.md): A dictionary that provides information about the player’s audio data.

### Accessing device information

- [currentDevice](avaudioplayer/currentdevice.md): The unique identifier of the current audio player.
- [deviceCurrentTime](avaudioplayer/devicecurrenttime.md): The time value, in seconds, of the audio output device’s clock.

### Initializers

- [init(contentsOfURL:)](avaudioplayer/init%28contentsofurl_%29.md)
- [init(contentsOfURL:fileTypeHint:)](avaudioplayer/init%28contentsofurl_filetypehint_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Basic playback and recording

- [AVAudioRecorder](avaudiorecorder.md): An object that records audio data to a file.
- [AVMIDIPlayer](avmidiplayer.md): An object that plays MIDI data through a system sound module.

# AVAudioPlayer (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

An object that plays audio data from a file or buffer.

## Declaration

```objectivec
@interface AVAudioPlayer : NSObject
```

## Mentioned In

- [Routing audio to specific devices in multidevice sessions](routing-audio-to-specific-devices-in-multidevice-sessions.md)

<a id="overview"></a>

## Overview

Use an audio player to:

- Play audio of any duration from a file or buffer
- Control the volume, panning, rate, and looping behavior of the played audio
- Access playback-level metering data
- Play multiple sounds simultaneously by synchronizing the playback of multiple players

For more information about preparing your app to play audio, see [Configuring your app for media playback](../avfoundation/configuring-your-app-for-media-playback.md).

> **Important**

>  For more advanced playback capabilities, like playing streaming or positional audio, use [AVAudioEngine](avaudioengine.md) instead.

## Topics

### Creating an audio player

- [initWithContentsOfURL:error:](avaudioplayer/init%28contentsof_%29.md): Creates a player to play audio from a file.
- [initWithContentsOfURL:fileTypeHint:error:](avaudioplayer/init%28contentsof_filetypehint_%29.md): Creates a player to play audio from a file of a particular type.
- [initWithData:error:](avaudioplayer/init%28data_%29.md): Creates a player to play in-memory audio data.
- [initWithData:fileTypeHint:error:](avaudioplayer/init%28data_filetypehint_%29.md): Creates a player to play in-memory audio data of a particular type.

### Controlling playback

- [prepareToPlay](avaudioplayer/preparetoplay%28%29.md): Prepares the player for audio playback.
- [play](avaudioplayer/play%28%29.md): Plays audio asynchronously.
- [playAtTime:](avaudioplayer/play%28attime_%29.md): Plays audio asynchronously, starting at a specified point in the audio output device’s timeline.
- [pause](avaudioplayer/pause%28%29.md): Pauses audio playback.
- [stop](avaudioplayer/stop%28%29.md): Stops playback and undoes the setup the system requires for playback.
- [playing](avaudioplayer/isplaying.md): A Boolean value that indicates whether the player is currently playing audio.

### Configuring playback settings

- [volume](avaudioplayer/volume.md): The audio player’s volume relative to other audio output.
- [setVolume:fadeDuration:](avaudioplayer/setvolume%28__fadeduration_%29.md): Changes the audio player’s volume over a duration of time.
- [pan](avaudioplayer/pan.md): The audio player’s stereo pan position.
- [enableRate](avaudioplayer/enablerate.md): A Boolean value that indicates whether you can adjust the playback rate of the audio player.
- [rate](avaudioplayer/rate.md): The audio player’s playback rate.
- [numberOfLoops](avaudioplayer/numberofloops.md): The number of times the audio repeats playback.

### Accessing player timing

- [currentTime](avaudioplayer/currenttime.md): The current playback time, in seconds, within the audio timeline.
- [duration](avaudioplayer/duration.md): The total duration, in seconds, of the player’s audio.

### Configuring the Spatial Audio experience

- [intendedSpatialExperience](avaudioplayer/intendedspatialexperience-6py9z.md): The intended spatial experience for this player.

### Managing audio channels

- [numberOfChannels](avaudioplayer/numberofchannels.md): The number of audio channels in the player’s audio.
- [channelAssignments](avaudioplayer/channelassignments.md): An array of channel descriptions for the audio player.

### Managing audio-level metering

- [meteringEnabled](avaudioplayer/ismeteringenabled.md): A Boolean value that indicates whether the player is able to generate audio-level metering data.
- [updateMeters](avaudioplayer/updatemeters%28%29.md): Refreshes the average and peak power values for all channels of an audio player.
- [averagePowerForChannel:](avaudioplayer/averagepower%28forchannel_%29.md): Returns the average power, in decibels full-scale (dBFS), for an audio channel.
- [peakPowerForChannel:](avaudioplayer/peakpower%28forchannel_%29.md): Returns the peak power, in decibels full-scale (dBFS), for an audio channel.

### Responding to player events

- [delegate](avaudioplayer/delegate.md): The delegate object for the audio player.
- [AVAudioPlayerDelegate](avaudioplayerdelegate.md): A protocol that defines the methods to respond to audio playback events and decoding errors.

### Inspecting the audio data

- [url](avaudioplayer/url.md): The URL of the audio file.
- [data](avaudioplayer/data.md): The audio data associated with the player.
- [format](avaudioplayer/format.md): The format of the player’s audio data.
- [settings](avaudioplayer/settings.md): A dictionary that provides information about the player’s audio data.

### Accessing device information

- [currentDevice](avaudioplayer/currentdevice.md): The unique identifier of the current audio player.
- [deviceCurrentTime](avaudioplayer/devicecurrenttime.md): The time value, in seconds, of the audio output device’s clock.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Basic playback and recording

- [AVAudioRecorder](avaudiorecorder.md): An object that records audio data to a file.
- [AVMIDIPlayer](avmidiplayer.md): An object that plays MIDI data through a system sound module.
