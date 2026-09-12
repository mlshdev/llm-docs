> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemtrack/videofieldmode](https://developer.apple.com/documentation/avfoundation/avplayeritemtrack/videofieldmode)

# videoFieldMode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A mode that specifies the handling of video frames that contain multiple fields.

## Declaration

```swift
nonisolated var videoFieldMode: String? { get set }
```

<a id="Discussion"></a>

## Discussion

A value of `nil` indicates default processing of video frames. To deinterlace video fields, set this property value to [AVPlayerItemTrackVideoFieldModeDeinterlaceFields](../avplayeritemtrackvideofieldmodedeinterlacefields.md).

## See Also

### Configuring video properties

- [currentVideoFrameRate](currentvideoframerate.md): The current frame rate of the video track as it plays.
- [AVPlayerItemTrackVideoFieldModeDeinterlaceFields](../avplayeritemtrackvideofieldmodedeinterlacefields.md): A video field mode that requests deinterlacing of video fields.

# videoFieldMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A mode that specifies the handling of video frames that contain multiple fields.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * videoFieldMode;
```

<a id="Discussion"></a>

## Discussion

A value of `nil` indicates default processing of video frames. To deinterlace video fields, set this property value to [AVPlayerItemTrackVideoFieldModeDeinterlaceFields](../avplayeritemtrackvideofieldmodedeinterlacefields.md).

## See Also

### Configuring video properties

- [currentVideoFrameRate](currentvideoframerate.md): The current frame rate of the video track as it plays.
- [AVPlayerItemTrackVideoFieldModeDeinterlaceFields](../avplayeritemtrackvideofieldmodedeinterlacefields.md): A video field mode that requests deinterlacing of video fields.
