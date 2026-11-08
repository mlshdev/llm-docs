> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeaturesession

# AccessoryFeatureSession

**Framework:** Accessory Transport Extension  
**Kind:** Protocol  
**Availability:** iOS 26.5+

A protocol that represents the session’s data provider.

## Declaration

```swift
protocol AccessoryFeatureSession : Sendable
```

<a id="overview"></a>

## Overview

A feature session is an object that your data provider extension’s handler sends data through. The object is a counterpart to the transport extension’s [AccessoryFeatureRuntimeSession](accessoryfeatureruntimesession.md).

The system creates the session and passes it to your handler’s [sessionStarted(\_:)](accessoryfeaturesessionhandler/sessionstarted%28__%29.md) method when a session starts for a feature. Each feature has a conforming session type, for example [AccessoryWorker.Session](accessoryworker/session.md), and the framework supplies the sessions, so you don’t adopt this protocol yourself.

Hold the session weakly in your handler and use it to send data to the transport extension. For more information, see [Accessory features](accessory-features.md).

## Topics

### Accessing the session

- [accessory](accessoryfeaturesession/accessory.md): A reference to the accessory to which the session communicates.
- [sessionID](accessoryfeaturesession/sessionid.md): A unique identifier for a feature on the paired accessory.

### Sending data

- [send(message:)](accessoryfeaturesession/send%28message_%29.md): Sends a message to the transport extension.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AccessoryGPUWorker.Session](accessorygpuworker/session.md)
- [AccessoryWorker.Session](accessoryworker/session.md)

## See Also

### Managing feature sessions

- [AccessoryFeatureSessionHandler](accessoryfeaturesessionhandler.md): Beta. A protocol that receives events from a data provider extension’s feature session.
- [AccessoryFeatureRuntimeSession](accessoryfeatureruntimesession.md): Beta. A protocol that represents a feature session’s transport extension.
- [AccessoryFeatureRuntimeSessionHandler](accessoryfeatureruntimesessionhandler.md): Beta. A protocol that receives events from a transport extension’s feature session.
