> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/enduserlicenseagreementupdaterequest/data-data.dictionary

# EndUserLicenseAgreementUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data element of the request body.

## Declaration

```
object EndUserLicenseAgreementUpdateRequest.Data
```

## Properties

- `attributes` — `EndUserLicenseAgreementUpdateRequest.Data.Attributes`:
- `id` — `string` (required):
- `relationships` — `EndUserLicenseAgreementUpdateRequest.Data.Relationships`:
- `type` — `string` (required): **Allowed values:** `endUserLicenseAgreements`

## Topics

### Objects

- [EndUserLicenseAgreementUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes whose values you’re changing as part of the update request.
- [EndUserLicenseAgreementUpdateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The data and links that describe the relationship between the resources.
