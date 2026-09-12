> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturebroadcastvideooutput/maxbufferedframecount](https://developer.apple.com/documentation/avfoundation/avcapturebroadcastvideooutput/maxbufferedframecount)

# maxBufferedFrameCount (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

This represents the maximum count of buffered frames. By default the value is 0, which means late frames are immediately dropped to maintain minimal latency.

## Declaration

```swift
var maxBufferedFrameCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

When set to a value greater than 0, the buffer absorbs minor timing jitter in the capture pipeline, reducing the possibility of dropping frames during temporary processing variations. Frames accumulate in the buffer up to the specified limit. Once the buffer reaches [maxBufferedFrameCount](maxbufferedframecount.md), the oldest frame is removed to make room for each new incoming frame, maintaining a rolling window of buffered content.

Calling [resetFrameBuffer()](resetframebuffer%28%29.md) clears all buffered frames and resets the buffer count back to 0, allowing the buffer to fill again from empty.

The maximum supported value can be retrieved using [maxSupportedBufferedFrameCount](maxsupportedbufferedframecount.md). Setting a value higher than the maximum supported value will raise an `NSInvalidArgumentException`.

> **Note**

> Enabling frame buffering (setting a value \> 0) is useful for scenarios where temporary processing delays or timing variations are acceptable, such as when recording or archiving broadcast content. For live broadcast workflows where minimal latency is critical, keep the default value of 0.

## See Also

### Related Documentation

- [resetFrameBuffer()](resetframebuffer%28%29.md): Tells the broadcast video output to reset the frame buffer and drop all currently buffered frames.
- [maxSupportedBufferedFrameCount](maxsupportedbufferedframecount.md): The maximum value supported for maxBufferedFrameCount.

### Managing Video Output

- [videoSettings](videosettings.md): The current video output settings for the broadcast video output.
- [maxSupportedBufferedFrameCount](maxsupportedbufferedframecount.md): The maximum value supported for maxBufferedFrameCount.
- [resetFrameBuffer()](resetframebuffer%28%29.md): Tells the broadcast video output to reset the frame buffer and drop all currently buffered frames.
- [droppedFrameReplacementPolicy](droppedframereplacementpolicy-swift.property.md): The strategy used to replace dropped video frames.

# maxBufferedFrameCount (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

This represents the maximum count of buffered frames. By default the value is 0, which means late frames are immediately dropped to maintain minimal latency.

## Declaration

```objectivec
@property (nonatomic) NSInteger maxBufferedFrameCount;
```

<a id="discussion"></a>

## Discussion

When set to a value greater than 0, the buffer absorbs minor timing jitter in the capture pipeline, reducing the possibility of dropping frames during temporary processing variations. Frames accumulate in the buffer up to the specified limit. Once the buffer reaches [maxBufferedFrameCount](maxbufferedframecount.md), the oldest frame is removed to make room for each new incoming frame, maintaining a rolling window of buffered content.

Calling [resetFrameBuffer](resetframebuffer%28%29.md) clears all buffered frames and resets the buffer count back to 0, allowing the buffer to fill again from empty.

The maximum supported value can be retrieved using [maxSupportedBufferedFrameCount](maxsupportedbufferedframecount.md). Setting a value higher than the maximum supported value will raise an `NSInvalidArgumentException`.

> **Note**

> Enabling frame buffering (setting a value \> 0) is useful for scenarios where temporary processing delays or timing variations are acceptable, such as when recording or archiving broadcast content. For live broadcast workflows where minimal latency is critical, keep the default value of 0.

## See Also

### Related Documentation

- [resetFrameBuffer](resetframebuffer%28%29.md): Tells the broadcast video output to reset the frame buffer and drop all currently buffered frames.
- [maxSupportedBufferedFrameCount](maxsupportedbufferedframecount.md): The maximum value supported for maxBufferedFrameCount.

### Managing Video Output

- [videoSettings](videosettings.md): The current video output settings for the broadcast video output.
- [maxSupportedBufferedFrameCount](maxsupportedbufferedframecount.md): The maximum value supported for maxBufferedFrameCount.
- [resetFrameBuffer](resetframebuffer%28%29.md): Tells the broadcast video output to reset the frame buffer and drop all currently buffered frames.
- [droppedFrameReplacementPolicy](droppedframereplacementpolicy-swift.property.md): The strategy used to replace dropped video frames.
