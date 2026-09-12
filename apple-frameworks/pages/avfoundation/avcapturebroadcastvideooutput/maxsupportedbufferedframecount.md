> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturebroadcastvideooutput/maxsupportedbufferedframecount](https://developer.apple.com/documentation/avfoundation/avcapturebroadcastvideooutput/maxsupportedbufferedframecount)

# maxSupportedBufferedFrameCount (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The maximum value supported for maxBufferedFrameCount.

## Declaration

```swift
class var maxSupportedBufferedFrameCount: Int { get }
```

<a id="discussion"></a>

## Discussion

This class property returns the system-imposed limit for buffered frame count to ensure optimal performance and memory usage in broadcast workflows. The limit is determined based on system capabilities.

## See Also

### Related Documentation

- [maxBufferedFrameCount](maxbufferedframecount.md): This represents the maximum count of buffered frames. By default the value is 0, which means late frames are immediately dropped to maintain minimal latency.

### Managing Video Output

- [videoSettings](videosettings.md): The current video output settings for the broadcast video output.
- [maxBufferedFrameCount](maxbufferedframecount.md): This represents the maximum count of buffered frames. By default the value is 0, which means late frames are immediately dropped to maintain minimal latency.
- [resetFrameBuffer()](resetframebuffer%28%29.md): Tells the broadcast video output to reset the frame buffer and drop all currently buffered frames.
- [droppedFrameReplacementPolicy](droppedframereplacementpolicy-swift.property.md): The strategy used to replace dropped video frames.

# maxSupportedBufferedFrameCount (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The maximum value supported for maxBufferedFrameCount.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSInteger maxSupportedBufferedFrameCount;
```

<a id="discussion"></a>

## Discussion

This class property returns the system-imposed limit for buffered frame count to ensure optimal performance and memory usage in broadcast workflows. The limit is determined based on system capabilities.

## See Also

### Related Documentation

- [maxBufferedFrameCount](maxbufferedframecount.md): This represents the maximum count of buffered frames. By default the value is 0, which means late frames are immediately dropped to maintain minimal latency.

### Managing Video Output

- [videoSettings](videosettings.md): The current video output settings for the broadcast video output.
- [maxBufferedFrameCount](maxbufferedframecount.md): This represents the maximum count of buffered frames. By default the value is 0, which means late frames are immediately dropped to maintain minimal latency.
- [resetFrameBuffer](resetframebuffer%28%29.md): Tells the broadcast video output to reset the frame buffer and drop all currently buffered frames.
- [droppedFrameReplacementPolicy](droppedframereplacementpolicy-swift.property.md): The strategy used to replace dropped video frames.
