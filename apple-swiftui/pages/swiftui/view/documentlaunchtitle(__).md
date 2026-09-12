> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/documentlaunchtitle(_:)](https://developer.apple.com/documentation/swiftui/view/documentlaunchtitle(_:))

# documentLaunchTitle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Sets the title displayed on the document launch card.

## Declaration

```swift
nonisolated func documentLaunchTitle(_ title: Text) -> some View

```

## Parameters

- `title`: The title to display.

<a id="discussion"></a>

## Discussion

Use this modifier to override the default launch-card title, which is the application name. Apply the modifier to a [DocumentLaunchView](../documentlaunchview.md) or any of its ancestors.

## See Also

### Configuring the document launch experience

- [DocumentGroupLaunchScene](../documentgrouplaunchscene.md): A launch scene for document-based applications.
- [documentLaunchTitle(\_:)](../scene/documentlaunchtitle%28__%29.md): Sets the title displayed on the document launch card.
- [documentLaunchSubtitle(\_:)](../scene/documentlaunchsubtitle%28__%29.md): Sets the subtitle displayed beneath the title on the document launch card.
- [DocumentLaunchView](../documentlaunchview.md): A view to present when launching document-related user experience.
- [documentLaunchSubtitle(\_:)](documentlaunchsubtitle%28__%29.md): Sets the subtitle displayed beneath the title on the document launch card.
- [documentBrowserContextMenu(\_:)](documentbrowsercontextmenu%28__%29.md): Adds to a `DocumentLaunchView` actions that accept a list of selected files as their parameter.
- [DocumentLaunchGeometryProxy](../documentlaunchgeometryproxy.md): A proxy for access to the frame of the scene and its title view.
- [DefaultDocumentGroupLaunchActions](../defaultdocumentgrouplaunchactions.md): The default actions for the document group launch scene and the document launch view.
- [NewDocumentButton](../newdocumentbutton.md): A button that creates and opens new documents.
- [DefaultNewDocumentButtonLabel](../defaultnewdocumentbuttonlabel.md): The default label used for a new document button.
- [DocumentCreationSource](../documentcreationsource.md): Describes the source used to create a new document.
