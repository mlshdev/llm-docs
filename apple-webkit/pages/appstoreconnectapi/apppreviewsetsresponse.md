> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/apppreviewsetsresponse](https://developer.apple.com/documentation/appstoreconnectapi/apppreviewsetsresponse)

# AppPreviewSetsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The response body for endpoints that list app preview sets for an App Store version localization.

## Declaration

```
object AppPreviewSetsResponse
```

## Properties

- `data` — `[AppPreviewSet]` (required):
- `included` — `[*]`: **Allowed types:** `AppCustomProductPageLocalization`, `AppPreview`, `AppStoreVersionExperimentTreatmentLocalization`, `AppStoreVersionLocalization`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [AppPreviewSet](apppreviewset.md): The data structure that represent an App Preview Sets resource.
- [AppPreviewSetCreateRequest](apppreviewsetcreaterequest.md): The request body you use to create an App Preview Set.
- [AppPreviewSetResponse](apppreviewsetresponse.md): The response body for endpoints that create or read a set of app preview videos for a display size.
- [AppPreviewSetAppPreviewsLinkagesRequest](apppreviewsetapppreviewslinkagesrequest.md): A request body you use to reorder the app previews in a preview set.
- [AppPreviewSetAppPreviewsLinkagesResponse](apppreviewsetapppreviewslinkagesresponse.md): A response body that contains a list of related resource IDs.
