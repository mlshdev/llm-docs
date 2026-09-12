> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagelayout/runmodal(with:)](https://developer.apple.com/documentation/appkit/nspagelayout/runmodal(with:))

# runModal(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays the page layout panel and begins the modal loop using the specified print info object.

## Declaration

```swift
func runModal(with printInfo: NSPrintInfo) -> Int
```

## Parameters

- `printInfo`: The `NSPrintInfo` object to use.

<a id="return-value"></a>

## Return Value

`NSCancelButton` if the user clicks the Cancel button; otherwise, `NSOKButton`.

<a id="Discussion"></a>

## Discussion

The receiver’s values are recorded in `printInfo`.

## See Also

### Running the page setup dialog

- [beginSheet(using:on:completionHandler:)](beginsheet%28using_on_completionhandler_%29.md)
- [beginSheet(with:modalFor:delegate:didEnd:contextInfo:)](beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md): Deprecated. Presents a page setup sheet for the specified print info object, document-modal relative to the specified window.
- [runModal()](runmodal%28%29.md): Displays the page layout panel and begins the modal loop using the shared print info object.

# runModalWithPrintInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays the page layout panel and begins the modal loop using the specified print info object.

## Declaration

```objectivec
- (NSInteger) runModalWithPrintInfo:(NSPrintInfo *) printInfo;
```

## Parameters

- `printInfo`: The `NSPrintInfo` object to use.

<a id="return-value"></a>

## Return Value

`NSCancelButton` if the user clicks the Cancel button; otherwise, `NSOKButton`.

<a id="Discussion"></a>

## Discussion

The receiver’s values are recorded in `printInfo`.

## See Also

### Running the page setup dialog

- [beginSheetUsingPrintInfo:onWindow:completionHandler:](beginsheet%28using_on_completionhandler_%29.md)
- [beginSheetWithPrintInfo:modalForWindow:delegate:didEndSelector:contextInfo:](beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md): Deprecated. Presents a page setup sheet for the specified print info object, document-modal relative to the specified window.
- [runModal](runmodal%28%29.md): Displays the page layout panel and begins the modal loop using the shared print info object.
