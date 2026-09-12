> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/apppreviewset](https://developer.apple.com/documentation/appstoreconnectapi/apppreviewset)

# AppPreviewSet

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data structure that represent an App Preview Sets resource.

## Declaration

```
object AppPreviewSet
```

## Properties

- `attributes` — `AppPreviewSet.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppPreviewSet.Relationships`:
- `type` — `string` (required): **Allowed values:** `appPreviewSets`

## Topics

### Objects

- [AppPreviewSet.Attributes](apppreviewset/attributes-data.dictionary.md): Attributes that describe an App Preview Sets resource.
- [AppPreviewSet.Relationships](apppreviewset/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppPreviewSetCreateRequest](apppreviewsetcreaterequest.md): The request body you use to create an App Preview Set.
- [AppPreviewSetResponse](apppreviewsetresponse.md): The response body for endpoints that create or read a set of app preview videos for a display size.
- [AppPreviewSetsResponse](apppreviewsetsresponse.md): The response body for endpoints that list app preview sets for an App Store version localization.
- [AppPreviewSetAppPreviewsLinkagesRequest](apppreviewsetapppreviewslinkagesrequest.md): A request body you use to reorder the app previews in a preview set.
- [AppPreviewSetAppPreviewsLinkagesResponse](apppreviewsetapppreviewslinkagesresponse.md): A response body that contains a list of related resource IDs.
