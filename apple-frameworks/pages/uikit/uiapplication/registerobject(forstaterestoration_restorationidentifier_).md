> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/registerobject(forstaterestoration:restorationidentifier:)](https://developer.apple.com/documentation/uikit/uiapplication/registerobject(forstaterestoration:restorationidentifier:))

# registerObject(forStateRestoration:restorationIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Registers a custom object for use with the state restoration system.

## Declaration

```swift
class func registerObject(forStateRestoration object: any UIStateRestoring, restorationIdentifier: String)
```

## Parameters

- `object`: The object to be registered with the restoration archive. The object must adopt the [UIStateRestoring](../uistaterestoring.md) protocol. This parameter must not be `nil`.
- `restorationIdentifier`: The restoration identifier for the object. UIKit uses this parameter to distinguish the object from other objects in the archive. This parameter must not be `nil`.

## Mentioned In

- [About the UI preservation process](../about-the-ui-preservation-process.md)

<a id="Discussion"></a>

## Discussion

You use this method to register objects that you want to save as part of the overall state restoration process. Registering the object makes it available for inclusion in the restoration archive but does not automatically include it. To include the object, refer to it from one of your other interface objects. For example, you might write out a reference to the object from the [encodeRestorableState(with:)](../uiviewcontroller/encoderestorablestate%28with_%29.md) method of one of your view controllers.

## See Also

### Managing state restoration

- [extendStateRestoration()](extendstaterestoration%28%29.md): Tells the app that your code is restoring state asynchronously.
- [completeStateRestoration()](completestaterestoration%28%29.md): Tells the app that your code has finished any asynchronous state restoration.
- [ignoreSnapshotOnNextApplicationLaunch()](ignoresnapshotonnextapplicationlaunch%28%29.md): Prevents the app from using the recent snapshot image during the next launch cycle.

# registerObjectForStateRestoration:restorationIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Registers a custom object for use with the state restoration system.

## Declaration

```objectivec
+ (void) registerObjectForStateRestoration:(id<UIStateRestoring>) object restorationIdentifier:(NSString *) restorationIdentifier;
```

## Parameters

- `object`: The object to be registered with the restoration archive. The object must adopt the [UIStateRestoring](../uistaterestoring.md) protocol. This parameter must not be `nil`.
- `restorationIdentifier`: The restoration identifier for the object. UIKit uses this parameter to distinguish the object from other objects in the archive. This parameter must not be `nil`.

## Mentioned In

- [About the UI preservation process](../about-the-ui-preservation-process.md)

<a id="Discussion"></a>

## Discussion

You use this method to register objects that you want to save as part of the overall state restoration process. Registering the object makes it available for inclusion in the restoration archive but does not automatically include it. To include the object, refer to it from one of your other interface objects. For example, you might write out a reference to the object from the [encodeRestorableStateWithCoder:](../uiviewcontroller/encoderestorablestate%28with_%29.md) method of one of your view controllers.

## See Also

### Managing state restoration

- [extendStateRestoration](extendstaterestoration%28%29.md): Tells the app that your code is restoring state asynchronously.
- [completeStateRestoration](completestaterestoration%28%29.md): Tells the app that your code has finished any asynchronous state restoration.
- [ignoreSnapshotOnNextApplicationLaunch](ignoresnapshotonnextapplicationlaunch%28%29.md): Prevents the app from using the recent snapshot image during the next launch cycle.
