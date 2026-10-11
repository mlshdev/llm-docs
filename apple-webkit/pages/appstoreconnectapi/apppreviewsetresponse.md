> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/apppreviewsetresponse

# AppPreviewSetResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+ (deprecated in 4.5)

The response body for endpoints that create or read a set of app preview videos for a display size.

> This object is deprecated. Use [AppAssetLibraryPlacementResponse](appassetlibraryplacementresponse.md) instead.

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

- [AppPreviewSet](apppreviewset.md): Deprecated. The data structure that represent an App Preview Sets resource.
- [AppPreviewSetCreateRequest](apppreviewsetcreaterequest.md): Deprecated. The request body you use to create an App Preview Set.
- [AppPreviewSetsResponse](apppreviewsetsresponse.md): Deprecated. The response body for endpoints that list app preview sets for an App Store version localization.
- [AppPreviewSetAppPreviewsLinkagesRequest](apppreviewsetapppreviewslinkagesrequest.md): Deprecated. A request body you use to reorder the app previews in a preview set.
- [AppPreviewSetAppPreviewsLinkagesResponse](apppreviewsetapppreviewslinkagesresponse.md): Deprecated. A response body that contains a list of related resource IDs.
