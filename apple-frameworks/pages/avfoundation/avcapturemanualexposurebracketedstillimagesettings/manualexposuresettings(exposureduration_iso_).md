> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemanualexposurebracketedstillimagesettings/manualexposuresettings(exposureduration:iso:)](https://developer.apple.com/documentation/avfoundation/avcapturemanualexposurebracketedstillimagesettings/manualexposuresettings(exposureduration:iso:))

# manualExposureSettings(exposureDuration:iso:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Creates a configuration of still image settings using the specified exposure duration and ISO.

## Declaration

```swift
class func manualExposureSettings(exposureDuration duration: CMTime, iso ISO: Float) -> Self
```

## Parameters

- `duration`: The exposure duration in seconds. Pass `AVCaptureExposureDurationCurrent` to leave the duration unchanged for this bracketed image.
- `ISO`: The film speed in the ISO format. Pass `AVCaptureISOCurrent` to leave the ISO unchanged for this bracketed image.

<a id="return-value"></a>

## Return Value

An initialized `AVCaptureManualExposureBracketedStillImageSettings` instance.

# manualExposureSettingsWithExposureDuration:ISO: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Creates a configuration of still image settings using the specified exposure duration and ISO.

## Declaration

```objectivec
+ (instancetype) manualExposureSettingsWithExposureDuration:(CMTime) duration ISO:(float) ISO;
```

## Parameters

- `duration`: The exposure duration in seconds. Pass `AVCaptureExposureDurationCurrent` to leave the duration unchanged for this bracketed image.
- `ISO`: The film speed in the ISO format. Pass `AVCaptureISOCurrent` to leave the ISO unchanged for this bracketed image.

<a id="return-value"></a>

## Return Value

An initialized `AVCaptureManualExposureBracketedStillImageSettings` instance.
