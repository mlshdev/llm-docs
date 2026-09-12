> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkcanvasviewdrawingpolicy](https://developer.apple.com/documentation/pencilkit/pkcanvasviewdrawingpolicy)

# PKCanvasViewDrawingPolicy (Swift)

**Framework:** PencilKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Constants that you use to specify the type of drawing gestures your app permits while the user draws on the canvas.

## Declaration

```swift
enum PKCanvasViewDrawingPolicy
```

## Topics

### Drawing policies

- [PKCanvasViewDrawingPolicy.default](pkcanvasviewdrawingpolicy/default.md): The default input type to use for drawing on a canvas.
- [PKCanvasViewDrawingPolicy.anyInput](pkcanvasviewdrawingpolicy/anyinput.md): Allows drawing on the canvas from any input source.
- [PKCanvasViewDrawingPolicy.pencilOnly](pkcanvasviewdrawingpolicy/pencilonly.md): Pencil touches are the only input that draw on the canvas.

### Initializers

- [init(rawValue:)](pkcanvasviewdrawingpolicy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the drawing environment

- [tool](pkcanvasview/tool-1kj57.md): The currently selected tool used for drawing.
- [isRulerActive](pkcanvasview/isruleractive.md): A Boolean value that indicates whether a ruler view is visible on the canvas.
- [allowsFingerDrawing](pkcanvasview/allowsfingerdrawing.md): Deprecated. A Boolean value that indicates whether the canvas accepts input from the user’s finger in addition to Apple Pencil.
- [drawingPolicy](pkcanvasview/drawingpolicy.md): The policy that controls the types of touches allowed when drawing on the canvas.

# PKCanvasViewDrawingPolicy (Objective-C)

**Framework:** PencilKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Constants that you use to specify the type of drawing gestures your app permits while the user draws on the canvas.

## Declaration

```objectivec
enum PKCanvasViewDrawingPolicy : NSUInteger;
```

## Topics

### Drawing policies

- [PKCanvasViewDrawingPolicyDefault](pkcanvasviewdrawingpolicy/default.md): The default input type to use for drawing on a canvas.
- [PKCanvasViewDrawingPolicyAnyInput](pkcanvasviewdrawingpolicy/anyinput.md): Allows drawing on the canvas from any input source.
- [PKCanvasViewDrawingPolicyPencilOnly](pkcanvasviewdrawingpolicy/pencilonly.md): Pencil touches are the only input that draw on the canvas.

## See Also

### Configuring the drawing environment

- [tool](pkcanvasview/tool-6str6.md): The currently selected tool used for drawing.
- [rulerActive](pkcanvasview/isruleractive.md): A Boolean value that indicates whether a ruler view is visible on the canvas.
- [allowsFingerDrawing](pkcanvasview/allowsfingerdrawing.md): Deprecated. A Boolean value that indicates whether the canvas accepts input from the user’s finger in addition to Apple Pencil.
- [drawingPolicy](pkcanvasview/drawingpolicy.md): The policy that controls the types of touches allowed when drawing on the canvas.
