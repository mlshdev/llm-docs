> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistanceextension

# LiveAssistanceExtension

**Framework:** LiveCommunicationKit  
**Kind:** Protocol  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

The protocol you extend to provide live assistance services.

## Declaration

```swift
@MainActor protocol LiveAssistanceExtension : AppExtension
```

<a id="overview"></a>

## Overview

To provide interpreter, captioning, or other services that work with FaceTime calls, create a container app that uses the [LiveAssistance](liveassistance.md) APIs, as well as an app extension that conforms to this protocol.

The extension performs most of the work involved in joining an assistance provider to a FaceTime call. When a person on a call chooses your app to provide assistance, the framework launches the extension and calls the [prepareAssistanceRequest(\_:)](liveassistanceextension/prepareassistancerequest%28__%29.md) method. If your extension determines it has everything it needs — the person is signed in and has provided all needed information — it can retrieve a URL from the framework that the service provider uses to join the call. If the extension needs more information, it can return [LiveAssistanceRequest.Response.requiresUserInput(reason:)](liveassistancerequest/response/requiresuserinput%28reason_%29.md), which launches the container app to perform any remaining setup. When the container app is ready for the request to continue, it calls [returnToCall(requestID:)](liveassistance/returntocall%28requestid_%29.md), which results in a call to the extension’s [resumeRequest(\_:)](liveassistanceextension/resumerequest%28__%29.md) method.

Each invocation of your extension runs in a fresh process context. This means you can’t rely on instance state persisting across calls to [prepareAssistanceRequest(\_:)](liveassistanceextension/prepareassistancerequest%28__%29.md) and [resumeRequest(\_:)](liveassistanceextension/resumerequest%28__%29.md), since the framework may have killed the extension and relaunched it in the interim. Instead, persist cross-invocation state in the keychain or App Group defaults.

If the extension process crashes mid-invocation, the request fails immediately. The framework doesn’t re-invoke the handler in this scenario.

## Topics

### Handling a new request

- [prepareAssistanceRequest(\_:)](liveassistanceextension/prepareassistancerequest%28__%29.md): Prepares to handle a fresh assistance request, in response to a call from the framework.

### Resuming a request

- [resumeRequest(\_:)](liveassistanceextension/resumerequest%28__%29.md): Resumes an assistance request, in response to a call from the framework.

### Working with supporting types

- [LiveAssistanceRequest](liveassistancerequest.md): A pending interpreter request, sent from the framework to the extension.
- [LiveAssistanceRequestError](liveassistancerequesterror.md): An error thrown by a live assistance extension when handling a request.
- [LiveAssistanceExtensionConfiguration](liveassistanceextensionconfiguration.md): An interface type required to conform to the ExtensionFoundation framework protocols.

## Relationships

### Inherits From

- [AppExtension](../extensionfoundation/appextension.md)

## See Also

### Conversation assistance

- [LiveAssistance](liveassistance.md): A namespace to collect APIs for use by container apps that provide live assistance services.
