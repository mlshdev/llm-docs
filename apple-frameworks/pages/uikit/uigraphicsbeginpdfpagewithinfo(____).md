> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsbeginpdfpagewithinfo(_:_:)](https://developer.apple.com/documentation/uikit/uigraphicsbeginpdfpagewithinfo(_:_:))

# UIGraphicsBeginPDFPageWithInfo(\_:\_:) (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Marks the beginning of a new page in a PDF context and configures it using the specified custom values.

## Declaration

```swift
func UIGraphicsBeginPDFPageWithInfo(_ bounds: CGRect, _ pageInfo: [AnyHashable : Any]?)
```

## Parameters

- `bounds`: A rectangle that specifies the size and location of the new PDF page. This rectangle corresponds to the media box rectangle for the page.
- `pageInfo`: A dictionary that specifies additional page-related information, such as the boxes that define different parts of the page. For a list of keys you can include in this dictionary, see Box Keys in [Auxiliary Dictionary Keys](../coregraphics/auxiliary-dictionary-keys.md). The dictionary is retained by the new page, so you may release it after this function returns.

  Specify `nil` if you do not want to associate any additional information with the page.

<a id="Discussion"></a>

## Discussion

This function ends any previous page before beginning a new one. It sets the media box of the new page to the value in the [kCGPDFContextMediaBox](../coregraphics/kcgpdfcontextmediabox.md) key of the `pageInfo` dictionary, or to the value in the `bounds` parameter if the dictionary does not contain the key.

If the current graphics context is not a PDF context, this function does nothing.

You must call this function or the [UIGraphicsBeginPDFPageWithInfo(\_:\_:)](uigraphicsbeginpdfpagewithinfo%28____%29.md) function before you issue any drawing commands.

## See Also

### PDF creation

- [UIGraphicsBeginPDFContextToData(\_:\_:\_:)](uigraphicsbeginpdfcontexttodata%28______%29.md): Creates a PDF graphics context that targets the specified mutable data object.
- [UIGraphicsBeginPDFContextToFile(\_:\_:\_:)](uigraphicsbeginpdfcontexttofile%28______%29.md): Creates a PDF graphics context that targets a file at the specified path.
- [UIGraphicsEndPDFContext()](uigraphicsendpdfcontext%28%29.md): Closes a PDF graphics context and pops it from the current context stack.
- [UIGraphicsBeginPDFPage()](uigraphicsbeginpdfpage%28%29.md): Marks the beginning of a new page in a PDF context and configures it using default values.
- [UIGraphicsGetPDFContextBounds()](uigraphicsgetpdfcontextbounds%28%29.md): Returns the current page bounds.
- [UIGraphicsAddPDFContextDestinationAtPoint(\_:\_:)](uigraphicsaddpdfcontextdestinationatpoint%28____%29.md): Creates a jump destination in the current page.
- [UIGraphicsSetPDFContextDestinationForRect(\_:\_:)](uigraphicssetpdfcontextdestinationforrect%28____%29.md): Links a rectangular area on the current page to the specified jump destination.
- [UIGraphicsSetPDFContextURLForRect(\_:\_:)](uigraphicssetpdfcontexturlforrect%28____%29.md): Links a rectangular area on the current page to the specified URL.

# UIGraphicsBeginPDFPageWithInfo (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Marks the beginning of a new page in a PDF context and configures it using the specified custom values.

## Declaration

```objectivec
extern void UIGraphicsBeginPDFPageWithInfo(CGRect bounds, NSDictionary *pageInfo);
```

## Parameters

- `bounds`: A rectangle that specifies the size and location of the new PDF page. This rectangle corresponds to the media box rectangle for the page.
- `pageInfo`: A dictionary that specifies additional page-related information, such as the boxes that define different parts of the page. For a list of keys you can include in this dictionary, see Box Keys in [Auxiliary Dictionary Keys](../coregraphics/auxiliary-dictionary-keys.md). The dictionary is retained by the new page, so you may release it after this function returns.

  Specify `nil` if you do not want to associate any additional information with the page.

<a id="Discussion"></a>

## Discussion

This function ends any previous page before beginning a new one. It sets the media box of the new page to the value in the [kCGPDFContextMediaBox](../coregraphics/kcgpdfcontextmediabox.md) key of the `pageInfo` dictionary, or to the value in the `bounds` parameter if the dictionary does not contain the key.

If the current graphics context is not a PDF context, this function does nothing.

You must call this function or the [UIGraphicsBeginPDFPageWithInfo](uigraphicsbeginpdfpagewithinfo%28____%29.md) function before you issue any drawing commands.

## See Also

### PDF creation

- [UIGraphicsBeginPDFContextToData](uigraphicsbeginpdfcontexttodata%28______%29.md): Creates a PDF graphics context that targets the specified mutable data object.
- [UIGraphicsBeginPDFContextToFile](uigraphicsbeginpdfcontexttofile%28______%29.md): Creates a PDF graphics context that targets a file at the specified path.
- [UIGraphicsEndPDFContext](uigraphicsendpdfcontext%28%29.md): Closes a PDF graphics context and pops it from the current context stack.
- [UIGraphicsBeginPDFPage](uigraphicsbeginpdfpage%28%29.md): Marks the beginning of a new page in a PDF context and configures it using default values.
- [UIGraphicsGetPDFContextBounds](uigraphicsgetpdfcontextbounds%28%29.md): Returns the current page bounds.
- [UIGraphicsAddPDFContextDestinationAtPoint](uigraphicsaddpdfcontextdestinationatpoint%28____%29.md): Creates a jump destination in the current page.
- [UIGraphicsSetPDFContextDestinationForRect](uigraphicssetpdfcontextdestinationforrect%28____%29.md): Links a rectangular area on the current page to the specified jump destination.
- [UIGraphicsSetPDFContextURLForRect](uigraphicssetpdfcontexturlforrect%28____%29.md): Links a rectangular area on the current page to the specified URL.
