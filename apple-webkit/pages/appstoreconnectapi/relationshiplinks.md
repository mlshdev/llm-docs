> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/relationshiplinks](https://developer.apple.com/documentation/appstoreconnectapi/relationshiplinks)

# RelationshipLinks

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

Links related to the response document, including self links.

## Declaration

```
object RelationshipLinks
```

## Properties

- `related` — `uri-reference`: The link to the related documents.
- `self` — `uri-reference`: The link that produced the current document.

## See Also

### Objects

- [PagedDocumentLinks](pageddocumentlinks.md): Links related to the response document, including paging links.
- [PagingInformation](paginginformation.md): Paging information for data responses.
- [ResourceLinks](resourcelinks.md): Self-links to requested resources.
- [DocumentLinks](documentlinks.md): Self-links to documents that can contain information for one or more resources.
