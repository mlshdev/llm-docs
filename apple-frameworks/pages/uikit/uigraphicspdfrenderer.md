> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicspdfrenderer](https://developer.apple.com/documentation/uikit/uigraphicspdfrenderer)

# UIGraphicsPDFRenderer (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A graphics renderer for creating PDFs.

## Declaration

```swift
class UIGraphicsPDFRenderer
```

<a id="overview"></a>

## Overview

You can use PDF renderers to create PDF files, without having to manage Core Graphics contexts.

To render a PDF:

1. Optionally create a [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md) object to specify nondefault parameters the renderer should use to create its context.
2. Instantiate a [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md) object, providing the dimensions of the output image and a format object. The renderer uses sensible defaults for the current device if you don’t provide format object, as demonstrated in [Creating a graphics PDF renderer](uigraphicspdfrenderer.md#Creating-a-graphics-PDF-renderer).
3. Choose one of the rendering methods depending on your desired output: [pdfData(actions:)](uigraphicspdfrenderer/pdfdata%28actions_%29.md) outputs the PDF in the form of a [Data](../foundation/data.md) object, and [writePDF(to:withActions:)](uigraphicspdfrenderer/writepdf%28to_withactions_%29.md) saves the PDF as a file directly to disk.
4. Provide Core Graphics drawing instructions within the closure associated with your chosen method, as shown in [Creating a PDF with a PDF renderer](uigraphicspdfrenderer.md#Creating-a-PDF-with-a-PDF-renderer).
5. Optionally, you can create a multi-page PDF, using the approach shown in [Adding pages](uigraphicspdfrenderer.md#Adding-pages).
6. Optionally, add links to your PDF to make navigation easy, as shown in [Creating internal links](uigraphicspdfrenderer.md#Creating-internal-links).

After initializing a PDF renderer, you can use it to draw multiple PDFs with the same configuration.

<a id="Creating-a-graphics-PDF-renderer"></a>

### Creating a graphics PDF renderer

Create a PDF renderer, providing the bounds of the PDF page.

**Swift**

```swift
let renderer = UIGraphicsPDFRenderer(bounds: CGRect(x: 0, y: 0, width: 500, height: 300))
```

**Objective-C**

```objc
UIGraphicsPDFRenderer *renderer = [[UIGraphicsPDFRenderer alloc] initWithBounds:CGRectMake(0, 0, 500, 300)];
```

You can instead use one of the other [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md) initializers to specify a renderer format ([UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md)) in addition to the bounds. This allows you to configure the underlying Core Graphics context with custom PDF document info. If you don’t provide a format, the renderer uses the [default()](uigraphicsrendererformat/default%28%29.md) format, which creates a context best suited for the current device.

<a id="Creating-a-PDF-with-a-PDF-renderer"></a>

### Creating a PDF with a PDF renderer

Use the [pdfData(actions:)](uigraphicspdfrenderer/pdfdata%28actions_%29.md) method to create a PDF with the PDF renderer you created above. This takes a block that represents the drawing actions. Within this block, the renderer creates a Core Graphics context using the parameters provided during renderer initialization, and sets this to be the current context.

Before issuing PDF drawing instructions, you must create a page with a call to either the [beginPage()](uigraphicspdfrenderercontext/beginpage%28%29.md) method or [beginPage(withBounds:pageInfo:)](uigraphicspdfrenderercontext/beginpage%28withbounds_pageinfo_%29.md) method on the supplied [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md).

**Swift**

```swift
let pdf = renderer.pdfData { (context) in
  context.beginPage()
  let attributes = [
    NSFontAttributeName : UIFont.boldSystemFont(ofSize: 150)
  ]
  let text = "Hello!" as NSString
  text.draw(in: CGRect(x: 0, y: 0, width: 500, height: 200), withAttributes: attributes)
}
```

**Objective-C**

```objc
NSData *pdf = [renderer PDFDataWithActions:^(UIGraphicsPDFRendererContext * _Nonnull context) {
  [context beginPage];
  NSDictionary *attributes = @{NSFontAttributeName : [UIFont boldSystemFontOfSize:150]};
  NSString *text = @"Hello!";
  [text drawInRect:CGRectMake(0, 0, 500, 200) withAttributes:attributes];}];  
```

The drawing actions closure takes a single argument of type [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md). This provides access to some high-level drawing functions, such as [fill(\_:)](uigraphicsrenderercontext/fill%28__%29.md) through the [UIGraphicsRendererContext](uigraphicsrenderercontext.md) superclass.

> **Note**

>  This code uses a drawing method on [NSString](../foundation/nsstring.md). If you want to create a PDF with more text, consider using [TextKit](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/iPhoneOSTechOverview/iPhoneOSTechnologies/iPhoneOSTechnologies.html#//apple_ref/doc/uid/TP40007898-CH3-SW11) or [Core Text](https://developer.apple.com/library/archive/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/LowerLevelText-HandlingTechnologies/LowerLevelText-HandlingTechnologies.html#//apple_ref/doc/uid/TP40009542-CH15-SW3), both of which provide extensive text layout functionality.

The above code creates the following result:

![Image of a PDF open in Preview, with the word “Hello!” rendered in large, black lettering in the top-left.](https://developer.apple.com/images/com.apple.uikit/media-2864001@2x.png)

<a id="Adding-pages"></a>

### Adding pages

Add multiple pages to your PDF through repeated calls to the [beginPage()](uigraphicspdfrenderercontext/beginpage%28%29.md) method on the [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md) provided to the drawing block.

**Swift**

```swift
let pdf = renderer.pdfData { (context) in
  let attributes = [
    NSFontAttributeName : UIFont.boldSystemFont(ofSize: 150)
  ]
  for page in 1...3 {
    context.beginPage()
    let text = "Page \(page)" as NSString
    text.draw(in: CGRect(x: 0, y: 0, width: 500, height: 200), withAttributes: attributes)
  }
}
```

**Objective-C**

```objc
NSData *pdf = [renderer PDFDataWithActions:^(UIGraphicsPDFRendererContext * _Nonnull context) {
  NSDictionary *attributes = @{NSFontAttributeName : [UIFont boldSystemFontOfSize:150]}; 
  for (int page = 1; page < 4; page++) {
    [context beginPage];
    NSString *text = [NSString stringWithFormat:@"Page %d", page];
    [text drawInRect:CGRectMake(0, 0, 500, 200) withAttributes:attributes];
  }}];
```

Use the [beginPage(withBounds:pageInfo:)](uigraphicspdfrenderercontext/beginpage%28withbounds_pageinfo_%29.md) method instead of the [beginPage()](uigraphicspdfrenderercontext/beginpage%28%29.md) method if you want to override the default properties for the new page.

This code creates a PDF with three pages, each of which contains the current page number as large text, as shown in the following image.

![Screenshot from Preview showing a 3-page PDF. Each page contains large black lettering which details the current page number.](https://developer.apple.com/images/com.apple.uikit/media-2864003@2x.png)

<a id="Creating-internal-links"></a>

### Creating internal links

You can create internal links, known as destinations, in PDFs. A complete link has two components:

- A named destination. This is a point on a PDF page. You create these with the [addDestination(withName:at:)](uigraphicspdfrenderercontext/adddestination%28withname_at_%29.md) method on [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md).
- A link region. This is a rectangle on a PDF page, which when tapped, instructs the PDF viewing app to jump to a specific named destination. You create these with the [setDestinationWithName(\_:for:)](uigraphicspdfrenderercontext/setdestinationwithname%28__for_%29.md) method on [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md), providing the name of the destination to jump to, and the bounds of the active link region.

The following code demonstrates how to use destinations with a PDF renderer by showing how to create links that jump to the next page.

**Swift**

```swift
let pdf = renderer.pdfData { (context) in
  let pageNumberAttributes = [
    NSFontAttributeName : UIFont.boldSystemFont(ofSize: 150)
  ]
  
  let nextPage = "Next Page ↠" as NSString
  let nextPageRect = CGRect(x: 350, y: 250, width: 150, height: 40)
  let nextPageAttributes = [
    NSFontAttributeName : UIFont.systemFont(ofSize: 25),
    NSBackgroundColorAttributeName : UIColor.red,
    NSForegroundColorAttributeName : UIColor.white
  ]
  
  for page in 1...3 {
    context.beginPage()
    let pageNumber = "Page \(page)" as NSString
    pageNumber.draw(in: CGRect(x: 0, y: 0, width: 500, height: 200), withAttributes: pageNumberAttributes)
    
    nextPage.draw(in: nextPageRect, withAttributes: nextPageAttributes)
    
    context.addDestination(withName: "page-\(page)", at: CGPoint.zero.applying(context.cgContext.userSpaceToDeviceSpaceTransform))
    context.setDestinationWithName("page-\(page + 1)", for: nextPageRect.applying(context.cgContext.userSpaceToDeviceSpaceTransform))
  }
}
```

**Objective-C**

```objc
NSData *pdf = [renderer PDFDataWithActions:^(UIGraphicsPDFRendererContext * _Nonnull context) {
  NSDictionary *attributes = @{NSFontAttributeName : [UIFont boldSystemFontOfSize:150]};
    
  NSString *nextPage = @"Next Page ↠";
  CGRect nextPageRect = CGRectMake(350, 250, 150, 40);
  NSDictionary *nextPageAttributes = @{
    NSFontAttributeName : [UIFont systemFontOfSize:25],
    NSBackgroundColorAttributeName : [UIColor redColor],
    NSForegroundColorAttributeName : [UIColor whiteColor]
  };
  for (int page = 1; page < 4; page++) {
    [context beginPage];
    NSString *pageNumber = [NSString stringWithFormat:@"Page %d", page];
    [pageNumber drawInRect:CGRectMake(0, 0, 500, 200) withAttributes:attributes];
    [nextPage drawInRect:nextPageRect withAttributes:nextPageAttributes];
      
    [context addDestinationWithName:[NSString stringWithFormat:@"page-%d", page]
                            atPoint:CGContextConvertPointToDeviceSpace(context.CGContext, CGPointZero)];
    [context setDestinationWithName:[NSString stringWithFormat:@"page-%d", page+1]
                            forRect:CGContextConvertRectToDeviceSpace(context.CGContext, nextPageRect)];
  }
}];
```

This code adds large red labels that jump from the current page to the next page when clicked. Each page has a destination with names of the form `page-1`, positioned at the origin. The bounding box for the next-page label is the link to the destination on the following page.

> **Note**

>  The [addDestination(withName:at:)](uigraphicspdfrenderercontext/adddestination%28withname_at_%29.md) and [setDestinationWithName(\_:for:)](uigraphicspdfrenderercontext/setdestinationwithname%28__for_%29.md) methods on [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md) use the underlying PDF coordinate space, which has its y-axis flipped with respect to the coordinate system used by Core Graphics. You can translate between the two using the [userSpaceToDeviceSpaceTransform](../coregraphics/cgcontext/userspacetodevicespacetransform.md) property on [CGContext](../coregraphics/cgcontext.md), as shown in the code.

The above code results in the following PDF:

![Screenshot from Preview showing a 3-page PDFs with red links entitled “Next Page” at the bottom-right of each page.](https://developer.apple.com/images/com.apple.uikit/media-2864256@2x.png)

## Topics

### Creating a PDF renderer

- [init(bounds:format:)](uigraphicspdfrenderer/init%28bounds_format_%29.md): Creates a new graphics renderer with the specified bounds and format.

### Managing the PDF data

- [pdfData(actions:)](uigraphicspdfrenderer/pdfdata%28actions_%29.md): Creates a PDF from a set of drawing instructions and returns it as a data object.
- [writePDF(to:withActions:)](uigraphicspdfrenderer/writepdf%28to_withactions_%29.md): Creates a PDF from a set of drawing instructions and saves it to a specified URL.
- [UIGraphicsPDFRenderer.DrawingActions](uigraphicspdfrenderer/drawingactions.md): A closure for drawing PDF content.

## Relationships

### Inherits From

- [UIGraphicsRenderer](uigraphicsrenderer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Graphics contexts

- [UIGraphicsRenderer](uigraphicsrenderer.md): An abstract base class for creating graphics renderers.
- [UIGraphicsRendererContext](uigraphicsrenderercontext.md): The base class for the drawing environments for graphics renderers.
- [UIGraphicsRendererFormat](uigraphicsrendererformat.md): A set of drawing attributes that represents the configuration of a graphics renderer context.
- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md): A graphics renderer for creating Core Graphics-backed images.
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.

# UIGraphicsPDFRenderer (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A graphics renderer for creating PDFs.

## Declaration

```objectivec
@interface UIGraphicsPDFRenderer : UIGraphicsRenderer
```

<a id="overview"></a>

## Overview

You can use PDF renderers to create PDF files, without having to manage Core Graphics contexts.

To render a PDF:

1. Optionally create a [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md) object to specify nondefault parameters the renderer should use to create its context.
2. Instantiate a [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md) object, providing the dimensions of the output image and a format object. The renderer uses sensible defaults for the current device if you don’t provide format object, as demonstrated in [Creating a graphics PDF renderer](uigraphicspdfrenderer.md#Creating-a-graphics-PDF-renderer).
3. Choose one of the rendering methods depending on your desired output: [PDFDataWithActions:](uigraphicspdfrenderer/pdfdata%28actions_%29.md) outputs the PDF in the form of a [Data](../foundation/data.md) object, and [writePDFToURL:withActions:error:](uigraphicspdfrenderer/writepdf%28to_withactions_%29.md) saves the PDF as a file directly to disk.
4. Provide Core Graphics drawing instructions within the closure associated with your chosen method, as shown in [Creating a PDF with a PDF renderer](uigraphicspdfrenderer.md#Creating-a-PDF-with-a-PDF-renderer).
5. Optionally, you can create a multi-page PDF, using the approach shown in [Adding pages](uigraphicspdfrenderer.md#Adding-pages).
6. Optionally, add links to your PDF to make navigation easy, as shown in [Creating internal links](uigraphicspdfrenderer.md#Creating-internal-links).

After initializing a PDF renderer, you can use it to draw multiple PDFs with the same configuration.

<a id="Creating-a-graphics-PDF-renderer"></a>

### Creating a graphics PDF renderer

Create a PDF renderer, providing the bounds of the PDF page.

**Swift**

```swift
let renderer = UIGraphicsPDFRenderer(bounds: CGRect(x: 0, y: 0, width: 500, height: 300))
```

**Objective-C**

```objc
UIGraphicsPDFRenderer *renderer = [[UIGraphicsPDFRenderer alloc] initWithBounds:CGRectMake(0, 0, 500, 300)];
```

You can instead use one of the other [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md) initializers to specify a renderer format ([UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md)) in addition to the bounds. This allows you to configure the underlying Core Graphics context with custom PDF document info. If you don’t provide a format, the renderer uses the [defaultFormat](uigraphicsrendererformat/default%28%29.md) format, which creates a context best suited for the current device.

<a id="Creating-a-PDF-with-a-PDF-renderer"></a>

### Creating a PDF with a PDF renderer

Use the [PDFDataWithActions:](uigraphicspdfrenderer/pdfdata%28actions_%29.md) method to create a PDF with the PDF renderer you created above. This takes a block that represents the drawing actions. Within this block, the renderer creates a Core Graphics context using the parameters provided during renderer initialization, and sets this to be the current context.

Before issuing PDF drawing instructions, you must create a page with a call to either the [beginPage](uigraphicspdfrenderercontext/beginpage%28%29.md) method or [beginPageWithBounds:pageInfo:](uigraphicspdfrenderercontext/beginpage%28withbounds_pageinfo_%29.md) method on the supplied [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md).

**Swift**

```swift
let pdf = renderer.pdfData { (context) in
  context.beginPage()
  let attributes = [
    NSFontAttributeName : UIFont.boldSystemFont(ofSize: 150)
  ]
  let text = "Hello!" as NSString
  text.draw(in: CGRect(x: 0, y: 0, width: 500, height: 200), withAttributes: attributes)
}
```

**Objective-C**

```objc
NSData *pdf = [renderer PDFDataWithActions:^(UIGraphicsPDFRendererContext * _Nonnull context) {
  [context beginPage];
  NSDictionary *attributes = @{NSFontAttributeName : [UIFont boldSystemFontOfSize:150]};
  NSString *text = @"Hello!";
  [text drawInRect:CGRectMake(0, 0, 500, 200) withAttributes:attributes];}];  
```

The drawing actions closure takes a single argument of type [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md). This provides access to some high-level drawing functions, such as [fillRect:](uigraphicsrenderercontext/fill%28__%29.md) through the [UIGraphicsRendererContext](uigraphicsrenderercontext.md) superclass.

> **Note**

>  This code uses a drawing method on [NSString](../foundation/nsstring.md). If you want to create a PDF with more text, consider using [TextKit](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/iPhoneOSTechOverview/iPhoneOSTechnologies/iPhoneOSTechnologies.html#//apple_ref/doc/uid/TP40007898-CH3-SW11) or [Core Text](https://developer.apple.com/library/archive/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/LowerLevelText-HandlingTechnologies/LowerLevelText-HandlingTechnologies.html#//apple_ref/doc/uid/TP40009542-CH15-SW3), both of which provide extensive text layout functionality.

The above code creates the following result:

![Image of a PDF open in Preview, with the word “Hello!” rendered in large, black lettering in the top-left.](https://developer.apple.com/images/com.apple.uikit/media-2864001@2x.png)

<a id="Adding-pages"></a>

### Adding pages

Add multiple pages to your PDF through repeated calls to the [beginPage](uigraphicspdfrenderercontext/beginpage%28%29.md) method on the [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md) provided to the drawing block.

**Swift**

```swift
let pdf = renderer.pdfData { (context) in
  let attributes = [
    NSFontAttributeName : UIFont.boldSystemFont(ofSize: 150)
  ]
  for page in 1...3 {
    context.beginPage()
    let text = "Page \(page)" as NSString
    text.draw(in: CGRect(x: 0, y: 0, width: 500, height: 200), withAttributes: attributes)
  }
}
```

**Objective-C**

```objc
NSData *pdf = [renderer PDFDataWithActions:^(UIGraphicsPDFRendererContext * _Nonnull context) {
  NSDictionary *attributes = @{NSFontAttributeName : [UIFont boldSystemFontOfSize:150]}; 
  for (int page = 1; page < 4; page++) {
    [context beginPage];
    NSString *text = [NSString stringWithFormat:@"Page %d", page];
    [text drawInRect:CGRectMake(0, 0, 500, 200) withAttributes:attributes];
  }}];
```

Use the [beginPageWithBounds:pageInfo:](uigraphicspdfrenderercontext/beginpage%28withbounds_pageinfo_%29.md) method instead of the [beginPage](uigraphicspdfrenderercontext/beginpage%28%29.md) method if you want to override the default properties for the new page.

This code creates a PDF with three pages, each of which contains the current page number as large text, as shown in the following image.

![Screenshot from Preview showing a 3-page PDF. Each page contains large black lettering which details the current page number.](https://developer.apple.com/images/com.apple.uikit/media-2864003@2x.png)

<a id="Creating-internal-links"></a>

### Creating internal links

You can create internal links, known as destinations, in PDFs. A complete link has two components:

- A named destination. This is a point on a PDF page. You create these with the [addDestinationWithName:atPoint:](uigraphicspdfrenderercontext/adddestination%28withname_at_%29.md) method on [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md).
- A link region. This is a rectangle on a PDF page, which when tapped, instructs the PDF viewing app to jump to a specific named destination. You create these with the [setDestinationWithName:forRect:](uigraphicspdfrenderercontext/setdestinationwithname%28__for_%29.md) method on [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md), providing the name of the destination to jump to, and the bounds of the active link region.

The following code demonstrates how to use destinations with a PDF renderer by showing how to create links that jump to the next page.

**Swift**

```swift
let pdf = renderer.pdfData { (context) in
  let pageNumberAttributes = [
    NSFontAttributeName : UIFont.boldSystemFont(ofSize: 150)
  ]
  
  let nextPage = "Next Page ↠" as NSString
  let nextPageRect = CGRect(x: 350, y: 250, width: 150, height: 40)
  let nextPageAttributes = [
    NSFontAttributeName : UIFont.systemFont(ofSize: 25),
    NSBackgroundColorAttributeName : UIColor.red,
    NSForegroundColorAttributeName : UIColor.white
  ]
  
  for page in 1...3 {
    context.beginPage()
    let pageNumber = "Page \(page)" as NSString
    pageNumber.draw(in: CGRect(x: 0, y: 0, width: 500, height: 200), withAttributes: pageNumberAttributes)
    
    nextPage.draw(in: nextPageRect, withAttributes: nextPageAttributes)
    
    context.addDestination(withName: "page-\(page)", at: CGPoint.zero.applying(context.cgContext.userSpaceToDeviceSpaceTransform))
    context.setDestinationWithName("page-\(page + 1)", for: nextPageRect.applying(context.cgContext.userSpaceToDeviceSpaceTransform))
  }
}
```

**Objective-C**

```objc
NSData *pdf = [renderer PDFDataWithActions:^(UIGraphicsPDFRendererContext * _Nonnull context) {
  NSDictionary *attributes = @{NSFontAttributeName : [UIFont boldSystemFontOfSize:150]};
    
  NSString *nextPage = @"Next Page ↠";
  CGRect nextPageRect = CGRectMake(350, 250, 150, 40);
  NSDictionary *nextPageAttributes = @{
    NSFontAttributeName : [UIFont systemFontOfSize:25],
    NSBackgroundColorAttributeName : [UIColor redColor],
    NSForegroundColorAttributeName : [UIColor whiteColor]
  };
  for (int page = 1; page < 4; page++) {
    [context beginPage];
    NSString *pageNumber = [NSString stringWithFormat:@"Page %d", page];
    [pageNumber drawInRect:CGRectMake(0, 0, 500, 200) withAttributes:attributes];
    [nextPage drawInRect:nextPageRect withAttributes:nextPageAttributes];
      
    [context addDestinationWithName:[NSString stringWithFormat:@"page-%d", page]
                            atPoint:CGContextConvertPointToDeviceSpace(context.CGContext, CGPointZero)];
    [context setDestinationWithName:[NSString stringWithFormat:@"page-%d", page+1]
                            forRect:CGContextConvertRectToDeviceSpace(context.CGContext, nextPageRect)];
  }
}];
```

This code adds large red labels that jump from the current page to the next page when clicked. Each page has a destination with names of the form `page-1`, positioned at the origin. The bounding box for the next-page label is the link to the destination on the following page.

> **Note**

>  The [addDestinationWithName:atPoint:](uigraphicspdfrenderercontext/adddestination%28withname_at_%29.md) and [setDestinationWithName:forRect:](uigraphicspdfrenderercontext/setdestinationwithname%28__for_%29.md) methods on [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md) use the underlying PDF coordinate space, which has its y-axis flipped with respect to the coordinate system used by Core Graphics. You can translate between the two using the [CGContextGetUserSpaceToDeviceSpaceTransform](../coregraphics/cgcontext/userspacetodevicespacetransform.md) property on [CGContextRef](../coregraphics/cgcontext.md), as shown in the code.

The above code results in the following PDF:

![Screenshot from Preview showing a 3-page PDFs with red links entitled “Next Page” at the bottom-right of each page.](https://developer.apple.com/images/com.apple.uikit/media-2864256@2x.png)

## Topics

### Creating a PDF renderer

- [initWithBounds:format:](uigraphicspdfrenderer/init%28bounds_format_%29.md): Creates a new graphics renderer with the specified bounds and format.

### Managing the PDF data

- [PDFDataWithActions:](uigraphicspdfrenderer/pdfdata%28actions_%29.md): Creates a PDF from a set of drawing instructions and returns it as a data object.
- [writePDFToURL:withActions:error:](uigraphicspdfrenderer/writepdf%28to_withactions_%29.md): Creates a PDF from a set of drawing instructions and saves it to a specified URL.
- [UIGraphicsPDFDrawingActions](uigraphicspdfrenderer/drawingactions.md): A closure for drawing PDF content.

## Relationships

### Inherits From

- [UIGraphicsRenderer](uigraphicsrenderer.md)

## See Also

### Graphics contexts

- [UIGraphicsRenderer](uigraphicsrenderer.md): An abstract base class for creating graphics renderers.
- [UIGraphicsRendererContext](uigraphicsrenderercontext.md): The base class for the drawing environments for graphics renderers.
- [UIGraphicsRendererFormat](uigraphicsrendererformat.md): A set of drawing attributes that represents the configuration of a graphics renderer context.
- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md): A graphics renderer for creating Core Graphics-backed images.
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.
