> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:didfinishcapturefor:error:)](https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:didfinishcapturefor:error:))

# photoOutput(\_:didFinishCaptureFor:error:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Notifies the delegate that the capture process is complete.

## Declaration

```swift
optional func photoOutput(_ output: AVCapturePhotoOutput, didFinishCaptureFor resolvedSettings: AVCaptureResolvedPhotoSettings, error: (any Error)?)
```

## Parameters

- `output`: The photo output performing the capture.
- `resolvedSettings`: An object describing the settings used for this capture. Match this object’s [uniqueID](../avcapturephotosettings/uniqueid.md) value to the [uniqueID](../avcapturephotosettings/uniqueid.md) property of the photo settings object you initiated capture with to determine which capture request this delegate call corresponds to. You can also use this object to find out which values the photo output has chosen for automatic settings.
- `error`: If the capture process did not complete successfully, an error object describing the failure; otherwise, `nil`.

## Mentioned In

- [Capturing photos in RAW and Apple ProRAW formats](../capturing-photos-in-raw-and-apple-proraw-formats.md)
- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

The photo output calls this method when the entire capture process has finished, and no more delegate messages will be sent for this capture request. Use this time to clean up any resources you’ve allocated that relate to this capture request.

## See Also

### Monitoring capture progress

- [photoOutput(\_:willBeginCaptureFor:)](photooutput%28__willbegincapturefor_%29.md): Notifies the delegate that the capture output has resolved settings and will soon begin its capture process.
- [photoOutput(\_:willCapturePhotoFor:)](photooutput%28__willcapturephotofor_%29.md): Notifies the delegate that photo capture is about to occur.
- [photoOutput(\_:didCapturePhotoFor:)](photooutput%28__didcapturephotofor_%29.md): Notifies the delegate that the photo has been taken.

# captureOutput:didFinishCaptureForResolvedSettings:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Notifies the delegate that the capture process is complete.

## Declaration

```objectivec
- (void) captureOutput:(AVCapturePhotoOutput *) output didFinishCaptureForResolvedSettings:(AVCaptureResolvedPhotoSettings *) resolvedSettings error:(NSError *) error;
```

## Parameters

- `output`: The photo output performing the capture.
- `resolvedSettings`: An object describing the settings used for this capture. Match this object’s [uniqueID](../avcapturephotosettings/uniqueid.md) value to the [uniqueID](../avcapturephotosettings/uniqueid.md) property of the photo settings object you initiated capture with to determine which capture request this delegate call corresponds to. You can also use this object to find out which values the photo output has chosen for automatic settings.
- `error`: If the capture process did not complete successfully, an error object describing the failure; otherwise, `nil`.

## Mentioned In

- [Capturing photos in RAW and Apple ProRAW formats](../capturing-photos-in-raw-and-apple-proraw-formats.md)
- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

The photo output calls this method when the entire capture process has finished, and no more delegate messages will be sent for this capture request. Use this time to clean up any resources you’ve allocated that relate to this capture request.

## See Also

### Monitoring capture progress

- [captureOutput:willBeginCaptureForResolvedSettings:](photooutput%28__willbegincapturefor_%29.md): Notifies the delegate that the capture output has resolved settings and will soon begin its capture process.
- [captureOutput:willCapturePhotoForResolvedSettings:](photooutput%28__willcapturephotofor_%29.md): Notifies the delegate that photo capture is about to occur.
- [captureOutput:didCapturePhotoForResolvedSettings:](photooutput%28__didcapturephotofor_%29.md): Notifies the delegate that the photo has been taken.
