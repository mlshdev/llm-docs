> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeatureauthorizing/requestauthorization(for:)

# requestAuthorization(for:)

**Framework:** Accessory Transport Extension  
**Kind:** Type Method  
**Availability:** iOS 27.3+ beta

Requests authorization of this feature for an accessory. An authorization that has already been decided is returned unchanged.

## Declaration

```swift
static func requestAuthorization(for accessory: ASAccessory) async throws -> Self.AuthorizationStatus
```

## Default Implementations

### AccessoryFeatureAuthorizing Implementations

- [requestAuthorization(for:)](requestauthorization%28for_%29-7595m.md): Beta. Conforms when `Self` conforms to `AccessoryFeature`. Requests authorization of this feature for an accessory. An authorization that has already been decided is returned unchanged.
