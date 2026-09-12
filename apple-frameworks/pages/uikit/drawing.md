> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/drawing](https://developer.apple.com/documentation/uikit/drawing)

# Drawing (Swift)

**Framework:** UIKit  
**Kind:** API Collection

Configure your app’s drawing environment using colors, renderers, draw paths, strings, and shadows.

## Topics

### UI updates

- [UIUpdateLink](uiupdatelink.md): An object you use to observe, participate in, and affect the UI update process.
- [UIUpdateInfo](uiupdateinfo.md): An object that contains detailed information about the current UI update state.
- [UIUpdateActionPhase](uiupdateactionphase.md): An object that defines specific phases of the UI update process.

### Color

- [UIColor](uicolor.md): An object that stores color data and sometimes opacity.

### Graphics contexts

Use renderers to turn a set of programmatic drawing commands into a bitmap or PDF image.

- [UIGraphicsRenderer](uigraphicsrenderer.md): An abstract base class for creating graphics renderers.
- [UIGraphicsRendererContext](uigraphicsrenderercontext.md): The base class for the drawing environments for graphics renderers.
- [UIGraphicsRendererFormat](uigraphicsrendererformat.md): A set of drawing attributes that represents the configuration of a graphics renderer context.
- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md): A graphics renderer for creating Core Graphics-backed images.
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.

### Paths

- [UIBezierPath](uibezierpath.md): A path that consists of straight and curved line segments that you can render in your custom views.
- [UIRectFill(\_:)](uirectfill%28__%29.md): Fills the specified rectangle with the current color.
- [UIRectFillUsingBlendMode(\_:\_:)](uirectfillusingblendmode%28____%29.md): Fills a rectangle with the current fill color using the specified blend mode.
- [UIRectFrame(\_:)](uirectframe%28__%29.md): Draws a frame around the inside of the specified rectangle.
- [UIRectFrameUsingBlendMode(\_:\_:)](uirectframeusingblendmode%28____%29.md): Draws a frame around the inside of a rectangle using the specified blend mode.

### Strings

- [NSStringDrawingContext](nsstringdrawingcontext.md): An object that manages metrics for drawing attributed strings.
- [NSStringDrawingOptions](nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.
- [UIBaselineAdjustment](uibaselineadjustment.md): Vertical adjustment options.

### Shadows

- [NSShadow](nsshadow.md): An object you use to specify attributes to create and style a drop shadow during drawing operations.

### Graphics context primitives

Manage the current graphics environment using Core Graphics framework types.

- [UIGraphicsGetCurrentContext()](uigraphicsgetcurrentcontext%28%29.md): Returns the current graphics context.
- [UIGraphicsPushContext(\_:)](uigraphicspushcontext%28__%29.md): Makes the specified graphics context the current context.
- [UIGraphicsPopContext()](uigraphicspopcontext%28%29.md): Removes the current graphics context from the top of the stack, restoring the previous context.
- [UIGraphicsBeginImageContextWithOptions(\_:\_:\_:)](uigraphicsbeginimagecontextwithoptions%28______%29.md): Deprecated. Creates a bitmap-based graphics context with the specified options.
- [UIRectClip(\_:)](uirectclip%28__%29.md): Modifies the current clipping path by intersecting it with the specified rectangle.

### Primitive type conversions

- [cgAffineTransform(for:)](../foundation/nscoder/cgaffinetransform%28for_%29.md): Returns a Core Graphics affine transform structure corresponding to the data in a given string.
- [cgPoint(for:)](../foundation/nscoder/cgpoint%28for_%29.md): Returns a Core Graphics point structure corresponding to the data in a given string.
- [cgRect(for:)](../foundation/nscoder/cgrect%28for_%29.md): Returns a Core Graphics rectangle structure corresponding to the data in a given string.
- [cgSize(for:)](../foundation/nscoder/cgsize%28for_%29.md): Returns a Core Graphics size structure corresponding to the data in a given string.
- [cgVector(for:)](../foundation/nscoder/cgvector%28for_%29.md): Returns a Core Graphics vector corresponding to the data in a given string.
- [string(for:)](../foundation/nscoder/string%28for_%29-6yx6n.md): Returns a string formatted to contain the data from an affine transform.
- [string(for:)](../foundation/nscoder/string%28for_%29-6ix86.md): Returns a string formatted to contain the data from a point.
- [string(for:)](../foundation/nscoder/string%28for_%29-4qz0a.md): Returns a string formatted to contain the data from a rectangle.
- [string(for:)](../foundation/nscoder/string%28for_%29-2f1xb.md): Returns a string formatted to contain the data from a size data structure.
- [string(for:)](../foundation/nscoder/string%28for_%29-4omzv.md): Returns a string formatted to contain the data from a vector data structure.

## See Also

### Graphics, drawing, and printing

- [Images and PDF](images-and-pdf.md): Create and manage images, including those that use bitmap and PDF formats.
- [Printing](printing.md): Display the system print panels and manage the printing process.

# Drawing (Objective-C)

**Framework:** UIKit  
**Kind:** API Collection

Configure your app’s drawing environment using colors, renderers, draw paths, strings, and shadows.

## Topics

### UI updates

- [UIUpdateLink](uiupdatelink.md): An object you use to observe, participate in, and affect the UI update process.
- [UIUpdateInfo](uiupdateinfo.md): An object that contains detailed information about the current UI update state.
- [UIUpdateActionPhase](uiupdateactionphase.md): An object that defines specific phases of the UI update process.

### Color

- [UIColor](uicolor.md): An object that stores color data and sometimes opacity.

### Graphics contexts

Use renderers to turn a set of programmatic drawing commands into a bitmap or PDF image.

- [UIGraphicsRenderer](uigraphicsrenderer.md): An abstract base class for creating graphics renderers.
- [UIGraphicsRendererContext](uigraphicsrenderercontext.md): The base class for the drawing environments for graphics renderers.
- [UIGraphicsRendererFormat](uigraphicsrendererformat.md): A set of drawing attributes that represents the configuration of a graphics renderer context.
- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md): A graphics renderer for creating Core Graphics-backed images.
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.

