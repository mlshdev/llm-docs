> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappclipinvocation](https://developer.apple.com/documentation/appstoreconnectapi/betaappclipinvocation)

# BetaAppClipInvocation

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

A TestFlight URL scheme invocation that allows beta testers to launch an App Clip during testing.

## Declaration

```
object BetaAppClipInvocation
```

## Properties

- `attributes` — `BetaAppClipInvocation.Attributes`: The attributes that describe the Beta App Clip Invocations resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies a Beta App Clip Invocations resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `BetaAppClipInvocation.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaAppClipInvocations`

## Topics

### Objects

- [BetaAppClipInvocation.Attributes](betaappclipinvocation/attributes-data.dictionary.md): The attributes that describe a Beta App Clip Invocations resource.
- [BetaAppClipInvocation.Relationships](betaappclipinvocation/relationships-data.dictionary.md): The relationships of the Beta App Clip Invocations resource you included in the request and those on which you can operate.

## See Also

### Objects

- [BetaAppClipInvocationResponse](betaappclipinvocationresponse.md): A response containing a single TestFlight App Clip invocation URL.
- [BetaAppClipInvocationCreateRequest](betaappclipinvocationcreaterequest.md): The request body you use to create an App Clip invocation for testers.
- [BetaAppClipInvocationUpdateRequest](betaappclipinvocationupdaterequest.md): The request body you use to update a Beta App Clip Invocation.
