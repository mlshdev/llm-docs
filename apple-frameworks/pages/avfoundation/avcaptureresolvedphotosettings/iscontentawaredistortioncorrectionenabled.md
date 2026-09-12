> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureresolvedphotosettings/iscontentawaredistortioncorrectionenabled](https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/iscontentawaredistortioncorrectionenabled)

# isContentAwareDistortionCorrectionEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.1+ · iPadOS 14.1+ · Mac Catalyst 14.1+ · tvOS 17.0+

A Boolean value that indicates whether the system applies content-aware distortion correction when capturing the photo.

## Declaration

```swift
var isContentAwareDistortionCorrectionEnabled: Bool { get }
```

## See Also

### Examining photo capture settings

- [isFlashEnabled](isflashenabled.md): A Boolean value indicating whether the camera flash fires for this capture.
- [isRedEyeReductionEnabled](isredeyereductionenabled.md): A Boolean value indicating whether the camera automatically reduces red-eye when capturing photos.
- [isVirtualDeviceFusionEnabled](isvirtualdevicefusionenabled.md): A Boolean value that specifies whether the system automatically uses virtual device image fusion.
- [isFastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the system uses fast capture prioritization when capturing the photo.
- [isStillImageStabilizationEnabled](isstillimagestabilizationenabled.md): Deprecated. A Boolean value indicating whether this capture uses image stabilization.
- [isDualCameraFusionEnabled](isdualcamerafusionenabled.md): Deprecated. A Boolean value indicating whether this capture combines image data from a dual camera.

# contentAwareDistortionCorrectionEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.1+ · iPadOS 14.1+ · Mac Catalyst 14.1+ · tvOS 17.0+

A Boolean value that indicates whether the system applies content-aware distortion correction when capturing the photo.

## Declaration

```objectivec
@property (readonly, getter=isContentAwareDistortionCorrectionEnabled) BOOL contentAwareDistortionCorrectionEnabled;
```

## See Also

### Examining photo capture settings

- [flashEnabled](isflashenabled.md): A Boolean value indicating whether the camera flash fires for this capture.
- [redEyeReductionEnabled](isredeyereductionenabled.md): A Boolean value indicating whether the camera automatically reduces red-eye when capturing photos.
- [virtualDeviceFusionEnabled](isvirtualdevicefusionenabled.md): A Boolean value that specifies whether the system automatically uses virtual device image fusion.
- [fastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the system uses fast capture prioritization when capturing the photo.
- [stillImageStabilizationEnabled](isstillimagestabilizationenabled.md): Deprecated. A Boolean value indicating whether this capture uses image stabilization.
- [dualCameraFusionEnabled](isdualcamerafusionenabled.md): Deprecated. A Boolean value indicating whether this capture combines image data from a dual camera.
