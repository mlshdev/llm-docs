> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/beginsheet(_:modalfor:modaldelegate:didend:contextinfo:)](https://developer.apple.com/documentation/appkit/nsapplication/beginsheet(_:modalfor:modaldelegate:didend:contextinfo:))

# beginSheet(\_:modalFor:modalDelegate:didEnd:contextInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Starts a document modal session.

> Use the [beginSheet(\_:completionHandler:)](../nswindow/beginsheet%28__completionhandler_%29.md) method of [NSWindow](../nswindow.md) instead.

## Declaration

```swift
func beginSheet(_ sheet: NSWindow, modalFor docWindow: NSWindow, modalDelegate: Any?, didEnd didEndSelector: Selector?, contextInfo: UnsafeMutableRawPointer!)
```

## Parameters

- `sheet`: The window object representing the sheet you want to display.
- `docWindow`: The window object to which you want to attach the sheet.
- `modalDelegate`: The delegate object that defines your `didEndSelector` method. If `nil`, the method in `didEndSelector` is not called.
- `didEndSelector`: An optional method to call when the sheet’s modal session has ended. This method must be defined on the object in the `modalDelegate` parameter and have the following signature:

  ```objc
  - (void)sheetDidEnd:(NSWindow *)sheet returnCode:(NSInteger)returnCode contextInfo:(void *)contextInfo;
  ```
- `contextInfo`: A pointer to the context info you want passed to the `didEndSelector` method when the sheet’s modal session ends.

<a id="Discussion"></a>

## Discussion

This method displays the sheet modally on the specified window and returns control to the caller. Most events targeted at `docWindow` are prohibited while the sheet is displayed but the app’s main run loop runs normally otherwise.

## See Also

### Methods

- [activate(ignoringOtherApps:)](activate%28ignoringotherapps_%29.md): Deprecated. Makes the receiver the active app.
- [endModalSession(\_:)](endmodalsession%28__%29.md): Finishes a modal session.
- [endSheet(\_:)](endsheet%28__%29.md): Deprecated. Ends a document modal session by specifying the sheet window.
- [endSheet(\_:returnCode:)](endsheet%28__returncode_%29.md): Deprecated. Ends a document modal session by specifying the sheet window.

# beginSheet:modalForWindow:modalDelegate:didEndSelector:contextInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Starts a document modal session.

> Use the [beginSheet:completionHandler:](../nswindow/beginsheet%28__completionhandler_%29.md) method of [NSWindow](../nswindow.md) instead.

## Declaration

```objectivec
- (void) beginSheet:(NSWindow *) sheet modalForWindow:(NSWindow *) docWindow modalDelegate:(id) modalDelegate didEndSelector:(SEL) didEndSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `sheet`: The window object representing the sheet you want to display.
- `docWindow`: The window object to which you want to attach the sheet.
- `modalDelegate`: The delegate object that defines your `didEndSelector` method. If `nil`, the method in `didEndSelector` is not called.
- `didEndSelector`: An optional method to call when the sheet’s modal session has ended. This method must be defined on the object in the `modalDelegate` parameter and have the following signature:

  ```objc
  - (void)sheetDidEnd:(NSWindow *)sheet returnCode:(NSInteger)returnCode contextInfo:(void *)contextInfo;
  ```
- `contextInfo`: A pointer to the context info you want passed to the `didEndSelector` method when the sheet’s modal session ends.

<a id="Discussion"></a>

## Discussion

This method displays the sheet modally on the specified window and returns control to the caller. Most events targeted at `docWindow` are prohibited while the sheet is displayed but the app’s main run loop runs normally otherwise.

## See Also

### Methods

- [activateIgnoringOtherApps:](activate%28ignoringotherapps_%29.md): Deprecated. Makes the receiver the active app.
- [beginModalSessionForWindow:relativeToWindow:](beginmodalsessionforwindow_relativetowindow_.md): Deprecated.
- [runModalForWindow:relativeToWindow:](runmodalforwindow_relativetowindow_.md): Deprecated.
- [endModalSession:](endmodalsession%28__%29.md): Finishes a modal session.
- [endSheet:](endsheet%28__%29.md): Deprecated. Ends a document modal session by specifying the sheet window.
- [endSheet:returnCode:](endsheet%28__returncode_%29.md): Deprecated. Ends a document modal session by specifying the sheet window.
- [application:printFiles:](application_printfiles_.md): Deprecated. Use the delegate method [application:printFiles:withSettings:showPrintPanels:](../nsapplicationdelegate/application%28__printfiles_withsettings_showprintpanels_%29.md) instead.
- [application:delegateHandlesKey:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/application:delegatehandleskey:): Deprecated. Sent by Cocoa’s built-in scripting support during execution of `get` or `set` script commands to find out if the delegate can handle operations on the specified key-value key.
