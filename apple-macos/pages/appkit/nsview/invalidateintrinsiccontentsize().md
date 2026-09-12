> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/invalidateintrinsiccontentsize()](https://developer.apple.com/documentation/appkit/nsview/invalidateintrinsiccontentsize())

# invalidateIntrinsicContentSize() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invalidates the view’s intrinsic content size.

## Declaration

```swift
func invalidateIntrinsicContentSize()
```

<a id="Discussion"></a>

## Discussion

Call this when something changes in your custom view that invalidates its intrinsic content size. This allows the constraint-based layout system to take the new intrinsic content size into account in its next layout pass.

## See Also

### Measuring in Auto Layout

- [fittingSize](fittingsize.md): The minimum size of the view that satisfies the constraints it holds.
- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [contentCompressionResistancePriority(for:)](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority(\_:for:)](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriority(for:)](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority(\_:for:)](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.
- [noIntrinsicMetric](nointrinsicmetric.md): A value that tells the layout system to ignore the intrinsic size value for a given dimension.

# invalidateIntrinsicContentSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invalidates the view’s intrinsic content size.

## Declaration

```objectivec
- (void) invalidateIntrinsicContentSize;
```

<a id="Discussion"></a>

## Discussion

Call this when something changes in your custom view that invalidates its intrinsic content size. This allows the constraint-based layout system to take the new intrinsic content size into account in its next layout pass.

## See Also

### Measuring in Auto Layout

- [fittingSize](fittingsize.md): The minimum size of the view that satisfies the constraints it holds.
- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [contentCompressionResistancePriorityForOrientation:](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority:forOrientation:](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriorityForOrientation:](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority:forOrientation:](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.
- [NSViewNoIntrinsicMetric](nointrinsicmetric.md): A value that tells the layout system to ignore the intrinsic size value for a given dimension.
