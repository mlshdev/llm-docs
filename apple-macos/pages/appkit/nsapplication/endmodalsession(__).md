> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/endmodalsession(_:)](https://developer.apple.com/documentation/appkit/nsapplication/endmodalsession(_:))

# endModalSession(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Finishes a modal session.

## Declaration

```swift
func endModalSession(_ session: NSApplication.ModalSession)
```

## Parameters

- `session`: A modal session structure returned by a previous invocation of [beginModalSession(for:)](beginmodalsession%28for_%29.md).

## See Also

### Related Documentation

- [beginModalSession(for:)](beginmodalsession%28for_%29.md): Sets up a modal session with the given window and returns a pointer to the `NSModalSession` structure representing the session.
- [runModalSession(\_:)](runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSession(for:)](beginmodalsession%28for_%29.md).

### Methods

- [activate(ignoringOtherApps:)](activate%28ignoringotherapps_%29.md): Deprecated. Makes the receiver the active app.
- [beginSheet(\_:modalFor:modalDelegate:didEnd:contextInfo:)](beginsheet%28__modalfor_modaldelegate_didend_contextinfo_%29.md): Deprecated. Starts a document modal session.
- [endSheet(\_:)](endsheet%28__%29.md): Deprecated. Ends a document modal session by specifying the sheet window.
- [endSheet(\_:returnCode:)](endsheet%28__returncode_%29.md): Deprecated. Ends a document modal session by specifying the sheet window.

# endModalSession: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Finishes a modal session.

## Declaration

```objectivec
- (void) endModalSession:(NSModalSession) session;
```

## Parameters

- `session`: A modal session structure returned by a previous invocation of [beginModalSessionForWindow:](beginmodalsession%28for_%29.md).

## See Also

### Related Documentation

- [beginModalSessionForWindow:](beginmodalsession%28for_%29.md): Sets up a modal session with the given window and returns a pointer to the `NSModalSession` structure representing the session.
- [runModalSession:](runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSessionForWindow:](beginmodalsession%28for_%29.md).

### Methods

- [activateIgnoringOtherApps:](activate%28ignoringotherapps_%29.md): Deprecated. Makes the receiver the active app.
- [beginModalSessionForWindow:relativeToWindow:](beginmodalsessionforwindow_relativetowindow_.md): Deprecated.
- [runModalForWindow:relativeToWindow:](runmodalforwindow_relativetowindow_.md): Deprecated.
- [beginSheet:modalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheet%28__modalfor_modaldelegate_didend_contextinfo_%29.md): Deprecated. Starts a document modal session.
- [endSheet:](endsheet%28__%29.md): Deprecated. Ends a document modal session by specifying the sheet window.
- [endSheet:returnCode:](endsheet%28__returncode_%29.md): Deprecated. Ends a document modal session by specifying the sheet window.
- [application:printFiles:](application_printfiles_.md): Deprecated. Use the delegate method [application:printFiles:withSettings:showPrintPanels:](../nsapplicationdelegate/application%28__printfiles_withsettings_showprintpanels_%29.md) instead.
- [application:delegateHandlesKey:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/application:delegatehandleskey:): Deprecated. Sent by Cocoa’s built-in scripting support during execution of `get` or `set` script commands to find out if the delegate can handle operations on the specified key-value key.
