> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/contenthuggingpriority(for:)](https://developer.apple.com/documentation/appkit/nsview/contenthuggingpriority(for:))

# contentHuggingPriority(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the priority with which a view resists being made larger than its intrinsic size.

## Declaration

```swift
func contentHuggingPriority(for orientation: NSLayoutConstraint.Orientation) -> NSLayoutConstraint.Priority
```

## Parameters

- `orientation`: The orientation of the dimension of the view that might be enlarged.

<a id="return-value"></a>

## Return Value

The priority with which the view should resist being enlarged from its intrinsic size in the specified orientation.

<a id="Discussion"></a>

## Discussion

The constraint-based layout system uses these priorities when determining the best layout for views that are encountering constraints that would require them to be larger than their intrinsic size.

Subclasses should not override this method. Instead, custom views should set default values for their content on creation, typically to [defaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md) or [defaultHigh](../nslayoutconstraint/priority-swift.struct/defaulthigh.md).

## See Also

### Measuring in Auto Layout

- [fittingSize](fittingsize.md): The minimum size of the view that satisfies the constraints it holds.
- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize()](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriority(for:)](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority(\_:for:)](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [setContentHuggingPriority(\_:for:)](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.
- [noIntrinsicMetric](nointrinsicmetric.md): A value that tells the layout system to ignore the intrinsic size value for a given dimension.

# contentHuggingPriorityForOrientation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the priority with which a view resists being made larger than its intrinsic size.

## Declaration

```objectivec
- (NSLayoutPriority) contentHuggingPriorityForOrientation:(NSLayoutConstraintOrientation) orientation;
```

## Parameters

- `orientation`: The orientation of the dimension of the view that might be enlarged.

<a id="return-value"></a>

## Return Value

The priority with which the view should resist being enlarged from its intrinsic size in the specified orientation.

<a id="Discussion"></a>

## Discussion

The constraint-based layout system uses these priorities when determining the best layout for views that are encountering constraints that would require them to be larger than their intrinsic size.

Subclasses should not override this method. Instead, custom views should set default values for their content on creation, typically to [NSLayoutPriorityDefaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md) or [NSLayoutPriorityDefaultHigh](../nslayoutconstraint/priority-swift.struct/defaulthigh.md).

## See Also

### Measuring in Auto Layout

- [fittingSize](fittingsize.md): The minimum size of the view that satisfies the constraints it holds.
- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriorityForOrientation:](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority:forOrientation:](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [setContentHuggingPriority:forOrientation:](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.
- [NSViewNoIntrinsicMetric](nointrinsicmetric.md): A value that tells the layout system to ignore the intrinsic size value for a given dimension.
