> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/allowsundo](https://developer.apple.com/documentation/appkit/nscell/allowsundo)

# allowsUndo (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell assumes responsibility for undo operations.

## Declaration

```swift
var allowsUndo: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the cell handles undo operations itself or [false](https://developer.apple.com/documentation/swift/false) if the app’s custom undo manager must handle undo behavior. Cell subclasses set the value of this property to indicate their preference for handling undo operations. For example, the [NSTextFieldCell](../nstextfieldcell.md) class uses sets this property to indicate it handles undo operations for edited text, and other controls set a value that is appropriate for their implementation. Do not change the value of this property otherwise.

## See Also

### Managing Cell Attributes

- [setCellAttribute(\_:to:)](setcellattribute%28__to_%29.md): Sets the value for the specified cell attribute.
- [cellAttribute(\_:)](cellattribute%28__%29.md): Returns the value for the specified cell attribute.
- [type](type.md): The type of the cell.
- [isEnabled](isenabled.md): A Boolean value indicating whether the cell is currently enabled.

# allowsUndo (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell assumes responsibility for undo operations.

## Declaration

```objectivec
@property BOOL allowsUndo;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the cell handles undo operations itself or [false](https://developer.apple.com/documentation/swift/false) if the app’s custom undo manager must handle undo behavior. Cell subclasses set the value of this property to indicate their preference for handling undo operations. For example, the [NSTextFieldCell](../nstextfieldcell.md) class uses sets this property to indicate it handles undo operations for edited text, and other controls set a value that is appropriate for their implementation. Do not change the value of this property otherwise.

## See Also

### Managing Cell Attributes

- [setCellAttribute:to:](setcellattribute%28__to_%29.md): Sets the value for the specified cell attribute.
- [cellAttribute:](cellattribute%28__%29.md): Returns the value for the specified cell attribute.
- [type](type.md): The type of the cell.
- [enabled](isenabled.md): A Boolean value indicating whether the cell is currently enabled.
