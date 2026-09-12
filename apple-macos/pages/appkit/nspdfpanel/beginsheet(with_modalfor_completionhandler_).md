> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspdfpanel/beginsheet(with:modalfor:completionhandler:)](https://developer.apple.com/documentation/appkit/nspdfpanel/beginsheet(with:modalfor:completionhandler:))

# beginSheet(with:modalFor:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Presents a document-modal PDF panel.

## Declaration

```swift
func beginSheet(with pdfInfo: NSPDFInfo, modalFor docWindow: NSWindow?, completionHandler: @escaping (Int) -> Void)
```

```swift
func beginSheet(with pdfInfo: NSPDFInfo, modalFor docWindow: NSWindow?) async -> Int
```

## Parameters

- `pdfInfo`: The `NSPDFInfo` object describing the parameters to be used when creating the PDF file.
- `docWindow`: The window in which the PDF panel will be presented.
- `completionHandler`: The block called when the user dismisses the PDF panel.

<a id="Discussion"></a>

## Discussion

This method presents a slightly different PDF panel depending on whether the [requestsParentDirectory](options-swift.struct/requestsparentdirectory.md) constant is set. If the user dismisses the panel without canceling it, this method updates the [NSPDFInfo](../nspdfinfo.md) object with any changes the user makes.

# beginSheetWithPDFInfo:modalForWindow:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Presents a document-modal PDF panel.

## Declaration

```objectivec
- (void) beginSheetWithPDFInfo:(NSPDFInfo *) pdfInfo modalForWindow:(NSWindow *) docWindow completionHandler:(void (^)(NSInteger )) completionHandler;
```

## Parameters

- `pdfInfo`: The `NSPDFInfo` object describing the parameters to be used when creating the PDF file.
- `docWindow`: The window in which the PDF panel will be presented.
- `completionHandler`: The block called when the user dismisses the PDF panel.

<a id="Discussion"></a>

## Discussion

This method presents a slightly different PDF panel depending on whether the [NSPDFPanelRequestsParentDirectory](options-swift.struct/requestsparentdirectory.md) constant is set. If the user dismisses the panel without canceling it, this method updates the [NSPDFInfo](../nspdfinfo.md) object with any changes the user makes.
