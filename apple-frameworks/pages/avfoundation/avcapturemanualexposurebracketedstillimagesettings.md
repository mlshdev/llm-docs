> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemanualexposurebracketedstillimagesettings](https://developer.apple.com/documentation/avfoundation/avcapturemanualexposurebracketedstillimagesettings)

# AVCaptureManualExposureBracketedStillImageSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A configuration for defining bracketed photo captures in terms of specific exposure and ISO values.

## Declaration

```swift
class AVCaptureManualExposureBracketedStillImageSettings
```

## Mentioned In

- [Capturing a bracketed photo sequence](capturing-a-bracketed-photo-sequence.md)

<a id="overview"></a>

## Overview

The `AVCaptureManualExposureBracketedStillImageSettings` class is a concrete subclass of the `AVCaptureBracketedStillImageSettings` class used when bracketing exposure duration and ISO.

An `AVCaptureManualExposureBracketedStillImageSettings` instance defines exposure duration and ISO settings that should be applied to one image in a bracket. An array of `AVCaptureManualExposureBracketedStillImageSettings` objects is passed to `captureStillImageBracketAsynchronouslyFromConnection:withSettingsArray:completionHandler:` to specify the bracketing.

You can query the minimum and maximum duration and ISO properties of the [AVCaptureDevice](avcapturedevice.md) instance supplying data to an [AVCaptureStillImageOutput](avcapturestillimageoutput.md) instance. If you wish to leave [exposureDuration](avcapturemanualexposurebracketedstillimagesettings/exposureduration.md) unchanged for this bracketed still image, you pass the value `AVCaptureExposureDurationCurrent` when creating the instance. To keep the ISO unchanged, you pass `AVCaptureISOCurrent` when creating the instance.

## Topics

### Creating a manual bracketed exposure settings instance

- [manualExposureSettings(exposureDuration:iso:)](avcapturemanualexposurebracketedstillimagesettings/manualexposuresettings%28exposureduration_iso_%29.md): Creates a configuration of still image settings using the specified exposure duration and ISO.

### Getting manual exposure setting values

- [iso](avcapturemanualexposurebracketedstillimagesettings/iso.md): The ISO for the still image.
- [exposureDuration](avcapturemanualexposurebracketedstillimagesettings/exposureduration.md): The exposure duration for the still image.

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

- [AVCaptureAutoExposureBracketedStillImageSettings](avcaptureautoexposurebracketedstillimagesettings.md): A configuration for defining bracketed photo captures in terms of bias relative to automatic exposure.
- [AVCaptureBracketedStillImageSettings](avcapturebracketedstillimagesettings.md): The abstract superclass for bracketed photo capture settings.

# AVCaptureManualExposureBracketedStillImageSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A configuration for defining bracketed photo captures in terms of specific exposure and ISO values.

## Declaration

```objectivec
@interface AVCaptureManualExposureBracketedStillImageSettings : AVCaptureBracketedStillImageSettings
```

## Mentioned In

- [Capturing a bracketed photo sequence](capturing-a-bracketed-photo-sequence.md)

<a id="overview"></a>

## Overview

The `AVCaptureManualExposureBracketedStillImageSettings` class is a concrete subclass of the `AVCaptureBracketedStillImageSettings` class used when bracketing exposure duration and ISO.

An `AVCaptureManualExposureBracketedStillImageSettings` instance defines exposure duration and ISO settings that should be applied to one image in a bracket. An array of `AVCaptureManualExposureBracketedStillImageSettings` objects is passed to `captureStillImageBracketAsynchronouslyFromConnection:withSettingsArray:completionHandler:` to specify the bracketing.

You can query the minimum and maximum duration and ISO properties of the [AVCaptureDevice](avcapturedevice.md) instance supplying data to an [AVCaptureStillImageOutput](avcapturestillimageoutput.md) instance. If you wish to leave [exposureDuration](avcapturemanualexposurebracketedstillimagesettings/exposureduration.md) unchanged for this bracketed still image, you pass the value `AVCaptureExposureDurationCurrent` when creating the instance. To keep the ISO unchanged, you pass `AVCaptureISOCurrent` when creating the instance.

## Topics

### Creating a manual bracketed exposure settings instance

- [manualExposureSettingsWithExposureDuration:ISO:](avcapturemanualexposurebracketedstillimagesettings/manualexposuresettings%28exposureduration_iso_%29.md): Creates a configuration of still image settings using the specified exposure duration and ISO.

### Getting manual exposure setting values

- [ISO](avcapturemanualexposurebracketedstillimagesettings/iso.md): The ISO for the still image.
- [exposureDuration](avcapturemanualexposurebracketedstillimagesettings/exposureduration.md): The exposure duration for the still image.

## Relationships

### Inherits From

- [AVCaptureBracketedStillImageSettings](avcapturebracketedstillimagesettings.md)

## See Also

### Bracketed settings types

- [AVCaptureAutoExposureBracketedStillImageSettings](avcaptureautoexposurebracketedstillimagesettings.md): A configuration for defining bracketed photo captures in terms of bias relative to automatic exposure.
- [AVCaptureBracketedStillImageSettings](avcapturebracketedstillimagesettings.md): The abstract superclass for bracketed photo capture settings.
