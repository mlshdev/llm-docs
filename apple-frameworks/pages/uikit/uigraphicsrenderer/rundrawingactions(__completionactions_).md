> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrenderer/rundrawingactions(_:completionactions:)](https://developer.apple.com/documentation/uikit/uigraphicsrenderer/rundrawingactions(_:completionactions:))

# runDrawingActions(\_:completionActions:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Performs drawing actions on a Core Graphics context that the renderer prepares.

## Declaration

```swift
func runDrawingActions(_ drawingActions: (UIGraphicsRendererContext) -> Void, completionActions: ((UIGraphicsRendererContext) -> Void)? = nil) throws
```

## Parameters

- `drawingActions`: A [UIGraphicsDrawingActions](../uigraphicsdrawingactions.md) block that represents a set of drawing instructions that the renderer applies to the Core Graphics context.
- `completionActions`: A [UIGraphicsDrawingActions](../uigraphicsdrawingactions.md) block that the renderer calls after executing the `drawingActions` block.

<a id="Discussion"></a>

## Discussion

This method invokes the `drawingActions` block in a Core Graphics context. This context was created by the [context(with:)](context%28with_%29.md) method, captured in an instance of the class returned by the [rendererContextClass()](renderercontextclass%28%29.md) method, and prepared by the [prepare(\_:with:)](prepare%28__with_%29.md) method.

Do not override this method. Instead, consider invoking it from a utility method in your subclass, as the [UIGraphicsImageRenderer](../uigraphicsimagerenderer.md) and [UIGraphicsPDFRenderer](../uigraphicspdfrenderer.md) classes do.

## See Also

### Running the drawing actions

- [UIGraphicsDrawingActions](../uigraphicsdrawingactions.md): A closure that executes a set of drawing instructions that the renderer applies to the Core Graphics context.

# runDrawingActions:completionActions:error: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Performs drawing actions on a Core Graphics context that the renderer prepares.

## Declaration

```objectivec
- (BOOL) runDrawingActions:(UIGraphicsDrawingActions) drawingActions completionActions:(UIGraphicsDrawingActions) completionActions error:(NSError **) error;
```

## Parameters

- `drawingActions`: A [UIGraphicsDrawingActions](../uigraphicsdrawingactions.md) block that represents a set of drawing instructions that the renderer applies to the Core Graphics context.
- `completionActions`: A [UIGraphicsDrawingActions](../uigraphicsdrawingactions.md) block that the renderer calls after executing the `drawingActions` block.
- `error`: A pointer to an [NSError](../../foundation/nserror.md) object that is populated if there is a problem performing the drawing actions.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the drawing is performed successfully, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This method invokes the `drawingActions` block in a Core Graphics context. This context was created by the [contextWithFormat:](context%28with_%29.md) method, captured in an instance of the class returned by the [rendererContextClass](renderercontextclass%28%29.md) method, and prepared by the [prepareCGContext:withRendererContext:](prepare%28__with_%29.md) method.

Do not override this method. Instead, consider invoking it from a utility method in your subclass, as the [UIGraphicsImageRenderer](../uigraphicsimagerenderer.md) and [UIGraphicsPDFRenderer](../uigraphicspdfrenderer.md) classes do.

## See Also

### Running the drawing actions

- [UIGraphicsDrawingActions](../uigraphicsdrawingactions.md): A closure that executes a set of drawing instructions that the renderer applies to the Core Graphics context.
