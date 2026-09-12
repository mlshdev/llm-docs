> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechaudiobufferrecognitionrequest/nativeaudioformat](https://developer.apple.com/documentation/speech/sfspeechaudiobufferrecognitionrequest/nativeaudioformat)

# nativeAudioFormat (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The preferred audio format for optimal speech recognition.

## Declaration

```swift
var nativeAudioFormat: AVAudioFormat { get }
```

<a id="discussion"></a>

## Discussion

Use the audio format in this property as a hint for optimal recording, but don’t depend on the value remaining unchanged.

# nativeAudioFormat (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The preferred audio format for optimal speech recognition.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAudioFormat * nativeAudioFormat;
```

<a id="discussion"></a>

## Discussion

Use the audio format in this property as a hint for optimal recording, but don’t depend on the value remaining unchanged.
