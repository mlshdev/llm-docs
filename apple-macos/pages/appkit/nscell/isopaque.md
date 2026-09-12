> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/isopaque](https://developer.apple.com/documentation/appkit/nscell/isopaque)

# isOpaque (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell is completely opaque.

## Declaration

```swift
var isOpaque: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the cell is completely opaque or [false](https://developer.apple.com/documentation/swift/false) if it contains some transparency.

## See Also

### Managing Display Attributes

- [isBezeled](isbezeled.md): A Boolean value indicating whether the cell has a bezeled border.
- [isBordered](isbordered.md): A Boolean value indicating whether the cell draws itself outlined with a plain border.
- [controlTint](controltint.md): Deprecated. The cell’s control tint.
- [backgroundStyle](backgroundstyle.md): The cell’s background style.
- [interiorBackgroundStyle](interiorbackgroundstyle.md): The cell’s interior background style.
- [NSView.BackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.

# opaque (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell is completely opaque.

## Declaration

```objectivec
@property (readonly, getter=isOpaque) BOOL opaque;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the cell is completely opaque or [false](https://developer.apple.com/documentation/swift/false) if it contains some transparency.

## See Also

### Managing Display Attributes

- [bezeled](isbezeled.md): A Boolean value indicating whether the cell has a bezeled border.
- [bordered](isbordered.md): A Boolean value indicating whether the cell draws itself outlined with a plain border.
- [controlTint](controltint.md): Deprecated. The cell’s control tint.
- [backgroundStyle](backgroundstyle.md): The cell’s background style.
- [interiorBackgroundStyle](interiorbackgroundstyle.md): The cell’s interior background style.
- [NSBackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
