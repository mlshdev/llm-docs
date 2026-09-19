> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistancerequesterror

# LiveAssistanceRequestError

**Framework:** LiveCommunicationKit  
**Kind:** Enumeration  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

An error thrown by a live assistance extension when handling a request.

## Declaration

```swift
enum LiveAssistanceRequestError
```

<a id="overview"></a>

## Overview

Throw this error from your implementations of [prepareAssistanceRequest(\_:)](liveassistanceextension/prepareassistancerequest%28__%29.md) and [resumeRequest(\_:)](liveassistanceextension/resumerequest%28__%29.md) to end requests that you can’t service.

Throwing is terminal; the request ends immediately, although the person using FaceTime can initiate a new one.

If your container app can resolve the situation by requesting further input, don’t throw an error. Instead, return [LiveAssistanceRequest.Response.requiresUserInput(reason:)](liveassistancerequest/response/requiresuserinput%28reason_%29.md) to give the person a chance to sign in or otherwise provide the needed information.

> **Note**

>  This enumeration is not `frozen`. Code that switches over a `LiveAssistanceRequestError` must include an `@unknown default` block.

## Topics

### Working with errors

- [LiveAssistanceRequestError.cannotFulfill(message:)](liveassistancerequesterror/cannotfulfill%28message_%29.md): An error that indicates the extension can’t fulfill the request.
- [LiveAssistanceRequestError.unknown(message:)](liveassistancerequesterror/unknown%28message_%29.md): An error that indicates an unexpected failure prevented servicing the request.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with supporting types

- [LiveAssistanceRequest](liveassistancerequest.md): A pending interpreter request, sent from the framework to the extension.
- [LiveAssistanceExtensionConfiguration](liveassistanceextensionconfiguration.md): An interface type required to conform to the ExtensionFoundation framework protocols.
