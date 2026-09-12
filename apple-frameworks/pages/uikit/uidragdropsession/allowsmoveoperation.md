> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragdropsession/allowsmoveoperation](https://developer.apple.com/documentation/uikit/uidragdropsession/allowsmoveoperation)

# allowsMoveOperation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the drag session permits moving drag items within the same app.

## Declaration

```swift
var allowsMoveOperation: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A move operation can be applied only within the same app. Drag items shared with another app are always copied.

The `allowsMoveOperation` value is determined by the return value of the source app’s drag interaction delegate’s  [dragInteraction(\_:sessionAllowsMoveOperation:)](../uidraginteractiondelegate/draginteraction%28__sessionallowsmoveoperation_%29.md) method. If `allowsMoveOperation` is [true](https://developer.apple.com/documentation/swift/true), the source app’s drop interaction delegate’s [dropInteraction(\_:sessionDidUpdate:)](../uidropinteractiondelegate/dropinteraction%28__sessiondidupdate_%29.md) method can return a drop proposal for a [UIDropOperation.move](../uidropoperation/move.md) operation.

## See Also

### Checking for drag and drop session restrictions

- [isRestrictedToDraggingApplication](isrestrictedtodraggingapplication.md): A Boolean value that indicates whether the drag session is confined to the app that started the drag activity.

# allowsMoveOperation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the drag session permits moving drag items within the same app.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL allowsMoveOperation;
```

<a id="Discussion"></a>

## Discussion

A move operation can be applied only within the same app. Drag items shared with another app are always copied.

The `allowsMoveOperation` value is determined by the return value of the source app’s drag interaction delegate’s  [dragInteraction:sessionAllowsMoveOperation:](../uidraginteractiondelegate/draginteraction%28__sessionallowsmoveoperation_%29.md) method. If `allowsMoveOperation` is [true](https://developer.apple.com/documentation/swift/true), the source app’s drop interaction delegate’s [dropInteraction:sessionDidUpdate:](../uidropinteractiondelegate/dropinteraction%28__sessiondidupdate_%29.md) method can return a drop proposal for a [UIDropOperationMove](../uidropoperation/move.md) operation.

## See Also

### Checking for drag and drop session restrictions

- [restrictedToDraggingApplication](isrestrictedtodraggingapplication.md): A Boolean value that indicates whether the drag session is confined to the app that started the drag activity.
