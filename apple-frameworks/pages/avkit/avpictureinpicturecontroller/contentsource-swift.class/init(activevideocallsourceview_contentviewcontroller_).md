> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class/init(activevideocallsourceview:contentviewcontroller:)

# init(activeVideoCallSourceView:contentViewController:) (Swift)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates a content source with an active video call.

## Declaration

```swift
init(activeVideoCallSourceView sourceView: UIView, contentViewController: AVPictureInPictureVideoCallViewController)
```

## Parameters

- `sourceView`: A view that contains the content of the video call.
- `contentViewController`: The view controller to appear in the system’s Picture in Picture window.

<a id="Discussion"></a>

## Discussion

The instance is only valid for the duration of the call.

> **Important**

>  In iOS 16 and later, you can use the camera in Picture in Picture mode by enabling a capture session’s [isMultitaskingCameraAccessEnabled](../../../avfoundation/avcapturesession/ismultitaskingcameraaccessenabled.md) property. Apps that have a deployment target earlier than iOS 16 require the [com.apple.developer.avfoundation.multitasking-camera-access](../../../bundleresources/entitlements/com.apple.developer.avfoundation.multitasking-camera-access.md) entitlement to use the camera in PiP mode.

## See Also

### Creating a content source

- [init(playerLayer:)](init%28playerlayer_%29.md): Creates a content source with a player layer.
- [init(sampleBufferDisplayLayer:playbackDelegate:)](init%28samplebufferdisplaylayer_playbackdelegate_%29.md): Creates a content source with a sample buffer display layer.

# initWithActiveVideoCallSourceView:contentViewController: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates a content source with an active video call.

## Declaration

```objectivec
- (instancetype) initWithActiveVideoCallSourceView:(UIView *) sourceView contentViewController:(AVPictureInPictureVideoCallViewController *) contentViewController;
```

## Parameters

- `sourceView`: A view that contains the content of the video call.
- `contentViewController`: The view controller to appear in the system’s Picture in Picture window.

<a id="Discussion"></a>

## Discussion

The instance is only valid for the duration of the call.

> **Important**

>  In iOS 16 and later, you can use the camera in Picture in Picture mode by enabling a capture session’s [multitaskingCameraAccessEnabled](../../../avfoundation/avcapturesession/ismultitaskingcameraaccessenabled.md) property. Apps that have a deployment target earlier than iOS 16 require the [com.apple.developer.avfoundation.multitasking-camera-access](../../../bundleresources/entitlements/com.apple.developer.avfoundation.multitasking-camera-access.md) entitlement to use the camera in PiP mode.

## See Also

### Creating a content source

- [initWithPlayerLayer:](init%28playerlayer_%29.md): Creates a content source with a player layer.
- [initWithSampleBufferDisplayLayer:playbackDelegate:](init%28samplebufferdisplaylayer_playbackdelegate_%29.md): Creates a content source with a sample buffer display layer.
