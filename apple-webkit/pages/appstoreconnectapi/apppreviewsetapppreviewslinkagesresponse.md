> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/apppreviewsetapppreviewslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/apppreviewsetapppreviewslinkagesresponse)

# AppPreviewSetAppPreviewsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

A response body that contains a list of related resource IDs.

## Declaration

```
object AppPreviewSetAppPreviewsLinkagesResponse
```

## Properties

- `data` — `[AppPreviewSetAppPreviewsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Objects

- [AppPreviewSetAppPreviewsLinkagesResponse.Data](apppreviewsetapppreviewslinkagesresponse/data-data.dictionary.md): The data element of the response body.

## See Also

### Objects

- [AppPreviewSet](apppreviewset.md): The data structure that represent an App Preview Sets resource.
- [AppPreviewSetCreateRequest](apppreviewsetcreaterequest.md): The request body you use to create an App Preview Set.
- [AppPreviewSetResponse](apppreviewsetresponse.md): The response body for endpoints that create or read a set of app preview videos for a display size.
- [AppPreviewSetsResponse](apppreviewsetsresponse.md): The response body for endpoints that list app preview sets for an App Store version localization.
- [AppPreviewSetAppPreviewsLinkagesRequest](apppreviewsetapppreviewslinkagesrequest.md): A request body you use to reorder the app previews in a preview set.
