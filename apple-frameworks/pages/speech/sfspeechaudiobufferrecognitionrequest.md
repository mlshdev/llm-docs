> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechaudiobufferrecognitionrequest](https://developer.apple.com/documentation/speech/sfspeechaudiobufferrecognitionrequest)

# SFSpeechAudioBufferRecognitionRequest (Swift)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A request to recognize speech from captured audio content, such as audio from the device’s microphone.

## Declaration

```swift
class SFSpeechAudioBufferRecognitionRequest
```

<a id="overview"></a>

## Overview

Use an [SFSpeechAudioBufferRecognitionRequest](sfspeechaudiobufferrecognitionrequest.md) object to perform speech recognition on live audio, or on a set of existing audio buffers. For example, use this request object to route audio from a device’s microphone to the speech recognizer.

The request object contains no audio initially. As you capture audio, call [append(\_:)](sfspeechaudiobufferrecognitionrequest/append%28__%29.md) or [appendAudioSampleBuffer(\_:)](sfspeechaudiobufferrecognitionrequest/appendaudiosamplebuffer%28__%29.md) to add audio samples to the request object. The speech recognizer continuously analyzes the audio you appended, stopping only when you call the [endAudio()](sfspeechaudiobufferrecognitionrequest/endaudio%28%29.md) method. You must call [endAudio()](sfspeechaudiobufferrecognitionrequest/endaudio%28%29.md) explicitly to stop the speech recognition process.

For a complete example of how to use audio buffers with speech recognition, see [SpeakToMe: Using Speech Recognition with AVAudioEngine](https://developer.apple.com/library/archive/samplecode/SpeakToMe/Introduction/Intro.html#//apple_ref/doc/uid/TP40017110).

## Topics

### Appending Audio Buffers

- [append(\_:)](sfspeechaudiobufferrecognitionrequest/append%28__%29.md): Appends audio in the PCM format to the end of the recognition request.
- [appendAudioSampleBuffer(\_:)](sfspeechaudiobufferrecognitionrequest/appendaudiosamplebuffer%28__%29.md): Appends audio to the end of the recognition request.
- [endAudio()](sfspeechaudiobufferrecognitionrequest/endaudio%28%29.md): Marks the end of audio input for the recognition request.

### Getting the Audio Format

- [nativeAudioFormat](sfspeechaudiobufferrecognitionrequest/nativeaudioformat.md): The preferred audio format for optimal speech recognition.

## Relationships

### Inherits From

- [SFSpeechRecognitionRequest](sfspeechrecognitionrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Audio sources

- [SFSpeechURLRecognitionRequest](sfspeechurlrecognitionrequest.md): A request to recognize speech in a recorded audio file.
- [SFSpeechRecognitionRequest](sfspeechrecognitionrequest.md): An abstract class that represents a request to recognize speech from an audio source.

# SFSpeechAudioBufferRecognitionRequest (Objective-C)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A request to recognize speech from captured audio content, such as audio from the device’s microphone.

## Declaration

```objectivec
@interface SFSpeechAudioBufferRecognitionRequest : SFSpeechRecognitionRequest
```

<a id="overview"></a>

## Overview

Use an [SFSpeechAudioBufferRecognitionRequest](sfspeechaudiobufferrecognitionrequest.md) object to perform speech recognition on live audio, or on a set of existing audio buffers. For example, use this request object to route audio from a device’s microphone to the speech recognizer.

The request object contains no audio initially. As you capture audio, call [appendAudioPCMBuffer:](sfspeechaudiobufferrecognitionrequest/append%28__%29.md) or [appendAudioSampleBuffer:](sfspeechaudiobufferrecognitionrequest/appendaudiosamplebuffer%28__%29.md) to add audio samples to the request object. The speech recognizer continuously analyzes the audio you appended, stopping only when you call the [endAudio](sfspeechaudiobufferrecognitionrequest/endaudio%28%29.md) method. You must call [endAudio](sfspeechaudiobufferrecognitionrequest/endaudio%28%29.md) explicitly to stop the speech recognition process.

For a complete example of how to use audio buffers with speech recognition, see [SpeakToMe: Using Speech Recognition with AVAudioEngine](https://developer.apple.com/library/archive/samplecode/SpeakToMe/Introduction/Intro.html#//apple_ref/doc/uid/TP40017110).

## Topics

### Appending Audio Buffers

- [appendAudioPCMBuffer:](sfspeechaudiobufferrecognitionrequest/append%28__%29.md): Appends audio in the PCM format to the end of the recognition request.
- [appendAudioSampleBuffer:](sfspeechaudiobufferrecognitionrequest/appendaudiosamplebuffer%28__%29.md): Appends audio to the end of the recognition request.
- [endAudio](sfspeechaudiobufferrecognitionrequest/endaudio%28%29.md): Marks the end of audio input for the recognition request.

### Getting the Audio Format

- [nativeAudioFormat](sfspeechaudiobufferrecognitionrequest/nativeaudioformat.md): The preferred audio format for optimal speech recognition.

## Relationships

### Inherits From

- [SFSpeechRecognitionRequest](sfspeechrecognitionrequest.md)

## See Also

### Audio sources

- [SFSpeechURLRecognitionRequest](sfspeechurlrecognitionrequest.md): A request to recognize speech in a recorded audio file.
- [SFSpeechRecognitionRequest](sfspeechrecognitionrequest.md): An abstract class that represents a request to recognize speech from an audio source.
