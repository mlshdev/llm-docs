> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappclipinvocationlocalizationinlinecreate](https://developer.apple.com/documentation/appstoreconnectapi/betaappclipinvocationlocalizationinlinecreate)

# BetaAppClipInvocationLocalizationInlineCreate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

An inline object for specifying a localized title for a beta App Clip invocation within a parent create or update request.

## Declaration

```
object BetaAppClipInvocationLocalizationInlineCreate
```

## Properties

- `attributes` — `BetaAppClipInvocationLocalizationInlineCreate.Attributes` (required): The attributes that describe the Beta App Clip Invocation Localization Inline Creates resource.
- `id` — `string`: The opaque resource ID that uniquely identifies a Beta App Clip Invocation Localization Inline Create resource.
- `relationships` — `BetaAppClipInvocationLocalizationInlineCreate.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaAppClipInvocationLocalizations`

## Topics

### Objects

- [BetaAppClipInvocationLocalizationInlineCreate.Attributes](betaappclipinvocationlocalizationinlinecreate/attributes-data.dictionary.md): The attributes that describe a Beta App Clip Invocation Localization Inline Creates resource.
- [BetaAppClipInvocationLocalizationInlineCreate.Relationships](betaappclipinvocationlocalizationinlinecreate/relationships-data.dictionary.md): The relationships to other resources that you can set when you create a new Beta App Clip Invocation Localization Inline Creates resource.

## See Also

### Objects

- [BetaAppClipInvocationCreateRequest.Data](betaappclipinvocationcreaterequest/data-data.dictionary.md): The data element of the request body.
