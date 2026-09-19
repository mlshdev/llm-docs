> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsecurity/accept(sessionrequest:)

# accept(sessionRequest:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Evaluates incoming security session requests for an accessory.

## Declaration

```swift
func accept(sessionRequest: AccessorySecuritySession.Request) -> AccessorySecuritySession.Request.Decision
```

## Parameters

- `sessionRequest`: A request object that represents the incoming session.

<a id="discussion"></a>

## Discussion

Return a decision by calling either [accept(\_:)](../accessorysecuritysession/request/accept%28__%29.md) or [reject(error:)](../accessorysecuritysession/request/reject%28error_%29.md) on the request.
