> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audioaccessorykit/audioaccessoryheadtracking/handler/handleaccessorysensormessage(_:)

# handleAccessorySensorMessage(\_:)

**Framework:** AudioAccessoryKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+

Called when a `TransportMessage` arrives from the accessory’s transport extension on the inbound channel.

## Declaration

```swift
func handleAccessorySensorMessage(_ message: TransportMessage)
```

## Parameters

- `message`: The transport-layer message as delivered by `DeviceAccess`.

<a id="discussion"></a>

## Discussion

Use this to receive control-plane payloads from your `AccessoryTransportExtension` (e.g. configuration acknowledgements, vendor-specific messages). For raw IMU sample delivery, the extension should call `Session.sendDataToAudioExtension(_:)` directly.
