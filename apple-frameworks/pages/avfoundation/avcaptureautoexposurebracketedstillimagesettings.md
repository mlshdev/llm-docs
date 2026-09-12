> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureautoexposurebracketedstillimagesettings](https://developer.apple.com/documentation/avfoundation/avcaptureautoexposurebracketedstillimagesettings)

# AVCaptureAutoExposureBracketedStillImageSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A configuration for defining bracketed photo captures in terms of bias relative to automatic exposure.

## Declaration

```swift
class AVCaptureAutoExposureBracketedStillImageSettings
```

## Mentioned In

- [Capturing a bracketed photo sequence](capturing-a-bracketed-photo-sequence.md)

<a id="overview"></a>

## Overview

An [AVCaptureAutoExposureBracketedStillImageSettings](avcaptureautoexposurebracketedstillimagesettings.md) instance defines the exposure target bias setting that should be applied to one image in a bracket. An array of `AVCaptureAutoExposureBracketedStillImageSettings` objects is passed to `captureStillImageBracketAsynchronouslyFromConnection:withSettingsArray:completionHandler:` to specify the bracketing.

The minimum and maximum exposure target bias are properties of the [AVCaptureDevice](avcapturedevice.md) instance supplying data to an [AVCaptureStillImageOutput](avcapturestillimageoutput.md) instance. If you wish to leave [exposureTargetBias](avcaptureautoexposurebracketedstillimagesettings/exposuretargetbias.md) unchanged for this bracketed still image, you may pass the value `AVCaptureExposureTargetBiasCurrent`.

## Topics

### Creating an auto exposure settings instance

- [autoExposureSettings(exposureTargetBias:)](avcaptureautoexposurebracketedstillimagesettings/autoexposuresettings%28exposuretargetbias_%29.md): Creates an `AVCaptureAutoExposureBracketedStillImageSettings` using the specified exposure target bias.

### Getting the exposure target bias

- [exposureTargetBias](avcaptureautoexposurebracketedstillimagesettings/exposuretargetbias.md): The exposure bias for the auto exposure bracketed settings

## Relationships

### Inherits From

- [AVCaptureBracketedStillImageSettings](avcapturebracketedstillimagesettings.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Bracketed settings types

- [AVCaptureManualExposureBracketedStillImageSettings](avcapturemanualexposurebracketedstillimagesettings.md): A configuration for defining bracketed photo captures in terms of specific exposure and ISO values.
- [AVCaptureBracketedStillImageSettings](avcapturebracketedstillimagesettings.md): The abstract superclass for bracketed photo capture settings.

# AVCaptureAutoExposureBracketedStillImageSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A configuration for defining bracketed photo captures in terms of bias relative to automatic exposure.

## Declaration

```objectivec
@interface AVCaptureAutoExposureBracketedStillImageSettings : AVCaptureBracketedStillImageSettings
```

## Mentioned In

- [Capturing a bracketed photo sequence](capturing-a-bracketed-photo-sequence.md)

<a id="overview"></a>

## Overview

An [AVCaptureAutoExposureBracketedStillImageSettings](avcaptureautoexposurebracketedstillimagesettings.md) instance defines the exposure target bias setting that should be applied to one image in a bracket. An array of `AVCaptureAutoExposureBracketedStillImageSettings` objects is passed to `captureStillImageBracketAsynchronouslyFromConnection:withSettingsArray:completionHandler:` to specify the bracketing.

The minimum and maximum exposure target bias are properties of the [AVCaptureDevice](avcapturedevice.md) instance supplying data to an [AVCaptureStillImageOutput](avcapturestillimageoutput.md) instance. If you wish to leave [exposureTargetBias](avcaptureautoexposurebracketedstillimagesettings/exposuretargetbias.md) unchanged for this bracketed still image, you may pass the value `AVCaptureExposureTargetBiasCurrent`.

## Topics

### Creating an auto exposure settings instance

- [autoExposureSettingsWithExposureTargetBias:](avcaptureautoexposurebracketedstillimagesettings/autoexposuresettings%28exposuretargetbias_%29.md): Creates an `AVCaptureAutoExposureBracketedStillImageSettings` using the specified exposure target bias.

### Getting the exposure target bias

- [exposureTargetBias](avcaptureautoexposurebracketedstillimagesettings/exposuretargetbias.md): The exposure bias for the auto exposure bracketed settings

## Relationships

### Inherits From

- [AVCaptureBracketedStillImageSettings](avcapturebracketedstillimagesettings.md)

## See Also

### Bracketed settings types

- [AVCaptureManualExposureBracketedStillImageSettings](avcapturemanualexposurebracketedstillimagesettings.md): A configuration for defining bracketed photo captures in terms of specific exposure and ISO values.
- [AVCaptureBracketedStillImageSettings](avcapturebracketedstillimagesettings.md): The abstract superclass for bracketed photo capture settings.
