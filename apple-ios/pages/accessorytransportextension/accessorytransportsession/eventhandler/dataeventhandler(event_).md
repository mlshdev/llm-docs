> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransportsession/eventhandler/dataeventhandler(event:)](https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/eventhandler/dataeventhandler(event:))

# dataEventHandler(event:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ (deprecated in 26.5)

Handles events that address incoming data destined for the accessory.

## Declaration

```swift
func dataEventHandler(event: AccessoryTransportSession.DataEvent)
```

## Parameters

- `event`: A data event that contains either plaintext or encrypted data.

<a id="discussion"></a>

## Discussion

Implement this method to relay data to your accessory over Bluetooth or another transport mechanism.

## Default Implementations

### AccessoryTransportSession.EventHandler Implementations

- [dataEventHandler(event:)](dataeventhandler%28event_%29-7c5yr.md)

## See Also

### Handling data events

- [messageReceived(\_:completion:)](messagereceived%28__completion_%29.md): Handles incoming messages for transmission to the accessory.
