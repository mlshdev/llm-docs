> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:willcapturephotofor:)](https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:willcapturephotofor:))

# photoOutput(\_:willCapturePhotoFor:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Notifies the delegate that photo capture is about to occur.

## Declaration

```swift
optional func photoOutput(_ output: AVCapturePhotoOutput, willCapturePhotoFor resolvedSettings: AVCaptureResolvedPhotoSettings)
```

## Parameters

- `output`: The photo output performing the capture.
- `resolvedSettings`: An object describing the settings used for this capture. Match this object’s [uniqueID](../avcapturephotosettings/uniqueid.md) value to the [uniqueID](../avcapturephotosettings/uniqueid.md) property of the photo settings object you initiated capture with to determine which capture request this delegate call corresponds to. You can also use this object to find out which values the photo output has chosen for automatic settings.

## Mentioned In

- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

The photo output calls this method as close as possible to the initial moment of capture. If the shutter sound is enabled, this call occurs immediately after the photo output begins playing the shutter sound.

> **Note**

>  Live Photo capture disables the shutter sound. In some regions, the device’s mute switch can disable the shutter sound.

## See Also

### Monitoring capture progress

- [photoOutput(\_:willBeginCaptureFor:)](photooutput%28__willbegincapturefor_%29.md): Notifies the delegate that the capture output has resolved settings and will soon begin its capture process.
- [photoOutput(\_:didCapturePhotoFor:)](photooutput%28__didcapturephotofor_%29.md): Notifies the delegate that the photo has been taken.
- [photoOutput(\_:didFinishCaptureFor:error:)](photooutput%28__didfinishcapturefor_error_%29.md): Notifies the delegate that the capture process is complete.

# captureOutput:willCapturePhotoForResolvedSettings: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Notifies the delegate that photo capture is about to occur.

## Declaration

```objectivec
- (void) captureOutput:(AVCapturePhotoOutput *) output willCapturePhotoForResolvedSettings:(AVCaptureResolvedPhotoSettings *) resolvedSettings;
```

## Parameters

- `output`: The photo output performing the capture.
- `resolvedSettings`: An object describing the settings used for this capture. Match this object’s [uniqueID](../avcapturephotosettings/uniqueid.md) value to the [uniqueID](../avcapturephotosettings/uniqueid.md) property of the photo settings object you initiated capture with to determine which capture request this delegate call corresponds to. You can also use this object to find out which values the photo output has chosen for automatic settings.

## Mentioned In

- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

The photo output calls this method as close as possible to the initial moment of capture. If the shutter sound is enabled, this call occurs immediately after the photo output begins playing the shutter sound.

> **Note**

>  Live Photo capture disables the shutter sound. In some regions, the device’s mute switch can disable the shutter sound.

## See Also

### Monitoring capture progress

- [captureOutput:willBeginCaptureForResolvedSettings:](photooutput%28__willbegincapturefor_%29.md): Notifies the delegate that the capture output has resolved settings and will soon begin its capture process.
- [captureOutput:didCapturePhotoForResolvedSettings:](photooutput%28__didcapturephotofor_%29.md): Notifies the delegate that the photo has been taken.
- [captureOutput:didFinishCaptureForResolvedSettings:error:](photooutput%28__didfinishcapturefor_error_%29.md): Notifies the delegate that the capture process is complete.
