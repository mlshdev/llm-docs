> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontroller](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontroller)

# UIDocumentInteractionController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller that previews, opens, or prints files with a file format that your app can’t handle directly.

## Declaration

```swift
@MainActor class UIDocumentInteractionController
```

<a id="overview"></a>

## Overview

Use this class to present an appropriate user interface for previewing, opening, copying, or printing a specified file. For example, an email program might use this class to allow the user to preview attachments and open them in other apps.

After presenting its user interface, a document interaction controller handles all interactions needed to support file preview and menu display.

You can also use the delegate to participate in interactions occurring within the presented interface. For example, the delegate is notified when a file is about to be handed off to another application for opening. For a complete description of the methods you can implement in your delegate, see [UIDocumentInteractionControllerDelegate](uidocumentinteractioncontrollerdelegate.md).

## Topics

### Creating the document interaction controller

- [init(url:)](uidocumentinteractioncontroller/init%28url_%29-8wb4p.md): Creates a document interaction controller with the specified URL.

### Handling document-related interactions

- [delegate](uidocumentinteractioncontroller/delegate.md): The delegate you want to receive document interaction notifications.
- [UIDocumentInteractionControllerDelegate](uidocumentinteractioncontrollerdelegate.md): A set of methods you can implement to respond to messages from a document interaction controller.

### Presenting and dismissing a document preview

- [presentPreview(animated:)](uidocumentinteractioncontroller/presentpreview%28animated_%29.md): Displays a full-screen preview of the target document.
- [dismissPreview(animated:)](uidocumentinteractioncontroller/dismisspreview%28animated_%29.md): Dismisses the currently active document preview.

### Presenting and dismissing menus

- [presentOptionsMenu(from:in:animated:)](uidocumentinteractioncontroller/presentoptionsmenu%28from_in_animated_%29.md): Displays an options menu and anchors it to the specified location in the view.
- [presentOptionsMenu(from:animated:)](uidocumentinteractioncontroller/presentoptionsmenu%28from_animated_%29.md): Displays an options menu and anchors it to the specified bar button item.
- [presentOpenInMenu(from:in:animated:)](uidocumentinteractioncontroller/presentopeninmenu%28from_in_animated_%29.md): Displays a menu for opening the document and anchors that menu to the specified view.
- [presentOpenInMenu(from:animated:)](uidocumentinteractioncontroller/presentopeninmenu%28from_animated_%29.md): Displays a menu for opening the document and anchors that menu to the specified bar button item.
- [dismissMenu(animated:)](uidocumentinteractioncontroller/dismissmenu%28animated_%29.md): Dismisses the currently active menu.

### Accessing the target document’s attributes

- [url](uidocumentinteractioncontroller/url.md): The URL identifying the target file on the local filesystem.
- [uti](uidocumentinteractioncontroller/uti.md): The type of the target file.
- [name](uidocumentinteractioncontroller/name.md): The name of the target file.
- [icons](uidocumentinteractioncontroller/icons.md): The images associated with the target file.
- [annotation](uidocumentinteractioncontroller/annotation.md): Custom property list information for the target file.

### Accessing the controller attributes

- [gestureRecognizers](uidocumentinteractioncontroller/gesturerecognizers.md): The system-supplied gesture recognizers for presenting a document interaction controller.

### Initializers

- [init(URL:)](uidocumentinteractioncontroller/init%28url_%29-39lrq.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIActionSheetDelegate](uiactionsheetdelegate.md)

## See Also

### Documents and directories

- [Customizing a document-based app’s launch experience](customizing-a-document-based-app-s-launch-experience.md): Add unique elements to your app’s document launch scene.
- [Adding a document browser to your app](adding-a-document-browser-to-your-app.md): Give people access to their local or remote documents from within your app.
- [Providing access to directories](providing-access-to-directories.md): Use a document picker to access the content of a directory outside your app’s container.
- [Building an app with a document browser](building-an-app-with-a-document-browser.md): Provide access to on-device and cloud files by adding a document browser to your app.
- [Building a document browser app for custom file formats](building-a-document-browser-app-for-custom-file-formats.md): Implement a custom document file format to manage user interactions with files on different cloud storage providers.
- [UIDocumentViewController](uidocumentviewcontroller.md): A view controller that manages and presents a document stored locally or in the cloud.
- [UIDocumentBrowserViewController](uidocumentbrowserviewcontroller.md): A view controller for browsing and performing actions on documents that you store locally and in the cloud.
- [UIDocumentPickerViewController](uidocumentpickerviewcontroller.md): A view controller that provides access to documents or destinations outside your app’s sandbox.

