> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerrectforpreview(_:)](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontrollerrectforpreview(_:))

# documentInteractionControllerRectForPreview(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller needs the rectangle to use as the starting point for animating the display of a document preview.

## Declaration

```swift
optional func documentInteractionControllerRectForPreview(_ controller: UIDocumentInteractionController) -> CGRect
```

## Parameters

- `controller`: The document interaction controller requesting the starting rectangle.

<a id="return-value"></a>

## Return Value

A rectangle in the coordinate system of the view returned by the [documentInteractionControllerViewForPreview(\_:)](documentinteractioncontrollerviewforpreview%28__%29.md) method.

<a id="Discussion"></a>

## Discussion

If you do not implement the [documentInteractionControllerViewForPreview(\_:)](documentinteractioncontrollerviewforpreview%28__%29.md) method, or if you do implement it but return a `nil` value, this method is not called. If you do not implement this method, the starting rectangle is assumed to be the bounds of the view returned by the [documentInteractionControllerViewForPreview(\_:)](documentinteractioncontrollerviewforpreview%28__%29.md) method.

## See Also

### Configuring the parent view controller

- [documentInteractionControllerViewControllerForPreview(\_:)](documentinteractioncontrollerviewcontrollerforpreview%28__%29.md): Called when a document interaction controller needs a view controller for presenting a document preview.
- [documentInteractionControllerViewForPreview(\_:)](documentinteractioncontrollerviewforpreview%28__%29.md): Called when a document interaction controller needs the starting point for animating the display of a document preview.

# documentInteractionControllerRectForPreview: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when a document interaction controller needs the rectangle to use as the starting point for animating the display of a document preview.

## Declaration

```objectivec
- (CGRect) documentInteractionControllerRectForPreview:(UIDocumentInteractionController *) controller;
```

## Parameters

- `controller`: The document interaction controller requesting the starting rectangle.

<a id="return-value"></a>

## Return Value

A rectangle in the coordinate system of the view returned by the [documentInteractionControllerViewForPreview:](documentinteractioncontrollerviewforpreview%28__%29.md) method.

<a id="Discussion"></a>

## Discussion

If you do not implement the [documentInteractionControllerViewForPreview:](documentinteractioncontrollerviewforpreview%28__%29.md) method, or if you do implement it but return a `nil` value, this method is not called. If you do not implement this method, the starting rectangle is assumed to be the bounds of the view returned by the [documentInteractionControllerViewForPreview:](documentinteractioncontrollerviewforpreview%28__%29.md) method.

## See Also

### Configuring the parent view controller

- [documentInteractionControllerViewControllerForPreview:](documentinteractioncontrollerviewcontrollerforpreview%28__%29.md): Called when a document interaction controller needs a view controller for presenting a document preview.
- [documentInteractionControllerViewForPreview:](documentinteractioncontrollerviewforpreview%28__%29.md): Called when a document interaction controller needs the starting point for animating the display of a document preview.
