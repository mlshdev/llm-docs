> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/videocomposition](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/videocomposition)

# videoComposition (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A video composition to use when extracting images from assets with multiple video tracks.

## Declaration

```swift
@NSCopying var videoComposition: AVVideoComposition? { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t specify a video composition, the generator only uses the first enabled video track.

If specify a video composition, the image generator ignores the value of the [appliesPreferredTrackTransform](appliespreferredtracktransform.md) property.

Setting a video composition with any of the following attributes generates an exception:

- A [renderScale](../avvideocomposition/renderscale.md) not equal to `1.0`.
- A [renderSize](../avvideocomposition/rendersize.md) with a width or height less than `0`.
- A [frameDuration](../avvideocomposition/frameduration.md) that’s invalid, or less than or equal to [zero](../../coremedia/cmtime/zero.md).
- A [sourceTrackIDForFrameTiming](../avvideocomposition/sourcetrackidforframetiming.md) less than [zero](../../coremedia/cmtime/zero.md).

## See Also

### Configuring compositing

- [customVideoCompositor](customvideocompositor.md): A custom video compositor to use when extracting images from assets with multiple video tracks.

# videoComposition (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A video composition to use when extracting images from assets with multiple video tracks.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AVVideoComposition * videoComposition;
```

<a id="Discussion"></a>

## Discussion

If you don’t specify a video composition, the generator only uses the first enabled video track.

If specify a video composition, the image generator ignores the value of the [appliesPreferredTrackTransform](appliespreferredtracktransform.md) property.

Setting a video composition with any of the following attributes generates an exception:

- A [renderScale](../avvideocomposition/renderscale.md) not equal to `1.0`.
- A [renderSize](../avvideocomposition/rendersize.md) with a width or height less than `0`.
- A [frameDuration](../avvideocomposition/frameduration.md) that’s invalid, or less than or equal to [kCMTimeZero](../../coremedia/cmtime/zero.md).
- A [sourceTrackIDForFrameTiming](../avvideocomposition/sourcetrackidforframetiming.md) less than [kCMTimeZero](../../coremedia/cmtime/zero.md).

## See Also

### Configuring compositing

- [customVideoCompositor](customvideocompositor.md): A custom video compositor to use when extracting images from assets with multiple video tracks.
