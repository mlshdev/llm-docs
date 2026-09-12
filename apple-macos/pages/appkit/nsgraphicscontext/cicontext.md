> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/cicontext](https://developer.apple.com/documentation/appkit/nsgraphicscontext/cicontext)

# ciContext (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A context for Core Image objects that you can use to render into the graphics context.

## Declaration

```swift
var ciContext: CIContext? { get }
```

<a id="Discussion"></a>

## Discussion

The [CIContext](https://developer.apple.com/documentation/coreimage/cicontext) object is created on demand and remains in existence for the lifetime of its owning [NSGraphicsContext](../nsgraphicscontext.md) object. A [CIContext](https://developer.apple.com/documentation/coreimage/cicontext) object is an evaluation context for rendering a [CIImage](https://developer.apple.com/documentation/coreimage/ciimage) object through Quartz 2D or OpenGL. You use [CIContext](https://developer.apple.com/documentation/coreimage/cicontext)` `objects in conjunction with [CIFilter](https://developer.apple.com/documentation/coreimage/cifilter-swift.class), [CIImage](https://developer.apple.com/documentation/coreimage/ciimage), [CIVector](https://developer.apple.com/documentation/coreimage/civector), and [CIColor](https://developer.apple.com/documentation/coreimage/cicolor) objects to take advantage of the built-in Core Image filters when processing images.

For more on [CIContext](https://developer.apple.com/documentation/coreimage/cicontext) objects and related Core Image objects, see [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185).

# CIContext (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A context for Core Image objects that you can use to render into the graphics context.

## Declaration

```objectivec
@property (strong, readonly, nullable) CIContext * CIContext;
```

<a id="Discussion"></a>

## Discussion

The [CIContext](https://developer.apple.com/documentation/coreimage/cicontext) object is created on demand and remains in existence for the lifetime of its owning [NSGraphicsContext](../nsgraphicscontext.md) object. A [CIContext](https://developer.apple.com/documentation/coreimage/cicontext) object is an evaluation context for rendering a [CIImage](https://developer.apple.com/documentation/coreimage/ciimage) object through Quartz 2D or OpenGL. You use [CIContext](https://developer.apple.com/documentation/coreimage/cicontext)` `objects in conjunction with [CIFilter](https://developer.apple.com/documentation/coreimage/cifilter-swift.class), [CIImage](https://developer.apple.com/documentation/coreimage/ciimage), [CIVector](https://developer.apple.com/documentation/coreimage/civector), and [CIColor](https://developer.apple.com/documentation/coreimage/cicolor) objects to take advantage of the built-in Core Image filters when processing images.

For more on [CIContext](https://developer.apple.com/documentation/coreimage/cicontext) objects and related Core Image objects, see [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185).
