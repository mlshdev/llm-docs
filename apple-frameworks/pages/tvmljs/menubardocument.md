> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/menubardocument](https://developer.apple.com/documentation/tvmljs/menubardocument)

# MenuBarDocument

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Class  
**Availability:** tvOS 9.0+

An object used for setting and retrieving documents associated with a menu item.

## Declaration

```
interface MenuBarDocument
```

<a id="overview"></a>

## Overview

Use the `getFeature` function with the feature name `MenuBarDocument` to retrieve an instance of this class from the `menuBar` element; for example, `getFeature('MenuBarDocument')`.

## Topics

### Setting and Retrieving Menu Item Documents

- [getDocument](menubardocument/1627405-getdocument.md): Retrieves the document associated with the specified menu item.
- [getSelectedItem](menubardocument/1657224-getselecteditem.md): Retrieves the menu item in the menu bar that is currently in focus.
- [setDocument](menubardocument/1627374-setdocument.md): Associates a document with a menu item.
- [setSelectedItem](menubardocument/1627427-setselecteditem.md): Sets the focus in a menu bar to the specified menu item.

## See Also

### Element Access

- [Keyboard](keyboard.md): An object used to retrieve user input from search fields and text fields.
