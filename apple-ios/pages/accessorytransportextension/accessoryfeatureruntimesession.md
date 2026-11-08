> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeatureruntimesession

# AccessoryFeatureRuntimeSession

**Framework:** Accessory Transport Extension  
**Kind:** Protocol  
**Availability:** iOS 27.3+ beta

A protocol that represents a feature session’s transport extension.

## Declaration

```swift
protocol AccessoryFeatureRuntimeSession : AnyObject, Sendable
```

<a id="overview"></a>

## Overview

A feature runtime session is a counterpart to the data provider’s [AccessoryFeatureSession](accessoryfeaturesession.md) for worker features ([AccessoryWorker](accessoryworker.md) and [AccessoryGPUWorker](accessorygpuworker.md)).

The framework supplies the types that conform to this protocol. Once your transport extension activates a session, the system delivers the session’s events to the [AccessoryFeatureRuntimeSessionHandler](accessoryfeatureruntimesessionhandler.md) you provide. Create a session with [makeFeatureSession(\_:)](accessorytransportsession/makefeaturesession%28__%29.md) and then call [activate()](accessoryfeatureruntimesession/activate%28%29.md) to start it.

## Topics

### Managing the session life cycle

- [activate()](accessoryfeatureruntimesession/activate%28%29.md): Beta. Registers the session and requests that the system start it.
- [invalidate()](accessoryfeatureruntimesession/invalidate%28%29.md): Beta. Unregisters the session.

### Sending data

- [send(data:)](accessoryfeatureruntimesession/send%28data_%29.md): Beta. Sends data to the data provider extension.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AccessoryGPUWorker.FeatureSession](accessorygpuworker/featuresession.md)
- [AccessoryWorker.FeatureSession](accessoryworker/featuresession.md)

## See Also

### Managing feature sessions

- [AccessoryFeatureSession](accessoryfeaturesession.md): A protocol that represents the session’s data provider.
- [AccessoryFeatureSessionHandler](accessoryfeaturesessionhandler.md): Beta. A protocol that receives events from a data provider extension’s feature session.
- [AccessoryFeatureRuntimeSessionHandler](accessoryfeatureruntimesessionhandler.md): Beta. A protocol that receives events from a transport extension’s feature session.
