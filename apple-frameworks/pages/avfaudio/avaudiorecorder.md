> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorder](https://developer.apple.com/documentation/avfaudio/avaudiorecorder)

# AVAudioRecorder (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

An object that records audio data to a file.

## Declaration

```swift
class AVAudioRecorder
```

## Mentioned In

- [Routing audio to specific devices in multidevice sessions](routing-audio-to-specific-devices-in-multidevice-sessions.md)

<a id="overview"></a>

## Overview

Use an audio recorder to:

- Record audio from the system’s active input device
- Record for a specified duration or until the user stops recording
- Pause and resume a recording
- Access recording-level metering data

To record audio in iOS or tvOS, configure your audio session to use the [record](avaudiosession/category-swift.struct/record.md) or [playAndRecord](avaudiosession/category-swift.struct/playandrecord.md) category.

> **Important**

>  For more advanced recording capabilities, like applying signal processing to recorded audio, use [AVAudioEngine](avaudioengine.md) instead.

## Topics

### Creating an audio recorder

- [init(url:settings:)](avaudiorecorder/init%28url_settings_%29-5whyq.md): Creates an audio recorder with settings.
- [init(url:format:)](avaudiorecorder/init%28url_format_%29-7herw.md): Creates an audio recorder with an audio format.

### Controlling recording

- [prepareToRecord()](avaudiorecorder/preparetorecord%28%29.md): Creates an audio file and prepares the system for recording.
- [record()](avaudiorecorder/record%28%29.md): Starts or resumes audio recording.
- [record(atTime:)](avaudiorecorder/record%28attime_%29.md): Records audio starting at a specific time.
- [record(forDuration:)](avaudiorecorder/record%28forduration_%29.md): Records audio for the indicated duration of time.
- [record(atTime:forDuration:)](avaudiorecorder/record%28attime_forduration_%29.md): Records audio starting at a specific time for the indicated duration.
- [pause()](avaudiorecorder/pause%28%29.md): Pauses an audio recording.
- [stop()](avaudiorecorder/stop%28%29.md): Stops recording and closes the audio file.
- [isRecording](avaudiorecorder/isrecording.md): A Boolean value that indicates whether the audio recorder is recording.
- [deleteRecording()](avaudiorecorder/deleterecording%28%29.md): Deletes a recorded audio file.

### Accessing recorder timing

- [currentTime](avaudiorecorder/currenttime.md): The time, in seconds, since the beginning of the recording.
- [deviceCurrentTime](avaudiorecorder/devicecurrenttime.md): The time, in seconds, of the host audio device.

### Managing audio channels

- [channelAssignments](avaudiorecorder/channelassignments.md): An array of channel descriptions associated with the audio recorder.

### Managing audio-level metering

- [isMeteringEnabled](avaudiorecorder/ismeteringenabled.md): A Boolean value that indicates whether you’ve enabled the recorder to generate audio-level metering data.
- [updateMeters()](avaudiorecorder/updatemeters%28%29.md): Refreshes the average and peak power values for all channels of an audio recorder.
- [averagePower(forChannel:)](avaudiorecorder/averagepower%28forchannel_%29.md): Returns the average power, in decibels full-scale (dBFS), for an audio channel.
- [peakPower(forChannel:)](avaudiorecorder/peakpower%28forchannel_%29.md): Returns the peak power, in decibels full-scale (dBFS), for an audio channel.

### Responding to recorder events

- [delegate](avaudiorecorder/delegate.md): The delegate object for the audio recorder.
- [AVAudioRecorderDelegate](avaudiorecorderdelegate.md): A protocol that defines the methods to respond to audio recording events and encoding errors.

### Inspecting the audio data

- [url](avaudiorecorder/url.md): The URL to which the recorder writes its data.
- [format](avaudiorecorder/format.md): The format of the recorded audio.
- [settings](avaudiorecorder/settings.md): The settings that describe the format of the recorded audio.

### Initializers

- [init(URL:format:)](avaudiorecorder/init%28url_format_%29-hpsc.md)
- [init(URL:settings:)](avaudiorecorder/init%28url_settings_%29-9zay9.md)

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
- [AVMIDIPlayer](avmidiplayer.md): An object that plays MIDI data through a system sound module.

# AVAudioRecorder (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

An object that records audio data to a file.

## Declaration

```objectivec
@interface AVAudioRecorder : NSObject
```

## Mentioned In

- [Routing audio to specific devices in multidevice sessions](routing-audio-to-specific-devices-in-multidevice-sessions.md)

<a id="overview"></a>

## Overview

Use an audio recorder to:

- Record audio from the system’s active input device
- Record for a specified duration or until the user stops recording
- Pause and resume a recording
- Access recording-level metering data

To record audio in iOS or tvOS, configure your audio session to use the [AVAudioSessionCategoryRecord](avaudiosession/category-swift.struct/record.md) or [AVAudioSessionCategoryPlayAndRecord](avaudiosession/category-swift.struct/playandrecord.md) category.

> **Important**

>  For more advanced recording capabilities, like applying signal processing to recorded audio, use [AVAudioEngine](avaudioengine.md) instead.

## Topics

### Creating an audio recorder

- [initWithURL:settings:error:](avaudiorecorder/init%28url_settings_%29-5whyq.md): Creates an audio recorder with settings.
- [initWithURL:format:error:](avaudiorecorder/init%28url_format_%29-7herw.md): Creates an audio recorder with an audio format.

### Controlling recording

- [prepareToRecord](avaudiorecorder/preparetorecord%28%29.md): Creates an audio file and prepares the system for recording.
- [record](avaudiorecorder/record%28%29.md): Starts or resumes audio recording.
- [recordAtTime:](avaudiorecorder/record%28attime_%29.md): Records audio starting at a specific time.
- [recordForDuration:](avaudiorecorder/record%28forduration_%29.md): Records audio for the indicated duration of time.
- [recordAtTime:forDuration:](avaudiorecorder/record%28attime_forduration_%29.md): Records audio starting at a specific time for the indicated duration.
- [pause](avaudiorecorder/pause%28%29.md): Pauses an audio recording.
- [stop](avaudiorecorder/stop%28%29.md): Stops recording and closes the audio file.
- [recording](avaudiorecorder/isrecording.md): A Boolean value that indicates whether the audio recorder is recording.
- [deleteRecording](avaudiorecorder/deleterecording%28%29.md): Deletes a recorded audio file.

### Accessing recorder timing

- [currentTime](avaudiorecorder/currenttime.md): The time, in seconds, since the beginning of the recording.
- [deviceCurrentTime](avaudiorecorder/devicecurrenttime.md): The time, in seconds, of the host audio device.

### Managing audio channels

- [channelAssignments](avaudiorecorder/channelassignments.md): An array of channel descriptions associated with the audio recorder.

### Managing audio-level metering

- [meteringEnabled](avaudiorecorder/ismeteringenabled.md): A Boolean value that indicates whether you’ve enabled the recorder to generate audio-level metering data.
- [updateMeters](avaudiorecorder/updatemeters%28%29.md): Refreshes the average and peak power values for all channels of an audio recorder.
- [averagePowerForChannel:](avaudiorecorder/averagepower%28forchannel_%29.md): Returns the average power, in decibels full-scale (dBFS), for an audio channel.
- [peakPowerForChannel:](avaudiorecorder/peakpower%28forchannel_%29.md): Returns the peak power, in decibels full-scale (dBFS), for an audio channel.

### Responding to recorder events

- [delegate](avaudiorecorder/delegate.md): The delegate object for the audio recorder.
- [AVAudioRecorderDelegate](avaudiorecorderdelegate.md): A protocol that defines the methods to respond to audio recording events and encoding errors.

### Inspecting the audio data

- [url](avaudiorecorder/url.md): The URL to which the recorder writes its data.
- [format](avaudiorecorder/format.md): The format of the recorded audio.
- [settings](avaudiorecorder/settings.md): The settings that describe the format of the recorded audio.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Basic playback and recording

- [AVAudioPlayer](avaudioplayer.md): An object that plays audio data from a file or buffer.
- [AVMIDIPlayer](avmidiplayer.md): An object that plays MIDI data through a system sound module.
