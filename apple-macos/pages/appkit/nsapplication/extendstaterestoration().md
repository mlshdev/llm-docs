> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/extendstaterestoration()](https://developer.apple.com/documentation/appkit/nsapplication/extendstaterestoration())

# extendStateRestoration() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Allows an app to extend its state restoration period.

## Declaration

```swift
func extendStateRestoration()
```

<a id="Discussion"></a>

## Discussion

This method allows an app to extend the state restoration period beyond the usual. For example, the app crashes before state restoration is complete, then it may offer to discard restorable state on the next launch.

If a window has some state that may take a long time to restore, such as a web page, you may use this method and methods to [completeStateRestoration()](completestaterestoration%28%29.md) to extend the period of this crash protection beyond the default.

You call `extendStateRestoration` within your implementation of [restoreWindow(withIdentifier:state:completionHandler:)](restorewindow%28withidentifier_state_completionhandler_%29.md).  You would then call [completeStateRestoration()](completestaterestoration%28%29.md) some time after the window is fully restored.  If the app crashes in the interim, then it may offer to discard restorable state on the next launch.

The `extendStateRestoration` and [completeStateRestoration()](completestaterestoration%28%29.md) methods act as a counter. Each call to `extendStateRestoration` increments the counter, and must be matched with a corresponding call to [completeStateRestoration()](completestaterestoration%28%29.md) which decrements it.  When the counter reaches zero, the app is considered to have been fully restored, and any further calls are silently ignored.

This method is thread safe.

## See Also

### Restoring App Windows at Launch

- [isProtectedDataAvailable](isprotecteddataavailable.md)
- [completeStateRestoration()](completestaterestoration%28%29.md): Completes the extended state restoration.
- [restoreWindow(withIdentifier:state:completionHandler:)](restorewindow%28withidentifier_state_completionhandler_%29.md): Invoked to request that a window be restored.

# extendStateRestoration (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Allows an app to extend its state restoration period.

## Declaration

```objectivec
- (void) extendStateRestoration;
```

<a id="Discussion"></a>

## Discussion

This method allows an app to extend the state restoration period beyond the usual. For example, the app crashes before state restoration is complete, then it may offer to discard restorable state on the next launch.

If a window has some state that may take a long time to restore, such as a web page, you may use this method and methods to [completeStateRestoration](completestaterestoration%28%29.md) to extend the period of this crash protection beyond the default.

You call `extendStateRestoration` within your implementation of [restoreWindowWithIdentifier:state:completionHandler:](restorewindow%28withidentifier_state_completionhandler_%29.md).  You would then call [completeStateRestoration](completestaterestoration%28%29.md) some time after the window is fully restored.  If the app crashes in the interim, then it may offer to discard restorable state on the next launch.

The `extendStateRestoration` and [completeStateRestoration](completestaterestoration%28%29.md) methods act as a counter. Each call to `extendStateRestoration` increments the counter, and must be matched with a corresponding call to [completeStateRestoration](completestaterestoration%28%29.md) which decrements it.  When the counter reaches zero, the app is considered to have been fully restored, and any further calls are silently ignored.

This method is thread safe.

## See Also

### Restoring App Windows at Launch

- [protectedDataAvailable](isprotecteddataavailable.md)
- [completeStateRestoration](completestaterestoration%28%29.md): Completes the extended state restoration.
- [restoreWindowWithIdentifier:state:completionHandler:](restorewindow%28withidentifier_state_completionhandler_%29.md): Invoked to request that a window be restored.
