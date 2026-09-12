> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitargetedpreview/retargetedpreview(with:)](https://developer.apple.com/documentation/uikit/uitargetedpreview/retargetedpreview(with:))

# retargetedPreview(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Returns a targeted preview object with the same view and parameters, but with a different target container.

## Declaration

```swift
func retargetedPreview(with newTarget: UIPreviewTarget) -> UITargetedPreview
```

## Parameters

- `newTarget`: The new target for the existing view.

<a id="return-value"></a>

## Return Value

A new targeted preview object containing the specified target and the current view.

# retargetedPreviewWithTarget: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Returns a targeted preview object with the same view and parameters, but with a different target container.

## Declaration

```objectivec
- (UITargetedPreview *) retargetedPreviewWithTarget:(UIPreviewTarget *) newTarget;
```

## Parameters

- `newTarget`: The new target for the existing view.

<a id="return-value"></a>

## Return Value

A new targeted preview object containing the specified target and the current view.
