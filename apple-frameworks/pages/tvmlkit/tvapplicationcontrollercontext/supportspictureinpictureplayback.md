> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvapplicationcontrollercontext/supportspictureinpictureplayback](https://developer.apple.com/documentation/tvmlkit/tvapplicationcontrollercontext/supportspictureinpictureplayback)

# supportsPictureInPicturePlayback (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

A Boolean value that indicates whether your app can display content in a picture-in-picture format.

> Please use SwiftUI or UIKit

## Declaration

```swift
var supportsPictureInPicturePlayback: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the system allows the user to continue watching your app’s video content while using other apps. If you customize playback with [AVPlayerViewController](../../avkit/avplayerviewcontroller.md), set the controller’s [delegate](../../avkit/avplayerviewcontroller/delegate.md) property to an object that implements the [AVPlayerViewControllerDelegate](../../avkit/avplayerviewcontrollerdelegate.md) protocol and the system will notify that object about picture-in-picture playback events.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Providing Launch Information

- [javaScriptApplicationURL](javascriptapplicationurl.md): Deprecated. URL pointing to the controlling JavaScript file for the application.
- [launchOptions](launchoptions.md): Deprecated. Data passed to the JavaScript launch callback method.
- [storageIdentifier](storageidentifier.md): Deprecated. Optional identifier for a local storage file.

# supportsPictureInPicturePlayback (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

A Boolean value that indicates whether your app can display content in a picture-in-picture format.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL supportsPictureInPicturePlayback;
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the system allows the user to continue watching your app’s video content while using other apps. If you customize playback with [AVPlayerViewController](../../avkit/avplayerviewcontroller.md), set the controller’s [delegate](../../avkit/avplayerviewcontroller/delegate.md) property to an object that implements the [AVPlayerViewControllerDelegate](../../avkit/avplayerviewcontrollerdelegate.md) protocol and the system will notify that object about picture-in-picture playback events.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Providing Launch Information

- [javaScriptApplicationURL](javascriptapplicationurl.md): Deprecated. URL pointing to the controlling JavaScript file for the application.
- [launchOptions](launchoptions.md): Deprecated. Data passed to the JavaScript launch callback method.
- [storageIdentifier](storageidentifier.md): Deprecated. Optional identifier for a local storage file.
