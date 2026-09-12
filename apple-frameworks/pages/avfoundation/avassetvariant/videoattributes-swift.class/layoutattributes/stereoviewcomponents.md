> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariant/videoattributes-swift.class/layoutattributes/stereoviewcomponents](https://developer.apple.com/documentation/avfoundation/avassetvariant/videoattributes-swift.class/layoutattributes/stereoviewcomponents)

# stereoViewComponents (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Attributes that describe the video’s stereo components.

## Declaration

```swift
var stereoViewComponents: CMStereoViewComponents { get }
```

<a id="Discussion"></a>

## Discussion

In the case of 3D or stereoscopic content, the value contains [leftEye](../../../../coremedia/cmstereoviewcomponents/lefteye.md) and [rightEye](../../../../coremedia/cmstereoviewcomponents/righteye.md) components. In the case of monoscopic content, this value is [kCMStereoView_None](../../../../coremedia/cmstereoviewcomponents/kcmstereoview_none.md).

## See Also

### Accessing attributes

- [projectionType](projectiontype.md): Describes the video projection.

# stereoViewComponents (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Attributes that describe the video’s stereo components.

## Declaration

```objectivec
@property (nonatomic, readonly) CMStereoViewComponents stereoViewComponents;
```

<a id="Discussion"></a>

## Discussion

In the case of 3D or stereoscopic content, the value contains [kCMStereoView_LeftEye](../../../../coremedia/cmstereoviewcomponents/lefteye.md) and [kCMStereoView_RightEye](../../../../coremedia/cmstereoviewcomponents/righteye.md) components. In the case of monoscopic content, this value is [kCMStereoView_None](../../../../coremedia/cmstereoviewcomponents/kcmstereoview_none.md).

## See Also

### Accessing attributes

- [projectionType](projectiontype.md): Describes the video projection.
