> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msstickerbrowserviewcontroller](https://developer.apple.com/documentation/messages/msstickerbrowserviewcontroller)

# MSStickerBrowserViewController (Swift)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A view controller that provides dynamic content to the standard sticker browser.

## Declaration

```swift
class MSStickerBrowserViewController
```

<a id="overview"></a>

## Overview

Use the [MSStickerBrowserViewController](msstickerbrowserviewcontroller.md) to present the standard sticker browser. This browser provides drag-and-drop functionality. The user can press and hold a sticker to peel it from the browser, then drag the sticker to any balloon in the transcript. The user can also tap stickers to add them to the Messages app’s input field.

By default, the sticker browser view controller acts as the data source for its [MSStickerBrowserView](msstickerbrowserview.md) view (see the [stickerBrowserView](msstickerbrowserviewcontroller/stickerbrowserview.md) property). This lets you dynamically change the list of stickers at runtime. You can also customize the size of the stickers inside the browser.

<a id="Setting-the-Sticker-Browser-as-Your-Root-View"></a>

### Setting the Sticker Browser as Your Root View

To use the sticker browser view controller as your extension’s root view, perform the following steps:

1. Create a custom subclass of the [MSStickerBrowserViewController](msstickerbrowserviewcontroller.md) class. For more information, see the subclassing notes.
2. In Interface Builder, add a container view to your extension’s initial scene and pin it to fill the root view as desired. For more information on setting up a container view, see [Configuring a Container in Interface Builder](https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/ImplementingaContainerViewController.html#//apple_ref/doc/uid/TP40007457-CH11-SW20).
3. In the Identity inspector, set the embedded view controller’s class to your custom [MSStickerBrowserViewController](msstickerbrowserviewcontroller.md) subclass.

By using an [MSMessagesAppViewController](msmessagesappviewcontroller.md) instance as the extension’s root view controller, this approach ensures that the root view controller can respond to important messages from the system, while the contained sticker browser view controller focuses on managing your stickers.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

By default, this controller sets itself as its sticker browser view’s data source. You must either provide another data source, or implement both [numberOfStickers(in:)](msstickerbrowserviewdatasource/numberofstickers%28in_%29.md) and [stickerBrowserView(\_:stickerAt:)](msstickerbrowserviewdatasource/stickerbrowserview%28__stickerat_%29.md).

For more information, see [MSStickerBrowserViewDataSource](msstickerbrowserviewdatasource.md).

## Topics

### Working with Stickers

- [init(stickerSize:)](msstickerbrowserviewcontroller/init%28stickersize_%29.md): Creates a new sticker browser view controller with stickers of the provided size.
- [stickerBrowserView](msstickerbrowserviewcontroller/stickerbrowserview.md): The sticker browser view managed by this controller.
- [stickerSize](msstickerbrowserviewcontroller/stickersize.md): A constant that indicates the size of the stickers.

## Relationships

### Inherits From

- [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MSStickerBrowserViewDataSource](msstickerbrowserviewdatasource.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationproviding)
- [UIAppearanceContainer](https://developer.apple.com/documentation/uikit/uiappearancecontainer)
- [UIContentContainer](https://developer.apple.com/documentation/uikit/uicontentcontainer)
- [UIFocusEnvironment](https://developer.apple.com/documentation/uikit/uifocusenvironment)
- [UIPasteConfigurationSupporting](https://developer.apple.com/documentation/uikit/uipasteconfigurationsupporting)
- [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)
- [UIStateRestoring](https://developer.apple.com/documentation/uikit/uistaterestoring)
- [UITraitChangeObservable](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-67e94)
- [UITraitEnvironment](https://developer.apple.com/documentation/uikit/uitraitenvironment)
- [UIUserActivityRestoring](https://developer.apple.com/documentation/uikit/uiuseractivityrestoring)

## See Also

### Custom sticker packs

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md): Enable your Sticker pack or iMessage app in the media context.
- [Adding your sticker packs to Messages](adding-your-sticker-packs-to-messages.md): Drag and drop your sticker pack into the Stickers asset catalog to let people access your stickers from Messages.
- [MSStickerBrowserView](msstickerbrowserview.md): A browser view that displays a dynamically generated list of stickers.
- [MSStickerView](msstickerview.md): A view for displaying a sticker.
- [MSStickerSize](msstickersize.md): The size of the stickers in the browser view.

# MSStickerBrowserViewController (Objective-C)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A view controller that provides dynamic content to the standard sticker browser.

## Declaration

```objectivec
@interface MSStickerBrowserViewController : UIViewController
```

<a id="overview"></a>

## Overview

Use the [MSStickerBrowserViewController](msstickerbrowserviewcontroller.md) to present the standard sticker browser. This browser provides drag-and-drop functionality. The user can press and hold a sticker to peel it from the browser, then drag the sticker to any balloon in the transcript. The user can also tap stickers to add them to the Messages app’s input field.

By default, the sticker browser view controller acts as the data source for its [MSStickerBrowserView](msstickerbrowserview.md) view (see the [stickerBrowserView](msstickerbrowserviewcontroller/stickerbrowserview.md) property). This lets you dynamically change the list of stickers at runtime. You can also customize the size of the stickers inside the browser.

<a id="Setting-the-Sticker-Browser-as-Your-Root-View"></a>

### Setting the Sticker Browser as Your Root View

To use the sticker browser view controller as your extension’s root view, perform the following steps:

1. Create a custom subclass of the [MSStickerBrowserViewController](msstickerbrowserviewcontroller.md) class. For more information, see the subclassing notes.
2. In Interface Builder, add a container view to your extension’s initial scene and pin it to fill the root view as desired. For more information on setting up a container view, see [Configuring a Container in Interface Builder](https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/ImplementingaContainerViewController.html#//apple_ref/doc/uid/TP40007457-CH11-SW20).
3. In the Identity inspector, set the embedded view controller’s class to your custom [MSStickerBrowserViewController](msstickerbrowserviewcontroller.md) subclass.

By using an [MSMessagesAppViewController](msmessagesappviewcontroller.md) instance as the extension’s root view controller, this approach ensures that the root view controller can respond to important messages from the system, while the contained sticker browser view controller focuses on managing your stickers.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

By default, this controller sets itself as its sticker browser view’s data source. You must either provide another data source, or implement both [numberOfStickersInStickerBrowserView:](msstickerbrowserviewdatasource/numberofstickers%28in_%29.md) and [stickerBrowserView:stickerAtIndex:](msstickerbrowserviewdatasource/stickerbrowserview%28__stickerat_%29.md).

For more information, see [MSStickerBrowserViewDataSource](msstickerbrowserviewdatasource.md).

## Topics

### Working with Stickers

- [initWithStickerSize:](msstickerbrowserviewcontroller/init%28stickersize_%29.md): Creates a new sticker browser view controller with stickers of the provided size.
- [stickerBrowserView](msstickerbrowserviewcontroller/stickerbrowserview.md): The sticker browser view managed by this controller.
- [stickerSize](msstickerbrowserviewcontroller/stickersize.md): A constant that indicates the size of the stickers.

## Relationships

### Inherits From

- [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller)

### Conforms To

- [MSStickerBrowserViewDataSource](msstickerbrowserviewdatasource.md)

## See Also

### Custom sticker packs

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md): Enable your Sticker pack or iMessage app in the media context.
- [Adding your sticker packs to Messages](adding-your-sticker-packs-to-messages.md): Drag and drop your sticker pack into the Stickers asset catalog to let people access your stickers from Messages.
- [MSStickerBrowserView](msstickerbrowserview.md): A browser view that displays a dynamically generated list of stickers.
- [MSStickerView](msstickerview.md): A view for displaying a sticker.
- [MSStickerSize](msstickersize.md): The size of the stickers in the browser view.
