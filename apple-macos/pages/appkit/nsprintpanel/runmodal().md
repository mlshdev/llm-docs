> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/runmodal()](https://developer.apple.com/documentation/appkit/nsprintpanel/runmodal())

# runModal() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays the Print panel and begins the modal loop.

## Declaration

```swift
func runModal() -> Int
```

<a id="return-value"></a>

## Return Value

`NSCancelButton` if the user clicks the Cancel button; otherwise `NSOKButton`.

<a id="Discussion"></a>

## Discussion

This method uses the printing information associated with the current printing operation.

## See Also

### Related Documentation

- [printInfo](../nsprintoperation/printinfo.md): The printing information associated with the print operation.

### Running the Panel

- [beginSheet(using:on:completionHandler:)](beginsheet%28using_on_completionhandler_%29.md)
- [beginSheet(with:modalFor:delegate:didEnd:contextInfo:)](beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md): Deprecated. Displays a Print panel sheet and runs it modally for the specified window.
- [runModal(with:)](runmodal%28with_%29.md): Displays the Print panel and runs the modal loop using the specified printing information.

# runModal (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays the Print panel and begins the modal loop.

## Declaration

```objectivec
- (NSInteger) runModal;
```

<a id="return-value"></a>

## Return Value

`NSCancelButton` if the user clicks the Cancel button; otherwise `NSOKButton`.

<a id="Discussion"></a>

## Discussion

This method uses the printing information associated with the current printing operation.

## See Also

### Related Documentation

- [printInfo](../nsprintoperation/printinfo.md): The printing information associated with the print operation.

### Running the Panel

- [beginSheetUsingPrintInfo:onWindow:completionHandler:](beginsheet%28using_on_completionhandler_%29.md)
- [beginSheetWithPrintInfo:modalForWindow:delegate:didEndSelector:contextInfo:](beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md): Deprecated. Displays a Print panel sheet and runs it modally for the specified window.
- [runModalWithPrintInfo:](runmodal%28with_%29.md): Displays the Print panel and runs the modal loop using the specified printing information.
