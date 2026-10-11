> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/apppreviewset

# AppPreviewSet

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+ (deprecated in 4.5)

The data structure that represent an App Preview Sets resource.

> This object is deprecated. Use [AppAssetLibraryPlacement](appassetlibraryplacement.md) instead.

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

- [AppPreviewSetCreateRequest](apppreviewsetcreaterequest.md): Deprecated. The request body you use to create an App Preview Set.
- [AppPreviewSetResponse](apppreviewsetresponse.md): Deprecated. The response body for endpoints that create or read a set of app preview videos for a display size.
- [AppPreviewSetsResponse](apppreviewsetsresponse.md): Deprecated. The response body for endpoints that list app preview sets for an App Store version localization.
- [AppPreviewSetAppPreviewsLinkagesRequest](apppreviewsetapppreviewslinkagesrequest.md): Deprecated. A request body you use to reorder the app previews in a preview set.
- [AppPreviewSetAppPreviewsLinkagesResponse](apppreviewsetapppreviewslinkagesresponse.md): Deprecated. A response body that contains a list of related resource IDs.
