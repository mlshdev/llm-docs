> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontroller/presentpreview(animated:)](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontroller/presentpreview(animated:))

# presentPreview(animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Displays a full-screen preview of the target document.

## Declaration

```swift
func presentPreview(animated: Bool) -> Bool
```

## Parameters

- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the appearance of the document preview or [false](https://developer.apple.com/documentation/swift/false) to display it immediately.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this method was able to display the document preview or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

To use this method, you must first provide a delegate object that implements the [documentInteractionControllerViewControllerForPreview(\_:)](../uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerviewcontrollerforpreview%28__%29.md) method. The view controller returned by that method is used to present the document preview modally.

If your delegate implements the [documentInteractionControllerViewForPreview(\_:)](../uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerviewforpreview%28__%29.md) and [documentInteractionControllerRectForPreview(\_:)](../uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerrectforpreview%28__%29.md) methods, the view and rectangle returned by those methods is used as the starting point for the animation used to display the document preview. If the animated parameter is [true](https://developer.apple.com/documentation/swift/true) but your delegate does not implement the [documentInteractionControllerViewForPreview(\_:)](../uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerviewforpreview%28__%29.md) method (or that method returns `nil`), the document preview is animated into place using a crossfade transition.

This method displays the document preview asynchronously. The document interaction controller dismisses the document preview automatically in response to appropriate user interactions. You can also dismiss the preview programmatically using the [dismissPreview(animated:)](dismisspreview%28animated_%29.md) method.

## See Also

### Presenting and dismissing a document preview

- [dismissPreview(animated:)](dismisspreview%28animated_%29.md): Dismisses the currently active document preview.

# presentPreviewAnimated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Displays a full-screen preview of the target document.

## Declaration

```objectivec
- (BOOL) presentPreviewAnimated:(BOOL) animated;
```

## Parameters

- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the appearance of the document preview or [false](https://developer.apple.com/documentation/swift/false) to display it immediately.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this method was able to display the document preview or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

To use this method, you must first provide a delegate object that implements the [documentInteractionControllerViewControllerForPreview:](../uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerviewcontrollerforpreview%28__%29.md) method. The view controller returned by that method is used to present the document preview modally.

If your delegate implements the [documentInteractionControllerViewForPreview:](../uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerviewforpreview%28__%29.md) and [documentInteractionControllerRectForPreview:](../uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerrectforpreview%28__%29.md) methods, the view and rectangle returned by those methods is used as the starting point for the animation used to display the document preview. If the animated parameter is [true](https://developer.apple.com/documentation/swift/true) but your delegate does not implement the [documentInteractionControllerViewForPreview:](../uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerviewforpreview%28__%29.md) method (or that method returns `nil`), the document preview is animated into place using a crossfade transition.

This method displays the document preview asynchronously. The document interaction controller dismisses the document preview automatically in response to appropriate user interactions. You can also dismiss the preview programmatically using the [dismissPreviewAnimated:](dismisspreview%28animated_%29.md) method.

## See Also

### Presenting and dismissing a document preview

- [dismissPreviewAnimated:](dismisspreview%28animated_%29.md): Dismisses the currently active document preview.
