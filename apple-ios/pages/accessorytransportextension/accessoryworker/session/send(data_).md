> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryworker/session/send(data:)

# send(data:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 27.3+ beta

Sends data to the transport extension within a session.

## Declaration

```swift
final func send(data: Data) async throws
```

## Parameters

- `data`: The data to send.

<a id="discussion"></a>

## Discussion

The Accessory Transport Extension framework doesn’t add additional encryption to the data, so take steps to protect sensitive data before you send it.

## See Also

### Sending data

- [send(message:)](send%28message_%29.md): Beta. Sends a message to the transport extension.
