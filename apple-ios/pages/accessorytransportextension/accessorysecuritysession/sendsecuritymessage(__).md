> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorysecuritysession/sendsecuritymessage(_:)](https://developer.apple.com/documentation/accessorytransportextension/accessorysecuritysession/sendsecuritymessage(_:))

# sendSecurityMessage(\_:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Sends a security message to the system.

## Declaration

```swift
func sendSecurityMessage(_ message: SecurityMessage) throws(AccessorySecuritySession.Error)
```

## Parameters

- `message`: A security message containing key material.

<a id="discussion"></a>

## Discussion

Use this method to initiate key exchange by sending a [SecurityMessage](../securitymessage.md) with [SecurityMessage.KeyType.publicKey](../securitymessage/keytype-swift.enum/publickey.md). The system responds by calling your handler’s [messageReceived(\_:completion:)](eventhandler/messagereceived%28__completion_%29.md) method with encapsulated key material.

## See Also

### Managing the session life cycle

- [cancel(error:)](cancel%28error_%29.md): Cancels the security session.
