> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/interiorbackgroundstyle](https://developer.apple.com/documentation/appkit/nscell/interiorbackgroundstyle)

# interiorBackgroundStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The cell’s interior background style.

## Declaration

```swift
var interiorBackgroundStyle: NSView.BackgroundStyle { get }
```

<a id="Discussion"></a>

## Discussion

The interior background style describes the surface drawn onto in the [drawInterior(withFrame:in:)](drawinterior%28withframe_in_%29.md) method. This is often the same as the [backgroundStyle](backgroundstyle.md), but a button that draws a bezel would use a different value for this property.

In a custom button with a custom bezel you can override this property and return a different value to describe that surface. A cell that has custom interior drawing might use the value of this property to pick an image that looks good on the cell.

## See Also

### Managing Display Attributes

- [isBezeled](isbezeled.md): A Boolean value indicating whether the cell has a bezeled border.
- [isBordered](isbordered.md): A Boolean value indicating whether the cell draws itself outlined with a plain border.
- [isOpaque](isopaque.md): A Boolean value indicating whether the cell is completely opaque.
- [controlTint](controltint.md): Deprecated. The cell’s control tint.
- [backgroundStyle](backgroundstyle.md): The cell’s background style.
- [NSView.BackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.

# interiorBackgroundStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The cell’s interior background style.

## Declaration

```objectivec
@property (readonly) NSBackgroundStyle interiorBackgroundStyle;
```

<a id="Discussion"></a>

## Discussion

The interior background style describes the surface drawn onto in the [drawInteriorWithFrame:inView:](drawinterior%28withframe_in_%29.md) method. This is often the same as the [backgroundStyle](backgroundstyle.md), but a button that draws a bezel would use a different value for this property.

In a custom button with a custom bezel you can override this property and return a different value to describe that surface. A cell that has custom interior drawing might use the value of this property to pick an image that looks good on the cell.

## See Also

### Managing Display Attributes

- [bezeled](isbezeled.md): A Boolean value indicating whether the cell has a bezeled border.
- [bordered](isbordered.md): A Boolean value indicating whether the cell draws itself outlined with a plain border.
- [opaque](isopaque.md): A Boolean value indicating whether the cell is completely opaque.
- [controlTint](controltint.md): Deprecated. The cell’s control tint.
- [backgroundStyle](backgroundstyle.md): The cell’s background style.
- [NSBackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
