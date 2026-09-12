> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappclipinvocationresponse](https://developer.apple.com/documentation/appstoreconnectapi/betaappclipinvocationresponse)

# BetaAppClipInvocationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

A response containing a single TestFlight App Clip invocation URL.

## Declaration

```
object BetaAppClipInvocationResponse
```

## Properties

- `data` — `BetaAppClipInvocation` (required): The resource data.
- `included` — `[BetaAppClipInvocationLocalization]`: The requested relationship data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Objects

- [BetaAppClipInvocation](betaappclipinvocation.md): A TestFlight URL scheme invocation that allows beta testers to launch an App Clip during testing.
- [BetaAppClipInvocationCreateRequest](betaappclipinvocationcreaterequest.md): The request body you use to create an App Clip invocation for testers.
- [BetaAppClipInvocationUpdateRequest](betaappclipinvocationupdaterequest.md): The request body you use to update a Beta App Clip Invocation.
