> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontroller(_:performaction:)](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontroller(_:performaction:))

# documentInteractionController(\_:performAction:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 6.0) · iPadOS 3.2+ (deprecated in 6.0) · Mac Catalyst 3.2+ (deprecated in 6.0) · visionOS 1.0+ (deprecated in 1.0)

Called when a document interaction controller wants its delegate to perform a specified action with the associated document.

> Apps should use [UIActivityViewController](../uiactivityviewcontroller.md) for actions.

## Declaration

```swift
optional func documentInteractionController(_ controller: UIDocumentInteractionController, performAction action: Selector?) -> Bool
```

## Parameters

- `controller`: The document interaction controller managing an associated document.
- `action`: The selector representing the action to perform. You can invoke this selector directly on the object responsible for performing the action or use it to call the appropriate method.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was performed successfully or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

The supported `action` selectors for this method are `copy:` and `print:`. (The `print:` selector is available in iOS 4.2 and later. Printing is supported only on devices that support multitasking.)

To implement a `copy:` action, write the contents of the document—directly, or modified according to the intent of your app—to the pasteboard.

To implement a `print:` action, use the shared print interaction controller object. Assign the [url](../uidocumentinteractioncontroller/url.md) property of the document interaction controller to the print interaction controller’s [printingItem](../uiprintinteractioncontroller/printingitem.md) property. Then present the printing user interface. For details, refer to [UIPrintInteractionController](../uiprintinteractioncontroller.md) and to [Printing](https://developer.apple.com/library/archive/documentation/2DDrawing/Conceptual/DrawingPrintingiOS/Printing/Printing.html#//apple_ref/doc/uid/TP40010156-CH12) in [Drawing and Printing Guide for iOS](https://developer.apple.com/library/archive/documentation/2DDrawing/Conceptual/DrawingPrintingiOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010156).

Instead of implementing printing code in this method, you can rely on the built-in printing support of the Quick Look framework. For document types that can be previewed, the options menu of a document interaction controller always contains a Quick Look item. If the user chooses that item, the resulting Quick Look view includes an action button in the navigation bar that, when tapped, offers a Print button. In this case, the system automatically handles printing. For details, refer to [QLPreviewController](../../quicklook/qlpreviewcontroller.md) and to [Using the Quick Look Framework](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/DocumentInteraction_TopicsForIOS/Articles/UsingtheQuickLookFramework.html#//apple_ref/doc/uid/TP40010413) in [Document Interaction Programming Topics for iOS](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/DocumentInteraction_TopicsForIOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010403).

## See Also

### Deprecated

- [documentInteractionController(\_:canPerformAction:)](documentinteractioncontroller%28__canperformaction_%29.md): Deprecated. Called when a document interaction controller needs to know whether the specified action can be performed on the associated document.

# documentInteractionController:performAction: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 6.0) · iPadOS 3.2+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Called when a document interaction controller wants its delegate to perform a specified action with the associated document.

> Apps should use [UIActivityViewController](../uiactivityviewcontroller.md) for actions.

## Declaration

```objectivec
- (BOOL) documentInteractionController:(UIDocumentInteractionController *) controller performAction:(SEL) action;
```

## Parameters

- `controller`: The document interaction controller managing an associated document.
- `action`: The selector representing the action to perform. You can invoke this selector directly on the object responsible for performing the action or use it to call the appropriate method.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was performed successfully or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

The supported `action` selectors for this method are `copy:` and `print:`. (The `print:` selector is available in iOS 4.2 and later. Printing is supported only on devices that support multitasking.)

To implement a `copy:` action, write the contents of the document—directly, or modified according to the intent of your app—to the pasteboard.

To implement a `print:` action, use the shared print interaction controller object. Assign the [URL](../uidocumentinteractioncontroller/url.md) property of the document interaction controller to the print interaction controller’s [printingItem](../uiprintinteractioncontroller/printingitem.md) property. Then present the printing user interface. For details, refer to [UIPrintInteractionController](../uiprintinteractioncontroller.md) and to [Printing](https://developer.apple.com/library/archive/documentation/2DDrawing/Conceptual/DrawingPrintingiOS/Printing/Printing.html#//apple_ref/doc/uid/TP40010156-CH12) in [Drawing and Printing Guide for iOS](https://developer.apple.com/library/archive/documentation/2DDrawing/Conceptual/DrawingPrintingiOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010156).

Instead of implementing printing code in this method, you can rely on the built-in printing support of the Quick Look framework. For document types that can be previewed, the options menu of a document interaction controller always contains a Quick Look item. If the user chooses that item, the resulting Quick Look view includes an action button in the navigation bar that, when tapped, offers a Print button. In this case, the system automatically handles printing. For details, refer to [QLPreviewController](../../quicklook/qlpreviewcontroller.md) and to [Using the Quick Look Framework](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/DocumentInteraction_TopicsForIOS/Articles/UsingtheQuickLookFramework.html#//apple_ref/doc/uid/TP40010413) in [Document Interaction Programming Topics for iOS](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/DocumentInteraction_TopicsForIOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010403).

## See Also

### Deprecated

- [documentInteractionController:canPerformAction:](documentinteractioncontroller%28__canperformaction_%29.md): Deprecated. Called when a document interaction controller needs to know whether the specified action can be performed on the associated document.
