> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/eventhandler/invalidationhandler(error:)

# invalidationHandler(error:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ (deprecated in 26.5)

Handles session invalidation.

## Declaration

```swift
func invalidationHandler(error: AccessoryTransportSession.Error?)
```

## Parameters

- `error`: An optional error that indicates the reason for cancellation.

## Default Implementations

### AccessoryTransportSession.EventHandler Implementations

- [invalidationHandler(error:)](invalidationhandler%28error_%29-3t0i7.md): Session has been invalidated.
