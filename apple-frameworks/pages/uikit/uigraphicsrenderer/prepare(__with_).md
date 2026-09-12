> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrenderer/prepare(_:with:)](https://developer.apple.com/documentation/uikit/uigraphicsrenderer/prepare(_:with:))

# prepare(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Applies the configuration specified in the renderer context to the Core Graphics context.

## Declaration

```swift
class func prepare(_ context: CGContext, with rendererContext: UIGraphicsRendererContext)
```

## Parameters

- `context`: The Core Graphics context that the graphics renderer performs drawing actions on.
- `rendererContext`: The renderer context object that is provided to the [runDrawingActions(\_:completionActions:)](rundrawingactions%28__completionactions_%29.md) method. This object is of the type returned by the [rendererContextClass()](renderercontextclass%28%29.md) static method.

<a id="Discussion"></a>

## Discussion

The graphics renderer calls this method when the [runDrawingActions(\_:completionActions:)](rundrawingactions%28__completionactions_%29.md) method is invoked. Override this method in a subclass to configure the underlying Core Graphics context before the renderer begins renderering.

Core Graphics contexts are reused for repeated calls to the [runDrawingActions(\_:completionActions:)](rundrawingactions%28__completionactions_%29.md) method. Therefore, be sure to clean up the context to make it ready for reuse.

## See Also

### Managing graphics contexts

- [context(with:)](context%28with_%29.md): Creates a Core Graphics context configured according to the supplied format object.
- [rendererContextClass()](renderercontextclass%28%29.md): Specifies the drawing context class used by this graphics renderer.

# prepareCGContext:withRendererContext: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Applies the configuration specified in the renderer context to the Core Graphics context.

## Declaration

```objectivec
+ (void) prepareCGContext:(CGContextRef) context withRendererContext:(UIGraphicsRendererContext *) rendererContext;
```

## Parameters

- `context`: The Core Graphics context that the graphics renderer performs drawing actions on.
- `rendererContext`: The renderer context object that is provided to the [runDrawingActions:completionActions:error:](rundrawingactions%28__completionactions_%29.md) method. This object is of the type returned by the [rendererContextClass](renderercontextclass%28%29.md) static method.

<a id="Discussion"></a>

## Discussion

The graphics renderer calls this method when the [runDrawingActions:completionActions:error:](rundrawingactions%28__completionactions_%29.md) method is invoked. Override this method in a subclass to configure the underlying Core Graphics context before the renderer begins renderering.

Core Graphics contexts are reused for repeated calls to the [runDrawingActions:completionActions:error:](rundrawingactions%28__completionactions_%29.md) method. Therefore, be sure to clean up the context to make it ready for reuse.

## See Also

### Managing graphics contexts

- [contextWithFormat:](context%28with_%29.md): Creates a Core Graphics context configured according to the supplied format object.
- [rendererContextClass](renderercontextclass%28%29.md): Specifies the drawing context class used by this graphics renderer.
