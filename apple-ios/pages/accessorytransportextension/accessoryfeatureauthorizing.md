> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeatureauthorizing

# AccessoryFeatureAuthorizing

**Framework:** Accessory Transport Extension  
**Kind:** Protocol  
**Availability:** iOS 27.3+ beta

A feature that is authorized separately on each accessory.

## Declaration

```swift
protocol AccessoryFeatureAuthorizing
```

## Topics

### Type Aliases

- [AccessoryFeatureAuthorizing.AuthorizationStatus](accessoryfeatureauthorizing/authorizationstatus.md): Beta. The authorization status of this feature.

### Type Methods

- [authorizationStatus(for:)](accessoryfeatureauthorizing/authorizationstatus%28for_%29.md): Beta. The feature’s current authorization status for an accessory.
- [requestAuthorization(for:)](accessoryfeatureauthorizing/requestauthorization%28for_%29.md): Beta. Requests authorization of this feature for an accessory. An authorization that has already been decided is returned unchanged.

## Relationships

### Conforming Types

- [AccessoryGPUWorker](accessorygpuworker.md)
- [AccessoryWorker](accessoryworker.md)
