> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/apptag](https://developer.apple.com/documentation/appstoreconnectapi/apptag)

# AppTag

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.1+

A label used to categorize an app for internal organization or to control which App Store territories feature it.

## Declaration

```
object AppTag
```

## Properties

- `attributes` — `AppTag.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppTag.Relationships`:
- `type` — `string` (required): **Allowed values:** `appTags`

## Topics

### Dictionaries

- [AppTag.Attributes](apptag/attributes-data.dictionary.md): Attributes that describe an app tag resource.
- [AppTag.Relationships](apptag/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppAppTagsLinkagesResponse](appapptagslinkagesresponse.md): A response containing the resource identifiers of tags associated with an app.
- [AppTagResponse](apptagresponse.md): A response containing a single app tag.
- [AppTagsResponse](apptagsresponse.md): A response containing a list of tags associated with apps.
- [AppTagTerritoriesLinkagesResponse](apptagterritorieslinkagesresponse.md): A response containing the resource identifiers of territories associated with an app tag.
- [AppTagUpdateRequest](apptagupdaterequest.md): The request body you use to update an app tag update request.
