> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/isbordered](https://developer.apple.com/documentation/appkit/nscell/isbordered)

# isBordered (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell draws itself outlined with a plain border.

## Declaration

```swift
var isBordered: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the cell has a plain border or [false](https://developer.apple.com/documentation/swift/false) if it does not. This property is mutually exclusive with the [isBezeled](isbezeled.md) property—that is, a cell’s border can be plain or bezeled but not both. Changing the value of this property automatically removes any bezel that has been set, regardless of the value you assign to the property.

## See Also

### Managing Display Attributes

- [isBezeled](isbezeled.md): A Boolean value indicating whether the cell has a bezeled border.
- [isOpaque](isopaque.md): A Boolean value indicating whether the cell is completely opaque.
- [controlTint](controltint.md): Deprecated. The cell’s control tint.
- [backgroundStyle](backgroundstyle.md): The cell’s background style.
- [interiorBackgroundStyle](interiorbackgroundstyle.md): The cell’s interior background style.
- [NSView.BackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.

# bordered (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell draws itself outlined with a plain border.

## Declaration

```objectivec
@property (getter=isBordered) BOOL bordered;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the cell has a plain border or [false](https://developer.apple.com/documentation/swift/false) if it does not. This property is mutually exclusive with the [bezeled](isbezeled.md) property—that is, a cell’s border can be plain or bezeled but not both. Changing the value of this property automatically removes any bezel that has been set, regardless of the value you assign to the property.

## See Also

### Managing Display Attributes

- [bezeled](isbezeled.md): A Boolean value indicating whether the cell has a bezeled border.
- [opaque](isopaque.md): A Boolean value indicating whether the cell is completely opaque.
- [controlTint](controltint.md): Deprecated. The cell’s control tint.
- [backgroundStyle](backgroundstyle.md): The cell’s background style.
- [interiorBackgroundStyle](interiorbackgroundstyle.md): The cell’s interior background style.
- [NSBackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
