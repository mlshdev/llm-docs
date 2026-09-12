> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/lockedcameracapture/nsuseractivitytypelockedcameracapture](https://developer.apple.com/documentation/lockedcameracapture/nsuseractivitytypelockedcameracapture)

# NSUserActivityTypeLockedCameraCapture (Swift)

**Framework:** LockedCameraCapture  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A type to use when opening your app from the capture extension.

## Declaration

```swift
let NSUserActivityTypeLockedCameraCapture: String
```

<a id="discussion"></a>

## Discussion

Use this `NSUserActivityType` with [openApplication(for:)](lockedcameracapturesession/openapplication%28for_%29.md) to check if someone is launching your app from a locked camera capture extension.

## See Also

### App integration

- [LockedCameraCaptureManager](lockedcameracapturemanager.md): An object that provides handling of captured content and transitioning to the extension’s containing app.

# NSUserActivityTypeLockedCameraCapture (Objective-C)

**Framework:** LockedCameraCapture  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A type to use when opening your app from the capture extension.

## Declaration

```objectivec
extern NSString * const NSUserActivityTypeLockedCameraCapture;
```

<a id="discussion"></a>

## Discussion

Use this `NSUserActivityType` with [openApplication(for:)](lockedcameracapturesession/openapplication%28for_%29.md) to check if someone is launching your app from a locked camera capture extension.