### Paths

- [UIBezierPath](uibezierpath.md): A path that consists of straight and curved line segments that you can render in your custom views.
- [UIRectFill](uirectfill%28__%29.md): Fills the specified rectangle with the current color.
- [UIRectFillUsingBlendMode](uirectfillusingblendmode%28____%29.md): Fills a rectangle with the current fill color using the specified blend mode.
- [UIRectFrame](uirectframe%28__%29.md): Draws a frame around the inside of the specified rectangle.
- [UIRectFrameUsingBlendMode](uirectframeusingblendmode%28____%29.md): Draws a frame around the inside of a rectangle using the specified blend mode.

### Strings

- [NSStringDrawingContext](nsstringdrawingcontext.md): An object that manages metrics for drawing attributed strings.
- [NSStringDrawingOptions](nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.
- [UIBaselineAdjustment](uibaselineadjustment.md): Vertical adjustment options.
- [UILineBreakMode](uilinebreakmode.md): Deprecated. Options for wrapping and truncating text.
- [UITextAlignment](uitextalignment.md): Deprecated. Options for aligning text horizontally.
- [UITextAttributeFont](uitextattributefont.md): Deprecated. The key to the font in a text attributes dictionary.
- [UITextAttributeTextColor](uitextattributetextcolor.md): Deprecated. The key to the text color in a text attributes dictionary.
- [UITextAttributeTextShadowColor](uitextattributetextshadowcolor.md): Deprecated. The key to the text shadow color in a text attributes dictionary.
- [UITextAttributeTextShadowOffset](uitextattributetextshadowoffset.md): Deprecated. The key to the offset for the text shadow in a text attributes dictionary.

### Shadows

- [NSShadow](nsshadow.md): An object you use to specify attributes to create and style a drop shadow during drawing operations.

### Graphics context primitives

Manage the current graphics environment using Core Graphics framework types.

- [UIGraphicsGetCurrentContext](uigraphicsgetcurrentcontext%28%29.md): Returns the current graphics context.
- [UIGraphicsPushContext](uigraphicspushcontext%28__%29.md): Makes the specified graphics context the current context.
- [UIGraphicsPopContext](uigraphicspopcontext%28%29.md): Removes the current graphics context from the top of the stack, restoring the previous context.
- [UIGraphicsBeginImageContextWithOptions](uigraphicsbeginimagecontextwithoptions%28______%29.md): Deprecated. Creates a bitmap-based graphics context with the specified options.
- [UIRectClip](uirectclip%28__%29.md): Modifies the current clipping path by intersecting it with the specified rectangle.

### Primitive type conversions

- [CGAffineTransformFromString](cgaffinetransformfromstring.md): Returns a Core Graphics affine transform structure corresponding to the data in a given string.
- [CGPointFromString](cgpointfromstring.md): Returns a Core Graphics point structure corresponding to the data in a given string.
- [CGRectFromString](cgrectfromstring.md): Returns a Core Graphics rectangle structure corresponding to the data in a given string.
- [CGSizeFromString](cgsizefromstring.md): Returns a Core Graphics size structure corresponding to the data in a given string.
- [CGVectorFromString](cgvectorfromstring.md): Returns a Core Graphics vector corresponding to the data in a given string.
- [NSStringFromCGAffineTransform](nsstringfromcgaffinetransform.md): Returns a string formatted to contain the data from an affine transform.
- [NSStringFromCGPoint](nsstringfromcgpoint.md): Returns a string formatted to contain the data from a point.
- [NSStringFromCGRect](nsstringfromcgrect.md): Returns a string formatted to contain the data from a rectangle.
- [NSStringFromCGSize](nsstringfromcgsize.md): Returns a string formatted to contain the data from a size data structure.
- [NSStringFromCGVector](nsstringfromcgvector.md): Returns a string formatted to contain the data from a vector data structure.

## See Also

### Graphics, drawing, and printing

- [Images and PDF](images-and-pdf.md): Create and manage images, including those that use bitmap and PDF formats.
- [Printing](printing.md): Display the system print panels and manage the printing process.
