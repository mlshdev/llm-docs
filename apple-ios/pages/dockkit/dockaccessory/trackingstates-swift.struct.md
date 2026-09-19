> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dockkit/dockaccessory/trackingstates-swift.struct

# DockAccessory.TrackingStates

**Framework:** DockKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

An asynchronous sequence of tracking session states.

## Declaration

```swift
struct TrackingStates
```

## Topics

### Structures

- [DockAccessory.TrackingStates.Iterator](trackingstates-swift.struct/iterator.md): An object that allows iteration over tracking states.

### Instance Methods

- [makeAsyncIterator()](trackingstates-swift.struct/makeasynciterator%28%29.md): Create and return an iterator that traverses the list of tracking session states.

### Type Aliases

- [DockAccessory.TrackingStates.Element](trackingstates-swift.struct/element.md): A tracking session state.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
