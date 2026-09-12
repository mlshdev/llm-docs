> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutputreadinesscoordinator/starttrackingcapturerequest(using:)](https://developer.apple.com/documentation/avfoundation/avcapturephotooutputreadinesscoordinator/starttrackingcapturerequest(using:))

# startTrackingCaptureRequest(using:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Tracks a capture request that uses the specified photo settings.

## Declaration

```swift
func startTrackingCaptureRequest(using settings: AVCapturePhotoSettings)
```

## Parameters

- `settings`: A settings object that the system passes [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) for this capture request.

## See Also

### Performing tracking requests

- [stopTrackingCaptureRequest(using:)](stoptrackingcapturerequest%28using_%29.md): Stop tracking the capture request represented by the specified photo setting’s unique identifier.

# startTrackingCaptureRequestUsingPhotoSettings: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Tracks a capture request that uses the specified photo settings.

## Declaration

```objectivec
- (void) startTrackingCaptureRequestUsingPhotoSettings:(AVCapturePhotoSettings *) settings;
```

## Parameters

- `settings`: A settings object that the system passes [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) for this capture request.

## See Also

### Performing tracking requests

- [stopTrackingCaptureRequestUsingPhotoSettingsUniqueID:](stoptrackingcapturerequest%28using_%29.md): Stop tracking the capture request represented by the specified photo setting’s unique identifier.
