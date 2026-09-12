> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerdiddismissoptionsmenu(_:)](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerdiddismissoptionsmenu(_:))

# documentInteractionControllerDidDismissOptionsMenu(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller has dismissed its options menu.

## Declaration

```swift
optional func documentInteractionControllerDidDismissOptionsMenu(_ controller: UIDocumentInteractionController)
```

## Parameters

- `controller`: The document interaction controller that dismissed its options menu.

<a id="Discussion"></a>

## Discussion

You can use this method to remove any additional views or content you placed underneath the options menu in your [documentInteractionControllerWillPresentOptionsMenu(\_:)](documentinteractioncontrollerwillpresentoptionsmenu%28__%29.md) method.

## See Also

### Presenting the user interface

- [documentInteractionControllerWillBeginPreview(\_:)](documentinteractioncontrollerwillbeginpreview%28__%29.md): Called when a document interaction controller is about to display a preview for its document.
- [documentInteractionControllerDidEndPreview(\_:)](documentinteractioncontrollerdidendpreview%28__%29.md): Called when a document interaction controller has dismissed its document preview.
- [documentInteractionControllerWillPresentOptionsMenu(\_:)](documentinteractioncontrollerwillpresentoptionsmenu%28__%29.md): Called when a document interaction controller is about to display an options menu.
- [documentInteractionControllerWillPresentOpenInMenu(\_:)](documentinteractioncontrollerwillpresentopeninmenu%28__%29.md): Called when a document interaction controller is about to display an Open In menu.
- [documentInteractionControllerDidDismissOpenInMenu(\_:)](documentinteractioncontrollerdiddismissopeninmenu%28__%29.md): Called when a document interaction controller has dismissed its Open In menu.

# documentInteractionControllerDidDismissOptionsMenu: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller has dismissed its options menu.

## Declaration

```objectivec
- (void) documentInteractionControllerDidDismissOptionsMenu:(UIDocumentInteractionController *) controller;
```

## Parameters

- `controller`: The document interaction controller that dismissed its options menu.

<a id="Discussion"></a>

## Discussion

You can use this method to remove any additional views or content you placed underneath the options menu in your [documentInteractionControllerWillPresentOptionsMenu:](documentinteractioncontrollerwillpresentoptionsmenu%28__%29.md) method.

## See Also

### Presenting the user interface

- [documentInteractionControllerWillBeginPreview:](documentinteractioncontrollerwillbeginpreview%28__%29.md): Called when a document interaction controller is about to display a preview for its document.
- [documentInteractionControllerDidEndPreview:](documentinteractioncontrollerdidendpreview%28__%29.md): Called when a document interaction controller has dismissed its document preview.
- [documentInteractionControllerWillPresentOptionsMenu:](documentinteractioncontrollerwillpresentoptionsmenu%28__%29.md): Called when a document interaction controller is about to display an options menu.
- [documentInteractionControllerWillPresentOpenInMenu:](documentinteractioncontrollerwillpresentopeninmenu%28__%29.md): Called when a document interaction controller is about to display an Open In menu.
- [documentInteractionControllerDidDismissOpenInMenu:](documentinteractioncontrollerdiddismissopeninmenu%28__%29.md): Called when a document interaction controller has dismissed its Open In menu.
