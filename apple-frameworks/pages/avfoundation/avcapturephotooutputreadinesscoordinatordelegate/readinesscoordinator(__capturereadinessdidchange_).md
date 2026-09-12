> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutputreadinesscoordinatordelegate/readinesscoordinator(_:capturereadinessdidchange:)](https://developer.apple.com/documentation/avfoundation/avcapturephotooutputreadinesscoordinatordelegate/readinesscoordinator(_:capturereadinessdidchange:))

# readinessCoordinator(\_:captureReadinessDidChange:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Tells the delegate that the capture readiness state of a photo output changed.

## Declaration

```swift
optional func readinessCoordinator(_ coordinator: AVCapturePhotoOutputReadinessCoordinator, captureReadinessDidChange captureReadiness: AVCapturePhotoOutput.CaptureReadiness)
```

## Parameters

- `coordinator`: The delegate’s coordinator object.
- `captureReadiness`: An updated capture readiness value.

<a id="Discussion"></a>

## Discussion

The system always performs this call on the main queue, so you can use it to update your user interface’s shutter button availability and appearance.

# readinessCoordinator:captureReadinessDidChange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Tells the delegate that the capture readiness state of a photo output changed.

## Declaration

```objectivec
- (void) readinessCoordinator:(AVCapturePhotoOutputReadinessCoordinator *) coordinator captureReadinessDidChange:(AVCapturePhotoOutputCaptureReadiness) captureReadiness;
```

## Parameters

- `coordinator`: The delegate’s coordinator object.
- `captureReadiness`: An updated capture readiness value.

<a id="Discussion"></a>

## Discussion

The system always performs this call on the main queue, so you can use it to update your user interface’s shutter button availability and appearance.
