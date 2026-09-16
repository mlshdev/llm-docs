> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appstoreversioncreaterequest/data-data.dictionary

# AppStoreVersionCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data element of the request body.

## Declaration

```
object AppStoreVersionCreateRequest.Data
```

## Properties

- `attributes` — `AppStoreVersionCreateRequest.Data.Attributes` (required):
- `relationships` — `AppStoreVersionCreateRequest.Data.Relationships` (required):
- `type` — `string` (required): **Allowed values:** `appStoreVersions`

## Topics

### Objects

- [AppStoreVersionCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes that you set that describe the new resource.
- [AppStoreVersionCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
