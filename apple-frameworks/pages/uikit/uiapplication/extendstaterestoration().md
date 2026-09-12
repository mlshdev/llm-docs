> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/extendstaterestoration()](https://developer.apple.com/documentation/uikit/uiapplication/extendstaterestoration())

# extendStateRestoration() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the app that your code is restoring state asynchronously.

## Declaration

```swift
func extendStateRestoration()
```

<a id="Discussion"></a>

## Discussion

UIKit restores your app’s state synchronously on the main thread. If you choose to perform additional state restoration on a secondary thread, call this method to inform UIKit of that fact. You must balance each call to this method with a matching call to the [completeStateRestoration()](completestaterestoration%28%29.md) method.

Calling this method is a safety precaution in the event that your app crashes at launch time due to problems restoring its state. If you call this method but do not call the matching [completeStateRestoration()](completestaterestoration%28%29.md) method before a crash occurs, the system throws away any saved state information. Doing so prevents your app from crashing during subsequent launches because of issues caused by trying to restore your app’s state.

## See Also

### Managing state restoration

- [completeStateRestoration()](completestaterestoration%28%29.md): Tells the app that your code has finished any asynchronous state restoration.
- [ignoreSnapshotOnNextApplicationLaunch()](ignoresnapshotonnextapplicationlaunch%28%29.md): Prevents the app from using the recent snapshot image during the next launch cycle.
- [registerObject(forStateRestoration:restorationIdentifier:)](registerobject%28forstaterestoration_restorationidentifier_%29.md): Registers a custom object for use with the state restoration system.

# extendStateRestoration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Tells the app that your code is restoring state asynchronously.

## Declaration

```objectivec
- (void) extendStateRestoration;
```

<a id="Discussion"></a>

## Discussion

UIKit restores your app’s state synchronously on the main thread. If you choose to perform additional state restoration on a secondary thread, call this method to inform UIKit of that fact. You must balance each call to this method with a matching call to the [completeStateRestoration](completestaterestoration%28%29.md) method.

Calling this method is a safety precaution in the event that your app crashes at launch time due to problems restoring its state. If you call this method but do not call the matching [completeStateRestoration](completestaterestoration%28%29.md) method before a crash occurs, the system throws away any saved state information. Doing so prevents your app from crashing during subsequent launches because of issues caused by trying to restore your app’s state.

## See Also

### Managing state restoration

- [completeStateRestoration](completestaterestoration%28%29.md): Tells the app that your code has finished any asynchronous state restoration.
- [ignoreSnapshotOnNextApplicationLaunch](ignoresnapshotonnextapplicationlaunch%28%29.md): Prevents the app from using the recent snapshot image during the next launch cycle.
- [registerObjectForStateRestoration:restorationIdentifier:](registerobject%28forstaterestoration_restorationidentifier_%29.md): Registers a custom object for use with the state restoration system.
