> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedappdistribution/managedpackagelibrary/managedpackages/asynciterator

# ManagedPackageLibrary.ManagedPackages.AsyncIterator

**Framework:** ManagedAppDistribution  
**Kind:** Structure  
**Availability:** Mac Catalyst 26.4+ · macOS 26.4+

The iterator for managed apps.

## Declaration

```swift
struct AsyncIterator
```

## Topics

### Instance Methods

- [next()](asynciterator/next%28%29.md): Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.
- [next(isolation:)](asynciterator/next%28isolation_%29.md): Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.

### Type Aliases

- [ManagedPackageLibrary.ManagedPackages.AsyncIterator.Element](asynciterator/element.md): The type of element this asynchronous sequence produces.

## Relationships

### Conforms To

- [AsyncIteratorProtocol](https://developer.apple.com/documentation/swift/asynciteratorprotocol)
