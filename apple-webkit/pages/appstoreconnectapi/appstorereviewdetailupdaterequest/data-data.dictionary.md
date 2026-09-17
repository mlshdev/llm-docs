> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appstorereviewdetailupdaterequest/data-data.dictionary

# AppStoreReviewDetailUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data element of the request body.

## Declaration

```
object AppStoreReviewDetailUpdateRequest.Data
```

## Properties

- `attributes` — `AppStoreReviewDetailUpdateRequest.Data.Attributes`:
- `id` — `string` (required):
- `type` — `string` (required): **Allowed values:** `appStoreReviewDetails`

## Topics

### Objects

- [AppStoreReviewDetailUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes whose values you’re changing as part of the update request.
