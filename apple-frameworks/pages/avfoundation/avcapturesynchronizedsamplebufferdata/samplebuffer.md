> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesynchronizedsamplebufferdata/samplebuffer](https://developer.apple.com/documentation/avfoundation/avcapturesynchronizedsamplebufferdata/samplebuffer)

# sampleBuffer (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The depth data captured at this synchronization point.

## Declaration

```swift
var sampleBuffer: CMSampleBuffer { get }
```

<a id="Discussion"></a>

## Discussion

Note that if the [sampleBufferWasDropped](samplebufferwasdropped.md) property is [true](https://developer.apple.com/documentation/swift/true), this [CMSampleBuffer](../../coremedia/cmsamplebuffer.md) object does not contain pixel data (instead, it contains only metadata).

This value is equivalent to that provided by the [captureOutput(\_:didOutput:from:)](../avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md) or [captureOutput(\_:didDrop:from:)](../avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__diddrop_from_%29.md) delegate method when using a video data output without a data output synchronizer.

# sampleBuffer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The depth data captured at this synchronization point.

## Declaration

```objectivec
@property (readonly) CMSampleBufferRef sampleBuffer;
```

<a id="Discussion"></a>

## Discussion

Note that if the [sampleBufferWasDropped](samplebufferwasdropped.md) property is [true](https://developer.apple.com/documentation/swift/true), this [CMSampleBufferRef](../../coremedia/cmsamplebuffer.md) object does not contain pixel data (instead, it contains only metadata).

This value is equivalent to that provided by the [captureOutput:didOutputSampleBuffer:fromConnection:](../avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md) or [captureOutput:didDropSampleBuffer:fromConnection:](../avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__diddrop_from_%29.md) delegate method when using a video data output without a data output synchronizer.
