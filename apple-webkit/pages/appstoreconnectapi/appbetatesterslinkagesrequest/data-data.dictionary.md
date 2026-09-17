> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appbetatesterslinkagesrequest/data-data.dictionary

# AppBetaTestersLinkagesRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The data element of the request body.

## Declaration

```
object AppBetaTestersLinkagesRequest.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaTesters`
