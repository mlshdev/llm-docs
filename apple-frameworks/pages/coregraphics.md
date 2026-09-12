> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics](https://developer.apple.com/documentation/coregraphics)

# Core Graphics (Swift)

**Framework:** Core Graphics  
**Kind:** Framework  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Harness the power of Quartz technology to perform lightweight 2D rendering with high-fidelity output. Handle path-based drawing, antialiased rendering, gradients, images, color management, PDF documents, and more.

<a id="overview"></a>

## Overview

The Core Graphics framework is based on the Quartz advanced drawing engine. It provides low-level, lightweight 2D rendering with unmatched output fidelity. You use this framework to handle path-based drawing, transformations, color management, offscreen rendering, patterns, gradients and shadings, image data management, image creation, and image masking, as well as PDF document creation, display, and parsing.

In macOS, Core Graphics also includes services for working with display hardware, low-level user input events, and the windowing system.

## Topics

### Geometric Data Types

- [CGFloat](corefoundation/cgfloat-swift.struct.md): The basic type for floating-point scalar values in Core Graphics and related frameworks.
- [CGPoint](corefoundation/cgpoint.md)
- [CGSize](corefoundation/cgsize.md): A structure that contains width and height values.
- [CGRect](corefoundation/cgrect.md)
- [CGVector](corefoundation/cgvector.md): A structure that contains a two-dimensional vector.
- [CGAffineTransform](corefoundation/cgaffinetransform.md)

### 2D Drawing

- [CGContext](coregraphics/cgcontext.md): A Quartz 2D drawing environment.
- [CGImage](coregraphics/cgimage.md): A bitmap image or image mask.
- [CGPath](coregraphics/cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGMutablePath](coregraphics/cgmutablepath.md): A mutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGLayer](coregraphics/cglayer.md): An offscreen context for reusing content drawn with Core Graphics.

### Colors and Fonts

- [CGColor](coregraphics/cgcolor.md): A set of components that define a color, with a color space specifying how to interpret them.
- [CGColorConversionInfo](coregraphics/cgcolorconversioninfo.md): An object that describes how to convert between color spaces for use by other system services.
- [CGColorSpace](coregraphics/cgcolorspace.md): A profile that specifies how to interpret a color value for display.
- [CGFont](coregraphics/cgfont.md): A set of character glyphs and layout information for drawing text.

### Working with PDF Documents

- [CGPDFDocument](coregraphics/cgpdfdocument.md): A document that contains PDF (Portable Document Format) drawing information.

### Utility and Support Classes

- [CGDataConsumer](coregraphics/cgdataconsumer.md): An abstraction for data-writing tasks that eliminates the need to manage a raw memory buffer.
- [CGDataProvider](coregraphics/cgdataprovider.md): An abstraction for data-reading tasks that eliminates the need to manage a raw memory buffer.
- [CGShading](coregraphics/cgshading.md): A definition for a smooth transition between colors, controlled by a custom function you provide, for drawing radial and axial gradient fills.
- [CGGradient](coregraphics/cggradient.md): A definition for a smooth transition between colors for drawing radial and axial gradient fills.
- [CGFunction](coregraphics/cgfunction.md): A general facility for defining and using callback functions.
- [CGPattern](coregraphics/cgpattern.md): A 2D pattern to be used for drawing graphics paths.

### Services

- [Quartz Display Services](coregraphics/quartz-display-services.md): Provides direct access to features in the macOS window server for configuring and controlling display hardware.
- [Quartz Event Services](coregraphics/quartz-event-services.md): Provides features for managing *event taps*—filters for observing and altering the stream of low-level user input events in macOS.
- [Quartz Window Services](coregraphics/quartz-window-services.md): Provides information about the windows managed by the macOS window server.

### Reference

- [Core Graphics Structures](coregraphics/core-graphics-structures.md)
- [Core Graphics Enumerations](coregraphics/core-graphics-enumerations.md)
- [Core Graphics Constants](coregraphics/core-graphics-constants.md)
- [Core Graphics Functions](coregraphics/core-graphics-functions.md)
- [Core Graphics Data Types](coregraphics/core-graphics-data-types.md)

