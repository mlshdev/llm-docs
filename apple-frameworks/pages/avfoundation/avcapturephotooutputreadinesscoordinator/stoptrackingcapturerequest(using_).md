> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutputreadinesscoordinator/stoptrackingcapturerequest(using:)](https://developer.apple.com/documentation/avfoundation/avcapturephotooutputreadinesscoordinator/stoptrackingcapturerequest(using:))

# stopTrackingCaptureRequest(using:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Stop tracking the capture request represented by the specified photo setting’s unique identifier.

## Declaration

```swift
func stopTrackingCaptureRequest(using settingsUniqueID: Int64)
```

## Parameters

- `settingsUniqueID`: The [uniqueID](../avcapturephotosettings/uniqueid.md) value of the related photo settings object.

## See Also

### Performing tracking requests

- [startTrackingCaptureRequest(using:)](starttrackingcapturerequest%28using_%29.md): Tracks a capture request that uses the specified photo settings.

# stopTrackingCaptureRequestUsingPhotoSettingsUniqueID: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Stop tracking the capture request represented by the specified photo setting’s unique identifier.

## Declaration

```objectivec
- (void) stopTrackingCaptureRequestUsingPhotoSettingsUniqueID:(int64_t) settingsUniqueID;
```

## Parameters

- `settingsUniqueID`: The [uniqueID](../avcapturephotosettings/uniqueid.md) value of the related photo settings object.

## See Also

### Performing tracking requests

- [startTrackingCaptureRequestUsingPhotoSettings:](starttrackingcapturerequest%28using_%29.md): Tracks a capture request that uses the specified photo settings.
