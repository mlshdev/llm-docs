> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorygpuworker/featuresession/handler

# AccessoryGPUWorker.FeatureSession.Handler

**Framework:** Accessory Transport Extension  
**Kind:** Type Alias  
**Availability:** iOS 27.3+ beta

A handler type for the session’s transport extension.

## Declaration

```swift
typealias Handler = AccessoryFeatureRuntimeSessionHandler<AccessoryGPUWorker.FeatureSession>
```

<a id="discussion"></a>

## Discussion

Create a handler type that conforms to this type alias to receive events from an [AccessoryGPUWorker.FeatureSession](../featuresession.md). Because each feature declares its own `Handler` type alias, your transport extension needs a distinct handler type for each feature it supports: the compiler rejects a handler written for [AccessoryWorker.FeatureSession](../../accessoryworker/featuresession.md) if you pass it to the feature’s session, or any other feature’s session. Return an instance of your handler from the factory closure that you pass to [makeFeatureSession(\_:)](../../accessorytransportsession/makefeaturesession%28__%29.md).