### Classes

- [CGPDFMarkedContentItem](coregraphics/cgpdfmarkedcontentitem.md)
- [CGPDFStructureElement](coregraphics/cgpdfstructureelement.md)
- [CGRenderingBufferProvider](coregraphics/cgrenderingbufferprovider.md)

### Structures

- [CGBitmapParameters](coregraphics/cgbitmapparameters-4v8wo.md)
- [CGColorModel](coregraphics/cgcolormodel.md)
- [CGContentInfo](coregraphics/cgcontentinfo.md)

### Enumerations

- [CGBitmapLayout](coregraphics/cgbitmaplayout.md)
- [CGComponent](coregraphics/cgcomponent.md)
- [CGContentToneMappingInfo](coregraphics/cgcontenttonemappinginfo-swift.enum.md)
- [CGImageComponentInfo](coregraphics/cgimagecomponentinfo.md)

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

# Core Graphics (Objective-C)

**Framework:** Core Graphics  
**Kind:** Framework  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Harness the power of Quartz technology to perform lightweight 2D rendering with high-fidelity output. Handle path-based drawing, antialiased rendering, gradients, images, color management, PDF documents, and more.

<a id="overview"></a>

## Overview

The Core Graphics framework is based on the Quartz advanced drawing engine. It provides low-level, lightweight 2D rendering with unmatched output fidelity. You use this framework to handle path-based drawing, transformations, color management, offscreen rendering, patterns, gradients and shadings, image data management, image creation, and image masking, as well as PDF document creation, display, and parsing.

In macOS, Core Graphics also includes services for working with display hardware, low-level user input events, and the windowing system.

## Topics

### Opaque Types

