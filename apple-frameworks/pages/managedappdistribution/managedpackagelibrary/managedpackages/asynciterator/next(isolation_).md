> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedpackagelibrary/managedpackages/asynciterator/next(isolation:)](https://developer.apple.com/documentation/managedappdistribution/managedpackagelibrary/managedpackages/asynciterator/next(isolation:))

# next(isolation:)

**Framework:** ManagedAppDistribution  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 26.4+ · macOS 26.4+

Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.

## Declaration

```swift
func next(isolation actor: isolated (any Actor)?) async throws(ManagedPackageLibrary.ManagedPackages.AsyncIterator.Failure) -> ManagedPackageLibrary.ManagedPackages.AsyncIterator.Element?
```
