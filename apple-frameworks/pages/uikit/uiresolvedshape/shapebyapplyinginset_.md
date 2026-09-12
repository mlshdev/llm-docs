> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresolvedshape/shapebyapplyinginset:](https://developer.apple.com/documentation/uikit/uiresolvedshape/shapebyapplyinginset:)

# shapeByApplyingInset:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Creates a new modified shape by applying the provided inset to this shape.

## Declaration

```objectivec
- (UIResolvedShape *) shapeByApplyingInset:(CGFloat) inset;
```

<a id="Discussion"></a>

## Discussion

You can use negative values to add inner padding to a shape.

If it isn’t possible to inset this shape (for example, if it’s a custom path), this method doesn’t have any effect. For some shapes like rounded rectangles, this method can also modify the corner radii of the shape to ensure the resulting corners are concentric.

## See Also

### Creating a resolved shape by applying insets

- [shapeByApplyingInsets:](shapebyapplyinginsets_.md): Creates a new modified shape by applying the provided insets to this shape.
