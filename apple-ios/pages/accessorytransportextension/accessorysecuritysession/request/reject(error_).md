> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorysecuritysession/request/reject(error:)](https://developer.apple.com/documentation/accessorytransportextension/accessorysecuritysession/request/reject(error:))

# reject(error:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Rejects the session request with an optional error.

## Declaration

```swift
final func reject(error: AccessorySecuritySession.Error?) -> AccessorySecuritySession.Request.Decision
```

## Parameters

- `error`: An optional error that indicates the reason for rejection.

## See Also

### Responding to the request

- [accept(\_:)](accept%28__%29.md): Accepts the session request with an event handler.
- [AccessorySecuritySession.Request.Decision](decision.md): A structure that represents the decision to accept or reject a session request.
