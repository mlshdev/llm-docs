> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/cellbackgroundcolor](https://developer.apple.com/documentation/appkit/nsmatrix/cellbackgroundcolor)

# cellBackgroundColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The background color of the matrix’s cells.

## Declaration

```swift
@NSCopying var cellBackgroundColor: NSColor? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the background color used to fill the space behind non-opaque cells. The default background color is the color returned by the [NSColor](../nscolor.md) method [controlColor](../nscolor/controlcolor.md).

## See Also

### Modifying Graphics Attributes

- [backgroundColor](backgroundcolor.md): The background color of the matrix (the space between the cells).
- [drawsBackground](drawsbackground.md): A Boolean that indicates whether the matrix draws its background.
- [drawsCellBackground](drawscellbackground.md): A Boolean that indicates whether the matrix draws the background within each of its cells.

# cellBackgroundColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The background color of the matrix’s cells.

## Declaration

```objectivec
@property (copy, nullable) NSColor * cellBackgroundColor;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the background color used to fill the space behind non-opaque cells. The default background color is the color returned by the [NSColor](../nscolor.md) method [controlColor](../nscolor/controlcolor.md).

## See Also

### Modifying Graphics Attributes

- [backgroundColor](backgroundcolor.md): The background color of the matrix (the space between the cells).
- [drawsBackground](drawsbackground.md): A Boolean that indicates whether the matrix draws its background.
- [drawsCellBackground](drawscellbackground.md): A Boolean that indicates whether the matrix draws the background within each of its cells.
