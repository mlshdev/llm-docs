> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerviewcontroller](https://developer.apple.com/documentation/uikit/uidocumentpickerviewcontroller)

# UIDocumentPickerViewController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller that provides access to documents or destinations outside your app’s sandbox.

## Declaration

```swift
@MainActor class UIDocumentPickerViewController
```

## Mentioned In

- [Providing access to directories](providing-access-to-directories.md)

<a id="overview"></a>

## Overview

Use a document picker view controller to select a document to open or export, and optionally copy. Don’t copy the document if you can avoid it. The document picker operates in two modes:

- Open a document. The user selects a document. The document picker provides access to the document, and the user can edit the document in place. Optionally, you can specify that the document picker makes a copy of the document, leaving the original unchanged.
- Export a local document. The user selects a destination. The document picker moves the document, and the user can access it and edit it in place. Optionally, you can specify that the document picker makes a copy of the document, leaving the original unchanged.

<a id="Work-with-external-documents"></a>

### Work with external documents

Both the open and export operations grant access to documents outside your app’s sandbox. This access gives users an unprecedented amount of flexibility when working with their documents. However, it also adds a layer of complexity to your file handling. External documents have the following additional requirements:

- The open and move operations provide security-scoped URLs for all external documents. Call the [startAccessingSecurityScopedResource()](../foundation/nsurl/startaccessingsecurityscopedresource%28%29.md) method to access or bookmark these documents, and the [stopAccessingSecurityScopedResource()](../foundation/nsurl/stopaccessingsecurityscopedresource%28%29.md) method to release them. If you’re using a `UIDocument` subclass to manage your document, it automatically manages the security-scoped URL for you.
- Always use file coordinators (see [NSFileCoordinator](../foundation/nsfilecoordinator.md)) to read and write to external documents.
- Always use a file presenter (see [NSFilePresenter](../foundation/nsfilepresenter.md)) when displaying the contents of an external document.
- Don’t save URLs that the open and move operations provide. You can, however, save a bookmark to these URLs after calling [startAccessingSecurityScopedResource()](../foundation/nsurl/startaccessingsecurityscopedresource%28%29.md) to ensure you have access. Call the [bookmarkData(options:includingResourceValuesForKeys:relativeTo:)](../foundation/nsurl/bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md) method and pass in the [withSecurityScope](../foundation/nsurl/bookmarkcreationoptions/withsecurityscope.md) option, creating a bookmark that contains a security-scoped URL.

For more information about working with external documents, see [Providing access to directories](providing-access-to-directories.md) and [Adding a document browser to your app](adding-a-document-browser-to-your-app.md).

## Topics

### Creating a document picker

- [init(coder:)](uidocumentpickerviewcontroller/init%28coder_%29.md): Returns an initialized object from data in a specified unarchiver.
- [init(forExporting:)](uidocumentpickerviewcontroller/init%28forexporting_%29.md): Creates and returns a document picker that can export the types of documents you specify.
- [init(forExporting:asCopy:)](uidocumentpickerviewcontroller/init%28forexporting_ascopy_%29.md): Creates and returns a document picker that can export or copy the types of documents you specify.
- [init(forOpeningContentTypes:)](uidocumentpickerviewcontroller/init%28foropeningcontenttypes_%29.md): Creates and returns a document picker that can open the types of documents you specify.
- [init(forOpeningContentTypes:asCopy:)](uidocumentpickerviewcontroller/init%28foropeningcontenttypes_ascopy_%29.md): Creates and returns a document picker that can open or copy the types of documents you specify.

### Getting the user-selected document

- [delegate](uidocumentpickerviewcontroller/delegate.md): An object that acts as the delegate of the view controller.
- [UIDocumentPickerDelegate](uidocumentpickerdelegate.md): A set of methods for tracking when the user selects a document or destination, or cancels the operation.
- [allowsMultipleSelection](uidocumentpickerviewcontroller/allowsmultipleselection.md): A Boolean value that determines whether the user can select more than one document at a time.
- [directoryURL](uidocumentpickerviewcontroller/directoryurl.md): The initial directory that the document picker displays.

### Configuring a document picker

- [shouldShowFileExtensions](uidocumentpickerviewcontroller/shouldshowfileextensions.md): A Boolean value that determines whether the browser always shows file extensions.
- [documentPickerMode](uidocumentpickerviewcontroller/documentpickermode.md): Deprecated. The type of file transfer operation that the document picker uses.
- [UIDocumentPickerMode](uidocumentpickermode.md): Deprecated. Modes that define the type of file transfer operation that the document picker uses.

### Deprecated

- [init(documentTypes:in:)](uidocumentpickerviewcontroller/init%28documenttypes_in_%29.md): Deprecated. Creates and returns a document picker that can open or copy the specified file types.
- [init(url:in:)](uidocumentpickerviewcontroller/init%28url_in_%29.md): Deprecated. Initializes and returns a document picker that can export or copy the specified document.
- [init(urls:in:)](uidocumentpickerviewcontroller/init%28urls_in_%29.md): Deprecated. Creates and returns a document picker that can export or move the specified documents.

### Initializers

- [init(URL:inMode:)](uidocumentpickerviewcontroller/init%28url_inmode_%29.md): Deprecated.
- [init(URLs:inMode:)](uidocumentpickerviewcontroller/init%28urls_inmode_%29.md): Deprecated.
- [init(documentTypes:inMode:)](uidocumentpickerviewcontroller/init%28documenttypes_inmode_%29.md): Deprecated.
- [init(forExportingURLs:)](uidocumentpickerviewcontroller/init%28forexportingurls_%29.md)
- [init(forExportingURLs:asCopy:)](uidocumentpickerviewcontroller/init%28forexportingurls_ascopy_%29.md)

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
- [UIDocumentBrowserViewController](uidocumentbrowserviewcontroller.md): A view controller for browsing and performing actions on documents that you store locally and in the cloud.
- [UIDocumentInteractionController](uidocumentinteractioncontroller.md): A view controller that previews, opens, or prints files with a file format that your app can’t handle directly.

# UIDocumentPickerViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller that provides access to documents or destinations outside your app’s sandbox.

## Declaration

```objectivec
@interface UIDocumentPickerViewController : UIViewController
```

## Mentioned In

- [Providing access to directories](providing-access-to-directories.md)

<a id="overview"></a>

## Overview

Use a document picker view controller to select a document to open or export, and optionally copy. Don’t copy the document if you can avoid it. The document picker operates in two modes:

- Open a document. The user selects a document. The document picker provides access to the document, and the user can edit the document in place. Optionally, you can specify that the document picker makes a copy of the document, leaving the original unchanged.
- Export a local document. The user selects a destination. The document picker moves the document, and the user can access it and edit it in place. Optionally, you can specify that the document picker makes a copy of the document, leaving the original unchanged.

<a id="Work-with-external-documents"></a>

### Work with external documents

Both the open and export operations grant access to documents outside your app’s sandbox. This access gives users an unprecedented amount of flexibility when working with their documents. However, it also adds a layer of complexity to your file handling. External documents have the following additional requirements:

- The open and move operations provide security-scoped URLs for all external documents. Call the [startAccessingSecurityScopedResource](../foundation/nsurl/startaccessingsecurityscopedresource%28%29.md) method to access or bookmark these documents, and the [stopAccessingSecurityScopedResource](../foundation/nsurl/stopaccessingsecurityscopedresource%28%29.md) method to release them. If you’re using a `UIDocument` subclass to manage your document, it automatically manages the security-scoped URL for you.
- Always use file coordinators (see [NSFileCoordinator](../foundation/nsfilecoordinator.md)) to read and write to external documents.
- Always use a file presenter (see [NSFilePresenter](../foundation/nsfilepresenter.md)) when displaying the contents of an external document.
- Don’t save URLs that the open and move operations provide. You can, however, save a bookmark to these URLs after calling [startAccessingSecurityScopedResource](../foundation/nsurl/startaccessingsecurityscopedresource%28%29.md) to ensure you have access. Call the [bookmarkDataWithOptions:includingResourceValuesForKeys:relativeToURL:error:](../foundation/nsurl/bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md) method and pass in the [NSURLBookmarkCreationWithSecurityScope](../foundation/nsurl/bookmarkcreationoptions/withsecurityscope.md) option, creating a bookmark that contains a security-scoped URL.

For more information about working with external documents, see [Providing access to directories](providing-access-to-directories.md) and [Adding a document browser to your app](adding-a-document-browser-to-your-app.md).

## Topics

### Creating a document picker

- [initWithCoder:](uidocumentpickerviewcontroller/init%28coder_%29.md): Returns an initialized object from data in a specified unarchiver.
- [initForExportingURLs:](uidocumentpickerviewcontroller/init%28forexporting_%29.md): Creates and returns a document picker that can export the types of documents you specify.
- [initForExportingURLs:asCopy:](uidocumentpickerviewcontroller/init%28forexporting_ascopy_%29.md): Creates and returns a document picker that can export or copy the types of documents you specify.
- [initForOpeningContentTypes:](uidocumentpickerviewcontroller/init%28foropeningcontenttypes_%29.md): Creates and returns a document picker that can open the types of documents you specify.
- [initForOpeningContentTypes:asCopy:](uidocumentpickerviewcontroller/init%28foropeningcontenttypes_ascopy_%29.md): Creates and returns a document picker that can open or copy the types of documents you specify.

### Getting the user-selected document

- [delegate](uidocumentpickerviewcontroller/delegate.md): An object that acts as the delegate of the view controller.
- [UIDocumentPickerDelegate](uidocumentpickerdelegate.md): A set of methods for tracking when the user selects a document or destination, or cancels the operation.
- [allowsMultipleSelection](uidocumentpickerviewcontroller/allowsmultipleselection.md): A Boolean value that determines whether the user can select more than one document at a time.
- [directoryURL](uidocumentpickerviewcontroller/directoryurl.md): The initial directory that the document picker displays.

### Configuring a document picker

- [shouldShowFileExtensions](uidocumentpickerviewcontroller/shouldshowfileextensions.md): A Boolean value that determines whether the browser always shows file extensions.
- [documentPickerMode](uidocumentpickerviewcontroller/documentpickermode.md): Deprecated. The type of file transfer operation that the document picker uses.
- [UIDocumentPickerMode](uidocumentpickermode.md): Deprecated. Modes that define the type of file transfer operation that the document picker uses.

### Deprecated

- [initWithDocumentTypes:inMode:](uidocumentpickerviewcontroller/init%28documenttypes_in_%29.md): Deprecated. Creates and returns a document picker that can open or copy the specified file types.
- [initWithURL:inMode:](uidocumentpickerviewcontroller/init%28url_in_%29.md): Deprecated. Initializes and returns a document picker that can export or copy the specified document.
- [initWithURLs:inMode:](uidocumentpickerviewcontroller/init%28urls_in_%29.md): Deprecated. Creates and returns a document picker that can export or move the specified documents.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

## See Also

### Documents and directories

- [Customizing a document-based app’s launch experience](customizing-a-document-based-app-s-launch-experience.md): Add unique elements to your app’s document launch scene.
- [Adding a document browser to your app](adding-a-document-browser-to-your-app.md): Give people access to their local or remote documents from within your app.
- [Providing access to directories](providing-access-to-directories.md): Use a document picker to access the content of a directory outside your app’s container.
- [Building an app with a document browser](building-an-app-with-a-document-browser.md): Provide access to on-device and cloud files by adding a document browser to your app.
- [Building a document browser app for custom file formats](building-a-document-browser-app-for-custom-file-formats.md): Implement a custom document file format to manage user interactions with files on different cloud storage providers.
- [UIDocumentViewController](uidocumentviewcontroller.md): A view controller that manages and presents a document stored locally or in the cloud.
- [UIDocumentBrowserViewController](uidocumentbrowserviewcontroller.md): A view controller for browsing and performing actions on documents that you store locally and in the cloud.
- [UIDocumentInteractionController](uidocumentinteractioncontroller.md): A view controller that previews, opens, or prints files with a file format that your app can’t handle directly.
