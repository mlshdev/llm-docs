> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrenderer](https://developer.apple.com/documentation/uikit/uigraphicsrenderer)

# UIGraphicsRenderer (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

An abstract base class for creating graphics renderers.

## Declaration

```swift
class UIGraphicsRenderer
```

<a id="overview"></a>

## Overview

Don’t use [UIGraphicsRenderer](uigraphicsrenderer.md) directly. Instead, either use one of the concrete subclasses ([UIGraphicsImageRenderer](uigraphicsimagerenderer.md) or [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md)), or create your own subclass.

Graphics renderers provide memory-efficient management of Core Graphics contexts. Core Graphics contexts represent the drawing environment and backing store for 2D Graphics. As you reuse a graphics renderer, it in turn reuses Core Graphics contexts.

<a id="Subclassing-notes"></a>

### Subclassing notes

You can’t use [UIGraphicsRenderer](uigraphicsrenderer.md) directly, but if the concrete subclasses ([UIGraphicsPDFRenderer](uigraphicspdfrenderer.md) and [UIGraphicsImageRenderer](uigraphicsimagerenderer.md)) don’t provide the functionality you require, you can create your own subclass.

Consider creating a subclass any time you need to create multiple Core Graphics contexts, each with the same dimensions and attributes, and one of the concrete subclasses ([UIGraphicsPDFRenderer](uigraphicspdfrenderer.md) or [UIGraphicsImageRenderer](uigraphicsimagerenderer.md)) doesn’t provide the functionality you require.

To create a subclass of [UIGraphicsRenderer](uigraphicsrenderer.md), first import the appropriate submodule or header, as shown in the following code.

**Swift**

```swift
import UIKit.UIGraphicsRendererSubclass
```

**Objective-C**

```objc
#import <UIKit/UIGraphicsRendererSubclass.h>
```

A graphics renderer manages a pool of Core Graphics contexts that are reused with repeated uses of the renderer. The renderer creates these [CGContext](../coregraphics/cgcontext.md) objects using the [context(with:)](uigraphicsrenderer/context%28with_%29.md) class method, and then wraps each of them in an instance of the class returned by the [rendererContextClass()](uigraphicsrenderer/renderercontextclass%28%29.md) class method. You must therefore override these two methods in your graphics renderer subclass.

To perform drawing actions on a Core Graphics context, call the [runDrawingActions(\_:completionActions:)](uigraphicsrenderer/rundrawingactions%28__completionactions_%29.md) method, providing two blocks. Both of these blocks have a [UIGraphicsRendererContext](uigraphicsrenderercontext.md) argument, providing access to a Core Graphics context.

It is recommended that you create a public method on your renderer subclass that internally wraps the [runDrawingActions(\_:completionActions:)](uigraphicsrenderer/rundrawingactions%28__completionactions_%29.md) method. This is how the rendering methods operate on the concrete subclasses, for example the [image(actions:)](uigraphicsimagerenderer/image%28actions_%29.md) method on [UIGraphicsImageRenderer](uigraphicsimagerenderer.md).

Each time the [runDrawingActions(\_:completionActions:)](uigraphicsrenderer/rundrawingactions%28__completionactions_%29.md) method is called, the renderer calls the [prepare(\_:with:)](uigraphicsrenderer/prepare%28__with_%29.md) method with the [CGContext](../coregraphics/cgcontext.md) and [UIGraphicsRendererContext](uigraphicsrenderercontext.md) as arguments. Override the [prepare(\_:with:)](uigraphicsrenderer/prepare%28__with_%29.md) method to apply the [UIGraphicsRendererContext](uigraphicsrenderercontext.md) configuration to the underlying [CGContext](../coregraphics/cgcontext.md) before the renderer invokes the drawing actions.

## Topics

### Initializing a graphics renderer

- [init(bounds:)](uigraphicsrenderer/init%28bounds_%29.md): Creates a new graphics renderer with the specified bounds and a default format.
- [init(bounds:format:)](uigraphicsrenderer/init%28bounds_format_%29.md): Creates a new graphics renderer with the given bounds and format.

### Configuring the renderer

- [allowsImageOutput](uigraphicsrenderer/allowsimageoutput.md): A Boolean value specifying whether the renderer can create output images.
- [format](uigraphicsrenderer/format.md): The format used to create the graphics renderer.

### Running the drawing actions

- [runDrawingActions(\_:completionActions:)](uigraphicsrenderer/rundrawingactions%28__completionactions_%29.md): Performs drawing actions on a Core Graphics context that the renderer prepares.
- [UIGraphicsDrawingActions](uigraphicsdrawingactions.md): A closure that executes a set of drawing instructions that the renderer applies to the Core Graphics context.

### Managing graphics contexts

- [context(with:)](uigraphicsrenderer/context%28with_%29.md): Creates a Core Graphics context configured according to the supplied format object.
- [prepare(\_:with:)](uigraphicsrenderer/prepare%28__with_%29.md): Applies the configuration specified in the renderer context to the Core Graphics context.
- [rendererContextClass()](uigraphicsrenderer/renderercontextclass%28%29.md): Specifies the drawing context class used by this graphics renderer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md)
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Graphics contexts

- [UIGraphicsRendererContext](uigraphicsrenderercontext.md): The base class for the drawing environments for graphics renderers.
- [UIGraphicsRendererFormat](uigraphicsrendererformat.md): A set of drawing attributes that represents the configuration of a graphics renderer context.
- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md): A graphics renderer for creating Core Graphics-backed images.
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.

