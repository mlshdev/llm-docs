> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:willbegincapturefor:)](https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:willbegincapturefor:))

# photoOutput(\_:willBeginCaptureFor:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Notifies the delegate that the capture output has resolved settings and will soon begin its capture process.

## Declaration

```swift
optional func photoOutput(_ output: AVCapturePhotoOutput, willBeginCaptureFor resolvedSettings: AVCaptureResolvedPhotoSettings)
```

## Parameters

- `output`: The photo output performing the capture.
- `resolvedSettings`: An object describing the settings used for this capture. Match this object’s [uniqueID](../avcapturephotosettings/uniqueid.md) value to the [uniqueID](../avcapturephotosettings/uniqueid.md) property of the photo settings object you initiated capture with to determine which capture request this delegate call corresponds to. You can also use this object to find out which values the photo output has chosen for automatic settings.

## Mentioned In

- [Capturing and saving Live Photos](../capturing-and-saving-live-photos.md)
- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

The photo output calls this method when it has committed to a choice of settings and will soon begin the capture process. This call occurs as early as possible after your call to the [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method, letting you know what to expect for other delegate method calls related to the same capture.

Use this method and the [AVCaptureResolvedPhotoSettings](../avcaptureresolvedphotosettings.md) it provides to find out at the earliest possible opportunity which values the photo output has chosen for automatic settings, and what the output dimensions for captured images and movies will be. For example, if you requested capture with the [flashMode](../avcapturephotosettings/flashmode.md) property set to [AVCaptureDevice.FlashMode.auto](../avcapturedevice/flashmode-swift.enum/auto.md), the resolved photo settings’ [isFlashEnabled](../avcaptureresolvedphotosettings/isflashenabled.md) property indicates whether the flash will fire during capture.

## See Also

### Monitoring capture progress

- [photoOutput(\_:willCapturePhotoFor:)](photooutput%28__willcapturephotofor_%29.md): Notifies the delegate that photo capture is about to occur.
- [photoOutput(\_:didCapturePhotoFor:)](photooutput%28__didcapturephotofor_%29.md): Notifies the delegate that the photo has been taken.
- [photoOutput(\_:didFinishCaptureFor:error:)](photooutput%28__didfinishcapturefor_error_%29.md): Notifies the delegate that the capture process is complete.

# captureOutput:willBeginCaptureForResolvedSettings: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Notifies the delegate that the capture output has resolved settings and will soon begin its capture process.

## Declaration

```objectivec
- (void) captureOutput:(AVCapturePhotoOutput *) output willBeginCaptureForResolvedSettings:(AVCaptureResolvedPhotoSettings *) resolvedSettings;
```

## Parameters

- `output`: The photo output performing the capture.
- `resolvedSettings`: An object describing the settings used for this capture. Match this object’s [uniqueID](../avcapturephotosettings/uniqueid.md) value to the [uniqueID](../avcapturephotosettings/uniqueid.md) property of the photo settings object you initiated capture with to determine which capture request this delegate call corresponds to. You can also use this object to find out which values the photo output has chosen for automatic settings.

## Mentioned In

- [Capturing and saving Live Photos](../capturing-and-saving-live-photos.md)
- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

The photo output calls this method when it has committed to a choice of settings and will soon begin the capture process. This call occurs as early as possible after your call to the [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method, letting you know what to expect for other delegate method calls related to the same capture.

Use this method and the [AVCaptureResolvedPhotoSettings](../avcaptureresolvedphotosettings.md) it provides to find out at the earliest possible opportunity which values the photo output has chosen for automatic settings, and what the output dimensions for captured images and movies will be. For example, if you requested capture with the [flashMode](../avcapturephotosettings/flashmode.md) property set to [AVCaptureFlashModeAuto](../avcapturedevice/flashmode-swift.enum/auto.md), the resolved photo settings’ [flashEnabled](../avcaptureresolvedphotosettings/isflashenabled.md) property indicates whether the flash will fire during capture.

## See Also

### Monitoring capture progress

- [captureOutput:willCapturePhotoForResolvedSettings:](photooutput%28__willcapturephotofor_%29.md): Notifies the delegate that photo capture is about to occur.
- [captureOutput:didCapturePhotoForResolvedSettings:](photooutput%28__didcapturephotofor_%29.md): Notifies the delegate that the photo has been taken.
- [captureOutput:didFinishCaptureForResolvedSettings:error:](photooutput%28__didfinishcapturefor_error_%29.md): Notifies the delegate that the capture process is complete.
