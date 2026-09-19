> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistanceextension/prepareassistancerequest(_:)

# prepareAssistanceRequest(\_:)

**Framework:** LiveCommunicationKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

Prepares to handle a fresh assistance request, in response to a call from the framework.

## Declaration

```swift
@MainActor func prepareAssistanceRequest(_ request: LiveAssistanceRequest) async throws -> LiveAssistanceRequest.Response
```

<a id="Discussion"></a>

## Discussion

Implement this method by performing any necessarily setup and eligibility checks. When finished, do one of the following:

- If the request can proceed, forward `request.url` to your backend, and return [LiveAssistanceRequest.Response.proceed](../liveassistancerequest/response/proceed.md). In this scenario, this is the only method your extension handles, because the framework doesn’t need to call [resumeRequest(\_:)](resumerequest%28__%29.md).
- If the request requires logging in or other interaction from the person using the app, return [LiveAssistanceRequest.Response.requiresUserInput(reason:)](../liveassistancerequest/response/requiresuserinput%28reason_%29.md) to transfer control to your container app.
- If the request can’t proceed, throw a [LiveAssistanceRequestError](../liveassistancerequesterror.md) to end the request.
