> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/beginsheet(using:on:completionhandler:)](https://developer.apple.com/documentation/appkit/nsprintpanel/beginsheet(using:on:completionhandler:))

# beginSheet(using:on:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```swift
func beginSheet(using printInfo: NSPrintInfo, on parentWindow: NSWindow, completionHandler handler: ((NSPrintPanel.Result) -> Void)? = nil)
```

```swift
func beginSheet(using printInfo: NSPrintInfo, on parentWindow: NSWindow) async -> NSPrintPanel.Result
```

<a id="Discussion"></a>

## Discussion

## See Also

### Running the Panel

- [beginSheet(with:modalFor:delegate:didEnd:contextInfo:)](beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md): Deprecated. Displays a Print panel sheet and runs it modally for the specified window.
- [runModal()](runmodal%28%29.md): Displays the Print panel and begins the modal loop.
- [runModal(with:)](runmodal%28with_%29.md): Displays the Print panel and runs the modal loop using the specified printing information.

# beginSheetUsingPrintInfo:onWindow:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```objectivec
- (void) beginSheetUsingPrintInfo:(NSPrintInfo *) printInfo onWindow:(NSWindow *) parentWindow completionHandler:(void (^)(NSPrintPanelResult result)) handler;
```

<a id="Discussion"></a>

## Discussion

## See Also

### Running the Panel

- [beginSheetWithPrintInfo:modalForWindow:delegate:didEndSelector:contextInfo:](beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md): Deprecated. Displays a Print panel sheet and runs it modally for the specified window.
- [runModal](runmodal%28%29.md): Displays the Print panel and begins the modal loop.
- [runModalWithPrintInfo:](runmodal%28with_%29.md): Displays the Print panel and runs the modal loop using the specified printing information.
