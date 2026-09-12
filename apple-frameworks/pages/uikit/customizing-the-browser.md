> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/customizing-the-browser](https://developer.apple.com/documentation/uikit/customizing-the-browser)

# Customizing the document browser (Swift)

**Framework:** UIKit  
**Kind:** Article

Customize the document browser’s look and behavior.

<a id="overview"></a>

## Overview

You can set the browser’s appearance, create document thumbnails, and modify the browser’s behavior.

<a id="Set-the-browsers-appearance"></a>

### Set the browser’s appearance

Change the browser’s appearance by setting the [browserUserInterfaceStyle](uidocumentbrowserviewcontroller/browseruserinterfacestyle-swift.property.md) property. The document browser view controller supports white, light, and dark appearances.

<a id="Create-document-thumbnails-or-icons"></a>

### Create document thumbnails or icons

The system automatically provides thumbnails or icons for supported document types. If your app uses a custom or third-party document type, you can create a Thumbnail extension for that type. For more information, see [QLThumbnailProvider](../quicklookthumbnailing/qlthumbnailprovider.md).

If you don’t provide a Thumbnail extension, the system can create a document icon based on your app icon. To enable automatic icon creation, go to the Project navigator, choose the target, click Info, and then do the following:

1. Declare support for the document’s Uniform Type Identifier in the Document Type section.
2. For any custom document types that you create, export the Uniform Type Identifier in the Exported Type Identifiers section.
3. For any third-party document types used by your app, import the Uniform Type Identifier in the Imported Type Identifiers section.

For more information, see [Set the supported document types](setting-up-a-document-browser-app.md#Set-the-supported-document-types).

Your app’s icon only appears in the Files app or document browser when all of the following are true:

- The system doesn’t automatically provide a thumbnail for the Uniform Type Identifier.
- The system doesn’t already provide an icon for the Uniform Type Identifier.
- The user hasn’t installed a Thumbnail extension for the Uniform Type Identifier.
- Your app both declares document type support for the Uniform Type Identifier and declares it as an exported or imported type.

<a id="Add-document-previews"></a>

### Add document previews

The system automatically provides previews for supported document types. If your app uses a custom or third-party document type, you can create a Preview extension for that type.

For more information, see [Quick Look](https://developer.apple.com/documentation/quartz/quick-look).

<a id="Modify-the-browsers-behavior"></a>

### Modify the browser’s behavior

You can control the following behaviors:

- The type of documents the browser opens
- Whether the browser opens multiple files at the same time
- Whether the browser creates new documents

<a id="Set-allowed-document-types"></a>

#### Set allowed document types

You set the list of allowed document types when you create the browser. Pass an array of Uniform Type Identifier strings to the [UIDocumentBrowserViewController](uidocumentbrowserviewcontroller.md) class’s [init(forOpeningFilesWithContentTypes:)](uidocumentbrowserviewcontroller/init%28foropeningfileswithcontenttypes_%29.md) method. If you pass `nil`, the browser uses the document types specified by the [CFBundleDocumentTypes](../bundleresources/information-property-list/cfbundledocumenttypes.md) key in the app’s `Info.plist` file.

For detailed instructions on setting the [CFBundleDocumentTypes](../bundleresources/information-property-list/cfbundledocumenttypes.md) key, see [Set the supported document types](setting-up-a-document-browser-app.md#Set-the-supported-document-types).

The following example programmatically creates a document browser for `.txt` files:

```swift
let browser = UIDocumentBrowserViewController(forOpeningFilesWithContentTypes: ["public.plain-text"])
```

<a id="Enable-multiple-document-selection"></a>

#### Enable multiple document selection

By default, users can select only one item at a time. To enable multiple document selection, set the document browser’s [allowsPickingMultipleItems](uidocumentbrowserviewcontroller/allowspickingmultipleitems.md) property to [true](https://developer.apple.com/documentation/swift/true).

<a id="Enable-new-document-creation"></a>

#### Enable new document creation

To let users create new documents, you must do the following:

- Set the browser’s [allowsDocumentCreation](uidocumentbrowserviewcontroller/allowsdocumentcreation.md) property to [true](https://developer.apple.com/documentation/swift/true) (the default value).
- Implement the [UIDocumentBrowserViewControllerDelegate](uidocumentbrowserviewcontrollerdelegate.md) object’s [documentBrowser(\_:didRequestDocumentCreationWithHandler:)](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md) method.

After these steps are completed, the system automatically includes an Add button (+) in the document browser’s navigation bar.

When the user taps the Add button, the system calls the [documentBrowser(\_:didRequestDocumentCreationWithHandler:)](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md) method. In your implementation, you can present a custom user interface, where users can configure the document. For example, you might show a list of document templates.

Create a new document and save it to a temporary location. As soon as the document is saved, call the provided `importHandler`. To confirm the request, pass in the document’s temporary URL and the import mode ([UIDocumentBrowserViewController.ImportMode.copy](uidocumentbrowserviewcontroller/importmode/copy.md) or [UIDocumentBrowserViewController.ImportMode.move](uidocumentbrowserviewcontroller/importmode/move.md)). To cancel the request, pass `nil` and [UIDocumentBrowserViewController.ImportMode.none](uidocumentbrowserviewcontroller/importmode/none.md).

> **Important**

>  You must always call the `importHandler`. If you can’t create a new document, pass `nil` for the URL and [UIDocumentBrowserViewController.ImportMode.none](uidocumentbrowserviewcontroller/importmode/none.md) for the import mode.

## See Also

### Customization

- [Adding custom actions and activities](adding-custom-actions-and-activities.md): Add custom document browser actions, activities, and bar items.

# Customizing the document browser (Objective-C)

**Framework:** UIKit  
**Kind:** Article

Customize the document browser’s look and behavior.

<a id="overview"></a>

## Overview

You can set the browser’s appearance, create document thumbnails, and modify the browser’s behavior.

<a id="Set-the-browsers-appearance"></a>

### Set the browser’s appearance

Change the browser’s appearance by setting the [browserUserInterfaceStyle](uidocumentbrowserviewcontroller/browseruserinterfacestyle-swift.property.md) property. The document browser view controller supports white, light, and dark appearances.

<a id="Create-document-thumbnails-or-icons"></a>

### Create document thumbnails or icons

The system automatically provides thumbnails or icons for supported document types. If your app uses a custom or third-party document type, you can create a Thumbnail extension for that type. For more information, see [QLThumbnailProvider](../quicklookthumbnailing/qlthumbnailprovider.md).

If you don’t provide a Thumbnail extension, the system can create a document icon based on your app icon. To enable automatic icon creation, go to the Project navigator, choose the target, click Info, and then do the following:

1. Declare support for the document’s Uniform Type Identifier in the Document Type section.
2. For any custom document types that you create, export the Uniform Type Identifier in the Exported Type Identifiers section.
3. For any third-party document types used by your app, import the Uniform Type Identifier in the Imported Type Identifiers section.

For more information, see [Set the supported document types](setting-up-a-document-browser-app.md#Set-the-supported-document-types).

Your app’s icon only appears in the Files app or document browser when all of the following are true:

- The system doesn’t automatically provide a thumbnail for the Uniform Type Identifier.
- The system doesn’t already provide an icon for the Uniform Type Identifier.
- The user hasn’t installed a Thumbnail extension for the Uniform Type Identifier.
- Your app both declares document type support for the Uniform Type Identifier and declares it as an exported or imported type.

<a id="Add-document-previews"></a>

### Add document previews

The system automatically provides previews for supported document types. If your app uses a custom or third-party document type, you can create a Preview extension for that type.

For more information, see [Quick Look](https://developer.apple.com/documentation/quartz/quick-look).

<a id="Modify-the-browsers-behavior"></a>

### Modify the browser’s behavior

You can control the following behaviors:

- The type of documents the browser opens
- Whether the browser opens multiple files at the same time
- Whether the browser creates new documents

<a id="Set-allowed-document-types"></a>

#### Set allowed document types

You set the list of allowed document types when you create the browser. Pass an array of Uniform Type Identifier strings to the [UIDocumentBrowserViewController](uidocumentbrowserviewcontroller.md) class’s [initForOpeningFilesWithContentTypes:](uidocumentbrowserviewcontroller/init%28foropeningfileswithcontenttypes_%29.md) method. If you pass `nil`, the browser uses the document types specified by the [CFBundleDocumentTypes](../bundleresources/information-property-list/cfbundledocumenttypes.md) key in the app’s `Info.plist` file.

For detailed instructions on setting the [CFBundleDocumentTypes](../bundleresources/information-property-list/cfbundledocumenttypes.md) key, see [Set the supported document types](setting-up-a-document-browser-app.md#Set-the-supported-document-types).

The following example programmatically creates a document browser for `.txt` files:

```swift
let browser = UIDocumentBrowserViewController(forOpeningFilesWithContentTypes: ["public.plain-text"])
```

<a id="Enable-multiple-document-selection"></a>

#### Enable multiple document selection

By default, users can select only one item at a time. To enable multiple document selection, set the document browser’s [allowsPickingMultipleItems](uidocumentbrowserviewcontroller/allowspickingmultipleitems.md) property to [true](https://developer.apple.com/documentation/swift/true).

<a id="Enable-new-document-creation"></a>

#### Enable new document creation

To let users create new documents, you must do the following:

- Set the browser’s [allowsDocumentCreation](uidocumentbrowserviewcontroller/allowsdocumentcreation.md) property to [true](https://developer.apple.com/documentation/swift/true) (the default value).
- Implement the [UIDocumentBrowserViewControllerDelegate](uidocumentbrowserviewcontrollerdelegate.md) object’s [documentBrowser:didRequestDocumentCreationWithHandler:](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md) method.

After these steps are completed, the system automatically includes an Add button (+) in the document browser’s navigation bar.

When the user taps the Add button, the system calls the [documentBrowser:didRequestDocumentCreationWithHandler:](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md) method. In your implementation, you can present a custom user interface, where users can configure the document. For example, you might show a list of document templates.

Create a new document and save it to a temporary location. As soon as the document is saved, call the provided `importHandler`. To confirm the request, pass in the document’s temporary URL and the import mode ([UIDocumentBrowserImportModeCopy](uidocumentbrowserviewcontroller/importmode/copy.md) or [UIDocumentBrowserImportModeMove](uidocumentbrowserviewcontroller/importmode/move.md)). To cancel the request, pass `nil` and [UIDocumentBrowserImportModeNone](uidocumentbrowserviewcontroller/importmode/none.md).

> **Important**

>  You must always call the `importHandler`. If you can’t create a new document, pass `nil` for the URL and [UIDocumentBrowserImportModeNone](uidocumentbrowserviewcontroller/importmode/none.md) for the import mode.

## See Also

### Customization

- [Adding custom actions and activities](adding-custom-actions-and-activities.md): Add custom document browser actions, activities, and bar items.
