> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureaudiodataoutput](https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutput)

# AVCaptureAudioDataOutput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A capture output that records audio and provides access to audio sample buffers as they are recorded.

## Declaration

```swift
class AVCaptureAudioDataOutput
```

## Topics

### Creating an audio capture output

- [init()](avcaptureaudiodataoutput/init%28%29.md): Creates an instance of audio data output.

### Configuring audio capture

- [audioSettings](avcaptureaudiodataoutput/audiosettings.md): The settings used to decode or re-encode audio before it’s output.
- [recommendedAudioSettingsForAssetWriter(writingTo:)](avcaptureaudiodataoutput/recommendedaudiosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an `AVAssetWriterInput`.
- [spatialAudioChannelLayoutTag](avcaptureaudiodataoutput/spatialaudiochannellayouttag.md): The audio channel layout tag of the audio sample buffers produced by the audio data output.

### Receiving captured audio data

- [setSampleBufferDelegate(\_:queue:)](avcaptureaudiodataoutput/setsamplebufferdelegate%28__queue_%29.md): Sets the delegate that will accept captured buffers and the dispatch queue on which the delegate will be called.
- [sampleBufferDelegate](avcaptureaudiodataoutput/samplebufferdelegate.md): The capture object’s delegate.
- [sampleBufferCallbackQueue](avcaptureaudiodataoutput/samplebuffercallbackqueue.md): The queue on which delegate callbacks are invoked
- [AVCaptureAudioDataOutputSampleBufferDelegate](avcaptureaudiodataoutputsamplebufferdelegate.md): Methods for receiving audio sample data from an audio capture.

## Relationships

### Inherits From

- [AVCaptureOutput](avcaptureoutput.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Stream capture

- [Capturing Spatial Audio in your iOS app](capturing-spatial-audio-in-your-ios-app.md): Enhance your app’s audio recording capabilities by supporting Spatial Audio capture.
- [AVCaptureVideoDataOutput](avcapturevideodataoutput.md): A capture output that records video and provides access to video frames for processing.
- [AVCaptureSpatialAudioMetadataSampleGenerator](avcapturespatialaudiometadatasamplegenerator.md): An interface for generating a spatial audio timed metadata sample.

# AVCaptureAudioDataOutput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A capture output that records audio and provides access to audio sample buffers as they are recorded.

## Declaration

```objectivec
@interface AVCaptureAudioDataOutput : AVCaptureOutput
```

## Topics

### Creating an audio capture output

- [init](avcaptureaudiodataoutput/init%28%29.md): Creates an instance of audio data output.
- [new](avcaptureaudiodataoutput/new.md): Provides a convenience initializer to create an instance of audio data output.

### Configuring audio capture

- [audioSettings](avcaptureaudiodataoutput/audiosettings.md): The settings used to decode or re-encode audio before it’s output.
- [recommendedAudioSettingsForAssetWriterWithOutputFileType:](avcaptureaudiodataoutput/recommendedaudiosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an `AVAssetWriterInput`.
- [spatialAudioChannelLayoutTag](avcaptureaudiodataoutput/spatialaudiochannellayouttag.md): The audio channel layout tag of the audio sample buffers produced by the audio data output.

### Receiving captured audio data

- [setSampleBufferDelegate:queue:](avcaptureaudiodataoutput/setsamplebufferdelegate%28__queue_%29.md): Sets the delegate that will accept captured buffers and the dispatch queue on which the delegate will be called.
- [sampleBufferDelegate](avcaptureaudiodataoutput/samplebufferdelegate.md): The capture object’s delegate.
- [sampleBufferCallbackQueue](avcaptureaudiodataoutput/samplebuffercallbackqueue.md): The queue on which delegate callbacks are invoked
- [AVCaptureAudioDataOutputSampleBufferDelegate](avcaptureaudiodataoutputsamplebufferdelegate.md): Methods for receiving audio sample data from an audio capture.

## Relationships

### Inherits From

- [AVCaptureOutput](avcaptureoutput.md)

## See Also

### Stream capture

- [Capturing Spatial Audio in your iOS app](capturing-spatial-audio-in-your-ios-app.md): Enhance your app’s audio recording capabilities by supporting Spatial Audio capture.
- [AVCaptureVideoDataOutput](avcapturevideodataoutput.md): A capture output that records video and provides access to video frames for processing.
- [AVCaptureSpatialAudioMetadataSampleGenerator](avcapturespatialaudiometadatasamplegenerator.md): An interface for generating a spatial audio timed metadata sample.
