> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfscanner](https://developer.apple.com/documentation/coregraphics/cgpdfscanner)

# CGPDFScanner (Swift)

**Framework:** Core Graphics  
**Kind:** API Collection

A parser object for handling content and operators in a PDF content stream.

<a id="overview"></a>

## Overview

You can set up the PDF scanner object to invoke callbacks when it encounters specific PDF operators in the stream.

This object is not derived from `CFType`. In Objective-C, use [CGPDFScannerRetain(\_:)](cgpdfscannerretain%28__%29.md) and [CGPDFScannerRelease(\_:)](cgpdfscannerrelease%28__%29.md) to manage the retain count of [CGPDFScannerRef](cgpdfscannerref.md) instances; do not use [CFRetain](../corefoundation/cfretain.md) and [CFRelease](../corefoundation/cfrelease.md).

## Topics

### Creating a PDF Scanner Object

- [CGPDFScannerCreate(\_:\_:\_:)](cgpdfscannercreate%28______%29.md): Creates a PDF scanner.

### Retaining and Releasing PDF Scanner Objects

- [CGPDFScannerRetain(\_:)](cgpdfscannerretain%28__%29.md): Increments the retain count of a scanner object.
- [CGPDFScannerRelease(\_:)](cgpdfscannerrelease%28__%29.md): Decrements the retain count of a scanner object.

### Parsing Content

- [CGPDFScannerScan(\_:)](cgpdfscannerscan%28__%29.md): Parses the content stream of a PDF scanner object.
- [CGPDFScannerGetContentStream(\_:)](cgpdfscannergetcontentstream%28__%29.md): Returns the content stream associated with a PDF scanner object.

### Getting PDF Objects from the Scanner Stack

- [CGPDFScannerPopObject(\_:\_:)](cgpdfscannerpopobject%28____%29.md): Retrieves an object from the scanner stack.
- [CGPDFScannerPopBoolean(\_:\_:)](cgpdfscannerpopboolean%28____%29.md): Retrieves a Boolean object from the scanner stack.
- [CGPDFScannerPopInteger(\_:\_:)](cgpdfscannerpopinteger%28____%29.md): Retrieves an integer object from the scanner stack.
- [CGPDFScannerPopNumber(\_:\_:)](cgpdfscannerpopnumber%28____%29.md): Retrieves a real value object from the scanner stack.
- [CGPDFScannerPopName(\_:\_:)](cgpdfscannerpopname%28____%29.md): Retrieves a character string from the scanner stack.
- [CGPDFScannerPopString(\_:\_:)](cgpdfscannerpopstring%28____%29.md): Retrieves a string object from the scanner stack.
- [CGPDFScannerPopArray(\_:\_:)](cgpdfscannerpoparray%28____%29.md): Retrieves an array object from the scanner stack.
- [CGPDFScannerPopDictionary(\_:\_:)](cgpdfscannerpopdictionary%28____%29.md): Retrieves a PDF dictionary object from the scanner stack.
- [CGPDFScannerPopStream(\_:\_:)](cgpdfscannerpopstream%28____%29.md): Retrieves a PDF stream object from the scanner stack.

### Data Types

- [CGPDFScannerRef](cgpdfscannerref.md): A type used to parse a PDF content stream.

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

# CGPDFScanner (Objective-C)

**Framework:** Core Graphics  
**Kind:** API Collection

A parser object for handling content and operators in a PDF content stream.

<a id="overview"></a>

## Overview

You can set up the PDF scanner object to invoke callbacks when it encounters specific PDF operators in the stream.

This object is not derived from `CFType`. In Objective-C, use [CGPDFScannerRetain](cgpdfscannerretain%28__%29.md) and [CGPDFScannerRelease](cgpdfscannerrelease%28__%29.md) to manage the retain count of [CGPDFScannerRef](cgpdfscannerref.md) instances; do not use [CFRetain](../corefoundation/cfretain.md) and [CFRelease](../corefoundation/cfrelease.md).

## Topics

### Creating a PDF Scanner Object

- [CGPDFScannerCreate](cgpdfscannercreate%28______%29.md): Creates a PDF scanner.

### Retaining and Releasing PDF Scanner Objects

- [CGPDFScannerRetain](cgpdfscannerretain%28__%29.md): Increments the retain count of a scanner object.
- [CGPDFScannerRelease](cgpdfscannerrelease%28__%29.md): Decrements the retain count of a scanner object.

### Parsing Content

- [CGPDFScannerScan](cgpdfscannerscan%28__%29.md): Parses the content stream of a PDF scanner object.
- [CGPDFScannerGetContentStream](cgpdfscannergetcontentstream%28__%29.md): Returns the content stream associated with a PDF scanner object.

### Getting PDF Objects from the Scanner Stack

- [CGPDFScannerPopObject](cgpdfscannerpopobject%28____%29.md): Retrieves an object from the scanner stack.
- [CGPDFScannerPopBoolean](cgpdfscannerpopboolean%28____%29.md): Retrieves a Boolean object from the scanner stack.
- [CGPDFScannerPopInteger](cgpdfscannerpopinteger%28____%29.md): Retrieves an integer object from the scanner stack.
- [CGPDFScannerPopNumber](cgpdfscannerpopnumber%28____%29.md): Retrieves a real value object from the scanner stack.
- [CGPDFScannerPopName](cgpdfscannerpopname%28____%29.md): Retrieves a character string from the scanner stack.
- [CGPDFScannerPopString](cgpdfscannerpopstring%28____%29.md): Retrieves a string object from the scanner stack.
- [CGPDFScannerPopArray](cgpdfscannerpoparray%28____%29.md): Retrieves an array object from the scanner stack.
- [CGPDFScannerPopDictionary](cgpdfscannerpopdictionary%28____%29.md): Retrieves a PDF dictionary object from the scanner stack.
- [CGPDFScannerPopStream](cgpdfscannerpopstream%28____%29.md): Retrieves a PDF stream object from the scanner stack.

### Data Types

- [CGPDFScannerRef](cgpdfscannerref.md): A type used to parse a PDF content stream.

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
