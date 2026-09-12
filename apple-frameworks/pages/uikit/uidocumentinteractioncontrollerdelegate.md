> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontrollerdelegate](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontrollerdelegate)

# UIDocumentInteractionControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of methods you can implement to respond to messages from a document interaction controller.

## Declaration

```swift
protocol UIDocumentInteractionControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use this protocol to participate when document previews are displayed and when a document is about to be opened by another application. You can also use this protocol to respond to commands (such as “copy” and “print”) from a document interaction controller’s options menu.

If you use a document interaction controller to display a document preview, your delegate must implement the [documentInteractionControllerViewControllerForPreview(\_:)](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerviewcontrollerforpreview%28__%29.md) method. All other methods of this protocol are optional.

For more information about using a document interaction controller, see [UIDocumentInteractionController](uidocumentinteractioncontroller.md).

## Topics

### Configuring the parent view controller

- [documentInteractionControllerViewControllerForPreview(\_:)](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerviewcontrollerforpreview%28__%29.md): Called when a document interaction controller needs a view controller for presenting a document preview.
- [documentInteractionControllerViewForPreview(\_:)](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerviewforpreview%28__%29.md): Called when a document interaction controller needs the starting point for animating the display of a document preview.
- [documentInteractionControllerRectForPreview(\_:)](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerrectforpreview%28__%29.md): Called when a document interaction controller needs the rectangle to use as the starting point for animating the display of a document preview.

### Presenting the user interface

- [documentInteractionControllerWillBeginPreview(\_:)](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerwillbeginpreview%28__%29.md): Called when a document interaction controller is about to display a preview for its document.
- [documentInteractionControllerDidEndPreview(\_:)](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerdidendpreview%28__%29.md): Called when a document interaction controller has dismissed its document preview.
- [documentInteractionControllerWillPresentOptionsMenu(\_:)](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerwillpresentoptionsmenu%28__%29.md): Called when a document interaction controller is about to display an options menu.
- [documentInteractionControllerDidDismissOptionsMenu(\_:)](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerdiddismissoptionsmenu%28__%29.md): Called when a document interaction controller has dismissed its options menu.
- [documentInteractionControllerWillPresentOpenInMenu(\_:)](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerwillpresentopeninmenu%28__%29.md): Called when a document interaction controller is about to display an Open In menu.
- [documentInteractionControllerDidDismissOpenInMenu(\_:)](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerdiddismissopeninmenu%28__%29.md): Called when a document interaction controller has dismissed its Open In menu.

### Opening files

- [documentInteractionController(\_:willBeginSendingToApplication:)](uidocumentinteractioncontrollerdelegate/documentinteractioncontroller%28__willbeginsendingtoapplication_%29.md): Called when a document interaction controller’s document is about to be opened by the specified application.
- [documentInteractionController(\_:didEndSendingToApplication:)](uidocumentinteractioncontrollerdelegate/documentinteractioncontroller%28__didendsendingtoapplication_%29.md): Called when a document interaction controller’s document has been handed off to the specified application.

### Deprecated

- [documentInteractionController(\_:canPerformAction:)](uidocumentinteractioncontrollerdelegate/documentinteractioncontroller%28__canperformaction_%29.md): Deprecated. Called when a document interaction controller needs to know whether the specified action can be performed on the associated document.
- [documentInteractionController(\_:performAction:)](uidocumentinteractioncontrollerdelegate/documentinteractioncontroller%28__performaction_%29.md): Deprecated. Called when a document interaction controller wants its delegate to perform a specified action with the associated document.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Handling document-related interactions

- [delegate](uidocumentinteractioncontroller/delegate.md): The delegate you want to receive document interaction notifications.

# UIDocumentInteractionControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of methods you can implement to respond to messages from a document interaction controller.

## Declaration

```objectivec
@protocol UIDocumentInteractionControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Use this protocol to participate when document previews are displayed and when a document is about to be opened by another application. You can also use this protocol to respond to commands (such as “copy” and “print”) from a document interaction controller’s options menu.

If you use a document interaction controller to display a document preview, your delegate must implement the [documentInteractionControllerViewControllerForPreview:](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerviewcontrollerforpreview%28__%29.md) method. All other methods of this protocol are optional.

For more information about using a document interaction controller, see [UIDocumentInteractionController](uidocumentinteractioncontroller.md).

## Topics

### Configuring the parent view controller

- [documentInteractionControllerViewControllerForPreview:](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerviewcontrollerforpreview%28__%29.md): Called when a document interaction controller needs a view controller for presenting a document preview.
- [documentInteractionControllerViewForPreview:](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerviewforpreview%28__%29.md): Called when a document interaction controller needs the starting point for animating the display of a document preview.
- [documentInteractionControllerRectForPreview:](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerrectforpreview%28__%29.md): Called when a document interaction controller needs the rectangle to use as the starting point for animating the display of a document preview.

### Presenting the user interface

- [documentInteractionControllerWillBeginPreview:](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerwillbeginpreview%28__%29.md): Called when a document interaction controller is about to display a preview for its document.
- [documentInteractionControllerDidEndPreview:](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerdidendpreview%28__%29.md): Called when a document interaction controller has dismissed its document preview.
- [documentInteractionControllerWillPresentOptionsMenu:](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerwillpresentoptionsmenu%28__%29.md): Called when a document interaction controller is about to display an options menu.
- [documentInteractionControllerDidDismissOptionsMenu:](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerdiddismissoptionsmenu%28__%29.md): Called when a document interaction controller has dismissed its options menu.
- [documentInteractionControllerWillPresentOpenInMenu:](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerwillpresentopeninmenu%28__%29.md): Called when a document interaction controller is about to display an Open In menu.
- [documentInteractionControllerDidDismissOpenInMenu:](uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerdiddismissopeninmenu%28__%29.md): Called when a document interaction controller has dismissed its Open In menu.

### Opening files

- [documentInteractionController:willBeginSendingToApplication:](uidocumentinteractioncontrollerdelegate/documentinteractioncontroller%28__willbeginsendingtoapplication_%29.md): Called when a document interaction controller’s document is about to be opened by the specified application.
- [documentInteractionController:didEndSendingToApplication:](uidocumentinteractioncontrollerdelegate/documentinteractioncontroller%28__didendsendingtoapplication_%29.md): Called when a document interaction controller’s document has been handed off to the specified application.

### Deprecated

- [documentInteractionController:canPerformAction:](uidocumentinteractioncontrollerdelegate/documentinteractioncontroller%28__canperformaction_%29.md): Deprecated. Called when a document interaction controller needs to know whether the specified action can be performed on the associated document.
- [documentInteractionController:performAction:](uidocumentinteractioncontrollerdelegate/documentinteractioncontroller%28__performaction_%29.md): Deprecated. Called when a document interaction controller wants its delegate to perform a specified action with the associated document.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Handling document-related interactions

- [delegate](uidocumentinteractioncontroller/delegate.md): The delegate you want to receive document interaction notifications.
