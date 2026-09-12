> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/isprotecteddataavailable](https://developer.apple.com/documentation/appkit/nsapplication/isprotecteddataavailable)

# isProtectedDataAvailable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

## Declaration

```swift
var isProtectedDataAvailable: Bool { get }
```

## See Also

### Restoring App Windows at Launch

- [extendStateRestoration()](extendstaterestoration%28%29.md): Allows an app to extend its state restoration period.
- [completeStateRestoration()](completestaterestoration%28%29.md): Completes the extended state restoration.
- [restoreWindow(withIdentifier:state:completionHandler:)](restorewindow%28withidentifier_state_completionhandler_%29.md): Invoked to request that a window be restored.

# protectedDataAvailable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

## Declaration

```objectivec
@property (readonly, getter=isProtectedDataAvailable) BOOL protectedDataAvailable;
```

## See Also

### Restoring App Windows at Launch

- [extendStateRestoration](extendstaterestoration%28%29.md): Allows an app to extend its state restoration period.
- [completeStateRestoration](completestaterestoration%28%29.md): Completes the extended state restoration.
- [restoreWindowWithIdentifier:state:completionHandler:](restorewindow%28withidentifier_state_completionhandler_%29.md): Invoked to request that a window be restored.
