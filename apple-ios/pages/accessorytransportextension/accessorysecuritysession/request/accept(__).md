> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorysecuritysession/request/accept(_:)](https://developer.apple.com/documentation/accessorytransportextension/accessorysecuritysession/request/accept(_:))

# accept(\_:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Accepts the session request with an event handler.

## Declaration

```swift
final func accept<Handler>(_ sessionRequestHandler: () -> Handler) -> AccessorySecuritySession.Request.Decision where Handler : AccessorySecuritySession.EventHandler
```

## Parameters

- `sessionRequestHandler`: A closure that creates and returns an event handler.

## Mentioned In

- [Receiving iOS notifications on an accessory](../../receiving-ios-notifications-on-an-accessory.md)

<a id="discussion"></a>

## Discussion

The system invokes the handler with security events throughout the key exchange process.

## See Also

### Responding to the request

- [reject(error:)](reject%28error_%29.md): Rejects the session request with an optional error.
- [AccessorySecuritySession.Request.Decision](decision.md): A structure that represents the decision to accept or reject a session request.
