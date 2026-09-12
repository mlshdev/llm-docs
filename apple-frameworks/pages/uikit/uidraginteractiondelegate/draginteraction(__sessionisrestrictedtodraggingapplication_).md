> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteractiondelegate/draginteraction(_:sessionisrestrictedtodraggingapplication:)](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction(_:sessionisrestrictedtodraggingapplication:))

# dragInteraction(\_:sessionIsRestrictedToDraggingApplication:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate whether the system should restrict the drag session to the app that started the session.

## Declaration

```swift
optional func dragInteraction(_ interaction: UIDragInteraction, sessionIsRestrictedToDraggingApplication session: any UIDragSession) -> Bool
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The drag session to restrict or not restrict.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you want to restrict the drag session to the app that started it; otherwise [false](https://developer.apple.com/documentation/swift/false), which is the default if you don’t provide this method.

<a id="Discussion"></a>

## Discussion

If you return [true](https://developer.apple.com/documentation/swift/true) and the user attempts to drop the drag items onto another app, the system cancels the session.

> **Note**

>  The system calls this method only on devices that support dragging across apps.

## See Also

### Restricting the drag behavior

- [dragInteraction(\_:sessionAllowsMoveOperation:)](draginteraction%28__sessionallowsmoveoperation_%29.md): Asks the delegate whether the session allows the move operation.

# dragInteraction:sessionIsRestrictedToDraggingApplication: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate whether the system should restrict the drag session to the app that started the session.

## Declaration

```objectivec
- (BOOL) dragInteraction:(UIDragInteraction *) interaction sessionIsRestrictedToDraggingApplication:(id<UIDragSession>) session;
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The drag session to restrict or not restrict.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you want to restrict the drag session to the app that started it; otherwise [false](https://developer.apple.com/documentation/swift/false), which is the default if you don’t provide this method.

<a id="Discussion"></a>

## Discussion

If you return [true](https://developer.apple.com/documentation/swift/true) and the user attempts to drop the drag items onto another app, the system cancels the session.

> **Note**

>  The system calls this method only on devices that support dragging across apps.

## See Also

### Restricting the drag behavior

- [dragInteraction:sessionAllowsMoveOperation:](draginteraction%28__sessionallowsmoveoperation_%29.md): Asks the delegate whether the session allows the move operation.
