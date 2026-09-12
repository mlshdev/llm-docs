> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragdropsession/isrestrictedtodraggingapplication](https://developer.apple.com/documentation/uikit/uidragdropsession/isrestrictedtodraggingapplication)

# isRestrictedToDraggingApplication (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the drag session is confined to the app that started the drag activity.

## Declaration

```swift
var isRestrictedToDraggingApplication: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value for this property is set by the source app’s drag interaction delegate method [dragInteraction(\_:sessionIsRestrictedToDraggingApplication:)](../uidraginteractiondelegate/draginteraction%28__sessionisrestrictedtodraggingapplication_%29.md).  If the value is [true](https://developer.apple.com/documentation/swift/true), the drag session is restricted to the app that started the drag operation.

## See Also

### Checking for drag and drop session restrictions

- [allowsMoveOperation](allowsmoveoperation.md): A Boolean value that indicates whether the drag session permits moving drag items within the same app.

# restrictedToDraggingApplication (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the drag session is confined to the app that started the drag activity.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isRestrictedToDraggingApplication) BOOL restrictedToDraggingApplication;
```

<a id="Discussion"></a>

## Discussion

The value for this property is set by the source app’s drag interaction delegate method [dragInteraction:sessionIsRestrictedToDraggingApplication:](../uidraginteractiondelegate/draginteraction%28__sessionisrestrictedtodraggingapplication_%29.md).  If the value is [true](https://developer.apple.com/documentation/swift/true), the drag session is restricted to the app that started the drag operation.

## See Also

### Checking for drag and drop session restrictions

- [allowsMoveOperation](allowsmoveoperation.md): A Boolean value that indicates whether the drag session permits moving drag items within the same app.
