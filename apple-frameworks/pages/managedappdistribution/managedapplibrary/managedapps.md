> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedapplibrary/managedapps](https://developer.apple.com/documentation/managedappdistribution/managedapplibrary/managedapps)

# ManagedAppLibrary.ManagedApps

**Framework:** ManagedAppDistribution  
**Kind:** Structure  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 2.4+

An array of managed apps that updates as apps become available or unavailable.

## Declaration

```swift
struct ManagedApps
```

## Topics

### Obtaining managed apps

- [ManagedAppLibrary.ManagedApps.AsyncIterator](managedapps/asynciterator.md): The iterator for managed apps.
- [ManagedAppLibrary.ManagedApps.Element](managedapps/element.md): The type of element this asynchronous sequence produces.
- [makeAsyncIterator()](managedapps/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces results from this asynchronous sequence.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Obtaining library information

- [availableApps](availableapps.md): The current managed apps available to this device.
- [currentDistributor](currentdistributor.md): The library provider for managed apps on this device.
