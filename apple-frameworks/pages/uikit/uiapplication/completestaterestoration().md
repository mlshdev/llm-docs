> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/completestaterestoration()](https://developer.apple.com/documentation/uikit/uiapplication/completestaterestoration())

# completeStateRestoration() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the app that your code has finished any asynchronous state restoration.

## Declaration

```swift
func completeStateRestoration()
```

<a id="Discussion"></a>

## Discussion

UIKit restores your app’s state synchronously on the main thread. If you choose to perform additional state restoration on a secondary thread, call the [extendStateRestoration()](extendstaterestoration%28%29.md) method to inform UIKit of that fact. Call this method after you finish with your background work to let the system know that state restoration is complete.

## See Also

### Managing state restoration

- [extendStateRestoration()](extendstaterestoration%28%29.md): Tells the app that your code is restoring state asynchronously.
- [ignoreSnapshotOnNextApplicationLaunch()](ignoresnapshotonnextapplicationlaunch%28%29.md): Prevents the app from using the recent snapshot image during the next launch cycle.
- [registerObject(forStateRestoration:restorationIdentifier:)](registerobject%28forstaterestoration_restorationidentifier_%29.md): Registers a custom object for use with the state restoration system.

# completeStateRestoration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Tells the app that your code has finished any asynchronous state restoration.

## Declaration

```objectivec
- (void) completeStateRestoration;
```

<a id="Discussion"></a>

## Discussion

UIKit restores your app’s state synchronously on the main thread. If you choose to perform additional state restoration on a secondary thread, call the [extendStateRestoration](extendstaterestoration%28%29.md) method to inform UIKit of that fact. Call this method after you finish with your background work to let the system know that state restoration is complete.

## See Also

### Managing state restoration

- [extendStateRestoration](extendstaterestoration%28%29.md): Tells the app that your code is restoring state asynchronously.
- [ignoreSnapshotOnNextApplicationLaunch](ignoresnapshotonnextapplicationlaunch%28%29.md): Prevents the app from using the recent snapshot image during the next launch cycle.
- [registerObjectForStateRestoration:restorationIdentifier:](registerobject%28forstaterestoration_restorationidentifier_%29.md): Registers a custom object for use with the state restoration system.
