> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedapplibrary/managedapps/asynciterator](https://developer.apple.com/documentation/managedappdistribution/managedapplibrary/managedapps/asynciterator)

# ManagedAppLibrary.ManagedApps.AsyncIterator

**Framework:** ManagedAppDistribution  
**Kind:** Structure  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 2.4+

The iterator for managed apps.

## Declaration

```swift
struct AsyncIterator
```

## Topics

### Iterating

- [ManagedAppLibrary.ManagedApps.AsyncIterator.Element](asynciterator/element.md): The type of element this asynchronous sequence produces.
- [next()](asynciterator/next%28%29.md): Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.

### Instance Methods

- [next(isolation:)](asynciterator/next%28isolation_%29.md): Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.

## Relationships

### Conforms To

- [AsyncIteratorProtocol](https://developer.apple.com/documentation/swift/asynciteratorprotocol)

## See Also

### Obtaining managed apps

- [ManagedAppLibrary.ManagedApps.Element](element.md): The type of element this asynchronous sequence produces.
- [makeAsyncIterator()](makeasynciterator%28%29.md): Creates the asynchronous iterator that produces results from this asynchronous sequence.
