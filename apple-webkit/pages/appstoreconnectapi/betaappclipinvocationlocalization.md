> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappclipinvocationlocalization](https://developer.apple.com/documentation/appstoreconnectapi/betaappclipinvocationlocalization)

# BetaAppClipInvocationLocalization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The localized title displayed to beta testers for a specific App Clip invocation.

## Declaration

```
object BetaAppClipInvocationLocalization
```

## Properties

- `attributes` — `BetaAppClipInvocationLocalization.Attributes`: The attributes that describe the Beta App Clip Invocation Localizations resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies a Beta App Clip Invocation Localization.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaAppClipInvocationLocalizations`

## Topics

### Objects

- [BetaAppClipInvocationLocalization.Attributes](betaappclipinvocationlocalization/attributes-data.dictionary.md): The attributes that describe a Beta App Clip Invocation Localizations resource.

## See Also

### Objects

- [BetaAppClipInvocationLocalizationCreateRequest](betaappclipinvocationlocalizationcreaterequest.md): The request body you use to create a Beta App Clip Localization.
- [BetaAppClipInvocationLocalizationUpdateRequest](betaappclipinvocationlocalizationupdaterequest.md): The request body you use to update localized text that appears on the App Clip card for testers.
- [BetaAppClipInvocationLocalizationResponse](betaappclipinvocationlocalizationresponse.md): A response containing a single localized title for a beta App Clip invocation.
