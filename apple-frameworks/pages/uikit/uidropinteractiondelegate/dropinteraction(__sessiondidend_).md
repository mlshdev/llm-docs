> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropinteractiondelegate/dropinteraction(_:sessiondidend:)](https://developer.apple.com/documentation/uikit/uidropinteractiondelegate/dropinteraction(_:sessiondidend:))

# dropInteraction(\_:sessionDidEnd:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the drop session has ended.

## Declaration

```swift
optional func dropInteraction(_ interaction: UIDropInteraction, sessionDidEnd session: any UIDropSession)
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The drop session that ended.

<a id="Discussion"></a>

## Discussion

Implement this method if you need to clean up resources you created during the session.

## See Also

### Tracking the drop movements

- [dropInteraction(\_:sessionDidEnter:)](dropinteraction%28__sessiondidenter_%29.md): Tells the delegate the drop session has moved into the drop interaction’s view.
- [dropInteraction(\_:sessionDidUpdate:)](dropinteraction%28__sessiondidupdate_%29.md): Tells the delegate the drop session has changed.
- [dropInteraction(\_:sessionDidExit:)](dropinteraction%28__sessiondidexit_%29.md): Tells the delegate the drop session has moved out of the drop interaction’s view.

# dropInteraction:sessionDidEnd: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the drop session has ended.

## Declaration

```objectivec
- (void) dropInteraction:(UIDropInteraction *) interaction sessionDidEnd:(id<UIDropSession>) session;
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The drop session that ended.

<a id="Discussion"></a>

## Discussion

Implement this method if you need to clean up resources you created during the session.

## See Also

### Tracking the drop movements

- [dropInteraction:sessionDidEnter:](dropinteraction%28__sessiondidenter_%29.md): Tells the delegate the drop session has moved into the drop interaction’s view.
- [dropInteraction:sessionDidUpdate:](dropinteraction%28__sessiondidupdate_%29.md): Tells the delegate the drop session has changed.
- [dropInteraction:sessionDidExit:](dropinteraction%28__sessiondidexit_%29.md): Tells the delegate the drop session has moved out of the drop interaction’s view.
