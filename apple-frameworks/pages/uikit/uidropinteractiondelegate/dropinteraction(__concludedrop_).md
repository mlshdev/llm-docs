> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropinteractiondelegate/dropinteraction(_:concludedrop:)](https://developer.apple.com/documentation/uikit/uidropinteractiondelegate/dropinteraction(_:concludedrop:))

# dropInteraction(\_:concludeDrop:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the drop activity and its related animations have finished.

## Declaration

```swift
optional func dropInteraction(_ interaction: UIDropInteraction, concludeDrop session: any UIDropSession)
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The drop session that has finished.

<a id="Discussion"></a>

## Discussion

When the interaction calls this method, update the interaction’s view with its post-drop appearance.

## See Also

### Animating the drop

- [dropInteraction(\_:item:willAnimateDropWith:)](dropinteraction%28__item_willanimatedropwith_%29.md): Tells the delegate the system’s drop animation is about to start.
- [dropInteraction(\_:previewForDropping:withDefault:)](dropinteraction%28__previewfordropping_withdefault_%29.md): Asks the delegate for the targeted drag item preview to show during the drop animation.

# dropInteraction:concludeDrop: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the drop activity and its related animations have finished.

## Declaration

```objectivec
- (void) dropInteraction:(UIDropInteraction *) interaction concludeDrop:(id<UIDropSession>) session;
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The drop session that has finished.

<a id="Discussion"></a>

## Discussion

When the interaction calls this method, update the interaction’s view with its post-drop appearance.

## See Also

### Animating the drop

- [dropInteraction:item:willAnimateDropWithAnimator:](dropinteraction%28__item_willanimatedropwith_%29.md): Tells the delegate the system’s drop animation is about to start.
- [dropInteraction:previewForDroppingItem:withDefault:](dropinteraction%28__previewfordropping_withdefault_%29.md): Asks the delegate for the targeted drag item preview to show during the drop animation.
