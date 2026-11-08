> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorygpuworker/featuresession

# AccessoryGPUWorker.FeatureSession

**Framework:** Accessory Transport Extension  
**Kind:** Class  
**Availability:** iOS 27.3+ beta

A class that represents the session’s transport extension.

## Declaration

```swift
final class FeatureSession
```

<a id="overview"></a>

## Overview

When the session starts, the system starts a matching [AccessoryGPUWorker.Session](session.md) on the data provider. Create a session of this type with [makeFeatureSession(\_:)](../accessorytransportsession/makefeaturesession%28__%29.md), then call [activate()](../accessoryfeatureruntimesession/activate%28%29.md) to start it. Call [invalidate()](../accessoryfeatureruntimesession/invalidate%28%29.md) before you release an activated session.

## Topics

### Creating a handler

- [AccessoryGPUWorker.FeatureSession.Handler](featuresession/handler.md): Beta. A handler type for the session’s transport extension.

## Relationships

### Conforms To

- [AccessoryFeatureRuntimeSession](../accessoryfeatureruntimesession.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
