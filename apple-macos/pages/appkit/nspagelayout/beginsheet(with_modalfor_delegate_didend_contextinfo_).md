> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagelayout/beginsheet(with:modalfor:delegate:didend:contextinfo:)](https://developer.apple.com/documentation/appkit/nspagelayout/beginsheet(with:modalfor:delegate:didend:contextinfo:))

# beginSheet(with:modalFor:delegate:didEnd:contextInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Presents a page setup sheet for the specified print info object, document-modal relative to the specified window.

## Declaration

```swift
func beginSheet(with printInfo: NSPrintInfo, modalFor docWindow: NSWindow, delegate: Any?, didEnd didEndSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `printInfo`: The `NSPrintInfo` object to use.
- `docWindow`: The window to which the sheet is attached.
- `delegate`: The delegate to which `didEndSelector` is sent. Can be `nil`.
- `didEndSelector`: The selector sent to the delegate. Can be `nil`.
- `contextInfo`: Context information object passed with `didEndSelector`.

<a id="Discussion"></a>

## Discussion

The `didEndSelector` argument must have the same signature as:

```objc
- (void)pageLayoutDidEnd:(NSPageLayout *)pageLayout returnCode:(int)returnCode  contextInfo: (void *)contextInfo;
```

The value passed as `returnCode` is either `NSCancelButton` or `NSOKButton`.

## See Also

### Running the page setup dialog

- [beginSheet(using:on:completionHandler:)](beginsheet%28using_on_completionhandler_%29.md)
- [runModal()](runmodal%28%29.md): Displays the page layout panel and begins the modal loop using the shared print info object.
- [runModal(with:)](runmodal%28with_%29.md): Displays the page layout panel and begins the modal loop using the specified print info object.

# beginSheetWithPrintInfo:modalForWindow:delegate:didEndSelector:contextInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Presents a page setup sheet for the specified print info object, document-modal relative to the specified window.

## Declaration

```objectivec
- (void) beginSheetWithPrintInfo:(NSPrintInfo *) printInfo modalForWindow:(NSWindow *) docWindow delegate:(id) delegate didEndSelector:(SEL) didEndSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `printInfo`: The `NSPrintInfo` object to use.
- `docWindow`: The window to which the sheet is attached.
- `delegate`: The delegate to which `didEndSelector` is sent. Can be `nil`.
- `didEndSelector`: The selector sent to the delegate. Can be `nil`.
- `contextInfo`: Context information object passed with `didEndSelector`.

<a id="Discussion"></a>

## Discussion

The `didEndSelector` argument must have the same signature as:

```objc
- (void)pageLayoutDidEnd:(NSPageLayout *)pageLayout returnCode:(int)returnCode  contextInfo: (void *)contextInfo;
```

The value passed as `returnCode` is either `NSCancelButton` or `NSOKButton`.

## See Also

### Running the page setup dialog

- [beginSheetUsingPrintInfo:onWindow:completionHandler:](beginsheet%28using_on_completionhandler_%29.md)
- [runModal](runmodal%28%29.md): Displays the page layout panel and begins the modal loop using the shared print info object.
- [runModalWithPrintInfo:](runmodal%28with_%29.md): Displays the page layout panel and begins the modal loop using the specified print info object.
