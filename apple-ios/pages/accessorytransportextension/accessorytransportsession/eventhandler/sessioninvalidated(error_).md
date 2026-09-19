> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/eventhandler/sessioninvalidated(error:)

# sessionInvalidated(error:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Handles session invalidation.

## Declaration

```swift
func sessionInvalidated(error: AccessoryTransportSession.Error?)
```

## Parameters

- `error`: An optional error that indicates the reason for invalidation.

<a id="discussion"></a>

## Discussion

Clean up connection state and resources when the system calls this method.
