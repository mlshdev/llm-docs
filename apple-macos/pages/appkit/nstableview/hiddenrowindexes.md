> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/hiddenrowindexes](https://developer.apple.com/documentation/appkit/nstableview/hiddenrowindexes)

# hiddenRowIndexes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The indexes of all hidden table rows.

## Declaration

```swift
var hiddenRowIndexes: IndexSet { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an index set containing the indexes of any hidden table rows. Table rows may be hidden by invoking the [hideRows(at:withAnimation:)](hiderows%28at_withanimation_%29.md) method. Some drag-and-drop operations also result in hidden rows.

## See Also

### Hiding and Showing Table Rows

- [hideRows(at:withAnimation:)](hiderows%28at_withanimation_%29.md): Hides the specified table rows.
- [unhideRows(at:withAnimation:)](unhiderows%28at_withanimation_%29.md): Unhides the specified table rows.

# hiddenRowIndexes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The indexes of all hidden table rows.

## Declaration

```objectivec
@property (copy, readonly) NSIndexSet * hiddenRowIndexes;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an index set containing the indexes of any hidden table rows. Table rows may be hidden by invoking the [hideRowsAtIndexes:withAnimation:](hiderows%28at_withanimation_%29.md) method. Some drag-and-drop operations also result in hidden rows.

## See Also

### Hiding and Showing Table Rows

- [hideRowsAtIndexes:withAnimation:](hiderows%28at_withanimation_%29.md): Hides the specified table rows.
- [unhideRowsAtIndexes:withAnimation:](unhiderows%28at_withanimation_%29.md): Unhides the specified table rows.
