> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/backgroundstyle](https://developer.apple.com/documentation/appkit/nscell/backgroundstyle)

# backgroundStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The cell’s background style.

## Declaration

```swift
var backgroundStyle: NSView.BackgroundStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The background describes the surface the cell is drawn onto in the [draw(withFrame:in:)](draw%28withframe_in_%29.md) method. A control typically sets the value of this property before it asks the cell to draw. A cell may draw differently based on background characteristics. For example, a table view drawing a cell in a selected row might set the value to [dark](../nsview/backgroundstyle/dark.md). A text cell might decide to render its text white as a result. A rating-style level indicator might draw its stars white instead of gray.

## See Also

### Managing Display Attributes

- [isBezeled](isbezeled.md): A Boolean value indicating whether the cell has a bezeled border.
- [isBordered](isbordered.md): A Boolean value indicating whether the cell draws itself outlined with a plain border.
- [isOpaque](isopaque.md): A Boolean value indicating whether the cell is completely opaque.
- [controlTint](controltint.md): Deprecated. The cell’s control tint.
- [interiorBackgroundStyle](interiorbackgroundstyle.md): The cell’s interior background style.
- [NSView.BackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.

# backgroundStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The cell’s background style.

## Declaration

```objectivec
@property NSBackgroundStyle backgroundStyle;
```

<a id="Discussion"></a>

## Discussion

The background describes the surface the cell is drawn onto in the [drawWithFrame:inView:](draw%28withframe_in_%29.md) method. A control typically sets the value of this property before it asks the cell to draw. A cell may draw differently based on background characteristics. For example, a table view drawing a cell in a selected row might set the value to [NSBackgroundStyleDark](../nsview/backgroundstyle/dark.md). A text cell might decide to render its text white as a result. A rating-style level indicator might draw its stars white instead of gray.

## See Also

### Managing Display Attributes

- [bezeled](isbezeled.md): A Boolean value indicating whether the cell has a bezeled border.
- [bordered](isbordered.md): A Boolean value indicating whether the cell draws itself outlined with a plain border.
- [opaque](isopaque.md): A Boolean value indicating whether the cell is completely opaque.
- [controlTint](controltint.md): Deprecated. The cell’s control tint.
- [interiorBackgroundStyle](interiorbackgroundstyle.md): The cell’s interior background style.
- [NSBackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
