> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturebroadcastvideooutput/videosettings](https://developer.apple.com/documentation/avfoundation/avcapturebroadcastvideooutput/videosettings)

# videoSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The current video output settings for the broadcast video output.

## Declaration

```swift
var videoSettings: [String : Any]? { get }
```

<a id="discussion"></a>

## Discussion

This read-only property reports the actual video format and output settings currently being used for broadcast video output. The value is a dictionary containing metadata descriptors conforming to SMPTE ST 377 (Material Exchange Format) using Universal Labels (ULs) for professional broadcast interoperability.

The settings reflect the format negotiated between the camera capture pipeline and the connected broadcast video destination, taking into account:

- Camera native capture format capabilities
- Connected broadcast video destination capabilities
- System performance constraints
- Display transport bandwidth limitations

This property will return `nil` when no broadcast video destination is connected or when the output pipeline is not active.

> **Important**

> The reported settings reflect the actual negotiated format and may differ from the camera’s native capture format due to broadcast hardware constraints.

## See Also

### Managing Video Output

- [maxBufferedFrameCount](maxbufferedframecount.md): This represents the maximum count of buffered frames. By default the value is 0, which means late frames are immediately dropped to maintain minimal latency.
- [maxSupportedBufferedFrameCount](maxsupportedbufferedframecount.md): The maximum value supported for maxBufferedFrameCount.
- [resetFrameBuffer()](resetframebuffer%28%29.md): Tells the broadcast video output to reset the frame buffer and drop all currently buffered frames.
- [droppedFrameReplacementPolicy](droppedframereplacementpolicy-swift.property.md): The strategy used to replace dropped video frames.

# videoSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The current video output settings for the broadcast video output.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,id> * videoSettings;
```

<a id="discussion"></a>

## Discussion

This read-only property reports the actual video format and output settings currently being used for broadcast video output. The value is a dictionary containing metadata descriptors conforming to SMPTE ST 377 (Material Exchange Format) using Universal Labels (ULs) for professional broadcast interoperability.

The settings reflect the format negotiated between the camera capture pipeline and the connected broadcast video destination, taking into account:

- Camera native capture format capabilities
- Connected broadcast video destination capabilities
- System performance constraints
- Display transport bandwidth limitations

This property will return `nil` when no broadcast video destination is connected or when the output pipeline is not active.

> **Important**

> The reported settings reflect the actual negotiated format and may differ from the camera’s native capture format due to broadcast hardware constraints.

## See Also

### Managing Video Output

- [maxBufferedFrameCount](maxbufferedframecount.md): This represents the maximum count of buffered frames. By default the value is 0, which means late frames are immediately dropped to maintain minimal latency.
- [maxSupportedBufferedFrameCount](maxsupportedbufferedframecount.md): The maximum value supported for maxBufferedFrameCount.
- [resetFrameBuffer](resetframebuffer%28%29.md): Tells the broadcast video output to reset the frame buffer and drop all currently buffered frames.
- [droppedFrameReplacementPolicy](droppedframereplacementpolicy-swift.property.md): The strategy used to replace dropped video frames.
