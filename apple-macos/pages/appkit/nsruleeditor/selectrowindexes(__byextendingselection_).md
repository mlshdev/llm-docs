> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/selectrowindexes(_:byextendingselection:)](https://developer.apple.com/documentation/appkit/nsruleeditor/selectrowindexes(_:byextendingselection:))

# selectRowIndexes(\_:byExtendingSelection:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets in the receiver the indexes of rows that are selected.

## Declaration

```swift
func selectRowIndexes(_ indexes: IndexSet, byExtendingSelection extend: Bool)
```

## Parameters

- `indexes`: The indexes of rows in the receiver to select.

  > **Important**

  >  Raises an `NSRangeException` if any index in `rowIndexes` is less than `0` or greater than or equal to the number of rows.
- `extend`: If [false](https://developer.apple.com/documentation/swift/false), the selected rows are specified by `indexes`. If [true](https://developer.apple.com/documentation/swift/true), the rows indicated by `indexes` are added to the collection of already selected rows, providing multiple selection.

## See Also

### Working with the Selection

- [selectedRowIndexes](selectedrowindexes.md): The indexes of the rule editor’s selected rows.

# selectRowIndexes:byExtendingSelection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets in the receiver the indexes of rows that are selected.

## Declaration

```objectivec
- (void) selectRowIndexes:(NSIndexSet *) indexes byExtendingSelection:(BOOL) extend;
```

## Parameters

- `indexes`: The indexes of rows in the receiver to select.

  > **Important**

  >  Raises an `NSRangeException` if any index in `rowIndexes` is less than `0` or greater than or equal to the number of rows.
- `extend`: If [false](https://developer.apple.com/documentation/swift/false), the selected rows are specified by `indexes`. If [true](https://developer.apple.com/documentation/swift/true), the rows indicated by `indexes` are added to the collection of already selected rows, providing multiple selection.

## See Also

### Working with the Selection

- [selectedRowIndexes](selectedrowindexes.md): The indexes of the rule editor’s selected rows.
