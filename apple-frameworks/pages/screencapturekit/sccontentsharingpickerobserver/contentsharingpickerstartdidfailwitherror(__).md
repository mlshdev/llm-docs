> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpickerobserver/contentsharingpickerstartdidfailwitherror(_:)](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpickerobserver/contentsharingpickerstartdidfailwitherror(_:))

# contentSharingPickerStartDidFailWithError(\_:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Tells the observer that a sharing picker was unable to start.

## Declaration

```swift
func contentSharingPickerStartDidFailWithError(_ error: any Error)
```

## Parameters

- `error`: The error that caused the picker failure.

# contentSharingPickerStartDidFailWithError: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Tells the observer that a sharing picker was unable to start.

## Declaration

```objectivec
- (void) contentSharingPickerStartDidFailWithError:(NSError *) error;
```

## Parameters

- `error`: The error that caused the picker failure.
