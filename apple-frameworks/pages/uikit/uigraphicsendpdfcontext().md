> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsendpdfcontext()](https://developer.apple.com/documentation/uikit/uigraphicsendpdfcontext())

# UIGraphicsEndPDFContext() (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Closes a PDF graphics context and pops it from the current context stack.

## Declaration

```swift
func UIGraphicsEndPDFContext()
```

<a id="Discussion"></a>

## Discussion

You must call this function after you finish drawing to a PDF graphics context. This function closes the current open page and removes the PDF context from the graphics context stack. It also releases the [CGContext](../coregraphics/cgcontext.md) associated with the PDF context.  If the current graphics context is not a PDF context, this function does nothing.

## See Also

### PDF creation

- [UIGraphicsBeginPDFContextToData(\_:\_:\_:)](uigraphicsbeginpdfcontexttodata%28______%29.md): Creates a PDF graphics context that targets the specified mutable data object.
- [UIGraphicsBeginPDFContextToFile(\_:\_:\_:)](uigraphicsbeginpdfcontexttofile%28______%29.md): Creates a PDF graphics context that targets a file at the specified path.
- [UIGraphicsBeginPDFPage()](uigraphicsbeginpdfpage%28%29.md): Marks the beginning of a new page in a PDF context and configures it using default values.
- [UIGraphicsBeginPDFPageWithInfo(\_:\_:)](uigraphicsbeginpdfpagewithinfo%28____%29.md): Marks the beginning of a new page in a PDF context and configures it using the specified custom values.
- [UIGraphicsGetPDFContextBounds()](uigraphicsgetpdfcontextbounds%28%29.md): Returns the current page bounds.
- [UIGraphicsAddPDFContextDestinationAtPoint(\_:\_:)](uigraphicsaddpdfcontextdestinationatpoint%28____%29.md): Creates a jump destination in the current page.
- [UIGraphicsSetPDFContextDestinationForRect(\_:\_:)](uigraphicssetpdfcontextdestinationforrect%28____%29.md): Links a rectangular area on the current page to the specified jump destination.
- [UIGraphicsSetPDFContextURLForRect(\_:\_:)](uigraphicssetpdfcontexturlforrect%28____%29.md): Links a rectangular area on the current page to the specified URL.

# UIGraphicsEndPDFContext (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Closes a PDF graphics context and pops it from the current context stack.

## Declaration

```objectivec
extern void UIGraphicsEndPDFContext();
```

<a id="Discussion"></a>

## Discussion

You must call this function after you finish drawing to a PDF graphics context. This function closes the current open page and removes the PDF context from the graphics context stack. It also releases the [CGContextRef](../coregraphics/cgcontext.md) associated with the PDF context.  If the current graphics context is not a PDF context, this function does nothing.

## See Also

### PDF creation

- [UIGraphicsBeginPDFContextToData](uigraphicsbeginpdfcontexttodata%28______%29.md): Creates a PDF graphics context that targets the specified mutable data object.
- [UIGraphicsBeginPDFContextToFile](uigraphicsbeginpdfcontexttofile%28______%29.md): Creates a PDF graphics context that targets a file at the specified path.
- [UIGraphicsBeginPDFPage](uigraphicsbeginpdfpage%28%29.md): Marks the beginning of a new page in a PDF context and configures it using default values.
- [UIGraphicsBeginPDFPageWithInfo](uigraphicsbeginpdfpagewithinfo%28____%29.md): Marks the beginning of a new page in a PDF context and configures it using the specified custom values.
- [UIGraphicsGetPDFContextBounds](uigraphicsgetpdfcontextbounds%28%29.md): Returns the current page bounds.
- [UIGraphicsAddPDFContextDestinationAtPoint](uigraphicsaddpdfcontextdestinationatpoint%28____%29.md): Creates a jump destination in the current page.
- [UIGraphicsSetPDFContextDestinationForRect](uigraphicssetpdfcontextdestinationforrect%28____%29.md): Links a rectangular area on the current page to the specified jump destination.
- [UIGraphicsSetPDFContextURLForRect](uigraphicssetpdfcontexturlforrect%28____%29.md): Links a rectangular area on the current page to the specified URL.
