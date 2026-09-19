> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistanceextension/resumerequest(_:)

# resumeRequest(\_:)

**Framework:** LiveCommunicationKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

Resumes an assistance request, in response to a call from the framework.

## Declaration

```swift
@MainActor func resumeRequest(_ request: LiveAssistanceRequest) async throws -> LiveAssistanceRequest.Response
```

<a id="Discussion"></a>

## Discussion

The framework calls this method on your extension after your container app performs any required setup — such as completing a sign in — and calls [returnToCall(requestID:)](../liveassistance/returntocall%28requestid_%29.md).

In your implementation, do the following:

- Re-perform any needed setup and eligibility checks.
- Forward `request.url` to your backend.
- Return [LiveAssistanceRequest.Response.proceed](../liveassistancerequest/response/proceed.md). If the request can’t proceed, throw [LiveAssistanceRequestError](../liveassistancerequesterror.md) instead to end the request.

The framework only calls this method if you handled the original call to [prepareAssistanceRequest(\_:)](prepareassistancerequest%28__%29.md) by returning [LiveAssistanceRequest.Response.requiresUserInput(reason:)](../liveassistancerequest/response/requiresuserinput%28reason_%29.md). It doesn’t call this method if you originally returned [LiveAssistanceRequest.Response.proceed](../liveassistancerequest/response/proceed.md).
