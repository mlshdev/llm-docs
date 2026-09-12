> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:shouldtypeselectfor:withcurrentsearch:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:shouldtypeselectfor:withcurrentsearch:))

# browser(\_:shouldTypeSelectFor:withCurrentSearch:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sent to the delegate to determine whether keyboard-based selection (type select) for a given event and search string should proceed.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, shouldTypeSelectFor event: NSEvent, withCurrentSearch searchString: String?) -> Bool
```

## Parameters

- `browser`: The browser.
- `event`: The keyboard event being processed.
- `searchString`: The keyboard-based selection string. It is `nil` when no keyboard-based selection has begun.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the selection; [false](https://developer.apple.com/documentation/swift/false) to disallow it.

## See Also

### Related Documentation

- [allowsTypeSelect](../nsbrowser/allowstypeselect.md): A Boolean that indicates whether the browser allows keystroke-based selection (type select).

### Managing Selection Behavior

- [browser(\_:typeSelectStringForRow:inColumn:)](browser%28__typeselectstringforrow_incolumn_%29.md): Sent to the delegate to get the keyboard-based selection (type select) string for the specified row and column.
- [browser(\_:nextTypeSelectMatchFromRow:toRow:inColumn:for:)](browser%28__nexttypeselectmatchfromrow_torow_incolumn_for_%29.md): Sent to the delegate to customize a browser’s keyboard-based selection (type select) behavior.

# browser:shouldTypeSelectForEvent:withCurrentSearchString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sent to the delegate to determine whether keyboard-based selection (type select) for a given event and search string should proceed.

## Declaration

```objectivec
- (BOOL) browser:(NSBrowser *) browser shouldTypeSelectForEvent:(NSEvent *) event withCurrentSearchString:(NSString *) searchString;
```

## Parameters

- `browser`: The browser.
- `event`: The keyboard event being processed.
- `searchString`: The keyboard-based selection string. It is `nil` when no keyboard-based selection has begun.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the selection; [false](https://developer.apple.com/documentation/swift/false) to disallow it.

## See Also

### Related Documentation

- [allowsTypeSelect](../nsbrowser/allowstypeselect.md): A Boolean that indicates whether the browser allows keystroke-based selection (type select).

### Managing Selection Behavior

- [browser:typeSelectStringForRow:inColumn:](browser%28__typeselectstringforrow_incolumn_%29.md): Sent to the delegate to get the keyboard-based selection (type select) string for the specified row and column.
- [browser:nextTypeSelectMatchFromRow:toRow:inColumn:forString:](browser%28__nexttypeselectmatchfromrow_torow_incolumn_for_%29.md): Sent to the delegate to customize a browser’s keyboard-based selection (type select) behavior.
