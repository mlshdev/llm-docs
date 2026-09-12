> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/mode-swift.property](https://developer.apple.com/documentation/appkit/nsmatrix/mode-swift.property)

# mode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The selection mode of the receiver.

## Declaration

```swift
var mode: NSMatrix.Mode { get set }
```

<a id="Discussion"></a>

## Discussion

See [NSMatrix.Mode](mode-swift.enum.md) for possible values.

## See Also

### Related Documentation

- [init(frame:mode:cellClass:numberOfRows:numberOfColumns:)](init%28frame_mode_cellclass_numberofrows_numberofcolumns_%29.md): Initializes and returns a newly allocated matrix of the specified size using cells of the given class.
- [init(frame:mode:prototype:numberOfRows:numberOfColumns:)](init%28frame_mode_prototype_numberofrows_numberofcolumns_%29.md): Initializes and returns a newly allocated matrix of the specified size using the given cell as a prototype.

### Configuring the Matrix Object

- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether a radio-mode matrix supports an empty selection.
- [isSelectionByRect](isselectionbyrect.md): A Boolean that indicates whether the user can select a rectangle of cells in the receiver by dragging the cursor.

# mode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The selection mode of the receiver.

## Declaration

```objectivec
@property NSMatrixMode mode;
```

<a id="Discussion"></a>

## Discussion

See [NSMatrixMode](mode-swift.enum.md) for possible values.

## See Also

### Related Documentation

- [initWithFrame:mode:cellClass:numberOfRows:numberOfColumns:](init%28frame_mode_cellclass_numberofrows_numberofcolumns_%29.md): Initializes and returns a newly allocated matrix of the specified size using cells of the given class.
- [initWithFrame:mode:prototype:numberOfRows:numberOfColumns:](init%28frame_mode_prototype_numberofrows_numberofcolumns_%29.md): Initializes and returns a newly allocated matrix of the specified size using the given cell as a prototype.

### Configuring the Matrix Object

- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether a radio-mode matrix supports an empty selection.
- [selectionByRect](isselectionbyrect.md): A Boolean that indicates whether the user can select a rectangle of cells in the receiver by dragging the cursor.