# UIDocumentInteractionController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller that previews, opens, or prints files with a file format that your app can’t handle directly.

## Declaration

```objectivec
@interface UIDocumentInteractionController : NSObject
```

<a id="overview"></a>

## Overview

Use this class to present an appropriate user interface for previewing, opening, copying, or printing a specified file. For example, an email program might use this class to allow the user to preview attachments and open them in other apps.

After presenting its user interface, a document interaction controller handles all interactions needed to support file preview and menu display.

You can also use the delegate to participate in interactions occurring within the presented interface. For example, the delegate is notified when a file is about to be handed off to another application for opening. For a complete description of the methods you can implement in your delegate, see [UIDocumentInteractionControllerDelegate](uidocumentinteractioncontrollerdelegate.md).

## Topics

### Creating the document interaction controller

- [interactionControllerWithURL:](uidocumentinteractioncontroller/init%28url_%29-8wb4p.md): Creates a document interaction controller with the specified URL.

### Handling document-related interactions

- [delegate](uidocumentinteractioncontroller/delegate.md): The delegate you want to receive document interaction notifications.
- [UIDocumentInteractionControllerDelegate](uidocumentinteractioncontrollerdelegate.md): A set of methods you can implement to respond to messages from a document interaction controller.

### Presenting and dismissing a document preview

- [presentPreviewAnimated:](uidocumentinteractioncontroller/presentpreview%28animated_%29.md): Displays a full-screen preview of the target document.
- [dismissPreviewAnimated:](uidocumentinteractioncontroller/dismisspreview%28animated_%29.md): Dismisses the currently active document preview.

### Presenting and dismissing menus

- [presentOptionsMenuFromRect:inView:animated:](uidocumentinteractioncontroller/presentoptionsmenu%28from_in_animated_%29.md): Displays an options menu and anchors it to the specified location in the view.
- [presentOptionsMenuFromBarButtonItem:animated:](uidocumentinteractioncontroller/presentoptionsmenu%28from_animated_%29.md): Displays an options menu and anchors it to the specified bar button item.
- [presentOpenInMenuFromRect:inView:animated:](uidocumentinteractioncontroller/presentopeninmenu%28from_in_animated_%29.md): Displays a menu for opening the document and anchors that menu to the specified view.
- [presentOpenInMenuFromBarButtonItem:animated:](uidocumentinteractioncontroller/presentopeninmenu%28from_animated_%29.md): Displays a menu for opening the document and anchors that menu to the specified bar button item.
- [dismissMenuAnimated:](uidocumentinteractioncontroller/dismissmenu%28animated_%29.md): Dismisses the currently active menu.

### Accessing the target document’s attributes

- [URL](uidocumentinteractioncontroller/url.md): The URL identifying the target file on the local filesystem.
- [UTI](uidocumentinteractioncontroller/uti.md): The type of the target file.
- [name](uidocumentinteractioncontroller/name.md): The name of the target file.
- [icons](uidocumentinteractioncontroller/icons.md): The images associated with the target file.
- [annotation](uidocumentinteractioncontroller/annotation.md): Custom property list information for the target file.

### Accessing the controller attributes

- [gestureRecognizers](uidocumentinteractioncontroller/gesturerecognizers.md): The system-supplied gesture recognizers for presenting a document interaction controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIActionSheetDelegate](uiactionsheetdelegate.md)

## See Also

### Documents and directories

- [Customizing a document-based app’s launch experience](customizing-a-document-based-app-s-launch-experience.md): Add unique elements to your app’s document launch scene.
- [Adding a document browser to your app](adding-a-document-browser-to-your-app.md): Give people access to their local or remote documents from within your app.
- [Providing access to directories](providing-access-to-directories.md): Use a document picker to access the content of a directory outside your app’s container.
- [Building an app with a document browser](building-an-app-with-a-document-browser.md): Provide access to on-device and cloud files by adding a document browser to your app.
- [Building a document browser app for custom file formats](building-a-document-browser-app-for-custom-file-formats.md): Implement a custom document file format to manage user interactions with files on different cloud storage providers.
- [UIDocumentViewController](uidocumentviewcontroller.md): A view controller that manages and presents a document stored locally or in the cloud.
- [UIDocumentBrowserViewController](uidocumentbrowserviewcontroller.md): A view controller for browsing and performing actions on documents that you store locally and in the cloud.
- [UIDocumentPickerViewController](uidocumentpickerviewcontroller.md): A view controller that provides access to documents or destinations outside your app’s sandbox.
