> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkcanvasviewdelegate](https://developer.apple.com/documentation/pencilkit/pkcanvasviewdelegate)

# PKCanvasViewDelegate (Swift)

**Framework:** PencilKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Methods for monitoring drawing related changes in a canvas view.

## Declaration

```swift
@MainActor protocol PKCanvasViewDelegate : UIScrollViewDelegate
```

<a id="overview"></a>

## Overview

Implement the methods of the [PKCanvasViewDelegate](pkcanvasviewdelegate.md) protocol to monitor drawing events in a [PKCanvasView](pkcanvasview.md) object. Specifically, determine the start- and end-of-event sequences using the currently selected tool, and determine when those events affect the drawn content.

## Topics

### Responding to drawing-related changes

- [canvasViewDrawingDidChange(\_:)](pkcanvasviewdelegate/canvasviewdrawingdidchange%28__%29.md): Tells the delegate that the contents of the current drawing changed.
- [canvasViewDidFinishRendering(\_:)](pkcanvasviewdelegate/canvasviewdidfinishrendering%28__%29.md): Tells the delegate that the previously drawn content is ready to display.

### Responding to selection changes

- [canvasViewSelectionDidChange(\_:)](pkcanvasviewdelegate/canvasviewselectiondidchange%28__%29.md): Tells the delegate that the selection changes.

### Responding to new event sequences

- [canvasViewDidBeginUsingTool(\_:)](pkcanvasviewdelegate/canvasviewdidbeginusingtool%28__%29.md): Tells the delegate that the user started a new drawing sequence with the currently selected tool.
- [canvasViewDidEndUsingTool(\_:)](pkcanvasviewdelegate/canvasviewdidendusingtool%28__%29.md): Tells the delegate that the user ended a drawing sequence with the tool they were using.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIScrollViewDelegate](../uikit/uiscrollviewdelegate.md)

## See Also

### Responding to drawing-related changes

- [delegate](pkcanvasview/delegate.md): The object you use to respond to changes in the drawn content or with the selected tool.

# PKCanvasViewDelegate (Objective-C)

**Framework:** PencilKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Methods for monitoring drawing related changes in a canvas view.

## Declaration

```objectivec
@protocol PKCanvasViewDelegate <NSObject, UIScrollViewDelegate>
```

<a id="overview"></a>

## Overview

Implement the methods of the [PKCanvasViewDelegate](pkcanvasviewdelegate.md) protocol to monitor drawing events in a [PKCanvasView](pkcanvasview.md) object. Specifically, determine the start- and end-of-event sequences using the currently selected tool, and determine when those events affect the drawn content.

## Topics

### Responding to drawing-related changes

- [canvasViewDrawingDidChange:](pkcanvasviewdelegate/canvasviewdrawingdidchange%28__%29.md): Tells the delegate that the contents of the current drawing changed.
- [canvasViewDidFinishRendering:](pkcanvasviewdelegate/canvasviewdidfinishrendering%28__%29.md): Tells the delegate that the previously drawn content is ready to display.

### Responding to selection changes

- [canvasViewSelectionDidChange:](pkcanvasviewdelegate/canvasviewselectiondidchange%28__%29.md): Tells the delegate that the selection changes.

### Responding to new event sequences

- [canvasViewDidBeginUsingTool:](pkcanvasviewdelegate/canvasviewdidbeginusingtool%28__%29.md): Tells the delegate that the user started a new drawing sequence with the currently selected tool.
- [canvasViewDidEndUsingTool:](pkcanvasviewdelegate/canvasviewdidendusingtool%28__%29.md): Tells the delegate that the user ended a drawing sequence with the tool they were using.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
- [UIScrollViewDelegate](../uikit/uiscrollviewdelegate.md)

## See Also

### Responding to drawing-related changes

- [delegate](pkcanvasview/delegate.md): The object you use to respond to changes in the drawn content or with the selected tool.
