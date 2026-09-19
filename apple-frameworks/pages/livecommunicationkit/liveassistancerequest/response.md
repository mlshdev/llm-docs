> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistancerequest/response

# LiveAssistanceRequest.Response

**Framework:** LiveCommunicationKit  
**Kind:** Enumeration  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

A response from the extension to a live assistance request.

## Declaration

```swift
enum Response
```

<a id="overview"></a>

## Overview

You return this type from your implementations of [prepareAssistanceRequest(\_:)](../liveassistanceextension/prepareassistancerequest%28__%29.md) and [resumeRequest(\_:)](../liveassistanceextension/resumerequest%28__%29.md) to express how the request should continue. Both cases are outcomes that indicate the request should continue. If the request can’t continue, your implementations of the protocol methods throws [LiveAssistanceRequestError](../liveassistancerequesterror.md) instead of returning a response.

> **Note**

>  This enumeration is not `frozen`. Code that switches over a `Response` must include an `@unknown default` block.

## Topics

### Working with responses

- [LiveAssistanceRequest.Response.proceed](response/proceed.md): A response that indicates the extension successfully handled the request and setting up live assistance can proceed.
- [LiveAssistanceRequest.Response.requiresUserInput(reason:)](response/requiresuserinput%28reason_%29.md): A response that indicates the extension needs to complete a task in the container app before the request can proceed.
- [LiveAssistanceLaunchReason](../liveassistancelaunchreason.md): A type that indicates why the live assistance extension needs to launch its container app.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
