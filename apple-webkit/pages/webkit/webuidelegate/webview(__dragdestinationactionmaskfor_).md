> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:dragdestinationactionmaskfor:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:dragdestinationactionmaskfor:))

# webView(\_:dragDestinationActionMaskFor:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a mask indicating which drag operations are allowed by the sender.

## Declaration

```swift
optional func webView(_ webView: WebView!, dragDestinationActionMaskFor draggingInfo: (any NSDraggingInfo)!) -> Int
```

## Parameters

- `webView`: The web view that sent the message.
- `draggingInfo`: The information object for the dragging operation.

<a id="return-value"></a>

## Return Value

A mask that indicates which drag operations are allowed when content is dragged over the sending web view. (Note that the return value changed from an `unsigned int` to an `NSUInteger` in OS X v10.5.) See [WebDragDestinationAction](../webdragdestinationaction.md) for a list of return values.

<a id="Discussion"></a>

## Discussion

This method can be invoked multiple times while content is dragged over the sending web view. When the content is dropped, the web view sends a notification ([webView(\_:willPerform:for:)](webview%28__willperform_for_%29.md)) to the receiver.

If you do not implement this method, it returns [any](../webdragdestinationaction/any.md) by default.

## See Also

### Controlling Drag Behavior

- [webView(\_:dragSourceActionMaskFor:)](webview%28__dragsourceactionmaskfor_%29.md): Deprecated. Returns a mask indicating which drag-source actions are allowed for a drag that begins at the specified location.
- [webView(\_:willPerform:for:)](webview%28__willperform_for_%29.md): Deprecated. Tells the receiver that the sending web view will perform the specified drag-destination action.
- [webView(\_:willPerform:from:with:)](webview%28__willperform_from_with_%29.md): Deprecated. Tells the receiver that the sending web view will perform the specified drag-source action.

# webView:dragDestinationActionMaskForDraggingInfo: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a mask indicating which drag operations are allowed by the sender.

## Declaration

```objectivec
- (NSUInteger) webView:(WebView *) webView dragDestinationActionMaskForDraggingInfo:(id<NSDraggingInfo>) draggingInfo;
```

## Parameters

- `webView`: The web view that sent the message.
- `draggingInfo`: The information object for the dragging operation.

<a id="return-value"></a>

## Return Value

A mask that indicates which drag operations are allowed when content is dragged over the sending web view. (Note that the return value changed from an `unsigned int` to an `NSUInteger` in OS X v10.5.) See [WebDragDestinationAction](../webdragdestinationaction.md) for a list of return values.

<a id="Discussion"></a>

## Discussion

This method can be invoked multiple times while content is dragged over the sending web view. When the content is dropped, the web view sends a notification ([webView:willPerformDragDestinationAction:forDraggingInfo:](webview%28__willperform_for_%29.md)) to the receiver.

If you do not implement this method, it returns [WebDragDestinationActionAny](../webdragdestinationaction/any.md) by default.

## See Also

### Controlling Drag Behavior

- [webView:dragSourceActionMaskForPoint:](webview%28__dragsourceactionmaskfor_%29.md): Deprecated. Returns a mask indicating which drag-source actions are allowed for a drag that begins at the specified location.
- [webView:willPerformDragDestinationAction:forDraggingInfo:](webview%28__willperform_for_%29.md): Deprecated. Tells the receiver that the sending web view will perform the specified drag-destination action.
- [webView:willPerformDragSourceAction:fromPoint:withPasteboard:](webview%28__willperform_from_with_%29.md): Deprecated. Tells the receiver that the sending web view will perform the specified drag-source action.
