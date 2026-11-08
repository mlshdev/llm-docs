> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorygpuworker/handler

# AccessoryGPUWorker.Handler

**Framework:** Accessory Transport Extension  
**Kind:** Type Alias  
**Availability:** iOS 27.3+ beta

A handler type for the session’s data provider.

## Declaration

```swift
typealias Handler = AccessoryFeatureSessionHandler<AccessoryGPUWorker.Session>
```

## Mentioned In

- [Sending data to an accessory in the background](../sending-data-to-an-accessory-in-the-background.md)

<a id="discussion"></a>

## Discussion

Conform your data provider extension’s handler to this type to receive events from an [AccessoryGPUWorker.Session](session.md). Because each feature uses its own `Handler` type alias, the compiler rejects a handler for this feature if you pass it to [AccessoryWorker](../accessoryworker.md) or another feature. Return an instance of your handler from the factory closure that you pass to [init(\_:)](init%28__%29.md).

## See Also

### Handling data-provider sessions

- [AccessoryGPUWorker.Session](session.md): Beta. A class that represents the data provider within a session.
