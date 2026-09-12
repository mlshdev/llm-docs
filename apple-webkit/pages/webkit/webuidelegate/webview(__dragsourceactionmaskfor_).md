> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:dragsourceactionmaskfor:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:dragsourceactionmaskfor:))

# webView(\_:dragSourceActionMaskFor:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a mask indicating which drag-source actions are allowed for a drag that begins at the specified location.

## Declaration

```swift
optional func webView(_ webView: WebView!, dragSourceActionMaskFor point: NSPoint) -> Int
```

## Parameters

- `webView`: The web view that sent the message.
- `point`: The point at which the drag began, specified in the coordinates of the web view.

<a id="return-value"></a>

## Return Value

A mask indicating which drag-source actions are allowed. (Note that the return value changed from an `unsigned int` to an `NSUInteger` in OS X v10.5.) See [WebDragSourceAction](../webdragsourceaction.md) for a list of return values.

<a id="Discussion"></a>

## Discussion

This method is called after the user has begun a drag from a point in a web view. This method can be invoked multiple times while content is dragged from the sending web view. When the content is dropped, the sender sends [webView(\_:willPerform:from:with:)](webview%28__willperform_from_with_%29.md) to the receiver.

If you do not implement this method, it returns `(WebDragSourceActionAny & ~WebDragSourceActionLink)` if the cursor is in an editable part of the web view; otherwise, it returns [any](../webdragdestinationaction/any.md).

## See Also

### Controlling Drag Behavior

- [webView(\_:dragDestinationActionMaskFor:)](webview%28__dragdestinationactionmaskfor_%29.md): Deprecated. Returns a mask indicating which drag operations are allowed by the sender.
- [webView(\_:willPerform:for:)](webview%28__willperform_for_%29.md): Deprecated. Tells the receiver that the sending web view will perform the specified drag-destination action.
- [webView(\_:willPerform:from:with:)](webview%28__willperform_from_with_%29.md): Deprecated. Tells the receiver that the sending web view will perform the specified drag-source action.

# webView:dragSourceActionMaskForPoint: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a mask indicating which drag-source actions are allowed for a drag that begins at the specified location.

## Declaration

```objectivec
- (NSUInteger) webView:(WebView *) webView dragSourceActionMaskForPoint:(NSPoint) point;
```

## Parameters

- `webView`: The web view that sent the message.
- `point`: The point at which the drag began, specified in the coordinates of the web view.

<a id="return-value"></a>

## Return Value

A mask indicating which drag-source actions are allowed. (Note that the return value changed from an `unsigned int` to an `NSUInteger` in OS X v10.5.) See [WebDragSourceAction](../webdragsourceaction.md) for a list of return values.

<a id="Discussion"></a>

## Discussion

This method is called after the user has begun a drag from a point in a web view. This method can be invoked multiple times while content is dragged from the sending web view. When the content is dropped, the sender sends [webView:willPerformDragSourceAction:fromPoint:withPasteboard:](webview%28__willperform_from_with_%29.md) to the receiver.

If you do not implement this method, it returns `(WebDragSourceActionAny & ~WebDragSourceActionLink)` if the cursor is in an editable part of the web view; otherwise, it returns [WebDragDestinationActionAny](../webdragdestinationaction/any.md).

## See Also

### Controlling Drag Behavior

- [webView:dragDestinationActionMaskForDraggingInfo:](webview%28__dragdestinationactionmaskfor_%29.md): Deprecated. Returns a mask indicating which drag operations are allowed by the sender.
- [webView:willPerformDragDestinationAction:forDraggingInfo:](webview%28__willperform_for_%29.md): Deprecated. Tells the receiver that the sending web view will perform the specified drag-destination action.
- [webView:willPerformDragSourceAction:fromPoint:withPasteboard:](webview%28__willperform_from_with_%29.md): Deprecated. Tells the receiver that the sending web view will perform the specified drag-source action.
