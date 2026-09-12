> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/menubardocument/1627374-setdocument](https://developer.apple.com/documentation/tvmljs/menubardocument/1627374-setdocument)

# setDocument

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Associates a document with a menu item.

## Declaration

```
void setDocument(
    in Document document, 
    in Object menuItem
);
```

## Parameters

- `document`: The TVML file to be associated with the menu item.
- `menuItem`: The selected menu item.

## See Also

### Setting and Retrieving Menu Item Documents

- [getDocument](1627405-getdocument.md): Retrieves the document associated with the specified menu item.
- [getSelectedItem](1657224-getselecteditem.md): Retrieves the menu item in the menu bar that is currently in focus.
- [setSelectedItem](1627427-setselecteditem.md): Sets the focus in a menu bar to the specified menu item.
