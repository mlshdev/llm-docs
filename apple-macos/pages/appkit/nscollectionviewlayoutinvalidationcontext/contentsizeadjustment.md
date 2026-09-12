> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutinvalidationcontext/contentsizeadjustment](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutinvalidationcontext/contentsizeadjustment)

# contentSizeAdjustment (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The delta value to add to the collection view’s content size.

## Declaration

```swift
var contentSizeAdjustment: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to update the size of the collection view’s content area, as computed by the associated layout object. The default value of this property is [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize). Changing the value causes the collection view to add the specified height and width values to its content size. Thus, positive values grow the content area and negative values shrink it. You might add space around the content area to provide a visual buffer for your collection view content.

## See Also

### Invalidating the Content Area

- [contentOffsetAdjustment](contentoffsetadjustment.md): The delta value to add to the collection view’s content offset.

# contentSizeAdjustment (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The delta value to add to the collection view’s content size.

## Declaration

```objectivec
@property NSSize contentSizeAdjustment;
```

<a id="Discussion"></a>

## Discussion

Use this property to update the size of the collection view’s content area, as computed by the associated layout object. The default value of this property is [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize). Changing the value causes the collection view to add the specified height and width values to its content size. Thus, positive values grow the content area and negative values shrink it. You might add space around the content area to provide a visual buffer for your collection view content.

## See Also

### Invalidating the Content Area

- [contentOffsetAdjustment](contentoffsetadjustment.md): The delta value to add to the collection view’s content offset.
