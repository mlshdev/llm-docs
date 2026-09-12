> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/defaultnewdocumentbuttonlabel](https://developer.apple.com/documentation/swiftui/defaultnewdocumentbuttonlabel)

# DefaultNewDocumentButtonLabel

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The default label used for a new document button.

## Declaration

```swift
@MainActor @preconcurrency struct DefaultNewDocumentButtonLabel
```

<a id="overview"></a>

## Overview

You don’t use this type directly. Instead, [NewDocumentButton](newdocumentbutton.md) uses it automatically depending on how you create a button.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Configuring the document launch experience

- [DocumentGroupLaunchScene](documentgrouplaunchscene.md): A launch scene for document-based applications.
- [documentLaunchTitle(\_:)](scene/documentlaunchtitle%28__%29.md): Sets the title displayed on the document launch card.
- [documentLaunchSubtitle(\_:)](scene/documentlaunchsubtitle%28__%29.md): Sets the subtitle displayed beneath the title on the document launch card.
- [DocumentLaunchView](documentlaunchview.md): A view to present when launching document-related user experience.
- [documentLaunchTitle(\_:)](view/documentlaunchtitle%28__%29.md): Sets the title displayed on the document launch card.
- [documentLaunchSubtitle(\_:)](view/documentlaunchsubtitle%28__%29.md): Sets the subtitle displayed beneath the title on the document launch card.
- [documentBrowserContextMenu(\_:)](view/documentbrowsercontextmenu%28__%29.md): Adds to a `DocumentLaunchView` actions that accept a list of selected files as their parameter.
- [DocumentLaunchGeometryProxy](documentlaunchgeometryproxy.md): A proxy for access to the frame of the scene and its title view.
- [DefaultDocumentGroupLaunchActions](defaultdocumentgrouplaunchactions.md): The default actions for the document group launch scene and the document launch view.
- [NewDocumentButton](newdocumentbutton.md): A button that creates and opens new documents.
- [DocumentCreationSource](documentcreationsource.md): Describes the source used to create a new document.
