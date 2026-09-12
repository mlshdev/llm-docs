> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontrollerdelegate/previewcontroller(_:framefor:insourceview:)](https://developer.apple.com/documentation/quicklook/qlpreviewcontrollerdelegate/previewcontroller(_:framefor:insourceview:))

# previewController(\_:frameFor:inSourceView:) (Swift)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a zoom effect.

## Declaration

```swift
optional func previewController(_ controller: QLPreviewController, frameFor item: any QLPreviewItem, inSourceView view: AutoreleasingUnsafeMutablePointer<UIView?>) -> CGRect
```

## Parameters

- `controller`: The [QLPreviewController](../qlpreviewcontroller.md) that’s requesting the frame for the preview item.
- `item`: The item to preview or dismiss.
- `view`: The [UIView](https://developer.apple.com/library/archive/releasenotes/iPhone/RN-iPhoneSDK/index.html#//apple_ref/doc/uid/TP40007428-CH1-SW18) object that contains the preview item as you display it in your app.

  By providing a view object to the `view` parameter, you indicate to the [QLPreviewController](../qlpreviewcontroller.md) that you’re specifying the returned [CGRect](../../corefoundation/cgrect.md) object’s origin point relative to that view.

  Provide `nil` in this parameter to indicate that you’re specifying the [CGRect](../../corefoundation/cgrect.md) origin point in screen coordinates.

<a id="return-value"></a>

## Return Value

A [CGRect](../../corefoundation/cgrect.md) object defining the frame rectangle for the preview item as it appears in your app.

<a id="Discussion"></a>

## Discussion

Use this delegate method to configure a zoom animation for presenting and dismissing a preview. The zoom proceeds between your own representation of the item and full screen.

> **Note**

>  Starting with macOS 11, animated transitions are available for Mac apps built with Mac Catalyst. On Mac computers running a version earlier than macOS 11, the system doesn’t call this delegate method.

The system only invokes this method when your app uses the animation option for presentation or dismissal. Specifically, the following statements result in invocation of this method:

```objc
[parentController presentModaViewController: myPreviewController animated: YES];
 // ...
[parentController dismissModalViewControllerAnimated: YES];
```

If you use Boolean [false](https://developer.apple.com/documentation/swift/false) in these statements, the [QLPreviewController](../qlpreviewcontroller.md) displays the preview full screen immediately, with no transition effect.

The preview item, and its origin point, can change while displaying a preview. For example, the user may navigate to a different item using the controller, or may rotate the device. Return the correct origin point when zooming to full screen, and when zooming back to your representation of the item.

> **Note**

>  Zoom animation is most effective on large-screen devices. On iPhone and iPod touch, use a [UINavigationController](../../uikit/uinavigationcontroller.md) object to push the [QLPreviewController](../qlpreviewcontroller.md) into view. When using a navigation controller to push a preview, the system doesn’t invoke this method.

To produce a zoom animation, return a [CGRect](../../corefoundation/cgrect.md) object that represents the frame for the preview item as it appears in your app. Use coordinates relative to the [UIView](../../uikit/uiview.md) object that contains the item, and specify that view in the `view` parameter.

Alternatively, you can use screen coordinates for the returned [CGRect](../../corefoundation/cgrect.md) object. In this case, you need to specify [nil](../../objectivec/nil-227m0.md) in the `view` parameter.

To produce a full-screen fade animation rather than a zoom, return a value of [CGRectZero](../../coregraphics/cgrectzero.md), or don’t implement this method.

## See Also

### Responding to preview requests

- [previewController(\_:transitionImageFor:contentRect:)](previewcontroller%28__transitionimagefor_contentrect_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.
- [previewController(\_:transitionViewFor:)](previewcontroller%28__transitionviewfor_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.
- [previewControllerWillDismiss(\_:)](previewcontrollerwilldismiss%28__%29.md): Tells the delegate that the preview is about to close.
- [previewControllerDidDismiss(\_:)](previewcontrollerdiddismiss%28__%29.md): Tells the delegate that the preview was closed.

# previewController:frameForPreviewItem:inSourceView: (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a zoom effect.

## Declaration

```objectivec
- (CGRect) previewController:(QLPreviewController *) controller frameForPreviewItem:(id<QLPreviewItem>) item inSourceView:(UIView **) view;
```

## Parameters

- `controller`: The [QLPreviewController](../qlpreviewcontroller.md) that’s requesting the frame for the preview item.
- `item`: The item to preview or dismiss.
- `view`: The [UIView](https://developer.apple.com/library/archive/releasenotes/iPhone/RN-iPhoneSDK/index.html#//apple_ref/doc/uid/TP40007428-CH1-SW18) object that contains the preview item as you display it in your app.

  By providing a view object to the `view` parameter, you indicate to the [QLPreviewController](../qlpreviewcontroller.md) that you’re specifying the returned [CGRect](../../corefoundation/cgrect.md) object’s origin point relative to that view.

  Provide `nil` in this parameter to indicate that you’re specifying the [CGRect](../../corefoundation/cgrect.md) origin point in screen coordinates.

<a id="return-value"></a>

## Return Value

A [CGRect](../../corefoundation/cgrect.md) object defining the frame rectangle for the preview item as it appears in your app.

<a id="Discussion"></a>

## Discussion

Use this delegate method to configure a zoom animation for presenting and dismissing a preview. The zoom proceeds between your own representation of the item and full screen.

> **Note**

>  Starting with macOS 11, animated transitions are available for Mac apps built with Mac Catalyst. On Mac computers running a version earlier than macOS 11, the system doesn’t call this delegate method.

The system only invokes this method when your app uses the animation option for presentation or dismissal. Specifically, the following statements result in invocation of this method:

```objc
[parentController presentModaViewController: myPreviewController animated: YES];
 // ...
[parentController dismissModalViewControllerAnimated: YES];
```

If you use Boolean [false](https://developer.apple.com/documentation/swift/false) in these statements, the [QLPreviewController](../qlpreviewcontroller.md) displays the preview full screen immediately, with no transition effect.

The preview item, and its origin point, can change while displaying a preview. For example, the user may navigate to a different item using the controller, or may rotate the device. Return the correct origin point when zooming to full screen, and when zooming back to your representation of the item.

> **Note**

>  Zoom animation is most effective on large-screen devices. On iPhone and iPod touch, use a [UINavigationController](../../uikit/uinavigationcontroller.md) object to push the [QLPreviewController](../qlpreviewcontroller.md) into view. When using a navigation controller to push a preview, the system doesn’t invoke this method.

To produce a zoom animation, return a [CGRect](../../corefoundation/cgrect.md) object that represents the frame for the preview item as it appears in your app. Use coordinates relative to the [UIView](../../uikit/uiview.md) object that contains the item, and specify that view in the `view` parameter.

Alternatively, you can use screen coordinates for the returned [CGRect](../../corefoundation/cgrect.md) object. In this case, you need to specify [nil](../../objectivec/nil-227m0.md) in the `view` parameter.

To produce a full-screen fade animation rather than a zoom, return a value of [CGRectZero](../../coregraphics/cgrectzero.md), or don’t implement this method.

## See Also

### Responding to preview requests

- [previewController:transitionImageForPreviewItem:contentRect:](previewcontroller%28__transitionimagefor_contentrect_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.
- [previewController:transitionViewForPreviewItem:](previewcontroller%28__transitionviewfor_%29.md): Tells the delegate that the system is about to present the preview full screen or dismiss it, and asks for information to provide a smooth transition when zooming.
- [previewControllerWillDismiss:](previewcontrollerwilldismiss%28__%29.md): Tells the delegate that the preview is about to close.
- [previewControllerDidDismiss:](previewcontrollerdiddismiss%28__%29.md): Tells the delegate that the preview was closed.
