> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/setintercellspacing(_:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/setintercellspacing(_:))

# setIntercellSpacing(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Sets the spacing between cells in the view.

## Declaration

```swift
func setIntercellSpacing(_ aSize: NSSize)
```

## Parameters

- `aSize`: The vertical and horizontal spacing between cells.

<a id="Discussion"></a>

## Discussion

By default, both values are `10.0` in the receiver’s coordinate system.

## See Also

### Setting the Appearance

- [setCellsStyleMask(\_:)](setcellsstylemask%28__%29.md): Defines the appearance style of the cells.
- [cellsStyleMask()](cellsstylemask%28%29.md): Returns the appearance style mask for the cell.
- [setConstrainsToOriginalSize(\_:)](setconstrainstooriginalsize%28__%29.md): Sets whether the receiver constrains the cell’s image to its original size.
- [constrainsToOriginalSize()](constrainstooriginalsize%28%29.md): Returns whether the receiver constrains the cell’s image to its original size.
- [intercellSpacing()](intercellspacing%28%29.md): Returns the spacing between cells in the view.

# setIntercellSpacing: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Sets the spacing between cells in the view.

## Declaration

```objectivec
- (void) setIntercellSpacing:(NSSize) aSize;
```

## Parameters

- `aSize`: The vertical and horizontal spacing between cells.

<a id="Discussion"></a>

## Discussion

By default, both values are `10.0` in the receiver’s coordinate system.

## See Also

### Setting the Appearance

- [setCellsStyleMask:](setcellsstylemask%28__%29.md): Defines the appearance style of the cells.
- [cellsStyleMask](cellsstylemask%28%29.md): Returns the appearance style mask for the cell.
- [setConstrainsToOriginalSize:](setconstrainstooriginalsize%28__%29.md): Sets whether the receiver constrains the cell’s image to its original size.
- [constrainsToOriginalSize](constrainstooriginalsize%28%29.md): Returns whether the receiver constrains the cell’s image to its original size.
- [intercellSpacing](intercellspacing%28%29.md): Returns the spacing between cells in the view.
