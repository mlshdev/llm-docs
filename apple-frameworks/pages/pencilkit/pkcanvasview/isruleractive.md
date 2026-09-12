> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkcanvasview/isruleractive](https://developer.apple.com/documentation/pencilkit/pkcanvasview/isruleractive)

# isRulerActive (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether a ruler view is visible on the canvas.

## Declaration

```swift
var isRulerActive: Bool { get set }
```

## See Also

### Configuring the drawing environment

- [tool](tool-1kj57.md): The currently selected tool used for drawing.
- [allowsFingerDrawing](allowsfingerdrawing.md): Deprecated. A Boolean value that indicates whether the canvas accepts input from the user’s finger in addition to Apple Pencil.
- [drawingPolicy](drawingpolicy.md): The policy that controls the types of touches allowed when drawing on the canvas.
- [PKCanvasViewDrawingPolicy](../pkcanvasviewdrawingpolicy.md): Constants that you use to specify the type of drawing gestures your app permits while the user draws on the canvas.

# rulerActive (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether a ruler view is visible on the canvas.

## Declaration

```objectivec
@property (nonatomic, getter=isRulerActive) BOOL rulerActive;
```

## See Also

### Configuring the drawing environment

- [tool](tool-6str6.md): The currently selected tool used for drawing.
- [allowsFingerDrawing](allowsfingerdrawing.md): Deprecated. A Boolean value that indicates whether the canvas accepts input from the user’s finger in addition to Apple Pencil.
- [drawingPolicy](drawingpolicy.md): The policy that controls the types of touches allowed when drawing on the canvas.
- [PKCanvasViewDrawingPolicy](../pkcanvasviewdrawingpolicy.md): Constants that you use to specify the type of drawing gestures your app permits while the user draws on the canvas.
