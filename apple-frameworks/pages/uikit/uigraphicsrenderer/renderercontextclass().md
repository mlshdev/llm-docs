> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrenderer/renderercontextclass()](https://developer.apple.com/documentation/uikit/uigraphicsrenderer/renderercontextclass())

# rendererContextClass() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Specifies the drawing context class used by this graphics renderer.

## Declaration

```swift
class func rendererContextClass() -> AnyClass
```

<a id="return-value"></a>

## Return Value

A subclass of [UIGraphicsRendererContext](../uigraphicsrenderercontext.md) suitable for the current renderer.

<a id="Discussion"></a>

## Discussion

Each subclass of `UIGraphicsRenderer` can define its own subclass of [UIGraphicsRendererContext](../uigraphicsrenderercontext.md). The graphics renderer calls this method whenever it needs to create a new graphics renderer context.

Override this method to specify the context class that the graphics renderer should use.

## See Also

### Managing graphics contexts

- [context(with:)](context%28with_%29.md): Creates a Core Graphics context configured according to the supplied format object.
- [prepare(\_:with:)](prepare%28__with_%29.md): Applies the configuration specified in the renderer context to the Core Graphics context.

# rendererContextClass (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Specifies the drawing context class used by this graphics renderer.

## Declaration

```objectivec
+ (Class) rendererContextClass;
```

<a id="return-value"></a>

## Return Value

A subclass of [UIGraphicsRendererContext](../uigraphicsrenderercontext.md) suitable for the current renderer.

<a id="Discussion"></a>

## Discussion

Each subclass of `UIGraphicsRenderer` can define its own subclass of [UIGraphicsRendererContext](../uigraphicsrenderercontext.md). The graphics renderer calls this method whenever it needs to create a new graphics renderer context.

Override this method to specify the context class that the graphics renderer should use.

## See Also

### Managing graphics contexts

- [contextWithFormat:](context%28with_%29.md): Creates a Core Graphics context configured according to the supplied format object.
- [prepareCGContext:withRendererContext:](prepare%28__with_%29.md): Applies the configuration specified in the renderer context to the Core Graphics context.
