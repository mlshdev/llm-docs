> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerwillpresentoptionsmenu(_:)](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerwillpresentoptionsmenu(_:))

# documentInteractionControllerWillPresentOptionsMenu(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller is about to display an options menu.

## Declaration

```swift
optional func documentInteractionControllerWillPresentOptionsMenu(_ controller: UIDocumentInteractionController)
```

## Parameters

- `controller`: The document interaction controller that is about to display an options menu.

<a id="Discussion"></a>

## Discussion

The options menu is used to present the user with options for previewing the document, opening it in an application, or copying its contents. You can use this method to update your user interface in response to displaying the menu.

## See Also

### Presenting the user interface

- [documentInteractionControllerWillBeginPreview(\_:)](documentinteractioncontrollerwillbeginpreview%28__%29.md): Called when a document interaction controller is about to display a preview for its document.
- [documentInteractionControllerDidEndPreview(\_:)](documentinteractioncontrollerdidendpreview%28__%29.md): Called when a document interaction controller has dismissed its document preview.
- [documentInteractionControllerDidDismissOptionsMenu(\_:)](documentinteractioncontrollerdiddismissoptionsmenu%28__%29.md): Called when a document interaction controller has dismissed its options menu.
- [documentInteractionControllerWillPresentOpenInMenu(\_:)](documentinteractioncontrollerwillpresentopeninmenu%28__%29.md): Called when a document interaction controller is about to display an Open In menu.
- [documentInteractionControllerDidDismissOpenInMenu(\_:)](documentinteractioncontrollerdiddismissopeninmenu%28__%29.md): Called when a document interaction controller has dismissed its Open In menu.

# documentInteractionControllerWillPresentOptionsMenu: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller is about to display an options menu.

## Declaration

```objectivec
- (void) documentInteractionControllerWillPresentOptionsMenu:(UIDocumentInteractionController *) controller;
```

## Parameters

- `controller`: The document interaction controller that is about to display an options menu.

<a id="Discussion"></a>

## Discussion

The options menu is used to present the user with options for previewing the document, opening it in an application, or copying its contents. You can use this method to update your user interface in response to displaying the menu.

## See Also

### Presenting the user interface

- [documentInteractionControllerWillBeginPreview:](documentinteractioncontrollerwillbeginpreview%28__%29.md): Called when a document interaction controller is about to display a preview for its document.
- [documentInteractionControllerDidEndPreview:](documentinteractioncontrollerdidendpreview%28__%29.md): Called when a document interaction controller has dismissed its document preview.
- [documentInteractionControllerDidDismissOptionsMenu:](documentinteractioncontrollerdiddismissoptionsmenu%28__%29.md): Called when a document interaction controller has dismissed its options menu.
- [documentInteractionControllerWillPresentOpenInMenu:](documentinteractioncontrollerwillpresentopeninmenu%28__%29.md): Called when a document interaction controller is about to display an Open In menu.
- [documentInteractionControllerDidDismissOpenInMenu:](documentinteractioncontrollerdiddismissopeninmenu%28__%29.md): Called when a document interaction controller has dismissed its Open In menu.
