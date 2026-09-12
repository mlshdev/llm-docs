> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedapplibrary/managedapps/asynciterator/element](https://developer.apple.com/documentation/managedappdistribution/managedapplibrary/managedapps/asynciterator/element)

# ManagedAppLibrary.ManagedApps.AsyncIterator.Element

**Framework:** ManagedAppDistribution  
**Kind:** Type Alias  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 2.4+

The type of element this asynchronous sequence produces.

## Declaration

```swift
typealias Element = Result<[ManagedApp], ManagedAppDistributionError>
```

## See Also

### Iterating

- [next()](next%28%29.md): Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.
