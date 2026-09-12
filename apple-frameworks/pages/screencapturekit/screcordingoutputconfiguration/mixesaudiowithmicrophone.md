> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/screcordingoutputconfiguration/mixesaudiowithmicrophone](https://developer.apple.com/documentation/screencapturekit/screcordingoutputconfiguration/mixesaudiowithmicrophone)

# mixesAudioWithMicrophone (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
var mixesAudioWithMicrophone: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If the stream being recorded captures both system audio and microphone audio, setting mixesAudioWithMicrophone to NO will keep two audio tracks for each audio stream in the recording output. Default value is YES, which will mix system and microphone audio, result one audio track in recording output.

# mixesAudioWithMicrophone (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@property (nonatomic, assign) BOOL mixesAudioWithMicrophone;
```

<a id="discussion"></a>

## Discussion

If the stream being recorded captures both system audio and microphone audio, setting mixesAudioWithMicrophone to NO will keep two audio tracks for each audio stream in the recording output. Default value is YES, which will mix system and microphone audio, result one audio track in recording output.
