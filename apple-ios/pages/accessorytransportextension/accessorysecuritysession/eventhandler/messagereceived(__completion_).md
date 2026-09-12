> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorysecuritysession/eventhandler/messagereceived(_:completion:)](https://developer.apple.com/documentation/accessorytransportextension/accessorysecuritysession/eventhandler/messagereceived(_:completion:))

# messageReceived(\_:completion:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Handles incoming key material from the system during key exchange.

## Declaration

```swift
func messageReceived(_ message: SecurityMessage, completion: @escaping @Sendable (AccessoryMessage.Result) -> Void)
```

## Parameters

- `message`: A security message containing cryptographic key material.
- `completion`: A closure to call when message processing completes.

## Mentioned In

- [Receiving iOS notifications on an accessory](../../receiving-ios-notifications-on-an-accessory.md)

<a id="discussion"></a>

## Discussion

The system calls this method with a [SecurityMessage](../../securitymessage.md) containing [SecurityMessage.KeyType.encapsulatedKey](../../securitymessage/keytype-swift.enum/encapsulatedkey.md) after receiving your accessory’s public key. Forward the key material to your accessory via Bluetooth. Call the completion handler with [AccessoryMessage.Result.success](../../accessorymessage/result/success.md) if transmission succeeds, or [AccessoryMessage.Result.failure(\_:)](../../accessorymessage/result/failure%28__%29.md) if an error occurs.
