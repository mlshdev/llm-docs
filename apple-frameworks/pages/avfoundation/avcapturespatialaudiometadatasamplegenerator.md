> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturespatialaudiometadatasamplegenerator](https://developer.apple.com/documentation/avfoundation/avcapturespatialaudiometadatasamplegenerator)

# AVCaptureSpatialAudioMetadataSampleGenerator (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An interface for generating a spatial audio timed metadata sample.

## Declaration

```swift
class AVCaptureSpatialAudioMetadataSampleGenerator
```

## Topics

### Analyzing audio samples

- [analyzeAudioSample(\_:)](avcapturespatialaudiometadatasamplegenerator/analyzeaudiosample%28__%29.md): Analyzes the provided audio sample buffer for its contribution to the spatial audio timed metadata value.
- [newTimedMetadataSampleBufferAndResetAnalyzer()](avcapturespatialaudiometadatasamplegenerator/newtimedmetadatasamplebufferandresetanalyzer%28%29.md): Creates a sample buffer containing a spatial audio timed metadata sample computed from all analyzed audio buffers, and resets the analyzer to its initial state.
- [timedMetadataSampleBufferFormatDescription](avcapturespatialaudiometadatasamplegenerator/timedmetadatasamplebufferformatdescription.md): Returns the format description of the sample buffer returned from the [newTimedMetadataSampleBufferAndResetAnalyzer()](avcapturespatialaudiometadatasamplegenerator/newtimedmetadatasamplebufferandresetanalyzer%28%29.md) method.
- [resetAnalyzer()](avcapturespatialaudiometadatasamplegenerator/resetanalyzer%28%29.md): Calling this method resets the analyzer to its initial state so that a new run of audio sample buffers can be analyzed.

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

## See Also

### Stream capture

- [Capturing Spatial Audio in your iOS app](capturing-spatial-audio-in-your-ios-app.md): Enhance your app’s audio recording capabilities by supporting Spatial Audio capture.
- [AVCaptureVideoDataOutput](avcapturevideodataoutput.md): A capture output that records video and provides access to video frames for processing.
- [AVCaptureAudioDataOutput](avcaptureaudiodataoutput.md): A capture output that records audio and provides access to audio sample buffers as they are recorded.

# AVCaptureSpatialAudioMetadataSampleGenerator (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An interface for generating a spatial audio timed metadata sample.

## Declaration

```objectivec
@interface AVCaptureSpatialAudioMetadataSampleGenerator : NSObject
```

## Topics

### Analyzing audio samples

- [analyzeAudioSample:](avcapturespatialaudiometadatasamplegenerator/analyzeaudiosample%28__%29.md): Analyzes the provided audio sample buffer for its contribution to the spatial audio timed metadata value.
- [newTimedMetadataSampleBufferAndResetAnalyzer](avcapturespatialaudiometadatasamplegenerator/newtimedmetadatasamplebufferandresetanalyzer%28%29.md): Creates a sample buffer containing a spatial audio timed metadata sample computed from all analyzed audio buffers, and resets the analyzer to its initial state.
- [timedMetadataSampleBufferFormatDescription](avcapturespatialaudiometadatasamplegenerator/timedmetadatasamplebufferformatdescription.md): Returns the format description of the sample buffer returned from the [newTimedMetadataSampleBufferAndResetAnalyzer](avcapturespatialaudiometadatasamplegenerator/newtimedmetadatasamplebufferandresetanalyzer%28%29.md) method.
- [resetAnalyzer](avcapturespatialaudiometadatasamplegenerator/resetanalyzer%28%29.md): Calling this method resets the analyzer to its initial state so that a new run of audio sample buffers can be analyzed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Stream capture

- [Capturing Spatial Audio in your iOS app](capturing-spatial-audio-in-your-ios-app.md): Enhance your app’s audio recording capabilities by supporting Spatial Audio capture.
- [AVCaptureVideoDataOutput](avcapturevideodataoutput.md): A capture output that records video and provides access to video frames for processing.
- [AVCaptureAudioDataOutput](avcaptureaudiodataoutput.md): A capture output that records audio and provides access to audio sample buffers as they are recorded.
