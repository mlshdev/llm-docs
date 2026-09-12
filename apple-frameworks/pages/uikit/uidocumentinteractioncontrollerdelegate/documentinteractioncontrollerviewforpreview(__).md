> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerviewforpreview(_:)](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerviewforpreview(_:))

# documentInteractionControllerViewForPreview(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller needs the starting point for animating the display of a document preview.

## Declaration

```swift
optional func documentInteractionControllerViewForPreview(_ controller: UIDocumentInteractionController) -> UIView?
```

## Parameters

- `controller`: The document interaction controller requesting the starting view.

<a id="return-value"></a>

## Return Value

The view to use as the starting point for the animation or `nil` if you want the document preview to fade into place.

<a id="Discussion"></a>

## Discussion

By default, the starting rectangle for the animation is set to the bounds of the returned view. To specify a different starting rectangle, you must also override the [documentInteractionControllerRectForPreview(\_:)](documentinteractioncontrollerrectforpreview%28__%29.md) method.

## See Also

### Configuring the parent view controller

- [documentInteractionControllerViewControllerForPreview(\_:)](documentinteractioncontrollerviewcontrollerforpreview%28__%29.md): Called when a document interaction controller needs a view controller for presenting a document preview.
- [documentInteractionControllerRectForPreview(\_:)](documentinteractioncontrollerrectforpreview%28__%29.md): Called when a document interaction controller needs the rectangle to use as the starting point for animating the display of a document preview.

# documentInteractionControllerViewForPreview: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller needs the starting point for animating the display of a document preview.

## Declaration

```objectivec
- (UIView *) documentInteractionControllerViewForPreview:(UIDocumentInteractionController *) controller;
```

## Parameters

- `controller`: The document interaction controller requesting the starting view.

<a id="return-value"></a>

## Return Value

The view to use as the starting point for the animation or `nil` if you want the document preview to fade into place.

<a id="Discussion"></a>

## Discussion

By default, the starting rectangle for the animation is set to the bounds of the returned view. To specify a different starting rectangle, you must also override the [documentInteractionControllerRectForPreview:](documentinteractioncontrollerrectforpreview%28__%29.md) method.

## See Also

### Configuring the parent view controller

- [documentInteractionControllerViewControllerForPreview:](documentinteractioncontrollerviewcontrollerforpreview%28__%29.md): Called when a document interaction controller needs a view controller for presenting a document preview.
- [documentInteractionControllerRectForPreview:](documentinteractioncontrollerrectforpreview%28__%29.md): Called when a document interaction controller needs the rectangle to use as the starting point for animating the display of a document preview.
