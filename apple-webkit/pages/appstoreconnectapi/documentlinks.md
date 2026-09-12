> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/documentlinks](https://developer.apple.com/documentation/appstoreconnectapi/documentlinks)

# DocumentLinks

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

Self-links to documents that can contain information for one or more resources.

## Declaration

```
object DocumentLinks
```

## Properties

- `self` — `uri-reference` (required): The link that produced the current document.

<a id="Discussion"></a>

## Discussion

All the response data constitutes a *document*.

## See Also

### Objects

- [PagedDocumentLinks](pageddocumentlinks.md): Links related to the response document, including paging links.
- [PagingInformation](paginginformation.md): Paging information for data responses.
- [ResourceLinks](resourcelinks.md): Self-links to requested resources.
- [RelationshipLinks](relationshiplinks.md): Links related to the response document, including self links.
