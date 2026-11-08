> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryworker/session/send(message:)

# send(message:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 27.3+ beta

Sends a message to the transport extension.

## Declaration

```swift
final func send(message: AccessoryMessage) async throws
```

## Parameters

- `message`: An accessory message.

<a id="discussion"></a>

## Discussion

This method conforms to [AccessoryFeatureSession](../../accessoryfeaturesession.md) but always throws [AccessoryTransportSession.Error.unsupported](../../accessorytransportsession/error/unsupported.md); call [send(data:)](send%28data_%29.md) instead to send data to the transport extension.

## See Also

### Sending data

- [send(data:)](send%28data_%29.md): Beta. Sends data to the transport extension within a session.
