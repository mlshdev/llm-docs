> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/endsheet(_:)](https://developer.apple.com/documentation/appkit/nsapplication/endsheet(_:))

# endSheet(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Ends a document modal session by specifying the sheet window.

> Use [endSheet(\_:)](../nswindow/endsheet%28__%29-4dmmq.md) method of [NSWindow](../nswindow.md) instead.

## Declaration

```swift
func endSheet(_ sheet: NSWindow)
```

## Parameters

- `sheet`: The sheet whose modal session you want to end.

<a id="Discussion"></a>

## Discussion

This method ends the modal session with the return code [stop](modalresponse/stop.md).

## See Also

### Methods

- [activate(ignoringOtherApps:)](activate%28ignoringotherapps_%29.md): Deprecated. Makes the receiver the active app.
- [endModalSession(\_:)](endmodalsession%28__%29.md): Finishes a modal session.
- [beginSheet(\_:modalFor:modalDelegate:didEnd:contextInfo:)](beginsheet%28__modalfor_modaldelegate_didend_contextinfo_%29.md): Deprecated. Starts a document modal session.
- [endSheet(\_:returnCode:)](endsheet%28__returncode_%29.md): Deprecated. Ends a document modal session by specifying the sheet window.

# endSheet: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Ends a document modal session by specifying the sheet window.

> Use [endSheet:](../nswindow/endsheet%28__%29-4dmmq.md) method of [NSWindow](../nswindow.md) instead.

## Declaration

```objectivec
- (void) endSheet:(NSWindow *) sheet;
```

## Parameters

- `sheet`: The sheet whose modal session you want to end.

<a id="Discussion"></a>

## Discussion

This method ends the modal session with the return code [NSModalResponseStop](modalresponse/stop.md).

## See Also

### Methods

- [activateIgnoringOtherApps:](activate%28ignoringotherapps_%29.md): Deprecated. Makes the receiver the active app.
- [beginModalSessionForWindow:relativeToWindow:](beginmodalsessionforwindow_relativetowindow_.md): Deprecated.
- [runModalForWindow:relativeToWindow:](runmodalforwindow_relativetowindow_.md): Deprecated.
- [endModalSession:](endmodalsession%28__%29.md): Finishes a modal session.
- [beginSheet:modalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheet%28__modalfor_modaldelegate_didend_contextinfo_%29.md): Deprecated. Starts a document modal session.
- [endSheet:returnCode:](endsheet%28__returncode_%29.md): Deprecated. Ends a document modal session by specifying the sheet window.
- [application:printFiles:](application_printfiles_.md): Deprecated. Use the delegate method [application:printFiles:withSettings:showPrintPanels:](../nsapplicationdelegate/application%28__printfiles_withsettings_showprintpanels_%29.md) instead.
- [application:delegateHandlesKey:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/application:delegatehandleskey:): Deprecated. Sent by Cocoa’s built-in scripting support during execution of `get` or `set` script commands to find out if the delegate can handle operations on the specified key-value key.
