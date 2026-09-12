> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/ignoresnapshotonnextapplicationlaunch()](https://developer.apple.com/documentation/uikit/uiapplication/ignoresnapshotonnextapplicationlaunch())

# ignoreSnapshotOnNextApplicationLaunch() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Prevents the app from using the recent snapshot image during the next launch cycle.

## Declaration

```swift
func ignoreSnapshotOnNextApplicationLaunch()
```

<a id="Discussion"></a>

## Discussion

As part of the state preservation process, UIKit captures your app’s user interface and stores it in an image file. When your app is relaunched, the system displays this snapshot image in place of your app’s default launch image to preserve the notion that your app was still running. If you feel that the snapshot cannot correctly reflect your app’s user interface when your app is relaunched, call this method to let UIKit know that it should use your app’s default launch image instead of the snapshot.

You must call this method from within the code you use to preserve your app’s state.

## See Also

### Managing state restoration

- [extendStateRestoration()](extendstaterestoration%28%29.md): Tells the app that your code is restoring state asynchronously.
- [completeStateRestoration()](completestaterestoration%28%29.md): Tells the app that your code has finished any asynchronous state restoration.
- [registerObject(forStateRestoration:restorationIdentifier:)](registerobject%28forstaterestoration_restorationidentifier_%29.md): Registers a custom object for use with the state restoration system.

# ignoreSnapshotOnNextApplicationLaunch (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Prevents the app from using the recent snapshot image during the next launch cycle.

## Declaration

```objectivec
- (void) ignoreSnapshotOnNextApplicationLaunch;
```

<a id="Discussion"></a>

## Discussion

As part of the state preservation process, UIKit captures your app’s user interface and stores it in an image file. When your app is relaunched, the system displays this snapshot image in place of your app’s default launch image to preserve the notion that your app was still running. If you feel that the snapshot cannot correctly reflect your app’s user interface when your app is relaunched, call this method to let UIKit know that it should use your app’s default launch image instead of the snapshot.

You must call this method from within the code you use to preserve your app’s state.

## See Also

### Managing state restoration

- [extendStateRestoration](extendstaterestoration%28%29.md): Tells the app that your code is restoring state asynchronously.
- [completeStateRestoration](completestaterestoration%28%29.md): Tells the app that your code has finished any asynchronous state restoration.
- [registerObjectForStateRestoration:restorationIdentifier:](registerobject%28forstaterestoration_restorationidentifier_%29.md): Registers a custom object for use with the state restoration system.
