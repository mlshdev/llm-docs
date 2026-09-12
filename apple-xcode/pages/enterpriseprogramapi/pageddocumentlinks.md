> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/pageddocumentlinks](https://developer.apple.com/documentation/enterpriseprogramapi/pageddocumentlinks)

# PagedDocumentLinks

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

Links related to the response document, including paging links.

## Declaration

```
object PagedDocumentLinks
```

## Properties

- `first` — `uri-reference`: The link to the first page of documents.
- `next` — `uri-reference`: The link to the next page of documents.
- `self` — `uri-reference` (required): The link that produced the current document.

<a id="Discussion"></a>

## Discussion

All the response data constitutes multiple *documents.*

## See Also

### Objects

- [PagingInformation](paginginformation.md): Paging information for data responses.
- [ResourceLinks](resourcelinks.md)
- [DocumentLinks](documentlinks.md)
