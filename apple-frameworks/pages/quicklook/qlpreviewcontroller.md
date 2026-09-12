> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontroller](https://developer.apple.com/documentation/quicklook/qlpreviewcontroller)

# QLPreviewController (Swift)

**Framework:** Quick Look  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A specialized view controller for previewing an item.

## Declaration

```swift
class QLPreviewController
```

<a id="overview"></a>

## Overview

A `QLPreviewController` can display previews for many common file types, including the following:

- iWork documents
- Microsoft Office documents
- Rich text format, or RTF, documents
- PDF files
- Images
- Text files with a uniform type identifier that conforms to the `public.text` type. To learn more, see [Uniform Type Identifiers](../uniformtypeidentifiers.md).
- Comma-separated values, or CSV, files
- 3D models in the USDZ format with both standalone and AR views for viewing the model

> **Note**

>  The list of supported common file types may change between operating system releases. In addition, you can enable previews for your own file types by implementing your own preview extension.

<a id="Providing-data-to-a-preview-controller"></a>

### Providing data to a preview controller

To use a preview controller, you need to provide a data source object. The data source provides preview items to the controller and tells it how many items to include in a preview navigation list. If there’s more than one item in the list, a controller displays navigation arrows to let the user switch among the items. If you push a preview controller into view using a navigation controller, you can provide buttons in the navigation bar for moving through the navigation list.

For details on providing items to a preview controller, see [QLPreviewControllerDataSource](qlpreviewcontrollerdatasource.md) and [QLPreviewItem](qlpreviewitem.md).

<a id="Presenting-a-preview-controller"></a>

### Presenting a preview controller

You can present a `QLPreviewController` modally by calling [present(\_:animated:completion:)](../uikit/uiviewcontroller/present%28__animated_completion_%29.md) from a presenting [UIViewController](../uikit/uiviewcontroller.md), or you can push it into view using a [UINavigationController](../uikit/uinavigationcontroller.md). The preview includes a title that the system derives from the last path component of the item URL. You can override it by implementing a [previewItemTitle](qlpreviewitem/previewitemtitle.md) accessor for the preview item.

<a id="Previewing-items-in-Mac-apps-built-with-Mac-Catalyst"></a>

### Previewing items in Mac apps built with Mac Catalyst

For Mac apps built with Mac Catalyst, presenting a `QLPreviewController` displays the preview in a [QLPreviewPanel](https://developer.apple.com/documentation/quicklookui/qlpreviewpanel) and dims the previously active window. However, unlike on iOS devices, where displaying a preview hides the presenting view controller, the previously visible window’s content remains visible in Mac apps built with Mac Catalyst. Be sure the content is appropriate to display while the `QLPreviewPanel` is visible.

In addition, the system doesn’t display a live preview if you embed the `QLPreviewController` in another view controller. Instead, it displays a thumbnail that matches the size of the preview controller’s view.

## Topics

### Configuring a preview controller

- [dataSource](qlpreviewcontroller/datasource.md): The preview controller’s data source.
- [QLPreviewControllerDataSource](qlpreviewcontrollerdatasource.md): The protocol that a data source for a preview controller needs to adopt to provide preview items to the controller.
- [delegate](qlpreviewcontroller/delegate.md): The preview controller’s delegate object.
- [QLPreviewControllerDelegate](qlpreviewcontrollerdelegate.md): The protocol that a delegate of a preview controller needs to adopt to handle Quick Look previews.

### Managing item previews

- [canPreview(\_:)](qlpreviewcontroller/canpreview%28__%29.md): Returns a Boolean value that indicates whether the preview controller can display an item.
- [currentPreviewItem](qlpreviewcontroller/currentpreviewitem.md): The item displaying in the Quick Look preview controller.
- [currentPreviewItemIndex](qlpreviewcontroller/currentpreviewitemindex.md): The index within the preview item navigation list of the item displaying in the Quick Look preview controller.
- [refreshCurrentPreviewItem()](qlpreviewcontroller/refreshcurrentpreviewitem%28%29.md): Asks the Quick Look preview controller to recompute the display of the current preview item.
- [reloadData()](qlpreviewcontroller/reloaddata%28%29.md): Asks the preview controller to reload its data from its data source.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
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

### Previews

- [QLPreviewItem](https://developer.apple.com/documentation/quicklookui/qlpreviewitem): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [QLPreviewSceneActivationConfiguration](qlpreviewsceneactivationconfiguration.md): A scene configuration to preview items at the specified URLs.
- [Previews or thumbnail images for macOS 10.14 or earlier](previews-or-thumbnail-images-for-macos-10-14-or-earlier.md): Create thumbnail images or previews of common files and custom file types in earlier versions of macOS.

# QLPreviewController (Objective-C)

**Framework:** Quick Look  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A specialized view controller for previewing an item.

## Declaration

```objectivec
@interface QLPreviewController : UIViewController
```

<a id="overview"></a>

## Overview

A `QLPreviewController` can display previews for many common file types, including the following:

- iWork documents
- Microsoft Office documents
- Rich text format, or RTF, documents
- PDF files
- Images
- Text files with a uniform type identifier that conforms to the `public.text` type. To learn more, see [Uniform Type Identifiers](../uniformtypeidentifiers.md).
- Comma-separated values, or CSV, files
- 3D models in the USDZ format with both standalone and AR views for viewing the model

> **Note**

>  The list of supported common file types may change between operating system releases. In addition, you can enable previews for your own file types by implementing your own preview extension.

<a id="Providing-data-to-a-preview-controller"></a>

### Providing data to a preview controller

To use a preview controller, you need to provide a data source object. The data source provides preview items to the controller and tells it how many items to include in a preview navigation list. If there’s more than one item in the list, a controller displays navigation arrows to let the user switch among the items. If you push a preview controller into view using a navigation controller, you can provide buttons in the navigation bar for moving through the navigation list.

For details on providing items to a preview controller, see [QLPreviewControllerDataSource](qlpreviewcontrollerdatasource.md) and [QLPreviewItem](qlpreviewitem.md).

<a id="Presenting-a-preview-controller"></a>

### Presenting a preview controller

You can present a `QLPreviewController` modally by calling [presentViewController:animated:completion:](../uikit/uiviewcontroller/present%28__animated_completion_%29.md) from a presenting [UIViewController](../uikit/uiviewcontroller.md), or you can push it into view using a [UINavigationController](../uikit/uinavigationcontroller.md). The preview includes a title that the system derives from the last path component of the item URL. You can override it by implementing a [previewItemTitle](qlpreviewitem/previewitemtitle.md) accessor for the preview item.

<a id="Previewing-items-in-Mac-apps-built-with-Mac-Catalyst"></a>

### Previewing items in Mac apps built with Mac Catalyst

For Mac apps built with Mac Catalyst, presenting a `QLPreviewController` displays the preview in a [QLPreviewPanel](https://developer.apple.com/documentation/quicklookui/qlpreviewpanel) and dims the previously active window. However, unlike on iOS devices, where displaying a preview hides the presenting view controller, the previously visible window’s content remains visible in Mac apps built with Mac Catalyst. Be sure the content is appropriate to display while the `QLPreviewPanel` is visible.

In addition, the system doesn’t display a live preview if you embed the `QLPreviewController` in another view controller. Instead, it displays a thumbnail that matches the size of the preview controller’s view.

## Topics

### Configuring a preview controller

- [dataSource](qlpreviewcontroller/datasource.md): The preview controller’s data source.
- [QLPreviewControllerDataSource](qlpreviewcontrollerdatasource.md): The protocol that a data source for a preview controller needs to adopt to provide preview items to the controller.
- [delegate](qlpreviewcontroller/delegate.md): The preview controller’s delegate object.
- [QLPreviewControllerDelegate](qlpreviewcontrollerdelegate.md): The protocol that a delegate of a preview controller needs to adopt to handle Quick Look previews.

### Managing item previews

- [canPreviewItem:](qlpreviewcontroller/canpreview%28__%29.md): Returns a Boolean value that indicates whether the preview controller can display an item.
- [currentPreviewItem](qlpreviewcontroller/currentpreviewitem.md): The item displaying in the Quick Look preview controller.
- [currentPreviewItemIndex](qlpreviewcontroller/currentpreviewitemindex.md): The index within the preview item navigation list of the item displaying in the Quick Look preview controller.
- [refreshCurrentPreviewItem](qlpreviewcontroller/refreshcurrentpreviewitem%28%29.md): Asks the Quick Look preview controller to recompute the display of the current preview item.
- [reloadData](qlpreviewcontroller/reloaddata%28%29.md): Asks the preview controller to reload its data from its data source.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Previews

- [QLPreviewItem](https://developer.apple.com/documentation/quicklookui/qlpreviewitem): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [QLPreviewSceneActivationConfiguration](qlpreviewsceneactivationconfiguration.md): A scene configuration to preview items at the specified URLs.
- [Previews or thumbnail images for macOS 10.14 or earlier](previews-or-thumbnail-images-for-macos-10-14-or-earlier.md): Create thumbnail images or previews of common files and custom file types in earlier versions of macOS.
