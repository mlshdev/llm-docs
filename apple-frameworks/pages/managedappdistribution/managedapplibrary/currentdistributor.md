> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedappdistribution/managedapplibrary/currentdistributor

# currentDistributor

**Framework:** ManagedAppDistribution  
**Kind:** Type Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 2.4+

The library provider for managed apps on this device.

## Declaration

```swift
static let currentDistributor: ManagedAppLibrary
```

<a id="discussion"></a>

## Discussion

This is a singleton object.

## See Also

### Obtaining library information

- [availableApps](availableapps.md): The current managed apps available to this device.
- [ManagedAppLibrary.ManagedApps](managedapps.md): An array of managed apps that updates as apps become available or unavailable.
