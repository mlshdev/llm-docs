> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsbeginpdfcontexttodata(_:_:_:)](https://developer.apple.com/documentation/uikit/uigraphicsbeginpdfcontexttodata(_:_:_:))

# UIGraphicsBeginPDFContextToData(\_:\_:\_:) (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a PDF graphics context that targets the specified mutable data object.

## Declaration

```swift
func UIGraphicsBeginPDFContextToData(_ data: NSMutableData, _ bounds: CGRect, _ documentInfo: [AnyHashable : Any]?)
```

## Parameters

- `data`: The data object to receive the PDF output data.
- `bounds`: A rectangle that specifies the default size and location of PDF pages. (This value is used as the default media box for each new page.) The origin of the rectangle should typically be (0, 0). Specifying an empty rectangle ([CGRectZero](../coregraphics/cgrectzero.md)) sets the default page size to 8.5 by 11 inches (612 by 792 points).
- `documentInfo`: A dictionary that specifies additional information to be associated with the PDF file. You can use these keys to specify additional metadata and security information for the PDF, such as the author of the PDF or the password for accessing it. The keys in this dictionary are the same keys you pass to the [init(consumer:mediaBox:\_:)](../coregraphics/cgcontext/init%28consumer_mediabox___%29.md) function and are described in [Auxiliary Dictionary Keys](../coregraphics/auxiliary-dictionary-keys.md). The dictionary is retained by the new context, so on return you may safely release it.

  Specify `nil` if you do not want to associate any additional information with the PDF document.

<a id="Discussion"></a>

## Discussion

After creating the graphics context, this function makes it the current drawing context. Any subsequent drawing commands are therefore captured and turned into PDF data. When you are done drawing, you must call the [UIGraphicsEndPDFContext()](uigraphicsendpdfcontext%28%29.md) function to close the PDF graphics context.

You can use all of the same drawing routines that you would normally use to draw the contents of your application. The graphics context converts all drawing commands into PDF drawing commands automatically. However, before you issue any drawing commands to a PDF context, you must start a new page by calling the [UIGraphicsBeginPDFPage()](uigraphicsbeginpdfpage%28%29.md) or [UIGraphicsBeginPDFPageWithInfo(\_:\_:)](uigraphicsbeginpdfpagewithinfo%28____%29.md) function. You can also use these functions to define additional pages later.

After creating it, you can get the PDF context using the [UIGraphicsGetCurrentContext()](uigraphicsgetcurrentcontext%28%29.md) function.

## See Also

### PDF creation

- [UIGraphicsBeginPDFContextToFile(\_:\_:\_:)](uigraphicsbeginpdfcontexttofile%28______%29.md): Creates a PDF graphics context that targets a file at the specified path.
- [UIGraphicsEndPDFContext()](uigraphicsendpdfcontext%28%29.md): Closes a PDF graphics context and pops it from the current context stack.
- [UIGraphicsBeginPDFPage()](uigraphicsbeginpdfpage%28%29.md): Marks the beginning of a new page in a PDF context and configures it using default values.
- [UIGraphicsBeginPDFPageWithInfo(\_:\_:)](uigraphicsbeginpdfpagewithinfo%28____%29.md): Marks the beginning of a new page in a PDF context and configures it using the specified custom values.
- [UIGraphicsGetPDFContextBounds()](uigraphicsgetpdfcontextbounds%28%29.md): Returns the current page bounds.
- [UIGraphicsAddPDFContextDestinationAtPoint(\_:\_:)](uigraphicsaddpdfcontextdestinationatpoint%28____%29.md): Creates a jump destination in the current page.
- [UIGraphicsSetPDFContextDestinationForRect(\_:\_:)](uigraphicssetpdfcontextdestinationforrect%28____%29.md): Links a rectangular area on the current page to the specified jump destination.
- [UIGraphicsSetPDFContextURLForRect(\_:\_:)](uigraphicssetpdfcontexturlforrect%28____%29.md): Links a rectangular area on the current page to the specified URL.

# UIGraphicsBeginPDFContextToData (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a PDF graphics context that targets the specified mutable data object.

## Declaration

```objectivec
extern void UIGraphicsBeginPDFContextToData(NSMutableData *data, CGRect bounds, NSDictionary *documentInfo);
```

## Parameters

- `data`: The data object to receive the PDF output data.
- `bounds`: A rectangle that specifies the default size and location of PDF pages. (This value is used as the default media box for each new page.) The origin of the rectangle should typically be (0, 0). Specifying an empty rectangle ([CGRectZero](../coregraphics/cgrectzero.md)) sets the default page size to 8.5 by 11 inches (612 by 792 points).
- `documentInfo`: A dictionary that specifies additional information to be associated with the PDF file. You can use these keys to specify additional metadata and security information for the PDF, such as the author of the PDF or the password for accessing it. The keys in this dictionary are the same keys you pass to the [CGPDFContextCreate](../coregraphics/cgcontext/init%28consumer_mediabox___%29.md) function and are described in [Auxiliary Dictionary Keys](../coregraphics/auxiliary-dictionary-keys.md). The dictionary is retained by the new context, so on return you may safely release it.

  Specify `nil` if you do not want to associate any additional information with the PDF document.

<a id="Discussion"></a>

## Discussion

After creating the graphics context, this function makes it the current drawing context. Any subsequent drawing commands are therefore captured and turned into PDF data. When you are done drawing, you must call the [UIGraphicsEndPDFContext](uigraphicsendpdfcontext%28%29.md) function to close the PDF graphics context.

You can use all of the same drawing routines that you would normally use to draw the contents of your application. The graphics context converts all drawing commands into PDF drawing commands automatically. However, before you issue any drawing commands to a PDF context, you must start a new page by calling the [UIGraphicsBeginPDFPage](uigraphicsbeginpdfpage%28%29.md) or [UIGraphicsBeginPDFPageWithInfo](uigraphicsbeginpdfpagewithinfo%28____%29.md) function. You can also use these functions to define additional pages later.

After creating it, you can get the PDF context using the [UIGraphicsGetCurrentContext](uigraphicsgetcurrentcontext%28%29.md) function.

## See Also

### PDF creation

- [UIGraphicsBeginPDFContextToFile](uigraphicsbeginpdfcontexttofile%28______%29.md): Creates a PDF graphics context that targets a file at the specified path.
- [UIGraphicsEndPDFContext](uigraphicsendpdfcontext%28%29.md): Closes a PDF graphics context and pops it from the current context stack.
- [UIGraphicsBeginPDFPage](uigraphicsbeginpdfpage%28%29.md): Marks the beginning of a new page in a PDF context and configures it using default values.
- [UIGraphicsBeginPDFPageWithInfo](uigraphicsbeginpdfpagewithinfo%28____%29.md): Marks the beginning of a new page in a PDF context and configures it using the specified custom values.
- [UIGraphicsGetPDFContextBounds](uigraphicsgetpdfcontextbounds%28%29.md): Returns the current page bounds.
- [UIGraphicsAddPDFContextDestinationAtPoint](uigraphicsaddpdfcontextdestinationatpoint%28____%29.md): Creates a jump destination in the current page.
- [UIGraphicsSetPDFContextDestinationForRect](uigraphicssetpdfcontextdestinationforrect%28____%29.md): Links a rectangular area on the current page to the specified jump destination.
- [UIGraphicsSetPDFContextURLForRect](uigraphicssetpdfcontexturlforrect%28____%29.md): Links a rectangular area on the current page to the specified URL.
