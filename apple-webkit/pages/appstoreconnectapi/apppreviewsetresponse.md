> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/apppreviewsetresponse](https://developer.apple.com/documentation/appstoreconnectapi/apppreviewsetresponse)

# AppPreviewSetResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The response body for endpoints that create or read a set of app preview videos for a display size.

## Declaration

```
object AppPreviewSetResponse
```

## Properties

- `data` — `AppPreviewSet` (required):
- `included` — `[*]`: **Allowed types:** `AppCustomProductPageLocalization`, `AppPreview`, `AppStoreVersionExperimentTreatmentLocalization`, `AppStoreVersionLocalization`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [AppPreviewSet](apppreviewset.md): The data structure that represent an App Preview Sets resource.
- [AppPreviewSetCreateRequest](apppreviewsetcreaterequest.md): The request body you use to create an App Preview Set.
- [AppPreviewSetsResponse](apppreviewsetsresponse.md): The response body for endpoints that list app preview sets for an App Store version localization.
- [AppPreviewSetAppPreviewsLinkagesRequest](apppreviewsetapppreviewslinkagesrequest.md): A request body you use to reorder the app previews in a preview set.
- [AppPreviewSetAppPreviewsLinkagesResponse](apppreviewsetapppreviewslinkagesresponse.md): A response body that contains a list of related resource IDs.
