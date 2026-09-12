> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/autosavetablecolumns](https://developer.apple.com/documentation/appkit/nstableview/autosavetablecolumns)

# autosaveTableColumns (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the order and width of the table view’s columns are automatically saved.

## Declaration

```swift
var autosaveTableColumns: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the table information is saved separately for each user and application under the name specified in the [autosaveName](autosavename-swift.property.md) property. If you change the value of this property from [false](https://developer.apple.com/documentation/swift/false) to [true](https://developer.apple.com/documentation/swift/true), the table tries to read in any saved information and sets the order and width of this table view’s columns to match. If the [autosaveName](autosavename-swift.property.md) property is `nil`, this setting is ignored and the table information is not read or saved.

When autosave is enabled, the table saves the table column width, the table column order, any applied sort descriptors, and the table column hidden state (in macOS 10.5 and later).

## See Also

### Table Column State Persistence

- [autosaveName](autosavename-swift.property.md): The name under which table information is automatically saved.
- [NSTableView.AutosaveName](autosavename-swift.typealias.md)

# autosaveTableColumns (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the order and width of the table view’s columns are automatically saved.

## Declaration

```objectivec
@property BOOL autosaveTableColumns;
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the table information is saved separately for each user and application under the name specified in the [autosaveName](autosavename-swift.property.md) property. If you change the value of this property from [false](https://developer.apple.com/documentation/swift/false) to [true](https://developer.apple.com/documentation/swift/true), the table tries to read in any saved information and sets the order and width of this table view’s columns to match. If the [autosaveName](autosavename-swift.property.md) property is `nil`, this setting is ignored and the table information is not read or saved.

When autosave is enabled, the table saves the table column width, the table column order, any applied sort descriptors, and the table column hidden state (in macOS 10.5 and later).

## See Also

### Table Column State Persistence

- [autosaveName](autosavename-swift.property.md): The name under which table information is automatically saved.
- [NSTableViewAutosaveName](autosavename-swift.typealias.md)
