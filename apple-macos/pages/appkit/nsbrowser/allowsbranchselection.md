> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/allowsbranchselection](https://developer.apple.com/documentation/appkit/nsbrowser/allowsbranchselection)

# allowsBranchSelection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the user can select branch items.

## Declaration

```swift
var allowsBranchSelection: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the user can select branch items when multiple selection is enabled.

## See Also

### Managing Selection Behavior

- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether there can be nothing selected.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean that indicates whether the user can select multiple items.
- [selectedRowIndexes(inColumn:)](selectedrowindexes%28incolumn_%29.md): Provides the indexes of the selected rows in a given column of the browser.
- [selectRowIndexes(\_:inColumn:)](selectrowindexes%28__incolumn_%29.md): Specifies the selected rows in a given column of the browser.
- [allowsTypeSelect](allowstypeselect.md): A Boolean that indicates whether the browser allows keystroke-based selection (type select).

# allowsBranchSelection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the user can select branch items.

## Declaration

```objectivec
@property BOOL allowsBranchSelection;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the user can select branch items when multiple selection is enabled.

## See Also

### Managing Selection Behavior

- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether there can be nothing selected.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean that indicates whether the user can select multiple items.
- [selectedRowIndexesInColumn:](selectedrowindexes%28incolumn_%29.md): Provides the indexes of the selected rows in a given column of the browser.
- [selectRowIndexes:inColumn:](selectrowindexes%28__incolumn_%29.md): Specifies the selected rows in a given column of the browser.
- [allowsTypeSelect](allowstypeselect.md): A Boolean that indicates whether the browser allows keystroke-based selection (type select).
