> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontrollerdelegate/previewcontroller(_:transitionimagefor:contentrect:)](https://developer.apple.com/documentation/quicklook/qlpreviewcontrollerdelegate/previewcontroller(_:transitionimagefor:contentrect:))

# previewController(\_:transitionImageFor:contentRect:) (Swift)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.

## Declaration

```swift
optional func previewController(_ controller: QLPreviewController, transitionImageFor item: any QLPreviewItem, contentRect: UnsafeMutablePointer<CGRect>) -> UIImage?
```

## Parameters

- `controller`: The [QLPreviewController](../qlpreviewcontroller.md) that’s requesting the image for the preview item.
- `item`: The item to preview or dismiss.
- `contentRect`: The rectangle within the image that represents the document content. For icons, for example, the document content rectangle is typically smaller than the icon rectangle itself.

<a id="return-value"></a>

## Return Value

A [UIImage](../../uikit/uiimage.md) object that the preview controller cross-fades with when zooming.

<a id="discussion"></a>

## Discussion

> **Note**

>  Starting with macOS 11, animated transitions are available for Mac apps built with Mac Catalyst. On Mac computers running a version earlier than macOS 11, the system doesn’t call this delegate method.

## See Also

### Responding to preview requests

- [previewController(\_:frameFor:inSourceView:)](previewcontroller%28__framefor_insourceview_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a zoom effect.
- [previewController(\_:transitionViewFor:)](previewcontroller%28__transitionviewfor_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.
- [previewControllerWillDismiss(\_:)](previewcontrollerwilldismiss%28__%29.md): Tells the delegate that the preview is about to close.
- [previewControllerDidDismiss(\_:)](previewcontrollerdiddismiss%28__%29.md): Tells the delegate that the preview was closed.

# previewController:transitionImageForPreviewItem:contentRect: (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.

## Declaration

```objectivec
- (UIImage *) previewController:(QLPreviewController *) controller transitionImageForPreviewItem:(id<QLPreviewItem>) item contentRect:(CGRect *) contentRect;
```

## Parameters

- `controller`: The [QLPreviewController](../qlpreviewcontroller.md) that’s requesting the image for the preview item.
- `item`: The item to preview or dismiss.
- `contentRect`: The rectangle within the image that represents the document content. For icons, for example, the document content rectangle is typically smaller than the icon rectangle itself.

<a id="return-value"></a>

## Return Value

A [UIImage](../../uikit/uiimage.md) object that the preview controller cross-fades with when zooming.

<a id="discussion"></a>

## Discussion

> **Note**

>  Starting with macOS 11, animated transitions are available for Mac apps built with Mac Catalyst. On Mac computers running a version earlier than macOS 11, the system doesn’t call this delegate method.

## See Also

### Responding to preview requests

- [previewController:frameForPreviewItem:inSourceView:](previewcontroller%28__framefor_insourceview_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a zoom effect.
- [previewController:transitionViewForPreviewItem:](previewcontroller%28__transitionviewfor_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.
- [previewControllerWillDismiss:](previewcontrollerwilldismiss%28__%29.md): Tells the delegate that the preview is about to close.
- [previewControllerDidDismiss:](previewcontrollerdiddismiss%28__%29.md): Tells the delegate that the preview was closed.
