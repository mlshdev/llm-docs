> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/videoscaleandcropfactor](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/videoscaleandcropfactor)

# videoScaleAndCropFactor (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The current scale and crop factor the video output uses.

## Declaration

```swift
var videoScaleAndCropFactor: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The property only applies to a video connection. You can set this property to a value in the range `[1.0,` \`\`AVCaptureConnection/videoMaxScaleAndCropFactor\`\`\`\]`. A factor of `1.0\` keeps the image at its original. Factors greater than \`1.0\` scale the image up and center-crop the image to its original dimensions.

## See Also

### Scaling a video

- [videoMaxScaleAndCropFactor](videomaxscaleandcropfactor.md): The connection’s maximum video scale and crop factor.

# videoScaleAndCropFactor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The current scale and crop factor the video output uses.

## Declaration

```objectivec
@property (nonatomic) CGFloat videoScaleAndCropFactor;
```

<a id="Discussion"></a>

## Discussion

The property only applies to a video connection. You can set this property to a value in the range `[1.0,` \`\`AVCaptureConnection/videoMaxScaleAndCropFactor\`\`\`\]`. A factor of `1.0\` keeps the image at its original. Factors greater than \`1.0\` scale the image up and center-crop the image to its original dimensions.

## See Also

### Scaling a video

- [videoMaxScaleAndCropFactor](videomaxscaleandcropfactor.md): The connection’s maximum video scale and crop factor.
