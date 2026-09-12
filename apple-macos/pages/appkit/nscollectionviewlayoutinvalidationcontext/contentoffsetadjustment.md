> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutinvalidationcontext/contentoffsetadjustment](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutinvalidationcontext/contentoffsetadjustment)

# contentOffsetAdjustment (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The delta value to add to the collection view’s content offset.

## Declaration

```swift
var contentOffsetAdjustment: NSPoint { get set }
```

<a id="Discussion"></a>

## Discussion

The content offset adjustment shifts the position of content inside the collection view by the specified amount. You use this value to make tweaks based on how you want to present your content. For example, you might use it to ensure that the first line of items is always lined up at the same position in the collection view’s visible rectangle. When making adjustments, you can specify both positive and negative values.

The default value of this property is [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize).

## See Also

### Invalidating the Content Area

- [contentSizeAdjustment](contentsizeadjustment.md): The delta value to add to the collection view’s content size.

# contentOffsetAdjustment (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The delta value to add to the collection view’s content offset.

## Declaration

```objectivec
@property NSPoint contentOffsetAdjustment;
```

<a id="Discussion"></a>

## Discussion

The content offset adjustment shifts the position of content inside the collection view by the specified amount. You use this value to make tweaks based on how you want to present your content. For example, you might use it to ensure that the first line of items is always lined up at the same position in the collection view’s visible rectangle. When making adjustments, you can specify both positive and negative values.

The default value of this property is [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize).

## See Also

### Invalidating the Content Area

- [contentSizeAdjustment](contentsizeadjustment.md): The delta value to add to the collection view’s content size.
