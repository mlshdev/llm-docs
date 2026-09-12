> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/captureinputsequenceprovider/init(session:analyzerformat:priority:)](https://developer.apple.com/documentation/speech/captureinputsequenceprovider/init(session:analyzerformat:priority:))

# init(session:analyzerFormat:priority:)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Creates an input sequence provider.

## Declaration

```swift
init(session: AVCaptureSession, analyzerFormat: AVAudioFormat, priority: TaskPriority?) throws
```

## Parameters

- `session`: The capture session that manages the audio capture operation.
- `analyzerFormat`: The audio format to convert the audio samples to. The audio format should be one supported by the speech analyzer’s modules.
- `priority`: The desired priority of the audio-capture task.

<a id="discussion"></a>

## Discussion

This initializer also creates an `AVCaptureAudioDataOutput` object suitable for adding to the given `AVCaptureSession`. It does not reconfigure or alter the session.

Use the [captureAudioDataOutput](captureaudiodataoutput.md) property to access the output object and add it to your session.

## See Also

### Creating a provider

- [providerWithSession(from:compatibleWith:priority:)](providerwithsession%28from_compatiblewith_priority_%29.md): Returns an input sequence provider that reads from an audio capture device, and configures a new audio capture session with that device.
- [provider(from:in:compatibleWith:priority:)](provider%28from_in_compatiblewith_priority_%29.md): Returns an input sequence provider that reads from an audio capture device.
