> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontrollerdelegate/previewcontroller(_:transitionviewfor:)](https://developer.apple.com/documentation/quicklook/qlpreviewcontrollerdelegate/previewcontroller(_:transitionviewfor:))

# previewController(\_:transitionViewFor:) (Swift)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.

## Declaration

```swift
optional func previewController(_ controller: QLPreviewController, transitionViewFor item: any QLPreviewItem) -> UIView?
```

## Parameters

- `controller`: The [QLPreviewController](../qlpreviewcontroller.md) that’s requesting the view for the preview item.
- `item`: The item to preview or dismiss.

<a id="return-value"></a>

## Return Value

A [UIView](../../uikit/uiview.md) object that the preview controller cross-fades with when zooming.

<a id="Discussion"></a>

## Discussion

Starting with macOS 11, animated transitions are available for Mac apps built with Mac Catalyst. On Mac computers running a version earlier than macOS 11, the system doesn’t call this delegate method.

## See Also

### Responding to preview requests

- [previewController(\_:frameFor:inSourceView:)](previewcontroller%28__framefor_insourceview_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a zoom effect.
- [previewController(\_:transitionImageFor:contentRect:)](previewcontroller%28__transitionimagefor_contentrect_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.
- [previewControllerWillDismiss(\_:)](previewcontrollerwilldismiss%28__%29.md): Tells the delegate that the preview is about to close.
- [previewControllerDidDismiss(\_:)](previewcontrollerdiddismiss%28__%29.md): Tells the delegate that the preview was closed.

# previewController:transitionViewForPreviewItem: (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.

## Declaration

```objectivec
- (UIView *) previewController:(QLPreviewController *) controller transitionViewForPreviewItem:(id<QLPreviewItem>) item;
```

## Parameters

- `controller`: The [QLPreviewController](../qlpreviewcontroller.md) that’s requesting the view for the preview item.
- `item`: The item to preview or dismiss.

<a id="return-value"></a>

## Return Value

A [UIView](../../uikit/uiview.md) object that the preview controller cross-fades with when zooming.

<a id="Discussion"></a>

## Discussion

Starting with macOS 11, animated transitions are available for Mac apps built with Mac Catalyst. On Mac computers running a version earlier than macOS 11, the system doesn’t call this delegate method.

## See Also

### Responding to preview requests

- [previewController:frameForPreviewItem:inSourceView:](previewcontroller%28__framefor_insourceview_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a zoom effect.
- [previewController:transitionImageForPreviewItem:contentRect:](previewcontroller%28__transitionimagefor_contentrect_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.
- [previewControllerWillDismiss:](previewcontrollerwilldismiss%28__%29.md): Tells the delegate that the preview is about to close.
- [previewControllerDidDismiss:](previewcontrollerdiddismiss%28__%29.md): Tells the delegate that the preview was closed.
