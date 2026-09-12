> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/outputs-swift.struct](https://developer.apple.com/documentation/realitykit/photogrammetrysession/outputs-swift.struct)

# PhotogrammetrySession.Outputs

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An asynchronous sequence of session-related updates.

## Declaration

```swift
struct Outputs
```

## Topics

### Iterating the collection

- [makeAsyncIterator()](outputs-swift.struct/makeasynciterator%28%29.md): Creates an asynchronous iterator for the collection.

### Structures

- [PhotogrammetrySession.Outputs.Iterator](outputs-swift.struct/iterator.md): An object for iterating over published output objects.

### Type Aliases

- [PhotogrammetrySession.Outputs.Element](outputs-swift.struct/element.md): The type of element used for Photogrammetry Session updates.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
