> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerdidendpreview(_:)](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerdidendpreview(_:))

# documentInteractionControllerDidEndPreview(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller has dismissed its document preview.

## Declaration

```swift
optional func documentInteractionControllerDidEndPreview(_ controller: UIDocumentInteractionController)
```

## Parameters

- `controller`: The document interaction controller that dismissed its document preview.

<a id="Discussion"></a>

## Discussion

This method is called after the view containing the document preview has been removed from the application’s key window. You can use this notification to remove any interface elements you set up behind the preview elements.

## See Also

### Presenting the user interface

- [documentInteractionControllerWillBeginPreview(\_:)](documentinteractioncontrollerwillbeginpreview%28__%29.md): Called when a document interaction controller is about to display a preview for its document.
- [documentInteractionControllerWillPresentOptionsMenu(\_:)](documentinteractioncontrollerwillpresentoptionsmenu%28__%29.md): Called when a document interaction controller is about to display an options menu.
- [documentInteractionControllerDidDismissOptionsMenu(\_:)](documentinteractioncontrollerdiddismissoptionsmenu%28__%29.md): Called when a document interaction controller has dismissed its options menu.
- [documentInteractionControllerWillPresentOpenInMenu(\_:)](documentinteractioncontrollerwillpresentopeninmenu%28__%29.md): Called when a document interaction controller is about to display an Open In menu.
- [documentInteractionControllerDidDismissOpenInMenu(\_:)](documentinteractioncontrollerdiddismissopeninmenu%28__%29.md): Called when a document interaction controller has dismissed its Open In menu.

# documentInteractionControllerDidEndPreview: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller has dismissed its document preview.

## Declaration

```objectivec
- (void) documentInteractionControllerDidEndPreview:(UIDocumentInteractionController *) controller;
```

## Parameters

- `controller`: The document interaction controller that dismissed its document preview.

<a id="Discussion"></a>

## Discussion

This method is called after the view containing the document preview has been removed from the application’s key window. You can use this notification to remove any interface elements you set up behind the preview elements.

## See Also

### Presenting the user interface

- [documentInteractionControllerWillBeginPreview:](documentinteractioncontrollerwillbeginpreview%28__%29.md): Called when a document interaction controller is about to display a preview for its document.
- [documentInteractionControllerWillPresentOptionsMenu:](documentinteractioncontrollerwillpresentoptionsmenu%28__%29.md): Called when a document interaction controller is about to display an options menu.
- [documentInteractionControllerDidDismissOptionsMenu:](documentinteractioncontrollerdiddismissoptionsmenu%28__%29.md): Called when a document interaction controller has dismissed its options menu.
- [documentInteractionControllerWillPresentOpenInMenu:](documentinteractioncontrollerwillpresentopeninmenu%28__%29.md): Called when a document interaction controller is about to display an Open In menu.
- [documentInteractionControllerDidDismissOpenInMenu:](documentinteractioncontrollerdiddismissopeninmenu%28__%29.md): Called when a document interaction controller has dismissed its Open In menu.
