> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/betaappclipinvocationupdaterequest/data-data.dictionary

# BetaAppClipInvocationUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The data element of the request body.

## Declaration

```
object BetaAppClipInvocationUpdateRequest.Data
```

## Properties

- `attributes` — `BetaAppClipInvocationUpdateRequest.Data.Attributes`: The attributes that describe the request that updates a Beta App Clip Invocations resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the request.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaAppClipInvocations`

## Topics

### Objects

- [BetaAppClipInvocationUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes you set that describe the updated Beta App Clip Invocations resource.
