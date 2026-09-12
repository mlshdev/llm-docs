> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkcanvasview/drawingpolicy](https://developer.apple.com/documentation/pencilkit/pkcanvasview/drawingpolicy)

# drawingPolicy (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The policy that controls the types of touches allowed when drawing on the canvas.

## Declaration

```swift
var drawingPolicy: PKCanvasViewDrawingPolicy { get set }
```

## See Also

### Configuring the drawing environment

- [tool](tool-1kj57.md): The currently selected tool used for drawing.
- [isRulerActive](isruleractive.md): A Boolean value that indicates whether a ruler view is visible on the canvas.
- [allowsFingerDrawing](allowsfingerdrawing.md): Deprecated. A Boolean value that indicates whether the canvas accepts input from the user’s finger in addition to Apple Pencil.
- [PKCanvasViewDrawingPolicy](../pkcanvasviewdrawingpolicy.md): Constants that you use to specify the type of drawing gestures your app permits while the user draws on the canvas.

# drawingPolicy (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The policy that controls the types of touches allowed when drawing on the canvas.

## Declaration

```objectivec
@property (nonatomic, assign) PKCanvasViewDrawingPolicy drawingPolicy;
```

## See Also

### Configuring the drawing environment

- [tool](tool-6str6.md): The currently selected tool used for drawing.
- [rulerActive](isruleractive.md): A Boolean value that indicates whether a ruler view is visible on the canvas.
- [allowsFingerDrawing](allowsfingerdrawing.md): Deprecated. A Boolean value that indicates whether the canvas accepts input from the user’s finger in addition to Apple Pencil.
- [PKCanvasViewDrawingPolicy](../pkcanvasviewdrawingpolicy.md): Constants that you use to specify the type of drawing gestures your app permits while the user draws on the canvas.
