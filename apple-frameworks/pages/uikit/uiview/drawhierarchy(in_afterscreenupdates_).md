> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/drawhierarchy(in:afterscreenupdates:)](https://developer.apple.com/documentation/uikit/uiview/drawhierarchy(in:afterscreenupdates:))

# drawHierarchy(in:afterScreenUpdates:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Renders a snapshot of the complete view hierarchy as visible onscreen into the current context.

## Declaration

```swift
func drawHierarchy(in rect: CGRect, afterScreenUpdates afterUpdates: Bool) -> Bool
```

## Parameters

- `rect`: A rectangle specified in the local coordinate system (bounds) of the view.
- `afterUpdates`: A Boolean value that indicates whether the snapshot should be rendered after recent changes have been incorporated. Specify the value [false](https://developer.apple.com/documentation/swift/false) if you want to render a snapshot in the view hierarchy’s current state, which might not include recent changes.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the snapshot is complete, or [false](https://developer.apple.com/documentation/swift/false) if the snapshot is missing image data for any view in the hierarchy.

<a id="Discussion"></a>

## Discussion

Use this method when you want to apply a graphical effect, such as a blur, to a view snapshot. This method is not as fast as the [snapshotView(afterScreenUpdates:)](snapshotview%28afterscreenupdates_%29.md) method.

## See Also

### Capturing a view snapshot

- [snapshotView(afterScreenUpdates:)](snapshotview%28afterscreenupdates_%29.md): Returns a snapshot view based on the contents of the current view.
- [resizableSnapshotView(from:afterScreenUpdates:withCapInsets:)](resizablesnapshotview%28from_afterscreenupdates_withcapinsets_%29.md): Returns a snapshot view based on the specified contents of the current view, with stretchable insets.

# drawViewHierarchyInRect:afterScreenUpdates: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Renders a snapshot of the complete view hierarchy as visible onscreen into the current context.

## Declaration

```objectivec
- (BOOL) drawViewHierarchyInRect:(CGRect) rect afterScreenUpdates:(BOOL) afterUpdates;
```

## Parameters

- `rect`: A rectangle specified in the local coordinate system (bounds) of the view.
- `afterUpdates`: A Boolean value that indicates whether the snapshot should be rendered after recent changes have been incorporated. Specify the value [false](https://developer.apple.com/documentation/swift/false) if you want to render a snapshot in the view hierarchy’s current state, which might not include recent changes.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the snapshot is complete, or [false](https://developer.apple.com/documentation/swift/false) if the snapshot is missing image data for any view in the hierarchy.

<a id="Discussion"></a>

## Discussion

Use this method when you want to apply a graphical effect, such as a blur, to a view snapshot. This method is not as fast as the [snapshotViewAfterScreenUpdates:](snapshotview%28afterscreenupdates_%29.md) method.

## See Also

### Capturing a view snapshot

- [snapshotViewAfterScreenUpdates:](snapshotview%28afterscreenupdates_%29.md): Returns a snapshot view based on the contents of the current view.
- [resizableSnapshotViewFromRect:afterScreenUpdates:withCapInsets:](resizablesnapshotview%28from_afterscreenupdates_withcapinsets_%29.md): Returns a snapshot view based on the specified contents of the current view, with stretchable insets.
