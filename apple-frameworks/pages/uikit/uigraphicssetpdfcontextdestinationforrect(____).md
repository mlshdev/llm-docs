> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicssetpdfcontextdestinationforrect(_:_:)](https://developer.apple.com/documentation/uikit/uigraphicssetpdfcontextdestinationforrect(_:_:))

# UIGraphicsSetPDFContextDestinationForRect(\_:\_:) (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Links a rectangular area on the current page to the specified jump destination.

## Declaration

```swift
func UIGraphicsSetPDFContextDestinationForRect(_ name: String, _ rect: CGRect)
```

## Parameters

- `name`: A named destination in the PDF document. This is the same name you used when creating the jump destination using the [UIGraphicsAddPDFContextDestinationAtPoint(\_:\_:)](uigraphicsaddpdfcontextdestinationatpoint%28____%29.md) function.
- `rect`: A rectangle on the current page of the PDF context.

<a id="Discussion"></a>

## Discussion

You use this function to create live links within a PDF document. Tapping the specified rectangle in the PDF document causes the document to display the contents at the associated jump destination.

If the current graphics context is not a PDF context, this function does nothing.

## See Also

### PDF creation

- [UIGraphicsBeginPDFContextToData(\_:\_:\_:)](uigraphicsbeginpdfcontexttodata%28______%29.md): Creates a PDF graphics context that targets the specified mutable data object.
- [UIGraphicsBeginPDFContextToFile(\_:\_:\_:)](uigraphicsbeginpdfcontexttofile%28______%29.md): Creates a PDF graphics context that targets a file at the specified path.
- [UIGraphicsEndPDFContext()](uigraphicsendpdfcontext%28%29.md): Closes a PDF graphics context and pops it from the current context stack.
- [UIGraphicsBeginPDFPage()](uigraphicsbeginpdfpage%28%29.md): Marks the beginning of a new page in a PDF context and configures it using default values.
- [UIGraphicsBeginPDFPageWithInfo(\_:\_:)](uigraphicsbeginpdfpagewithinfo%28____%29.md): Marks the beginning of a new page in a PDF context and configures it using the specified custom values.
- [UIGraphicsGetPDFContextBounds()](uigraphicsgetpdfcontextbounds%28%29.md): Returns the current page bounds.
- [UIGraphicsAddPDFContextDestinationAtPoint(\_:\_:)](uigraphicsaddpdfcontextdestinationatpoint%28____%29.md): Creates a jump destination in the current page.
- [UIGraphicsSetPDFContextURLForRect(\_:\_:)](uigraphicssetpdfcontexturlforrect%28____%29.md): Links a rectangular area on the current page to the specified URL.

# UIGraphicsSetPDFContextDestinationForRect (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Links a rectangular area on the current page to the specified jump destination.

## Declaration

```objectivec
extern void UIGraphicsSetPDFContextDestinationForRect(NSString *name, CGRect rect);
```

## Parameters

- `name`: A named destination in the PDF document. This is the same name you used when creating the jump destination using the [UIGraphicsAddPDFContextDestinationAtPoint](uigraphicsaddpdfcontextdestinationatpoint%28____%29.md) function.
- `rect`: A rectangle on the current page of the PDF context.

<a id="Discussion"></a>

## Discussion

You use this function to create live links within a PDF document. Tapping the specified rectangle in the PDF document causes the document to display the contents at the associated jump destination.

If the current graphics context is not a PDF context, this function does nothing.

## See Also

### PDF creation

- [UIGraphicsBeginPDFContextToData](uigraphicsbeginpdfcontexttodata%28______%29.md): Creates a PDF graphics context that targets the specified mutable data object.
- [UIGraphicsBeginPDFContextToFile](uigraphicsbeginpdfcontexttofile%28______%29.md): Creates a PDF graphics context that targets a file at the specified path.
- [UIGraphicsEndPDFContext](uigraphicsendpdfcontext%28%29.md): Closes a PDF graphics context and pops it from the current context stack.
- [UIGraphicsBeginPDFPage](uigraphicsbeginpdfpage%28%29.md): Marks the beginning of a new page in a PDF context and configures it using default values.
- [UIGraphicsBeginPDFPageWithInfo](uigraphicsbeginpdfpagewithinfo%28____%29.md): Marks the beginning of a new page in a PDF context and configures it using the specified custom values.
- [UIGraphicsGetPDFContextBounds](uigraphicsgetpdfcontextbounds%28%29.md): Returns the current page bounds.
- [UIGraphicsAddPDFContextDestinationAtPoint](uigraphicsaddpdfcontextdestinationatpoint%28____%29.md): Creates a jump destination in the current page.
- [UIGraphicsSetPDFContextURLForRect](uigraphicssetpdfcontexturlforrect%28____%29.md): Links a rectangular area on the current page to the specified URL.
