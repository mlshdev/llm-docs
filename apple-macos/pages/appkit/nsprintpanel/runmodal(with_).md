> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/runmodal(with:)](https://developer.apple.com/documentation/appkit/nsprintpanel/runmodal(with:))

# runModal(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Displays the Print panel and runs the modal loop using the specified printing information.

## Declaration

```swift
func runModal(with printInfo: NSPrintInfo) -> Int
```

## Parameters

- `printInfo`: The printing information to use while displaying the Print panel.

<a id="return-value"></a>

## Return Value

`NSCancelButton` if the user clicks the Cancel button; otherwise `NSOKButton`.

## See Also

### Running the Panel

- [beginSheet(using:on:completionHandler:)](beginsheet%28using_on_completionhandler_%29.md)
- [beginSheet(with:modalFor:delegate:didEnd:contextInfo:)](beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md): Deprecated. Displays a Print panel sheet and runs it modally for the specified window.
- [runModal()](runmodal%28%29.md): Displays the Print panel and begins the modal loop.

# runModalWithPrintInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Displays the Print panel and runs the modal loop using the specified printing information.

## Declaration

```objectivec
- (NSInteger) runModalWithPrintInfo:(NSPrintInfo *) printInfo;
```

## Parameters

- `printInfo`: The printing information to use while displaying the Print panel.

<a id="return-value"></a>

## Return Value

`NSCancelButton` if the user clicks the Cancel button; otherwise `NSOKButton`.

## See Also

### Running the Panel

- [beginSheetUsingPrintInfo:onWindow:completionHandler:](beginsheet%28using_on_completionhandler_%29.md)
- [beginSheetWithPrintInfo:modalForWindow:delegate:didEndSelector:contextInfo:](beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md): Deprecated. Displays a Print panel sheet and runs it modally for the specified window.
- [runModal](runmodal%28%29.md): Displays the Print panel and begins the modal loop.
