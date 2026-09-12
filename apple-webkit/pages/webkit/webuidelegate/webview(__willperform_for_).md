> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:willperform:for:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:willperform:for:))

# webView(\_:willPerform:for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Tells the receiver that the sending web view will perform the specified drag-destination action.

## Declaration

```swift
optional func webView(_ webView: WebView!, willPerform action: WebDragDestinationAction, for draggingInfo: (any NSDraggingInfo)!)
```

## Parameters

- `webView`: The web view that sent the message.
- `action`: The drag-destination action to perform. See [WebDragDestinationAction](../webdragdestinationaction.md) for a list of actions.
- `draggingInfo`: The information object for the dragging operation.

<a id="Discussion"></a>

## Discussion

This method is invoked after the last invocation of the [webView(\_:dragDestinationActionMaskFor:)](webview%28__dragdestinationactionmaskfor_%29.md) method, when the dragged content is dropped and the sender is about to perform the destination action. No action is taken if you do not implement this method.

## See Also

### Controlling Drag Behavior

- [webView(\_:dragDestinationActionMaskFor:)](webview%28__dragdestinationactionmaskfor_%29.md): Deprecated. Returns a mask indicating which drag operations are allowed by the sender.
- [webView(\_:dragSourceActionMaskFor:)](webview%28__dragsourceactionmaskfor_%29.md): Deprecated. Returns a mask indicating which drag-source actions are allowed for a drag that begins at the specified location.
- [webView(\_:willPerform:from:with:)](webview%28__willperform_from_with_%29.md): Deprecated. Tells the receiver that the sending web view will perform the specified drag-source action.

# webView:willPerformDragDestinationAction:forDraggingInfo: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Tells the receiver that the sending web view will perform the specified drag-destination action.

## Declaration

```objectivec
- (void) webView:(WebView *) webView willPerformDragDestinationAction:(WebDragDestinationAction) action forDraggingInfo:(id<NSDraggingInfo>) draggingInfo;
```

## Parameters

- `webView`: The web view that sent the message.
- `action`: The drag-destination action to perform. See [WebDragDestinationAction](../webdragdestinationaction.md) for a list of actions.
- `draggingInfo`: The information object for the dragging operation.

<a id="Discussion"></a>

## Discussion

This method is invoked after the last invocation of the [webView:dragDestinationActionMaskForDraggingInfo:](webview%28__dragdestinationactionmaskfor_%29.md) method, when the dragged content is dropped and the sender is about to perform the destination action. No action is taken if you do not implement this method.

## See Also

### Controlling Drag Behavior

- [webView:dragDestinationActionMaskForDraggingInfo:](webview%28__dragdestinationactionmaskfor_%29.md): Deprecated. Returns a mask indicating which drag operations are allowed by the sender.
- [webView:dragSourceActionMaskForPoint:](webview%28__dragsourceactionmaskfor_%29.md): Deprecated. Returns a mask indicating which drag-source actions are allowed for a drag that begins at the specified location.
- [webView:willPerformDragSourceAction:fromPoint:withPasteboard:](webview%28__willperform_from_with_%29.md): Deprecated. Tells the receiver that the sending web view will perform the specified drag-source action.
