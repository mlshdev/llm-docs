> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturebroadcastvideooutput/resetframebuffer()](https://developer.apple.com/documentation/avfoundation/avcapturebroadcastvideooutput/resetframebuffer())

# resetFrameBuffer() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Tells the broadcast video output to reset the frame buffer and drop all currently buffered frames.

## Declaration

```swift
func resetFrameBuffer()
```

<a id="discussion"></a>

## Discussion

This method can be called when buffered video frames should be dropped. This will force all those frames to be dropped and reset the buffered frame count to 0.

Use this method in scenarios where you need to clear pending frames, such as:

- **Pausing or stopping broadcast**: Drop pending frames that should not be transmitted
- **Reducing accumulated latency**: If buffering has built up significant delay, reset to return to real-time output

## See Also

### Related Documentation

- [maxBufferedFrameCount](maxbufferedframecount.md): This represents the maximum count of buffered frames. By default the value is 0, which means late frames are immediately dropped to maintain minimal latency.

### Managing Video Output

- [videoSettings](videosettings.md): The current video output settings for the broadcast video output.
- [maxBufferedFrameCount](maxbufferedframecount.md): This represents the maximum count of buffered frames. By default the value is 0, which means late frames are immediately dropped to maintain minimal latency.
- [maxSupportedBufferedFrameCount](maxsupportedbufferedframecount.md): The maximum value supported for maxBufferedFrameCount.
- [droppedFrameReplacementPolicy](droppedframereplacementpolicy-swift.property.md): The strategy used to replace dropped video frames.

# resetFrameBuffer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Tells the broadcast video output to reset the frame buffer and drop all currently buffered frames.

## Declaration

```objectivec
- (void) resetFrameBuffer;
```

<a id="discussion"></a>

## Discussion

This method can be called when buffered video frames should be dropped. This will force all those frames to be dropped and reset the buffered frame count to 0.

Use this method in scenarios where you need to clear pending frames, such as:

- **Pausing or stopping broadcast**: Drop pending frames that should not be transmitted
- **Reducing accumulated latency**: If buffering has built up significant delay, reset to return to real-time output

## See Also

### Related Documentation

- [maxBufferedFrameCount](maxbufferedframecount.md): This represents the maximum count of buffered frames. By default the value is 0, which means late frames are immediately dropped to maintain minimal latency.

### Managing Video Output

- [videoSettings](videosettings.md): The current video output settings for the broadcast video output.
- [maxBufferedFrameCount](maxbufferedframecount.md): This represents the maximum count of buffered frames. By default the value is 0, which means late frames are immediately dropped to maintain minimal latency.
- [maxSupportedBufferedFrameCount](maxsupportedbufferedframecount.md): The maximum value supported for maxBufferedFrameCount.
- [droppedFrameReplacementPolicy](droppedframereplacementpolicy-swift.property.md): The strategy used to replace dropped video frames.
