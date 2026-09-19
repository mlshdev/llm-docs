> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistancerequest

# LiveAssistanceRequest

**Framework:** LiveCommunicationKit  
**Kind:** Structure  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

A pending interpreter request, sent from the framework to the extension.

## Declaration

```swift
struct LiveAssistanceRequest
```

<a id="overview"></a>

## Overview

This is a value type sent by the framework to the request. All properties are read-only.

## Topics

### Working with request properties

- [id](liveassistancerequest/id.md): A unique identifier that relates the request to a conversation in the FaceTime framework.
- [url](liveassistancerequest/url.md): The FaceTime-generated URL for this request.

### Working with supporting types

- [LiveAssistanceRequest.Response](liveassistancerequest/response.md): A response from the extension to a live assistance request.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with supporting types

- [LiveAssistanceRequestError](liveassistancerequesterror.md): An error thrown by a live assistance extension when handling a request.
- [LiveAssistanceExtensionConfiguration](liveassistanceextensionconfiguration.md): An interface type required to conform to the ExtensionFoundation framework protocols.
