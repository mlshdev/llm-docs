> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/apppreviewcreaterequest/data-data.dictionary

# AppPreviewCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data element of the request body.

## Declaration

```
object AppPreviewCreateRequest.Data
```

## Properties

- `attributes` — `AppPreviewCreateRequest.Data.Attributes` (required):
- `relationships` — `AppPreviewCreateRequest.Data.Relationships` (required):
- `type` — `string` (required): **Allowed values:** `appPreviews`

## Topics

### Objects

- [AppPreviewCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes that you set that describe the new resource.
- [AppPreviewCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
