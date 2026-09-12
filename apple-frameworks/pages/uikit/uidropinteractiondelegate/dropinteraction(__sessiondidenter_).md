> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropinteractiondelegate/dropinteraction(_:sessiondidenter:)](https://developer.apple.com/documentation/uikit/uidropinteractiondelegate/dropinteraction(_:sessiondidenter:))

# dropInteraction(\_:sessionDidEnter:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the drop session has moved into the drop interaction’s view.

## Declaration

```swift
optional func dropInteraction(_ interaction: UIDropInteraction, sessionDidEnter session: any UIDropSession)
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The drop session that has moved into the interaction’s view.

## Mentioned In

- [Making a view into a drop destination](../making-a-view-into-a-drop-destination.md)

## See Also

### Tracking the drop movements

- [dropInteraction(\_:sessionDidUpdate:)](dropinteraction%28__sessiondidupdate_%29.md): Tells the delegate the drop session has changed.
- [dropInteraction(\_:sessionDidExit:)](dropinteraction%28__sessiondidexit_%29.md): Tells the delegate the drop session has moved out of the drop interaction’s view.
- [dropInteraction(\_:sessionDidEnd:)](dropinteraction%28__sessiondidend_%29.md): Tells the delegate the drop session has ended.

# dropInteraction:sessionDidEnter: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the drop session has moved into the drop interaction’s view.

## Declaration

```objectivec
- (void) dropInteraction:(UIDropInteraction *) interaction sessionDidEnter:(id<UIDropSession>) session;
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The drop session that has moved into the interaction’s view.

## Mentioned In

- [Making a view into a drop destination](../making-a-view-into-a-drop-destination.md)

## See Also

### Tracking the drop movements

- [dropInteraction:sessionDidUpdate:](dropinteraction%28__sessiondidupdate_%29.md): Tells the delegate the drop session has changed.
- [dropInteraction:sessionDidExit:](dropinteraction%28__sessiondidexit_%29.md): Tells the delegate the drop session has moved out of the drop interaction’s view.
- [dropInteraction:sessionDidEnd:](dropinteraction%28__sessiondidend_%29.md): Tells the delegate the drop session has ended.
