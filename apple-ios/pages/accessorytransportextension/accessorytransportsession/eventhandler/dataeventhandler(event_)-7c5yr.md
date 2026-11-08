> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/eventhandler/dataeventhandler(event:)-7c5yr

# dataEventHandler(event:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.4+

Handles events that address incoming data sent to the accessory.

## Declaration

```swift
func dataEventHandler(event: AccessoryTransportSession.DataEvent)
```

## Parameters

- `event`: A data event that contains either plaintext or encrypted data.

<a id="discussion"></a>

## Discussion

Implement this method to relay data to your accessory over Bluetooth or another transport mechanism.