# UIGraphicsRenderer (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

An abstract base class for creating graphics renderers.

## Declaration

```objectivec
@interface UIGraphicsRenderer : NSObject
```

<a id="overview"></a>

## Overview

Don’t use [UIGraphicsRenderer](uigraphicsrenderer.md) directly. Instead, either use one of the concrete subclasses ([UIGraphicsImageRenderer](uigraphicsimagerenderer.md) or [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md)), or create your own subclass.

Graphics renderers provide memory-efficient management of Core Graphics contexts. Core Graphics contexts represent the drawing environment and backing store for 2D Graphics. As you reuse a graphics renderer, it in turn reuses Core Graphics contexts.

<a id="Subclassing-notes"></a>

### Subclassing notes

You can’t use [UIGraphicsRenderer](uigraphicsrenderer.md) directly, but if the concrete subclasses ([UIGraphicsPDFRenderer](uigraphicspdfrenderer.md) and [UIGraphicsImageRenderer](uigraphicsimagerenderer.md)) don’t provide the functionality you require, you can create your own subclass.

Consider creating a subclass any time you need to create multiple Core Graphics contexts, each with the same dimensions and attributes, and one of the concrete subclasses ([UIGraphicsPDFRenderer](uigraphicspdfrenderer.md) or [UIGraphicsImageRenderer](uigraphicsimagerenderer.md)) doesn’t provide the functionality you require.

To create a subclass of [UIGraphicsRenderer](uigraphicsrenderer.md), first import the appropriate submodule or header, as shown in the following code.

**Swift**

```swift
import UIKit.UIGraphicsRendererSubclass
```

**Objective-C**

```objc
#import <UIKit/UIGraphicsRendererSubclass.h>
```

A graphics renderer manages a pool of Core Graphics contexts that are reused with repeated uses of the renderer. The renderer creates these [CGContextRef](../coregraphics/cgcontext.md) objects using the [contextWithFormat:](uigraphicsrenderer/context%28with_%29.md) class method, and then wraps each of them in an instance of the class returned by the [rendererContextClass](uigraphicsrenderer/renderercontextclass%28%29.md) class method. You must therefore override these two methods in your graphics renderer subclass.

To perform drawing actions on a Core Graphics context, call the [runDrawingActions:completionActions:error:](uigraphicsrenderer/rundrawingactions%28__completionactions_%29.md) method, providing two blocks. Both of these blocks have a [UIGraphicsRendererContext](uigraphicsrenderercontext.md) argument, providing access to a Core Graphics context.

It is recommended that you create a public method on your renderer subclass that internally wraps the [runDrawingActions:completionActions:error:](uigraphicsrenderer/rundrawingactions%28__completionactions_%29.md) method. This is how the rendering methods operate on the concrete subclasses, for example the [imageWithActions:](uigraphicsimagerenderer/image%28actions_%29.md) method on [UIGraphicsImageRenderer](uigraphicsimagerenderer.md).

Each time the [runDrawingActions:completionActions:error:](uigraphicsrenderer/rundrawingactions%28__completionactions_%29.md) method is called, the renderer calls the [prepareCGContext:withRendererContext:](uigraphicsrenderer/prepare%28__with_%29.md) method with the [CGContextRef](../coregraphics/cgcontext.md) and [UIGraphicsRendererContext](uigraphicsrenderercontext.md) as arguments. Override the [prepareCGContext:withRendererContext:](uigraphicsrenderer/prepare%28__with_%29.md) method to apply the [UIGraphicsRendererContext](uigraphicsrenderercontext.md) configuration to the underlying [CGContextRef](../coregraphics/cgcontext.md) before the renderer invokes the drawing actions.

## Topics

### Initializing a graphics renderer

- [initWithBounds:](uigraphicsrenderer/init%28bounds_%29.md): Creates a new graphics renderer with the specified bounds and a default format.
- [initWithBounds:format:](uigraphicsrenderer/init%28bounds_format_%29.md): Creates a new graphics renderer with the given bounds and format.

### Configuring the renderer

- [allowsImageOutput](uigraphicsrenderer/allowsimageoutput.md): A Boolean value specifying whether the renderer can create output images.
- [format](uigraphicsrenderer/format.md): The format used to create the graphics renderer.

### Running the drawing actions

- [runDrawingActions:completionActions:error:](uigraphicsrenderer/rundrawingactions%28__completionactions_%29.md): Performs drawing actions on a Core Graphics context that the renderer prepares.
- [UIGraphicsDrawingActions](uigraphicsdrawingactions.md): A closure that executes a set of drawing instructions that the renderer applies to the Core Graphics context.

### Managing graphics contexts

- [contextWithFormat:](uigraphicsrenderer/context%28with_%29.md): Creates a Core Graphics context configured according to the supplied format object.
- [prepareCGContext:withRendererContext:](uigraphicsrenderer/prepare%28__with_%29.md): Applies the configuration specified in the renderer context to the Core Graphics context.
- [rendererContextClass](uigraphicsrenderer/renderercontextclass%28%29.md): Specifies the drawing context class used by this graphics renderer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md)
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md)

## See Also

### Graphics contexts

- [UIGraphicsRendererContext](uigraphicsrenderercontext.md): The base class for the drawing environments for graphics renderers.
- [UIGraphicsRendererFormat](uigraphicsrendererformat.md): A set of drawing attributes that represents the configuration of a graphics renderer context.
- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md): A graphics renderer for creating Core Graphics-backed images.
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.
