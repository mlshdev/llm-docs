> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller)

# UIDocumentBrowserViewController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller for browsing and performing actions on documents that you store locally and in the cloud.

## Declaration

```swift
@MainActor class UIDocumentBrowserViewController
```

## Mentioned In

- [Providing access to directories](providing-access-to-directories.md)
- [Customizing the document browser](customizing-the-browser.md)

<a id="overview"></a>

## Overview

With the document browser view controller, users can easily access and view their documents in the cloud. By default, the document browser can access both the system’s local file provider and its iCloud file provider.

![A screenshot of the document browser. The On My iPad location is in a selected state on the left, and several photos and folders appear in the pane on the right.](https://developer.apple.com/images/com.apple.uikit/media-2922157@2x.png)

The local file provider grants access to all the documents in the app’s `Documents` directory. Users can also access documents from another app’s `Documents` directory, if that app declares either the [UISupportsDocumentBrowser](../bundleresources/information-property-list/uisupportsdocumentbrowser.md) key, or both the [UIFileSharingEnabled](../bundleresources/information-property-list/uifilesharingenabled.md) and [LSSupportsOpeningDocumentsInPlace](../bundleresources/information-property-list/lssupportsopeningdocumentsinplace.md) keys in its `Info.plist` file. When the user opens a document from another app’s `Documents` directory, they edit the document in place, and save the changes to the other app’s `Documents` directory.

The iCloud file provider creates a folder for your app in the user’s iCloud Drive. Users can access documents from this folder, or from anywhere in their iCloud Drive. The system automatically handles access to iCloud for you, so you don’t need to enable your app’s iCloud capabilities.

Third-party storage services can also provide access to the documents they manage by implementing a File Provider extension (iOS 11 or later). For more information, see [File Provider](../fileprovider.md).

> **Important**

>  Don’t assume that the files you access are local. Users can store files in iCloud Drive, or in any cloud storage that provides a current File Provider extension.
>
> Remember that the system (or other apps) might modify the files that the document browser provides at any time. Therefore, you must coordinate your access to these files using either a [UIDocument](uidocument.md) subclass, or [NSFilePresenter](../foundation/nsfilepresenter.md) and [NSFileCoordinator](../foundation/nsfilecoordinator.md) objects.

## Topics

### Creating a document browser

- [Adding a document browser to your app](adding-a-document-browser-to-your-app.md): Give people access to their local or remote documents from within your app.
- [init(forOpening:)](uidocumentbrowserviewcontroller/init%28foropening_%29.md): Initializes and returns a document browser view controller that can open the specified file types.

### Creating new documents

- [activeDocumentCreationIntent](uidocumentbrowserviewcontroller/activedocumentcreationintent.md): The current intent that defines how your app creates a document.

### Responding to browser events

- [delegate](uidocumentbrowserviewcontroller/delegate.md): The document browser’s delegate.
- [UIDocumentBrowserViewControllerDelegate](uidocumentbrowserviewcontrollerdelegate.md): The protocol you implement to respond as the user interacts with the document browser.
- [importDocument(at:nextToDocumentAt:mode:completionHandler:)](uidocumentbrowserviewcontroller/importdocument%28at_nexttodocumentat_mode_completionhandler_%29.md): Imports a document into the same location as an existing document.

### Configuring a document browser

- [allowsDocumentCreation](uidocumentbrowserviewcontroller/allowsdocumentcreation.md): A Boolean value that determines whether the document browser can create new documents.
- [allowsPickingMultipleItems](uidocumentbrowserviewcontroller/allowspickingmultipleitems.md): A Boolean value that determines whether the user can select and open more than one document at a time.
- [revealDocument(at:importIfNeeded:completion:)](uidocumentbrowserviewcontroller/revealdocument%28at_importifneeded_completion_%29.md): Reveals, and optionally imports, the document at the provided URL.
- [contentTypesForRecentDocuments](uidocumentbrowserviewcontroller/contenttypesforrecentdocuments.md): Content types for browsing recent documents.

### Modifying the browser’s appearance

- [browserUserInterfaceStyle](uidocumentbrowserviewcontroller/browseruserinterfacestyle-swift.property.md): The visual style for the document browser.
- [UIDocumentBrowserViewController.BrowserUserInterfaceStyle](uidocumentbrowserviewcontroller/browseruserinterfacestyle-swift.enum.md): Styles that define the document browser’s appearance.
- [additionalLeadingNavigationBarButtonItems](uidocumentbrowserviewcontroller/additionalleadingnavigationbarbuttonitems.md): Additional bar button items that the document browser displays on the leading side of its navigation bar.
- [additionalTrailingNavigationBarButtonItems](uidocumentbrowserviewcontroller/additionaltrailingnavigationbarbuttonitems.md): Additional bar button items that the document browser displays on the trailing side of its navigation bar.
- [shouldShowFileExtensions](uidocumentbrowserviewcontroller/shouldshowfileextensions.md): A Boolean value that determines whether the browser always shows file extensions.
- [localizedCreateDocumentActionTitle](uidocumentbrowserviewcontroller/localizedcreatedocumentactiontitle.md): The title for the Create Document button.
- [defaultDocumentAspectRatio](uidocumentbrowserviewcontroller/defaultdocumentaspectratio.md): The aspect ratio for the Create Document button.

### Adding custom actions

- [customActions](uidocumentbrowserviewcontroller/customactions.md): Custom document browser actions.
- [UIDocumentBrowserAction](uidocumentbrowseraction.md): A custom action that you can create and add to a document browser’s Edit menu or navigation bar.

### Animating transitions

- [transitionController(forDocumentAt:)](uidocumentbrowserviewcontroller/transitioncontroller%28fordocumentat_%29.md): Creates a transition controller that provides the standard system-loading and segue animations for the document browser.
- [UIDocumentBrowserTransitionController](uidocumentbrowsertransitioncontroller.md): An object that implements the standard loading and transition animations for a document browser.

### Renaming a document

- [renameDocument(at:proposedName:completionHandler:)](uidocumentbrowserviewcontroller/renamedocument%28at_proposedname_completionhandler_%29.md): Renames a document at the specified URL.

### Handling errors

- [UIDocumentBrowserError](uidocumentbrowsererror.md): A structure that contains information about document browser errors.
- [UIDocumentBrowserError.Code](uidocumentbrowsererror/code.md): The error codes for document browser errors.
- [UIDocumentBrowserErrorDomain](uidocumentbrowsererrordomain.md): The error domain for document browser errors.

### Deprecated symbols

- [init(forOpeningFilesWithContentTypes:)](uidocumentbrowserviewcontroller/init%28foropeningfileswithcontenttypes_%29.md): Deprecated. Initializes and returns a document browser view controller that can open the specified file types.
- [recentDocumentsContentTypes](uidocumentbrowserviewcontroller/recentdocumentscontenttypes.md): Deprecated. Content types for browsing recent documents.
- [allowedContentTypes](uidocumentbrowserviewcontroller/allowedcontenttypes.md): Deprecated. The document types that the browser can open.
- [transitionController(forDocumentURL:)](uidocumentbrowserviewcontroller/transitioncontroller%28fordocumenturl_%29.md): Deprecated. Creates a transition controller that provides the standard system-loading and segue animations for the document browser.

### Initializers

- [init(forOpeningContentTypes:)](uidocumentbrowserviewcontroller/init%28foropeningcontenttypes_%29.md)

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UIContentContainer](uicontentcontainer.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UIStateRestoring](uistaterestoring.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Documents and directories

- [Customizing a document-based app’s launch experience](customizing-a-document-based-app-s-launch-experience.md): Add unique elements to your app’s document launch scene.
- [Adding a document browser to your app](adding-a-document-browser-to-your-app.md): Give people access to their local or remote documents from within your app.
- [Providing access to directories](providing-access-to-directories.md): Use a document picker to access the content of a directory outside your app’s container.
- [Building an app with a document browser](building-an-app-with-a-document-browser.md): Provide access to on-device and cloud files by adding a document browser to your app.
- [Building a document browser app for custom file formats](building-a-document-browser-app-for-custom-file-formats.md): Implement a custom document file format to manage user interactions with files on different cloud storage providers.
- [UIDocumentViewController](uidocumentviewcontroller.md): A view controller that manages and presents a document stored locally or in the cloud.
- [UIDocumentPickerViewController](uidocumentpickerviewcontroller.md): A view controller that provides access to documents or destinations outside your app’s sandbox.
- [UIDocumentInteractionController](uidocumentinteractioncontroller.md): A view controller that previews, opens, or prints files with a file format that your app can’t handle directly.

# UIDocumentBrowserViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller for browsing and performing actions on documents that you store locally and in the cloud.

## Declaration

```objectivec
@interface UIDocumentBrowserViewController : UIViewController
```

## Mentioned In

- [Providing access to directories](providing-access-to-directories.md)
- [Customizing the document browser](customizing-the-browser.md)

<a id="overview"></a>

## Overview

With the document browser view controller, users can easily access and view their documents in the cloud. By default, the document browser can access both the system’s local file provider and its iCloud file provider.

![A screenshot of the document browser. The On My iPad location is in a selected state on the left, and several photos and folders appear in the pane on the right.](https://developer.apple.com/images/com.apple.uikit/media-2922157@2x.png)

The local file provider grants access to all the documents in the app’s `Documents` directory. Users can also access documents from another app’s `Documents` directory, if that app declares either the [UISupportsDocumentBrowser](../bundleresources/information-property-list/uisupportsdocumentbrowser.md) key, or both the [UIFileSharingEnabled](../bundleresources/information-property-list/uifilesharingenabled.md) and [LSSupportsOpeningDocumentsInPlace](../bundleresources/information-property-list/lssupportsopeningdocumentsinplace.md) keys in its `Info.plist` file. When the user opens a document from another app’s `Documents` directory, they edit the document in place, and save the changes to the other app’s `Documents` directory.

The iCloud file provider creates a folder for your app in the user’s iCloud Drive. Users can access documents from this folder, or from anywhere in their iCloud Drive. The system automatically handles access to iCloud for you, so you don’t need to enable your app’s iCloud capabilities.

Third-party storage services can also provide access to the documents they manage by implementing a File Provider extension (iOS 11 or later). For more information, see [File Provider](../fileprovider.md).

> **Important**

>  Don’t assume that the files you access are local. Users can store files in iCloud Drive, or in any cloud storage that provides a current File Provider extension.
>
> Remember that the system (or other apps) might modify the files that the document browser provides at any time. Therefore, you must coordinate your access to these files using either a [UIDocument](uidocument.md) subclass, or [NSFilePresenter](../foundation/nsfilepresenter.md) and [NSFileCoordinator](../foundation/nsfilecoordinator.md) objects.

## Topics

### Creating a document browser

- [Adding a document browser to your app](adding-a-document-browser-to-your-app.md): Give people access to their local or remote documents from within your app.
- [initForOpeningContentTypes:](uidocumentbrowserviewcontroller/init%28foropening_%29.md): Initializes and returns a document browser view controller that can open the specified file types.

### Creating new documents

- [activeDocumentCreationIntent](uidocumentbrowserviewcontroller/activedocumentcreationintent.md): The current intent that defines how your app creates a document.

### Responding to browser events

- [delegate](uidocumentbrowserviewcontroller/delegate.md): The document browser’s delegate.
- [UIDocumentBrowserViewControllerDelegate](uidocumentbrowserviewcontrollerdelegate.md): The protocol you implement to respond as the user interacts with the document browser.
- [importDocumentAtURL:nextToDocumentAtURL:mode:completionHandler:](uidocumentbrowserviewcontroller/importdocument%28at_nexttodocumentat_mode_completionhandler_%29.md): Imports a document into the same location as an existing document.

### Configuring a document browser

- [allowsDocumentCreation](uidocumentbrowserviewcontroller/allowsdocumentcreation.md): A Boolean value that determines whether the document browser can create new documents.
- [allowsPickingMultipleItems](uidocumentbrowserviewcontroller/allowspickingmultipleitems.md): A Boolean value that determines whether the user can select and open more than one document at a time.
- [revealDocumentAtURL:importIfNeeded:completion:](uidocumentbrowserviewcontroller/revealdocument%28at_importifneeded_completion_%29.md): Reveals, and optionally imports, the document at the provided URL.
- [contentTypesForRecentDocuments](uidocumentbrowserviewcontroller/contenttypesforrecentdocuments.md): Content types for browsing recent documents.

### Modifying the browser’s appearance

- [browserUserInterfaceStyle](uidocumentbrowserviewcontroller/browseruserinterfacestyle-swift.property.md): The visual style for the document browser.
- [UIDocumentBrowserUserInterfaceStyle](uidocumentbrowserviewcontroller/browseruserinterfacestyle-swift.enum.md): Styles that define the document browser’s appearance.
- [additionalLeadingNavigationBarButtonItems](uidocumentbrowserviewcontroller/additionalleadingnavigationbarbuttonitems.md): Additional bar button items that the document browser displays on the leading side of its navigation bar.
- [additionalTrailingNavigationBarButtonItems](uidocumentbrowserviewcontroller/additionaltrailingnavigationbarbuttonitems.md): Additional bar button items that the document browser displays on the trailing side of its navigation bar.
- [shouldShowFileExtensions](uidocumentbrowserviewcontroller/shouldshowfileextensions.md): A Boolean value that determines whether the browser always shows file extensions.
- [localizedCreateDocumentActionTitle](uidocumentbrowserviewcontroller/localizedcreatedocumentactiontitle.md): The title for the Create Document button.
- [defaultDocumentAspectRatio](uidocumentbrowserviewcontroller/defaultdocumentaspectratio.md): The aspect ratio for the Create Document button.

### Adding custom actions

- [customActions](uidocumentbrowserviewcontroller/customactions.md): Custom document browser actions.
- [UIDocumentBrowserAction](uidocumentbrowseraction.md): A custom action that you can create and add to a document browser’s Edit menu or navigation bar.

### Animating transitions

- [transitionControllerForDocumentAtURL:](uidocumentbrowserviewcontroller/transitioncontroller%28fordocumentat_%29.md): Creates a transition controller that provides the standard system-loading and segue animations for the document browser.
- [UIDocumentBrowserTransitionController](uidocumentbrowsertransitioncontroller.md): An object that implements the standard loading and transition animations for a document browser.

### Renaming a document

- [renameDocumentAtURL:proposedName:completionHandler:](uidocumentbrowserviewcontroller/renamedocument%28at_proposedname_completionhandler_%29.md): Renames a document at the specified URL.

### Handling errors

- [UIDocumentBrowserErrorCode](uidocumentbrowsererror/code.md): The error codes for document browser errors.
- [UIDocumentBrowserErrorDomain](uidocumentbrowsererrordomain.md): The error domain for document browser errors.

### Deprecated symbols

- [initForOpeningFilesWithContentTypes:](uidocumentbrowserviewcontroller/init%28foropeningfileswithcontenttypes_%29.md): Deprecated. Initializes and returns a document browser view controller that can open the specified file types.
- [recentDocumentsContentTypes](uidocumentbrowserviewcontroller/recentdocumentscontenttypes.md): Deprecated. Content types for browsing recent documents.
- [allowedContentTypes](uidocumentbrowserviewcontroller/allowedcontenttypes.md): Deprecated. The document types that the browser can open.
- [transitionControllerForDocumentURL:](uidocumentbrowserviewcontroller/transitioncontroller%28fordocumenturl_%29.md): Deprecated. Creates a transition controller that provides the standard system-loading and segue animations for the document browser.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)

## See Also

### Documents and directories

- [Customizing a document-based app’s launch experience](customizing-a-document-based-app-s-launch-experience.md): Add unique elements to your app’s document launch scene.
- [Adding a document browser to your app](adding-a-document-browser-to-your-app.md): Give people access to their local or remote documents from within your app.
- [Providing access to directories](providing-access-to-directories.md): Use a document picker to access the content of a directory outside your app’s container.
- [Building an app with a document browser](building-an-app-with-a-document-browser.md): Provide access to on-device and cloud files by adding a document browser to your app.
- [Building a document browser app for custom file formats](building-a-document-browser-app-for-custom-file-formats.md): Implement a custom document file format to manage user interactions with files on different cloud storage providers.
- [UIDocumentViewController](uidocumentviewcontroller.md): A view controller that manages and presents a document stored locally or in the cloud.
- [UIDocumentPickerViewController](uidocumentpickerviewcontroller.md): A view controller that provides access to documents or destinations outside your app’s sandbox.
- [UIDocumentInteractionController](uidocumentinteractioncontroller.md): A view controller that previews, opens, or prints files with a file format that your app can’t handle directly.
