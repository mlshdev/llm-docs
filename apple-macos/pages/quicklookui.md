> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui](https://developer.apple.com/documentation/quicklookui)

# Quick Look UI (Swift)

**Framework:** Quick Look UI  
**Kind:** Framework  
**Availability:** macOS 12.0+

Create previews of files to use inside your macOS app.

<a id="overview"></a>

## Overview

When showing files in your app, including the ability to quickly preview a file and its content can be helpful to your users. For example, you may want to allow users to zoom into a photo, play back an audio file, and so on. Use the Quick Look framework to show a preview of common file types in your macOS app that allow basic interactions. Quick Look can generate previews for common file types, including:

- iWork and Microsoft Office documents
- Images
- Live Photos
- Text files
- PDFs
- Audio and video files

You can provide previews for your own data types by either rendering a view with your own view controller or by returning a supported preview format such as PDF or HTML.

<a id="Providing-Quick-Look-Previews-for-your-Data-Types"></a>

### Providing Quick Look Previews for your Data Types

To provide Quick Look previews for your own file types, create a Quick Look Preview Extension with either a view controller or data based preview. In either case, add your supported content types to the `QLSupportedContentTypes` array in the `Info.plist` file of the extension.

To provide a view controller based preview extension, set up an [NSViewController](appkit/nsviewcontroller.md) that conforms to [QLPreviewingController](quicklookui/qlpreviewingcontroller.md). Prepare and display the view within the method [preparePreviewOfFile(at:completionHandler:)](quicklookui/qlpreviewingcontroller/preparepreviewoffile%28at_completionhandler_%29.md).

To provide a data-based preview extension, implement a subclass of [QLPreviewProvider](quicklookui/qlpreviewprovider.md) to provide a [QLPreviewReply](quicklookui/qlpreviewreply.md) based on the [QLFilePreviewRequest](quicklookui/qlfilepreviewrequest.md) that the system provides.

Import `QuickLookUI` to use these extension types in macOS. In iOS and iPadOS, the same types are part of Quick Look, so import `QuickLook` instead.

## Topics

### Previews

- [QLPreviewPanel](quicklookui/qlpreviewpanel.md): A class that implements the Quick Look preview panel to display a preview of a list of items.
- [QLPreviewView](quicklookui/qlpreviewview.md): A Quick Look preview of an item that you can embed into your view hierarchy.
- [QLPreviewItem](quicklookui/qlpreviewitem.md): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [QLPreviewPanelDataSource](quicklookui/qlpreviewpaneldatasource.md): A protocol that the Quick Look preview panel uses to access the contents of its data source object.
- [QLPreviewPanelDelegate](quicklookui/qlpreviewpaneldelegate.md): A protocol for the delegate of the Quick Look preview panel.
- [QLPreviewItemLoadingBlock](quicklookui/qlpreviewitemloadingblock.md): Deprecated. A type that defines a block used to load a Quick Look preview item.

### Preview Extensions

- [QLPreviewingController](quicklookui/qlpreviewingcontroller.md): A protocol for implementing a custom controller to create previews of files.

### Data-based Preview Extensions

- [QLPreviewProvider](quicklookui/qlpreviewprovider.md): A class that you subclass to provide a data-based Quick Look preview extension.
- [QLFilePreviewRequest](quicklookui/qlfilepreviewrequest.md): A Quick Look preview request that indicates the content to preview.
- [QLPreviewReply](quicklookui/qlpreviewreply.md): The class you create when providing a data-based Quick Look preview extension.
- [QLPreviewReplyAttachment](quicklookui/qlpreviewreplyattachment.md): An attachment for a Quick Look preview reply that provides additional content for the system to display a preview.

# Quick Look UI (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Framework  
**Availability:** macOS 12.0+

Create previews of files to use inside your macOS app.

<a id="overview"></a>

## Overview

When showing files in your app, including the ability to quickly preview a file and its content can be helpful to your users. For example, you may want to allow users to zoom into a photo, play back an audio file, and so on. Use the Quick Look framework to show a preview of common file types in your macOS app that allow basic interactions. Quick Look can generate previews for common file types, including:

- iWork and Microsoft Office documents
- Images
- Live Photos
- Text files
- PDFs
- Audio and video files

You can provide previews for your own data types by either rendering a view with your own view controller or by returning a supported preview format such as PDF or HTML.

<a id="Providing-Quick-Look-Previews-for-your-Data-Types"></a>

### Providing Quick Look Previews for your Data Types

To provide Quick Look previews for your own file types, create a Quick Look Preview Extension with either a view controller or data based preview. In either case, add your supported content types to the `QLSupportedContentTypes` array in the `Info.plist` file of the extension.

To provide a view controller based preview extension, set up an [NSViewController](appkit/nsviewcontroller.md) that conforms to [QLPreviewingController](quicklookui/qlpreviewingcontroller.md). Prepare and display the view within the method [preparePreviewOfFileAtURL:completionHandler:](quicklookui/qlpreviewingcontroller/preparepreviewoffile%28at_completionhandler_%29.md).

To provide a data-based preview extension, implement a subclass of [QLPreviewProvider](quicklookui/qlpreviewprovider.md) to provide a [QLPreviewReply](quicklookui/qlpreviewreply.md) based on the [QLFilePreviewRequest](quicklookui/qlfilepreviewrequest.md) that the system provides.

Import `QuickLookUI` to use these extension types in macOS. In iOS and iPadOS, the same types are part of Quick Look, so import `QuickLook` instead.

## Topics

### Previews

- [QLPreviewPanel](quicklookui/qlpreviewpanel.md): A class that implements the Quick Look preview panel to display a preview of a list of items.
- [QLPreviewView](quicklookui/qlpreviewview.md): A Quick Look preview of an item that you can embed into your view hierarchy.
- [QLPreviewItem](quicklookui/qlpreviewitem.md): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [QLPreviewPanelDataSource](quicklookui/qlpreviewpaneldatasource.md): A protocol that the Quick Look preview panel uses to access the contents of its data source object.
- [QLPreviewPanelDelegate](quicklookui/qlpreviewpaneldelegate.md): A protocol for the delegate of the Quick Look preview panel.
- [QLPreviewItemLoadingBlock](quicklookui/qlpreviewitemloadingblock.md): Deprecated. A type that defines a block used to load a Quick Look preview item.

### Preview Extensions

- [QLPreviewingController](quicklookui/qlpreviewingcontroller.md): A protocol for implementing a custom controller to create previews of files.

### Data-based Preview Extensions

- [QLPreviewProvider](quicklookui/qlpreviewprovider.md): A class that you subclass to provide a data-based Quick Look preview extension.
- [QLFilePreviewRequest](quicklookui/qlfilepreviewrequest.md): A Quick Look preview request that indicates the content to preview.
- [QLPreviewReply](quicklookui/qlpreviewreply.md): The class you create when providing a data-based Quick Look preview extension.
- [QLPreviewReplyAttachment](quicklookui/qlpreviewreplyattachment.md): An attachment for a Quick Look preview reply that provides additional content for the system to display a preview.
