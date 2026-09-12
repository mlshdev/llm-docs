> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentlaunchview](https://developer.apple.com/documentation/swiftui/documentlaunchview)

# DocumentLaunchView

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A view to present when launching document-related user experience.

## Declaration

```swift
nonisolated struct DocumentLaunchView<Actions, DocumentView> where Actions : View, DocumentView : View
```

<a id="overview"></a>

## Overview

> **Important**

> To create new documents, set [UISupportsDocumentBrowser](https://developer.apple.com/documentation/bundleresources/information-property-list/uisupportsdocumentbrowser) to `YES` in your app’s information property list. Without this key, document creation doesn’t work.

Configure `DocumentLaunchView` to open and display files and trigger custom actions.

For example, an application that offers writing books can present the `DocumentLaunchView` as its launch view:

```swift
public import UniformTypeIdentifiers

struct BookEditorLaunchView: View {

    var body: some View {
        DocumentLaunchView(for: [.book]) {
            NewDocumentButton("Start New Book")
        } onDocumentOpen: { url in
            BookEditor(url)
        }
    }
}

struct BookEditor: View {
    init(_ url: URL) { }
}

extension UTType {
    static let book = UTType(exportedAs: "com.example.bookEditor")
}
```

> **Note**

>  An alternative to `DocumentLaunchView` is a scene variant of this API: [DocumentGroupLaunchScene](documentgrouplaunchscene.md). If the app definition contains `DocumentGroup` scenes, consider using a `DocumentGroupLaunchScene` instead of this view.

## Topics

### Creating a launch view with a background view

- [init(\_:for:\_:onDocumentOpen:)](documentlaunchview/init%28__for___ondocumentopen_%29.md): Creates a view to present when launching document-related user experiences using a localized title and custom actions.
- [init(\_:for:\_:onDocumentOpen:background:)](documentlaunchview/init%28__for___ondocumentopen_background_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, and a background view.
- [init(\_:for:\_:onDocumentOpen:background:backgroundAccessoryView:)](documentlaunchview/init%28__for___ondocumentopen_background_backgroundaccessoryview_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, a background view, and a background accessory view.
- [init(\_:for:\_:onDocumentOpen:background:backgroundAccessoryView:overlayAccessoryView:)](documentlaunchview/init%28__for___ondocumentopen_background_backgroundaccessoryview_overlayaccessoryview_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, a background view, and accessory views.
- [init(\_:for:\_:onDocumentOpen:background:overlayAccessoryView:)](documentlaunchview/init%28__for___ondocumentopen_background_overlayaccessoryview_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, a background view, and an overlay accessory view.
- [init(\_:for:\_:onDocumentOpen:backgroundAccessoryView:)](documentlaunchview/init%28__for___ondocumentopen_backgroundaccessoryview_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, and a background accessory view.
- [init(\_:for:\_:onDocumentOpen:backgroundAccessoryView:overlayAccessoryView:)](documentlaunchview/init%28__for___ondocumentopen_backgroundaccessoryview_overlayaccessoryview_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, and accessory views.
- [init(\_:for:\_:onDocumentOpen:overlayAccessoryView:)](documentlaunchview/init%28__for___ondocumentopen_overlayaccessoryview_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, and an overlay accessory view.

### Creating a launch view with a background style

- [init(\_:for:backgroundStyle:\_:onDocumentOpen:)](documentlaunchview/init%28__for_backgroundstyle___ondocumentopen_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, and a background style.
- [init(\_:for:backgroundStyle:\_:onDocumentOpen:backgroundAccessoryView:)](documentlaunchview/init%28__for_backgroundstyle___ondocumentopen_backgroundaccessoryview_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, a background style, and a background accessory view.
- [init(\_:for:backgroundStyle:\_:onDocumentOpen:backgroundAccessoryView:overlayAccessoryView:)](documentlaunchview/init%28__for_backgroundstyle___ondocumentopen_backgroundaccessoryview_overlayaccessoryview_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, a background style, and accessory views.
- [init(\_:for:backgroundStyle:\_:onDocumentOpen:overlayAccessoryView:)](documentlaunchview/init%28__for_backgroundstyle___ondocumentopen_overlayaccessoryview_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, a background style, and an overlay accessory view.

### Displaying the launch view

- [body](documentlaunchview/body.md): The body of the view.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Configuring the document launch experience

- [DocumentGroupLaunchScene](documentgrouplaunchscene.md): A launch scene for document-based applications.
- [documentLaunchTitle(\_:)](scene/documentlaunchtitle%28__%29.md): Sets the title displayed on the document launch card.
- [documentLaunchSubtitle(\_:)](scene/documentlaunchsubtitle%28__%29.md): Sets the subtitle displayed beneath the title on the document launch card.
- [documentLaunchTitle(\_:)](view/documentlaunchtitle%28__%29.md): Sets the title displayed on the document launch card.
- [documentLaunchSubtitle(\_:)](view/documentlaunchsubtitle%28__%29.md): Sets the subtitle displayed beneath the title on the document launch card.
- [documentBrowserContextMenu(\_:)](view/documentbrowsercontextmenu%28__%29.md): Adds to a `DocumentLaunchView` actions that accept a list of selected files as their parameter.
- [DocumentLaunchGeometryProxy](documentlaunchgeometryproxy.md): A proxy for access to the frame of the scene and its title view.
- [DefaultDocumentGroupLaunchActions](defaultdocumentgrouplaunchactions.md): The default actions for the document group launch scene and the document launch view.
- [NewDocumentButton](newdocumentbutton.md): A button that creates and opens new documents.
- [DefaultNewDocumentButtonLabel](defaultnewdocumentbuttonlabel.md): The default label used for a new document button.
- [DocumentCreationSource](documentcreationsource.md): Describes the source used to create a new document.
