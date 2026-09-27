> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorysecuritysession/cancel(error:)

# cancel(error:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Cancels the security session.

## Declaration

```swift
func cancel(error: AccessorySecuritySession.Error?)
```

## Parameters

- `error`: An optional error that indicates the reason for cancellation.

## See Also

### Managing the session life cycle

- [sendSecurityMessage(\_:)](sendsecuritymessage%28__%29.md): Sends a security message to the system.
