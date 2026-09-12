> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/completestaterestoration()](https://developer.apple.com/documentation/appkit/nsapplication/completestaterestoration())

# completeStateRestoration() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Completes the extended state restoration.

## Declaration

```swift
func completeStateRestoration()
```

<a id="Discussion"></a>

## Discussion

This method informs the app that the extended state restoration is completed for the balancing .

If a window has some state that may take a long time to restore, such as a web page, you may use this method and methods to `completeStateRestoration` to extend the period of this crash protection beyond the default.

You call [extendStateRestoration()](extendstaterestoration%28%29.md) within your implementation of [restoreWindow(withIdentifier:state:completionHandler:)](restorewindow%28withidentifier_state_completionhandler_%29.md).  You would then call `completeStateRestoration` some time after the window is fully restored.  If the app crashes in the interim, then it may offer to discard restorable state on the next launch.

The [extendStateRestoration()](extendstaterestoration%28%29.md) and `completeStateRestoration` method act as a counter. Each call to [extendStateRestoration()](extendstaterestoration%28%29.md)increments the counter, and must be matched with a corresponding call to `completeStateRestoration` which decrements it.  When the counter reaches zero, the app is considered to have been fully restored, and any further calls are silently ignored.

This method is thread safe.

## See Also

### Restoring App Windows at Launch

- [isProtectedDataAvailable](isprotecteddataavailable.md)
- [extendStateRestoration()](extendstaterestoration%28%29.md): Allows an app to extend its state restoration period.
- [restoreWindow(withIdentifier:state:completionHandler:)](restorewindow%28withidentifier_state_completionhandler_%29.md): Invoked to request that a window be restored.

# completeStateRestoration (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Completes the extended state restoration.

## Declaration

```objectivec
- (void) completeStateRestoration;
```

<a id="Discussion"></a>

## Discussion

This method informs the app that the extended state restoration is completed for the balancing .

If a window has some state that may take a long time to restore, such as a web page, you may use this method and methods to `completeStateRestoration` to extend the period of this crash protection beyond the default.

You call [extendStateRestoration](extendstaterestoration%28%29.md) within your implementation of [restoreWindowWithIdentifier:state:completionHandler:](restorewindow%28withidentifier_state_completionhandler_%29.md).  You would then call `completeStateRestoration` some time after the window is fully restored.  If the app crashes in the interim, then it may offer to discard restorable state on the next launch.

The [extendStateRestoration](extendstaterestoration%28%29.md) and `completeStateRestoration` method act as a counter. Each call to [extendStateRestoration](extendstaterestoration%28%29.md)increments the counter, and must be matched with a corresponding call to `completeStateRestoration` which decrements it.  When the counter reaches zero, the app is considered to have been fully restored, and any further calls are silently ignored.

This method is thread safe.

## See Also

### Restoring App Windows at Launch

- [protectedDataAvailable](isprotecteddataavailable.md)
- [extendStateRestoration](extendstaterestoration%28%29.md): Allows an app to extend its state restoration period.
- [restoreWindowWithIdentifier:state:completionHandler:](restorewindow%28withidentifier_state_completionhandler_%29.md): Invoked to request that a window be restored.
