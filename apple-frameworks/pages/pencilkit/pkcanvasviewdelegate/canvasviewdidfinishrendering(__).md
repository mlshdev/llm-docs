> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkcanvasviewdelegate/canvasviewdidfinishrendering(_:)](https://developer.apple.com/documentation/pencilkit/pkcanvasviewdelegate/canvasviewdidfinishrendering(_:))

# canvasViewDidFinishRendering(\_:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the previously drawn content is ready to display.

## Declaration

```swift
optional func canvasViewDidFinishRendering(_ canvasView: PKCanvasView)
```

## Parameters

- `canvasView`: The canvas view whose contents changed.

<a id="Discussion"></a>

## Discussion

The [PKCanvasView](../pkcanvasview.md) object calls this method when you assign a new drawing to its [drawing](../pkcanvasview/drawing.md) property, when the user zooms in on the canvas, or when the canvas scrolls.

## See Also

### Responding to drawing-related changes

- [canvasViewDrawingDidChange(\_:)](canvasviewdrawingdidchange%28__%29.md): Tells the delegate that the contents of the current drawing changed.

# canvasViewDidFinishRendering: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the previously drawn content is ready to display.

## Declaration

```objectivec
- (void) canvasViewDidFinishRendering:(PKCanvasView *) canvasView;
```

## Parameters

- `canvasView`: The canvas view whose contents changed.

<a id="Discussion"></a>

## Discussion

The [PKCanvasView](../pkcanvasview.md) object calls this method when you assign a new drawing to its [drawing](../pkcanvasview/drawing.md) property, when the user zooms in on the canvas, or when the canvas scrolls.

## See Also

### Responding to drawing-related changes

- [canvasViewDrawingDidChange:](canvasviewdrawingdidchange%28__%29.md): Tells the delegate that the contents of the current drawing changed.
