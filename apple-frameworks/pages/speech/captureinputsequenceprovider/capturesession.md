> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/captureinputsequenceprovider/capturesession](https://developer.apple.com/documentation/speech/captureinputsequenceprovider/capturesession)

# captureSession

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The underlying capture session.

## Declaration

```swift
final var captureSession: AVCaptureSession { get }
```

<a id="discussion"></a>

## Discussion

This property’s value is the new capture session created by [providerWithSession(from:compatibleWith:priority:)](providerwithsession%28from_compatiblewith_priority_%29.md) or the existing capture session passed to [provider(from:in:compatibleWith:priority:)](provider%28from_in_compatiblewith_priority_%29.md) or the initializer.

Use the methods of `AVCaptureSession` to start, stop, or manage the capture session.

## See Also

### Working with a capture session

- [captureAudioDataOutput](captureaudiodataoutput.md): An audio data output that routes and converts captured audio buffers to async sequences.
