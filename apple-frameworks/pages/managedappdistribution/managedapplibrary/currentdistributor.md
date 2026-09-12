> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedapplibrary/currentdistributor](https://developer.apple.com/documentation/managedappdistribution/managedapplibrary/currentdistributor)

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
