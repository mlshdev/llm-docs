> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/apppreviewsetapppreviewslinkagesrequest

# AppPreviewSetAppPreviewsLinkagesRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+ (deprecated in 4.5)

A request body you use to reorder the app previews in a preview set.

> This object is deprecated. Use [AppAssetLibraryPlacement](appassetlibraryplacement.md) instead.

## Declaration

```
object AppPreviewSetAppPreviewsLinkagesRequest
```

## Properties

- `data` — `[AppPreviewSetAppPreviewsLinkagesRequest.Data]` (required):

## Topics

### Objects

- [AppPreviewSetAppPreviewsLinkagesRequest.Data](apppreviewsetapppreviewslinkagesrequest/data-data.dictionary.md): Deprecated. The data element of the request body.

## See Also

### Objects

- [AppPreviewSet](apppreviewset.md): Deprecated. The data structure that represent an App Preview Sets resource.
- [AppPreviewSetCreateRequest](apppreviewsetcreaterequest.md): Deprecated. The request body you use to create an App Preview Set.
- [AppPreviewSetResponse](apppreviewsetresponse.md): Deprecated. The response body for endpoints that create or read a set of app preview videos for a display size.
- [AppPreviewSetsResponse](apppreviewsetsresponse.md): Deprecated. The response body for endpoints that list app preview sets for an App Store version localization.
- [AppPreviewSetAppPreviewsLinkagesResponse](apppreviewsetapppreviewslinkagesresponse.md): Deprecated. A response body that contains a list of related resource IDs.
