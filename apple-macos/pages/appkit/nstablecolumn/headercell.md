> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstablecolumn/headercell

# headerCell (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell used to draw the table column’s header.

## Declaration

```swift
var headerCell: NSTableHeaderCell { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property must not be `nil`. It’s recommended that the value of this property be an instance or subclass of [NSTableHeaderCell](../nstableheadercell.md).

You can set the table column title using the [title](title.md) property.

## See Also

### Setting the Header

- [title](title.md): The title of the table column’s header.

# headerCell (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell used to draw the table column’s header.

## Declaration

```objectivec
@property (strong) NSTableHeaderCell * headerCell;
```

<a id="Discussion"></a>

## Discussion

The value of this property must not be `nil`. It’s recommended that the value of this property be an instance or subclass of [NSTableHeaderCell](../nstableheadercell.md).

You can set the table column title using the [title](title.md) property.

## See Also

### Setting the Header

- [title](title.md): The title of the table column’s header.
