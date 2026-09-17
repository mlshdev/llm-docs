> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/betaappreviewdetailupdaterequest/data-data.dictionary

# BetaAppReviewDetailUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The data element of the request body.

## Declaration

```
object BetaAppReviewDetailUpdateRequest.Data
```

## Properties

- `attributes` — `BetaAppReviewDetailUpdateRequest.Data.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaAppReviewDetails`

## Topics

### Objects

- [BetaAppReviewDetailUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes whose values you’re changing as part of the update request.
