> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/videomaxscaleandcropfactor](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/videomaxscaleandcropfactor)

# videoMaxScaleAndCropFactor (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The connection’s maximum video scale and crop factor.

## Declaration

```swift
var videoMaxScaleAndCropFactor: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The value defines the largest value you can set the [videoScaleAndCropFactor](videoscaleandcropfactor.md) property to, which only applies to a video connection.

## See Also

### Scaling a video

- [videoScaleAndCropFactor](videoscaleandcropfactor.md): The current scale and crop factor the video output uses.

# videoMaxScaleAndCropFactor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The connection’s maximum video scale and crop factor.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat videoMaxScaleAndCropFactor;
```

<a id="Discussion"></a>

## Discussion

The value defines the largest value you can set the [videoScaleAndCropFactor](videoscaleandcropfactor.md) property to, which only applies to a video connection.

## See Also

### Scaling a video

- [videoScaleAndCropFactor](videoscaleandcropfactor.md): The current scale and crop factor the video output uses.
