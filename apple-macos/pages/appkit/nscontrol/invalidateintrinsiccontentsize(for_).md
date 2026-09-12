> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/invalidateintrinsiccontentsize(for:)](https://developer.apple.com/documentation/appkit/nscontrol/invalidateintrinsiccontentsize(for:))

# invalidateIntrinsicContentSize(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Notifies the control that the intrinsic content size for its cell is no longer valid.

## Declaration

```swift
func invalidateIntrinsicContentSize(for cell: NSCell)
```

## Parameters

- `cell`: The cell whose intrinsic content size has changed.

<a id="Discussion"></a>

## Discussion

Controls determine their intrinsic content size based on the cell size for a given bounds returned by their cell. When the content of the cell changes in a way that would change the return value of [cellSize(forBounds:)](../nscell/cellsize%28forbounds_%29.md), the cell needs to call this method to notify its control that its intrinsic size is no longer valid.

# invalidateIntrinsicContentSizeForCell: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Notifies the control that the intrinsic content size for its cell is no longer valid.

## Declaration

```objectivec
- (void) invalidateIntrinsicContentSizeForCell:(NSCell *) cell;
```

## Parameters

- `cell`: The cell whose intrinsic content size has changed.

<a id="Discussion"></a>

## Discussion

Controls determine their intrinsic content size based on the cell size for a given bounds returned by their cell. When the content of the cell changes in a way that would change the return value of [cellSizeForBounds:](../nscell/cellsize%28forbounds_%29.md), the cell needs to call this method to notify its control that its intrinsic size is no longer valid.
