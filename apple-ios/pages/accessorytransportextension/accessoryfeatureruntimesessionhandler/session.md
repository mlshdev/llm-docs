> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeatureruntimesessionhandler/session

# Session

**Framework:** Accessory Transport Extension  
**Kind:** Associated Type  
**Availability:** iOS 27.3+ beta

A session type that the handler serves.

## Declaration

```swift
associatedtype Session : AccessoryFeatureRuntimeSession
```

<a id="discussion"></a>

## Discussion

This associated type conforms to [AccessoryFeatureRuntimeSession](../accessoryfeatureruntimesession.md), and each feature pins it through that feature’s own `Handler` type alias, such as [AccessoryWorker.FeatureSession.Handler](../accessoryworker/featuresession/handler.md).
