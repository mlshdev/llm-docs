> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropinteractiondelegate/dropinteraction(_:item:willanimatedropwith:)](https://developer.apple.com/documentation/uikit/uidropinteractiondelegate/dropinteraction(_:item:willanimatedropwith:))

# dropInteraction(\_:item:willAnimateDropWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the system’s drop animation is about to start.

## Declaration

```swift
optional func dropInteraction(_ interaction: UIDropInteraction, item: UIDragItem, willAnimateDropWith animator: any UIDragAnimating)
```

## Parameters

- `interaction`: The interaction that called this method.
- `item`: The current drag item.
- `animator`: The animator that provides custom animations to run alongside the system’s drop animation. You can also use it to add a completion block that runs after the animations have finished.

<a id="Discussion"></a>

## Discussion

This method is called for each drag item in the session, whether the item’s visible or not.

## See Also

### Animating the drop

- [dropInteraction(\_:previewForDropping:withDefault:)](dropinteraction%28__previewfordropping_withdefault_%29.md): Asks the delegate for the targeted drag item preview to show during the drop animation.
- [dropInteraction(\_:concludeDrop:)](dropinteraction%28__concludedrop_%29.md): Tells the delegate the drop activity and its related animations have finished.

# dropInteraction:item:willAnimateDropWithAnimator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate the system’s drop animation is about to start.

## Declaration

```objectivec
- (void) dropInteraction:(UIDropInteraction *) interaction item:(UIDragItem *) item willAnimateDropWithAnimator:(id<UIDragAnimating>) animator;
```

## Parameters

- `interaction`: The interaction that called this method.
- `item`: The current drag item.
- `animator`: The animator that provides custom animations to run alongside the system’s drop animation. You can also use it to add a completion block that runs after the animations have finished.

<a id="Discussion"></a>

## Discussion

This method is called for each drag item in the session, whether the item’s visible or not.

## See Also

### Animating the drop

- [dropInteraction:previewForDroppingItem:withDefault:](dropinteraction%28__previewfordropping_withdefault_%29.md): Asks the delegate for the targeted drag item preview to show during the drop animation.
- [dropInteraction:concludeDrop:](dropinteraction%28__concludedrop_%29.md): Tells the delegate the drop activity and its related animations have finished.
