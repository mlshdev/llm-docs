> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectelement/placement](https://developer.apple.com/documentation/photosui/phprojectelement/placement)

# placement (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A rectangle defining where an element is placed in grid space coordinates.

## Declaration

```swift
var placement: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

For layout grids with more than one column, the values in the rectangle will always have integer value.  For fixed layouts, rectangle values will be in fractional unit values.

If suggested placement could not be determined at the time of project creation, the placement will contain [CGRectNull](../../coregraphics/cgrectnull.md).

For example, a rect of `(0,` `0,` `3,` `4)` represents a placement in the upper-left corner of the layout grid, with 3 grid units of width and 4 grid units of height.

## See Also

### Describing Project Elements

- [weight](weight.md): A value between 0 and 1 representing relative significance of the element in its section.

# placement (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A rectangle defining where an element is placed in grid space coordinates.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect placement;
```

<a id="Discussion"></a>

## Discussion

For layout grids with more than one column, the values in the rectangle will always have integer value.  For fixed layouts, rectangle values will be in fractional unit values.

If suggested placement could not be determined at the time of project creation, the placement will contain [CGRectNull](../../coregraphics/cgrectnull.md).

For example, a rect of `(0,` `0,` `3,` `4)` represents a placement in the upper-left corner of the layout grid, with 3 grid units of width and 4 grid units of height.

## See Also

### Describing Project Elements

- [weight](weight.md): A value between 0 and 1 representing relative significance of the element in its section.
