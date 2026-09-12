> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/setcontenthuggingpriority(_:for:)](https://developer.apple.com/documentation/appkit/nsview/setcontenthuggingpriority(_:for:))

# setContentHuggingPriority(\_:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sets the priority with which a view resists being made larger than its intrinsic size.

## Declaration

```swift
func setContentHuggingPriority(_ priority: NSLayoutConstraint.Priority, for orientation: NSLayoutConstraint.Orientation)
```

## Parameters

- `priority`: The new priority.
- `orientation`: The orientation for which the content hugging priority should be set.

<a id="Discussion"></a>

## Discussion

Custom views should set default values for both orientations on creation, based on their content, typically to [defaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md) or [defaultHigh](../nslayoutconstraint/priority-swift.struct/defaulthigh.md). When creating user interfaces, the layout designer can modify these priorities for specific views when the overall layout design requires different tradeoffs than the natural priorities of the views being used in the interface.

Subclasses should not override this method.

## See Also

### Measuring in Auto Layout

- [fittingSize](fittingsize.md): The minimum size of the view that satisfies the constraints it holds.
- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize()](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriority(for:)](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority(\_:for:)](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriority(for:)](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [noIntrinsicMetric](nointrinsicmetric.md): A value that tells the layout system to ignore the intrinsic size value for a given dimension.

# setContentHuggingPriority:forOrientation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sets the priority with which a view resists being made larger than its intrinsic size.

## Declaration

```objectivec
- (void) setContentHuggingPriority:(NSLayoutPriority) priority forOrientation:(NSLayoutConstraintOrientation) orientation;
```

## Parameters

- `priority`: The new priority.
- `orientation`: The orientation for which the content hugging priority should be set.

<a id="Discussion"></a>

## Discussion

Custom views should set default values for both orientations on creation, based on their content, typically to [NSLayoutPriorityDefaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md) or [NSLayoutPriorityDefaultHigh](../nslayoutconstraint/priority-swift.struct/defaulthigh.md). When creating user interfaces, the layout designer can modify these priorities for specific views when the overall layout design requires different tradeoffs than the natural priorities of the views being used in the interface.

Subclasses should not override this method.

## See Also

### Measuring in Auto Layout

- [fittingSize](fittingsize.md): The minimum size of the view that satisfies the constraints it holds.
- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriorityForOrientation:](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority:forOrientation:](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriorityForOrientation:](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [NSViewNoIntrinsicMetric](nointrinsicmetric.md): A value that tells the layout system to ignore the intrinsic size value for a given dimension.
