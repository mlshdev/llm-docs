> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath](https://developer.apple.com/documentation/coregraphics/cgpath)

# CGPath (Swift)

**Framework:** Core Graphics  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.

## Declaration

```swift
class CGPath
```

<a id="overview"></a>

## Overview

Neither `CGPath` nor [CGMutablePath](cgmutablepath.md) define functions to draw a path. To draw a Core Graphics path to a graphics context, you add the path to the graphics context by calling [addPath(\_:)](cgcontext/addpath%28__%29.md) and then call one of the context’s drawing functions—see [CGContext](cgcontext.md).

Each figure in the graphics path is constructed with a connected set of lines and Bézier curves, called a *subpath*. A subpath has an ordered set of *path elements* that represent single steps in the construction of the subpath. (For example, a line segment from one corner of a rectangle to another corner is a path element. Every subpath includes a *starting point*, which is the first point in the subpath. The path also maintains a *current point*, which is the last point in the last subpath.

## Topics

### Creating Graphics Paths

- [init(rect:transform:)](cgpath/init%28rect_transform_%29.md): Create an immutable path of a rectangle.
- [init(ellipseIn:transform:)](cgpath/init%28ellipsein_transform_%29.md): Create an immutable path of an ellipse.
- [init(roundedRect:cornerWidth:cornerHeight:transform:)](cgpath/init%28roundedrect_cornerwidth_cornerheight_transform_%29.md): Create an immutable path of a rounded rectangle.

### Copying a Graphics Path

- [copy()](cgpath/copy%28%29.md): Creates an immutable copy of a graphics path.
- [copy(using:)](cgpath/copy%28using_%29.md): Creates an immutable copy of a graphics path transformed by a transformation matrix.
- [copy(dashingWithPhase:lengths:transform:)](cgpath/copy%28dashingwithphase_lengths_transform_%29.md): Returns a new path equivalent to the results of drawing the path with a dashed stroke.
- [copy(strokingWithWidth:lineCap:lineJoin:miterLimit:transform:)](cgpath/copy%28strokingwithwidth_linecap_linejoin_miterlimit_transform_%29.md): Returns a new path equivalent to the results of drawing the path with a solid stroke.
- [mutableCopy()](cgpath/mutablecopy%28%29.md): Creates a mutable copy of an existing graphics path.
- [mutableCopy(using:)](cgpath/mutablecopy%28using_%29.md): Creates a mutable copy of a graphics path transformed by a transformation matrix.

### Examining a Graphics Path

- [boundingBox](cgpath/boundingbox.md): Returns the bounding box containing all points in a graphics path.
- [boundingBoxOfPath](cgpath/boundingboxofpath.md): Returns the bounding box of a graphics path.
- [currentPoint](cgpath/currentpoint.md): Returns the current point in a graphics path.
- [contains(\_:using:transform:)](cgpath/contains%28__using_transform_%29.md): Returns whether the specified point is interior to the path.
- [isEmpty](cgpath/isempty.md): Indicates whether or not a graphics path is empty.
- [isRect(\_:)](cgpath/isrect%28__%29.md): Indicates whether or not a graphics path represents a rectangle.

### Applying a Function to the Elements of a Path

- [apply(info:function:)](cgpath/apply%28info_function_%29.md): For each element in a graphics path, calls a custom applier function.
- [CGPathApplierFunction](cgpathapplierfunction.md): Defines a callback function that can view an element in a graphics path.
- [CGPathElement](cgpathelement.md): A data structure that provides information about a path element.
- [CGPathElementType](cgpathelementtype.md): The type of element found in a path.

### Working with Core Foundation Types

- [typeID](cgpath/typeid.md): Returns the Core Foundation type identifier for Core Graphics paths.

### Instance Methods

- [applyWithBlock(\_:)](cgpath/applywithblock%28__%29.md)
- [componentsSeparated(using:)](cgpath/componentsseparated%28using_%29.md)
- [flattened(threshold:)](cgpath/flattened%28threshold_%29.md)
- [intersection(\_:using:)](cgpath/intersection%28__using_%29.md)
- [intersects(\_:using:)](cgpath/intersects%28__using_%29.md)
- [lineIntersection(\_:using:)](cgpath/lineintersection%28__using_%29.md)
- [lineSubtracting(\_:using:)](cgpath/linesubtracting%28__using_%29.md)
- [normalized(using:)](cgpath/normalized%28using_%29.md)
- [subtracting(\_:using:)](cgpath/subtracting%28__using_%29.md)
- [symmetricDifference(\_:using:)](cgpath/symmetricdifference%28__using_%29.md)
- [union(\_:using:)](cgpath/union%28__using_%29.md)

## Relationships

### Inherited By

- [CGMutablePath](cgmutablepath.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### 2D Drawing

- [CGContext](cgcontext.md): A Quartz 2D drawing environment.
- [CGImage](cgimage.md): A bitmap image or image mask.
- [CGMutablePath](cgmutablepath.md): A mutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGLayer](cglayer.md): An offscreen context for reusing content drawn with Core Graphics.

# CGPathRef (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.

## Declaration

```objectivec
typedef const struct CGPath * CGPathRef;
```

<a id="overview"></a>

## Overview

Neither `CGPath` nor [CGMutablePathRef](cgmutablepath.md) define functions to draw a path. To draw a Core Graphics path to a graphics context, you add the path to the graphics context by calling [CGContextAddPath](cgcontext/addpath%28__%29.md) and then call one of the context’s drawing functions—see [CGContextRef](cgcontext.md).

Each figure in the graphics path is constructed with a connected set of lines and Bézier curves, called a *subpath*. A subpath has an ordered set of *path elements* that represent single steps in the construction of the subpath. (For example, a line segment from one corner of a rectangle to another corner is a path element. Every subpath includes a *starting point*, which is the first point in the subpath. The path also maintains a *current point*, which is the last point in the last subpath.

## Topics

### Creating Graphics Paths

- [CGPathCreateWithRect](cgpath/init%28rect_transform_%29.md): Create an immutable path of a rectangle.
- [CGPathCreateWithEllipseInRect](cgpath/init%28ellipsein_transform_%29.md): Create an immutable path of an ellipse.
- [CGPathCreateWithRoundedRect](cgpath/init%28roundedrect_cornerwidth_cornerheight_transform_%29.md): Create an immutable path of a rounded rectangle.

### Retaining and Releasing a Path

- [CGPathRelease](cgpathrelease.md): Decrements the retain count of a graphics path.
- [CGPathRetain](cgpathretain.md): Increments the retain count of a graphics path.

### Copying a Graphics Path

- [CGPathCreateCopy](cgpath/copy%28%29.md): Creates an immutable copy of a graphics path.
- [CGPathCreateCopyByTransformingPath](cgpath/copy%28using_%29.md): Creates an immutable copy of a graphics path transformed by a transformation matrix.
- [CGPathCreateCopyByDashingPath](cgpathcreatecopybydashingpath.md): Creates a dashed copy of another path.
- [CGPathCreateCopyByStrokingPath](cgpathcreatecopybystrokingpath.md): Creates a stroked copy of another path.
- [CGPathCreateMutableCopy](cgpath/mutablecopy%28%29.md): Creates a mutable copy of an existing graphics path.
- [CGPathCreateMutableCopyByTransformingPath](cgpath/mutablecopy%28using_%29.md): Creates a mutable copy of a graphics path transformed by a transformation matrix.

### Examining a Graphics Path

- [CGPathEqualToPath](cgpathequaltopath.md): Indicates whether two graphics paths are equivalent.
- [CGPathGetBoundingBox](cgpath/boundingbox.md): Returns the bounding box containing all points in a graphics path.
- [CGPathGetPathBoundingBox](cgpath/boundingboxofpath.md): Returns the bounding box of a graphics path.
- [CGPathGetCurrentPoint](cgpath/currentpoint.md): Returns the current point in a graphics path.
- [CGPathContainsPoint](cgpathcontainspoint.md): Checks whether a point is contained in a graphics path.
- [CGPathIsEmpty](cgpath/isempty.md): Indicates whether or not a graphics path is empty.
- [CGPathIsRect](cgpath/isrect%28__%29.md): Indicates whether or not a graphics path represents a rectangle.

### Applying a Function to the Elements of a Path

- [CGPathApply](cgpath/apply%28info_function_%29.md): For each element in a graphics path, calls a custom applier function.
- [CGPathApplierFunction](cgpathapplierfunction.md): Defines a callback function that can view an element in a graphics path.
- [CGPathElement](cgpathelement.md): A data structure that provides information about a path element.
- [CGPathElementType](cgpathelementtype.md): The type of element found in a path.

### Constants

- [CGPathDrawingMode](cgpathdrawingmode.md): Options for rendering a path.
- [CGPathElementType](cgpathelementtype.md): The type of element found in a path.
- [CGLineCap](cglinecap.md): Styles for rendering the endpoint of a stroked line.
- [CGLineJoin](cglinejoin.md): Junction types for stroked lines.

### Working with Core Foundation Types

- [CGPathGetTypeID](cgpath/typeid.md): Returns the Core Foundation type identifier for Core Graphics paths.

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### Opaque Types

- [CGContextRef](cgcontext.md): A Quartz 2D drawing environment.
- [CGColorRef](cgcolor.md): A set of components that define a color, with a color space specifying how to interpret them.
- [CGColorConversionInfoRef](cgcolorconversioninfo.md): An object that describes how to convert between color spaces for use by other system services.
- [CGColorSpaceRef](cgcolorspace.md): A profile that specifies how to interpret a color value for display.
- [CGDataConsumerRef](cgdataconsumer.md): An abstraction for data-writing tasks that eliminates the need to manage a raw memory buffer.
- [CGDataProviderRef](cgdataprovider.md): An abstraction for data-reading tasks that eliminates the need to manage a raw memory buffer.
- [CGFontRef](cgfont.md): A set of character glyphs and layout information for drawing text.
- [CGFunctionRef](cgfunction.md): A general facility for defining and using callback functions.
- [CGGradientRef](cggradient.md): A definition for a smooth transition between colors for drawing radial and axial gradient fills.
- [CGImageRef](cgimage.md): A bitmap image or image mask.
- [CGLayerRef](cglayer.md): An offscreen context for reusing content drawn with Core Graphics.
- [CGPatternRef](cgpattern.md): A 2D pattern to be used for drawing graphics paths.
- [CGPDFArray](cgpdfarray.md): An array structure within a PDF document.
- [CGPDFContentStream](cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
- [CGPDFDictionary](cgpdfdictionary.md): A dictionary structure within a PDF document.
