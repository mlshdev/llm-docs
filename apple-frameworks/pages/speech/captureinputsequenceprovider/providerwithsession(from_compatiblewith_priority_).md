> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/captureinputsequenceprovider/providerwithsession(from:compatiblewith:priority:)](https://developer.apple.com/documentation/speech/captureinputsequenceprovider/providerwithsession(from:compatiblewith:priority:))

# providerWithSession(from:compatibleWith:priority:)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns an input sequence provider that reads from an audio capture device, and configures a new audio capture session with that device.

## Declaration

```swift
static func providerWithSession(from captureDevice: AVCaptureDevice, compatibleWith modules: [any SpeechModule], priority: TaskPriority? = nil) async throws -> CaptureInputSequenceProvider
```

## Parameters

- `captureDevice`: The capture device to use.
- `modules`: The speech modules that will analyze the audio.
- `priority`: The desired priority of the audio-capture task.

<a id="return-value"></a>

## Return Value

An instance of this class.

<a id="discussion"></a>

## Discussion

This method also creates and configures a new `AVCaptureSession` with default settings. Initializing a session can take some time; you should call this method in a background task.

Use the [captureSession](capturesession.md) property to start, stop, or otherwise manage the capture session.

> **Note**

> On iOS, tvOS, visionOS, and watchOS platforms, this method automatically configures your application’s default `AVAudioSession`. To avoid this behavior, call [provider(from:in:compatibleWith:priority:)](provider%28from_in_compatiblewith_priority_%29.md) instead.

## See Also

### Creating a provider

- [provider(from:in:compatibleWith:priority:)](provider%28from_in_compatiblewith_priority_%29.md): Returns an input sequence provider that reads from an audio capture device.
- [init(session:analyzerFormat:priority:)](init%28session_analyzerformat_priority_%29.md): Creates an input sequence provider.
