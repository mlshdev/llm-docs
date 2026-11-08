> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeatureauthorizing/authorizationstatus(for:)-5avao

# authorizationStatus(for:)

**Framework:** Accessory Transport Extension  
**Kind:** Type Method  
**Availability:** iOS 27.3+ beta

The feature’s current authorization status for an accessory.

## Declaration

```swift
static func authorizationStatus(for accessory: ASAccessory) async throws -> Self.AuthorizationStatus
```
