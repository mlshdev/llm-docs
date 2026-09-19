> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedappdistribution/managedpackagelibrary/managedpackages

# ManagedPackageLibrary.ManagedPackages

**Framework:** ManagedAppDistribution  
**Kind:** Structure  
**Availability:** Mac Catalyst 26.4+ · macOS 26.4+

An array of managed apps that updates as apps become available or unavailable.

## Declaration

```swift
struct ManagedPackages
```

## Topics

### Structures

- [ManagedPackageLibrary.ManagedPackages.AsyncIterator](managedpackages/asynciterator.md): The iterator for managed apps.

### Instance Methods

- [makeAsyncIterator()](managedpackages/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces results from this asynchronous sequence.

### Type Aliases

- [ManagedPackageLibrary.ManagedPackages.Element](managedpackages/element.md): The type of element this asynchronous sequence produces.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
