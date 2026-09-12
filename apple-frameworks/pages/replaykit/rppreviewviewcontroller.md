> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rppreviewviewcontroller](https://developer.apple.com/documentation/replaykit/rppreviewviewcontroller)

# RPPreviewViewController (Swift)

**Framework:** ReplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object that displays a user interface where users preview and edit a screen recording that you create with ReplayKit.

> Use SCRecordingEditor instead

## Declaration

```swift
class RPPreviewViewController
```

<a id="overview"></a>

## Overview

Upon completion of a successful recording, the preview view controller is passed into the completion handler for [stopRecording(handler:)](rpscreenrecorder/stoprecording%28handler_%29.md).

## Topics

### Displaying the Preview UI

- [mode](rppreviewviewcontroller/mode.md): Deprecated. The type of screen that appears when the view is presented.
- [RPPreviewViewControllerMode](rppreviewviewcontrollermode.md): The modes used to determine whether the preview view controller or the share screen appears when editing a replay.
- [previewControllerDelegate](rppreviewviewcontroller/previewcontrollerdelegate.md): Deprecated. The preview view controller’s delegate.
- [RPPreviewViewControllerDelegate](rppreviewviewcontrollerdelegate.md): Deprecated. The protocol you implement to respond to changes to a screen-recording user interface.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Replay Sharing

- [Recording and Streaming Your macOS App](recording-and-streaming-your-macos-app.md): Share screen recordings, or broadcast live audio and video of your app, by adding ReplayKit to your macOS apps and games.
- [RPScreenRecorder](rpscreenrecorder.md): Deprecated. The shared recorder object that provides the ability to record audio and video of your app.

# RPPreviewViewController (Objective-C)

**Framework:** ReplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object that displays a user interface where users preview and edit a screen recording that you create with ReplayKit.

> Use SCRecordingEditor instead

## Declaration

```objectivec
@interface RPPreviewViewController : UIViewController
```

```objectivec
@interface RPPreviewViewController : NSViewController
```

<a id="overview"></a>

## Overview

Upon completion of a successful recording, the preview view controller is passed into the completion handler for [stopRecordingWithHandler:](rpscreenrecorder/stoprecording%28handler_%29.md).

## Topics

### Displaying the Preview UI

- [mode](rppreviewviewcontroller/mode.md): Deprecated. The type of screen that appears when the view is presented.
- [RPPreviewViewControllerMode](rppreviewviewcontrollermode.md): The modes used to determine whether the preview view controller or the share screen appears when editing a replay.
- [previewControllerDelegate](rppreviewviewcontroller/previewcontrollerdelegate.md): Deprecated. The preview view controller’s delegate.
- [RPPreviewViewControllerDelegate](rppreviewviewcontrollerdelegate.md): Deprecated. The protocol you implement to respond to changes to a screen-recording user interface.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Replay Sharing

- [Recording and Streaming Your macOS App](recording-and-streaming-your-macos-app.md): Share screen recordings, or broadcast live audio and video of your app, by adding ReplayKit to your macOS apps and games.
- [RPScreenRecorder](rpscreenrecorder.md): Deprecated. The shared recorder object that provides the ability to record audio and video of your app.
