> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappclipinvocationlocalizationcreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/betaappclipinvocationlocalizationcreaterequest/data-data.dictionary)

# BetaAppClipInvocationLocalizationCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The data element of the request body.

## Declaration

```
object BetaAppClipInvocationLocalizationCreateRequest.Data
```

## Properties

- `attributes` — `BetaAppClipInvocationLocalizationCreateRequest.Data.Attributes` (required): The attributes that describes the request that creates a Beta App Clip Invocation Localizations resource.
- `relationships` — `BetaAppClipInvocationLocalizationCreateRequest.Data.Relationships` (required): The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaAppClipInvocationLocalizations`

## Topics

### Objects

- [BetaAppClipInvocationLocalizationCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes you set that describe the new Beta App Clip Invocation Localizations resource.
- [BetaAppClipInvocationLocalizationCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
