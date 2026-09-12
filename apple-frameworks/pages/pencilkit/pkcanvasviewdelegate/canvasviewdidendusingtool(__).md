> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkcanvasviewdelegate/canvasviewdidendusingtool(_:)](https://developer.apple.com/documentation/pencilkit/pkcanvasviewdelegate/canvasviewdidendusingtool(_:))

# canvasViewDidEndUsingTool(\_:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user ended a drawing sequence with the tool they were using.

## Declaration

```swift
optional func canvasViewDidEndUsingTool(_ canvasView: PKCanvasView)
```

## Parameters

- `canvasView`: The canvas view whose contents changed.

## See Also

### Responding to new event sequences

- [canvasViewDidBeginUsingTool(\_:)](canvasviewdidbeginusingtool%28__%29.md): Tells the delegate that the user started a new drawing sequence with the currently selected tool.

# canvasViewDidEndUsingTool: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user ended a drawing sequence with the tool they were using.

## Declaration

```objectivec
- (void) canvasViewDidEndUsingTool:(PKCanvasView *) canvasView;
```

## Parameters

- `canvasView`: The canvas view whose contents changed.

## See Also

### Responding to new event sequences

- [canvasViewDidBeginUsingTool:](canvasviewdidbeginusingtool%28__%29.md): Tells the delegate that the user started a new drawing sequence with the currently selected tool.
