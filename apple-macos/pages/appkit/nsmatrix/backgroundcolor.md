> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/backgroundcolor](https://developer.apple.com/documentation/appkit/nsmatrix/backgroundcolor)

# backgroundColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The background color of the matrix (the space between the cells).

## Declaration

```swift
@NSCopying var backgroundColor: NSColor { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the background color used to fill the space between cells or the space behind any non-opaque cells. The default background color is the color returned by the [NSColor](../nscolor.md) method [controlColor](../nscolor/controlcolor.md).

## See Also

### Modifying Graphics Attributes

- [cellBackgroundColor](cellbackgroundcolor.md): The background color of the matrix’s cells.
- [drawsBackground](drawsbackground.md): A Boolean that indicates whether the matrix draws its background.
- [drawsCellBackground](drawscellbackground.md): A Boolean that indicates whether the matrix draws the background within each of its cells.

# backgroundColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The background color of the matrix (the space between the cells).

## Declaration

```objectivec
@property (copy) NSColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the background color used to fill the space between cells or the space behind any non-opaque cells. The default background color is the color returned by the [NSColor](../nscolor.md) method [controlColor](../nscolor/controlcolor.md).

## See Also

### Modifying Graphics Attributes

- [cellBackgroundColor](cellbackgroundcolor.md): The background color of the matrix’s cells.
- [drawsBackground](drawsbackground.md): A Boolean that indicates whether the matrix draws its background.
- [drawsCellBackground](drawscellbackground.md): A Boolean that indicates whether the matrix draws the background within each of its cells.
