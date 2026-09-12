> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappclipinvocationlocalizationresponse](https://developer.apple.com/documentation/appstoreconnectapi/betaappclipinvocationlocalizationresponse)

# BetaAppClipInvocationLocalizationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

A response containing a single localized title for a beta App Clip invocation.

## Declaration

```
object BetaAppClipInvocationLocalizationResponse
```

## Properties

- `data` — `BetaAppClipInvocationLocalization` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Objects

- [BetaAppClipInvocationLocalization](betaappclipinvocationlocalization.md): The localized title displayed to beta testers for a specific App Clip invocation.
- [BetaAppClipInvocationLocalizationCreateRequest](betaappclipinvocationlocalizationcreaterequest.md): The request body you use to create a Beta App Clip Localization.
- [BetaAppClipInvocationLocalizationUpdateRequest](betaappclipinvocationlocalizationupdaterequest.md): The request body you use to update localized text that appears on the App Clip card for testers.
