> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/intrinsiccontentsize](https://developer.apple.com/documentation/appkit/nsview/intrinsiccontentsize)

# intrinsicContentSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The natural size for the receiving view, considering only properties of the view itself.

## Declaration

```swift
var intrinsicContentSize: NSSize { get }
```

<a id="return-value"></a>

## Return Value

A size indicating the natural size for the receiving view based on its intrinsic properties.

<a id="Discussion"></a>

## Discussion

The default width and height values of this property are set to [noIntrinsicMetric](nointrinsicmetric.md). For a custom view, you can override this property and use it to communicate what size you would like your view to be based on its content. You might do this in cases where the layout system cannot determine the size of the view based solely on its current constraints. For example, a text field might override this method and return an intrinsic size based on the text it contains. The intrinsic size you supply must be independent of the content frame, because there’s no way to dynamically communicate a changed width to the layout system based on a changed height. If your custom view has no intrinsic size for a given dimension, you can set the corresponding dimension to the [noIntrinsicMetric](nointrinsicmetric.md).

## See Also

### Measuring in Auto Layout

- [fittingSize](fittingsize.md): The minimum size of the view that satisfies the constraints it holds.
- [invalidateIntrinsicContentSize()](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriority(for:)](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority(\_:for:)](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriority(for:)](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority(\_:for:)](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.
- [noIntrinsicMetric](nointrinsicmetric.md): A value that tells the layout system to ignore the intrinsic size value for a given dimension.

# intrinsicContentSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The natural size for the receiving view, considering only properties of the view itself.

## Declaration

```objectivec
@property (readonly) NSSize intrinsicContentSize;
```

<a id="return-value"></a>

## Return Value

A size indicating the natural size for the receiving view based on its intrinsic properties.

<a id="Discussion"></a>

## Discussion

The default width and height values of this property are set to [NSViewNoIntrinsicMetric](nointrinsicmetric.md). For a custom view, you can override this property and use it to communicate what size you would like your view to be based on its content. You might do this in cases where the layout system cannot determine the size of the view based solely on its current constraints. For example, a text field might override this method and return an intrinsic size based on the text it contains. The intrinsic size you supply must be independent of the content frame, because there’s no way to dynamically communicate a changed width to the layout system based on a changed height. If your custom view has no intrinsic size for a given dimension, you can set the corresponding dimension to the [NSViewNoIntrinsicMetric](nointrinsicmetric.md).

## See Also

### Measuring in Auto Layout

- [fittingSize](fittingsize.md): The minimum size of the view that satisfies the constraints it holds.
- [invalidateIntrinsicContentSize](invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriorityForOrientation:](contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority:forOrientation:](setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriorityForOrientation:](contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority:forOrientation:](setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.
- [NSViewNoIntrinsicMetric](nointrinsicmetric.md): A value that tells the layout system to ignore the intrinsic size value for a given dimension.
