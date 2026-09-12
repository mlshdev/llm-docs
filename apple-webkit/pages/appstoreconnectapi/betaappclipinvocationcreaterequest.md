> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappclipinvocationcreaterequest](https://developer.apple.com/documentation/appstoreconnectapi/betaappclipinvocationcreaterequest)

# BetaAppClipInvocationCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The request body you use to create an App Clip invocation for testers.

## Declaration

```
object BetaAppClipInvocationCreateRequest
```

## Properties

- `data` — `BetaAppClipInvocationCreateRequest.Data` (required): The resource data.
- `included` — `[BetaAppClipInvocationLocalizationInlineCreate]`: The relationship data to include in the response.

## Topics

### Objects

- [BetaAppClipInvocationLocalizationInlineCreate](betaappclipinvocationlocalizationinlinecreate.md): An inline object for specifying a localized title for a beta App Clip invocation within a parent create or update request.
- [BetaAppClipInvocationCreateRequest.Data](betaappclipinvocationcreaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects

- [BetaAppClipInvocation](betaappclipinvocation.md): A TestFlight URL scheme invocation that allows beta testers to launch an App Clip during testing.
- [BetaAppClipInvocationResponse](betaappclipinvocationresponse.md): A response containing a single TestFlight App Clip invocation URL.
- [BetaAppClipInvocationUpdateRequest](betaappclipinvocationupdaterequest.md): The request body you use to update a Beta App Clip Invocation.
