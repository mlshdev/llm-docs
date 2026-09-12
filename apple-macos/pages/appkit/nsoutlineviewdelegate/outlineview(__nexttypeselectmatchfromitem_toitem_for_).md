> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:nexttypeselectmatchfromitem:toitem:for:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:nexttypeselectmatchfromitem:toitem:for:))

# outlineView(\_:nextTypeSelectMatchFromItem:toItem:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the first item that matches the searchString from within the range of startItem to endItem

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, nextTypeSelectMatchFromItem startItem: Any, toItem endItem: Any, for searchString: String) -> Any?
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `startItem`: The first item to search.
- `endItem`: The item before which to stop searching. It is possible for endItem to be less than startItem if the search will wrap.
- `searchString`: The string for which to search.

<a id="return-value"></a>

## Return Value

The first item—from within the range of `startItem` to `endItem`—that matches the `searchString`, or `nil` if there is no match.

<a id="Discussion"></a>

## Discussion

Implement this method if you want to control how type selection works.  You should include `startItem` as a possible match, but do not include `endItem`.

It is not necessary to implement this method in order to support type select.

## See Also

### Supporting Type Select

- [outlineView(\_:typeSelectStringFor:item:)](outlineview%28__typeselectstringfor_item_%29.md): Returns the string that is used for type selection for a given column and item.
- [outlineView(\_:shouldTypeSelectFor:withCurrentSearch:)](outlineview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Returns a Boolean value that indicates whether type select should proceed for a given event and search string.

# outlineView:nextTypeSelectMatchFromItem:toItem:forString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the first item that matches the searchString from within the range of startItem to endItem

## Declaration

```objectivec
- (id) outlineView:(NSOutlineView *) outlineView nextTypeSelectMatchFromItem:(id) startItem toItem:(id) endItem forString:(NSString *) searchString;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `startItem`: The first item to search.
- `endItem`: The item before which to stop searching. It is possible for endItem to be less than startItem if the search will wrap.
- `searchString`: The string for which to search.

<a id="return-value"></a>

## Return Value

The first item—from within the range of `startItem` to `endItem`—that matches the `searchString`, or `nil` if there is no match.

<a id="Discussion"></a>

## Discussion

Implement this method if you want to control how type selection works.  You should include `startItem` as a possible match, but do not include `endItem`.

It is not necessary to implement this method in order to support type select.

## See Also

### Supporting Type Select

- [outlineView:typeSelectStringForTableColumn:item:](outlineview%28__typeselectstringfor_item_%29.md): Returns the string that is used for type selection for a given column and item.
- [outlineView:shouldTypeSelectForEvent:withCurrentSearchString:](outlineview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Returns a Boolean value that indicates whether type select should proceed for a given event and search string.
