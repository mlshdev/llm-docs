> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotoview](https://developer.apple.com/documentation/photosui/phlivephotoview)

# PHLivePhotoView (Swift)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A view that displays a Live Photo.

## Declaration

```swift
class PHLivePhotoView
```

## Mentioned In

- [Displaying Live Photos](../photokit/displaying-live-photos.md)

<a id="overview"></a>

## Overview

Use a Live Photo view to display the photo and control playback of its motion and sound content. In iOS and tvOS, you can obtain Live Photo objects from the Photos library, using the [PHPickerViewController](phpickerviewcontroller.md) or [PHAsset](../photos/phasset.md) and [PHImageManager](../photos/phimagemanager.md) classes, or by creating one from asset resources exported from a Photos library. In macOS, Live Photo objects are available only when editing Live Photo content in a photo editing extension that runs in the Photos app—see the [PHContentEditingInput](../photos/phcontenteditinginput.md) class to access Live Photo content in an editing session.

By default, a Live Photo view uses its own gesture recognizer to allow the user to play the motion and sound content of a Live Photo with the same interactions and visual effects seen in the Photos app. To customize this gesture recognizer—for example, to install it on a different view for proper event handling in your app’s view hierarchy—use the [playbackGestureRecognizer](phlivephotoview/playbackgesturerecognizer.md) property.

To animate the view briefly to hint that a picture is a Live Photo, use the [startPlayback(with:)](phlivephotoview/startplayback%28with_%29.md) method with the [PHLivePhotoViewPlaybackStyle.hint](phlivephotoviewplaybackstyle/hint.md) option.

> **Tip**

>  This class displays Live Photos in native iOS and tvOS apps and macOS photo editing extensions. To display Live Photo content on the web, use the [LivePhotosKit JS](https://developer.apple.com/documentation/livephotoskitjs) framework.

## Topics

### Choosing a Live Photo to Display

- [livePhoto](phlivephotoview/livephoto.md): The Live Photo displayed in the view.

### Managing Playback

- [playbackGestureRecognizer](phlivephotoview/playbackgesturerecognizer.md): A gesture recognizer that controls playback of the Live Photo in the view.
- [isMuted](phlivephotoview/ismuted.md): A Boolean value that determines whether the view plays the audio content of its Live Photo.
- [audioVolume](phlivephotoview/audiovolume.md): The audio gain to apply to the Live Photo’s movie content during playback.

### Responding to Playback Events

- [delegate](phlivephotoview/delegate.md): An object to be notified when Live Photo playback begins or ends.
- [PHLivePhotoViewDelegate](phlivephotoviewdelegate.md): The [PHLivePhotoViewDelegate](phlivephotoviewdelegate.md) protocol describes messages sent by a [PHLivePhotoView](phlivephotoview.md) instance in response to playback events when playing the motion and sound content associated with a Live Photo. To receive these messages, implement the methods in this protocol in one of your controller objects and assign that object to the [delegate](phlivephotoview/delegate.md) property of a Live Photo view.

### Manually Playing Live Photo Content

- [startPlayback(with:)](phlivephotoview/startplayback%28with_%29.md): Begins playback of Live Photo content in the view.
- [stopPlayback()](phlivephotoview/stopplayback%28%29.md): Stops playback of a Live Photo.
- [stopPlayback(animated:)](phlivephotoview/stopplayback%28animated_%29.md): Stops playback of a Live Photo in an animated manner.

### Accessing User Interface Icons for Live Photos

- [livePhotoBadgeImage(options:)](phlivephotoview/livephotobadgeimage%28options_%29.md): Returns an icon image for the specified Live Photo semantic options.
- [livePhotoBadgeView](phlivephotoview/livephotobadgeview.md): A view for displaying Live Photo status.

### Setting the Content Mode

- [contentMode](phlivephotoview/contentmode.md): The mode in which the view displays its content.
- [PHLivePhotoViewContentMode](phlivephotoviewcontentmode.md): The enumerated Live Photo content modes.

### Constants

- [PHLivePhotoViewPlaybackStyle](phlivephotoviewplaybackstyle.md): Options for how much of the motion and sound content of a Live Photo to play, used in the [startPlayback(with:)](phlivephotoview/startplayback%28with_%29.md) method and in messages to the view’s [delegate](phlivephotoview/delegate.md) object.
- [PHLivePhotoBadgeOptions](phlivephotobadgeoptions.md): Options for the semantic use and display style of icons for badging Live Photo assets, used by the [livePhotoBadgeImage(options:)](phlivephotoview/livephotobadgeimage%28options_%29.md) method.

### Instance Properties

- [contentsRect](phlivephotoview/contentsrect.md)
- [intrinsicContentSize](phlivephotoview/intrinsiccontentsize.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Shared photo library

- [Delivering an Enhanced Privacy Experience in Your Photos App](../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md): Adopt the latest privacy enhancements to deliver advanced user-privacy controls.

# PHLivePhotoView (Objective-C)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A view that displays a Live Photo.

## Declaration

```objectivec
@interface PHLivePhotoView : UIView
```

```objectivec
@interface PHLivePhotoView : NSView
```

## Mentioned In

- [Displaying Live Photos](../photokit/displaying-live-photos.md)

<a id="overview"></a>

## Overview

Use a Live Photo view to display the photo and control playback of its motion and sound content. In iOS and tvOS, you can obtain Live Photo objects from the Photos library, using the [PHPickerViewController](phpickerviewcontroller.md) or [PHAsset](../photos/phasset.md) and [PHImageManager](../photos/phimagemanager.md) classes, or by creating one from asset resources exported from a Photos library. In macOS, Live Photo objects are available only when editing Live Photo content in a photo editing extension that runs in the Photos app—see the [PHContentEditingInput](../photos/phcontenteditinginput.md) class to access Live Photo content in an editing session.

By default, a Live Photo view uses its own gesture recognizer to allow the user to play the motion and sound content of a Live Photo with the same interactions and visual effects seen in the Photos app. To customize this gesture recognizer—for example, to install it on a different view for proper event handling in your app’s view hierarchy—use the [playbackGestureRecognizer](phlivephotoview/playbackgesturerecognizer.md) property.

To animate the view briefly to hint that a picture is a Live Photo, use the [startPlaybackWithStyle:](phlivephotoview/startplayback%28with_%29.md) method with the [PHLivePhotoViewPlaybackStyleHint](phlivephotoviewplaybackstyle/hint.md) option.

> **Tip**

>  This class displays Live Photos in native iOS and tvOS apps and macOS photo editing extensions. To display Live Photo content on the web, use the [LivePhotosKit JS](https://developer.apple.com/documentation/livephotoskitjs) framework.

## Topics

### Choosing a Live Photo to Display

- [livePhoto](phlivephotoview/livephoto.md): The Live Photo displayed in the view.

### Managing Playback

- [playbackGestureRecognizer](phlivephotoview/playbackgesturerecognizer.md): A gesture recognizer that controls playback of the Live Photo in the view.
- [muted](phlivephotoview/ismuted.md): A Boolean value that determines whether the view plays the audio content of its Live Photo.
- [audioVolume](phlivephotoview/audiovolume.md): The audio gain to apply to the Live Photo’s movie content during playback.

### Responding to Playback Events

- [delegate](phlivephotoview/delegate.md): An object to be notified when Live Photo playback begins or ends.
- [PHLivePhotoViewDelegate](phlivephotoviewdelegate.md): The [PHLivePhotoViewDelegate](phlivephotoviewdelegate.md) protocol describes messages sent by a [PHLivePhotoView](phlivephotoview.md) instance in response to playback events when playing the motion and sound content associated with a Live Photo. To receive these messages, implement the methods in this protocol in one of your controller objects and assign that object to the [delegate](phlivephotoview/delegate.md) property of a Live Photo view.

### Manually Playing Live Photo Content

- [startPlaybackWithStyle:](phlivephotoview/startplayback%28with_%29.md): Begins playback of Live Photo content in the view.
- [stopPlayback](phlivephotoview/stopplayback%28%29.md): Stops playback of a Live Photo.
- [stopPlaybackAnimated:](phlivephotoview/stopplayback%28animated_%29.md): Stops playback of a Live Photo in an animated manner.

### Accessing User Interface Icons for Live Photos

- [livePhotoBadgeImageWithOptions:](phlivephotoview/livephotobadgeimage%28options_%29.md): Returns an icon image for the specified Live Photo semantic options.
- [livePhotoBadgeView](phlivephotoview/livephotobadgeview.md): A view for displaying Live Photo status.

### Setting the Content Mode

- [contentMode](phlivephotoview/contentmode.md): The mode in which the view displays its content.
- [PHLivePhotoViewContentMode](phlivephotoviewcontentmode.md): The enumerated Live Photo content modes.

### Constants

- [PHLivePhotoViewPlaybackStyle](phlivephotoviewplaybackstyle.md): Options for how much of the motion and sound content of a Live Photo to play, used in the [startPlaybackWithStyle:](phlivephotoview/startplayback%28with_%29.md) method and in messages to the view’s [delegate](phlivephotoview/delegate.md) object.
- [PHLivePhotoBadgeOptions](phlivephotobadgeoptions.md): Options for the semantic use and display style of icons for badging Live Photo assets, used by the [livePhotoBadgeImageWithOptions:](phlivephotoview/livephotobadgeimage%28options_%29.md) method.

### Instance Properties

- [contentsRect](phlivephotoview/contentsrect.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)

## See Also

### Shared photo library

- [Delivering an Enhanced Privacy Experience in Your Photos App](../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md): Adopt the latest privacy enhancements to deliver advanced user-privacy controls.
