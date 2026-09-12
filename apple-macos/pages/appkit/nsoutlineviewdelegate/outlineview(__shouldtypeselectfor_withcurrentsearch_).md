> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldtypeselectfor:withcurrentsearch:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldtypeselectfor:withcurrentsearch:))

# outlineView(\_:shouldTypeSelectFor:withCurrentSearch:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Boolean value that indicates whether type select should proceed for a given event and search string.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, shouldTypeSelectFor event: NSEvent, withCurrentSearch searchString: String?) -> Bool
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `event`: The event that caused the message to be sent.
- `searchString`: The string for which searching is to proceed. The search string is `nil` if no type select has begun.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if type select should proceed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Generally, this method will be called from [keyDown(with:)](../nsresponder/keydown%28with_%29.md) and the event will be a key event.

## See Also

### Supporting Type Select

- [outlineView(\_:typeSelectStringFor:item:)](outlineview%28__typeselectstringfor_item_%29.md): Returns the string that is used for type selection for a given column and item.
- [outlineView(\_:nextTypeSelectMatchFromItem:toItem:for:)](outlineview%28__nexttypeselectmatchfromitem_toitem_for_%29.md): Returns the first item that matches the searchString from within the range of startItem to endItem

# outlineView:shouldTypeSelectForEvent:withCurrentSearchString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Boolean value that indicates whether type select should proceed for a given event and search string.

## Declaration

```objectivec
- (BOOL) outlineView:(NSOutlineView *) outlineView shouldTypeSelectForEvent:(NSEvent *) event withCurrentSearchString:(NSString *) searchString;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `event`: The event that caused the message to be sent.
- `searchString`: The string for which searching is to proceed. The search string is `nil` if no type select has begun.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if type select should proceed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Generally, this method will be called from [keyDown:](../nsresponder/keydown%28with_%29.md) and the event will be a key event.

## See Also

### Supporting Type Select

- [outlineView:typeSelectStringForTableColumn:item:](outlineview%28__typeselectstringfor_item_%29.md): Returns the string that is used for type selection for a given column and item.
- [outlineView:nextTypeSelectMatchFromItem:toItem:forString:](outlineview%28__nexttypeselectmatchfromitem_toitem_for_%29.md): Returns the first item that matches the searchString from within the range of startItem to endItem
