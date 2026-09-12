> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedapplibrary](https://developer.apple.com/documentation/managedappdistribution/managedapplibrary)

# ManagedAppLibrary

**Framework:** ManagedAppDistribution  
**Kind:** Class  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 2.4+

A representation of a library of managed apps.

## Declaration

```swift
final class ManagedAppLibrary
```

## Mentioned In

- [Fetching and displaying managed apps](fetching-and-displaying-managed-apps.md)

## Topics

### Obtaining library information

- [availableApps](managedapplibrary/availableapps.md): The current managed apps available to this device.
- [ManagedAppLibrary.ManagedApps](managedapplibrary/managedapps.md): An array of managed apps that updates as apps become available or unavailable.
- [currentDistributor](managedapplibrary/currentdistributor.md): The library provider for managed apps on this device.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Fetching and displaying managed apps](fetching-and-displaying-managed-apps.md): Provide a consistent app presentation when displaying managed apps.
- [ManagedApp](managedapp.md): A representation of a managed app.
