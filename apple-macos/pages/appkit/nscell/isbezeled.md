> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/isbezeled](https://developer.apple.com/documentation/appkit/nscell/isbezeled)

# isBezeled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell has a bezeled border.

## Declaration

```swift
var isBezeled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the cell has a bezeled border or [false](https://developer.apple.com/documentation/swift/false) if it does not. This property is mutually exclusive with the [isBordered](isbordered.md) property—that is, a cell’s border can be plain or bezeled but not both. Changing the value of this property automatically removes any border that has been set, regardless of the value you assign to the property.

## See Also

### Managing Display Attributes

- [isBordered](isbordered.md): A Boolean value indicating whether the cell draws itself outlined with a plain border.
- [isOpaque](isopaque.md): A Boolean value indicating whether the cell is completely opaque.
- [controlTint](controltint.md): Deprecated. The cell’s control tint.
- [backgroundStyle](backgroundstyle.md): The cell’s background style.
- [interiorBackgroundStyle](interiorbackgroundstyle.md): The cell’s interior background style.
- [NSView.BackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.

# bezeled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell has a bezeled border.

## Declaration

```objectivec
@property (getter=isBezeled) BOOL bezeled;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the cell has a bezeled border or [false](https://developer.apple.com/documentation/swift/false) if it does not. This property is mutually exclusive with the [bordered](isbordered.md) property—that is, a cell’s border can be plain or bezeled but not both. Changing the value of this property automatically removes any border that has been set, regardless of the value you assign to the property.

## See Also

### Managing Display Attributes

- [bordered](isbordered.md): A Boolean value indicating whether the cell draws itself outlined with a plain border.
- [opaque](isopaque.md): A Boolean value indicating whether the cell is completely opaque.
- [controlTint](controltint.md): Deprecated. The cell’s control tint.
- [backgroundStyle](backgroundstyle.md): The cell’s background style.
- [interiorBackgroundStyle](interiorbackgroundstyle.md): The cell’s interior background style.
- [NSBackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
