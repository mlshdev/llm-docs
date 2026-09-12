> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagelayout/beginsheet(using:on:completionhandler:)](https://developer.apple.com/documentation/appkit/nspagelayout/beginsheet(using:on:completionhandler:))

# beginSheet(using:on:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```swift
func beginSheet(using printInfo: NSPrintInfo, on parentWindow: NSWindow, completionHandler handler: ((NSPageLayout.Result) -> Void)? = nil)
```

```swift
func beginSheet(using printInfo: NSPrintInfo, on parentWindow: NSWindow) async -> NSPageLayout.Result
```

## See Also

### Running the page setup dialog

- [beginSheet(with:modalFor:delegate:didEnd:contextInfo:)](beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md): Deprecated. Presents a page setup sheet for the specified print info object, document-modal relative to the specified window.
- [runModal()](runmodal%28%29.md): Displays the page layout panel and begins the modal loop using the shared print info object.
- [runModal(with:)](runmodal%28with_%29.md): Displays the page layout panel and begins the modal loop using the specified print info object.

# beginSheetUsingPrintInfo:onWindow:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```objectivec
- (void) beginSheetUsingPrintInfo:(NSPrintInfo *) printInfo onWindow:(NSWindow *) parentWindow completionHandler:(void (^)(NSPageLayoutResult result)) handler;
```

## See Also

### Running the page setup dialog

- [beginSheetWithPrintInfo:modalForWindow:delegate:didEndSelector:contextInfo:](beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md): Deprecated. Presents a page setup sheet for the specified print info object, document-modal relative to the specified window.
- [runModal](runmodal%28%29.md): Displays the page layout panel and begins the modal loop using the shared print info object.
- [runModalWithPrintInfo:](runmodal%28with_%29.md): Displays the page layout panel and begins the modal loop using the specified print info object.
