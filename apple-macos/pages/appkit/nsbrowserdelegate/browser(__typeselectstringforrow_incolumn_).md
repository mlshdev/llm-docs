> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:typeselectstringforrow:incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:typeselectstringforrow:incolumn:))

# browser(\_:typeSelectStringForRow:inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sent to the delegate to get the keyboard-based selection (type select) string for the specified row and column.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, typeSelectStringForRow row: Int, inColumn column: Int) -> String?
```

## Parameters

- `browser`: The browser.
- `row`: The row index.
- `column`: The column index.

<a id="return-value"></a>

## Return Value

The keyboard-based selection string.

<a id="Discussion"></a>

## Discussion

Returning the empty string or `nil` (for example, when the cell does not contain text) specifies that the ```[``column```, ```row``]``` cell has no text to search.

If the delegate does not implement this method, all cells with text are searched, and the browser determines the keyboard-based selection text by sending [stringValue](../nscell/stringvalue.md) to the cell specified by `column` and `row`.

## See Also

### Managing Selection Behavior

- [browser(\_:shouldTypeSelectFor:withCurrentSearch:)](browser%28__shouldtypeselectfor_withcurrentsearch_%29.md): Sent to the delegate to determine whether keyboard-based selection (type select) for a given event and search string should proceed.
- [browser(\_:nextTypeSelectMatchFromRow:toRow:inColumn:for:)](browser%28__nexttypeselectmatchfromrow_torow_incolumn_for_%29.md): Sent to the delegate to customize a browser’s keyboard-based selection (type select) behavior.

# browser:typeSelectStringForRow:inColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sent to the delegate to get the keyboard-based selection (type select) string for the specified row and column.

## Declaration

```objectivec
- (NSString *) browser:(NSBrowser *) browser typeSelectStringForRow:(NSInteger) row inColumn:(NSInteger) column;
```

## Parameters

- `browser`: The browser.
- `row`: The row index.
- `column`: The column index.

<a id="return-value"></a>

## Return Value

The keyboard-based selection string.

<a id="Discussion"></a>

## Discussion

Returning the empty string or `nil` (for example, when the cell does not contain text) specifies that the ```[``column```, ```row``]``` cell has no text to search.

If the delegate does not implement this method, all cells with text are searched, and the browser determines the keyboard-based selection text by sending [stringValue](../nscell/stringvalue.md) to the cell specified by `column` and `row`.

## See Also

### Managing Selection Behavior

- [browser:shouldTypeSelectForEvent:withCurrentSearchString:](browser%28__shouldtypeselectfor_withcurrentsearch_%29.md): Sent to the delegate to determine whether keyboard-based selection (type select) for a given event and search string should proceed.
- [browser:nextTypeSelectMatchFromRow:toRow:inColumn:forString:](browser%28__nexttypeselectmatchfromrow_torow_incolumn_for_%29.md): Sent to the delegate to customize a browser’s keyboard-based selection (type select) behavior.
