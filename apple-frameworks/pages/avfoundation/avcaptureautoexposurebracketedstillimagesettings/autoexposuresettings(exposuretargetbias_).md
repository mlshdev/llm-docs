> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureautoexposurebracketedstillimagesettings/autoexposuresettings(exposuretargetbias:)](https://developer.apple.com/documentation/avfoundation/avcaptureautoexposurebracketedstillimagesettings/autoexposuresettings(exposuretargetbias:))

# autoExposureSettings(exposureTargetBias:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Creates an `AVCaptureAutoExposureBracketedStillImageSettings` using the specified exposure target bias.

## Declaration

```swift
class func autoExposureSettings(exposureTargetBias: Float) -> Self
```

## Parameters

- `exposureTargetBias`: The exposure target bias. Pass `AVCaptureExposureTargetBiasCurrent` to leave the [exposureTargetBias](exposuretargetbias.md) unchanged for this image.

<a id="return-value"></a>

## Return Value

An initialized `AVCaptureAutoExposureBracketedStillImageSettings` instance.

# autoExposureSettingsWithExposureTargetBias: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Creates an `AVCaptureAutoExposureBracketedStillImageSettings` using the specified exposure target bias.

## Declaration

```objectivec
+ (instancetype) autoExposureSettingsWithExposureTargetBias:(float) exposureTargetBias;
```

## Parameters

- `exposureTargetBias`: The exposure target bias. Pass `AVCaptureExposureTargetBiasCurrent` to leave the [exposureTargetBias](exposuretargetbias.md) unchanged for this image.

<a id="return-value"></a>

## Return Value

An initialized `AVCaptureAutoExposureBracketedStillImageSettings` instance.
