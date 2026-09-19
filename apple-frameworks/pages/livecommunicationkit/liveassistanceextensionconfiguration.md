> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistanceextensionconfiguration

# LiveAssistanceExtensionConfiguration

**Framework:** LiveCommunicationKit  
**Kind:** Protocol  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

An interface type required to conform to the ExtensionFoundation framework protocols.

## Declaration

```swift
@MainActor @preconcurrency protocol LiveAssistanceExtensionConfiguration : AppExtensionConfiguration
```

<a id="overview"></a>

## Overview

Your app doesn’t interact directly with this type.

## Relationships

### Inherits From

- [AppExtensionConfiguration](../extensionfoundation/appextensionconfiguration.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with supporting types

- [LiveAssistanceRequest](liveassistancerequest.md): A pending interpreter request, sent from the framework to the extension.
- [LiveAssistanceRequestError](liveassistancerequesterror.md): An error thrown by a live assistance extension when handling a request.
