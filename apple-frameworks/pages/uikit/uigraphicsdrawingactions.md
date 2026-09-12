> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsdrawingactions](https://developer.apple.com/documentation/uikit/uigraphicsdrawingactions)

# UIGraphicsDrawingActions (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A closure that executes a set of drawing instructions that the renderer applies to the Core Graphics context.

## Declaration

```swift
typealias UIGraphicsDrawingActions = (UIGraphicsRendererContext) -> Void
```

<a id="Discussion"></a>

## Discussion

[UIGraphicsDrawingActions](uigraphicsdrawingactions.md) defines a block type that takes a [UIGraphicsRendererContext](uigraphicsrenderercontext.md) object as an argument and has no return value.

You provide a block of this type as an argument to the graphics drawing methods on [UIGraphicsRenderer](uigraphicsrenderer.md). Your block should use the provided renderer context to perform the drawing operations you want the renderer to execute.

## See Also

### Related Documentation

- [UIGraphicsImageRenderer.DrawingActions](uigraphicsimagerenderer/drawingactions.md): A closure for drawing an image.
- [UIGraphicsPDFRenderer.DrawingActions](uigraphicspdfrenderer/drawingactions.md): A closure for drawing PDF content.

### Running the drawing actions

- [runDrawingActions(\_:completionActions:)](uigraphicsrenderer/rundrawingactions%28__completionactions_%29.md): Performs drawing actions on a Core Graphics context that the renderer prepares.

# UIGraphicsDrawingActions (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A closure that executes a set of drawing instructions that the renderer applies to the Core Graphics context.

## Declaration

```objectivec
typedef void (^)(__kindof UIGraphicsRendererContext *) UIGraphicsDrawingActions;
```

<a id="Discussion"></a>

## Discussion

[UIGraphicsDrawingActions](uigraphicsdrawingactions.md) defines a block type that takes a [UIGraphicsRendererContext](uigraphicsrenderercontext.md) object as an argument and has no return value.

You provide a block of this type as an argument to the graphics drawing methods on [UIGraphicsRenderer](uigraphicsrenderer.md). Your block should use the provided renderer context to perform the drawing operations you want the renderer to execute.

## See Also

### Related Documentation

- [UIGraphicsImageDrawingActions](uigraphicsimagerenderer/drawingactions.md): A closure for drawing an image.
- [UIGraphicsPDFDrawingActions](uigraphicspdfrenderer/drawingactions.md): A closure for drawing PDF content.

### Running the drawing actions

- [runDrawingActions:completionActions:error:](uigraphicsrenderer/rundrawingactions%28__completionactions_%29.md): Performs drawing actions on a Core Graphics context that the renderer prepares.
