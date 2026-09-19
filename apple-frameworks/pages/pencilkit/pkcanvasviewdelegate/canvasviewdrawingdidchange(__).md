> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pkcanvasviewdelegate/canvasviewdrawingdidchange(_:)

# canvasViewDrawingDidChange(\_:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the contents of the current drawing changed.

## Declaration

```swift
optional func canvasViewDrawingDidChange(_ canvasView: PKCanvasView)
```

## Parameters

- `canvasView`: The canvas view whose contents changed.

## See Also

### Responding to drawing-related changes

- [canvasViewDidFinishRendering(\_:)](canvasviewdidfinishrendering%28__%29.md): Tells the delegate that the previously drawn content is ready to display.

# canvasViewDrawingDidChange: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the contents of the current drawing changed.

## Declaration

```objectivec
- (void) canvasViewDrawingDidChange:(PKCanvasView *) canvasView;
```

## Parameters

- `canvasView`: The canvas view whose contents changed.

## See Also

### Responding to drawing-related changes

- [canvasViewDidFinishRendering:](canvasviewdidfinishrendering%28__%29.md): Tells the delegate that the previously drawn content is ready to display.
