> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/pageddocumentlinks](https://developer.apple.com/documentation/appstoreconnectapi/pageddocumentlinks)

# PagedDocumentLinks

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

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
- [ResourceLinks](resourcelinks.md): Self-links to requested resources.
- [DocumentLinks](documentlinks.md): Self-links to documents that can contain information for one or more resources.
- [RelationshipLinks](relationshiplinks.md): Links related to the response document, including self links.
