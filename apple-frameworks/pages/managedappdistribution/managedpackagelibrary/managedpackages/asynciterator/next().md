> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedpackagelibrary/managedpackages/asynciterator/next()](https://developer.apple.com/documentation/managedappdistribution/managedpackagelibrary/managedpackages/asynciterator/next())

# next()

**Framework:** ManagedAppDistribution  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 26.4+ · macOS 26.4+

Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.

## Declaration

```swift
mutating func next() async throws -> ManagedPackageLibrary.ManagedPackages.AsyncIterator.Element?
```
