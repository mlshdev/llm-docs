> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkcanvasviewdrawingpolicy/default](https://developer.apple.com/documentation/pencilkit/pkcanvasviewdrawingpolicy/default)

# PKCanvasViewDrawingPolicy.default (Swift)

**Framework:** PencilKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The default input type to use for drawing on a canvas.

## Declaration

```swift
case `default`
```

<a id="Discussion"></a>

## Discussion

By default, if the tool picker is visible, respect the pencil interaction setting of the [prefersPencilOnlyDrawing](../../uikit/uipencilinteraction/preferspencilonlydrawing.md) property; otherwise only accept input from Apple Pencil.

## See Also

### Drawing policies

- [PKCanvasViewDrawingPolicy.anyInput](anyinput.md): Allows drawing on the canvas from any input source.
- [PKCanvasViewDrawingPolicy.pencilOnly](pencilonly.md): Pencil touches are the only input that draw on the canvas.

# PKCanvasViewDrawingPolicyDefault (Objective-C)

**Framework:** PencilKit  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The default input type to use for drawing on a canvas.

## Declaration

```objectivec
PKCanvasViewDrawingPolicyDefault
```

<a id="Discussion"></a>

## Discussion

By default, if the tool picker is visible, respect the pencil interaction setting of the [prefersPencilOnlyDrawing](../../uikit/uipencilinteraction/preferspencilonlydrawing.md) property; otherwise only accept input from Apple Pencil.

## See Also

### Drawing policies

- [PKCanvasViewDrawingPolicyAnyInput](anyinput.md): Allows drawing on the canvas from any input source.
- [PKCanvasViewDrawingPolicyPencilOnly](pencilonly.md): Pencil touches are the only input that draw on the canvas.
