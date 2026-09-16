> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appstorereviewattachmentupdaterequest/data-data.dictionary

# AppStoreReviewAttachmentUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data element of the request body.

## Declaration

```
object AppStoreReviewAttachmentUpdateRequest.Data
```

## Properties

- `attributes` — `AppStoreReviewAttachmentUpdateRequest.Data.Attributes`:
- `id` — `string` (required):
- `type` — `string` (required): **Allowed values:** `appStoreReviewAttachments`

## Topics

### Objects

- [AppStoreReviewAttachmentUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes whose values you’re changing as part of the update request.
