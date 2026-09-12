> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkcanvasview/tool-6str6](https://developer.apple.com/documentation/pencilkit/pkcanvasview/tool-6str6)

# tool

**Interface language:** Objective-C

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The currently selected tool used for drawing.

## Declaration

```objectivec
@property (nonatomic, copy) PKTool * tool;
```

## See Also

### Configuring the drawing environment

- [rulerActive](isruleractive.md): A Boolean value that indicates whether a ruler view is visible on the canvas.
- [allowsFingerDrawing](allowsfingerdrawing.md): Deprecated. A Boolean value that indicates whether the canvas accepts input from the user’s finger in addition to Apple Pencil.
- [drawingPolicy](drawingpolicy.md): The policy that controls the types of touches allowed when drawing on the canvas.
- [PKCanvasViewDrawingPolicy](../pkcanvasviewdrawingpolicy.md): Constants that you use to specify the type of drawing gestures your app permits while the user draws on the canvas.
