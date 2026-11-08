> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeatureruntimesessionhandler

# AccessoryFeatureRuntimeSessionHandler

**Framework:** Accessory Transport Extension  
**Kind:** Protocol  
**Availability:** iOS 27.3+ beta

A protocol that receives events from a transport extension’s feature session.

## Declaration

```swift
protocol AccessoryFeatureRuntimeSessionHandler<Session> : Sendable
```

<a id="overview"></a>

## Overview

Conform to this protocol in your transport extension to respond to the [AccessoryFeatureRuntimeSession](accessoryfeatureruntimesession.md) life cycle and incoming data. The system creates an instance of your type from the handler factory closure that you pass to [makeFeatureSession(\_:)](accessorytransportsession/makefeaturesession%28__%29.md).

A handler that serves one feature can’t serve another because each feature pins the `Session` associated type through its own `Handler` type alias (for example, [AccessoryWorker.FeatureSession.Handler](accessoryworker/featuresession/handler.md)).

Implement the only required method, [sessionStarted(\_:)](accessoryfeatureruntimesessionhandler/sessionstarted%28__%29.md), to send data.

## Topics

### Handling the session life cycle

- [sessionStarted(\_:)](accessoryfeatureruntimesessionhandler/sessionstarted%28__%29.md): Beta. Notifies the handler when its feature session starts.
- [sessionInvalidated(error:)](accessoryfeatureruntimesessionhandler/sessioninvalidated%28error_%29.md): Beta. Notifies the handler when its feature session ends.

### Receiving data

- [dataReceived(\_:)](accessoryfeatureruntimesessionhandler/datareceived%28__%29.md): Beta. Handles data that the data provider extension sends.

### Associated Types

- [Session](accessoryfeatureruntimesessionhandler/session.md): Beta. A session type that the handler serves.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing feature sessions

- [AccessoryFeatureSession](accessoryfeaturesession.md): A protocol that represents the session’s data provider.
- [AccessoryFeatureSessionHandler](accessoryfeaturesessionhandler.md): Beta. A protocol that receives events from a data provider extension’s feature session.
- [AccessoryFeatureRuntimeSession](accessoryfeatureruntimesession.md): Beta. A protocol that represents a feature session’s transport extension.
