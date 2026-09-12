> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msstickerbrowserview](https://developer.apple.com/documentation/messages/msstickerbrowserview)

# MSStickerBrowserView (Swift)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A browser view that displays a dynamically generated list of stickers.

## Declaration

```swift
class MSStickerBrowserView
```

<a id="overview"></a>

## Overview

Use the [MSStickerBrowserView](msstickerbrowserview.md) to display a dynamically generated list of stickers. The browser provides drag-and-drop functionality. The user can press and hold a sticker to peel it from the browser, then drag the sticker to any balloon in the transcript. The user can also tap stickers to add them to the Messages app’s input field.

The sticker browser presents the stickers provided by its [dataSource](msstickerbrowserview/datasource.md) property. The data source can dynamically change the list of stickers at runtime. You can also customize the size of the stickers inside the browser.

If you create an [MSStickerBrowserViewController](msstickerbrowserviewcontroller.md) object, it automatically creates and displays a sticker browser view with stickers of the specified size. The controller is automatically set as the browser’s data source. Alternatively, you can instantiate your own sticker browser view, letting you customize the size of both the browser and the stickers; however, you need to provide your own data source.

If you need additional customizations, you must build your own user interface using [MSStickerView](msstickerview.md) objects.

If you are simply presenting a static list of stickers using the default browser interface, consider building a Sticker Pack Application instead. For more information, see [Messages](../messages.md).

## Topics

### Creating Sticker Browser Views

- [init(frame:)](msstickerbrowserview/init%28frame_%29.md): Creates a new sticker browser containing medium-sized stickers.
- [init(frame:stickerSize:)](msstickerbrowserview/init%28frame_stickersize_%29.md): Creates a new sticker browser containing stickers of the specified size.

### Managing the Sticker Collection Contents

- [dataSource](msstickerbrowserview/datasource.md): The sticker browser’s data source.
- [MSStickerBrowserViewDataSource](msstickerbrowserviewdatasource.md): The protocol for dynamically providing stickers to a browser view.
- [reloadData()](msstickerbrowserview/reloaddata%28%29.md): Asks the sticker browser to reload its data from the data source.

### Managing the Browser’s Appearance

- [contentInset](msstickerbrowserview/contentinset.md): The distance that the content is inset from the edge of the browser view.
- [contentOffset](msstickerbrowserview/contentoffset.md): The distance that the content is offset from the browser’s origin.
- [setContentOffset(\_:animated:)](msstickerbrowserview/setcontentoffset%28__animated_%29.md): Sets the offset distance between the content and the browser’s origin.
- [stickerSize](msstickerbrowserview/stickersize.md): The size of the stickers in the browser.

### Constants

- [MSStickerSize](msstickersize.md): The size of the stickers in the browser view.

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
- [MSStickerView](msstickerview.md): A view for displaying a sticker.
- [MSStickerSize](msstickersize.md): The size of the stickers in the browser view.

# MSStickerBrowserView (Objective-C)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A browser view that displays a dynamically generated list of stickers.

## Declaration

```objectivec
@interface MSStickerBrowserView : UIView
```

<a id="overview"></a>

## Overview

Use the [MSStickerBrowserView](msstickerbrowserview.md) to display a dynamically generated list of stickers. The browser provides drag-and-drop functionality. The user can press and hold a sticker to peel it from the browser, then drag the sticker to any balloon in the transcript. The user can also tap stickers to add them to the Messages app’s input field.

The sticker browser presents the stickers provided by its [dataSource](msstickerbrowserview/datasource.md) property. The data source can dynamically change the list of stickers at runtime. You can also customize the size of the stickers inside the browser.

If you create an [MSStickerBrowserViewController](msstickerbrowserviewcontroller.md) object, it automatically creates and displays a sticker browser view with stickers of the specified size. The controller is automatically set as the browser’s data source. Alternatively, you can instantiate your own sticker browser view, letting you customize the size of both the browser and the stickers; however, you need to provide your own data source.

If you need additional customizations, you must build your own user interface using [MSStickerView](msstickerview.md) objects.

If you are simply presenting a static list of stickers using the default browser interface, consider building a Sticker Pack Application instead. For more information, see [Messages](../messages.md).

## Topics

### Creating Sticker Browser Views

- [initWithFrame:](msstickerbrowserview/init%28frame_%29.md): Creates a new sticker browser containing medium-sized stickers.
- [initWithFrame:stickerSize:](msstickerbrowserview/init%28frame_stickersize_%29.md): Creates a new sticker browser containing stickers of the specified size.

### Managing the Sticker Collection Contents

- [dataSource](msstickerbrowserview/datasource.md): The sticker browser’s data source.
- [MSStickerBrowserViewDataSource](msstickerbrowserviewdatasource.md): The protocol for dynamically providing stickers to a browser view.
- [reloadData](msstickerbrowserview/reloaddata%28%29.md): Asks the sticker browser to reload its data from the data source.

### Managing the Browser’s Appearance

- [contentInset](msstickerbrowserview/contentinset.md): The distance that the content is inset from the edge of the browser view.
- [contentOffset](msstickerbrowserview/contentoffset.md): The distance that the content is offset from the browser’s origin.
- [setContentOffset:animated:](msstickerbrowserview/setcontentoffset%28__animated_%29.md): Sets the offset distance between the content and the browser’s origin.
- [stickerSize](msstickerbrowserview/stickersize.md): The size of the stickers in the browser.

### Constants

- [MSStickerSize](msstickersize.md): The size of the stickers in the browser view.

## Relationships

### Inherits From

- [UIView](https://developer.apple.com/documentation/uikit/uiview)

## See Also

### Custom sticker packs

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md): Enable your Sticker pack or iMessage app in the media context.
- [Adding your sticker packs to Messages](adding-your-sticker-packs-to-messages.md): Drag and drop your sticker pack into the Stickers asset catalog to let people access your stickers from Messages.
- [MSStickerBrowserViewController](msstickerbrowserviewcontroller.md): A view controller that provides dynamic content to the standard sticker browser.
- [MSStickerView](msstickerview.md): A view for displaying a sticker.
- [MSStickerSize](msstickersize.md): The size of the stickers in the browser view.
