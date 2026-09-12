> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturescreeninput/minframeduration](https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/minframeduration)

# minFrameDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The screen input’s minimum frame duration.

## Declaration

```swift
var minFrameDuration: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

The `minFrameDuration` is the reciprocal of its maximum frame rate.

You use this property to request a maximum frame rate at which the input produces video frames. The requested rate may not be achievable due to overall bandwidth, so actual frame rates may be lower.

## See Also

### Setting video capture options

- [cropRect](croprect.md): Indicates the bounding rectangle of the screen area to be captured, in pixels.
- [scaleFactor](scalefactor.md): Indicates the factor by which video buffers captured from the screen are to be scaled.

# minFrameDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The screen input’s minimum frame duration.

## Declaration

```objectivec
@property (nonatomic) CMTime minFrameDuration;
```

<a id="Discussion"></a>

## Discussion

The `minFrameDuration` is the reciprocal of its maximum frame rate.

You use this property to request a maximum frame rate at which the input produces video frames. The requested rate may not be achievable due to overall bandwidth, so actual frame rates may be lower.

## See Also

### Setting video capture options

- [cropRect](croprect.md): Indicates the bounding rectangle of the screen area to be captured, in pixels.
- [scaleFactor](scalefactor.md): Indicates the factor by which video buffers captured from the screen are to be scaled.
