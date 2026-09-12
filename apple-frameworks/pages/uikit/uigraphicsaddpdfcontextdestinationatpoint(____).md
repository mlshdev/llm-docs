> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsaddpdfcontextdestinationatpoint(_:_:)](https://developer.apple.com/documentation/uikit/uigraphicsaddpdfcontextdestinationatpoint(_:_:))

# UIGraphicsAddPDFContextDestinationAtPoint(\_:\_:) (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a jump destination in the current page.

## Declaration

```swift
func UIGraphicsAddPDFContextDestinationAtPoint(_ name: String, _ point: CGPoint)
```

## Parameters

- `name`: The name of the destination point. The name you assign is local to the PDF document and is what you use when creating links to this destination.
- `point`: A point on the current page of the PDF context.

<a id="Discussion"></a>

## Discussion

This function marks the specified point in the current page as the destination of a jump. When the user taps a link that takes them to this jump destination, the PDF document scrolls until the specified point is visible.

If the current graphics context is not a PDF context, this function does nothing.

For information on how to create links to this destination, see the [UIGraphicsSetPDFContextDestinationForRect(\_:\_:)](uigraphicssetpdfcontextdestinationforrect%28____%29.md) function.

## See Also

### PDF creation

- [UIGraphicsBeginPDFContextToData(\_:\_:\_:)](uigraphicsbeginpdfcontexttodata%28______%29.md): Creates a PDF graphics context that targets the specified mutable data object.
- [UIGraphicsBeginPDFContextToFile(\_:\_:\_:)](uigraphicsbeginpdfcontexttofile%28______%29.md): Creates a PDF graphics context that targets a file at the specified path.
- [UIGraphicsEndPDFContext()](uigraphicsendpdfcontext%28%29.md): Closes a PDF graphics context and pops it from the current context stack.
- [UIGraphicsBeginPDFPage()](uigraphicsbeginpdfpage%28%29.md): Marks the beginning of a new page in a PDF context and configures it using default values.
- [UIGraphicsBeginPDFPageWithInfo(\_:\_:)](uigraphicsbeginpdfpagewithinfo%28____%29.md): Marks the beginning of a new page in a PDF context and configures it using the specified custom values.
- [UIGraphicsGetPDFContextBounds()](uigraphicsgetpdfcontextbounds%28%29.md): Returns the current page bounds.
- [UIGraphicsSetPDFContextDestinationForRect(\_:\_:)](uigraphicssetpdfcontextdestinationforrect%28____%29.md): Links a rectangular area on the current page to the specified jump destination.
- [UIGraphicsSetPDFContextURLForRect(\_:\_:)](uigraphicssetpdfcontexturlforrect%28____%29.md): Links a rectangular area on the current page to the specified URL.

# UIGraphicsAddPDFContextDestinationAtPoint (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a jump destination in the current page.

## Declaration

```objectivec
extern void UIGraphicsAddPDFContextDestinationAtPoint(NSString *name, CGPoint point);
```

## Parameters

- `name`: The name of the destination point. The name you assign is local to the PDF document and is what you use when creating links to this destination.
- `point`: A point on the current page of the PDF context.

<a id="Discussion"></a>

## Discussion

This function marks the specified point in the current page as the destination of a jump. When the user taps a link that takes them to this jump destination, the PDF document scrolls until the specified point is visible.

If the current graphics context is not a PDF context, this function does nothing.

For information on how to create links to this destination, see the [UIGraphicsSetPDFContextDestinationForRect](uigraphicssetpdfcontextdestinationforrect%28____%29.md) function.

## See Also

### PDF creation

- [UIGraphicsBeginPDFContextToData](uigraphicsbeginpdfcontexttodata%28______%29.md): Creates a PDF graphics context that targets the specified mutable data object.
- [UIGraphicsBeginPDFContextToFile](uigraphicsbeginpdfcontexttofile%28______%29.md): Creates a PDF graphics context that targets a file at the specified path.
- [UIGraphicsEndPDFContext](uigraphicsendpdfcontext%28%29.md): Closes a PDF graphics context and pops it from the current context stack.
- [UIGraphicsBeginPDFPage](uigraphicsbeginpdfpage%28%29.md): Marks the beginning of a new page in a PDF context and configures it using default values.
- [UIGraphicsBeginPDFPageWithInfo](uigraphicsbeginpdfpagewithinfo%28____%29.md): Marks the beginning of a new page in a PDF context and configures it using the specified custom values.
- [UIGraphicsGetPDFContextBounds](uigraphicsgetpdfcontextbounds%28%29.md): Returns the current page bounds.
- [UIGraphicsSetPDFContextDestinationForRect](uigraphicssetpdfcontextdestinationforrect%28____%29.md): Links a rectangular area on the current page to the specified jump destination.
- [UIGraphicsSetPDFContextURLForRect](uigraphicssetpdfcontexturlforrect%28____%29.md): Links a rectangular area on the current page to the specified URL.
