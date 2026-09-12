> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/allowsemptyselection](https://developer.apple.com/documentation/appkit/nsbrowser/allowsemptyselection)

# allowsEmptySelection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether there can be nothing selected.

## Declaration

```swift
var allowsEmptySelection: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the browser allows the selection to be empty.

## See Also

### Managing Selection Behavior

- [allowsBranchSelection](allowsbranchselection.md): A Boolean that indicates whether the user can select branch items.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean that indicates whether the user can select multiple items.
- [selectedRowIndexes(inColumn:)](selectedrowindexes%28incolumn_%29.md): Provides the indexes of the selected rows in a given column of the browser.
- [selectRowIndexes(\_:inColumn:)](selectrowindexes%28__incolumn_%29.md): Specifies the selected rows in a given column of the browser.
- [allowsTypeSelect](allowstypeselect.md): A Boolean that indicates whether the browser allows keystroke-based selection (type select).

# allowsEmptySelection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether there can be nothing selected.

## Declaration

```objectivec
@property BOOL allowsEmptySelection;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the browser allows the selection to be empty.

## See Also

### Managing Selection Behavior

- [allowsBranchSelection](allowsbranchselection.md): A Boolean that indicates whether the user can select branch items.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean that indicates whether the user can select multiple items.
- [selectedRowIndexesInColumn:](selectedrowindexes%28incolumn_%29.md): Provides the indexes of the selected rows in a given column of the browser.
- [selectRowIndexes:inColumn:](selectrowindexes%28__incolumn_%29.md): Specifies the selected rows in a given column of the browser.
- [allowsTypeSelect](allowstypeselect.md): A Boolean that indicates whether the browser allows keystroke-based selection (type select).