- [CGContextRef](coregraphics/cgcontext.md): A Quartz 2D drawing environment.
- [CGColorRef](coregraphics/cgcolor.md): A set of components that define a color, with a color space specifying how to interpret them.
- [CGColorConversionInfoRef](coregraphics/cgcolorconversioninfo.md): An object that describes how to convert between color spaces for use by other system services.
- [CGColorSpaceRef](coregraphics/cgcolorspace.md): A profile that specifies how to interpret a color value for display.
- [CGDataConsumerRef](coregraphics/cgdataconsumer.md): An abstraction for data-writing tasks that eliminates the need to manage a raw memory buffer.
- [CGDataProviderRef](coregraphics/cgdataprovider.md): An abstraction for data-reading tasks that eliminates the need to manage a raw memory buffer.
- [CGFontRef](coregraphics/cgfont.md): A set of character glyphs and layout information for drawing text.
- [CGFunctionRef](coregraphics/cgfunction.md): A general facility for defining and using callback functions.
- [CGGradientRef](coregraphics/cggradient.md): A definition for a smooth transition between colors for drawing radial and axial gradient fills.
- [CGImageRef](coregraphics/cgimage.md): A bitmap image or image mask.
- [CGLayerRef](coregraphics/cglayer.md): An offscreen context for reusing content drawn with Core Graphics.
- [CGPathRef](coregraphics/cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGPatternRef](coregraphics/cgpattern.md): A 2D pattern to be used for drawing graphics paths.
- [CGPDFArray](coregraphics/cgpdfarray.md): An array structure within a PDF document.
- [CGPDFContentStream](coregraphics/cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
- [CGPDFDictionary](coregraphics/cgpdfdictionary.md): A dictionary structure within a PDF document.
- [CGPDFDocumentRef](coregraphics/cgpdfdocument.md): A document that contains PDF (Portable Document Format) drawing information.
- [CGPDFObject](coregraphics/cgpdfobject.md): An object representing content within a PDF document.
- [CGPDFOperatorTable](coregraphics/cgpdfoperatortable.md): A set of callback functions for operators used when scanning content in a PDF document.
- [CGPDFPageRef](coregraphics/cgpdfpage.md): A type that represents a page in a PDF document.
- [CGPDFScanner](coregraphics/cgpdfscanner.md): A parser object for handling content and operators in a PDF content stream.
- [CGPDFStream](coregraphics/cgpdfstream.md): A stream or sequence of data bytes in a PDF document.
- [CGPDFString](coregraphics/cgpdfstring.md): A text string in a PDF document.
- [CGPSConverterRef](coregraphics/cgpsconverter.md): An opaque data type used to convert PostScript data to PDF data.
- [CGShadingRef](coregraphics/cgshading.md): A definition for a smooth transition between colors, controlled by a custom function you provide, for drawing radial and axial gradient fills.

### Services

- [Quartz Display Services](coregraphics/quartz-display-services.md): Provides direct access to features in the macOS window server for configuring and controlling display hardware.
- [Quartz Event Services](coregraphics/quartz-event-services.md): Provides features for managing *event taps*—filters for observing and altering the stream of low-level user input events in macOS.
- [Quartz Window Services](coregraphics/quartz-window-services.md): Provides information about the windows managed by the macOS window server.

### Reference

- [CGAffineTransform](coregraphics/cgaffinetransform.md): An affine transformation matrix for use in drawing 2D graphics.
- [CGGeometry](coregraphics/cggeometry.md): Various structures and associated functions for 2D geometric primitives.
- [Core Graphics Structures](coregraphics/core-graphics-structures.md)
- [Core Graphics Enumerations](coregraphics/core-graphics-enumerations.md)
- [Core Graphics Constants](coregraphics/core-graphics-constants.md)
- [Core Graphics Functions](coregraphics/core-graphics-functions.md)
- [Core Graphics Data Types](coregraphics/core-graphics-data-types.md)
- [Core Graphics Macros](coregraphics/core-graphics-macros.md)

### Structures

- [CGBitmapParameters](coregraphics/cgbitmapparameters-1cm7j.md)
- [CGContentInfo](coregraphics/cgcontentinfo.md)
- [CGContentToneMappingInfo](coregraphics/cgcontenttonemappinginfo-c.struct.md)

### Variables

- [kCGAdaptiveMaximumBitDepth](coregraphics/kcgadaptivemaximumbitdepth.md)
- [kCGContentAverageLightLevel](coregraphics/kcgcontentaveragelightlevel.md)
- [kCGContentAverageLightLevelNits](coregraphics/kcgcontentaveragelightlevelnits.md)
- [kCGDisplayStreamColorSpace](coregraphics/kcgdisplaystreamcolorspace.md): Deprecated.
- [kCGDisplayStreamDestinationRect](coregraphics/kcgdisplaystreamdestinationrect.md): Deprecated.
- [kCGDisplayStreamMinimumFrameTime](coregraphics/kcgdisplaystreamminimumframetime.md): Deprecated.
- [kCGDisplayStreamPreserveAspectRatio](coregraphics/kcgdisplaystreampreserveaspectratio.md): Deprecated.
- [kCGDisplayStreamQueueDepth](coregraphics/kcgdisplaystreamqueuedepth.md): Deprecated.
- [kCGDisplayStreamShowCursor](coregraphics/kcgdisplaystreamshowcursor.md): Deprecated.
- [kCGDisplayStreamSourceRect](coregraphics/kcgdisplaystreamsourcerect.md): Deprecated.
- [kCGDisplayStreamYCbCrMatrix](coregraphics/kcgdisplaystreamycbcrmatrix.md): Deprecated.
- [kCGDynamicRangeConstrained](coregraphics/kcgdynamicrangeconstrained.md)
- [kCGDynamicRangeHigh](coregraphics/kcgdynamicrangehigh.md)
- [kCGDynamicRangeStandard](coregraphics/kcgdynamicrangestandard.md)
- [kCGPreferredDynamicRange](coregraphics/kcgpreferreddynamicrange.md)

### Functions

- [CGBitmapContextCreateAdaptive](coregraphics/cgbitmapcontextcreateadaptive.md)
- [CGBitmapInfoMake](coregraphics/cgbitmapinfomake.md)
- [CGColorGetContentHeadroom](coregraphics/cgcolor/contentheadroom.md)
- [CGColorCreateWithContentHeadroom](coregraphics/cgcolor/init%28headroom_colorspace_red_green_blue_alpha_%29.md)
- [CGColorConversionInfoCreateForToneMapping](coregraphics/cgcolorconversioninfo/init%28src_srcheadroom_dst_dstheadroom_tonemapping_options___%29.md): Deprecated.
- [CGPDFContextAddStructureTreeRootChild](coregraphics/cgcontext/addstructuretreerootchild%28__%29.md)
- [CGPDFContextBeginMarkedContentSequence](coregraphics/cgcontext/beginmarkedcontentsequence%28__%29.md)
- [CGPDFContextBeginNonStructuralMarkedContentSequence](coregraphics/cgcontext/beginnonstructuralmarkedcontentsequence%28__%29.md)
- [CGPDFContextBeginObjectReference](coregraphics/cgcontext/beginobjectreference%28%29.md)
- [CGPDFContextEndMarkedContentSequence](coregraphics/cgcontext/endmarkedcontentsequence%28%29.md)
- [CGPDFContextEndObjectReference](coregraphics/cgcontext/endobjectreference%28%29.md)
- [CGBitmapContextCreate](coregraphics/cgcontext/init%28data_width_height_bitspercomponent_bytesperrow_space_bitmapinfo_%29-10b3i.md)
- [CGBitmapContextCreateWithData](coregraphics/cgcontext/init%28data_width_height_bitspercomponent_bytesperrow_space_bitmapinfo_releasecallback_releaseinfo_%29-4yzt5.md)
- [CGContextSynchronizeAttributes](coregraphics/cgcontext/synchronizeattributes%28%29.md)
- [CGContextGetContentToneMappingInfo](coregraphics/cgcontextgetcontenttonemappinginfo.md)
- [CGContextSetContentToneMappingInfo](coregraphics/cgcontextsetcontenttonemappinginfo.md)
- [CGDisplayCreateImage](coregraphics/cgdisplaycreateimage.md): Deprecated.
- [CGDisplayCreateImageForRect](coregraphics/cgdisplaycreateimageforrect.md): Deprecated.
- [CGDisplayStreamCreate](coregraphics/cgdisplaystreamcreate.md): Deprecated.
- [CGDisplayStreamCreateWithDispatchQueue](coregraphics/cgdisplaystreamcreatewithdispatchqueue.md): Deprecated.
- [CGDisplayStreamGetRunLoopSource](coregraphics/cgdisplaystreamgetrunloopsource.md): Deprecated.
- [CGDisplayStreamGetTypeID](coregraphics/cgdisplaystreamgettypeid.md): Deprecated.
- [CGDisplayStreamStart](coregraphics/cgdisplaystreamstart.md): Deprecated.
- [CGDisplayStreamStop](coregraphics/cgdisplaystreamstop.md): Deprecated.
- [CGDisplayStreamUpdateCreateMergedUpdate](coregraphics/cgdisplaystreamupdatecreatemergedupdate.md): Deprecated.
- [CGDisplayStreamUpdateGetDropCount](coregraphics/cgdisplaystreamupdategetdropcount.md): Deprecated.
- [CGDisplayStreamUpdateGetMovedRectsDelta](coregraphics/cgdisplaystreamupdategetmovedrectsdelta.md): Deprecated.
- [CGDisplayStreamUpdateGetRects](coregraphics/cgdisplaystreamupdategetrects.md): Deprecated.
- [CGDisplayStreamUpdateGetTypeID](coregraphics/cgdisplaystreamupdategettypeid.md): Deprecated.
- [CGEXRToneMappingGammaGetDefaultOptions](coregraphics/cgexrtonemappinggammagetdefaultoptions.md)
- [CGGradientGetContentHeadroom](coregraphics/cggradient/contentheadroom.md)
- [CGGradientCreateWithContentHeadroom](coregraphics/cggradient/init%28headroom_colorspace_colorcomponents_locations_count_%29.md)
- [CGPDFMarkedContentItemRelease](coregraphics/cgpdfmarkedcontentitemrelease.md)
- [CGPDFMarkedContentItemRetain](coregraphics/cgpdfmarkedcontentitemretain.md)
- [CGPDFStructureElementAddStructureElement](coregraphics/cgpdfstructureelement/addchild%28__%29.md)
- [CGPDFStructureElementAddMarkedContentItem](coregraphics/cgpdfstructureelement/addmarkedcontentitem%28__%29.md)
- [CGPDFStructureElementCreate](coregraphics/cgpdfstructureelement/init%28tagtype_%29.md)
- [CGPDFStructureElementRelease](coregraphics/cgpdfstructureelementrelease.md)
- [CGPDFStructureElementRetain](coregraphics/cgpdfstructureelementretain.md)
- [CGPDFStructureElementSetActualText](coregraphics/cgpdfstructureelementsetactualtext.md)
- [CGPDFStructureElementSetAlternativeText](coregraphics/cgpdfstructureelementsetalternativetext.md)
- [CGPDFStructureElementSetExpansionText](coregraphics/cgpdfstructureelementsetexpansiontext.md)
- [CGPDFStructureElementSetLanguageIdentifier](coregraphics/cgpdfstructureelementsetlanguageidentifier.md)
- [CGPDFStructureElementSetTitle](coregraphics/cgpdfstructureelementsettitle.md)
- [CGRenderingBufferLockBytePtr](coregraphics/cgrenderingbufferlockbyteptr.md)
- [CGRenderingBufferProviderCreate](coregraphics/cgrenderingbufferprovidercreate.md)
- [CGRenderingBufferProviderCreateWithCFData](coregraphics/cgrenderingbufferprovidercreatewithcfdata.md)
- [CGRenderingBufferProviderGetSize](coregraphics/cgrenderingbufferprovidergetsize.md)
- [CGRenderingBufferProviderGetTypeID](coregraphics/cgrenderingbufferprovidergettypeid.md)
- [CGRenderingBufferUnlockBytePtr](coregraphics/cgrenderingbufferunlockbyteptr.md)
- [CGShadingGetContentHeadroom](coregraphics/cgshading/contentheadroom.md)
- [CGShadingCreateAxialWithContentHeadroom](coregraphics/cgshading/init%28axialheadroom_space_start_end_function_extendstart_extendend_%29.md)
- [CGShadingCreateRadialWithContentHeadroom](coregraphics/cgshading/init%28radialheadroom_space_start_startradius_end_endradius_function_extendstart_extendend_%29.md)
- [CGWindowListCreateImage](coregraphics/cgwindowlistcreateimage.md): Deprecated.
- [CGWindowListCreateImageFromArray](coregraphics/cgwindowlistcreateimagefromarray.md): Deprecated.

### Macros

- [CG_ENUM_SOFT_DEPRECATED_WITH_REPLACEMENT](coregraphics/cg_enum_soft_deprecated_with_replacement.md)
- [CG_SOFT_DEPRECATED_WITH_REPLACEMENT](coregraphics/cg_soft_deprecated_with_replacement.md)

### Type Aliases

- [CGPDFMarkedContentItemRef](coregraphics/cgpdfmarkedcontentitem.md)
- [CGPDFStructureElementRef](coregraphics/cgpdfstructureelement.md)
- [CGRenderingBufferProviderRef](coregraphics/cgrenderingbufferprovider.md)

### Enumerations

- [CGBitmapLayout](coregraphics/cgbitmaplayout.md)
- [CGColorModel](coregraphics/cgcolormodel.md)
- [CGComponent](coregraphics/cgcomponent.md)
- [CGImageComponentInfo](coregraphics/cgimagecomponentinfo.md)

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)
