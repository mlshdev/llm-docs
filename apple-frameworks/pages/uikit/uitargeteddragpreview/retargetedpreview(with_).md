> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitargeteddragpreview/retargetedpreview(with:)](https://developer.apple.com/documentation/uikit/uitargeteddragpreview/retargetedpreview(with:))

# retargetedPreview(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a new targeted drag item preview based on an existing one, but with a new geometric target.

## Declaration

```swift
func retargetedPreview(with newTarget: UIDragPreviewTarget) -> UITargetedDragPreview
```

## Parameters

- `newTarget`: A new drag item preview target.

<a id="return-value"></a>

## Return Value

A new targeted drag preview.

<a id="Discussion"></a>

## Discussion

You can use this method in the drop interaction delegate’s implementation of the [dropInteraction(\_:previewForDropping:withDefault:)](../uidropinteractiondelegate/dropinteraction%28__previewfordropping_withdefault_%29.md) method to replace the current targeted drag item preview with a different one.

# retargetedPreviewWithTarget: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a new targeted drag item preview based on an existing one, but with a new geometric target.

## Declaration

```objectivec
- (UITargetedDragPreview *) retargetedPreviewWithTarget:(UIDragPreviewTarget *) newTarget;
```

## Parameters

- `newTarget`: A new drag item preview target.

<a id="return-value"></a>

## Return Value

A new targeted drag preview.

<a id="Discussion"></a>

## Discussion

You can use this method in the drop interaction delegate’s implementation of the [dropInteraction:previewForDroppingItem:withDefault:](../uidropinteractiondelegate/dropinteraction%28__previewfordropping_withdefault_%29.md) method to replace the current targeted drag item preview with a different one.
