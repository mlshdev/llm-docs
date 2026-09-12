> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:didcapturephotofor:)](https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:didcapturephotofor:))

# photoOutput(\_:didCapturePhotoFor:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Notifies the delegate that the photo has been taken.

## Declaration

```swift
optional func photoOutput(_ output: AVCapturePhotoOutput, didCapturePhotoFor resolvedSettings: AVCaptureResolvedPhotoSettings)
```

## Parameters

- `output`: The photo output performing the capture.
- `resolvedSettings`: An object describing the settings used for this capture. Match this object’s [uniqueID](../avcapturephotosettings/uniqueid.md) value to the [uniqueID](../avcapturephotosettings/uniqueid.md) property of the photo settings object you initiated capture with to determine which capture request this delegate call corresponds to. You can also use this object to find out which values the photo output has chosen for automatic settings.

## Mentioned In

- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

The photo output calls this method as soon as the first step of capture ends—that is, at the end of the photographic exposure time.

## See Also

### Monitoring capture progress

- [photoOutput(\_:willBeginCaptureFor:)](photooutput%28__willbegincapturefor_%29.md): Notifies the delegate that the capture output has resolved settings and will soon begin its capture process.
- [photoOutput(\_:willCapturePhotoFor:)](photooutput%28__willcapturephotofor_%29.md): Notifies the delegate that photo capture is about to occur.
- [photoOutput(\_:didFinishCaptureFor:error:)](photooutput%28__didfinishcapturefor_error_%29.md): Notifies the delegate that the capture process is complete.

# captureOutput:didCapturePhotoForResolvedSettings: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Notifies the delegate that the photo has been taken.

## Declaration

```objectivec
- (void) captureOutput:(AVCapturePhotoOutput *) output didCapturePhotoForResolvedSettings:(AVCaptureResolvedPhotoSettings *) resolvedSettings;
```

## Parameters

- `output`: The photo output performing the capture.
- `resolvedSettings`: An object describing the settings used for this capture. Match this object’s [uniqueID](../avcapturephotosettings/uniqueid.md) value to the [uniqueID](../avcapturephotosettings/uniqueid.md) property of the photo settings object you initiated capture with to determine which capture request this delegate call corresponds to. You can also use this object to find out which values the photo output has chosen for automatic settings.

## Mentioned In

- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

The photo output calls this method as soon as the first step of capture ends—that is, at the end of the photographic exposure time.

## See Also

### Monitoring capture progress

- [captureOutput:willBeginCaptureForResolvedSettings:](photooutput%28__willbegincapturefor_%29.md): Notifies the delegate that the capture output has resolved settings and will soon begin its capture process.
- [captureOutput:willCapturePhotoForResolvedSettings:](photooutput%28__willcapturephotofor_%29.md): Notifies the delegate that photo capture is about to occur.
- [captureOutput:didFinishCaptureForResolvedSettings:error:](photooutput%28__didfinishcapturefor_error_%29.md): Notifies the delegate that the capture process is complete.
