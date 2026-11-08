> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorygpuworker/session

# AccessoryGPUWorker.Session

**Framework:** Accessory Transport Extension  
**Kind:** Class  
**Availability:** iOS 27.3+ beta

A class that represents the data provider within a session.

## Declaration

```swift
final class Session
```

<a id="overview"></a>

## Overview

The system creates an instance of this class when the transport extension’s [AccessoryGPUWorker.FeatureSession](featuresession.md) starts, and passes it to your handler’s [sessionStarted(\_:)](../accessoryfeaturesessionhandler/sessionstarted%28__%29.md) method. Hold the session weakly in your handler, and call [send(data:)](session/send%28data_%29.md) to send data to the transport extension.

## Topics

### Sending data

- [send(data:)](session/send%28data_%29.md): Beta. Sends data to the transport extension within a session.
- [send(message:)](session/send%28message_%29.md): Beta. Sends a message to the transport extension.

## Relationships

### Conforms To

- [AccessoryFeatureSession](../accessoryfeaturesession.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling data-provider sessions

- [AccessoryGPUWorker.Handler](handler.md): Beta. A handler type for the session’s data provider.
