> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturebroadcastvideooutput/droppedframereplacementpolicy-swift.property](https://developer.apple.com/documentation/avfoundation/avcapturebroadcastvideooutput/droppedframereplacementpolicy-swift.property)

# droppedFrameReplacementPolicy (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The strategy used to replace dropped video frames.

## Declaration

```swift
var droppedFrameReplacementPolicy: AVCaptureBroadcastVideoOutput.DroppedFrameReplacementPolicy { get set }
```

<a id="discussion"></a>

## Discussion

This property determines how the broadcast video output handles dropped frames. The default value is `AVCaptureBroadcastVideoOutputDroppedFrameReplacementPolicyRepeatPreviousFrame`.

## See Also

### Related Documentation

- [AVCaptureBroadcastVideoOutput.DroppedFrameReplacementPolicy](droppedframereplacementpolicy-swift.enum.md): Constants indicating the replacement policy when a video frame is dropped.

### Managing Video Output

- [videoSettings](videosettings.md): The current video output settings for the broadcast video output.
- [maxBufferedFrameCount](maxbufferedframecount.md): This represents the maximum count of buffered frames. By default the value is 0, which means late frames are immediately dropped to maintain minimal latency.
- [maxSupportedBufferedFrameCount](maxsupportedbufferedframecount.md): The maximum value supported for maxBufferedFrameCount.
- [resetFrameBuffer()](resetframebuffer%28%29.md): Tells the broadcast video output to reset the frame buffer and drop all currently buffered frames.

# droppedFrameReplacementPolicy (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The strategy used to replace dropped video frames.

## Declaration

```objectivec
@property (nonatomic) AVCaptureBroadcastVideoOutputDroppedFrameReplacementPolicy droppedFrameReplacementPolicy;
```

<a id="discussion"></a>

## Discussion

This property determines how the broadcast video output handles dropped frames. The default value is `AVCaptureBroadcastVideoOutputDroppedFrameReplacementPolicyRepeatPreviousFrame`.

## See Also

### Related Documentation

- [AVCaptureBroadcastVideoOutputDroppedFrameReplacementPolicy](droppedframereplacementpolicy-swift.enum.md): Constants indicating the replacement policy when a video frame is dropped.

### Managing Video Output

- [videoSettings](videosettings.md): The current video output settings for the broadcast video output.
- [maxBufferedFrameCount](maxbufferedframecount.md): This represents the maximum count of buffered frames. By default the value is 0, which means late frames are immediately dropped to maintain minimal latency.
- [maxSupportedBufferedFrameCount](maxsupportedbufferedframecount.md): The maximum value supported for maxBufferedFrameCount.
- [resetFrameBuffer](resetframebuffer%28%29.md): Tells the broadcast video output to reset the frame buffer and drop all currently buffered frames.
