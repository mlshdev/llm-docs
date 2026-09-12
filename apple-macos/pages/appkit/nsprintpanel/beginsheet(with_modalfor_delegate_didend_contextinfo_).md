> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/beginsheet(with:modalfor:delegate:didend:contextinfo:)](https://developer.apple.com/documentation/appkit/nsprintpanel/beginsheet(with:modalfor:delegate:didend:contextinfo:))

# beginSheet(with:modalFor:delegate:didEnd:contextInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Displays a Print panel sheet and runs it modally for the specified window.

## Declaration

```swift
func beginSheet(with printInfo: NSPrintInfo, modalFor docWindow: NSWindow, delegate: Any?, didEnd didEndSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `printInfo`: The printing information for the current job.
- `docWindow`: The window on which to display the sheet.
- `delegate`: A modal delegate object assigned to handle the closing of the Print panel sheet.
- `didEndSelector`: The selector to call on the modal delegate object when the sheet is dismissed. The signature of this method is listed in the Discussion section.
- `contextInfo`: A pointer to context data the `didEndSelector` method needs to process the sheet. This data is user-defined and may be `NULL`.

<a id="Discussion"></a>

## Discussion

When the modal session ends, if `modalDelegate` and `didEndSelector` contain non-`nil` values, the method specified by `didEndSelector` is invoked on the object in `modalDelegate`. The data you specify in `contextInfo` is passed as a parameter to the `didEndSelector` method. The object in `modalDelegate` is not the same as a delegate assigned to the panel. Modal delegates for sheets are temporary and the relationship lasts only until the sheet is dismissed.

The `didEndSelector` argument must have the following signature:

```objc
- (void)printPanelDidEnd:(NSPrintPanel *)printPanel returnCode:(NSInteger)returnCode  contextInfo: (void *)contextInfo;
```

The value passed as `returnCode` is either `NSCancelButton` or `NSOKButton`. The value `NSOKButton` is returned even if the user clicked the Preview button.

## See Also

### Running the Panel

- [beginSheet(using:on:completionHandler:)](beginsheet%28using_on_completionhandler_%29.md)
- [runModal()](runmodal%28%29.md): Displays the Print panel and begins the modal loop.
- [runModal(with:)](runmodal%28with_%29.md): Displays the Print panel and runs the modal loop using the specified printing information.

# beginSheetWithPrintInfo:modalForWindow:delegate:didEndSelector:contextInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Displays a Print panel sheet and runs it modally for the specified window.

## Declaration

```objectivec
- (void) beginSheetWithPrintInfo:(NSPrintInfo *) printInfo modalForWindow:(NSWindow *) docWindow delegate:(id) delegate didEndSelector:(SEL) didEndSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `printInfo`: The printing information for the current job.
- `docWindow`: The window on which to display the sheet.
- `delegate`: A modal delegate object assigned to handle the closing of the Print panel sheet.
- `didEndSelector`: The selector to call on the modal delegate object when the sheet is dismissed. The signature of this method is listed in the Discussion section.
- `contextInfo`: A pointer to context data the `didEndSelector` method needs to process the sheet. This data is user-defined and may be `NULL`.

<a id="Discussion"></a>

## Discussion

When the modal session ends, if `modalDelegate` and `didEndSelector` contain non-`nil` values, the method specified by `didEndSelector` is invoked on the object in `modalDelegate`. The data you specify in `contextInfo` is passed as a parameter to the `didEndSelector` method. The object in `modalDelegate` is not the same as a delegate assigned to the panel. Modal delegates for sheets are temporary and the relationship lasts only until the sheet is dismissed.

The `didEndSelector` argument must have the following signature:

```objc
- (void)printPanelDidEnd:(NSPrintPanel *)printPanel returnCode:(NSInteger)returnCode  contextInfo: (void *)contextInfo;
```

The value passed as `returnCode` is either `NSCancelButton` or `NSOKButton`. The value `NSOKButton` is returned even if the user clicked the Preview button.

## See Also

### Running the Panel

- [beginSheetUsingPrintInfo:onWindow:completionHandler:](beginsheet%28using_on_completionhandler_%29.md)
- [runModal](runmodal%28%29.md): Displays the Print panel and begins the modal loop.
- [runModalWithPrintInfo:](runmodal%28with_%29.md): Displays the Print panel and runs the modal loop using the specified printing information.
