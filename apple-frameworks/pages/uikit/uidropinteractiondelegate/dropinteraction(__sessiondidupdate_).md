> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropinteractiondelegate/dropinteraction(_:sessiondidupdate:)](https://developer.apple.com/documentation/uikit/uidropinteractiondelegate/dropinteraction(_:sessiondidupdate:))

# dropInteraction(\_:sessionDidUpdate:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the drop session has changed.

## Declaration

```swift
optional func dropInteraction(_ interaction: UIDropInteraction, sessionDidUpdate session: any UIDropSession) -> UIDropProposal
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The drop session that has changed.

<a id="return-value"></a>

## Return Value

A drop proposal that contains the operation the delegate intends to perform. You may return a proposal containing the [UIDropOperation.move](../uidropoperation/move.md) operation only if the session’s [allowsMoveOperation](../uidragdropsession/allowsmoveoperation.md) is [true](https://developer.apple.com/documentation/swift/true).

## Mentioned In

- [Making a view into a drop destination](../making-a-view-into-a-drop-destination.md)

<a id="Discussion"></a>

## Discussion

You must implement this method if the drop interaction’s view can accept drop activities. If you don’t provide this method, the view cannot accept any drop activities.

The interaction calls this method when one of the following happens:

- The session enters the area of the drop interaction’s view.
- The session moves inside the area of the drop interaction’s view.
- The user adds a drag item to the session that within the area of the drop interaction’s view.

To get the location of the drop session after it has moved, call the session’s [location(in:)](../uidragdropsession/location%28in_%29.md) method.

## See Also

### Tracking the drop movements

- [dropInteraction(\_:sessionDidEnter:)](dropinteraction%28__sessiondidenter_%29.md): Tells the delegate the drop session has moved into the drop interaction’s view.
- [dropInteraction(\_:sessionDidExit:)](dropinteraction%28__sessiondidexit_%29.md): Tells the delegate the drop session has moved out of the drop interaction’s view.
- [dropInteraction(\_:sessionDidEnd:)](dropinteraction%28__sessiondidend_%29.md): Tells the delegate the drop session has ended.

# dropInteraction:sessionDidUpdate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the drop session has changed.

## Declaration

```objectivec
- (UIDropProposal *) dropInteraction:(UIDropInteraction *) interaction sessionDidUpdate:(id<UIDropSession>) session;
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The drop session that has changed.

<a id="return-value"></a>

## Return Value

A drop proposal that contains the operation the delegate intends to perform. You may return a proposal containing the [UIDropOperationMove](../uidropoperation/move.md) operation only if the session’s [allowsMoveOperation](../uidragdropsession/allowsmoveoperation.md) is [true](https://developer.apple.com/documentation/swift/true).

## Mentioned In

- [Making a view into a drop destination](../making-a-view-into-a-drop-destination.md)

<a id="Discussion"></a>

## Discussion

You must implement this method if the drop interaction’s view can accept drop activities. If you don’t provide this method, the view cannot accept any drop activities.

The interaction calls this method when one of the following happens:

- The session enters the area of the drop interaction’s view.
- The session moves inside the area of the drop interaction’s view.
- The user adds a drag item to the session that within the area of the drop interaction’s view.

To get the location of the drop session after it has moved, call the session’s [locationInView:](../uidragdropsession/location%28in_%29.md) method.

## See Also

### Tracking the drop movements

- [dropInteraction:sessionDidEnter:](dropinteraction%28__sessiondidenter_%29.md): Tells the delegate the drop session has moved into the drop interaction’s view.
- [dropInteraction:sessionDidExit:](dropinteraction%28__sessiondidexit_%29.md): Tells the delegate the drop session has moved out of the drop interaction’s view.
- [dropInteraction:sessionDidEnd:](dropinteraction%28__sessiondidend_%29.md): Tells the delegate the drop session has ended.
