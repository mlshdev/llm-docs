> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/controltint](https://developer.apple.com/documentation/appkit/nscell/controltint)

# controlTint (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 11.0)

The cell’s control tint.

> The controlTint property is not respected on 10.14 and later. For custom cells, use +\[NSColor controlAccentColor\] to respect the user's preferred accent color when drawing.

## Declaration

```swift
var controlTint: NSControlTint { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSControlTint.defaultControlTint](../nscontroltint/defaultcontroltint.md).

## See Also

### Managing Display Attributes

- [isBezeled](isbezeled.md): A Boolean value indicating whether the cell has a bezeled border.
- [isBordered](isbordered.md): A Boolean value indicating whether the cell draws itself outlined with a plain border.
- [isOpaque](isopaque.md): A Boolean value indicating whether the cell is completely opaque.
- [backgroundStyle](backgroundstyle.md): The cell’s background style.
- [interiorBackgroundStyle](interiorbackgroundstyle.md): The cell’s interior background style.
- [NSView.BackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.

# controlTint (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 11.0)

The cell’s control tint.

> The controlTint property is not respected on 10.14 and later. For custom cells, use +\[NSColor controlAccentColor\] to respect the user's preferred accent color when drawing.

## Declaration

```objectivec
@property NSControlTint controlTint;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSDefaultControlTint](../nscontroltint/defaultcontroltint.md).

## See Also

### Managing Display Attributes

- [bezeled](isbezeled.md): A Boolean value indicating whether the cell has a bezeled border.
- [bordered](isbordered.md): A Boolean value indicating whether the cell draws itself outlined with a plain border.
- [opaque](isopaque.md): A Boolean value indicating whether the cell is completely opaque.
- [backgroundStyle](backgroundstyle.md): The cell’s background style.
- [interiorBackgroundStyle](interiorbackgroundstyle.md): The cell’s interior background style.
- [NSBackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
