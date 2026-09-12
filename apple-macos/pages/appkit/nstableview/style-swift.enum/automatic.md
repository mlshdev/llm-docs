> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/style-swift.enum/automatic](https://developer.apple.com/documentation/appkit/nstableview/style-swift.enum/automatic)

# NSTableView.Style.automatic (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 11.0+

The system resolves the table view style based on the table view hierarchy.

## Declaration

```swift
case automatic
```

<a id="Discussion"></a>

## Discussion

The system resolves the table view style in the following manner:

- If the table view is in a sidebar split-view controller item, [effectiveStyle](../effectivestyle.md) resolves to [NSTableView.Style.sourceList](sourcelist.md).
- If the table’s scroll view has a border, [effectiveStyle](../effectivestyle.md) resolves to [NSTableView.Style.fullWidth](fullwidth.md).
- Otherwise, [effectiveStyle](../effectivestyle.md) resolves to [NSTableView.Style.inset](inset.md). However, if the table needs extra space to fit its column cells, [effectiveStyle](../effectivestyle.md) resolves to [NSTableView.Style.fullWidth](fullwidth.md).

> **Note**

>  For backward compatibility reasons, when [selectionHighlightStyle](../selectionhighlightstyle-swift.property.md) is [NSTableView.SelectionHighlightStyle.sourceList](../selectionhighlightstyle-swift.enum/sourcelist.md), [style](../style-swift.property.md) also resolves to [NSTableView.Style.sourceList](sourcelist.md).

## See Also

### Table Styles

- [NSTableView.Style.fullWidth](fullwidth.md): The table view style resolves to a full-width style.
- [NSTableView.Style.inset](inset.md): The table view style resolves to an inset style.
- [NSTableView.Style.sourceList](sourcelist.md): The table view style resolves to a source-list style.
- [NSTableView.Style.plain](plain.md): The table view style resolves to a plain style.

# NSTableViewStyleAutomatic (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 11.0+

The system resolves the table view style based on the table view hierarchy.

## Declaration

```objectivec
NSTableViewStyleAutomatic
```

<a id="Discussion"></a>

## Discussion

The system resolves the table view style in the following manner:

- If the table view is in a sidebar split-view controller item, [effectiveStyle](../effectivestyle.md) resolves to [NSTableViewStyleSourceList](sourcelist.md).
- If the table’s scroll view has a border, [effectiveStyle](../effectivestyle.md) resolves to [NSTableViewStyleFullWidth](fullwidth.md).
- Otherwise, [effectiveStyle](../effectivestyle.md) resolves to [NSTableViewStyleInset](inset.md). However, if the table needs extra space to fit its column cells, [effectiveStyle](../effectivestyle.md) resolves to [NSTableViewStyleFullWidth](fullwidth.md).

> **Note**

>  For backward compatibility reasons, when [selectionHighlightStyle](../selectionhighlightstyle-swift.property.md) is [NSTableViewSelectionHighlightStyleSourceList](../selectionhighlightstyle-swift.enum/sourcelist.md), [style](../style-swift.property.md) also resolves to [NSTableViewStyleSourceList](sourcelist.md).

## See Also

### Table Styles

- [NSTableViewStyleFullWidth](fullwidth.md): The table view style resolves to a full-width style.
- [NSTableViewStyleInset](inset.md): The table view style resolves to an inset style.
- [NSTableViewStyleSourceList](sourcelist.md): The table view style resolves to a source-list style.
- [NSTableViewStylePlain](plain.md): The table view style resolves to a plain style.
