> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:nexttypeselectmatchfromrow:torow:incolumn:for:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:nexttypeselectmatchfromrow:torow:incolumn:for:))

# browser(\_:nextTypeSelectMatchFromRow:toRow:inColumn:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sent to the delegate to customize a browser’s keyboard-based selection (type select) behavior.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, nextTypeSelectMatchFromRow startRow: Int, toRow endRow: Int, inColumn column: Int, for searchString: String?) -> Int
```

## Parameters

- `browser`: The browser.
- `startRow`: The beginning of the row set to search.
- `endRow`: The end of the row set to search. This value can be less than `startRowIndex` when the search wraps around to the beginning.
- `column`: The column containing the rows being searched.
- `searchString`: The keyboard-based selection string. It is `nil` when no keyboard-based selection has begun.

<a id="return-value"></a>

## Return Value

The index of the first row that matches `searchString` between `startRowIndex` and `endRowIndex` \- 1, or `-1` if there is no match.

## See Also

### Managing Selection Behavior

- [browser(\_:shouldTypeSelectFor:withCurrentSearch:)](browser%28__shouldtypeselectfor_withcurrentsearch_%29.md): Sent to the delegate to determine whether keyboard-based selection (type select) for a given event and search string should proceed.
- [browser(\_:typeSelectStringForRow:inColumn:)](browser%28__typeselectstringforrow_incolumn_%29.md): Sent to the delegate to get the keyboard-based selection (type select) string for the specified row and column.

# browser:nextTypeSelectMatchFromRow:toRow:inColumn:forString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sent to the delegate to customize a browser’s keyboard-based selection (type select) behavior.

## Declaration

```objectivec
- (NSInteger) browser:(NSBrowser *) browser nextTypeSelectMatchFromRow:(NSInteger) startRow toRow:(NSInteger) endRow inColumn:(NSInteger) column forString:(NSString *) searchString;
```

## Parameters

- `browser`: The browser.
- `startRow`: The beginning of the row set to search.
- `endRow`: The end of the row set to search. This value can be less than `startRowIndex` when the search wraps around to the beginning.
- `column`: The column containing the rows being searched.
- `searchString`: The keyboard-based selection string. It is `nil` when no keyboard-based selection has begun.

<a id="return-value"></a>

## Return Value

The index of the first row that matches `searchString` between `startRowIndex` and `endRowIndex` \- 1, or `-1` if there is no match.

## See Also

### Managing Selection Behavior

- [browser:shouldTypeSelectForEvent:withCurrentSearchString:](browser%28__shouldtypeselectfor_withcurrentsearch_%29.md): Sent to the delegate to determine whether keyboard-based selection (type select) for a given event and search string should proceed.
- [browser:typeSelectStringForRow:inColumn:](browser%28__typeselectstringforrow_incolumn_%29.md): Sent to the delegate to get the keyboard-based selection (type select) string for the specified row and column.
