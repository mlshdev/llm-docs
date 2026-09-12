> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/nointrinsicmetric](https://developer.apple.com/documentation/appkit/nsview/nointrinsicmetric)

# noIntrinsicMetric (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.11+

A value that tells the layout system to ignore the intrinsic size value for a given dimension.

## Declaration

```swift
class let noIntrinsicMetric: CGFloat
```

<a id="Discussion"></a>

## Discussion

Specify this value if a view doesn’t have an intrinsic height or width. For example, a horizontal slider has an intrinsic height but might have no intrinsic width.

## See Also

### Measuring in Auto Layout

- [fittingSize](fittingsize.md): The minimum size of the view that satisfies the constraints it holds.
- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize()](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriority(for:)](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority(\_:for:)](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriority(for:)](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority(\_:for:)](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.

# NSViewNoIntrinsicMetric (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.11+

A value that tells the layout system to ignore the intrinsic size value for a given dimension.

## Declaration

```objectivec
extern const CGFloat NSViewNoIntrinsicMetric;
```

<a id="Discussion"></a>

## Discussion

Specify this value if a view doesn’t have an intrinsic height or width. For example, a horizontal slider has an intrinsic height but might have no intrinsic width.

## See Also

### Measuring in Auto Layout

- [fittingSize](fittingsize.md): The minimum size of the view that satisfies the constraints it holds.
- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriorityForOrientation:](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority:forOrientation:](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriorityForOrientation:](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority:forOrientation:](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.
