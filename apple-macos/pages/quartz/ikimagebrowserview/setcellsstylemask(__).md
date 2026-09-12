> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/setcellsstylemask(_:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/setcellsstylemask(_:))

# setCellsStyleMask(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Defines the appearance style of the cells.

## Declaration

```swift
func setCellsStyleMask(_ mask: Int)
```

## Parameters

- `mask`: An integer bit mask.   A mask can be specified by combining any of the options described in [Cell Appearance Style Masks](../1564248-cell-appearance-style-masks.md) using the C bitwise `OR` operator.

## See Also

### Setting the Appearance

- [cellsStyleMask()](cellsstylemask%28%29.md): Returns the appearance style mask for the cell.
- [setConstrainsToOriginalSize(\_:)](setconstrainstooriginalsize%28__%29.md): Sets whether the receiver constrains the cell’s image to its original size.
- [constrainsToOriginalSize()](constrainstooriginalsize%28%29.md): Returns whether the receiver constrains the cell’s image to its original size.
- [setIntercellSpacing(\_:)](setintercellspacing%28__%29.md): Sets the spacing between cells in the view.
- [intercellSpacing()](intercellspacing%28%29.md): Returns the spacing between cells in the view.

# setCellsStyleMask: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Defines the appearance style of the cells.

## Declaration

```objectivec
- (void) setCellsStyleMask:(NSUInteger) mask;
```

## Parameters

- `mask`: An integer bit mask.   A mask can be specified by combining any of the options described in [Cell Appearance Style Masks](../1564248-cell-appearance-style-masks.md) using the C bitwise `OR` operator.

## See Also

### Setting the Appearance

- [cellsStyleMask](cellsstylemask%28%29.md): Returns the appearance style mask for the cell.
- [setConstrainsToOriginalSize:](setconstrainstooriginalsize%28__%29.md): Sets whether the receiver constrains the cell’s image to its original size.
- [constrainsToOriginalSize](constrainstooriginalsize%28%29.md): Returns whether the receiver constrains the cell’s image to its original size.
- [setIntercellSpacing:](setintercellspacing%28__%29.md): Sets the spacing between cells in the view.
- [intercellSpacing](intercellspacing%28%29.md): Returns the spacing between cells in the view.
