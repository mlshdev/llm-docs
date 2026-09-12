> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/isenabled](https://developer.apple.com/documentation/appkit/nscell/isenabled)

# isEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell is currently enabled.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the cell is enabled or [false](https://developer.apple.com/documentation/swift/false) when it is disabled. The text of disabled cells is gray. If a cell is disabled, it cannot be highlighted, does not support mouse tracking (and thus cannot participate in target/action functionality), and cannot be edited. However, you can still alter many attributes of a disabled cell programmatically. (The [state](state.md) property, for instance, still works.)

## See Also

### Managing Cell Attributes

- [setCellAttribute(\_:to:)](setcellattribute%28__to_%29.md): Sets the value for the specified cell attribute.
- [cellAttribute(\_:)](cellattribute%28__%29.md): Returns the value for the specified cell attribute.
- [type](type.md): The type of the cell.
- [allowsUndo](allowsundo.md): A Boolean value indicating whether the cell assumes responsibility for undo operations.

# enabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell is currently enabled.

## Declaration

```objectivec
@property (getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the cell is enabled or [false](https://developer.apple.com/documentation/swift/false) when it is disabled. The text of disabled cells is gray. If a cell is disabled, it cannot be highlighted, does not support mouse tracking (and thus cannot participate in target/action functionality), and cannot be edited. However, you can still alter many attributes of a disabled cell programmatically. (The [state](state.md) property, for instance, still works.)

## See Also

### Managing Cell Attributes

- [setCellAttribute:to:](setcellattribute%28__to_%29.md): Sets the value for the specified cell attribute.
- [cellAttribute:](cellattribute%28__%29.md): Returns the value for the specified cell attribute.
- [type](type.md): The type of the cell.
- [allowsUndo](allowsundo.md): A Boolean value indicating whether the cell assumes responsibility for undo operations.
