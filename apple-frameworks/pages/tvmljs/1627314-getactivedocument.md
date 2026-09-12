> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/1627314-getactivedocument](https://developer.apple.com/documentation/tvmljs/1627314-getactivedocument)

# getActiveDocument

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Function  
**Availability:** tvOS 9.0+

Retrieves the currently active document.

## Declaration

```
Document getActiveDocument();
```

<a id="return_value"></a>

## Return Value

The currently active document.

<a id="discussion"></a>

## Discussion

The currently active document is the document that the user is interacting with. It can be the document on top of the navigation stack or a modally presented document. If the a menu bar document is the top most document, this function returns the document that is selected in the Menu Bar.

## See Also

### Manipulating the Document

- [UUID](1627409-uuid.md): Generates a unique UUID.
- [canOpenURL](2123042-canopenurl.md): Determines if a deep-link to another app can be opened.
- [openURL](1627399-openurl.md): Opens a deep link into another app.
