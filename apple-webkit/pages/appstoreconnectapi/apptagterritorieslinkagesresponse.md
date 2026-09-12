> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/apptagterritorieslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/apptagterritorieslinkagesresponse)

# AppTagTerritoriesLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.1+

A response containing the resource identifiers of territories associated with an app tag.

## Declaration

```
object AppTagTerritoriesLinkagesResponse
```

## Properties

- `data` — `[AppTagTerritoriesLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [AppTagTerritoriesLinkagesResponse.Data](apptagterritorieslinkagesresponse/data-data.dictionary.md): The resource linkage data identifying a territory associated with an app tag.

## See Also

### Objects

- [AppAppTagsLinkagesResponse](appapptagslinkagesresponse.md): A response containing the resource identifiers of tags associated with an app.
- [AppTag](apptag.md): A label used to categorize an app for internal organization or to control which App Store territories feature it.
- [AppTagResponse](apptagresponse.md): A response containing a single app tag.
- [AppTagsResponse](apptagsresponse.md): A response containing a list of tags associated with apps.
- [AppTagUpdateRequest](apptagupdaterequest.md): The request body you use to update an app tag update request.
