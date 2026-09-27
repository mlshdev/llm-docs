> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorysecuritysession/eventhandler/sessioninvalidated(error:)

# sessionInvalidated(error:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Handles session invalidation.

## Declaration

```swift
func sessionInvalidated(error: AccessorySecuritySession.Error?)
```

## Parameters

- `error`: An optional error that indicates the reason for invalidation.

<a id="discussion"></a>

## Discussion

Clean up any stored key material when the system calls this method.
