> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemsamplebufferoutputaudioconfiguration/requestedaudioformat](https://developer.apple.com/documentation/avfoundation/avplayeritemsamplebufferoutputaudioconfiguration/requestedaudioformat)

# requestedAudioFormat (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indicates the audio format in which the client prefers to receive the output sample buffers.

## Declaration

```swift
var requestedAudioFormat: CMFormatDescription? { get set }
```

<a id="discussion"></a>

## Discussion

Must be a PCM format.

The output `CMSampleBuffers'` `CMFormatDescription` may not exactly match this format description, but it will match the parts described in the `AudioStreamBasicDescription`. The output format may differ from the requestedAudioFormat in its LPCM numeric type, channel interleaving and sample size. If any of these differs from the format in which you wish to operate, you can set up conversions between the format of audio sample buffers provided by the AVPlayerItemSampleBufferOutput and your required processing format by using AudioConverter or AVAudioEngine.

Specifying a PCM format is currently required.  In the future it may be optional.

# requestedAudioFormat (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indicates the audio format in which the client prefers to receive the output sample buffers.

## Declaration

```objectivec
@property (nonatomic, nullable) CMFormatDescriptionRef requestedAudioFormat;
```

<a id="discussion"></a>

## Discussion

Must be a PCM format.

The output `CMSampleBuffers'` `CMFormatDescription` may not exactly match this format description, but it will match the parts described in the `AudioStreamBasicDescription`. The output format may differ from the requestedAudioFormat in its LPCM numeric type, channel interleaving and sample size. If any of these differs from the format in which you wish to operate, you can set up conversions between the format of audio sample buffers provided by the AVPlayerItemSampleBufferOutput and your required processing format by using AudioConverter or AVAudioEngine.

Specifying a PCM format is currently required.  In the future it may be optional.
