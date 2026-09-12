> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrenderer/context(with:)](https://developer.apple.com/documentation/uikit/uigraphicsrenderer/context(with:))

# context(with:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a Core Graphics context configured according to the supplied format object.

## Declaration

```swift
class func context(with format: UIGraphicsRendererFormat) -> CGContext?
```

## Parameters

- `format`: The format object that was either supplied to or created by the graphics renderer at initialization time.

<a id="return-value"></a>

## Return Value

A Core Graphics context configured to represent the attributes in the format object.

<a id="Discussion"></a>

## Discussion

Each time the graphics renderer needs to create a new Core Graphics context, it calls this method, providing the format object supplied at initialization time.

You must override this method when you subclass `UIGraphicsRenderer`. Use the provided [UIGraphicsRendererFormat](../uigraphicsrendererformat.md) to create and configure a [CGContext](../../coregraphics/cgcontext.md) object that is used by the renderer in the drawing routines.

## See Also

### Managing graphics contexts

- [prepare(\_:with:)](prepare%28__with_%29.md): Applies the configuration specified in the renderer context to the Core Graphics context.
- [rendererContextClass()](renderercontextclass%28%29.md): Specifies the drawing context class used by this graphics renderer.

# contextWithFormat: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a Core Graphics context configured according to the supplied format object.

## Declaration

```objectivec
+ (CGContextRef) contextWithFormat:(UIGraphicsRendererFormat *) format;
```

## Parameters

- `format`: The format object that was either supplied to or created by the graphics renderer at initialization time.

<a id="return-value"></a>

## Return Value

A Core Graphics context configured to represent the attributes in the format object.

<a id="Discussion"></a>

## Discussion

Each time the graphics renderer needs to create a new Core Graphics context, it calls this method, providing the format object supplied at initialization time.

You must override this method when you subclass `UIGraphicsRenderer`. Use the provided [UIGraphicsRendererFormat](../uigraphicsrendererformat.md) to create and configure a [CGContextRef](../../coregraphics/cgcontext.md) object that is used by the renderer in the drawing routines.

## See Also

### Managing graphics contexts

- [prepareCGContext:withRendererContext:](prepare%28__with_%29.md): Applies the configuration specified in the renderer context to the Core Graphics context.
- [rendererContextClass](renderercontextclass%28%29.md): Specifies the drawing context class used by this graphics renderer.
