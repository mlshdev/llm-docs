> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/2123042-canopenurl](https://developer.apple.com/documentation/tvmljs/2123042-canopenurl)

# canOpenURL

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Function  
**Availability:** tvOS 10.0+

Determines if a deep-link to another app can be opened.

## Declaration

```
Boolean canOpenURL(
    in String url
);
```

## Parameters

- `url`: The deep-link URL being verified.

<a id="return_value"></a>

## Return Value

Returns `YES` if the app can be opened.

## See Also

### Manipulating the Document

- [UUID](1627409-uuid.md): Generates a unique UUID.
- [getActiveDocument](1627314-getactivedocument.md): Retrieves the currently active document.
- [openURL](1627399-openurl.md): Opens a deep link into another app.
