> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/allowsmultipleselection](https://developer.apple.com/documentation/appkit/nsbrowser/allowsmultipleselection)

# allowsMultipleSelection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the user can select multiple items.

## Declaration

```swift
var allowsMultipleSelection: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the browser allows the user to select multiple items at once.

## See Also

### Managing Selection Behavior

- [allowsBranchSelection](allowsbranchselection.md): A Boolean that indicates whether the user can select branch items.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether there can be nothing selected.
- [selectedRowIndexes(inColumn:)](selectedrowindexes%28incolumn_%29.md): Provides the indexes of the selected rows in a given column of the browser.
- [selectRowIndexes(\_:inColumn:)](selectrowindexes%28__incolumn_%29.md): Specifies the selected rows in a given column of the browser.
- [allowsTypeSelect](allowstypeselect.md): A Boolean that indicates whether the browser allows keystroke-based selection (type select).

# allowsMultipleSelection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the user can select multiple items.

## Declaration

```objectivec
@property BOOL allowsMultipleSelection;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the browser allows the user to select multiple items at once.

## See Also

### Managing Selection Behavior

- [allowsBranchSelection](allowsbranchselection.md): A Boolean that indicates whether the user can select branch items.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether there can be nothing selected.
- [selectedRowIndexesInColumn:](selectedrowindexes%28incolumn_%29.md): Provides the indexes of the selected rows in a given column of the browser.
- [selectRowIndexes:inColumn:](selectrowindexes%28__incolumn_%29.md): Specifies the selected rows in a given column of the browser.
- [allowsTypeSelect](allowstypeselect.md): A Boolean that indicates whether the browser allows keystroke-based selection (type select).
