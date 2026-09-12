> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/lockedcameracapture/lockedcameracapturesession/openapplication(for:)](https://developer.apple.com/documentation/lockedcameracapture/lockedcameracapturesession/openapplication(for:))

# openApplication(for:)

**Framework:** LockedCameraCapture  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Initiates a request to open the extension’s containing app.

## Declaration

```swift
final func openApplication(for userActivity: NSUserActivity) async throws
```

## Parameters

- `userActivity`: An `NSUserActivity` that contains relevant information to benefit from universal link support. Use the [NSUserActivityTypeLockedCameraCapture](../nsuseractivitytypelockedcameracapture.md) activity type to indicate when the app launches from a locked camera capture extension.

<a id="discussion"></a>

## Discussion

The system requests authentication before opening the app, if needed.
