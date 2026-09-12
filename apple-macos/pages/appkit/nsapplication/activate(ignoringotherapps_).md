> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/activate(ignoringotherapps:)](https://developer.apple.com/documentation/appkit/nsapplication/activate(ignoringotherapps:))

# activate(ignoringOtherApps:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Makes the receiver the active app.

> Use NSApplication method [activate()](activate%28%29.md) instead.

## Declaration

```swift
func activate(ignoringOtherApps ignoreOtherApps: Bool)
```

## Parameters

- `ignoreOtherApps`: If [false](https://developer.apple.com/documentation/swift/false), the app activates only if no other app is currently active. If [true](https://developer.apple.com/documentation/swift/true), the app activates regardless.

<a id="Discussion"></a>

## Discussion

The `flag` parameter is normally set to [false](https://developer.apple.com/documentation/swift/false). When the Finder launches an app, using a value of [false](https://developer.apple.com/documentation/swift/false) for `flag` allows the app to become active if the user waits for it to launch, but the app remains unobtrusive if the user activates another app. Regardless of the setting of `flag`, there may be a time lag before the app activates—you shouldn’t assume the app will be active immediately after sending this message.

You rarely need to invoke this method. Under most circumstances, AppKit takes care of proper activation. However, you might find this method useful if you implement your own methods for inter-app communication.

You don’t need to send this message to make one of the app’s `NSWindows` key. When you send a [makeKey()](../nswindow/makekey%28%29.md) message to an `NSWindow` object, you ensure that it’s the key window when the app is active.

## See Also

### Related Documentation

- [deactivate()](deactivate%28%29.md): Deactivates the receiver.
- [isActive](isactive.md): A Boolean value indicating whether this is the active app.

### Methods

- [endModalSession(\_:)](endmodalsession%28__%29.md): Finishes a modal session.
- [beginSheet(\_:modalFor:modalDelegate:didEnd:contextInfo:)](beginsheet%28__modalfor_modaldelegate_didend_contextinfo_%29.md): Deprecated. Starts a document modal session.
- [endSheet(\_:)](endsheet%28__%29.md): Deprecated. Ends a document modal session by specifying the sheet window.
- [endSheet(\_:returnCode:)](endsheet%28__returncode_%29.md): Deprecated. Ends a document modal session by specifying the sheet window.

# activateIgnoringOtherApps: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Makes the receiver the active app.

> Use NSApplication method [activate](activate%28%29.md) instead.

## Declaration

```objectivec
- (void) activateIgnoringOtherApps:(BOOL) ignoreOtherApps;
```

## Parameters

- `ignoreOtherApps`: If [false](https://developer.apple.com/documentation/swift/false), the app activates only if no other app is currently active. If [true](https://developer.apple.com/documentation/swift/true), the app activates regardless.

<a id="Discussion"></a>

## Discussion

The `flag` parameter is normally set to [false](https://developer.apple.com/documentation/swift/false). When the Finder launches an app, using a value of [false](https://developer.apple.com/documentation/swift/false) for `flag` allows the app to become active if the user waits for it to launch, but the app remains unobtrusive if the user activates another app. Regardless of the setting of `flag`, there may be a time lag before the app activates—you shouldn’t assume the app will be active immediately after sending this message.

You rarely need to invoke this method. Under most circumstances, AppKit takes care of proper activation. However, you might find this method useful if you implement your own methods for inter-app communication.

You don’t need to send this message to make one of the app’s `NSWindows` key. When you send a [makeKeyWindow](../nswindow/makekey%28%29.md) message to an `NSWindow` object, you ensure that it’s the key window when the app is active.

## See Also

### Related Documentation

- [deactivate](deactivate%28%29.md): Deactivates the receiver.
- [active](isactive.md): A Boolean value indicating whether this is the active app.

### Methods

- [beginModalSessionForWindow:relativeToWindow:](beginmodalsessionforwindow_relativetowindow_.md): Deprecated.
- [runModalForWindow:relativeToWindow:](runmodalforwindow_relativetowindow_.md): Deprecated.
- [endModalSession:](endmodalsession%28__%29.md): Finishes a modal session.
- [beginSheet:modalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheet%28__modalfor_modaldelegate_didend_contextinfo_%29.md): Deprecated. Starts a document modal session.
- [endSheet:](endsheet%28__%29.md): Deprecated. Ends a document modal session by specifying the sheet window.
- [endSheet:returnCode:](endsheet%28__returncode_%29.md): Deprecated. Ends a document modal session by specifying the sheet window.
- [application:printFiles:](application_printfiles_.md): Deprecated. Use the delegate method [application:printFiles:withSettings:showPrintPanels:](../nsapplicationdelegate/application%28__printfiles_withsettings_showprintpanels_%29.md) instead.
- [application:delegateHandlesKey:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/application:delegatehandleskey:): Deprecated. Sent by Cocoa’s built-in scripting support during execution of `get` or `set` script commands to find out if the delegate can handle operations on the specified key-value key.
