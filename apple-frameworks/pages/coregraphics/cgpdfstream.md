> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfstream](https://developer.apple.com/documentation/coregraphics/cgpdfstream)

# CGPDFStream (Swift)

**Framework:** Core Graphics  
**Kind:** API Collection

A stream or sequence of data bytes in a PDF document.

<a id="overview"></a>

## Overview

A PDF stream  consists  of a dictionary that describes a sequence of bytes. Streams typically represent objects with potentially large amounts of data, such as images and page descriptions.

This object is not derived from CFType and therefore there are no functions for retaining and releasing it.

## Topics

### Getting Data from a PDF Stream

- [CGPDFStreamCopyData(\_:\_:)](cgpdfstreamcopydata%28____%29.md): Returns the data associated with a PDF stream.
- [CGPDFStreamGetDictionary(\_:)](cgpdfstreamgetdictionary%28__%29.md): Returns the dictionary associated with a PDF stream.

### Data Types

- [CGPDFStreamRef](cgpdfstreamref.md): A type that represents a PDF stream.

### Constants

- [CGPDFDataFormat](cgpdfdataformat.md): The encoding format of PDF data.

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

# CGPDFStream (Objective-C)

**Framework:** Core Graphics  
**Kind:** API Collection

A stream or sequence of data bytes in a PDF document.

<a id="overview"></a>

## Overview

A PDF stream  consists  of a dictionary that describes a sequence of bytes. Streams typically represent objects with potentially large amounts of data, such as images and page descriptions.

This object is not derived from CFType and therefore there are no functions for retaining and releasing it.

## Topics

### Getting Data from a PDF Stream

- [CGPDFStreamCopyData](cgpdfstreamcopydata%28____%29.md): Returns the data associated with a PDF stream.
- [CGPDFStreamGetDictionary](cgpdfstreamgetdictionary%28__%29.md): Returns the dictionary associated with a PDF stream.

### Data Types

- [CGPDFStreamRef](cgpdfstreamref.md): A type that represents a PDF stream.

### Constants

- [CGPDFDataFormat](cgpdfdataformat.md): The encoding format of PDF data.

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
- [CGPathRef](cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGPatternRef](cgpattern.md): A 2D pattern to be used for drawing graphics paths.
- [CGPDFArray](cgpdfarray.md): An array structure within a PDF document.
- [CGPDFContentStream](cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
