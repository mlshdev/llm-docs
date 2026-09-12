> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/apptagresponse](https://developer.apple.com/documentation/appstoreconnectapi/apptagresponse)

# AppTagResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.1+

A response containing a single app tag.

## Declaration

```
object AppTagResponse
```

## Properties

- `data` — `AppTag` (required):
- `included` — `[Territory]`:
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [AppAppTagsLinkagesResponse](appapptagslinkagesresponse.md): A response containing the resource identifiers of tags associated with an app.
- [AppTag](apptag.md): A label used to categorize an app for internal organization or to control which App Store territories feature it.
- [AppTagsResponse](apptagsresponse.md): A response containing a list of tags associated with apps.
- [AppTagTerritoriesLinkagesResponse](apptagterritorieslinkagesresponse.md): A response containing the resource identifiers of territories associated with an app tag.
- [AppTagUpdateRequest](apptagupdaterequest.md): The request body you use to update an app tag update request.
