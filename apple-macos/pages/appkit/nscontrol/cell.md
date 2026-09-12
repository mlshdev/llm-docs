> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/cell](https://developer.apple.com/documentation/appkit/nscontrol/cell)

# cell (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s cell object.

## Declaration

```swift
var cell: NSCell? { get set }
```

<a id="Discussion"></a>

## Discussion

For controls with multiple cells (such as `NSMatrix` or `NSForm`), use the [selectedCell()](selectedcell%28%29.md) property to retrieve a specific cell.

## See Also

### Deprecated Properties

- [cellClass](cellclass.md): Returns the type of cell used by the receiver.

# cell (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s cell object.

## Declaration

```objectivec
@property (strong, nullable) NSCell * cell;
```

<a id="Discussion"></a>

## Discussion

For controls with multiple cells (such as `NSMatrix` or `NSForm`), use the [selectedCell](selectedcell%28%29.md) property to retrieve a specific cell.

## See Also

### Deprecated Properties

- [cellClass](cellclass.md): Returns the type of cell used by the receiver.
