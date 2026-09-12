> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontrollerdelegate/pictureinpicturecontroller(_:restoreuserinterfaceforpictureinpicturestopwithcompletionhandler:)](https://developer.apple.com/documentation/avkit/avpictureinpicturecontrollerdelegate/pictureinpicturecontroller(_:restoreuserinterfaceforpictureinpicturestopwithcompletionhandler:))

# pictureInPictureController(\_:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate to restore the user interface before Picture in Picture stops.

## Declaration

```swift
optional func pictureInPictureController(_ pictureInPictureController: AVPictureInPictureController, restoreUserInterfaceForPictureInPictureStopWithCompletionHandler completionHandler: @escaping @Sendable (Bool) -> Void)
```

```swift
optional func pictureInPictureController(_ pictureInPictureController: AVPictureInPictureController) async -> Bool
```

## Parameters

- `pictureInPictureController`: The delegating controller.
- `completionHandler`: You must call the completion handler with a value of `true` to allow the system to finish restoring your player user interface.

## Mentioned In

- [Adopting Picture in Picture in a Custom Player](../adopting-picture-in-picture-in-a-custom-player.md)

<a id="Discussion"></a>

## Discussion

Implement this method if your player user interface requires configuration or layout to return to its default state.

# pictureInPictureController:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate to restore the user interface before Picture in Picture stops.

## Declaration

```objectivec
- (void) pictureInPictureController:(AVPictureInPictureController *) pictureInPictureController restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:(void (^)(BOOL restored)) completionHandler;
```

## Parameters

- `pictureInPictureController`: The delegating controller.
- `completionHandler`: You must call the completion handler with a value of `true` to allow the system to finish restoring your player user interface.

## Mentioned In

- [Adopting Picture in Picture in a Custom Player](../adopting-picture-in-picture-in-a-custom-player.md)

<a id="Discussion"></a>

## Discussion

Implement this method if your player user interface requires configuration or layout to return to its default state.
