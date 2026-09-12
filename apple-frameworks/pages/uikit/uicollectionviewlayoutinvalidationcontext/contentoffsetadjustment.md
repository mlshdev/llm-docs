> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutinvalidationcontext/contentoffsetadjustment](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutinvalidationcontext/contentoffsetadjustment)

# contentOffsetAdjustment (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delta value to be applied to the collection view’s content offset.

## Declaration

```swift
var contentOffsetAdjustment: CGPoint { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to update the content offset of the collection view. The default value of this property is [CGPointZero](../../coregraphics/cgpointzero.md). Changing the value causes the collection view to add the specified x and y values to its [contentOffset](../uiscrollview/contentoffset.md) property. Thus, positive values increase the content offset and negative values decrease it.

## See Also

### Invalidating the Content Area

- [contentSizeAdjustment](contentsizeadjustment.md): The delta value to be applied to the collection view’s content size.

# contentOffsetAdjustment (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delta value to be applied to the collection view’s content offset.

## Declaration

```objectivec
@property (nonatomic) CGPoint contentOffsetAdjustment;
```

<a id="Discussion"></a>

## Discussion

Use this property to update the content offset of the collection view. The default value of this property is [CGPointZero](../../coregraphics/cgpointzero.md). Changing the value causes the collection view to add the specified x and y values to its [contentOffset](../uiscrollview/contentoffset.md) property. Thus, positive values increase the content offset and negative values decrease it.

## See Also

### Invalidating the Content Area

- [contentSizeAdjustment](contentsizeadjustment.md): The delta value to be applied to the collection view’s content size.
