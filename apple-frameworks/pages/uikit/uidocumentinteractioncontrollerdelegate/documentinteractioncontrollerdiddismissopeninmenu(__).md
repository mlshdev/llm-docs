> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerdiddismissopeninmenu(_:)](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerdiddismissopeninmenu(_:))

# documentInteractionControllerDidDismissOpenInMenu(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller has dismissed its Open In menu.

## Declaration

```swift
optional func documentInteractionControllerDidDismissOpenInMenu(_ controller: UIDocumentInteractionController)
```

## Parameters

- `controller`: The document interaction controller that dismissed its menu.

<a id="Discussion"></a>

## Discussion

You can use this method to remove any additional views or content you placed underneath the Open In menu in your [documentInteractionControllerWillPresentOpenInMenu(\_:)](documentinteractioncontrollerwillpresentopeninmenu%28__%29.md) method.

## See Also

### Presenting the user interface

- [documentInteractionControllerWillBeginPreview(\_:)](documentinteractioncontrollerwillbeginpreview%28__%29.md): Called when a document interaction controller is about to display a preview for its document.
- [documentInteractionControllerDidEndPreview(\_:)](documentinteractioncontrollerdidendpreview%28__%29.md): Called when a document interaction controller has dismissed its document preview.
- [documentInteractionControllerWillPresentOptionsMenu(\_:)](documentinteractioncontrollerwillpresentoptionsmenu%28__%29.md): Called when a document interaction controller is about to display an options menu.
- [documentInteractionControllerDidDismissOptionsMenu(\_:)](documentinteractioncontrollerdiddismissoptionsmenu%28__%29.md): Called when a document interaction controller has dismissed its options menu.
- [documentInteractionControllerWillPresentOpenInMenu(\_:)](documentinteractioncontrollerwillpresentopeninmenu%28__%29.md): Called when a document interaction controller is about to display an Open In menu.

# documentInteractionControllerDidDismissOpenInMenu: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller has dismissed its Open In menu.

## Declaration

```objectivec
- (void) documentInteractionControllerDidDismissOpenInMenu:(UIDocumentInteractionController *) controller;
```

## Parameters

- `controller`: The document interaction controller that dismissed its menu.

<a id="Discussion"></a>

## Discussion

You can use this method to remove any additional views or content you placed underneath the Open In menu in your [documentInteractionControllerWillPresentOpenInMenu:](documentinteractioncontrollerwillpresentopeninmenu%28__%29.md) method.

## See Also

### Presenting the user interface

- [documentInteractionControllerWillBeginPreview:](documentinteractioncontrollerwillbeginpreview%28__%29.md): Called when a document interaction controller is about to display a preview for its document.
- [documentInteractionControllerDidEndPreview:](documentinteractioncontrollerdidendpreview%28__%29.md): Called when a document interaction controller has dismissed its document preview.
- [documentInteractionControllerWillPresentOptionsMenu:](documentinteractioncontrollerwillpresentoptionsmenu%28__%29.md): Called when a document interaction controller is about to display an options menu.
- [documentInteractionControllerDidDismissOptionsMenu:](documentinteractioncontrollerdiddismissoptionsmenu%28__%29.md): Called when a document interaction controller has dismissed its options menu.
- [documentInteractionControllerWillPresentOpenInMenu:](documentinteractioncontrollerwillpresentopeninmenu%28__%29.md): Called when a document interaction controller is about to display an Open In menu.
