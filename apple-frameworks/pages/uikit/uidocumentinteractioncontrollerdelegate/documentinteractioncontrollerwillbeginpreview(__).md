> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerwillbeginpreview(_:)](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerwillbeginpreview(_:))

# documentInteractionControllerWillBeginPreview(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller is about to display a preview for its document.

## Declaration

```swift
optional func documentInteractionControllerWillBeginPreview(_ controller: UIDocumentInteractionController)
```

## Parameters

- `controller`: The document interaction controller that is about to preview its document.

<a id="Discussion"></a>

## Discussion

This method is called shortly before the view containing the document preview is presented modally. You can use this notification to set up any additional interface elements behind the preview elements.

## See Also

### Presenting the user interface

- [documentInteractionControllerDidEndPreview(\_:)](documentinteractioncontrollerdidendpreview%28__%29.md): Called when a document interaction controller has dismissed its document preview.
- [documentInteractionControllerWillPresentOptionsMenu(\_:)](documentinteractioncontrollerwillpresentoptionsmenu%28__%29.md): Called when a document interaction controller is about to display an options menu.
- [documentInteractionControllerDidDismissOptionsMenu(\_:)](documentinteractioncontrollerdiddismissoptionsmenu%28__%29.md): Called when a document interaction controller has dismissed its options menu.
- [documentInteractionControllerWillPresentOpenInMenu(\_:)](documentinteractioncontrollerwillpresentopeninmenu%28__%29.md): Called when a document interaction controller is about to display an Open In menu.
- [documentInteractionControllerDidDismissOpenInMenu(\_:)](documentinteractioncontrollerdiddismissopeninmenu%28__%29.md): Called when a document interaction controller has dismissed its Open In menu.

# documentInteractionControllerWillBeginPreview: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller is about to display a preview for its document.

## Declaration

```objectivec
- (void) documentInteractionControllerWillBeginPreview:(UIDocumentInteractionController *) controller;
```

## Parameters

- `controller`: The document interaction controller that is about to preview its document.

<a id="Discussion"></a>

## Discussion

This method is called shortly before the view containing the document preview is presented modally. You can use this notification to set up any additional interface elements behind the preview elements.

## See Also

### Presenting the user interface

- [documentInteractionControllerDidEndPreview:](documentinteractioncontrollerdidendpreview%28__%29.md): Called when a document interaction controller has dismissed its document preview.
- [documentInteractionControllerWillPresentOptionsMenu:](documentinteractioncontrollerwillpresentoptionsmenu%28__%29.md): Called when a document interaction controller is about to display an options menu.
- [documentInteractionControllerDidDismissOptionsMenu:](documentinteractioncontrollerdiddismissoptionsmenu%28__%29.md): Called when a document interaction controller has dismissed its options menu.
- [documentInteractionControllerWillPresentOpenInMenu:](documentinteractioncontrollerwillpresentopeninmenu%28__%29.md): Called when a document interaction controller is about to display an Open In menu.
- [documentInteractionControllerDidDismissOpenInMenu:](documentinteractioncontrollerdiddismissopeninmenu%28__%29.md): Called when a document interaction controller has dismissed its Open In menu.
