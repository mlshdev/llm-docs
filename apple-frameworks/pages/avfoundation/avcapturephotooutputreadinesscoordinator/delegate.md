> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutputreadinesscoordinator/delegate](https://developer.apple.com/documentation/avfoundation/avcapturephotooutputreadinesscoordinator/delegate)

# delegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The coordinator’s delegate object.

## Declaration

```swift
weak var delegate: (any AVCapturePhotoOutputReadinessCoordinatorDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The capture delegate receives callbacks when the photo output’s captureReadiness changes. It calls its delegate on the main queue, which allows you to perform user interface updates directly from the delegate’s [readinessCoordinator(\_:captureReadinessDidChange:)](../avcapturephotooutputreadinesscoordinatordelegate/readinesscoordinator%28__capturereadinessdidchange_%29.md) method.

The coordinator provides an initial value to the delegate when you first set it on this object.

# delegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The coordinator’s delegate object.

## Declaration

```objectivec
@property (atomic, weak, nullable) id<AVCapturePhotoOutputReadinessCoordinatorDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The capture delegate receives callbacks when the photo output’s captureReadiness changes. It calls its delegate on the main queue, which allows you to perform user interface updates directly from the delegate’s [readinessCoordinator:captureReadinessDidChange:](../avcapturephotooutputreadinesscoordinatordelegate/readinesscoordinator%28__capturereadinessdidchange_%29.md) method.

The coordinator provides an initial value to the delegate when you first set it on this object.
