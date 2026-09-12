> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/menubardocument/1627405-getdocument](https://developer.apple.com/documentation/tvmljs/menubardocument/1627405-getdocument)

# getDocument

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Retrieves the document associated with the specified menu item.

## Declaration

```
Document getDocument(
    in Element menuItem
);
```

## Parameters

- `menuItem`: The menu item currently in focus.

<a id="return_value"></a>

## Return Value

The TVML page associated with the selected menu item.

## See Also

### Setting and Retrieving Menu Item Documents

- [getSelectedItem](1657224-getselecteditem.md): Retrieves the menu item in the menu bar that is currently in focus.
- [setDocument](1627374-setdocument.md): Associates a document with a menu item.
- [setSelectedItem](1627427-setselecteditem.md): Sets the focus in a menu bar to the specified menu item.
