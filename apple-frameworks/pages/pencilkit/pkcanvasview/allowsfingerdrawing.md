> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkcanvasview/allowsfingerdrawing](https://developer.apple.com/documentation/pencilkit/pkcanvasview/allowsfingerdrawing)

# allowsFingerDrawing (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that indicates whether the canvas accepts input from the user’s finger in addition to Apple Pencil.

> Use [drawingPolicy](drawingpolicy.md) instead.

## Declaration

```swift
var allowsFingerDrawing: Bool { get set }
```

## See Also

### Configuring the drawing environment

- [tool](tool-1kj57.md): The currently selected tool used for drawing.
- [isRulerActive](isruleractive.md): A Boolean value that indicates whether a ruler view is visible on the canvas.
- [drawingPolicy](drawingpolicy.md): The policy that controls the types of touches allowed when drawing on the canvas.
- [PKCanvasViewDrawingPolicy](../pkcanvasviewdrawingpolicy.md): Constants that you use to specify the type of drawing gestures your app permits while the user draws on the canvas.

# allowsFingerDrawing (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that indicates whether the canvas accepts input from the user’s finger in addition to Apple Pencil.

> Use [drawingPolicy](drawingpolicy.md) instead.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsFingerDrawing;
```

## See Also

### Configuring the drawing environment

- [tool](tool-6str6.md): The currently selected tool used for drawing.
- [rulerActive](isruleractive.md): A Boolean value that indicates whether a ruler view is visible on the canvas.
- [drawingPolicy](drawingpolicy.md): The policy that controls the types of touches allowed when drawing on the canvas.
- [PKCanvasViewDrawingPolicy](../pkcanvasviewdrawingpolicy.md): Constants that you use to specify the type of drawing gestures your app permits while the user draws on the canvas.
