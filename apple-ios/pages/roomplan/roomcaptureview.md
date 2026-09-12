> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcaptureview](https://developer.apple.com/documentation/roomplan/roomcaptureview)

# RoomCaptureView

**Framework:** RoomPlan  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A view that enables the user to scan their room with the device’s camera.

## Declaration

```swift
@MainActor @objc @preconcurrency class RoomCaptureView
```

## Mentioned In

- [Scanning the rooms of a single structure](scanning-the-rooms-of-a-single-structure.md)

<a id="overview"></a>

## Overview

This class provides your app with a view that manages the scan process from start to finish, including:

- A camera feed that users look through to see their room in AR.
- Real-time graphic overlays that display on top of physical structures in the room to convey scanning progress.
- User instructions that explain how to position the device, if the framework requires a specific kind of device movement or perspective to complete the capture.

When the app determines that the current scan is complete, the view displays a small-scale version of the scanned room for the user to approve.

Alternatively, your app can display custom graphics during the scanning process by creating and using a scan session object ([RoomCaptureSession](roomcapturesession.md)) directly.

See [Create a 3D model of an interior room by guiding the user through an AR experience](create-a-3d-model-of-an-interior-room-by-guiding-the-user-through-an-ar-experience.md) for a sample code project that demonstrates `RoomCaptureView`.

## Topics

### Creating a room-capture view

- [init(frame:arSession:)](roomcaptureview/init%28frame_arsession_%29.md): Creates a room-capture view with the given AR session.
- [init(frame:)](roomcaptureview/init%28frame_%29.md): Creates a view that sizes to the specified frame.
- [init(coder:)](roomcaptureview/init%28coder_%29.md): Creates a view by deserializing from the specified coder.

### Reacting to scan events

- [captureSession](roomcaptureview/capturesession.md): An object that notifies a delegate of particular events in the room-scanning life cycle.
- [delegate](roomcaptureview/delegate.md): An object that determines whether to post-process the results of a scan.

### Displaying scan progress

- [isModelEnabled](roomcaptureview/ismodelenabled.md): A Boolean value that determines whether the view displays a miniature rendering of the scanned room at the bottom of its bounds.

### Accessing view features

- [subviews](roomcaptureview/subviews.md): An array that contains the view’s subviews.
- [layoutSubviews()](roomcaptureview/layoutsubviews%28%29.md): Instructs the view’s subviews to position within the view.
- [encode(with:)](roomcaptureview/encode%28with_%29.md): Serializes the view to the specified coder.
- [traitCollectionDidChange(\_:)](roomcaptureview/traitcollectiondidchange%28__%29.md): Notifies the view when the device orientation changes.

## Relationships

### Inherits From

- [UIView](https://developer.apple.com/documentation/uikit/uiview)

### Conforms To

- [CALayerDelegate](https://developer.apple.com/documentation/quartzcore/calayerdelegate)
- [CLBodyIdentifiable](https://developer.apple.com/documentation/corelocation/clbodyidentifiable)
- [CMBodyIdentifiable](https://developer.apple.com/documentation/coremotion/cmbodyidentifiable)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [UIAccessibilityIdentification](https://developer.apple.com/documentation/uikit/uiaccessibilityidentification)
- [UIActivityItemsConfigurationProviding](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationproviding)
- [UIAppearance](https://developer.apple.com/documentation/uikit/uiappearance)
- [UIAppearanceContainer](https://developer.apple.com/documentation/uikit/uiappearancecontainer)
- [UICoordinateSpace](https://developer.apple.com/documentation/uikit/uicoordinatespace)
- [UIDynamicItem](https://developer.apple.com/documentation/uikit/uidynamicitem)
- [UIFocusEnvironment](https://developer.apple.com/documentation/uikit/uifocusenvironment)
- [UIFocusItem](https://developer.apple.com/documentation/uikit/uifocusitem)
- [UIFocusItemContainer](https://developer.apple.com/documentation/uikit/uifocusitemcontainer)
- [UILargeContentViewerItem](https://developer.apple.com/documentation/uikit/uilargecontentvieweritem)
- [UIPasteConfigurationSupporting](https://developer.apple.com/documentation/uikit/uipasteconfigurationsupporting)
- [UIPopoverPresentationControllerSourceItem](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontrollersourceitem)
- [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)
- [UITraitChangeObservable](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-67e94)
- [UITraitEnvironment](https://developer.apple.com/documentation/uikit/uitraitenvironment)
- [UIUserActivityRestoring](https://developer.apple.com/documentation/uikit/uiuseractivityrestoring)

## See Also

### User Interface

- [RoomCaptureViewDelegate](roomcaptureviewdelegate.md): A specification to post-process the results of a scan.
