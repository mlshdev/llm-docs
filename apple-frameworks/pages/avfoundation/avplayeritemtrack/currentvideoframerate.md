> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemtrack/currentvideoframerate](https://developer.apple.com/documentation/avfoundation/avplayeritemtrack/currentvideoframerate)

# currentVideoFrameRate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The current frame rate of the video track as it plays.

## Declaration

```swift
nonisolated var currentVideoFrameRate: Float { get }
```

<a id="Discussion"></a>

## Discussion

If the media type of the [assetTrack](assettrack.md) is [video](../avmediatype/video.md), the property indicates the current frame rate of the track as it plays, in frames per second. If the item isn’t playing, or if the media type of the track isn’t video, the value of this property is `0.0`.

This property isn’t key-value observable.

## See Also

### Configuring video properties

- [videoFieldMode](videofieldmode.md): A mode that specifies the handling of video frames that contain multiple fields.
- [AVPlayerItemTrackVideoFieldModeDeinterlaceFields](../avplayeritemtrackvideofieldmodedeinterlacefields.md): A video field mode that requests deinterlacing of video fields.

# currentVideoFrameRate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The current frame rate of the video track as it plays.

## Declaration

```objectivec
@property (readonly) float currentVideoFrameRate;
```

<a id="Discussion"></a>

## Discussion

If the media type of the [assetTrack](assettrack.md) is [AVMediaTypeVideo](../avmediatype/video.md), the property indicates the current frame rate of the track as it plays, in frames per second. If the item isn’t playing, or if the media type of the track isn’t video, the value of this property is `0.0`.

This property isn’t key-value observable.

## See Also

### Configuring video properties

- [videoFieldMode](videofieldmode.md): A mode that specifies the handling of video frames that contain multiple fields.
- [AVPlayerItemTrackVideoFieldModeDeinterlaceFields](../avplayeritemtrackvideofieldmodedeinterlacefields.md): A video field mode that requests deinterlacing of video fields.
