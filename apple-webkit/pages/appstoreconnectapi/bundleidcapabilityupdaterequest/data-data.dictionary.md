> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/bundleidcapabilityupdaterequest/data-data.dictionary

# BundleIdCapabilityUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

The data element of the request body.

## Declaration

```
object BundleIdCapabilityUpdateRequest.Data
```

## Properties

- `attributes` — `BundleIdCapabilityUpdateRequest.Data.Attributes`:
- `id` — `string` (required):
- `type` — `string` (required): **Allowed values:** `bundleIdCapabilities`

## Topics

### Objects

- [BundleIdCapabilityUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes whose values you’re changing as part of the update request.
