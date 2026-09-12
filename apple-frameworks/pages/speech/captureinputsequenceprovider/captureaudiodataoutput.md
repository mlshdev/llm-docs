> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/captureinputsequenceprovider/captureaudiodataoutput](https://developer.apple.com/documentation/speech/captureinputsequenceprovider/captureaudiodataoutput)

# captureAudioDataOutput

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

An audio data output that routes and converts captured audio buffers to async sequences.

## Declaration

```swift
final var captureAudioDataOutput: AVCaptureAudioDataOutput { get }
```

<a id="discussion"></a>

## Discussion

Add this output to an existing capture session. Calling [providerWithSession(from:compatibleWith:priority:)](providerwithsession%28from_compatiblewith_priority_%29.md) automatically adds this output to the session it creates.

Do not modify the output’s sample buffer delegate or callback queue.

## See Also

### Working with a capture session

- [captureSession](capturesession.md): The underlying capture session.
