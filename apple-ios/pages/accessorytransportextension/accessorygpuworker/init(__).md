> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorygpuworker/init(_:)

# init(\_:)

**Framework:** Accessory Transport Extension  
**Kind:** Initializer  
**Availability:** iOS 27.3+ beta

Initializes a GPU worker feature with a handler factory.

## Declaration

```swift
init(_ handlerFactory: @escaping @Sendable () -> any AccessoryFeatureSessionHandler<AccessoryGPUWorker.Session>)
```

## Parameters

- `handlerFactory`: A closure that creates the handler for each session of the feature.

<a id="discussion"></a>

## Discussion

Create the instance inside your data provider extension’s `extensionPoint`. The system calls the closure to create a new handler for each session. For more information, see [Sending data to an accessory in the background](../sending-data-to-an-accessory-in-the-background.md).
