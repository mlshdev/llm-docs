> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/capturehighresolutionframe(using:completion:)](https://developer.apple.com/documentation/arkit/arsession/capturehighresolutionframe(using:completion:))

# captureHighResolutionFrame(using:completion:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Requests a single, high resolution frame to be captured.

## Declaration

```swift
func captureHighResolutionFrame(using photoSettings: AVCapturePhotoSettings?, completion: @escaping @Sendable (ARFrame?, (any Error)?) -> Void)
```

```swift
func captureHighResolutionFrame(using photoSettings: AVCapturePhotoSettings?) async throws -> ARFrame
```

## Parameters

- `photoSettings`: Custom AVCapturePhotoSettings to be used.
- `completion`: Block being called when the call completes.

<a id="discussion"></a>

## Discussion

Some video formats do not support a significantly higher still image resolution than the streaming camera resolution. Use the `isRecommendedForHighResolutionFrameCapturing` method on the video format to check if the format is recommended. For passing customized photo settings to this method, obtain a `defaultPhotoSettings` object from the video format and modify it.

# captureHighResolutionFrameUsingPhotoSettings:completion: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Requests a single, high resolution frame to be captured.

## Declaration

```objectivec
- (void) captureHighResolutionFrameUsingPhotoSettings:(AVCapturePhotoSettings *) photoSettings completion:(void (^)(ARFrame *frame, NSError *error)) completion;
```

## Parameters

- `photoSettings`: Custom AVCapturePhotoSettings to be used.
- `completion`: Block being called when the call completes.

<a id="discussion"></a>

## Discussion

Some video formats do not support a significantly higher still image resolution than the streaming camera resolution. Use the `isRecommendedForHighResolutionFrameCapturing` method on the video format to check if the format is recommended. For passing customized photo settings to this method, obtain a `defaultPhotoSettings` object from the video format and modify it.
