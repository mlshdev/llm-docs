> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteractiondelegate/draginteraction(_:sessionallowsmoveoperation:)](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction(_:sessionallowsmoveoperation:))

# dragInteraction(\_:sessionAllowsMoveOperation:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate whether the session allows the move operation.

## Declaration

```swift
optional func dragInteraction(_ interaction: UIDragInteraction, sessionAllowsMoveOperation session: any UIDragSession) -> Bool
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The drag session that should, or should not, allow the move operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the session allows moving drag items to the destination view; otherwise [false](https://developer.apple.com/documentation/swift/false). The default is [true](https://developer.apple.com/documentation/swift/true) if you don’t provide this method.

<a id="Discussion"></a>

## Discussion

The [UIDropOperation.move](../uidropoperation/move.md) operation only applies to drop activities within the same app. Drag items dropped onto another app are always copied.

## See Also

### Restricting the drag behavior

- [dragInteraction(\_:sessionIsRestrictedToDraggingApplication:)](draginteraction%28__sessionisrestrictedtodraggingapplication_%29.md): Asks the delegate whether the system should restrict the drag session to the app that started the session.

# dragInteraction:sessionAllowsMoveOperation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate whether the session allows the move operation.

## Declaration

```objectivec
- (BOOL) dragInteraction:(UIDragInteraction *) interaction sessionAllowsMoveOperation:(id<UIDragSession>) session;
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The drag session that should, or should not, allow the move operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the session allows moving drag items to the destination view; otherwise [false](https://developer.apple.com/documentation/swift/false). The default is [true](https://developer.apple.com/documentation/swift/true) if you don’t provide this method.

<a id="Discussion"></a>

## Discussion

The [UIDropOperationMove](../uidropoperation/move.md) operation only applies to drop activities within the same app. Drag items dropped onto another app are always copied.

## See Also

### Restricting the drag behavior

- [dragInteraction:sessionIsRestrictedToDraggingApplication:](draginteraction%28__sessionisrestrictedtodraggingapplication_%29.md): Asks the delegate whether the system should restrict the drag session to the app that started the session.
