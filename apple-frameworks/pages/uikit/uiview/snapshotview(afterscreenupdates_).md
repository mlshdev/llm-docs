> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/snapshotview(afterscreenupdates:)](https://developer.apple.com/documentation/uikit/uiview/snapshotview(afterscreenupdates:))

# snapshotView(afterScreenUpdates:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a snapshot view based on the contents of the current view.

## Declaration

```swift
func snapshotView(afterScreenUpdates afterUpdates: Bool) -> UIView?
```

## Parameters

- `afterUpdates`: A Boolean value that specifies whether the snapshot should be taken after recent changes have been incorporated. Pass the value [false](https://developer.apple.com/documentation/swift/false) to capture the screen in its current state, which might not include recent changes.

<a id="return-value"></a>

## Return Value

A new view object based on a snapshot of the current view’s rendered contents.

<a id="Discussion"></a>

## Discussion

This method very efficiently captures the current rendered appearance of a view and uses it to build a new snapshot view. You can use the returned view as a visual stand-in for the current view in your app. For example, you might use a snapshot view for animations where updating a large view hierarchy might be expensive. Because the content is captured from the already rendered content, this method reflects the current visual appearance of the view and is not updated to reflect animations that are scheduled or in progress. However, calling this method is faster than trying to render the contents of the current view into a bitmap image yourself.

Because the returned snapshot is a view object, you can modify it and its layer object as needed. However, you cannot change the [contents](../../quartzcore/calayer/contents.md) property of the snapshot view’s layer; attempts to do so fail silently. If the current view is not yet rendered, perhaps because it is not yet onscreen, the snapshot view has no visible content.

You can call this method on a previously generated snapshot to obtain a new snapshot. For example, you could do so after you change properties of a previous snapshot (such as its alpha value) and want a new snapshot that includes those changes.

If you want to apply a graphical effect, such as blur, to a snapshot, use the [drawHierarchy(in:afterScreenUpdates:)](drawhierarchy%28in_afterscreenupdates_%29.md) method instead.

## See Also

### Capturing a view snapshot

- [resizableSnapshotView(from:afterScreenUpdates:withCapInsets:)](resizablesnapshotview%28from_afterscreenupdates_withcapinsets_%29.md): Returns a snapshot view based on the specified contents of the current view, with stretchable insets.
- [drawHierarchy(in:afterScreenUpdates:)](drawhierarchy%28in_afterscreenupdates_%29.md): Renders a snapshot of the complete view hierarchy as visible onscreen into the current context.

# snapshotViewAfterScreenUpdates: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a snapshot view based on the contents of the current view.

## Declaration

```objectivec
- (UIView *) snapshotViewAfterScreenUpdates:(BOOL) afterUpdates;
```

## Parameters

- `afterUpdates`: A Boolean value that specifies whether the snapshot should be taken after recent changes have been incorporated. Pass the value [false](https://developer.apple.com/documentation/swift/false) to capture the screen in its current state, which might not include recent changes.

<a id="return-value"></a>

## Return Value

A new view object based on a snapshot of the current view’s rendered contents.

<a id="Discussion"></a>

## Discussion

This method very efficiently captures the current rendered appearance of a view and uses it to build a new snapshot view. You can use the returned view as a visual stand-in for the current view in your app. For example, you might use a snapshot view for animations where updating a large view hierarchy might be expensive. Because the content is captured from the already rendered content, this method reflects the current visual appearance of the view and is not updated to reflect animations that are scheduled or in progress. However, calling this method is faster than trying to render the contents of the current view into a bitmap image yourself.

Because the returned snapshot is a view object, you can modify it and its layer object as needed. However, you cannot change the [contents](../../quartzcore/calayer/contents.md) property of the snapshot view’s layer; attempts to do so fail silently. If the current view is not yet rendered, perhaps because it is not yet onscreen, the snapshot view has no visible content.

You can call this method on a previously generated snapshot to obtain a new snapshot. For example, you could do so after you change properties of a previous snapshot (such as its alpha value) and want a new snapshot that includes those changes.

If you want to apply a graphical effect, such as blur, to a snapshot, use the [drawViewHierarchyInRect:afterScreenUpdates:](drawhierarchy%28in_afterscreenupdates_%29.md) method instead.

## See Also

### Capturing a view snapshot

- [resizableSnapshotViewFromRect:afterScreenUpdates:withCapInsets:](resizablesnapshotview%28from_afterscreenupdates_withcapinsets_%29.md): Returns a snapshot view based on the specified contents of the current view, with stretchable insets.
- [drawViewHierarchyInRect:afterScreenUpdates:](drawhierarchy%28in_afterscreenupdates_%29.md): Renders a snapshot of the complete view hierarchy as visible onscreen into the current context.
