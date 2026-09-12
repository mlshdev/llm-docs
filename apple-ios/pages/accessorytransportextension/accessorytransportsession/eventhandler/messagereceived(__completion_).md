> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransportsession/eventhandler/messagereceived(_:completion:)](https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/eventhandler/messagereceived(_:completion:))

# messageReceived(\_:completion:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Handles incoming messages for transmission to the accessory.

## Declaration

```swift
func messageReceived(_ message: TransportMessage, completion: @escaping @Sendable (AccessoryMessage.Result) -> Void)
```

## Parameters

- `message`: A transport message containing data to send to the accessory.
- `completion`: A closure to call when message transmission completes.

## Mentioned In

- [Receiving iOS notifications on an accessory](../../receiving-ios-notifications-on-an-accessory.md)

<a id="discussion"></a>

## Discussion

The system calls this method to deliver encrypted notification data for transmission to your accessory. Relay the message’s data to your accessory over Bluetooth or another transport. Call the completion handler with [AccessoryMessage.Result.success](../../accessorymessage/result/success.md) if transmission succeeds, [AccessoryMessage.Result.failure(\_:)](../../accessorymessage/result/failure%28__%29.md) with [AccessoryMessage.Error.transportFailed](../../accessorymessage/error/transportfailed.md) if the transport fails but may recover, or [AccessoryMessage.Error.transportUnavailable](../../accessorymessage/error/transportunavailable.md) if the transport is unavailable.

If you don’t call the completion handler, the system assumes successful delivery and won’t retry the message.

## See Also

### Handling data events

- [dataEventHandler(event:)](dataeventhandler%28event_%29.md): Deprecated. Handles events that address incoming data destined for the accessory.
