> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeaturesessionhandler

# AccessoryFeatureSessionHandler

**Framework:** Accessory Transport Extension  
**Kind:** Protocol  
**Availability:** iOS 27.3+ beta

A protocol that receives events from a data provider extension’s feature session.

## Declaration

```swift
protocol AccessoryFeatureSessionHandler<Session> : Sendable
```

<a id="overview"></a>

## Overview

Conform to this protocol in your data provider extension to respond to the [AccessoryFeatureSession](accessoryfeaturesession.md) life cycle and incoming data. The system creates an instance of your type from the handler factory closure you provide when you declare the feature. Pass the closure to [init(\_:)](accessoryworker/init%28__%29.md) once for each session that starts.

A handler that serves one feature can’t serve another because each feature pins the `Session` associated type through its own `Handler` type alias (for example, [AccessoryWorker.Handler](accessoryworker/handler.md)).

Implement [sessionStarted(\_:)](accessoryfeaturesessionhandler/sessionstarted%28__%29.md) to hold the session weakly, and implement [dataReceived(\_:)](accessoryfeaturesessionhandler/datareceived%28__%29.md) to process data that the transport extension sends.

## Topics

### Handling the session life cycle

- [sessionStarted(\_:)](accessoryfeaturesessionhandler/sessionstarted%28__%29.md): Beta. Notifies the handler when its feature session starts.
- [sessionInvalidated(error:)](accessoryfeaturesessionhandler/sessioninvalidated%28error_%29.md): Beta. Notifies the handler when its feature session ends.

### Receiving data

- [dataReceived(\_:)](accessoryfeaturesessionhandler/datareceived%28__%29.md): Beta. Handles data that the transport extension sends.

### Associated Types

- [Session](accessoryfeaturesessionhandler/session.md): Beta. A session type that the handler serves.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing feature sessions

- [AccessoryFeatureSession](accessoryfeaturesession.md): A protocol that represents the session’s data provider.
- [AccessoryFeatureRuntimeSession](accessoryfeatureruntimesession.md): Beta. A protocol that represents a feature session’s transport extension.
- [AccessoryFeatureRuntimeSessionHandler](accessoryfeatureruntimesessionhandler.md): Beta. A protocol that receives events from a transport extension’s feature session.
