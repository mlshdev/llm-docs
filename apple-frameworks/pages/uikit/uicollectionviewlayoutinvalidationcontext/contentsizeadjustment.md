> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutinvalidationcontext/contentsizeadjustment](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutinvalidationcontext/contentsizeadjustment)

# contentSizeAdjustment (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delta value to be applied to the collection view’s content size.

## Declaration

```swift
var contentSizeAdjustment: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to update the size of the collection view’s content area. The default value of this property is [CGSizeZero](../../coregraphics/cgsizezero.md). Changing the value causes the collection view to add the specified height and width values to its [contentSize](../uiscrollview/contentsize.md) property. Thus, positive values grow the content area and negative values shrink it.

## See Also

### Invalidating the Content Area

- [contentOffsetAdjustment](contentoffsetadjustment.md): The delta value to be applied to the collection view’s content offset.

# contentSizeAdjustment (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delta value to be applied to the collection view’s content size.

## Declaration

```objectivec
@property (nonatomic) CGSize contentSizeAdjustment;
```

<a id="Discussion"></a>

## Discussion

Use this property to update the size of the collection view’s content area. The default value of this property is [CGSizeZero](../../coregraphics/cgsizezero.md). Changing the value causes the collection view to add the specified height and width values to its [contentSize](../uiscrollview/contentsize.md) property. Thus, positive values grow the content area and negative values shrink it.

## See Also

### Invalidating the Content Area

- [contentOffsetAdjustment](contentoffsetadjustment.md): The delta value to be applied to the collection view’s content offset.
