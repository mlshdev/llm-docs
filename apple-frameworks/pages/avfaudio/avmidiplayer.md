> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidiplayer](https://developer.apple.com/documentation/avfaudio/avmidiplayer)

# AVMIDIPlayer (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that plays MIDI data through a system sound module.

## Declaration

```swift
class AVMIDIPlayer
```

<a id="overview"></a>

## Overview

For more information about preparing your app to play audio, see [Configuring your app for media playback](../avfoundation/configuring-your-app-for-media-playback.md).

> **Important**

>  For more advanced MIDI playback capabilities, like playing MIDI data through an external synthesizer or sampler, use [AVAudioEngine](avaudioengine.md) instead.

## Topics

### Creating a MIDI player

- [init(contentsOf:soundBankURL:)](avmidiplayer/init%28contentsof_soundbankurl_%29.md): Creates a player to play a MIDI file with the specified soundbank.
- [init(data:soundBankURL:)](avmidiplayer/init%28data_soundbankurl_%29.md): Creates a player to play MIDI data with the specified soundbank.

### Controlling playback

- [prepareToPlay()](avmidiplayer/preparetoplay%28%29.md): Prepares the player to play the sequence by prerolling all events.
- [play(\_:)](avmidiplayer/play%28__%29.md): Plays the MIDI sequence.
- [AVMIDIPlayerCompletionHandler](avmidiplayercompletionhandler.md): A callback the system invokes when MIDI playback completes.
- [stop()](avmidiplayer/stop%28%29.md): Stops playing the sequence.
- [isPlaying](avmidiplayer/isplaying.md): A Boolean value that indicates whether the sequence is playing.

### Configuring playback settings

- [rate](avmidiplayer/rate.md): The playback rate of the player.

### Accessing player timing

- [currentPosition](avmidiplayer/currentposition.md): The current playback position, in seconds.
- [duration](avmidiplayer/duration.md): The duration, in seconds, of the currently loaded file.

### Initializers

- [init(contentsOfURL:soundBankURL:)](avmidiplayer/init%28contentsofurl_soundbankurl_%29.md)

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

- [AVAudioPlayer](avaudioplayer.md): An object that plays audio data from a file or buffer.
- [AVAudioRecorder](avaudiorecorder.md): An object that records audio data to a file.

# AVMIDIPlayer (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that plays MIDI data through a system sound module.

## Declaration

```objectivec
@interface AVMIDIPlayer : NSObject
```

<a id="overview"></a>

## Overview

For more information about preparing your app to play audio, see [Configuring your app for media playback](../avfoundation/configuring-your-app-for-media-playback.md).

> **Important**

>  For more advanced MIDI playback capabilities, like playing MIDI data through an external synthesizer or sampler, use [AVAudioEngine](avaudioengine.md) instead.

## Topics

### Creating a MIDI player

- [initWithContentsOfURL:soundBankURL:error:](avmidiplayer/init%28contentsof_soundbankurl_%29.md): Creates a player to play a MIDI file with the specified soundbank.
- [initWithData:soundBankURL:error:](avmidiplayer/init%28data_soundbankurl_%29.md): Creates a player to play MIDI data with the specified soundbank.

### Controlling playback

- [prepareToPlay](avmidiplayer/preparetoplay%28%29.md): Prepares the player to play the sequence by prerolling all events.
- [play:](avmidiplayer/play%28__%29.md): Plays the MIDI sequence.
- [AVMIDIPlayerCompletionHandler](avmidiplayercompletionhandler.md): A callback the system invokes when MIDI playback completes.
- [stop](avmidiplayer/stop%28%29.md): Stops playing the sequence.
- [playing](avmidiplayer/isplaying.md): A Boolean value that indicates whether the sequence is playing.

### Configuring playback settings

- [rate](avmidiplayer/rate.md): The playback rate of the player.

### Accessing player timing

- [currentPosition](avmidiplayer/currentposition.md): The current playback position, in seconds.
- [duration](avmidiplayer/duration.md): The duration, in seconds, of the currently loaded file.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Basic playback and recording

- [AVAudioPlayer](avaudioplayer.md): An object that plays audio data from a file or buffer.
- [AVAudioRecorder](avaudiorecorder.md): An object that records audio data to a file.
