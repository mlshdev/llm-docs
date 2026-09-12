> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit/audioaccessoryheadtracking/handler/handleaccessorysensormessage(_:)](https://developer.apple.com/documentation/audioaccessorykit/audioaccessoryheadtracking/handler/handleaccessorysensormessage(_:))

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
