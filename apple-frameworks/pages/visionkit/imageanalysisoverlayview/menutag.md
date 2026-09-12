> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview/menutag](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/menutag)

# ImageAnalysisOverlayView.MenuTag

**Framework:** VisionKit  
**Kind:** Structure  
**Availability:** macOS 14.0+

Tags that enable your app to manage image-analysis context menu items.

## Declaration

```swift
struct MenuTag
```

<a id="overview"></a>

## Overview

Manage app context menu items by implementing the [ImageAnalysisOverlayViewDelegate](../imageanalysisoverlayviewdelegate.md) menu-related callbacks and referencing the menu item instances using tags from this enumeration. For example, see [overlayView(\_:updatedMenuFor:for:at:)](../imageanalysisoverlayviewdelegate/overlayview%28__updatedmenufor_for_at_%29.md).

## Topics

### Manage Framework-provided menu items

- [copyImage](menutag/copyimage.md): An index for the copy-image menu item.
- [shareImage](menutag/shareimage.md): An index for the share-image menu item.
- [copySubject](menutag/copysubject.md): An index for the copy-subject menu item.
- [shareSubject](menutag/sharesubject.md): An index for the share-subject menu item.
- [lookupItem](menutag/lookupitem.md): An index for the Visual Look Up menu item.

### Create app-defined menu items

- [recommendedAppItems](menutag/recommendedappitems.md): An index for app-provided menu items.

## See Also

### Customizing the interface

- [setSupplementaryInterfaceHidden(\_:animated:)](setsupplementaryinterfacehidden%28__animated_%29.md): Hides or shows supplementary interface objects, such as the Live Text button and the interface for Quick Actions, depending on the item type.
- [supplementaryInterfaceContentInsets](supplementaryinterfacecontentinsets.md): The distances the edges of content are inset from the supplementary interface.
- [supplementaryInterfaceFont](supplementaryinterfacefont.md): The font to use for the supplementary interface.
