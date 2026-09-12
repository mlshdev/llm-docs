> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:willperform:from:with:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:willperform:from:with:))

# webView(\_:willPerform:from:with:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Tells the receiver that the sending web view will perform the specified drag-source action.

## Declaration

```swift
optional func webView(_ webView: WebView!, willPerform action: WebDragSourceAction, from point: NSPoint, with pasteboard: NSPasteboard!)
```

## Parameters

- `webView`: The web view that sent the message.
- `action`: The drag-source action to perform. See [WebDragSourceAction](../webdragsourceaction.md) for a list of actions.
- `point`: The point at which the drag began, specified in the coordinates of the web view.
- `pasteboard`: The drag pasteboard.

<a id="Discussion"></a>

## Discussion

This method is invoked after the last invocation of the [webView(\_:dragSourceActionMaskFor:)](webview%28__dragsourceactionmaskfor_%29.md) method, when the dragged content is dropped and the sender is about to perform the drag-source action. The delegate has the opportunity to modify the contents of the object on the pasteboard before completing the drag-source action. No action is taken if you do not implement this method.

## See Also

### Controlling Drag Behavior

- [webView(\_:dragDestinationActionMaskFor:)](webview%28__dragdestinationactionmaskfor_%29.md): Deprecated. Returns a mask indicating which drag operations are allowed by the sender.
- [webView(\_:dragSourceActionMaskFor:)](webview%28__dragsourceactionmaskfor_%29.md): Deprecated. Returns a mask indicating which drag-source actions are allowed for a drag that begins at the specified location.
- [webView(\_:willPerform:for:)](webview%28__willperform_for_%29.md): Deprecated. Tells the receiver that the sending web view will perform the specified drag-destination action.

# webView:willPerformDragSourceAction:fromPoint:withPasteboard: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Tells the receiver that the sending web view will perform the specified drag-source action.

## Declaration

```objectivec
- (void) webView:(WebView *) webView willPerformDragSourceAction:(WebDragSourceAction) action fromPoint:(NSPoint) point withPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `webView`: The web view that sent the message.
- `action`: The drag-source action to perform. See [WebDragSourceAction](../webdragsourceaction.md) for a list of actions.
- `point`: The point at which the drag began, specified in the coordinates of the web view.
- `pasteboard`: The drag pasteboard.

<a id="Discussion"></a>

## Discussion

This method is invoked after the last invocation of the [webView:dragSourceActionMaskForPoint:](webview%28__dragsourceactionmaskfor_%29.md) method, when the dragged content is dropped and the sender is about to perform the drag-source action. The delegate has the opportunity to modify the contents of the object on the pasteboard before completing the drag-source action. No action is taken if you do not implement this method.

## See Also

### Controlling Drag Behavior

- [webView:dragDestinationActionMaskForDraggingInfo:](webview%28__dragdestinationactionmaskfor_%29.md): Deprecated. Returns a mask indicating which drag operations are allowed by the sender.
- [webView:dragSourceActionMaskForPoint:](webview%28__dragsourceactionmaskfor_%29.md): Deprecated. Returns a mask indicating which drag-source actions are allowed for a drag that begins at the specified location.
- [webView:willPerformDragDestinationAction:forDraggingInfo:](webview%28__willperform_for_%29.md): Deprecated. Tells the receiver that the sending web view will perform the specified drag-destination action.
