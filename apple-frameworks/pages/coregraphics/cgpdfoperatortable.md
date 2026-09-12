> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfoperatortable](https://developer.apple.com/documentation/coregraphics/cgpdfoperatortable)

# CGPDFOperatorTable (Swift)

**Framework:** Core Graphics  
**Kind:** API Collection

A set of callback functions for operators used when scanning content in a PDF document.

<a id="overview"></a>

## Overview

You pass an operator table and a PDF content stream to a CGPDFScanner object. When the scanner parses a PDF operator, Core Graphics invokes your callback for that operator. See also [CGPDFScanner](cgpdfscanner.md) and [CGPDFContentStream](cgpdfcontentstream.md).

> **Note**

>  This object is not derived from CFType and therefore you can’t use the Core Foundation base functions on it, such as [CFRetain](../corefoundation/cfretain.md) and [CFRelease](../corefoundation/cfrelease.md). In Objective-C, handle memory management with [CGPDFOperatorTableRetain(\_:)](cgpdfoperatortableretain%28__%29.md) and [CGPDFOperatorTableRelease(\_:)](cgpdfoperatortablerelease%28__%29.md).

For more about PDF operators, see the latest version of *PDF Reference*, Adobe Systems Incorporated.

## Topics

### Creating a PDF Operator Table

- [CGPDFOperatorTableCreate()](cgpdfoperatortablecreate%28%29.md): Creates an empty PDF operator table.

### Setting Callback Functions

- [CGPDFOperatorTableSetCallback(\_:\_:\_:)](cgpdfoperatortablesetcallback%28______%29.md): Sets a callback function for a PDF operator.

### Retaining and Releasing a PDF Operator Table

- [CGPDFOperatorTableRetain(\_:)](cgpdfoperatortableretain%28__%29.md): Increments the retain count of a CGPDFOperatorTable object.
- [CGPDFOperatorTableRelease(\_:)](cgpdfoperatortablerelease%28__%29.md): Decrements the retain count of a CGPDFOperatorTable object.

### Callbacks

- [CGPDFOperatorCallback](cgpdfoperatorcallback.md): Performs custom processing for PDF operators.

### Data Types

- [CGPDFOperatorTableRef](cgpdfoperatortableref.md): A type that stores callback functions for PDF operators.

# CGPDFOperatorTable (Objective-C)

**Framework:** Core Graphics  
**Kind:** API Collection

A set of callback functions for operators used when scanning content in a PDF document.

<a id="overview"></a>

## Overview

You pass an operator table and a PDF content stream to a CGPDFScanner object. When the scanner parses a PDF operator, Core Graphics invokes your callback for that operator. See also [CGPDFScanner](cgpdfscanner.md) and [CGPDFContentStream](cgpdfcontentstream.md).

> **Note**

>  This object is not derived from CFType and therefore you can’t use the Core Foundation base functions on it, such as [CFRetain](../corefoundation/cfretain.md) and [CFRelease](../corefoundation/cfrelease.md). In Objective-C, handle memory management with [CGPDFOperatorTableRetain](cgpdfoperatortableretain%28__%29.md) and [CGPDFOperatorTableRelease](cgpdfoperatortablerelease%28__%29.md).

For more about PDF operators, see the latest version of *PDF Reference*, Adobe Systems Incorporated.

## Topics

### Creating a PDF Operator Table

- [CGPDFOperatorTableCreate](cgpdfoperatortablecreate%28%29.md): Creates an empty PDF operator table.

### Setting Callback Functions

- [CGPDFOperatorTableSetCallback](cgpdfoperatortablesetcallback%28______%29.md): Sets a callback function for a PDF operator.

### Retaining and Releasing a PDF Operator Table

- [CGPDFOperatorTableRetain](cgpdfoperatortableretain%28__%29.md): Increments the retain count of a CGPDFOperatorTable object.
- [CGPDFOperatorTableRelease](cgpdfoperatortablerelease%28__%29.md): Decrements the retain count of a CGPDFOperatorTable object.

### Callbacks

- [CGPDFOperatorCallback](cgpdfoperatorcallback.md): Performs custom processing for PDF operators.

### Data Types

- [CGPDFOperatorTableRef](cgpdfoperatortableref.md): A type that stores callback functions for PDF operators.

## See Also

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
- [CGPathRef](cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGPatternRef](cgpattern.md): A 2D pattern to be used for drawing graphics paths.
- [CGPDFArray](cgpdfarray.md): An array structure within a PDF document.
- [CGPDFContentStream](cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
