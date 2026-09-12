> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontrollerdelegate/previewcontrollerwilldismiss(_:)](https://developer.apple.com/documentation/quicklook/qlpreviewcontrollerdelegate/previewcontrollerwilldismiss(_:))

# previewControllerWillDismiss(\_:) (Swift)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the preview is about to close.

## Declaration

```swift
optional func previewControllerWillDismiss(_ controller: QLPreviewController)
```

## Parameters

- `controller`: The [QLPreviewController](../qlpreviewcontroller.md) that’s about to close.

## See Also

### Responding to preview requests

- [previewController(\_:frameFor:inSourceView:)](previewcontroller%28__framefor_insourceview_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a zoom effect.
- [previewController(\_:transitionImageFor:contentRect:)](previewcontroller%28__transitionimagefor_contentrect_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.
- [previewController(\_:transitionViewFor:)](previewcontroller%28__transitionviewfor_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.
- [previewControllerDidDismiss(\_:)](previewcontrollerdiddismiss%28__%29.md): Tells the delegate that the preview was closed.

# previewControllerWillDismiss: (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Tells the delegate that the preview is about to close.

## Declaration

```objectivec
- (void) previewControllerWillDismiss:(QLPreviewController *) controller;
```

## Parameters

- `controller`: The [QLPreviewController](../qlpreviewcontroller.md) that’s about to close.

## See Also

### Responding to preview requests

- [previewController:frameForPreviewItem:inSourceView:](previewcontroller%28__framefor_insourceview_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a zoom effect.
- [previewController:transitionImageForPreviewItem:contentRect:](previewcontroller%28__transitionimagefor_contentrect_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.
- [previewController:transitionViewForPreviewItem:](previewcontroller%28__transitionviewfor_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.
- [previewControllerDidDismiss:](previewcontrollerdiddismiss%28__%29.md): Tells the delegate that the preview was closed.
