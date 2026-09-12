> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/application:printfiles:](https://developer.apple.com/documentation/appkit/nsapplication/application:printfiles:)

# application:printFiles:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.4)

Use the delegate method [application:printFiles:withSettings:showPrintPanels:](../nsapplicationdelegate/application%28__printfiles_withsettings_showprintpanels_%29.md) instead.

## Declaration

```objectivec
- (void) application:(NSApplication *) sender printFiles:(NSArray<NSString *> *) filenames;
```

## Parameters

- `sender`: Requests application to print file.
- `filenames`: The name of the file to print.

<a id="Discussion"></a>

## Discussion

Identical to [application:printFile:](../nsapplicationdelegate/application%28__printfile_%29.md) except that the receiver prints multiple files corresponding to the file names in the `filenames` array.

Delegates should invoke the [replyToOpenOrPrint:](reply%28toopenorprint_%29.md) method upon success or failure, or when the user cancels the operation.

## See Also

### Methods

- [activateIgnoringOtherApps:](activate%28ignoringotherapps_%29.md): Deprecated. Makes the receiver the active app.
- [beginModalSessionForWindow:relativeToWindow:](beginmodalsessionforwindow_relativetowindow_.md): Deprecated.
- [runModalForWindow:relativeToWindow:](runmodalforwindow_relativetowindow_.md): Deprecated.
- [endModalSession:](endmodalsession%28__%29.md): Finishes a modal session.
- [beginSheet:modalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheet%28__modalfor_modaldelegate_didend_contextinfo_%29.md): Deprecated. Starts a document modal session.
- [endSheet:](endsheet%28__%29.md): Deprecated. Ends a document modal session by specifying the sheet window.
- [endSheet:returnCode:](endsheet%28__returncode_%29.md): Deprecated. Ends a document modal session by specifying the sheet window.
- [application:delegateHandlesKey:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/application:delegatehandleskey:): Deprecated. Sent by Cocoa’s built-in scripting support during execution of `get` or `set` script commands to find out if the delegate can handle operations on the specified key-value key.
