> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedpackagelibrary](https://developer.apple.com/documentation/managedappdistribution/managedpackagelibrary)

# ManagedPackageLibrary

**Framework:** ManagedAppDistribution  
**Kind:** Class  
**Availability:** Mac Catalyst 26.4+ · macOS 26.4+

A representation of a library of managed packages.

## Declaration

```swift
final class ManagedPackageLibrary
```

## Topics

### Structures

- [ManagedPackageLibrary.ManagedPackages](managedpackagelibrary/managedpackages.md): An array of managed apps that updates as apps become available or unavailable.

### Instance Properties

- [availablePackages](managedpackagelibrary/availablepackages.md): The current managed apps available to this device.

### Type Properties

- [currentDistributor](managedpackagelibrary/currentdistributor.md): The library provider for managed apps on this device.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
