> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentgrouplaunchscene](https://developer.apple.com/documentation/swiftui/documentgrouplaunchscene)

# DocumentGroupLaunchScene

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

A launch scene for document-based applications.

## Declaration

```swift
nonisolated struct DocumentGroupLaunchScene<Actions> where Actions : View
```

<a id="overview"></a>

## Overview

You can use this launch scene alongside [DocumentGroup](documentgroup.md) scenes. If you don’t implement a `DocumentGroup` in the app declaration, you can get the same design by implementing a [DocumentLaunchView](documentlaunchview.md).

If you don’t provide the title of the scene, it displays the application name. If you don’t provide the actions builder, the scene has the default “Create Document” action that creates new documents. To customize the document launch experience, you can replace the standard screen background and title, add decorative views, and add custom actions.

A `DocumentGroupLaunchScene` configures the document browser on the bottom sheet to open content types from all the document groups in the app definition. A `DocumentGroupLaunchScene` also configures the document groups to create documents of the first content type that your application can create and write.

For more information, see `FileDocument.writableContentTypes` and `ReferenceFileDocument.writableContentTypes`.

## Topics

### Creating a launch scene with a background view

- [init(\_:\_:background:)](documentgrouplaunchscene/init%28____background_%29.md): Conforms when `Actions` conforms to `View`. Creates a launch scene for document-based applications with a title, a set of actions, and a background.
- [init(\_:\_:background:backgroundAccessoryView:)](documentgrouplaunchscene/init%28____background_backgroundaccessoryview_%29.md): Conforms when `Actions` conforms to `View`. Creates a launch scene for document-based applications with a title, a set of actions, a background, and a background accessory view.
- [init(\_:\_:background:backgroundAccessoryView:overlayAccessoryView:)](documentgrouplaunchscene/init%28____background_backgroundaccessoryview_overlayaccessoryview_%29.md): Conforms when `Actions` conforms to `View`. Creates a launch scene for document-based applications with a title, a set of actions, and a background.
- [init(\_:\_:background:overlayAccessoryView:)](documentgrouplaunchscene/init%28____background_overlayaccessoryview_%29.md): Conforms when `Actions` conforms to `View`. Creates a launch scene for document-based applications with a title, a set of actions, a background, and an overlay accessory view.

### Creating a launch scene with a background style

- [init(\_:backgroundStyle:\_:)](documentgrouplaunchscene/init%28__backgroundstyle___%29.md): Conforms when `Actions` conforms to `View`. Creates a launch scene for document-based applications with a title, a background style, and a set of actions.
- [init(\_:backgroundStyle:\_:backgroundAccessoryView:)](documentgrouplaunchscene/init%28__backgroundstyle___backgroundaccessoryview_%29.md): Conforms when `Actions` conforms to `View`. Creates a launch scene for document-based applications with a title, a background style, a set of actions, and a background accessory view.
- [init(\_:backgroundStyle:\_:backgroundAccessoryView:overlayAccessoryView:)](documentgrouplaunchscene/init%28__backgroundstyle___backgroundaccessoryview_overlayaccessoryview_%29.md): Conforms when `Actions` conforms to `View`. Creates a launch scene for document-based applications with a title, a background style, a set of actions, and background and overlay accessory views.
- [init(\_:backgroundStyle:\_:overlayAccessoryView:)](documentgrouplaunchscene/init%28__backgroundstyle___overlayaccessoryview_%29.md): Conforms when `Actions` conforms to `View`. Creates a launch scene for document-based applications with a title, a background style, a set of actions, and an overlay accessory view.

## Relationships

### Conforms To

- [Scene](scene.md)

## See Also

### Configuring the document launch experience

- [documentLaunchTitle(\_:)](scene/documentlaunchtitle%28__%29.md): Sets the title displayed on the document launch card.
- [documentLaunchSubtitle(\_:)](scene/documentlaunchsubtitle%28__%29.md): Sets the subtitle displayed beneath the title on the document launch card.
- [DocumentLaunchView](documentlaunchview.md): A view to present when launching document-related user experience.
- [documentLaunchTitle(\_:)](view/documentlaunchtitle%28__%29.md): Sets the title displayed on the document launch card.
- [documentLaunchSubtitle(\_:)](view/documentlaunchsubtitle%28__%29.md): Sets the subtitle displayed beneath the title on the document launch card.
- [documentBrowserContextMenu(\_:)](view/documentbrowsercontextmenu%28__%29.md): Adds to a `DocumentLaunchView` actions that accept a list of selected files as their parameter.
- [DocumentLaunchGeometryProxy](documentlaunchgeometryproxy.md): A proxy for access to the frame of the scene and its title view.
- [DefaultDocumentGroupLaunchActions](defaultdocumentgrouplaunchactions.md): The default actions for the document group launch scene and the document launch view.
- [NewDocumentButton](newdocumentbutton.md): A button that creates and opens new documents.
- [DefaultNewDocumentButtonLabel](defaultnewdocumentbuttonlabel.md): The default label used for a new document button.
- [DocumentCreationSource](documentcreationsource.md): Describes the source used to create a new document.
