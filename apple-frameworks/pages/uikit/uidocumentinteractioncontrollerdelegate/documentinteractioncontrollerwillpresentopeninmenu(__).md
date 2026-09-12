> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerwillpresentopeninmenu(_:)](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerwillpresentopeninmenu(_:))

# documentInteractionControllerWillPresentOpenInMenu(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller is about to display an Open In menu.

## Declaration

```swift
optional func documentInteractionControllerWillPresentOpenInMenu(_ controller: UIDocumentInteractionController)
```

## Parameters

- `controller`: The document interaction controller that is about to display a menu.

<a id="Discussion"></a>

## Discussion

The Open In menu is used to select an application for opening the current file. You can use this method to update your user interface in response to displaying the menu.

## See Also

### Presenting the user interface

- [documentInteractionControllerWillBeginPreview(\_:)](documentinteractioncontrollerwillbeginpreview%28__%29.md): Called when a document interaction controller is about to display a preview for its document.
- [documentInteractionControllerDidEndPreview(\_:)](documentinteractioncontrollerdidendpreview%28__%29.md): Called when a document interaction controller has dismissed its document preview.
- [documentInteractionControllerWillPresentOptionsMenu(\_:)](documentinteractioncontrollerwillpresentoptionsmenu%28__%29.md): Called when a document interaction controller is about to display an options menu.
- [documentInteractionControllerDidDismissOptionsMenu(\_:)](documentinteractioncontrollerdiddismissoptionsmenu%28__%29.md): Called when a document interaction controller has dismissed its options menu.
- [documentInteractionControllerDidDismissOpenInMenu(\_:)](documentinteractioncontrollerdiddismissopeninmenu%28__%29.md): Called when a document interaction controller has dismissed its Open In menu.

# documentInteractionControllerWillPresentOpenInMenu: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller is about to display an Open In menu.

## Declaration

```objectivec
- (void) documentInteractionControllerWillPresentOpenInMenu:(UIDocumentInteractionController *) controller;
```

## Parameters

- `controller`: The document interaction controller that is about to display a menu.

<a id="Discussion"></a>

## Discussion

The Open In menu is used to select an application for opening the current file. You can use this method to update your user interface in response to displaying the menu.

## See Also

### Presenting the user interface

- [documentInteractionControllerWillBeginPreview:](documentinteractioncontrollerwillbeginpreview%28__%29.md): Called when a document interaction controller is about to display a preview for its document.
- [documentInteractionControllerDidEndPreview:](documentinteractioncontrollerdidendpreview%28__%29.md): Called when a document interaction controller has dismissed its document preview.
- [documentInteractionControllerWillPresentOptionsMenu:](documentinteractioncontrollerwillpresentoptionsmenu%28__%29.md): Called when a document interaction controller is about to display an options menu.
- [documentInteractionControllerDidDismissOptionsMenu:](documentinteractioncontrollerdiddismissoptionsmenu%28__%29.md): Called when a document interaction controller has dismissed its options menu.
- [documentInteractionControllerDidDismissOpenInMenu:](documentinteractioncontrollerdiddismissopeninmenu%28__%29.md): Called when a document interaction controller has dismissed its Open In menu.
