> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:typeselectstringfor:item:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:typeselectstringfor:item:))

# outlineView(\_:typeSelectStringFor:item:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the string that is used for type selection for a given column and item.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, typeSelectStringFor tableColumn: NSTableColumn?, item: Any) -> String?
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `tableColumn`: A table column in the outline view.
- `item`: An item in the outline view.

<a id="return-value"></a>

## Return Value

The string that is used for type selection. You may want to change what is searched for based on what is displayed, or simply return nil for that row and/or column to not be searched

<a id="Discussion"></a>

## Discussion

Implement this method if you want to control the string that is used for type selection. You may want to change what is searched for based on what is displayed, or simply return `nil` to specify that the given row and/or column should not be searched. By default, all cells with text in them are searched.

The default value when this delegate method is not implemented is:

```objc
[[outlineView preparedCellAtColumn:tableColumn row:[outlineView rowForItem:item]] stringValue]
```

and you can return this value from the delegate method if you wish.

## See Also

### Supporting Type Select

- [outlineView(\_:nextTypeSelectMatchFromItem:toItem:for:)](outlineview%28__nexttypeselectmatchfromitem_toitem_for_%29.md): Returns the first item that matches the searchString from within the range of startItem to endItem
- [outlineView(\_:shouldTypeSelectFor:withCurrentSearch:)](outlineview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Returns a Boolean value that indicates whether type select should proceed for a given event and search string.

# outlineView:typeSelectStringForTableColumn:item: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the string that is used for type selection for a given column and item.

## Declaration

```objectivec
- (NSString *) outlineView:(NSOutlineView *) outlineView typeSelectStringForTableColumn:(NSTableColumn *) tableColumn item:(id) item;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `tableColumn`: A table column in the outline view.
- `item`: An item in the outline view.

<a id="return-value"></a>

## Return Value

The string that is used for type selection. You may want to change what is searched for based on what is displayed, or simply return nil for that row and/or column to not be searched

<a id="Discussion"></a>

## Discussion

Implement this method if you want to control the string that is used for type selection. You may want to change what is searched for based on what is displayed, or simply return `nil` to specify that the given row and/or column should not be searched. By default, all cells with text in them are searched.

The default value when this delegate method is not implemented is:

```objc
[[outlineView preparedCellAtColumn:tableColumn row:[outlineView rowForItem:item]] stringValue]
```

and you can return this value from the delegate method if you wish.

## See Also

### Supporting Type Select

- [outlineView:nextTypeSelectMatchFromItem:toItem:forString:](outlineview%28__nexttypeselectmatchfromitem_toitem_for_%29.md): Returns the first item that matches the searchString from within the range of startItem to endItem
- [outlineView:shouldTypeSelectForEvent:withCurrentSearchString:](outlineview%28__shouldtypeselectfor_withcurrentsearch_%29.md): Returns a Boolean value that indicates whether type select should proceed for a given event and search string.
