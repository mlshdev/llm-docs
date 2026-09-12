> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msstickerview](https://developer.apple.com/documentation/messages/msstickerview)

# MSStickerView (Swift)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A view for displaying a sticker.

## Declaration

```swift
class MSStickerView
```

<a id="overview"></a>

## Overview

Use the [MSStickerView](msstickerview.md) class to display stickers. The sticker view also provides drag-and-drop functionality. The user can press and hold a sticker to peel it from the view, and then drag the sticker to any balloon in the transcript.

## Topics

### Working with Sticker Views

- [init(frame:sticker:)](msstickerview/init%28frame_sticker_%29.md): Initializes a new sticker view with the provided sticker and frame.
- [sticker](msstickerview/sticker.md): The displayed sticker object.

### Controlling Sticker Animation

- [animationDuration](msstickerview/animationduration.md): The amount of time it takes to complete the sticker’s animation.
- [isAnimating()](msstickerview/isanimating%28%29.md): Returns a Boolean value that indicates whether the sticker is animating.
- [startAnimating()](msstickerview/startanimating%28%29.md): Starts the sticker’s animation, beginning with the first frame.
- [stopAnimating()](msstickerview/stopanimating%28%29.md): Stops the sticker’s animation.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
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

### Custom sticker packs

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md): Enable your Sticker pack or iMessage app in the media context.
- [Adding your sticker packs to Messages](adding-your-sticker-packs-to-messages.md): Drag and drop your sticker pack into the Stickers asset catalog to let people access your stickers from Messages.
- [MSStickerBrowserViewController](msstickerbrowserviewcontroller.md): A view controller that provides dynamic content to the standard sticker browser.
- [MSStickerBrowserView](msstickerbrowserview.md): A browser view that displays a dynamically generated list of stickers.
- [MSStickerSize](msstickersize.md): The size of the stickers in the browser view.

# MSStickerView (Objective-C)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A view for displaying a sticker.

## Declaration

```objectivec
@interface MSStickerView : UIView
```

<a id="overview"></a>

## Overview

Use the [MSStickerView](msstickerview.md) class to display stickers. The sticker view also provides drag-and-drop functionality. The user can press and hold a sticker to peel it from the view, and then drag the sticker to any balloon in the transcript.

## Topics

### Working with Sticker Views

- [initWithFrame:sticker:](msstickerview/init%28frame_sticker_%29.md): Initializes a new sticker view with the provided sticker and frame.
- [sticker](msstickerview/sticker.md): The displayed sticker object.

### Controlling Sticker Animation

- [animationDuration](msstickerview/animationduration.md): The amount of time it takes to complete the sticker’s animation.
- [isAnimating](msstickerview/isanimating%28%29.md): Returns a Boolean value that indicates whether the sticker is animating.
- [startAnimating](msstickerview/startanimating%28%29.md): Starts the sticker’s animation, beginning with the first frame.
- [stopAnimating](msstickerview/stopanimating%28%29.md): Stops the sticker’s animation.

## Relationships

### Inherits From

- [UIView](https://developer.apple.com/documentation/uikit/uiview)

## See Also

### Custom sticker packs

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md): Enable your Sticker pack or iMessage app in the media context.
- [Adding your sticker packs to Messages](adding-your-sticker-packs-to-messages.md): Drag and drop your sticker pack into the Stickers asset catalog to let people access your stickers from Messages.
- [MSStickerBrowserViewController](msstickerbrowserviewcontroller.md): A view controller that provides dynamic content to the standard sticker browser.
- [MSStickerBrowserView](msstickerbrowserview.md): A browser view that displays a dynamically generated list of stickers.
- [MSStickerSize](msstickersize.md): The size of the stickers in the browser view.
