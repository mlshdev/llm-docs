> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook](https://developer.apple.com/documentation/quicklook)

# Quick Look (Swift)

**Framework:** Quick Look  
**Kind:** Framework  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · visionOS 1.0+

Create previews of files to use inside your app, or perform simple edits on previews.

<a id="overview"></a>

## Overview

When showing files in your app, including the ability to quickly preview a file and its content can be helpful to your users. For example, you may want to allow users to zoom into a photo, play back an audio file, and so on. Use the Quick Look framework to show a preview of common file types in your app that allows basic interactions. Quick Look can generate previews for common file types, including:

- iWork and Microsoft Office documents
- Images
- Live Photos
- Text files
- PDFs
- Audio and video files
- 3D models that use the USDZ file format

In iOS and iPadOS, Quick Look can also present a USDZ model in an augmented reality view.

On iOS devices, the Quick Look framework provides functionality for performing simple edits on previews of common file types; for example, users can add markup to an image. To perform more advanced edits on files, provide advanced playback features, display a file’s content next to text, or add views on top of the preview, use lower-level APIs. For example, use [AVPlayer](avfoundation/avplayer.md) to provide advanced video playback features.

You can provide previews for your own data types by either rendering a view with your own view controller or by returning a supported preview format, such as PDF or HTML.

> **Note**

>  The list of supported common file types may change between operating system releases.

<a id="Providing-Quick-Look-previews-for-your-data-types"></a>

### Providing Quick Look previews for your data types

To provide Quick Look previews for your own file types, create a Quick Look preview extension with either a view controller or data-based preview. In either case, add your supported content types to the `QLSupportedContentTypes` array in the `Info.plist` file of the extension.

To provide a view controller-based preview extension, set up a [UIViewController](uikit/uiviewcontroller.md) that conforms to [QLPreviewingController](https://developer.apple.com/documentation/quicklookui/qlpreviewingcontroller). Prepare and display the view within the [preparePreviewOfFile(at:completionHandler:)](https://developer.apple.com/documentation/quicklookui/qlpreviewingcontroller/preparepreviewoffile%28at:completionhandler:%29) method.

To provide a data-based preview extension, implement a subclass of [QLPreviewProvider](https://developer.apple.com/documentation/quicklookui/qlpreviewprovider) to provide a [QLPreviewReply](https://developer.apple.com/documentation/quicklookui/qlpreviewreply) based on the [QLFilePreviewRequest](https://developer.apple.com/documentation/quicklookui/qlfilepreviewrequest) that the system provides.

Import `QuickLook` to use these extension types in iOS and iPadOS. In macOS, the same types are part of Quick Look UI, so import `QuickLookUI` instead.

## Topics

### Previews

- [QLPreviewController](quicklook/qlpreviewcontroller.md): A specialized view controller for previewing an item.
- [QLPreviewItem](https://developer.apple.com/documentation/quicklookui/qlpreviewitem): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [QLPreviewSceneActivationConfiguration](quicklook/qlpreviewsceneactivationconfiguration.md): A scene configuration to preview items at the specified URLs.
- [Previews or thumbnail images for macOS 10.14 or earlier](quicklook/previews-or-thumbnail-images-for-macos-10-14-or-earlier.md): Create thumbnail images or previews of common files and custom file types in earlier versions of macOS.

### Preview extensions

- [QLPreviewingController](https://developer.apple.com/documentation/quicklookui/qlpreviewingcontroller): A protocol for implementing a custom controller to create previews of files.

### Data-based preview extensions

- [QLPreviewProvider](https://developer.apple.com/documentation/quicklookui/qlpreviewprovider): A class that you subclass to provide a data-based Quick Look preview extension.
- [QLFilePreviewRequest](https://developer.apple.com/documentation/quicklookui/qlfilepreviewrequest): A Quick Look preview request that indicates the content to preview.
- [QLPreviewReply](https://developer.apple.com/documentation/quicklookui/qlpreviewreply): The class you create when providing a data-based Quick Look preview extension.
- [QLPreviewReplyAttachment](https://developer.apple.com/documentation/quicklookui/qlpreviewreplyattachment): An attachment for a Quick Look preview reply that provides additional content for the system to display a preview.

### Classes

- [ARQuickLookPreviewItem](quicklook/arquicklookpreviewitem.md)
- [PreviewApplication](quicklook/previewapplication.md): A class you use to configure and launch the platform Quick Look application.

### Structures

- [PreviewItem](quicklook/previewitem.md): An item to preview in the preview application.
- [PreviewSession](quicklook/previewsession.md): A structure with which you can control an existing session and receive events for the current preview application.

### Type Aliases

- [EditingMode](quicklook/editingmode.md)

# Quick Look (Objective-C)

**Framework:** Quick Look  
**Kind:** Framework  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · visionOS 1.0+

Create previews of files to use inside your app, or perform simple edits on previews.

<a id="overview"></a>

## Overview

When showing files in your app, including the ability to quickly preview a file and its content can be helpful to your users. For example, you may want to allow users to zoom into a photo, play back an audio file, and so on. Use the Quick Look framework to show a preview of common file types in your app that allows basic interactions. Quick Look can generate previews for common file types, including:

- iWork and Microsoft Office documents
- Images
- Live Photos
- Text files
- PDFs
- Audio and video files
- 3D models that use the USDZ file format

In iOS and iPadOS, Quick Look can also present a USDZ model in an augmented reality view.

On iOS devices, the Quick Look framework provides functionality for performing simple edits on previews of common file types; for example, users can add markup to an image. To perform more advanced edits on files, provide advanced playback features, display a file’s content next to text, or add views on top of the preview, use lower-level APIs. For example, use [AVPlayer](avfoundation/avplayer.md) to provide advanced video playback features.

You can provide previews for your own data types by either rendering a view with your own view controller or by returning a supported preview format, such as PDF or HTML.

> **Note**

>  The list of supported common file types may change between operating system releases.

<a id="Providing-Quick-Look-previews-for-your-data-types"></a>

### Providing Quick Look previews for your data types

To provide Quick Look previews for your own file types, create a Quick Look preview extension with either a view controller or data-based preview. In either case, add your supported content types to the `QLSupportedContentTypes` array in the `Info.plist` file of the extension.

To provide a view controller-based preview extension, set up a [UIViewController](uikit/uiviewcontroller.md) that conforms to [QLPreviewingController](https://developer.apple.com/documentation/quicklookui/qlpreviewingcontroller). Prepare and display the view within the [preparePreviewOfFileAtURL:completionHandler:](https://developer.apple.com/documentation/quicklookui/qlpreviewingcontroller/preparepreviewoffile%28at:completionhandler:%29) method.

To provide a data-based preview extension, implement a subclass of [QLPreviewProvider](https://developer.apple.com/documentation/quicklookui/qlpreviewprovider) to provide a [QLPreviewReply](https://developer.apple.com/documentation/quicklookui/qlpreviewreply) based on the [QLFilePreviewRequest](https://developer.apple.com/documentation/quicklookui/qlfilepreviewrequest) that the system provides.

Import `QuickLook` to use these extension types in iOS and iPadOS. In macOS, the same types are part of Quick Look UI, so import `QuickLookUI` instead.

## Topics

### Previews

- [QLPreviewController](quicklook/qlpreviewcontroller.md): A specialized view controller for previewing an item.
- [QLPreviewItem](https://developer.apple.com/documentation/quicklookui/qlpreviewitem): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [QLPreviewSceneActivationConfiguration](quicklook/qlpreviewsceneactivationconfiguration.md): A scene configuration to preview items at the specified URLs.
- [Previews or thumbnail images for macOS 10.14 or earlier](quicklook/previews-or-thumbnail-images-for-macos-10-14-or-earlier.md): Create thumbnail images or previews of common files and custom file types in earlier versions of macOS.

### Preview extensions

- [QLPreviewingController](https://developer.apple.com/documentation/quicklookui/qlpreviewingcontroller): A protocol for implementing a custom controller to create previews of files.

### Data-based preview extensions

- [QLPreviewProvider](https://developer.apple.com/documentation/quicklookui/qlpreviewprovider): A class that you subclass to provide a data-based Quick Look preview extension.
- [QLFilePreviewRequest](https://developer.apple.com/documentation/quicklookui/qlfilepreviewrequest): A Quick Look preview request that indicates the content to preview.
- [QLPreviewReply](https://developer.apple.com/documentation/quicklookui/qlpreviewreply): The class you create when providing a data-based Quick Look preview extension.
- [QLPreviewReplyAttachment](https://developer.apple.com/documentation/quicklookui/qlpreviewreplyattachment): An attachment for a Quick Look preview reply that provides additional content for the system to display a preview.

### Classes

- [ARQuickLookPreviewItem](quicklook/arquicklookpreviewitem.md)

### Macros

- [QL_STRONG_REF](quicklook/ql_strong_ref.md)
