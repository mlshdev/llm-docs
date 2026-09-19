> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedappdistribution/managedapplibrary/managedapps/asynciterator/next(isolation:)

# next(isolation:)

**Framework:** ManagedAppDistribution  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 2.4+

Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.

## Declaration

```swift
func next(isolation actor: isolated (any Actor)?) async throws(ManagedAppLibrary.ManagedApps.AsyncIterator.Failure) -> ManagedAppLibrary.ManagedApps.AsyncIterator.Element?
```
