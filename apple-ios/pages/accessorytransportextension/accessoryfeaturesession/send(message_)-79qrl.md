> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeaturesession/send(message:)-79qrl

# send(message:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Sends a message to the transport extension.

## Declaration

```swift
func send(message: AccessoryMessage) async throws
```

## Parameters

- `message`: An accessory message to send.

<a id="discussion"></a>

## Discussion

Create the message with [AccessoryMessage](../accessorymessage.md). The system encrypts the message before delivering it to the transport extension.

> **Note**

> [AccessoryWorker.Session](../accessoryworker/session.md) and [AccessoryGPUWorker.Session](../accessorygpuworker/session.md) don’t support this method and throw [AccessoryTransportSession.Error.unsupported](../accessorytransportsession/error/unsupported.md); call [send(data:)](../accessoryworker/session/send%28data_%29.md) or [send(data:)](../accessorygpuworker/session/send%28data_%29.md) instead.
