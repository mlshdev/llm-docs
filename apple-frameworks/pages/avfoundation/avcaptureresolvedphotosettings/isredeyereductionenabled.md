> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureresolvedphotosettings/isredeyereductionenabled](https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/isredeyereductionenabled)

# isRedEyeReductionEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value indicating whether the camera automatically reduces red-eye when capturing photos.

## Declaration

```swift
var isRedEyeReductionEnabled: Bool { get }
```

## See Also

### Examining photo capture settings

- [isFlashEnabled](isflashenabled.md): A Boolean value indicating whether the camera flash fires for this capture.
- [isVirtualDeviceFusionEnabled](isvirtualdevicefusionenabled.md): A Boolean value that specifies whether the system automatically uses virtual device image fusion.
- [isFastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the system uses fast capture prioritization when capturing the photo.
- [isContentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the system applies content-aware distortion correction when capturing the photo.
- [isStillImageStabilizationEnabled](isstillimagestabilizationenabled.md): Deprecated. A Boolean value indicating whether this capture uses image stabilization.
- [isDualCameraFusionEnabled](isdualcamerafusionenabled.md): Deprecated. A Boolean value indicating whether this capture combines image data from a dual camera.

# redEyeReductionEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value indicating whether the camera automatically reduces red-eye when capturing photos.

## Declaration

```objectivec
@property (readonly, getter=isRedEyeReductionEnabled) BOOL redEyeReductionEnabled;
```

## See Also

### Examining photo capture settings

- [flashEnabled](isflashenabled.md): A Boolean value indicating whether the camera flash fires for this capture.
- [virtualDeviceFusionEnabled](isvirtualdevicefusionenabled.md): A Boolean value that specifies whether the system automatically uses virtual device image fusion.
- [fastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the system uses fast capture prioritization when capturing the photo.
- [contentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the system applies content-aware distortion correction when capturing the photo.
- [stillImageStabilizationEnabled](isstillimagestabilizationenabled.md): Deprecated. A Boolean value indicating whether this capture uses image stabilization.
- [dualCameraFusionEnabled](isdualcamerafusionenabled.md): Deprecated. A Boolean value indicating whether this capture combines image data from a dual camera.
