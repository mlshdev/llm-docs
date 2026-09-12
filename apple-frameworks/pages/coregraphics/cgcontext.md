> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext](https://developer.apple.com/documentation/coregraphics/cgcontext)

# CGContext (Swift)

**Framework:** Core Graphics  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Quartz 2D drawing environment.

## Declaration

```swift
class CGContext
```

<a id="overview"></a>

## Overview

A `CGContext` instance represents a Quartz 2D drawing destination. A graphics context contains drawing parameters and all device-specific information needed to render the paint on a page to the destination, whether the destination is a window in an application, a bitmap image, a PDF document, or a printer.

## Topics

### Creating Bitmap Graphics Contexts

- [CGBitmapContextReleaseDataCallback](cgbitmapcontextreleasedatacallback.md): A callback function used to release data associate with the bitmap context.

### Creating PDF Graphics Contexts

- [init(\_:mediaBox:\_:)](cgcontext/init%28__mediabox___%29.md): Creates a URL-based PDF graphics context.
- [init(consumer:mediaBox:\_:)](cgcontext/init%28consumer_mediabox___%29.md): Creates a PDF graphics context.
- [Auxiliary Dictionary Keys](auxiliary-dictionary-keys.md): Keys for the auxiliary info dictionary you specify when creating a PDF context.

### Converting Between Coordinate Spaces

- [userSpaceToDeviceSpaceTransform](cgcontext/userspacetodevicespacetransform.md): Returns an affine transform that maps user space coordinates to device space coordinates.
- [convertToDeviceSpace(\_:)](cgcontext/converttodevicespace%28__%29-53m7u.md): Returns a point that is transformed from user space coordinates to device space coordinates.
- [convertToUserSpace(\_:)](cgcontext/converttouserspace%28__%29-3mtg3.md): Returns a point that is transformed from device space coordinates to user space coordinates.
- [convertToDeviceSpace(\_:)](cgcontext/converttodevicespace%28__%29-91x5g.md): Returns a rectangle that is transformed from user space coordinate to device space coordinates.
- [convertToUserSpace(\_:)](cgcontext/converttouserspace%28__%29-1hk5r.md): Returns a rectangle that is transformed from device space coordinate to user space coordinates.
- [convertToDeviceSpace(\_:)](cgcontext/converttodevicespace%28__%29-224h2.md): Returns a size that is transformed from user space coordinates to device space coordinates.
- [convertToUserSpace(\_:)](cgcontext/converttouserspace%28__%29-693ur.md): Returns a size that is transformed from device space coordinates to user space coordinates.

### Constructing a Current Graphics Path

- [beginPath()](cgcontext/beginpath%28%29.md): Creates a new empty path in a graphics context.
- [move(to:)](cgcontext/move%28to_%29.md): Begins a new subpath at the specified point.
- [addLine(to:)](cgcontext/addline%28to_%29.md): Appends a straight line segment from the current point to the specified point.
- [addLines(between:)](cgcontext/addlines%28between_%29.md): Adds a sequence of connected straight-line segments to the current path.
- [addRect(\_:)](cgcontext/addrect%28__%29.md): Adds a rectangular path to the current path.
- [addRects(\_:)](cgcontext/addrects%28__%29.md): Adds a set of rectangular paths to the current path.
- [addEllipse(in:)](cgcontext/addellipse%28in_%29.md): Adds an ellipse that fits inside the specified rectangle.
- [addArc(center:radius:startAngle:endAngle:clockwise:)](cgcontext/addarc%28center_radius_startangle_endangle_clockwise_%29.md): Adds an arc of a circle to the current path, specified with a radius and angles.
- [addArc(tangent1End:tangent2End:radius:)](cgcontext/addarc%28tangent1end_tangent2end_radius_%29.md): Adds an arc of a circle to the current path, specified with a radius and two tangent lines.
- [addCurve(to:control1:control2:)](cgcontext/addcurve%28to_control1_control2_%29.md): Adds a cubic Bézier curve to the current path, with the specified end point and control points.
- [addQuadCurve(to:control:)](cgcontext/addquadcurve%28to_control_%29.md): Adds a quadratic Bézier curve to the current path, with the specified end point and control point.
- [addPath(\_:)](cgcontext/addpath%28__%29.md): Adds a previously created path object to the current path in a graphics context.
- [closePath()](cgcontext/closepath%28%29.md): Closes and terminates the current path’s subpath.
- [path](cgcontext/path.md): Returns a path object built from the current path information in a graphics context.
- [replacePathWithStrokedPath()](cgcontext/replacepathwithstrokedpath%28%29.md): Replaces the path in the graphics context with the stroked version of the path.

### Examining the Current Graphics Path

- [boundingBoxOfPath](cgcontext/boundingboxofpath.md): Returns the smallest rectangle that contains the current path.
- [currentPointOfPath](cgcontext/currentpointofpath.md): Returns the current point in a non-empty path.
- [isPathEmpty](cgcontext/ispathempty.md): Indicates whether the current path contains any subpaths.
- [pathContains(\_:mode:)](cgcontext/pathcontains%28__mode_%29.md): Checks to see whether the specified point is contained in the current path.

### Drawing the Current Graphics Path

- [drawPath(using:)](cgcontext/drawpath%28using_%29.md): Draws the current path using the provided drawing mode.
- [CGPathDrawingMode](cgpathdrawingmode.md): Options for rendering a path.
- [fillPath(using:)](cgcontext/fillpath%28using_%29.md): Paints the area within the current path, as determined by the specified fill rule.
- [strokePath()](cgcontext/strokepath%28%29.md): Paints a line along the current path.

### Drawing Shapes

- [clear(\_:)](cgcontext/clear%28__%29.md): Paints a transparent rectangle.
- [fill(\_:)](cgcontext/fill%28__%29-7a0rk.md): Paints the area contained within the provided rectangle, using the fill color in the current graphics state.
- [fill(\_:)](cgcontext/fill%28__%29-6jc4y.md): Paints the areas contained within the provided rectangles, using the fill color in the current graphics state.
- [fillEllipse(in:)](cgcontext/fillellipse%28in_%29.md): Paints the area of the ellipse that fits inside the provided rectangle, using the fill color in the current graphics state.
- [stroke(\_:)](cgcontext/stroke%28__%29.md): Paints a rectangular path.
- [stroke(\_:width:)](cgcontext/stroke%28__width_%29.md): Paints a rectangular path, using the specified line width.
- [strokeEllipse(in:)](cgcontext/strokeellipse%28in_%29.md): Strokes an ellipse that fits inside the specified rectangle.
- [strokeLineSegments(between:)](cgcontext/strokelinesegments%28between_%29.md): Strokes a sequence of line segments.

### Drawing Images and PDF Content

- [draw(\_:in:byTiling:)](cgcontext/draw%28__in_bytiling_%29.md): Draws an image in the specified area.
- [drawPDFPage(\_:)](cgcontext/drawpdfpage%28__%29.md): Draws the content of a PDF page into the current graphics context.
- [interpolationQuality](cgcontext/interpolationquality.md): Returns the current level of interpolation quality for a graphics context.
- [CGInterpolationQuality](cginterpolationquality.md): Levels of interpolation quality for rendering an image.

### Drawing Gradients and Shadings

- [drawLinearGradient(\_:start:end:options:)](cgcontext/drawlineargradient%28__start_end_options_%29.md): Paints a gradient fill that varies along the line defined by the provided starting and ending points.
- [drawRadialGradient(\_:startCenter:startRadius:endCenter:endRadius:options:)](cgcontext/drawradialgradient%28__startcenter_startradius_endcenter_endradius_options_%29.md): Paints a gradient fill that varies along the area defined by the provided starting and ending circles.
- [CGGradientDrawingOptions](cggradientdrawingoptions.md): Drawing locations for gradients.
- [drawShading(\_:)](cgcontext/drawshading%28__%29.md): Fills the clipping path of a context with the specified shading.

### Drawing Text

- [textMatrix](cgcontext/textmatrix.md): Returns the current text matrix.
- [textPosition](cgcontext/textposition.md)
- [selectFont(name:size:textEncoding:)](cgcontext/selectfont%28name_size_textencoding_%29.md): Deprecated. Sets the font and font size in a graphics context.
- [setCharacterSpacing(\_:)](cgcontext/setcharacterspacing%28__%29.md): Sets the current character spacing.
- [setFont(\_:)](cgcontext/setfont%28__%29.md): Sets the platform font in a graphics context.
- [setFontSize(\_:)](cgcontext/setfontsize%28__%29.md): Sets the current font size.
- [setTextDrawingMode(\_:)](cgcontext/settextdrawingmode%28__%29.md): Sets the current text drawing mode.
- [setAllowsFontSmoothing(\_:)](cgcontext/setallowsfontsmoothing%28__%29.md): Sets whether or not to allow font smoothing for a graphics context.
- [setAllowsFontSubpixelPositioning(\_:)](cgcontext/setallowsfontsubpixelpositioning%28__%29.md): Sets whether or not to allow subpixel positioning for a graphics context.
- [setAllowsFontSubpixelQuantization(\_:)](cgcontext/setallowsfontsubpixelquantization%28__%29.md): Sets whether or not to allow subpixel quantization for a graphics context.
- [setShouldSmoothFonts(\_:)](cgcontext/setshouldsmoothfonts%28__%29.md): Enables or disables font smoothing in a graphics context.
- [setShouldSubpixelPositionFonts(\_:)](cgcontext/setshouldsubpixelpositionfonts%28__%29.md): Enables or disables subpixel positioning in a graphics context.
- [setShouldSubpixelQuantizeFonts(\_:)](cgcontext/setshouldsubpixelquantizefonts%28__%29.md): Enables or disables subpixel quantization in a graphics context.
- [showGlyphs(g:count:)](cgcontext/showglyphs%28g_count_%29.md): Deprecated. Displays an array of glyphs at the current text position.
- [showGlyphs(\_:at:)](cgcontext/showglyphs%28__at_%29.md): Draws a set of glyphs at a set of corresponding positions.
- [showGlyphsAtPoint(x:y:glyphs:count:)](cgcontext/showglyphsatpoint%28x_y_glyphs_count_%29.md): Deprecated. Displays an array of glyphs at a position you specify.
- [showGlyphsWithAdvances(glyphs:advances:count:)](cgcontext/showglyphswithadvances%28glyphs_advances_count_%29.md): Deprecated. Draws an array of glyphs with varying offsets.
- [showText(string:length:)](cgcontext/showtext%28string_length_%29.md): Deprecated. Displays a character array at the current text position, a point specified by the current text matrix.
- [showTextAtPoint(x:y:string:length:)](cgcontext/showtextatpoint%28x_y_string_length_%29.md): Deprecated. Displays a character string at a position you specify.
- [CGTextDrawingMode](cgtextdrawingmode.md): Modes for rendering text.

### Drawing Core Graphics Layers

- [draw(\_:at:)](cgcontext/draw%28__at_%29.md): Draws the contents of a layer object at the specified point.
- [draw(\_:in:)](cgcontext/draw%28__in_%29.md): Draws the contents of a layer object into the specified rectangle.

### Setting Fill, Stroke, and Shadow Colors

- [setFillColor(\_:)](cgcontext/setfillcolor%28__%29-8lhn8.md): Sets the current fill color in a graphics context, using a CGColor.
- [setFillColor(\_:)](cgcontext/setfillcolor%28__%29-756dy.md): Sets the current fill color.
- [setFillColor(cyan:magenta:yellow:black:alpha:)](cgcontext/setfillcolor%28cyan_magenta_yellow_black_alpha_%29.md): Sets the current fill color to a value in the DeviceCMYK color space.
- [setFillColor(gray:alpha:)](cgcontext/setfillcolor%28gray_alpha_%29.md): Sets the current fill color to a value in the DeviceGray color space.
- [setFillColor(red:green:blue:alpha:)](cgcontext/setfillcolor%28red_green_blue_alpha_%29.md): Sets the current fill color to a value in the DeviceRGB color space.
- [setFillColorSpace(\_:)](cgcontext/setfillcolorspace%28__%29.md): Sets the fill color space in a graphics context.
- [setShadow(offset:blur:)](cgcontext/setshadow%28offset_blur_%29.md): Enables shadowing in a graphics context.
- [setShadow(offset:blur:color:)](cgcontext/setshadow%28offset_blur_color_%29.md): Enables shadowing with color a graphics context.
- [setStrokeColor(\_:)](cgcontext/setstrokecolor%28__%29-1sskg.md): Sets the current stroke color in a context, using a CGColor.
- [setStrokeColor(\_:)](cgcontext/setstrokecolor%28__%29-4pd8p.md): Sets the current stroke color.
- [setStrokeColor(cyan:magenta:yellow:black:alpha:)](cgcontext/setstrokecolor%28cyan_magenta_yellow_black_alpha_%29.md): Sets the current stroke color to a value in the DeviceCMYK color space.
- [setStrokeColor(gray:alpha:)](cgcontext/setstrokecolor%28gray_alpha_%29.md): Sets the current stroke color to a value in the DeviceGray color space.
- [setStrokeColor(red:green:blue:alpha:)](cgcontext/setstrokecolor%28red_green_blue_alpha_%29.md): Sets the current stroke color to a value in the DeviceRGB color space.
- [setStrokeColorSpace(\_:)](cgcontext/setstrokecolorspace%28__%29.md): Sets the stroke color space in a graphics context.
- [setStrokePattern(\_:colorComponents:)](cgcontext/setstrokepattern%28__colorcomponents_%29.md): Sets the stroke pattern in the specified graphics context.
- [setAlpha(\_:)](cgcontext/setalpha%28__%29.md): Sets the opacity level for objects drawn in a graphics context.

### Working with the Current Clipping Path

- [clip(using:)](cgcontext/clip%28using_%29.md): Modifies the current clipping path.
- [clip(to:)](cgcontext/clip%28to_%29-7cbwq.md): Sets the clipping path to the intersection of the current clipping path with the area defined by the specified rectangle.
- [clip(to:)](cgcontext/clip%28to_%29-2eg0.md): Sets the clipping path to the intersection of the current clipping path with the region defined by an array of rectangles.
- [clip(to:mask:)](cgcontext/clip%28to_mask_%29.md): Maps a mask into the specified rectangle and intersects it with the current clipping area of the graphics context.
- [boundingBoxOfClipPath](cgcontext/boundingboxofclippath.md): Returns the bounding box of a clipping path.

### Working with Transparency Layers

- [beginTransparencyLayer(in:auxiliaryInfo:)](cgcontext/begintransparencylayer%28in_auxiliaryinfo_%29.md): Begins a transparency layer whose contents are bounded by the specified rectangle.
- [beginTransparencyLayer(auxiliaryInfo:)](cgcontext/begintransparencylayer%28auxiliaryinfo_%29.md): Begins a transparency layer.
- [endTransparencyLayer()](cgcontext/endtransparencylayer%28%29.md): Ends a transparency layer.

### Working with the Current Transformation Matrix

- [ctm](cgcontext/ctm.md): Returns the current transformation matrix.
- [rotate(by:)](cgcontext/rotate%28by_%29.md): Rotates the user coordinate system in a context.
- [scaleBy(x:y:)](cgcontext/scaleby%28x_y_%29.md): Changes the scale of the user coordinate system in a context.
- [translateBy(x:y:)](cgcontext/translateby%28x_y_%29.md): Changes the origin of the user coordinate system in a context.
- [concatenate(\_:)](cgcontext/concatenate%28__%29.md): Transforms the user coordinate system in a context using a specified matrix.

### Setting Path Drawing Options

- [setAllowsAntialiasing(\_:)](cgcontext/setallowsantialiasing%28__%29.md): Sets whether or not to allow antialiasing for a graphics context.
- [setFlatness(\_:)](cgcontext/setflatness%28__%29.md): Sets the accuracy of curved paths in a graphics context.
- [setLineCap(\_:)](cgcontext/setlinecap%28__%29.md): Sets the style for the endpoints of lines drawn in a graphics context.
- [setLineDash(phase:lengths:)](cgcontext/setlinedash%28phase_lengths_%29.md): Sets the pattern for drawing dashed lines.
- [setLineJoin(\_:)](cgcontext/setlinejoin%28__%29.md): Sets the style for the joins of connected lines in a graphics context.
- [setLineWidth(\_:)](cgcontext/setlinewidth%28__%29.md): Sets the line width for a graphics context.
- [setMiterLimit(\_:)](cgcontext/setmiterlimit%28__%29.md): Sets the miter limit for the joins of connected lines in a graphics context.
- [setPatternPhase(\_:)](cgcontext/setpatternphase%28__%29.md): Sets the pattern phase of a context.
- [setFillPattern(\_:colorComponents:)](cgcontext/setfillpattern%28__colorcomponents_%29.md): Sets the fill pattern in the specified graphics context.
- [setShouldAntialias(\_:)](cgcontext/setshouldantialias%28__%29.md): Sets antialiasing on or off for a graphics context.

### Saving and Restoring Graphics State

- [saveGState()](cgcontext/savegstate%28%29.md): Pushes a copy of the current graphics state onto the graphics state stack for the context.
- [restoreGState()](cgcontext/restoregstate%28%29.md): Sets the current graphics state to the state most recently saved.

### Managing a Graphics Context

- [flush()](cgcontext/flush%28%29.md): Forces all pending drawing operations in a window context to be rendered immediately to the destination device.
- [synchronize()](cgcontext/synchronize%28%29.md): Marks a window context for update.
- [setBlendMode(\_:)](cgcontext/setblendmode%28__%29.md): Sets how sample values are composited by a graphics context.
- [CGBlendMode](cgblendmode.md): Compositing operations for images.
- [setRenderingIntent(\_:)](cgcontext/setrenderingintent%28__%29.md): Sets the rendering intent in the current graphics state.

### Managing a Bitmap Graphics Context

These properties and methods are valid only when used with a `CGContext` object created with the initializers listed in [Creating Bitmap Graphics Contexts](cgcontext.md#Creating-Bitmap-Graphics-Contexts).

- [bitmapInfo](cgcontext/bitmapinfo.md): Obtains the bitmap information associated with a bitmap graphics context.
- [alphaInfo](cgcontext/alphainfo.md): Returns the alpha information associated with the context, which indicates how a bitmap context handles the alpha component.
- [bitsPerComponent](cgcontext/bitspercomponent.md): Returns the bits per component of a bitmap context.
- [bitsPerPixel](cgcontext/bitsperpixel.md): Returns the bits per pixel of a bitmap context.
- [bytesPerRow](cgcontext/bytesperrow.md): Returns the bytes per row of a bitmap context.
- [colorSpace](cgcontext/colorspace.md): Returns the color space of a bitmap context.
- [data](cgcontext/data.md): Returns a pointer to the image data associated with a bitmap context.
- [height](cgcontext/height.md): Returns the height in pixels of a bitmap context.
- [width](cgcontext/width.md): Returns the width in pixels of a bitmap context.
- [makeImage()](cgcontext/makeimage%28%29.md): Creates and returns a CGImage from the pixel data in a bitmap graphics context.

### Managing a PDF Graphics Context

These methods are valid only when used with a `CGContext` object created with the initializers listed in [Creating PDF Graphics Contexts](cgcontext.md#Creating-PDF-Graphics-Contexts).

- [beginPDFPage(\_:)](cgcontext/beginpdfpage%28__%29.md): Begins a new page in a PDF graphics context.
- [endPDFPage()](cgcontext/endpdfpage%28%29.md): Ends the current page in the PDF graphics context.
- [addDestination(\_:at:)](cgcontext/adddestination%28__at_%29.md): Sets a destination to jump to when a point in the current page of a PDF graphics context is clicked.
- [setDestination(\_:for:)](cgcontext/setdestination%28__for_%29.md): Sets a destination to jump to when a rectangle in the current PDF page is clicked.
- [setURL(\_:for:)](cgcontext/seturl%28__for_%29.md): Sets the URL associated with a rectangle in a PDF graphics context.
- [addDocumentMetadata(\_:)](cgcontext/adddocumentmetadata%28__%29.md): Associates custom metadata with the PDF document.
- [closePDF()](cgcontext/closepdf%28%29.md): Closes a PDF document.

### Managing a Page-Based Graphics Context

- [beginPage(mediaBox:)](cgcontext/beginpage%28mediabox_%29.md): Starts a new page in a page-based graphics context.
- [endPage()](cgcontext/endpage%28%29.md): Ends the current page in a page-based graphics context.

### Working with Core Foundation Types

- [typeID](cgcontext/typeid.md): Returns the type identifier for a graphics context.

### Constants

- [CGPathFillRule](cgpathfillrule.md): Rules for determining which regions are interior to a path, used by the [fillPath(using:)](cgcontext/fillpath%28using_%29.md) and [clip(using:)](cgcontext/clip%28using_%29.md) methods.
- [CGTextEncoding](cgtextencoding.md): Deprecated. Text encodings for fonts.

### Instance Methods

- [draw(\_:in:by:options:)](cgcontext/draw%28__in_by_options_%29.md)
- [resetClip()](cgcontext/resetclip%28%29.md)
- [setEDRTargetHeadroom(\_:)](cgcontext/setedrtargetheadroom%28__%29.md)
- [addStructureTreeRootChild(\_:)](cgcontext/addstructuretreerootchild%28__%29.md)
- [beginMarkedContentSequence(\_:)](cgcontext/beginmarkedcontentsequence%28__%29.md)
- [beginNonStructuralMarkedContentSequence(\_:)](cgcontext/beginnonstructuralmarkedcontentsequence%28__%29.md)
- [beginObjectReference()](cgcontext/beginobjectreference%28%29.md)
- [endMarkedContentSequence()](cgcontext/endmarkedcontentsequence%28%29.md)
- [endObjectReference()](cgcontext/endobjectreference%28%29.md)
- [synchronizeAttributes()](cgcontext/synchronizeattributes%28%29.md)

### Structures

- [CGContext.AuxiliaryInfo](cgcontext/auxiliaryinfo.md)

### Initializers

- [init(data:width:height:bitsPerComponent:bytesPerRow:space:bitmapInfo:)](cgcontext/init%28data_width_height_bitspercomponent_bytesperrow_space_bitmapinfo_%29-10b3i.md)
- [init(data:width:height:bitsPerComponent:bytesPerRow:space:bitmapInfo:)](cgcontext/init%28data_width_height_bitspercomponent_bytesperrow_space_bitmapinfo_%29-4fkaf.md): Deprecated.
- [init(data:width:height:bitsPerComponent:bytesPerRow:space:bitmapInfo:releaseCallback:releaseInfo:)](cgcontext/init%28data_width_height_bitspercomponent_bytesperrow_space_bitmapinfo_releasecallback_releaseinfo_%29-4yzt5.md)
- [init(data:width:height:bitsPerComponent:bytesPerRow:space:bitmapInfo:releaseCallback:releaseInfo:)](cgcontext/init%28data_width_height_bitspercomponent_bytesperrow_space_bitmapinfo_releasecallback_releaseinfo_%29-71ea9.md): Deprecated.

### Instance Properties

- [contentToneMappingInfo](cgcontext/contenttonemappinginfo.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### 2D Drawing

- [CGImage](cgimage.md): A bitmap image or image mask.
- [CGPath](cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGMutablePath](cgmutablepath.md): A mutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGLayer](cglayer.md): An offscreen context for reusing content drawn with Core Graphics.

# CGContextRef (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Quartz 2D drawing environment.

## Declaration

```objectivec
typedef struct CGContext * CGContextRef;
```

<a id="overview"></a>

## Overview

A `CGContext` instance represents a Quartz 2D drawing destination. A graphics context contains drawing parameters and all device-specific information needed to render the paint on a page to the destination, whether the destination is a window in an application, a bitmap image, a PDF document, or a printer.

## Topics

### Creating Bitmap Graphics Contexts

- [CGBitmapContextReleaseDataCallback](cgbitmapcontextreleasedatacallback.md): A callback function used to release data associate with the bitmap context.

### Creating PDF Graphics Contexts

- [CGPDFContextCreateWithURL](cgcontext/init%28__mediabox___%29.md): Creates a URL-based PDF graphics context.
- [CGPDFContextCreate](cgcontext/init%28consumer_mediabox___%29.md): Creates a PDF graphics context.
- [Auxiliary Dictionary Keys](auxiliary-dictionary-keys.md): Keys for the auxiliary info dictionary you specify when creating a PDF context.

### Retaining and Releasing Graphics Contexts

- [CGContextRelease](cgcontextrelease.md): Decrements the retain count of a graphics context.
- [CGContextRetain](cgcontextretain.md): Increments the retain count of a graphics context.

### Converting Between Coordinate Spaces

- [CGContextGetUserSpaceToDeviceSpaceTransform](cgcontext/userspacetodevicespacetransform.md): Returns an affine transform that maps user space coordinates to device space coordinates.
- [CGContextConvertPointToDeviceSpace](cgcontext/converttodevicespace%28__%29-53m7u.md): Returns a point that is transformed from user space coordinates to device space coordinates.
- [CGContextConvertPointToUserSpace](cgcontext/converttouserspace%28__%29-3mtg3.md): Returns a point that is transformed from device space coordinates to user space coordinates.
- [CGContextConvertRectToDeviceSpace](cgcontext/converttodevicespace%28__%29-91x5g.md): Returns a rectangle that is transformed from user space coordinate to device space coordinates.
- [CGContextConvertRectToUserSpace](cgcontext/converttouserspace%28__%29-1hk5r.md): Returns a rectangle that is transformed from device space coordinate to user space coordinates.
- [CGContextConvertSizeToDeviceSpace](cgcontext/converttodevicespace%28__%29-224h2.md): Returns a size that is transformed from user space coordinates to device space coordinates.
- [CGContextConvertSizeToUserSpace](cgcontext/converttouserspace%28__%29-693ur.md): Returns a size that is transformed from device space coordinates to user space coordinates.

### Constructing a Current Graphics Path

- [CGContextBeginPath](cgcontext/beginpath%28%29.md): Creates a new empty path in a graphics context.
- [CGContextMoveToPoint](cgcontextmovetopoint.md): Begins a new subpath at the point you specify.
- [CGContextAddLineToPoint](cgcontextaddlinetopoint.md): Appends a straight line segment from the current point to the provided point .
- [CGContextAddLines](cgcontextaddlines.md): Adds a sequence of connected straight-line segments to the current path.
- [CGContextAddRect](cgcontext/addrect%28__%29.md): Adds a rectangular path to the current path.
- [CGContextAddRects](cgcontextaddrects.md): Adds a set of rectangular paths to the current path.
- [CGContextAddEllipseInRect](cgcontext/addellipse%28in_%29.md): Adds an ellipse that fits inside the specified rectangle.
- [CGContextAddArc](cgcontextaddarc.md): Adds an arc of a circle to the current path, possibly preceded by a straight line segment
- [CGContextAddArcToPoint](cgcontextaddarctopoint.md): Adds an arc of a circle to the current path, using a radius and tangent points.
- [CGContextAddCurveToPoint](cgcontextaddcurvetopoint.md): Appends a cubic Bézier curve from the current point, using the provided control points and end point .
- [CGContextAddQuadCurveToPoint](cgcontextaddquadcurvetopoint.md): Appends a quadratic Bézier curve from the current point, using a control point and an end point you specify.
- [CGContextAddPath](cgcontext/addpath%28__%29.md): Adds a previously created path object to the current path in a graphics context.
- [CGContextClosePath](cgcontext/closepath%28%29.md): Closes and terminates the current path’s subpath.
- [CGContextCopyPath](cgcontext/path.md): Returns a path object built from the current path information in a graphics context.
- [CGContextReplacePathWithStrokedPath](cgcontext/replacepathwithstrokedpath%28%29.md): Replaces the path in the graphics context with the stroked version of the path.

### Examining the Current Graphics Path

- [CGContextGetPathBoundingBox](cgcontext/boundingboxofpath.md): Returns the smallest rectangle that contains the current path.
- [CGContextGetPathCurrentPoint](cgcontext/currentpointofpath.md): Returns the current point in a non-empty path.
- [CGContextIsPathEmpty](cgcontext/ispathempty.md): Indicates whether the current path contains any subpaths.
- [CGContextPathContainsPoint](cgcontext/pathcontains%28__mode_%29.md): Checks to see whether the specified point is contained in the current path.

### Drawing the Current Graphics Path

- [CGContextDrawPath](cgcontext/drawpath%28using_%29.md): Draws the current path using the provided drawing mode.
- [CGPathDrawingMode](cgpathdrawingmode.md): Options for rendering a path.
- [CGContextEOFillPath](cgcontexteofillpath.md): Paints the area within the current path, using the even-odd fill rule.
- [CGContextFillPath](cgcontextfillpath.md): Paints the area within the current path, using the nonzero winding number rule.
- [CGContextStrokePath](cgcontext/strokepath%28%29.md): Paints a line along the current path.

### Drawing Shapes

- [CGContextClearRect](cgcontext/clear%28__%29.md): Paints a transparent rectangle.
- [CGContextFillRect](cgcontext/fill%28__%29-7a0rk.md): Paints the area contained within the provided rectangle, using the fill color in the current graphics state.
- [CGContextFillRects](cgcontextfillrects.md): Paints the areas contained within the provided rectangles, using the fill color in the current graphics state.
- [CGContextFillEllipseInRect](cgcontext/fillellipse%28in_%29.md): Paints the area of the ellipse that fits inside the provided rectangle, using the fill color in the current graphics state.
- [CGContextStrokeRect](cgcontext/stroke%28__%29.md): Paints a rectangular path.
- [CGContextStrokeRectWithWidth](cgcontext/stroke%28__width_%29.md): Paints a rectangular path, using the specified line width.
- [CGContextStrokeEllipseInRect](cgcontext/strokeellipse%28in_%29.md): Strokes an ellipse that fits inside the specified rectangle.
- [CGContextStrokeLineSegments](cgcontextstrokelinesegments.md): Strokes a sequence of line segments.

### Drawing Images and PDF Content

- [CGContextDrawTiledImage](cgcontextdrawtiledimage.md): Repeatedly draws an image, scaled to the provided rectangle, to fill the current clip region.
- [CGContextDrawImage](cgcontextdrawimage.md): Draws an image into a graphics context.
- [CGContextDrawPDFPage](cgcontext/drawpdfpage%28__%29.md): Draws the content of a PDF page into the current graphics context.
- [CGContextGetInterpolationQuality](cgcontext/interpolationquality.md): Returns the current level of interpolation quality for a graphics context.
- [CGContextSetInterpolationQuality](cgcontextsetinterpolationquality.md): Sets the level of interpolation quality for a graphics context.
- [CGInterpolationQuality](cginterpolationquality.md): Levels of interpolation quality for rendering an image.

### Drawing Gradients and Shadings

- [CGContextDrawLinearGradient](cgcontext/drawlineargradient%28__start_end_options_%29.md): Paints a gradient fill that varies along the line defined by the provided starting and ending points.
- [CGContextDrawRadialGradient](cgcontext/drawradialgradient%28__startcenter_startradius_endcenter_endradius_options_%29.md): Paints a gradient fill that varies along the area defined by the provided starting and ending circles.
- [CGGradientDrawingOptions](cggradientdrawingoptions.md): Drawing locations for gradients.
- [CGContextDrawShading](cgcontext/drawshading%28__%29.md): Fills the clipping path of a context with the specified shading.

### Drawing Text

- [CGContextGetTextMatrix](cgcontext/textmatrix.md): Returns the current text matrix.
- [CGContextSetTextMatrix](cgcontextsettextmatrix.md): Sets the current text matrix.
- [CGContextSetTextPosition](cgcontextsettextposition.md): Sets the location at which text is drawn.
- [CGContextGetTextPosition](cgcontextgettextposition.md)
- [CGContextSelectFont](cgcontext/selectfont%28name_size_textencoding_%29.md): Deprecated. Sets the font and font size in a graphics context.
- [CGContextSetCharacterSpacing](cgcontext/setcharacterspacing%28__%29.md): Sets the current character spacing.
- [CGContextSetFont](cgcontext/setfont%28__%29.md): Sets the platform font in a graphics context.
- [CGContextSetFontSize](cgcontext/setfontsize%28__%29.md): Sets the current font size.
- [CGContextSetTextDrawingMode](cgcontext/settextdrawingmode%28__%29.md): Sets the current text drawing mode.
- [CGContextSetAllowsFontSmoothing](cgcontext/setallowsfontsmoothing%28__%29.md): Sets whether or not to allow font smoothing for a graphics context.
- [CGContextSetAllowsFontSubpixelPositioning](cgcontext/setallowsfontsubpixelpositioning%28__%29.md): Sets whether or not to allow subpixel positioning for a graphics context.
- [CGContextSetAllowsFontSubpixelQuantization](cgcontext/setallowsfontsubpixelquantization%28__%29.md): Sets whether or not to allow subpixel quantization for a graphics context.
- [CGContextSetShouldSmoothFonts](cgcontext/setshouldsmoothfonts%28__%29.md): Enables or disables font smoothing in a graphics context.
- [CGContextSetShouldSubpixelPositionFonts](cgcontext/setshouldsubpixelpositionfonts%28__%29.md): Enables or disables subpixel positioning in a graphics context.
- [CGContextSetShouldSubpixelQuantizeFonts](cgcontext/setshouldsubpixelquantizefonts%28__%29.md): Enables or disables subpixel quantization in a graphics context.
- [CGContextShowGlyphs](cgcontext/showglyphs%28g_count_%29.md): Deprecated. Displays an array of glyphs at the current text position.
- [CGContextShowGlyphsAtPositions](cgcontextshowglyphsatpositions.md): Draws glyphs at the provided position.
- [CGContextShowGlyphsAtPoint](cgcontext/showglyphsatpoint%28x_y_glyphs_count_%29.md): Deprecated. Displays an array of glyphs at a position you specify.
- [CGContextShowGlyphsWithAdvances](cgcontext/showglyphswithadvances%28glyphs_advances_count_%29.md): Deprecated. Draws an array of glyphs with varying offsets.
- [CGContextShowText](cgcontext/showtext%28string_length_%29.md): Deprecated. Displays a character array at the current text position, a point specified by the current text matrix.
- [CGContextShowTextAtPoint](cgcontext/showtextatpoint%28x_y_string_length_%29.md): Deprecated. Displays a character string at a position you specify.
- [CGTextDrawingMode](cgtextdrawingmode.md): Modes for rendering text.

### Drawing Core Graphics Layers

- [CGContextDrawLayerAtPoint](cgcontextdrawlayeratpoint.md): Draws the contents of a CGLayer object at the specified point.
- [CGContextDrawLayerInRect](cgcontextdrawlayerinrect.md): Draws the contents of a layer object into the specified rectangle.

### Setting Fill, Stroke, and Shadow Colors

- [CGContextSetFillColorWithColor](cgcontext/setfillcolor%28__%29-8lhn8.md): Sets the current fill color in a graphics context, using a CGColor.
- [CGContextSetFillColor](cgcontext/setfillcolor%28__%29-756dy.md): Sets the current fill color.
- [CGContextSetCMYKFillColor](cgcontext/setfillcolor%28cyan_magenta_yellow_black_alpha_%29.md): Sets the current fill color to a value in the DeviceCMYK color space.
- [CGContextSetGrayFillColor](cgcontext/setfillcolor%28gray_alpha_%29.md): Sets the current fill color to a value in the DeviceGray color space.
- [CGContextSetRGBFillColor](cgcontext/setfillcolor%28red_green_blue_alpha_%29.md): Sets the current fill color to a value in the DeviceRGB color space.
- [CGContextSetFillColorSpace](cgcontext/setfillcolorspace%28__%29.md): Sets the fill color space in a graphics context.
- [CGContextSetShadow](cgcontext/setshadow%28offset_blur_%29.md): Enables shadowing in a graphics context.
- [CGContextSetShadowWithColor](cgcontext/setshadow%28offset_blur_color_%29.md): Enables shadowing with color a graphics context.
- [CGContextSetStrokeColorWithColor](cgcontext/setstrokecolor%28__%29-1sskg.md): Sets the current stroke color in a context, using a CGColor.
- [CGContextSetStrokeColor](cgcontext/setstrokecolor%28__%29-4pd8p.md): Sets the current stroke color.
- [CGContextSetCMYKStrokeColor](cgcontext/setstrokecolor%28cyan_magenta_yellow_black_alpha_%29.md): Sets the current stroke color to a value in the DeviceCMYK color space.
- [CGContextSetGrayStrokeColor](cgcontext/setstrokecolor%28gray_alpha_%29.md): Sets the current stroke color to a value in the DeviceGray color space.
- [CGContextSetRGBStrokeColor](cgcontext/setstrokecolor%28red_green_blue_alpha_%29.md): Sets the current stroke color to a value in the DeviceRGB color space.
- [CGContextSetStrokeColorSpace](cgcontext/setstrokecolorspace%28__%29.md): Sets the stroke color space in a graphics context.
- [CGContextSetStrokePattern](cgcontext/setstrokepattern%28__colorcomponents_%29.md): Sets the stroke pattern in the specified graphics context.
- [CGContextSetAlpha](cgcontext/setalpha%28__%29.md): Sets the opacity level for objects drawn in a graphics context.

### Working with the Current Clipping Path

- [CGContextClipToRect](cgcontext/clip%28to_%29-7cbwq.md): Sets the clipping path to the intersection of the current clipping path with the area defined by the specified rectangle.
- [CGContextClipToMask](cgcontext/clip%28to_mask_%29.md): Maps a mask into the specified rectangle and intersects it with the current clipping area of the graphics context.
- [CGContextGetClipBoundingBox](cgcontext/boundingboxofclippath.md): Returns the bounding box of a clipping path.
- [CGContextClip](cgcontextclip.md): Modifies the current clipping path, using the nonzero winding number rule.
- [CGContextEOClip](cgcontexteoclip.md): Modifies the current clipping path, using the even-odd rule.
- [CGContextClipToRects](cgcontextcliptorects.md): Sets the clipping path to the intersection of the current clipping path with the region defined by an array of rectangles.

### Working with Transparency Layers

- [CGContextBeginTransparencyLayerWithRect](cgcontext/begintransparencylayer%28in_auxiliaryinfo_%29.md): Begins a transparency layer whose contents are bounded by the specified rectangle.
- [CGContextBeginTransparencyLayer](cgcontext/begintransparencylayer%28auxiliaryinfo_%29.md): Begins a transparency layer.
- [CGContextEndTransparencyLayer](cgcontext/endtransparencylayer%28%29.md): Ends a transparency layer.

### Working with the Current Transformation Matrix

- [CGContextGetCTM](cgcontext/ctm.md): Returns the current transformation matrix.
- [CGContextRotateCTM](cgcontext/rotate%28by_%29.md): Rotates the user coordinate system in a context.
- [CGContextScaleCTM](cgcontext/scaleby%28x_y_%29.md): Changes the scale of the user coordinate system in a context.
- [CGContextTranslateCTM](cgcontext/translateby%28x_y_%29.md): Changes the origin of the user coordinate system in a context.
- [CGContextConcatCTM](cgcontext/concatenate%28__%29.md): Transforms the user coordinate system in a context using a specified matrix.

### Setting Path Drawing Options

- [CGContextSetAllowsAntialiasing](cgcontext/setallowsantialiasing%28__%29.md): Sets whether or not to allow antialiasing for a graphics context.
- [CGContextSetFlatness](cgcontext/setflatness%28__%29.md): Sets the accuracy of curved paths in a graphics context.
- [CGContextSetLineCap](cgcontext/setlinecap%28__%29.md): Sets the style for the endpoints of lines drawn in a graphics context.
- [CGContextSetLineDash](cgcontextsetlinedash.md): Sets the pattern for dashed lines in a graphics context.
- [CGContextSetLineJoin](cgcontext/setlinejoin%28__%29.md): Sets the style for the joins of connected lines in a graphics context.
- [CGContextSetLineWidth](cgcontext/setlinewidth%28__%29.md): Sets the line width for a graphics context.
- [CGContextSetMiterLimit](cgcontext/setmiterlimit%28__%29.md): Sets the miter limit for the joins of connected lines in a graphics context.
- [CGContextSetPatternPhase](cgcontext/setpatternphase%28__%29.md): Sets the pattern phase of a context.
- [CGContextSetFillPattern](cgcontext/setfillpattern%28__colorcomponents_%29.md): Sets the fill pattern in the specified graphics context.
- [CGContextSetShouldAntialias](cgcontext/setshouldantialias%28__%29.md): Sets antialiasing on or off for a graphics context.

### Saving and Restoring Graphics State

- [CGContextSaveGState](cgcontext/savegstate%28%29.md): Pushes a copy of the current graphics state onto the graphics state stack for the context.
- [CGContextRestoreGState](cgcontext/restoregstate%28%29.md): Sets the current graphics state to the state most recently saved.

### Managing a Graphics Context

- [CGContextFlush](cgcontext/flush%28%29.md): Forces all pending drawing operations in a window context to be rendered immediately to the destination device.
- [CGContextSynchronize](cgcontext/synchronize%28%29.md): Marks a window context for update.
- [CGContextSetBlendMode](cgcontext/setblendmode%28__%29.md): Sets how sample values are composited by a graphics context.
- [CGBlendMode](cgblendmode.md): Compositing operations for images.
- [CGContextSetRenderingIntent](cgcontext/setrenderingintent%28__%29.md): Sets the rendering intent in the current graphics state.

### Managing a Bitmap Graphics Context

These properties and methods are valid only when used with a `CGContext` object created with the initializers listed in [Creating Bitmap Graphics Contexts](cgcontext.md#Creating-Bitmap-Graphics-Contexts).

- [CGBitmapContextGetBitmapInfo](cgcontext/bitmapinfo.md): Obtains the bitmap information associated with a bitmap graphics context.
- [CGBitmapContextGetAlphaInfo](cgcontext/alphainfo.md): Returns the alpha information associated with the context, which indicates how a bitmap context handles the alpha component.
- [CGBitmapContextGetBitsPerComponent](cgcontext/bitspercomponent.md): Returns the bits per component of a bitmap context.
- [CGBitmapContextGetBitsPerPixel](cgcontext/bitsperpixel.md): Returns the bits per pixel of a bitmap context.
- [CGBitmapContextGetBytesPerRow](cgcontext/bytesperrow.md): Returns the bytes per row of a bitmap context.
- [CGBitmapContextGetColorSpace](cgcontext/colorspace.md): Returns the color space of a bitmap context.
- [CGBitmapContextGetData](cgcontext/data.md): Returns a pointer to the image data associated with a bitmap context.
- [CGBitmapContextGetHeight](cgcontext/height.md): Returns the height in pixels of a bitmap context.
- [CGBitmapContextGetWidth](cgcontext/width.md): Returns the width in pixels of a bitmap context.
- [CGBitmapContextCreateImage](cgcontext/makeimage%28%29.md): Creates and returns a CGImage from the pixel data in a bitmap graphics context.

### Managing a PDF Graphics Context

These methods are valid only when used with a `CGContext` object created with the initializers listed in [Creating PDF Graphics Contexts](cgcontext.md#Creating-PDF-Graphics-Contexts).

- [CGPDFContextBeginPage](cgcontext/beginpdfpage%28__%29.md): Begins a new page in a PDF graphics context.
- [CGPDFContextEndPage](cgcontext/endpdfpage%28%29.md): Ends the current page in the PDF graphics context.
- [CGPDFContextAddDestinationAtPoint](cgcontext/adddestination%28__at_%29.md): Sets a destination to jump to when a point in the current page of a PDF graphics context is clicked.
- [CGPDFContextSetDestinationForRect](cgcontext/setdestination%28__for_%29.md): Sets a destination to jump to when a rectangle in the current PDF page is clicked.
- [CGPDFContextSetURLForRect](cgcontext/seturl%28__for_%29.md): Sets the URL associated with a rectangle in a PDF graphics context.
- [CGPDFContextAddDocumentMetadata](cgcontext/adddocumentmetadata%28__%29.md): Associates custom metadata with the PDF document.
- [CGPDFContextClose](cgcontext/closepdf%28%29.md): Closes a PDF document.

### Managing a Page-Based Graphics Context

- [CGContextBeginPage](cgcontext/beginpage%28mediabox_%29.md): Starts a new page in a page-based graphics context.
- [CGContextEndPage](cgcontext/endpage%28%29.md): Ends the current page in a page-based graphics context.

### Working with Core Foundation Types

- [CGContextGetTypeID](cgcontext/typeid.md): Returns the type identifier for a graphics context.

### Constants

- [CGTextEncoding](cgtextencoding.md): Deprecated. Text encodings for fonts.

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### Opaque Types

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
- [CGPDFDictionary](cgpdfdictionary.md): A dictionary structure within a PDF document.
