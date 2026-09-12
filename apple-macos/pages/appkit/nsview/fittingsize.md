> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/fittingsize](https://developer.apple.com/documentation/appkit/nsview/fittingsize)

# fittingSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The minimum size of the view that satisfies the constraints it holds.

## Declaration

```swift
var fittingSize: NSSize { get }
```

<a id="Discussion"></a>

## Discussion

AppKit sets this property to the best size available for the view, considering all of the constraints it and its subviews hold and satisfying a preference to make the view as small as possible. The size values in this property are never negative.

## See Also

### Measuring in Auto Layout

- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize()](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriority(for:)](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority(\_:for:)](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriority(for:)](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority(\_:for:)](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.
- [noIntrinsicMetric](nointrinsicmetric.md): A value that tells the layout system to ignore the intrinsic size value for a given dimension.

# fittingSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The minimum size of the view that satisfies the constraints it holds.

## Declaration

```objectivec
@property (readonly) NSSize fittingSize;
```

<a id="Discussion"></a>

## Discussion

AppKit sets this property to the best size available for the view, considering all of the constraints it and its subviews hold and satisfying a preference to make the view as small as possible. The size values in this property are never negative.

## See Also

### Measuring in Auto Layout

- [intrinsicContentSize](intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriorityForOrientation:](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority:forOrientation:](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriorityForOrientation:](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority:forOrientation:](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.
- [NSViewNoIntrinsicMetric](nointrinsicmetric.md): A value that tells the layout system to ignore the intrinsic size value for a given dimension.
